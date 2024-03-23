'use client'

import { isEnglishState } from '@/context/recoil-context'
import { contents } from '@/lib/data'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

export default function ContentBlocks() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      {contents.map((item, id) => (
        <div
          key={id}
          style={{ backgroundImage: `url(${item.background})` }}
          className="text-center flex flex-col items-center justify-center p-8 min-h-[540px] md:min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
        >
          {/* contentRef를 적용할 새로운 div 추가 */}
          <div>
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
              {item.title?.[isEnglish]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className="whitespace-pre-line break-keep text-xl px-8 font-bold md:font-light mt-20 text-white"
            >
              {item.text?.[isEnglish]}
            </motion.p>
          </div>
        </div>
      ))}
    </>
  )
}
