'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'

type Props = {
  title: string
  explain1: string
  explain2: string
  explain3: string
  explain4: string
}

export default function BatteryDetail({ title, explain1, explain2, explain3, explain4 }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
      >
        <div className="text-center lg:pt-24 pt-32">
          <div className="text-6xl font-medium text-primary-green">{title}</div>
        </div>
        <div className="relative text-center lg:my-40 my-28 items-center">
          <div className="text-3xl lg:px-5 px-10 text-center font-normal text-primary-green leading-extra-loose">
            <p>{explain1}</p>
            <p>{explain2}</p>
            <p>{explain3}</p>
            <p>{explain4}</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
