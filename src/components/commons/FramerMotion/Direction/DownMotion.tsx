import { motion, MotionProps } from 'framer-motion'
import { useRef } from 'react'

interface MotionComponentProps extends MotionProps {
  component: React.ElementType
  children: React.ReactNode
  className?: string // className 속성 추가
}

export const DownMotionComponent: React.FC<MotionComponentProps> = ({ component: Component, children, ...props }) => {
  const scrollRef = useRef(null)
  const Variants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.6,
        ease: [0, 0.4, 0.8, 1.2],
        delay: 0.4,
      },
    },
  }

  return (
    <Component viewport={{ root: scrollRef }} initial="offscreen" whileInView="onscreen" variants={Variants} {...props}>
      {children}
    </Component>
  )
}
