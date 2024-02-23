'use client'
import { DownMotionComponent } from '@/components/commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'
import React from 'react'
import LogoComponent from '../LogoComponent'

export default function CooperativeComponent() {
  return (
    <div className="mb-72">
      <DownMotionComponent component={motion.div} className="flex flex-col items-center">
        <h1 className="text-6xl mb-24 font-medium">협력 / 제휴사</h1>
        <h2 className="text-4xl mb-7 font-bold">함께하는 IBT</h2>
      </DownMotionComponent>

      <DownMotionComponent component={motion.div} className="flex flex-col items-center">
        <p className="text-lg text-center mb-16 font-light leading-7">
          IBT는 신뢰를 바탕으로 국내외 기업들과
          <br />
          함께 고민하고 해결해나갑니다.
        </p>
      </DownMotionComponent>

      <LogoComponent />
    </div>
  )
}
