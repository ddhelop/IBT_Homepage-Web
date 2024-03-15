'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import { useRef } from 'react'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { isEnglishState } from '@/context/recoil-context'
import { useRecoilValue } from 'recoil'
import { IntroComponentData } from '@/lib/data'
import Link from 'next/link'

export default function IntroComponent6(): JSX.Element {
  const scrollRef = useRef(null)
  const isEnglish = useRecoilValue(isEnglishState)

  const Variants: Variants = {
    rightOffscreen: {
      opacity: 0,
      x: 300,
    },
    rightOnscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.4, 0.8, 1.2],
      },
    },

    leftOffscreen: {
      opacity: 0,
      x: -300,
    },
    leftOnscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.4, 0.8, 1.2],

        bounce: 0.5,
      },
    },
  }

  return (
    <>
      <div
        style={{ backgroundImage: 'url(/intro/intro6.png)' }}
        className="relative w-full text-center flex flex-col items-center justify-center min-h-screen bg-cover bg-white bg-opacity-50"
      >
        <div className="lg:w-[70%] flex flex-col xl:flex-row items-center ">
          {/* left container */}
          <motion.div
            initial="leftOffscreen"
            whileInView="rightOnscreen"
            viewport={{ root: scrollRef }}
            variants={Variants}
            className="w-[90%] xl:w-[50%] flex flex-col mb-16 xl:mb-48 items-center xl:items-start"
          >
            <h1 className="text-white text-3xl lg:text-5xl font-bold lg:text-left gap-y-4 tracking-[0.2px] mb-5">
              {IntroComponentData[2].title[isEnglish]}
            </h1>
            <h1 className="text-white text-3xl lg:text-5xl font-bold lg:text-left gap-y-4 tracking-[0.2px]">
              {IntroComponentData[2].title2?.[isEnglish]}
            </h1>

            <p className="text-white text-xl font-medium lg:font-light lg:text-left break-keep mt-6 md:mt-[38px]">
              {IntroComponentData[2].contents[isEnglish]}
            </p>
          </motion.div>

          {/* right container */}
          <div className="mt-6 lg:mt-0 xl:w-[50%] overflow-hidden flex justify-end">
            <div className="flex flex-wrap justify-center h-full max-w-[30rem]">
              {IntroComponentData[2]?.box?.map((data, index) => (
                <RightMotionComponent component={motion.div} key={index} className="p-2 box">
                  <div
                    className="w-52 h-44 rounded-[10px] bg-[#355781] opacity-[0.85] flex flex-col justify-between p-4 lg:p-5 text-white"
                    style={{ boxShadow: '2px 2px 12px 5px rgba(0, 0, 0, 0.20)' }}
                  >
                    <Image
                      src={Array.isArray(data.icon) ? data.icon[isEnglish ? 1 : 0] : data.icon} // 여기서 조건부 접근
                      alt="icon"
                      width={Array.isArray(data.width) ? data.width[isEnglish ? 1 : 0] : data.width} // 너비 조건부 접근
                      height={Array.isArray(data.height) ? data.height[isEnglish ? 1 : 0] : data.height} // 높이 조건부 접근
                      // layout="fixed" // 레이아웃 설정이 필요하다면 주석을 해제하세요
                      className="hidden md:flex"
                    />

                    <h3 className="font-bold text-left text-xl mt-1">{data.title[isEnglish ? 1 : 0]}</h3>
                    <div className="flex justify-between">
                      <p className="font-medium md:font-thin text-sm text-left break-keep mt-1 flex-1 mr-4">
                        {data.description[isEnglish ? 1 : 0]}
                      </p>
                      <div className="w-16 md:w-12 flex aspect-square relative">
                        <Link prefetch href={data.path}>
                          <Image
                            src="/intro/pointer.svg" // 이미지 경로
                            alt="바로가기"
                            fill
                            className="mt-1 cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </RightMotionComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
