'use client'

import { isEnglishState } from '@/context/recoil-context'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

type Props = {
  title: string[] // 중분류 title
  explain: string[][] // 배터리 설명
}

export default function HydrogenDetail({ title, explain }: Props) {
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
        className="flex flex-col justify-center items-center"
      >
        {/* 배터리 중분류 title */}
        <div className="lg:w-[65%] text-center mt-48">
          <div className="text-5xl font-bold text-primary-green">{title[isEnglish]}</div>
        </div>
        {/* 배터리 설명 */}
        <div className="lg:w-[65%] relative text-center lg:my-28 my-32 items-center">
          <div className="text-xl px-5 text-center font-bold text-primary-green leading-extra-loose whitespace-pre-line">
            <h1>{explain[isEnglish]}</h1>
          </div>
        </div>
      </motion.div>
    </>
  )
}
