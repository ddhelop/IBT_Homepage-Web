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

const CategoryInfo: DetailInfo[] = [
  {
    title: '항공',
    itemFile: '/image/itemSample.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['고율 방전 성능 우수', '극저온 출력 특성 우수', '운용 안정성 우수'],
  },
  {
    title: '육상',
    itemFile: '/image/Lithium.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['육상용 ~~ 우수', '극저온 출력 특성 우수'],
  },
  {
    title: '해상',
    itemFile: '/image/Ni-cd.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['해상용 ~~ 우수', '운용 안정성 우수'],
  },
]

export default function BatteryItem() {
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
              {categoryIndex == 0 ? '항 공' : '항공'}
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
              {categoryIndex == 1 ? '육 상' : '육상'}
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
              {categoryIndex == 2 ? '해 상' : '해상'}
            </div>
            <Image src={'/image/miniCategory.png'} className="z-0" fill />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-1/2 h-80 flex justify-center items-center bg-black mt-40 mb-60">
            <Image src={CategoryInfo[categoryIndex].itemFile} width={1000} height={700} />
          </div>
          <div className="text-5xl font-bold mb-10">{CategoryInfo[categoryIndex].itemTitle}</div>
          <div className="text-4xl font-light my-20">제품 특징</div>
          {CategoryInfo[categoryIndex].itemAdvanced.map((adv) => {
            return <div className="text-4xl font-light mb-4">{adv}</div>
          })}
          <div className="w-full mt-20 h-10 border border-t-0 border-b-black" />
          <Models index={categoryIndex} />
        </div>
      </section>
    </>
  )
}
