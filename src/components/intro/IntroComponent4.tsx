'use client'
import { motion } from 'framer-motion'
import IntroLogoComponent from './IntroLogoComponent'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { IntroComponentData } from '@/lib/data'

export default function IntroComponent4() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <div>
      <div className="relative flex min-h-screen align-middle justify-center overflow-hidden">
        {/* 배경을 위한 div */}
        <div className="w-full h-full absolute inset-0 bg-black bg-opacity-50 z-10">
          <div className="h-full flex flex-col z-30 align-middle justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 1.1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className={`text-5xl font-bold mb-4 text-white `}
            >
              {IntroComponentData[0].title?.[isEnglish]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className="leading-relaxed break-keep whitespace-pre-line text-xl px-8 font-bold md:font-light mt-7 text-white"
            >
              {IntroComponentData[0].contents?.[isEnglish]}
            </motion.p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <IntroLogoComponent />
        </div>
      </div>
    </div>
  )
}
