'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'

type Props = {
  title: string
  explain: string[]
}

export default function BatteryDetail({ title, explain }: Props) {
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
        <div className="text-center lg:pt-28 pt-32">
          <div className="text-6xl font-bold text-primary-green">{title}</div>
        </div>
        <div className="relative text-center lg:my-28 my-32 items-center">
          <div className="text-3xl lg:px-5 px-10 text-center font-bold text-primary-green leading-extra-loose">
            {explain.map((v, i) => {
              return (
                <p key={i} className="w-full">
                  {v}
                </p>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}
