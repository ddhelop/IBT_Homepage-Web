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
        // 개수가 5개 이상인 경우
        <>
          <div className="flex felx-row justify-center items-center">
            {/* 왼쪽 화살표 */}
            <button
              disabled={currentImg === 0}
              onClick={() => setCurrentImg((prev) => prev - 1)}
              className={`relative px-20 w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
            >
              <Image src={'/image/leftArrow.svg'} alt="" fill />
            </button>
            <div>
              <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-[10rem] overflow-hidden relative">
                {/* 제품 이미지 */}
                {/* 큰화면: 4개 carousel */}
                <div
                  ref={carouselRef}
                  style={{
                    transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
                  }}
                  className={`hidden lg:w-full lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300 lg:gap-3 lg:pl-6 lg:pr-3`}
                >
                  {data.map((v, i) => (
                    <div key={i} className={`relative shrink-0 w-1/4 h-full`}>
                      <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                    </div>
                  ))}
                </div>
                {/* 작은화면: 1개 carousel */}
                <div
                  ref={carouselRef}
                  style={{
                    transform: `translateX(-${100 * currentImg}%)`,
                  }}
                  className={`lg:hidden w-full h-full absolute flex transition-all duration-300`}
                >
                  {data.map((v, i) => (
                    <div key={i} className={`relative shrink-0 w-full h-full`}>
                      <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 오른쪽 화살표 */}
            {/* 큰화면: 4개 carousel */}
            <button
              disabled={currentImg === data.length - 4}
              onClick={() => setCurrentImg((prev) => prev + 1)}
              className={`hidden lg:flex lg:relative lg:px-20 lg:w-[3rem] lg:h-[3rem] ${
                currentImg === data.length - 4 && 'opacity-50'
              }`}
            >
              <Image src={'/image/rightArrow.svg'} alt="" fill />
            </button>
            {/* 작은화면: 1개 carousel */}
            <button
              disabled={currentImg === data.length - 1}
              onClick={() => setCurrentImg((prev) => prev + 1)}
              className={`lg:hidden relative px-20 w-[3rem] h-[3rem] ${currentImg === data.length - 1 && 'opacity-50'}`}
            >
              <Image src={'/image/rightArrow.svg'} alt="" fill />
            </button>
          </div>
          <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-20 overflow-hidden relative flex">
            {/* 제품명 */}
            {/* 큰화면: 4개 carousel */}
            <div
              ref={carouselRef}
              style={{
                transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
              }}
              className="hidden lg:w-full lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300 lg:gap-3 lg:pl-6 lg:pr-3"
            >
              {data.map((v, i) => (
                <div key={i} className="relative shrink-0 h-full w-1/4 text-center text-4xl font-light my-3">
                  {v.name}
                </div>
              ))}
            </div>
            {/* 작은화면: 1개 carousel */}
            <div
              ref={carouselRef}
              style={{
                transform: `translateX(-${100 * currentImg}%)`,
              }}
              className="lg:hidden w-full h-full absolute flex transition-all duration-300"
            >
              {data.map((v, i) => (
                <div key={i} className="relative shrink-0 w-full h-full text-center text-5xl font-light my-3">
                  {v.name}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // 개수가 4개 이하인 경우
        <>
          {/* 큰화면: carousel 제거 */}
          <div className={'hidden lg:relative lg:w-full lg:flex lg:flex-row lg:justify-center lg:gap-3'}>
            {data.map((v, i) => (
              <div key={i} className={'relative flex flex-col justify-center items-center'}>
                <div key={i} className={`relative shrink-0 lg:w-[20rem] w-20 h-40`}>
                  <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                </div>
                <div key={i} className="relative shrink-0 lg:w-[20rem] w-20 h-20 text-center text-4xl font-light my-3">
                  {v.name}
                </div>
              </div>
            ))}
          </div>
          {/* 작은화면: 1개 carousel */}
          <div className="flex felx-row justify-center items-center">
            <button
              disabled={currentImg === 0}
              onClick={() => setCurrentImg((prev) => prev - 1)}
              className={`relative px-20 w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
            >
              <Image src={'/image/leftArrow.svg'} alt="" fill />
            </button>
            <div>
              <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-[10rem] overflow-hidden relative">
                <div
                  ref={carouselRef}
                  style={{
                    transform: `translateX(-${100 * currentImg}%)`,
                  }}
                  className={`lg:hidden w-full h-full absolute flex transition-all duration-300`}
                >
                  {data.map((v, i) => (
                    <div key={i} className={`relative shrink-0 w-full h-full`}>
                      <Image className="pointer-events-none" alt={`carousel-image-${i}`} fill src={v.imagePath} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              disabled={currentImg === data.length - 1}
              onClick={() => setCurrentImg((prev) => prev + 1)}
              className={`lg:hidden relative px-20 w-[3rem] h-[3rem] ${currentImg === data.length - 1 && 'opacity-50'}`}
            >
              <Image src={'/image/rightArrow.svg'} alt="" fill />
            </button>
          </div>
          <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-20 overflow-hidden relative flex">
            <div
              ref={carouselRef}
              style={{
                transform: `translateX(-${100 * currentImg}%)`,
              }}
              className="lg:hidden w-full h-full absolute flex transition-all duration-300"
            >
              {data.map((v, i) => (
                <div key={i} className="relative shrink-0 w-full h-full text-center text-5xl font-light my-3">
                  {v.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Slider
