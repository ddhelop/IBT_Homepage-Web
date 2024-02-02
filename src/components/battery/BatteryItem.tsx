'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Models } from './Models'

interface DetailInfo {
  title: string
  itemFile: string
  itemTitle: string
  itemAdvanced: string[]
}

type Props = {
  detailInfo: DetailInfo[]
}

export default function BatteryItem({ detailInfo }: Props) {
  const [categoryIndex, setCategoryIndex] = useState<number | null>(0)

  return (
    <>
      <section id="NicdItem" className="w-full min-h-screen">
        <div className="flex flex-row mx-20 items-center mb-40">
          <div
            className={`${
              categoryIndex == 0 ? 'opacity-100 font-bold' : 'opacity-40 font-semibold'
            } relative w-1/3 h-20`}
            onClick={() => setCategoryIndex(0)}
          >
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl text-white">
              {detailInfo[0].title}
            </div>
            <Image src={'/image/miniCategory.png'} className="z-0" fill />
          </div>
          <div
            className={`${
              categoryIndex == 1 ? 'opacity-100 font-bold' : 'opacity-40 font-semibold'
            } relative w-1/3 h-20`}
            onClick={() => setCategoryIndex(1)}
          >
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl text-white">
              {detailInfo[1].title}
            </div>
            <Image src={'/image/miniCategory.png'} className="z-0" fill />
          </div>
          <div
            className={`${
              categoryIndex == 2 ? 'opacity-100 font-bold' : 'opacity-40 font-semibold'
            } relative w-1/3 h-20`}
            onClick={() => setCategoryIndex(2)}
          >
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl text-white">
              {detailInfo[2].title}
            </div>
            <Image src={'/image/miniCategory.png'} className="z-0" fill />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-1/2 h-80 flex justify-center items-center bg-black mt-40 mb-60">
            <Image src={detailInfo[categoryIndex].itemFile} width={1000} height={700} />
          </div>
          <div className="text-5xl font-bold mb-10">{detailInfo[categoryIndex].itemTitle}</div>
          <div className="text-4xl font-light my-20">제품 특징</div>
          {detailInfo[categoryIndex].itemAdvanced.map((adv) => {
            return <div className="text-4xl font-light mb-4">{adv}</div>
          })}
          <div className="w-full mt-20 h-10 border border-t-0 border-b-black" />
          <Models index={categoryIndex} />
        </div>
      </section>
    </>
  )
}
