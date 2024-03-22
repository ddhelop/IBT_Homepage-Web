'use client'

import FloatingButton from '@/components/battery/Floating'
import BatteryIntro from '@/components/battery/BatteryIntro'
import { useEffect } from 'react'
import HydrogenProject from '@/components/hydrogen/HydrogenProject'
import SystemBox from './SystemBox'
import HydrogenIntro from './HydrogenIntro'

export const HydrogenPage = () => {
  // header, floating button를 통한 페이지 이동시 필요
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
  }, []) // mount(첫 렌더링) 될 때 -> 스크롤 위치 찾아야 하므로 useEffect(,[]) 사용

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      {/* <FloatingButton /> */}
      {/* Battery 인트로 이미지 */}
      <HydrogenIntro />
      {/* Battery 메인 */}
      <div className="flex w-full min-h-full flex-col items-center mb-20">
        <h1 className="text-6xl font-bold my-40">HYDROGEN</h1>
        {/* Ni-Cd */}
        {/* Ni-Cd 컴포넌트 위치로 바로 접근하는 경우가 있어 id 설정 필요 */}
        <div id="project" className="flex flex-col w-[min(92%,720px)] mb-8">
          <HydrogenProject />
        </div>
        {/* Lithium */}
        {/* Lithium 컴포넌트 위치로 바로 접근하는 경우가 있어 id 설정 필요 */}
        <div id="system" className="flex flex-col w-[min(92%,720px)]">
          <SystemBox />
        </div>
      </div>
    </>
  )
}

export default HydrogenPage
