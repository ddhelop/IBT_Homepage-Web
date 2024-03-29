'use client'

import { useEffect, useState } from 'react'
import HydrogenIntro from './HydrogenIntro'
import LeftImageBox from './LeftImageBox'
import RightImageBox from './RightImageBox'
import Image from 'next/image'
import { TempHydrogenData } from '@/lib/data'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

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

  const isEnglish = useRecoilValue(isEnglishState)
  const [temp, setTemp] = useState(true) // 준비중인지 아닌지

  return (
    <>
      {temp ? (
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-5xl text-primary-green font-bold mt-48 mb-32">HYDROGEN</p>
          <Image alt="hydrogen" src={TempHydrogenData?.[0].src?.[isEnglish]} width={1500} height={850} />
        </div>
      ) : (
        <>
          {/* 오른쪽 플로팅 버튼 */}
          {/* <FloatingButton /> */}
          {/* Hydrogen 인트로 이미지 */}
          <HydrogenIntro />
          {/* Hydrogen 메인 */}
          <div className="flex w-full min-h-full flex-col items-center mb-20">
            <h1 className="text-6xl font-bold my-40">HYDROGEN</h1>
            {/* 수전해 발전 */}
            {/* 수전해 발전 컴포넌트 위치로 바로 접근하는 경우가 있어 id 설정 필요 */}
            <div id="electrolysis" className="flex flex-col w-[min(92%,720px)] mb-8">
              <LeftImageBox
                img="/image/hydrogen/main1.png"
                title={['수전해 발전', 'Electrolysis Power Generation']}
                subTitle={['IBT 참여 프로젝트', 'IBT Project']}
                text1={['수전해 시스템', 'Electrolysis System']}
                link1="/hydrogen/hydrogenDetail/electrolysis_system"
                text2={['서비스', 'Service']}
                link2="/hydrogen/hydrogenDetail/electrolysis_service"
              />
            </div>
            {/* 수소 발전 */}
            {/* 수소 발전 컴포넌트 위치로 바로 접근하는 경우가 있어 id 설정 필요 */}
            <div id="hydrogen_service" className="flex flex-col w-[min(92%,720px)] mb-8">
              <RightImageBox
                img="/image/hydrogen/main2.png"
                title={['수소 발전', 'Hydrogen Power Generation']}
                subTitle={['시스템', 'System']}
                text1={['연료 전지 시스템', 'Fuel Cell System']}
                link1="/hydrogen/hydrogenDetail/hydrogen_system"
                text2={['서비스', 'Service']}
                link2="/hydrogen/hydrogenDetail/hydrogen_service"
              />
            </div>
            {/* 에너지 자립 시스템 */}
            {/* 에너지 자립 시스템 컴포넌트 위치로 바로 접근하는 경우가 있어 id 설정 필요 */}
            <div id="energy_independence" className="flex flex-col w-[min(92%,720px)]">
              <LeftImageBox
                img="/image/hydrogen/main3.png"
                title={['에너지 자립 시스템', 'Energy Independence System']}
                subTitle={['IBT 참여 프로젝트', 'IBT Project']}
                text1={['설비', 'Facility']}
                link1="/hydrogen/hydrogenDetail/energy_independence_system"
                text2={['서비스', 'Service']}
                link2="/hydrogen/hydrogenDetail/energy_independence_service"
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HydrogenPage
