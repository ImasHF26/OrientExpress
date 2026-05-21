import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { nom, telephone, niveau, filiere, interet, etablissement } = body

    // Validation des champs requis
    if (!nom || !telephone || !niveau || !filiere || !interet || !etablissement) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    // Vérifier si un étudiant avec le même téléphone existe déjà
    const existing = await db.student.findFirst({
      where: { telephone },
    })

    if (existing) {
      // Mettre à jour l'inscription existante
      const updated = await db.student.update({
        where: { id: existing.id },
        data: {
          nom,
          niveau,
          filiere,
          interet,
          etablissement,
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Inscription mise à jour avec succès.',
        data: updated,
        isUpdate: true,
      })
    }

    // Créer une nouvelle inscription
    const student = await db.student.create({
      data: {
        nom,
        telephone,
        niveau,
        filiere,
        interet,
        etablissement,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Inscription enregistrée avec succès !',
        data: student,
        isUpdate: false,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

// GET: récupérer les inscriptions (pour dashboard futur)
export async function GET() {
  try {
    const students = await db.student.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })

    return NextResponse.json({
      success: true,
      count: students.length,
      data: students,
    })
  } catch (error) {
    console.error('Erreur lors de la récupération:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}
