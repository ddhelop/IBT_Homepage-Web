'use client'

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function ExampleComponent1() {
  const { ref } = useSectionInView('Vision')

  return (
    <section id="Vision" ref={ref} className="w-full">
      <div className="flex justify-center gap-2 h-96 bg-red-200 w-full"></div>
    </section>
  )
}
