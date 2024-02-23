import Hydrogen from '@/components/hydrogen/Hydrogen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hydrogen',
  description: 'IBT Hydrogen 제품 소개 페이지',
}

export default function pagHydrogenPage() {
  return (
    <div className="flex justify-center min-h-[90vh]">
      <div className="w-[min(92%,48rem)]">
        <Hydrogen />
      </div>
    </div>
  )
}
