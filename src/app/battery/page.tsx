import FloatingButton from '@/components/Floating'
import BatteryItem from '@/components/battery/BatteryItem'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LithiumBox from '@/components/battery/LithiumBox'
import NicdBox from '@/components/battery/NicdBox'
import BatteryIntro from '@/components/battery/BatteryIntro'

export const metadata = {
  title: 'About Battery',
  description: 'IBT Battery 제품 소개 페이지',
}

const BatteryPage = () => {
  return (
    <>
      <FloatingButton />
      {/* Battery 소개 */}
      <BatteryIntro />
      {/* Battery 메인 */}
      <div className="flex w-full min-h-full flex-col items-center mb-20">
        <h1 className="text-6xl font-medium my-40">BATTERY</h1>
        <div className="flex flex-col w-full">
          {/* Ni-cd */}
          <NicdBox />
          {/* Lithium */}
          <LithiumBox />
        </div>
      </div>
    </>
  )
}

export default BatteryPage
