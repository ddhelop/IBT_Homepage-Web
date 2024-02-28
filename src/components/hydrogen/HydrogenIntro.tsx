'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { batteryIntroData } from '@/lib/data'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

export default function HydrogenIntro() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="relative bg-white"
      >
        <div className="flex justify-center w-full h-[540px] lg:h-full">
          <div className="absolute text-center z-10 h-full w-full top-[50%] -translate-y-1/2">
            <div className="h-[50%] translate-y-1/2 flex flex-col justify-center items-center">
              {/* 로고 */}
              <div className="relative w-[20rem] h-[14rem]">
                <Image alt="logo" src={'/image/Logo.png'} fill className="object-contain" />
              </div>
              {/* 이미지 위 텍스트 */}
              <h1 className="font-bold text-6xl text-white mb-10">{batteryIntroData?.title[isEnglish]}</h1>
              <div className="font-bold text-xl text-white whitespace-pre-line">
                <h1>{batteryIntroData?.subTitle[isEnglish]}</h1>
              </div>
            </div>
          </div>
          {/* 배경이미지 */}
          <div className="relative w-[100%]  lg:h-screen">
            <Image alt="" className="flex-shrink-0 z-0 object-cover" src={'/image/310인트로/311_소개_배경.png'} fill />
          </div>
        </div>
      </motion.div>
    </>
  )
}
