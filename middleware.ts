import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('authjs.csrf-token')
    console.log('Cookie: nextjs', cookie?.value)
    const allCookies = request.cookies.getAll()
    console.log('NewAllCookies', allCookies)

    // return NextResponse.redirect(new URL('/about', request.url))
}

export const config = {
    matcher: '/about',
}