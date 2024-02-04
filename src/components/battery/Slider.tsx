'use client'
import { ModelInfo } from '@/lib/data'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  categoryIndex: number
  mainCategoryIndex: number
}

const Slider = ({ categoryIndex, mainCategoryIndex }: Props) => {
  const [imagesPerPage, setImagesPerPage] = useState(4)
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  const data = ModelInfo[mainCategoryIndex][categoryIndex].itemAdvanced

  return (
    <>
      <div className="text-4xl font-normal py-10">적용 모델</div>
      {data.length > 4 ? (
        <>
          <div className="flex felx-row">
            <button
              disabled={currentImg === 0}
              onClick={() => setCurrentImg((prev) => prev - 1)}
              className={`px-20 ${currentImg === 0 && 'opacity-50'}`}
            >
              <Image src={'/image/leftArrow.svg'} alt="" width={40} height={40} />
            </button>
            <div>
              <div className="w-[60rem] h-40 overflow-hidden relative">
                {/* 제품 이미지 */}
                <div
                  ref={carouselRef}
                  style={{
                    transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
                  }}
                  className="w-full h-full absolute flex transition-all duration-300 gap-3 pl-6 pr-3"
                >
                  {data.map((v, i) => (
                    <div key={i} className={`relative shrink-0 w-1/4 h-full`}>
                      <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              disabled={currentImg === data.length - 4}
              onClick={() => setCurrentImg((prev) => prev + 1)}
              className={`px-20 ${currentImg === data.length - 4 && 'opacity-50'}`}
            >
              <Image src={'/image/rightArrow.svg'} alt="" width={40} height={40} />
            </button>
          </div>
          <div className="w-[60rem] h-20 overflow-hidden relative">
            {/* 제품명 */}
            <div
              ref={carouselRef}
              style={{
                transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
              }}
              className="w-full h-full absolute flex transition-all duration-300 gap-3 pl-6 pr-3"
            >
              {data.map((v, i) => (
                <div
                  key={i}
                  className="relative shrink-0 h-full w-1/4 text-center text-4xl font-light my-3"
                  // style={{ width: `${100 / imagesPerPage}%` }}
                >
                  {v.name}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className={'relative w-full flex flex-row justify-center gap-3'}>
            {data.map((v, i) => (
              <div key={i} className={'relative flex flex-col justify-center items-center'}>
                <div key={i} className={`relative shrink-0 w-[20rem] h-40`}>
                  <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                </div>
                <div key={i} className="relative shrink-0 w-[20rem] h-20 text-center text-4xl font-light my-3">
                  {v.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
