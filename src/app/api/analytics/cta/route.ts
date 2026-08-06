import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ctaId, label, section, page } = body

    if (!ctaId || !label) {
      return NextResponse.json(
        { success: false, error: 'ctaId et label requis.' },
        { status: 400 }
      )
    }

    const userAgent = request.headers.get('user-agent') || undefined

    const clickEvent = await db.ctaClickEvent.create({
      data: {
        ctaId,
        label,
        section: section || 'Global',
        page: page || '/',
        userAgent,
      },
    })

    return NextResponse.json({ success: true, data: clickEvent }, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du clic CTA:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const totalClicks = await db.ctaClickEvent.count()
    const totalStudents = await db.student.count()

    const clicksBySection = await db.ctaClickEvent.groupBy({
      by: ['section'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
    })

    const clicksByCta = await db.ctaClickEvent.groupBy({
      by: ['ctaId', 'label'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 20,
    })

    const recentClicks = await db.ctaClickEvent.findMany({
      orderBy: { createdAt: 'desc' },
      take: 15,
    })

    const conversionRate = totalClicks > 0 ? ((totalStudents / totalClicks) * 100).toFixed(1) : '0.0'

    return NextResponse.json({
      success: true,
      stats: {
        totalClicks,
        totalStudents,
        conversionRate: `${conversionRate}%`,
        clicksBySection: clicksBySection.map((item) => ({
          section: item.section,
          count: item._count.id,
        })),
        clicksByCta: clicksByCta.map((item) => ({
          ctaId: item.ctaId,
          label: item.label,
          count: item._count.id,
        })),
        recentClicks,
      },
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des analytics CTA:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}
