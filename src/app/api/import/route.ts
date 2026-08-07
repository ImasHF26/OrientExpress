import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import ExcelJS from 'exceljs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'Aucun fichier Excel fourni.' },
        { status: 400 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.load(arrayBuffer)

    const worksheet = workbook.worksheets[0]
    if (!worksheet) {
      return NextResponse.json(
        { success: false, error: 'Le fichier Excel ne contient aucune feuille.' },
        { status: 400 }
      )
    }

    let createdCount = 0
    let updatedCount = 0
    const errors: string[] = []

    // Read header row (row 1) to determine column indexes dynamically
    const headerRow = worksheet.getRow(1)
    const colIndexMap: Record<string, number> = {}

    headerRow.eachCell((cell, colNumber) => {
      const headerText = String(cell.value || '').toLowerCase().trim()
      if (headerText.includes('nom')) colIndexMap['nom'] = colNumber
      else if (headerText.includes('tél') || headerText.includes('tel') || headerText.includes('phone')) colIndexMap['telephone'] = colNumber
      else if (headerText.includes('ville')) colIndexMap['ville'] = colNumber
      else if (headerText.includes('niveau')) colIndexMap['niveau'] = colNumber
      else if (headerText.includes('filièr') || headerText.includes('filiere')) colIndexMap['filiere'] = colNumber
      else if (headerText.includes('intérêt') || headerText.includes('interet') || headerText.includes('domaine')) colIndexMap['interet'] = colNumber
      else if (headerText.includes('établissement') || headerText.includes('ecole') || headerText.includes('école')) colIndexMap['etablissement'] = colNumber
      else if (headerText.includes('notes') || headerText.includes('remarque')) colIndexMap['notes'] = colNumber
    })

    // Fallbacks if columns not found by header text
    if (!colIndexMap['nom']) colIndexMap['nom'] = 2 // Column B by default
    if (!colIndexMap['telephone']) colIndexMap['telephone'] = 3 // Column C by default
    if (!colIndexMap['ville']) colIndexMap['ville'] = 4 // Column D by default
    if (!colIndexMap['niveau']) colIndexMap['niveau'] = 5 // Column E by default
    if (!colIndexMap['filiere']) colIndexMap['filiere'] = 6 // Column F by default

    const rowCount = worksheet.rowCount

    for (let i = 2; i <= rowCount; i++) {
      const row = worksheet.getRow(i)
      const getVal = (colKey: string) => {
        const colNum = colIndexMap[colKey]
        if (!colNum) return ''
        const val = row.getCell(colNum).value
        if (!val) return ''
        if (typeof val === 'object') {
          return 'text' in val ? String(val.text || '') : JSON.stringify(val)
        }
        return String(val).trim()
      }

      const nom = getVal('nom')
      const telephone = getVal('telephone')
      const ville = getVal('ville')
      const niveau = getVal('niveau') || 'Non précisé'
      const filiere = getVal('filiere')
      const interet = getVal('interet')
      const etablissement = getVal('etablissement')
      const notes = getVal('notes')

      if (!nom || !telephone) {
        continue // Skip empty or invalid rows
      }

      try {
        const existing = await db.student.findFirst({
          where: { telephone },
        })

        if (existing) {
          await db.student.update({
            where: { id: existing.id },
            data: {
              nom,
              ville: ville || existing.ville,
              niveau: niveau || existing.niveau,
              filiere: filiere || existing.filiere,
              interet: interet || existing.interet,
              etablissement: etablissement || existing.etablissement,
              notes: notes ? `${existing.notes || ''}\n${notes}`.trim() : existing.notes,
            },
          })
          updatedCount++
        } else {
          await db.student.create({
            data: {
              nom,
              telephone,
              ville,
              niveau,
              filiere,
              interet,
              etablissement,
              notes,
            },
          })
          createdCount++
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          errors.push(`Ligne ${i}: ${err.message}`)
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Importation réussie : ${createdCount} nouveau(x) candidat(s) créé(s), ${updatedCount} mis à jour.`,
      stats: {
        created: createdCount,
        updated: updatedCount,
        errors,
      },
    })
  } catch (error) {
    console.error('Erreur importation Excel:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la lecture et de l\'importation du fichier Excel.' },
      { status: 500 }
    )
  }
}
