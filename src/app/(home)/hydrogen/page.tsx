import HydrogenPage from '@/components/hydrogen/HydrogenPage'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata = {
  title: '(주)아이비티 수소',
  description: 'IBT 수소 제품 소개 페이지',
}

export default function pagHydrogenPage() {
  return (
    // <div className="flex justify-center min-h-[90vh]">
    // <div className="w-[min(92%,1080px)]">
    // <HydrogenPage />
    // </div>
    // </div>

    // 임시
    <div className="flex flex-col w-full items-center justify-center">
      <p className="text-4xl text-[#79AD4B] mt-48 mb-32">HYDROGEN</p>
      <Image alt="hydrogen" src={'/image/hydrogen/hydrogen_intro.png'} width={1920} height={1183} />
    </div>
  )
}
