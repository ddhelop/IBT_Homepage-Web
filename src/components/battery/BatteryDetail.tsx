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
      <div className="text-center">
        <div className="text-6xl font-medium mt-32 text-primary-green lg:translate-x-[65px]">{title}</div>
      </div>
      <div className="relative text-center lg:my-40 my-28 items-center">
        <div className="text-3xl lg:px-5 px-10 text-center font-normal text-primary-green leading-extra-loose">
          <p className="lg:translate-x-[65px]">{explain1}</p>
          <p>{explain2}</p>
          <p>{explain3}</p>
          <p>{explain4}</p>
        </div>
      </div>
    </>
  )
}
