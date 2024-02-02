'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'

interface DetailInfo {
  title: string
  explain1: string
  explain2: string
  explain3: string
  explain4: string
}

const BatteryInfo: DetailInfo[] = batteryList

export default function BatteryDetail() {
  const [batteryIndex, setBatteryIndex] = useState<number | null>(0)

  return (
    <section id="Nicd" className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-medium mt-40 text-primary-green">{BatteryInfo[batteryIndex].title}</h1>
      </div>
      <div className="flex flex-col my-40 items-center">
        <div className="text-3xl text-center font-normal text-primary-green leading-extra-loose">
          <p>{BatteryInfo[batteryIndex].explain1}</p>
          <p>{BatteryInfo[batteryIndex].explain2}</p>
          <p>{BatteryInfo[batteryIndex].explain3}</p>
          <p>{BatteryInfo[batteryIndex].explain4}</p>
        </div>
      </div>
    </section>
  )
}
