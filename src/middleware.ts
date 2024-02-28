import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { securedURLs } from './lib/data'

export function middleware(request: NextRequest) {
  if (!request.cookies.has('session') && securedURLs.indexOf(request.url) !== -1) {
    console.log('쿠키가 없습니다.')
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  return NextResponse.next()
}
