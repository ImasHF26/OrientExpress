import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import ExcelJS from 'exceljs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const format = searchParams.get('format') || 'excel'

    // Security check
    if (secret !== 'capfuture2026') {
      return new Response('Accès non autorisé. Clé secrète incorrecte.', { status: 401 })
    }

    const students = await db.student.findMany({
      orderBy: { createdAt: 'desc' },
    })

    if (format === 'raw_json') {
      return NextResponse.json(students)
    }

    if (format === 'csv') {
      const headers = ['ID', 'Nom', 'Téléphone', 'Ville', 'Niveau', 'Filière', 'Intérêt', 'Établissement', 'Date Inscription']
      const rows = students.map((s) => [
        s.id,
        s.nom,
        s.telephone,
        s.ville,
        s.niveau,
        s.filiere,
        s.interet,
        s.etablissement,
        s.createdAt.toISOString(),
      ])
      const csvContent = [
        headers.join(','),
        ...rows.map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(',')),
      ].join('\n')
      const bom = '\uFEFF'
      return new Response(bom + csvContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="inscriptions_cap_future.csv"',
        },
      })
    }

    // Default, format=json, format=excel, format=xlsx -> Excel (.xlsx) file
    const workbook = new ExcelJS.Workbook()
    workbook.creator = 'OrientExpress'
    workbook.lastModifiedBy = 'OrientExpress'
    workbook.created = new Date()

    const worksheet = workbook.addWorksheet('Inscriptions', {
      views: [{ showGridLines: true }],
    })

    // Define columns with widths and keys
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 28 },
      { header: 'Nom & Prénom', key: 'nom', width: 25 },
      { header: 'Téléphone', key: 'telephone', width: 18 },
      { header: 'Ville', key: 'ville', width: 18 },
      { header: 'Niveau d\'études', key: 'niveau', width: 22 },
      { header: 'Filière', key: 'filiere', width: 22 },
      { header: 'Domaine d\'intérêt', key: 'interet', width: 25 },
      { header: 'Établissement', key: 'etablissement', width: 25 },
      { header: 'Statut Contact', key: 'contacted', width: 18 },
      { header: 'Notes', key: 'notes', width: 30 },
      { header: 'Date d\'inscription', key: 'createdAt', width: 22 },
    ]

    // Style header row
    const headerRow = worksheet.getRow(1)
    headerRow.height = 30
    headerRow.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: 'FFFFFF' } }
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '1E293B' }, // Slate-800 dark navy header background
    }
    headerRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }

    // Populate data rows
    students.forEach((s) => {
      const formattedDate = s.createdAt
        ? new Date(s.createdAt).toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : ''

      const row = worksheet.addRow({
        id: s.id,
        nom: s.nom || '-',
        telephone: s.telephone || '-',
        ville: s.ville || '-',
        niveau: s.niveau || '-',
        filiere: s.filiere || '-',
        interet: s.interet || '-',
        etablissement: s.etablissement || '-',
        contacted: s.contacted ? 'Oui' : 'Non',
        notes: s.notes || '',
        createdAt: formattedDate,
      })

      row.height = 22
      row.font = { name: 'Segoe UI', size: 10 }
      row.alignment = { vertical: 'middle', horizontal: 'left' }

      // Align specific cells
      row.getCell('telephone').alignment = { vertical: 'middle', horizontal: 'center' }
      row.getCell('ville').alignment = { vertical: 'middle', horizontal: 'center' }
      row.getCell('contacted').alignment = { vertical: 'middle', horizontal: 'center' }
      row.getCell('createdAt').alignment = { vertical: 'middle', horizontal: 'center' }
    })

    // Apply alternate row shading and subtle grid borders
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (rowNumber === 1) return

      const isEven = rowNumber % 2 === 0
      row.eachCell({ includeEmpty: true }, (cell) => {
        if (isEven) {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'F8FAFC' },
          }
        }
        cell.border = {
          top: { style: 'thin', color: { argb: 'E2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'E2E8F0' } },
          left: { style: 'thin', color: { argb: 'E2E8F0' } },
          right: { style: 'thin', color: { argb: 'E2E8F0' } },
        }
      })
    })

    const buffer = await workbook.xlsx.writeBuffer()

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="inscriptions_cap_future.xlsx"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    console.error('Erreur d\'export:', error)
    return new Response('Erreur lors de l\'export des données.', { status: 500 })
  }
}
