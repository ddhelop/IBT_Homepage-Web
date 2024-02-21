import IntroComponent from '@/components/intro/IntroComponent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBT intro',
  description: 'IBT intro 인트로',
}

const IntroPage = async () => {
  return (
    <div className="flex flex-col w-full">
      <IntroComponent />
    </div>
  )
}

export default IntroPage
