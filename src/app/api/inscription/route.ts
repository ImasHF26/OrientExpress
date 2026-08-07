import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { nom, telephone, ville, niveau, filiere, interet, etablissement } = body

    // Validation des champs requis (nom + telephone + niveau minimum)
    if (!nom || !telephone || !niveau) {
      return NextResponse.json(
        { success: false, error: 'Nom, téléphone et niveau sont requis.' },
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
          ville: ville || '',
          niveau,
          filiere: filiere || '',
          interet: interet || '',
          etablissement: etablissement || '',
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
        ville: ville || '',
        niveau,
        filiere: filiere || '',
        interet: interet || '',
        etablissement: etablissement || '',
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

// GET: récupérer les inscriptions
export async function GET() {
  try {
    const students = await db.student.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
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

// PATCH: mettre à jour contacted ou notes d'un étudiant
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, contacted, notes } = body

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID requis.' }, { status: 400 })
    }

    const updated = await db.student.update({
      where: { id },
      data: {
        ...(typeof contacted === 'boolean' ? { contacted } : {}),
        ...(typeof notes === 'string' ? { notes } : {}),
      },
    })

    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 })
  }
}

// DELETE: supprimer un étudiant
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID requis.' }, { status: 400 })
    }

    await db.student.delete({ where: { id } })
    return NextResponse.json({ success: true, message: 'Étudiant supprimé.' })
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 })
  }
}
