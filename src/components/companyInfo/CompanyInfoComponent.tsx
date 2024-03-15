'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function CompanyInfoComponent() {
  const scrollRef = useRef(null)
  const isEnglish = useRecoilValue(isEnglishState)

  const Variants: Variants = {
    offscreen: {
      y: -400,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        ease: [0, 0.4, 0.8, 1.2],
      },
    },
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white mb-48">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ root: scrollRef }}
          variants={Variants}
          className="flex flex-col align-middle items-center w-[min(90%,1290px)] h-full"
        >
          <Image
            src="/info/logo.png" // 이미지 경로
            alt="slidesImages"
            width={150} // 너비
            height={120} // 높이
            // layout="fixed" // 레이아웃 옵션
          />
          <h2 className="mt-6 text-center font-medium text-3xl whitespace-pre-wrap break-keep lg:text-2xl ">
            {CompanyInfoData?.[0].title?.[isEnglish]}
            <br />
          </h2>
          <p className="mt-12 text-center font-thin text-2xl lg:text-xl break-keep">
            {CompanyInfoData?.[0].contents?.[isEnglish]}
          </p>
        </motion.div>
      </div>
    </>
  )
}
