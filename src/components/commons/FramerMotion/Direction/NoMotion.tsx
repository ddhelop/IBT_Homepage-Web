'use client'
import React, { useRef } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MotionComponentProps extends MotionProps {
  component: React.ElementType
  children: React.ReactNode
  className?: string // className 속성 추가
}

export const NoMotionComponent: React.FC<MotionComponentProps> = ({ component: Component, children, ...props }) => {
  const scrollRef = useRef(null)
  const Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0, 0.4, 0.8, 1.2],
        delay: 0.2,
      },
    },
  }

  return (
    <Component viewport={{ root: scrollRef }} initial="offscreen" whileInView="onscreen" variants={Variants} {...props}>
      {children}
    </Component>
  )
}
