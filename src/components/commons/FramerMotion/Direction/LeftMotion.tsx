import React, { useRef } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MotionComponentProps extends MotionProps {
  component: React.ElementType
  children: React.ReactNode
  className?: string // className 속성 추가
}

export const LeftMotionComponent: React.FC<MotionComponentProps> = ({ component: Component, children, ...props }) => {
  const scrollRef = useRef(null)
  const Variants = {
    offscreen: {
      x: 150,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
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
