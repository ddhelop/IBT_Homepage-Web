import { Metadata } from 'next'
import IntroComponent5 from '@/components/intro/IntroComponent5.client'
import IntroComponent6 from '@/components/intro/IntroComponent6'
import IntroComponent7 from '@/components/intro/IntroComponent7'
import { fetchPostData } from '@/lib/action'
import ContentBlocks from '@/components/intro/IntroContentBlock.client'

export const metadata: Metadata = {
  title: 'IBT intro',
  description: 'IBT intro 인트로',
}

const IntroPage = async () => {
  const res = await fetchPostData(0) //데이터 불러오는 딜레이가 아님

  return (
    <div className="flex flex-col w-full">
      {/* 1 ~ 4 */}
      <ContentBlocks />

      {/* 5th */}
      <IntroComponent5 />

      {/* 6th */}
      <IntroComponent6 />

      {/* 7th */}
      <IntroComponent7 data={res.data} />
    </div>
  )
}

export default IntroPage
