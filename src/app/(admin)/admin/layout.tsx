import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import '../../globals.css'
import Link from 'next/link'
import { cls, notoSansKr, roboto } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'IBT Admin',
  description:
    'IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며, 새로운 에너지 라이프스타일을 창조하고 있습니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${cls(notoSansKr.className, roboto.variable)} transition text-gray-950 flex`}>
      <div>
        <ul className="text-lg">
          <li>
            <Link href="/admin/catelogs">News</Link>
          </li>
          <li>Catalogs</li>
        </ul>
      </div>
      {children}
    </div>
  )
}
