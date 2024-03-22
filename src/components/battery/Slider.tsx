'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/lib/types'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

type Props = {
  array: Product[]
  categoryIndex: number // 소분류 카테고리 Index
  mainCategoryIndex: number // 중분류 카테고리 Index
}

const Slider = ({ array, categoryIndex }: Props) => {
  const isEnglish = useRecoilValue(isEnglishState)

  const [imagesPerPage, setImagesPerPage] = useState(4) // 한 페이지당 이미지 개수 - PC버전 4개
  const [currentImg, setCurrentImg] = useState(0) // 현재 보고 있는 carousel 페이지 번호
  const carouselRef = useRef(null)

  const data = array // 적용분야 Data -> name, img

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="w-full flex flex-col items-center justify-center"
      >
        {data.length > 4 ? (
          // 개수가 5개 이상인 경우
          <>
            <div className="flex felx-row justify-center items-center">
              {/* 왼쪽 화살표 */}
              <button
                // 첫 페이지에서는 왼쪽 화살표 disabled 처리
                disabled={currentImg === 0}
                // 누르면 currentImg 번호 - 1
                onClick={() => setCurrentImg((prev) => prev - 1)}
                className={`relative lg:px-20 pl-10 pr-20 w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
              >
                <Image alt="arrow" src={'/image/leftArrow.svg'} fill />
              </button>
              <div>
                <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-[10rem] overflow-hidden relative">
                  {/* ----- 적용 분야 이미지 ----- */}
                  {/* PC버전 큰화면: 4개 carousel*/}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정, 3은 이미지 사이 gap 고려
                      transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
                    }}
                    className={`hidden lg:w-full lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300 lg:gap-3 lg:pl-6 lg:pr-3`}
                  >
                    {data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-1/4 h-full`}>
                        <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                      </div>
                    ))}
                  </div>
                  {/* 모바일버전 작은화면: 1개 carousel */}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: `translateX(-${100 * currentImg}%)`,
                    }}
                    className={`lg:hidden w-full h-full absolute flex transition-all duration-300`}
                  >
                    {data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-full h-full`}>
                        <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 오른쪽 화살표 */}
              {/* PC버전 큰화면: 4개 carousel */}
              <button
                // 마지막 페이지에서는 오른쪽 화살표 disabled 처리
                disabled={currentImg === data.length - imagesPerPage}
                // 누르면 currentImg 번호 + 1
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`hidden lg:flex lg:relative lg:px-20 lg:w-[3rem] lg:h-[3rem] ${
                  currentImg === data.length - 4 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
              {/* 모바일버전 작은화면: 1개 carousel */}
              <button
                disabled={currentImg === data.length - 1}
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`lg:hidden relative pl-20 pr-10 w-[3rem] h-[3rem] ${
                  currentImg === data.length - 1 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
            </div>
            <div className="lg:w-[60rem] lg:h-40 w-[20rem] h-20 overflow-hidden relative flex">
              {/* ----- 적용 분야 이름 ----- */}
              {/* PC버전 큰화면: 4개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(100 / imagesPerPage) * currentImg + 3}%)`,
                }}
                className="hidden lg:w-full lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300 lg:gap-3 lg:pl-6 lg:pr-3"
              >
                {data.map((v, i) => (
                  <div key={i} className="relative shrink-0 h-full w-1/4 text-center text-3xl font-bold my-3">
                    {v.name[isEnglish]}
                  </div>
                ))}
              </div>
              {/* 모바일버전 작은화면: 1개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${100 * currentImg}%)`,
                }}
                className="lg:hidden w-full h-full absolute flex transition-all duration-300"
              >
                {data.map((v, i) => (
                  <div key={i} className="relative shrink-0 w-full h-full text-center text-3xl font-bold my-3">
                    {v.name[isEnglish]}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // 개수가 4개 이하인 경우
          <>
            {/* PC버전 큰화면: carousel 제거하고 가운데 정렬 */}
            <div className={'hidden lg:relative lg:w-full lg:flex lg:flex-row lg:justify-center lg:gap-3'}>
              {data.map((v, i) => (
                <div key={i} className={'relative flex flex-col justify-center items-center'}>
                  <div key={i} className={`relative shrink-0 lg:w-[20rem] w-20 h-40`}>
                    <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                  </div>
                  <div key={i} className="relative shrink-0 lg:w-[20rem] w-20 h-20 text-center text-3xl font-bold my-3">
                    {v.name[isEnglish]}
                  </div>
                </div>
              ))}
            </div>
            {/* 모바일버전 작은화면: 1개 carousel */}
            <div className="flex felx-row justify-center items-center">
              {/* 왼쪽 화살표 버튼 */}
              <button
                disabled={currentImg === 0}
                onClick={() => setCurrentImg((prev) => prev - 1)}
                className={`lg:hidden relative pl-10 pr-20 w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
              >
                <Image alt="arrow" src={'/image/leftArrow.svg'} fill />
              </button>
              {/* 적용 분야 이미지 */}
              <div>
                <div className="lg:hidden w-[20rem] h-[10rem] overflow-hidden relative">
                  <div
                    ref={carouselRef}
                    style={{
                      transform: `translateX(-${100 * currentImg}%)`,
                    }}
                    className={`lg:hidden w-full h-full absolute flex transition-all duration-300`}
                  >
                    {data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-full h-full`}>
                        <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 오른쪽 화살표 버튼 */}
              <button
                disabled={currentImg === data.length - 1}
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`lg:hidden relative pl-20 pr-10 w-[3rem] h-[3rem] ${
                  currentImg === data.length - 1 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
            </div>
            {/* 적용 분야 이름 */}
            <div className="lg:hidden w-[20rem] h-20 overflow-hidden relative flex">
              <div
                ref={carouselRef}
                style={{
                  transform: `translateX(-${100 * currentImg}%)`,
                }}
                className="lg:hidden w-full h-full absolute flex transition-all duration-300"
              >
                {data.map((v, i) => (
                  <div key={i} className="relative shrink-0 w-full h-full text-center text-3xl font-bold my-3">
                    {v.name[isEnglish]}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  )
}

export default Slider
