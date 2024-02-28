import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const securedURLs = [
  `${process.env.URL}/admin/news`,
  `${process.env.URL}/admin/catelogs`,
  `${process.env.URL}/admin/batteries`,
  `${process.env.URL}/admin/esg-pdf`,
]
export function middleware(request: NextRequest) {
  if (!request.cookies.has('session') && securedURLs.indexOf(request.url) !== -1) {
    //admin/으로 시작하는 url에 접근하는 중일때
    console.log('쿠키가 없습니다.')
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  console.log(securedURLs.indexOf(request.url))
  return NextResponse.next()
}
