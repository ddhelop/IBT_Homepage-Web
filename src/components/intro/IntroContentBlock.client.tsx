'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { IContentBlockProps } from './IntroComponent.types'
import { useInView } from 'react-intersection-observer'
import { useScrollAnimation } from '../commons/UseScrollAnimation'

export default function ContentBlock(props: IContentBlockProps) {
  const { ref, control } = useScrollAnimation()

  // text framer motion
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.7,
        ease: [0, 0.4, 0.8, 1.2],
      },
    },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="text-center flex flex-col items-center justify-center p-8 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
    >
      {/* contentRef를 적용할 새로운 div 추가 */}
      <div>
        <motion.h1
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className={`text-5xl font-bold mb-4 text-white `}
        >
          {props.title}
        </motion.h1>
        <motion.p
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="leading-relaxed whitespace-pre-line text-xl font-light mt-20 text-white"
        >
          {props.text}
        </motion.p>
      </div>
    </div>
  )
}
