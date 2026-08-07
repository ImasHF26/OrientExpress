import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'capfuture2026'
const AUTH_COOKIE_NAME = 'admin_session'
const AUTH_TOKEN_VALUE = 'capfuture_authenticated_token_2026'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Mot de passe incorrect.' },
        { status: 401 }
      )
    }

    const cookieStore = await cookies()
    cookieStore.set(AUTH_COOKIE_NAME, AUTH_TOKEN_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days session
      path: '/',
    })

    return NextResponse.json({ success: true, message: 'Connexion réussie.' })
  } catch (error) {
    console.error('Erreur authentification admin:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get(AUTH_COOKIE_NAME)

    const authenticated = session?.value === AUTH_TOKEN_VALUE

    return NextResponse.json({ authenticated })
  } catch {
    return NextResponse.json({ authenticated: false })
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete(AUTH_COOKIE_NAME)
    return NextResponse.json({ success: true, message: 'Déconnexion réussie.' })
  } catch {
    return NextResponse.json({ success: false, error: 'Erreur déconnexion.' }, { status: 500 })
  }
}
