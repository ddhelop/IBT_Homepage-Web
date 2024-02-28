'use client'

import { isEnglishState } from '@/context/recoil-context'
import { IntroComponentData } from '@/lib/data'
import { motion, animate, Variants } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRecoilValue } from 'recoil'

export default function IntroComponent5(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: false })
  const scrollRef = useRef(null)
  const [displayValue1, setDisplayValue1] = useState(0)
  const [displayValue2, setDisplayValue2] = useState(0)
  const [displayValue3, setDisplayValue3] = useState(0)
  const isEnglish = useRecoilValue(isEnglishState)

  const Variants: Variants = {
    offscreen: {
      opacity: 0,
      scale: 0,
    },
    onscreen: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: [0, 0.4, 0.8, 1.2],

        bounce: 0.5,
      },
    },
  }

  // 각 숫자에 대한 애니메이션 설정
  useEffect(() => {
    if (inView) {
      const controls1 = animate(0, 13, {
        // 첫 번째 숫자
        duration: 2,
        onUpdate: (value) => setDisplayValue1(Math.round(value)),
      })
      const controls2 = animate(0, 23, {
        // 두 번째 숫자
        duration: 2,
        onUpdate: (value) => setDisplayValue2(Math.round(value)),
      })
      const controls3 = animate(0, 16, {
        // 세 번째 숫자
        duration: 2,
        onUpdate: (value) => setDisplayValue3(Math.round(value)),
      })

      // 애니메이션 중지 함수를 정리 함수로 반환
      return () => {
        controls1.stop()
        controls2.stop()
        controls3.stop()
      }
    }
  }, [inView])

  return (
    <>
      {/* 5th */}
      <div
        style={{ backgroundImage: 'url(/intro/intro5.png)' }}
        className="w-full text-center flex flex-col items-center justify-center min-h-[540px] md:min-h-screen bg-no-repeat bg-cover"
      >
        <div
          className="w-full flex-col flex justify-center items-center h-[32rem]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
        >
          <div className="z-10 flex flex-col w-[min(90%,1200px)]">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ root: scrollRef }}
              variants={Variants}
              className="w-full"
            >
              <h1 className="text-6xl md:text-7xl text-white font-bold">Since 1986 IBT</h1>
              <p className="mt-12 text-white leading-7 text-balance text-xl font-medium md:font-light tracking-wide">
                {IntroComponentData[1].contents?.[isEnglish]}
              </p>
            </motion.div>

            {/* number */}
            <div
              ref={ref}
              className="w-full flex flex-row justify-center space-x-12 md:space-x-40 lg:space-x-80 mt-16 md:mt-20 text-5xl md:text-6xl font-bold"
            >
              <div className="flex flex-col relative z-10 justify-center ">
                <div className="flex flex-row justify-center">
                  <motion.div className="text-white">
                    {displayValue1}
                    <span className="relative bottom-6">+</span>
                  </motion.div>
                </div>
                <p className="text-white mt-3 mr-6 font-light text-xl">{IntroComponentData[1].first?.[isEnglish]}</p>
              </div>

              <div className="flex flex-col relative z-10 justify-center">
                <div className="flex flex-row justify-center">
                  <motion.div className="text-white">
                    {displayValue2}
                    <span className=" relative bottom-6">+</span>
                  </motion.div>
                </div>
                <p className="text-white mt-3 mr-6 font-light text-xl">{IntroComponentData[1].second?.[isEnglish]}</p>
              </div>

              <div className="flex flex-col relative z-10 justify-center ">
                <div className="flex flex-row justify-center">
                  <div className="text-white ">
                    {displayValue3}
                    <span className=" relative bottom-6 left-1">+</span>
                  </div>
                </div>
                <p className="text-white mt-3 mr-6 font-light text-xl">{IntroComponentData[1].third?.[isEnglish]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------- */}
    </>
  )
}
