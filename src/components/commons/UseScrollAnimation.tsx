'use client'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

// 커스텀 훅 useScrollAnimation
export function useScrollAnimation() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return { ref, control }
}
