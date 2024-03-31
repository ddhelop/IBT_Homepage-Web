'use client'
import { isEnglishState } from '@/context/recoil-context'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

const Data = [
  {
    // hydrogen 임시 데이터
    src: ['/image/hydrogen/hydrogen_intro.png', '/image/hydrogen/hydrogen-en.png'],
  },
]
export default function TempHydrogenComponent() {
  const isEnglish = useRecoilValue(isEnglishState)

  return (
    <>
      <div className="flex flex-col w-full  items-center justify-center">
        <p className="text-5xl text-primary-green font-bold mt-48 mb-32">HYDROGEN</p>

        <Image alt="hydrogen" src={Data?.[0].src?.[isEnglish]} width={1500} height={850} />
      </div>
    </>
  )
}
