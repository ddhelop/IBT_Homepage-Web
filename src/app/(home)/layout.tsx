import type { Metadata } from 'next'
import '../globals.css'
import { notoSansKr } from '@/lib/fonts'
import Footer from '@/components/Footer'
import RecoilContextProvider from '@/context/recoil-context'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '(주)아이비티',
  description:
    'IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며, 새로운 에너지 라이프스타일을 창조하고 있습니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content={'public/image/Logo.png'}></meta>
      <body className={`${notoSansKr.className} transition  text-gray-950 relative`}>
        <RecoilContextProvider>
          <Header />
          {/* <Analytics /> */}
          {/* <Analytics /> */}
          {children}
          <Footer />
        </RecoilContextProvider>
      </body>
    </html>
  )
}
