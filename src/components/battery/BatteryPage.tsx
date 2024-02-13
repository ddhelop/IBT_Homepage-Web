'use client'

import FloatingButton from '@/components/battery/Floating'
import LithiumBox from '@/components/battery/LithiumBox'
import NicdBox from '@/components/battery/NicdBox'
import BatteryIntro from '@/components/battery/BatteryIntro'
import { useEffect, useRef } from 'react'

export const BatteryPage = () => {
  useEffect(() => {
    // URL의 해시 부분(#ㅇㅇㅇ) 가져옴
    const hash = window.location.hash

    if (hash) {
      // 변수 hash에서 #을 제외한 값을 이용하여 해당 ID를 가진 요소를 찾음
      const element = document.getElementById(hash.substring(1))

      if (element) {
        // 해당 요소가 중간에 오도록 스크롤
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [])

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      {/* Battery 인트로 이미지 */}
      <BatteryIntro />
      {/* Battery 메인 */}
      <div className="flex w-full min-h-full flex-col items-center mb-20">
        <h1 className="text-6xl font-bold my-40">BATTERY</h1>
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
