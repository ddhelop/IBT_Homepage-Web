import { contents } from '@/lib/data'
import { Metadata } from 'next'
import IntroComponent5 from '@/components/intro/IntroComponent5.client'
import IntroComponent6 from '@/components/intro/IntroComponent6'
import IntroComponent7 from '@/components/intro/IntroComponent7'
import ContentBlock from '@/components/intro/IntroContentBlock.client'

export const metadata: Metadata = {
  title: 'IBT intro',
  description: 'IBT intro 인트로',
}

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const IntroPage = async () => {
  const res = await getData()
  return (
    <div className="flex flex-col w-full">
      {/* 1 ~ 4 */}
      {contents.map((content, index) => (
        <ContentBlock key={index} title={content.title} text={content.text} background={content.background} />
      ))}

      {/* 5th */}
      <IntroComponent5 />

      {/* 6th */}
      <IntroComponent6 />

      {/* 7th */}
      <IntroComponent7 data={res} />
    </div>
  )
}

export default IntroPage
