'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import { useRef } from 'react'

export default function CompanyInfoComponent() {
  const scrollRef = useRef(null)

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
      <div className="w-full flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ root: scrollRef }}
          variants={Variants}
          className="flex flex-col align-middle items-center w-2/3 h-full"
        >
          <Image
            src="/info/logo.png" // 이미지 경로
            alt="slidesImages"
            width={322} // 너비
            height={187} // 높이
            // layout="fixed" // 레이아웃 옵션
          />
          <h2 className="mt-6 text-center font-medium text-3xl leading-[4rem]">
            IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며,
            <br />
            새로운 에너지 라이프스타일을 창조하고 있습니다.
            <br />
          </h2>
          <p className="mt-12 text-center font-thin text-2xl leading-[3rem]">
            브랜드 컬러인 IBT 그린은 친환경 이념을,
            <br />
            우로 뻗는 타원은 끊임없이 도약하는 IBT의 혁신정신을 나타냅니다.
            <br />
            ‘International Battery Technology’의 약자인 IBT는,
            <br />
            세계를 선도하는 한국의 기업으로 성장할 것입니다.
          </p>
        </motion.div>
      </div>
    </>
  )
}
