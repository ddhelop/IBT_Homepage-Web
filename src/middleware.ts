import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/admin/news', '/admin/catelogs', '/admin/esg-pdf', '/admin/batteries'],
}

export function middleware(request: NextRequest) {
  if (!request.cookies.has('session')) {
    //admin/으로 시작하는 url에 접근하는 중일때
    return NextResponse.redirect(new URL('/admin?alert=로그인 후 이용가능한 서비스입니다.', request.url))
  }
  return NextResponse.next()
}
