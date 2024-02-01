'use client'
import { useIntersectionObserver } from '@/context/useIntersectionObserver.client'
import React from 'react'

export default function IntroComponent5(): JSX.Element {
  const handleAnimation = (entry: IntersectionObserverEntry) => {
    // 애니메이션 클래스를 추가합니다.
    entry.target.classList.add('animate-pulse')
  }

  const ref = useIntersectionObserver(handleAnimation, {
    root: null,
    rootMargin: '100px',
    threshold: 0.2,
  })

  return (
    <>
      {/* 5th */}
      <div
        style={{ backgroundImage: 'url(/intro/intro5.png)' }}
        className="relative w-full text-center flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
      >
        <div
          className="w-full opacity-50 mt-4 absolute "
          style={{ marginTop: '260px', height: '510px', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
        ></div>

        <div className="z-10 flex flex-col absolute mt-96">
          <div className="w-full z-10">
            <h1 className="text-7xl text-white font-bold">Since 1986 IBT</h1>
            <p className="mt-11 text-white leading-7 text-xl font-light tracking-wide">
              높은 수준의 기술을 바탕으로 방산·산업용 배터리 전문 기업으로 출발한 IBT는
              <br />
              차세대 연료 전지 수소 에너지 관련 고도화 기업으로 성장하고 있습니다.
              <br />
              연료전지 스택, 수소 추출기, 시스템 통합 설계 등 연료 전지 분야 All in One Solution을 공급합니다.
            </p>
          </div>

          {/* number */}
          <div ref={ref} className="w-full flex flex-row justify-center space-x-80 mt-40 mb-32">
            <div className="flex flex-col relative z-10 justify-center">
              <div className="flex flex-row">
                <div className="text-white text-6xl font-bold">
                  13
                  <span className="text-bold relative bottom-6 left-1">+</span>
                </div>
              </div>
              <p className="text-white mt-3 mr-6 font-light">기술인증서</p>
            </div>

            <div className="flex flex-col relative z-10 justify-center">
              <div className="flex flex-row">
                <div className="text-white text-6xl font-bold">
                  23
                  <span className="text-bold relative bottom-6 left-1">+</span>
                </div>
              </div>
              <p className="text-white mt-3 mr-6 font-light">지식재산권</p>
            </div>

            <div className="flex flex-col relative z-10 justify-center ">
              <div className="flex flex-row">
                <div className="text-white text-6xl font-bold">
                  16
                  <span className="text-bold relative bottom-6 left-1">+</span>
                </div>
              </div>
              <p className="text-white mt-3 mr-6 font-light">개발완료</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------- */}
    </>
  )
}
