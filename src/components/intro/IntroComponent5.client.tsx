'use client'
import { useIntersectionObserver } from '@/context/useIntersectionObserver.client'
import React, { useState, Dispatch, SetStateAction } from 'react'

export default function IntroComponent5(): JSX.Element {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  // 카운트업 완료 상태 추적
  const [completed, setCompleted] = useState({ count1: false, count2: false, count3: false })

  const handleAnimation = (entry: IntersectionObserverEntry) => {
    if (!completed.count1) countUp(setCount1, 13, 500, 'count1')
    if (!completed.count2) countUp(setCount2, 23, 500, 'count2')
    if (!completed.count3) countUp(setCount3, 16, 500, 'count3')
  }

  function countUp(setCount: Dispatch<SetStateAction<number>>, end: number, duration: number, countKey: string) {
    const start = performance.now()

    function update(currentTime: number) {
      const elapsedTime = currentTime - start
      const progress = elapsedTime / duration
      const currentCount = Math.min(Math.round(end * progress), end)

      setCount(currentCount)

      if (currentCount < end) {
        requestAnimationFrame(update)
      } else {
        // 카운트업 완료 시, 해당 카운트의 완료 상태를 true로 설정
        setCompleted((prev) => ({ ...prev, [countKey]: true }))
      }
    }

    requestAnimationFrame(update)
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
        className="w-full text-center flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover"
      >
        <div
          className="w-full mt-4 "
          style={{ marginTop: '260px', height: '31.875rem', backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
        >
          <div className="z-10 flex flex-col mt-12">
            <div className="w-full">
              <h1 className="text-4xl md:text-7xl text-white font-bold">Since 1986 IBT</h1>
              <p className="mt-11 p-4 text-white md:leading-7 md:text-xl font-light tracking-wide">
                높은 수준의 기술을 바탕으로 방산·산업용 배터리 전문 기업으로 출발한 IBT는
                <br />
                차세대 연료 전지 수소 에너지 관련 고도화 기업으로 성장하고 있습니다.
                <br />
                연료전지 스택, 수소 추출기, 시스템 통합 설계 등 연료 전지 분야 All in One Solution을 공급합니다.
              </p>
            </div>

            {/* number */}
            <div
              ref={ref}
              className="w-full flex flex-row justify-center md:space-x-80 mt-8 md:mt-20 text-4xl md:text-6xl font-bold"
            >
              <div className="flex flex-col relative z-10 justify-center ">
                <div className="flex flex-row justify-center">
                  <div className="text-white">
                    {count1}
                    <span className="relative bottom-6">+</span>
                  </div>
                </div>
                <p className="text-white md:mt-3 mr-6 font-light text-xl">기술인증서</p>
              </div>

              <div className="flex flex-col relative z-10 justify-center">
                <div className="flex flex-row justify-center">
                  <div className="text-white">
                    {count2}
                    <span className=" relative bottom-6">+</span>
                  </div>
                </div>
                <p className="text-white md:mt-3 mr-6 font-light text-xl">지식재산권</p>
              </div>

              <div className="flex flex-col relative z-10 justify-center ">
                <div className="flex flex-row justify-center">
                  <div className="text-white ">
                    {count3}
                    <span className=" relative bottom-6 left-1">+</span>
                  </div>
                </div>
                <p className="text-white md:mt-3 mr-6 font-light text-xl">개발완료</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------- */}
    </>
  )
}
