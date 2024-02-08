'use client'

import FloatingButton from '@/components/battery/Floating'
import LithiumBox from '@/components/battery/LithiumBox'
import NicdBox from '@/components/battery/NicdBox'
import BatteryIntro from '@/components/battery/BatteryIntro'
import { useEffect, useRef } from 'react'

export const BatteryPage = () => {
  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const element = document.getElementById(hash.substring(1))

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [])

  return (
    <>
      <FloatingButton />
      {/* Battery 소개 */}
      <BatteryIntro />
      {/* Battery 메인 */}
      <div className="flex w-full min-h-full flex-col items-center mb-20">
        <h1 className="text-6xl font-medium my-40">BATTERY</h1>
        {/* Ni-cd */}
        <div id="nicd" className="flex flex-col w-full">
          <NicdBox />
        </div>
        {/* Lithium */}
        <div id="lithium" className="flex flex-col w-full">
          <LithiumBox />
        </div>
      </div>
    </>
  )
}

export default BatteryPage
