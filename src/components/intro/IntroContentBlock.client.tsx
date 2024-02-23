'use client'

import { IContentBlockProps } from '@/lib/types'
import { motion } from 'framer-motion'

export default function ContentBlock(props: IContentBlockProps) {
  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="text-center flex flex-col items-center justify-center p-8 min-h-[540px] md:min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
    >
      {/* contentRef를 적용할 새로운 div 추가 */}
      <div>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{
            duration: 0.7,
            ease: [0, 0.4, 0.8, 1.2],
          }}
          className={`text-5xl font-bold mb-4 text-white `}
        >
          {props.title}
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
          {props.text}
        </motion.p>
      </div>
    </div>
  )
}
