import type { Metadata } from 'next'

import '../../globals.css'
import { cls, notoSansKr, roboto } from '@/lib/fonts'
import AdminHeader from '@/components/admin/AdminHeader'
import RecoilContextProvider from '@/context/recoil-context'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: '(주)아이비티 어드민페이지',
  description: '(주)아이비티 어드민페이지',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cls(notoSansKr.className, roboto.variable)} transition text-gray-950 flex`}>
        <AdminHeader />
        <div className="ml-64" />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
