'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

type Props = {
  image1: string
  image2: string
  image3: string
  title1: string[]
  title2: string[]
  title3: string[]
}

export default function CheckerBoard({ image1, title1, image2, title2, image3, title3 }: Props) {
  const isEnglish = useRecoilValue(isEnglishState)
  const isNull1 = JSON.stringify(title1) === JSON.stringify(['', ''])
  const isNull2 = JSON.stringify(title2) === JSON.stringify(['', ''])
  const isNull3 = JSON.stringify(title3) === JSON.stringify(['', ''])

  return (
    <>
      <div className="flex flex-col w-full gap-3">
        {isNull1 ? (
          <></>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex h-[30rem] justify-center"
          >
            {/* 1-1 이미지 */}
            <div className="lg:relative lg:flex lg:w-[30%] lg:h-full lg:justify-center lg:items-center hidden">
              {image1 == '' ? (
                <div className="bg-gray-200 w-4/5 h-4/5" />
              ) : (
                <Image alt="" src={image1} fill className="object-contain" />
              )}
            </div>
            {/* 1-2 설명 */}
            <div className="relative flex flex-col flex-shrink-0 items-center lg:w-[30%] w-full lg:bg-white lg:text-black bg-black text-white px-9 py-8">
              <div className="z-10 text-xl font-bold mt-24">
                <div>{title1[isEnglish]}</div>
              </div>
              {/* 반응형 -> 모바일 버전에서는 1-1 이미지가 배경으로 들어감 */}
              {image1 == '' ? (
                <div className="lg:hidden w-full h-full my-20" />
              ) : (
                <Image alt="" src={image1} fill className="lg:hidden z-0 opacity-40 object-contain" />
              )}
            </div>
          </motion.div>
        )}
        {isNull2 ? (
          <></>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: +100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="inline-flex h-[30rem] justify-center"
          >
            {/* 2-1 설명 */}
            <div className="relative flex flex-col flex-shrink-0 items-center lg:w-[30%] w-full lg:bg-white lg:text-black bg-black text-white px-9 py-8">
              <div className="z-10 text-xl font-bold mt-24">
                <div>{title2[isEnglish]}</div>
              </div>
              {/* 반응형 -> 모바일 버전에서는 2-2 이미지가 배경으로 들어감 */}
              {image2 == '' ? (
                <div className="bg-gray-200 w-4/5 h-4/5" />
              ) : (
                <Image alt="" src={image2} fill className="lg:hidden z-0 opacity-40 object-contain" />
              )}
            </div>
            {/* 2-2 이미지 */}
            <div className="lg:relative lg:flex lg:w-[30%] lg:h-full lg:justify-center lg:items-center hidden">
              {image2 == '' ? (
                <div className="lg:hidden w-full h-full" />
              ) : (
                <Image alt="" src={image2} fill className="object-contain" />
              )}
            </div>
          </motion.div>
        )}
        {isNull3 ? (
          <></>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="inline-flex h-[30rem] justify-center"
          >
            {/* 3-1 이미지 */}
            <div className="lg:relative lg:flex lg:w-[30%] lg:h-full lg:justify-center lg:items-center hidden">
              {image3 == '' ? (
                <div className="bg-gray-200 w-4/5 h-4/5" />
              ) : (
                <Image alt="" src={image3} fill className="object-contain" />
              )}
            </div>
            {/* 3-2 설명 */}
            <div className="relative flex flex-col flex-shrink-0 items-center lg:w-[30%] w-full lg:bg-white lg:text-black bg-black text-white px-9 py-8">
              <div className="z-10 text-xl font-bold mt-24">
                <div>{title3[isEnglish]}</div>
              </div>
              {/* 반응형 -> 모바일 버전에서는 3-1 이미지가 배경으로 들어감 */}
              {image3 == '' ? (
                <div className="lg:hidden w-full h-full py-20" />
              ) : (
                <Image alt="" src={image3} fill className="lg:hidden z-0 opacity-40 object-contain" />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}
