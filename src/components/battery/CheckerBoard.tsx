'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'
import Image from 'next/image'

type Props = {
  image1: string
  image2: string
  image3: string
  title1: string
  title2: string
  title3: string
  explain1: string
  explain2: string
  explain3: string
}

export default function CheckerBoard({
  image1,
  title1,
  explain1,
  image2,
  title2,
  explain2,
  image3,
  title3,
  explain3,
}: Props) {
  return (
    <>
      <div className="flex flex-col w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex h-[30rem] lg:mx-40"
        >
          {/* 1-1 이미지 */}
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image1} fill />
          </div>
          {/* 1-2 설명 */}
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title1}</div>
              <div>{explain1}</div>
            </div>
            {/* 반응형 -> 모바일 버전에서는 1-1 이미지가 배경으로 들어감 */}
            <Image alt="" src={image1} fill className="lg:hidden z-0 opacity-40" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className="inline-flex h-[30rem] lg:mx-40"
        >
          {/* 2-1 설명 */}
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title2}</div>
              <div>{explain2}</div>
            </div>
            {/* 반응형 -> 모바일 버전에서는 2-2 이미지가 배경으로 들어감 */}
            <Image alt="" src={image2} fill className="lg:hidden z-0 opacity-40" />
          </div>
          {/* 2-2 이미지 */}
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image2} fill />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className="inline-flex h-[30rem] lg:mx-40"
        >
          {/* 3-1 이미지 */}
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image3} fill />
          </div>
          {/* 3-2 설명 */}
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title3}</div>
              <div>{explain3}</div>
            </div>
            {/* 반응형 -> 모바일 버전에서는 3-1 이미지가 배경으로 들어감 */}
            <Image alt="" src={image3} fill className="lg:hidden z-0 opacity-40" />
          </div>
        </motion.div>
      </div>
    </>
  )
}
