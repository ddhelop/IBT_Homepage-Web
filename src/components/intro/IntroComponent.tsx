'use client'
import { contents } from '@/lib/data'
import ContentBlock from './IntroContentBlock.client'
import IntroComponent5 from './IntroComponent5.client'
import IntroComponent6 from './IntroComponent6'
import IntroComponent7 from './IntroComponent7'
import LogoComponent from '../companyInfo/LogoComponent'
import { motion } from 'framer-motion'
import IntroLogoComponent from './IntroLogoComponent'

export default function IntroComponent() {
  return (
    <>
      {/* 1 ~ 3 */}
      {contents.map((content, index) => (
        <ContentBlock key={index} title={content.title} text={content.text} background={content.background} />
      ))}

      {/* 4th Logo */}
      <div className="relative flex min-h-screen align-middle justify-center overflow-hidden">
        {/* 배경을 위한 div */}
        <div className="w-full h-full absolute inset-0 bg-black bg-opacity-30 z-10">
          <div className="h-full flex flex-col z-30 align-middle justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{
                duration: 0.7,
                ease: [0, 0.4, 0.8, 1.2],
              }}
              className={`text-5xl font-bold mb-4 text-white `}
            >
              함께하는 IBT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{
                duration: 0.7,
                ease: [0, 0.4, 0.8, 1.2],
              }}
              className="leading-relaxed whitespace-pre-line text-xl px-8 font-bold md:font-light mt-20 text-white"
            >
              IBT는 신뢰를 바탕으로 국내외 기업들과
              <br />
              함께 고민하고 해결해나갑니다.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <IntroLogoComponent />
        </div>
      </div>

      {/* 5th */}
      <IntroComponent5 />

      {/* 6th */}
      <IntroComponent6 />

      {/* 7th */}
      <IntroComponent7 />
    </>
  )
}
