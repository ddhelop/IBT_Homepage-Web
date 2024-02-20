import Hydrogen from '@/components/hydrogen/Hydrogen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hydrogen',
  description: 'IBT Hydrogen 제품 소개 페이지',
}

export default function pagHydrogenPage() {
  return (
    <div>
      <Hydrogen />
    </div>
  )
}
