'use client'

import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import Image from 'next/image'

interface ModelsComponentProps {
  index: number
}

interface DetailProps {
  item: string
  itemAdvanced: ModelProps[]
}

interface ModelProps {
  imagePath: string
  name: string
}

const ModelInfo: DetailProps[] = [
  {
    item: '항공',
    itemAdvanced: [
      {
        imagePath: '/image/Lithium.png',
        name: 'KT-1',
      },
      {
        imagePath: '/image/Lithium.png',
        name: 'KT-2',
      },
      {
        imagePath: '/image/Lithium.png',
        name: 'KT-1',
      },
      {
        imagePath: '/image/Lithium.png',
        name: 'KT-2',
      },
      {
        imagePath: '/image/Lithium.png',
        name: 'KT-2',
      },
    ],
  },
  {
    item: '육상',
    itemAdvanced: [
      {
        imagePath: '/image/Ni-cd.png',
        name: 'KT-333',
      },
      {
        imagePath: '/image/Ni-cd.png',
        name: 'KT-444',
      },
    ],
  },
  {
    item: '해상',
    itemAdvanced: [
      {
        imagePath: '/image/Ni-cd.png',
        name: 'KT-333',
      },
      {
        imagePath: '/image/Ni-cd.png',
        name: 'KT-444',
      },
    ],
  },
]

export const Models: FC<PropsWithChildren<ModelsComponentProps>> = ({ index }: ModelsComponentProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout
  //   timeout = setTimeout(
  //     () =>
  //       index * 4 > ModelInfo[index].itemAdvanced?.length ? setCarouselIndex(0) : setCarouselIndex((prev) => prev + 1),
  //     3000,
  //   )
  //   return () => clearTimeout(timeout)
  // }, [carouselIndex, ModelInfo[index].itemAdvanced.length])

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-4xl font-normal py-10 mb-20">적용 모델</div>
        <div className="flex flex-row gap-x-10">
          <div className="flex items-center  gap-5 justify-center min-w-[1024px] max-w-1320 mx-auto">
            <Image
              src={'/image/leftArrow.svg'}
              alt=""
              width={63}
              height={66}
              className={`w-10 cursor-pointer 
        ${carouselIndex === 0 && 'opacity-0'} `}
              onClick={() => carouselIndex > 0 && setCarouselIndex((prev) => prev - 1)}
            />
            <div className="overflow-hidden">
              <div
                className={`flex gap-10 ease-in-out duration-1000 `}
                style={{ transform: `translateX(calc(${carouselIndex}*-339px))` }}
              >
                {ModelInfo[index].itemAdvanced.map(({ imagePath, name }) => {
                  return (
                    <div>
                      <img src={imagePath} width={339} height={163} />
                      <div className="text-4xl font-light mb-4">{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <Image
              src={'/image/rightArrow.svg'}
              alt=""
              width={63}
              height={66}
              className={`w-10 cursor-pointer
        ${carouselIndex + 4 > ModelInfo[index].itemAdvanced?.length && 'opacity-0'} `}
              onClick={() =>
                carouselIndex + 4 < ModelInfo[index].itemAdvanced?.length && setCarouselIndex((prev) => prev + 1)
              }
            />
          </div>
        </div>
        <div className="w-full mt-20 h-10 border border-t-0 border-b-black" />
      </div>
    </>
  )
}
