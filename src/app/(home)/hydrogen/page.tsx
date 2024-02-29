import Hydrogen from '@/components/hydrogen/Hydrogen'
import { Metadata } from 'next'

export const metadata = {
  title: '(주)아이비티 수소',
  description: 'IBT 수소 제품 소개 페이지',
}

export default function pagHydrogenPage() {
  return (
    <div className="flex justify-center min-h-[90vh]">
      <div className="w-[min(92%,1080px)]">
        <Hydrogen />
      </div>
    </div>
  )
}
