import { Metadata } from 'next'
import IntroComponent5 from '@/components/intro/IntroComponent5.client'
import IntroComponent6 from '@/components/intro/IntroComponent6'
import IntroComponent7 from '@/components/intro/IntroComponent7'
import { fetchPostData } from '@/lib/action'
import ContentBlocks from '@/components/intro/IntroContentBlock.client'
import LogoComponent from '@/components/companyInfo/LogoComponent'
import IntroLogoComponent from '@/components/intro/IntroLogoComponent'
import IntroComponent4 from '@/components/intro/IntroComponent4'

export const metadata: Metadata = {
  title: 'IBT intro',
  description: 'IBT intro 인트로',
}

const IntroPage = async () => {
  const res = await fetchPostData(0) //데이터 불러오는 딜레이가 아님

  return (
    <div className="flex flex-col w-full">
      {/* 1 ~ 3 */}
      <ContentBlocks />

      {/* 4 */}
      <IntroComponent4 />

      {/* 5 */}
      <IntroComponent5 />

      {/* 6 */}
      <IntroComponent6 />

      {/* 7 */}
      <IntroComponent7 data={res.data} />
    </div>
  )
}

export default IntroPage
