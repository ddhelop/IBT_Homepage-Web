'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BatteryIntro() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="relative lg:mx-40 bg-white"
      >
        <div className="flex justify-center">
          <div className="absolute text-center z-10 h-4/5 w-full top-1/2 -translate-y-1/2">
            <div className="h-1/2 translate-y-1/2 flex flex-col jusify-center items-center">
              <div className="relative w-[18rem] h-[12rem]">
                <Image alt="logo" src={'/image/Logo.png'} fill className="object-contain" />
              </div>
              <h1 className="font-bold text-5xl text-white mb-8">IBT는 다릅니다</h1>
              <div className="font-bold text-lg text-white leading-6">
                <p>IBT는 자체 보유한 BMS 기술을 바탕으로 개별화된 A/S 서비스와</p>
                <p>신뢰성 있는 고객케어를 제공하고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="relative w-[100rem] h-[45rem]">
            <Image alt="" className="flex-shrink-0 z-0 object-cover" src={'/image/310인트로/311_소개_배경.png'} fill />
          </div>
        </div>
      </motion.div>
    </>
  )
}
