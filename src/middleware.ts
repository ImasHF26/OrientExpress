import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect /admin/stats and /admin/inscrits (except /admin/login and /api)
  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('admin_session')
    const isAuthenticated = sessionCookie?.value === 'capfuture_authenticated_token_2026'

    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('from', path)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Redirect /admin/login to /admin/stats if already logged in
  if (path === '/admin/login') {
    const sessionCookie = request.cookies.get('admin_session')
    const isAuthenticated = sessionCookie?.value === 'capfuture_authenticated_token_2026'

    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/admin/stats', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
