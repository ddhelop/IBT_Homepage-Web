'use client'

import React, { useState } from 'react'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'
import Image from 'next/image'

type Props = {
  image1: string
  image2: string
  image3: string
  title1: string
  title2: string
  title3: string
  explain1: string
  explain2: string
  explain3: string
}

export default function CheckerBoard({
  image1,
  title1,
  explain1,
  image2,
  title2,
  explain2,
  image3,
  title3,
  explain3,
}: Props) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="inline-flex h-[30rem] lg:mx-40">
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image1} fill />
          </div>
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title1}</div>
              <div>{explain1}</div>
            </div>
            <Image alt="" src={image1} fill className="lg:hidden z-0 opacity-40" />
          </div>
        </div>
        <div className="inline-flex h-[30rem] lg:mx-40">
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title2}</div>
              <div>{explain2}</div>
            </div>
            <Image alt="" src={image2} fill className="lg:hidden z-0 opacity-40" />
          </div>
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image2} fill />
          </div>
        </div>
        <div className="inline-flex h-[30rem] lg:mx-40">
          <div className="lg:relative lg:flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center hidden">
            <Image alt="" src={image3} fill />
          </div>
          <div className="relative flex flex-col flex-shrink-0 justify-between lg:w-1/2 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
            <div className="z-10">
              <div>{title3}</div>
              <div>{explain3}</div>
            </div>
            <Image alt="" src={image3} fill className="lg:hidden z-0 opacity-40" />
          </div>
        </div>
      </div>
    </>
  )
}
