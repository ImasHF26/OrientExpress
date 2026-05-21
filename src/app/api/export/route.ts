import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const format = searchParams.get('format') || 'csv'

    // Simple security check to protect student personal data
    if (secret !== 'capfuture2026') {
      return new Response('Accès non autorisé. Clé secrète incorrecte.', { status: 401 })
    }

    const students = await db.student.findMany({
      orderBy: { createdAt: 'desc' },
    })

    if (format === 'json') {
      return NextResponse.json(students)
    }

    // CSV Format
    const headers = ['ID', 'Nom', 'Téléphone', 'Niveau', 'Filière', 'Intérêt', 'Établissement', 'Date Inscription']
    const rows = students.map((s) => [
      s.id,
      s.nom,
      s.telephone,
      s.niveau,
      s.filiere,
      s.interet,
      s.etablissement,
      s.createdAt.toISOString(),
    ])

    // Convert to CSV string (with UTF-8 BOM for Excel French accent support)
    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(',')),
    ].join('\n')

    // Add UTF-8 BOM so Excel opens it with correct accents (é, à, etc.)
    const bom = '\uFEFF'
    
    return new Response(bom + csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="inscriptions_cap_future.csv"',
      },
    })
  } catch (error) {
    console.error('Erreur d\'export:', error)
    return new Response('Erreur lors de l\'export des données.', { status: 500 })
  }
}
