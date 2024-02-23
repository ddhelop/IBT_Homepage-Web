'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { batteryList } from '@/lib/data'
import { fetchPageData } from '@/lib/action'

type Props = {
  title: string // 중분류 title
  explain: string[] // 배터리 설명
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
        {/* 배터리 중분류 title */}
        <div className="text-center mt-48">
          <div className="text-6xl font-bold text-primary-green">{title}</div>
        </div>
        {/* 배터리 설명 */}
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
