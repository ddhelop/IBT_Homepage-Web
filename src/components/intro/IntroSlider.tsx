'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { NewsData } from '@/lib/types'
import Link from 'next/link'

const IntroSlider = ({ data }: NewsData) => {
  const [imagesPerPage, setImagesPerPage] = useState(4) // 한 페이지당 이미지 개수 - PC버전 4개
  const [currentImg, setCurrentImg] = useState(0) // 현재 보고 있는 carousel 페이지 번호
  const carouselRef = useRef(null)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 window 객체를 사용합니다.
    setScreenWidth(window.innerWidth)

    // 화면 크기가 변경될 때마다 screenWidth 상태를 업데이트합니다.
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // 클린업 함수로 이벤트 리스너를 제거합니다.
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  let transformValue

  if (screenWidth > 1024) {
    // 넓은 화면의 경우
    transformValue = `translateX(-${(133 / imagesPerPage) * currentImg}%)`
  } else if (screenWidth > 767) {
    // 중간 크기 화면의 경우
    transformValue = `translateX(-${(200 / imagesPerPage) * currentImg}%)`
  } else if (screenWidth > 639) {
    // 작은 화면(모바일)의 경우
    transformValue = `translateX(-${(200 / imagesPerPage) * currentImg}%)`
  } else if (screenWidth < 639) {
    // 작은 화면(모바일)의 경우
    transformValue = `translateX(-${(399 / imagesPerPage) * currentImg}%)`
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="w-full h-[27rem] lg:h-full flex flex-col items-center justify-center"
      >
        {data?.length > 4 ? (
          // 개수가 5개 이상인 경우
          <>
            <div className="w-full flex flex-row justify-center items-center">
              {/* 왼쪽 화살표 */}
              <button
                // 첫 페이지에서는 왼쪽 화살표 disabled 처리
                disabled={currentImg === 0}
                // 누르면 currentImg 번호 - 1
                onClick={() => setCurrentImg((prev) => prev - 1)}
                className={`relative left-[4.5rem] top-[13px] lg:px-20 pl-10 pr-20 pb-10 w-[3rem] h-[3rem] ${
                  currentImg === 0 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/leftArrow.svg'} fill />
              </button>
              <div>
                <div className="w-[29.5rem] lg:w-[46rem] xl:w-[70rem] 2xl:w-[82rem] 3xl:w-[98rem] h-80 lg:h-64 2xl:h-72 overflow-hidden relative">
                  {/* ----- 적용 분야 이미지 ----- */}

                  {/* 1920px 큰화면: 4개 carousel*/}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정, 3은 이미지 사이 gap 고려
                      transform: `translateX(-${(100 / imagesPerPage) * currentImg}%)`,
                    }}
                    className={`hidden 3xl:flex w-full h-full absolute transition-all duration-300`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-60 h-60 mx-[4.71rem] border-2`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* PC버전 큰화면: 3개 carousel*/}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정, 3은 이미지 사이 gap 고려
                      transform: `translateX(-${(137 / imagesPerPage) * currentImg}%)`,
                    }}
                    className={`hidden 2xl:flex 3xl:hidden w-full h-full absolute transition-all duration-300`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-72 h-72 mx-20 border-2`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* 작은 PC버전 큰화면: 3개 carousel*/}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정, 3은 이미지 사이 gap 고려
                      transform: `translateX(-${(132 / imagesPerPage) * currentImg}%)`,
                    }}
                    className={`hidden xl:flex 2xl:hidden w-full h-full absolute transition-all duration-300`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-56 h-56 mx-[4.55rem] border-2`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* 태블릿버전 작은화면: 2개 carousel */}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: `translateX(-${(200 / imagesPerPage) * currentImg}%)`,
                    }}
                    className={`hidden lg:flex xl:hidden w-full h-full absolute transition-all duration-300`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-64 h-64 flex mx-[3.5rem] border-2`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* 모바일버전 작은화면: 1개 carousel */}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: `translateX(-${(405 / imagesPerPage) * currentImg}%)`,
                    }}
                    className={`flex lg:hidden w-full h-full absolute transition-all duration-300`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-80 h-80 flex justify-center border-2 mx-20`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 오른쪽 화살표 */}
              {/* PC버전 큰화면: 4개 carousel */}
              <button
                // 마지막 페이지에서는 오른쪽 화살표 disabled 처리
                disabled={currentImg === data?.length - 3}
                // 누르면 currentImg 번호 + 1
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`hidden right-[4.3rem] xl:right-[5rem] 2xl:right-[2.9rem] 3xl:right-[5.5rem] top-[13px] lg:flex lg:relative lg:px-20 lg:w-[3rem] lg:h-[3rem] ${
                  currentImg === data?.length - 3 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
              {/* 태블릿버전 작은화면: 2개 carousel */}
              <button
                disabled={currentImg === data?.length - 2}
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`hidden top-[13px] right-[4.3rem] sm:flex lg:hidden relative pl-20 pr-10 w-[3rem] h-[3rem] ${
                  currentImg === data?.length - 2 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
              {/* 모바일버전 작은화면: 1개 carousel */}
              <button
                disabled={currentImg === data?.length - 1}
                onClick={() => setCurrentImg((prev) => prev + 1)}
                className={`sm:hidden top-[13px] right-[4.3rem] relative pl-20 pr-10 w-[3rem] h-[3rem] ${
                  currentImg === data?.length - 1 && 'opacity-50'
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
            </div>

            <div className="w-[29.5rem] lg:w-[46rem] xl:w-[70rem] 2xl:w-[82rem] 3xl:w-[98rem] h-80 lg:h-64 2xl:h-72 overflow-hidden relative">
              {/* ----- 적용 분야 이름 ----- */}
              {/* PC버전 큰화면: 4개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(100 / imagesPerPage) * currentImg}%)`,
                }}
                className={`hidden 3xl:flex w-full h-full absolute transition-all duration-300`}
              >
                {data?.map((v, i) => (
                  <div key={i} className="h-32 flex flex-col mx-[5.2rem] mt-3 ">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-56 text-base font-bold ">{v.title}</div>
                      <div className="relative h-[3.3rem] shrink-0 text-base font-medium mt-2 overflow-hidden">
                        {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* PC버전 큰화면: 3개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(137 / imagesPerPage) * currentImg}%)`,
                }}
                className={`hidden 2xl:flex 3xl:hidden w-full h-full absolute transition-all duration-300`}
              >
                {data?.map((v, i) => (
                  <div key={i} className="h-32 flex flex-col mx-28 mt-8">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-56 text-base font-bold ">{v.title}</div>
                      <div className="relative h-[3.3rem] shrink-0 text-base font-medium mt-2 overflow-hidden">
                        {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* 작은 PC버전 큰화면: 3개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(132 / imagesPerPage) * currentImg}%)`,
                }}
                className={`hidden xl:flex 2xl:hidden w-full h-full absolute transition-all duration-300`}
              >
                {data?.map((v, i) => (
                  <div key={i} className="h-32 flex flex-col mx-[4.5rem] ">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-56 text-base font-bold ">{v.title}</div>
                      <div className="relative h-[3.3rem] shrink-0 text-base font-medium mt-2 overflow-hidden">
                        {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* 태블릿버전 작은화면: 2개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(205 / imagesPerPage) * currentImg}%)`,
                }}
                className={`hidden lg:flex xl:hidden w-full h-full absolute transition-all duration-300`}
              >
                {data?.map((v, i) => (
                  <div key={i} className="flex flex-col h-40 mt-3 mx-[3.54rem] ">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-64 text-base font-bold ">{v.title}</div>
                      <div className="relative shrink-0 h-12 text-base font-medium mt-2 overflow-hidden">
                        {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* 모바일버전 작은화면: 1개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(405 / imagesPerPage) * currentImg}%)`,
                }}
                className={`flex lg:hidden w-full h-full absolute transition-all duration-300`}
              >
                {data?.map((v, i) => (
                  <div key={i} className="flex flex-col h-40 mt-3 mx-28 ">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-64 text-base font-bold ">{v.title}</div>
                      <div className="relative shrink-0 h-12 text-base font-medium mt-2 overflow-hidden">
                        {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // 개수가 4개 이하인 경우
          <>
            {/* PC버전 큰화면: carousel 제거하고 가운데 정렬 */}
            <div className={'hidden lg:relative lg:w-full lg:flex lg:flex-row lg:justify-center lg:gap-36'}>
              {data?.map((v, i) => (
                <div
                  key={i}
                  className={'w-52 h-full relative flex flex-col justify-center items-center overflow-hidden'}
                >
                  <Link href={`/customer/news/${v.id}`}>
                    <div key={i} className={`relative shrink-0 w-52 h-56 mx-4 `}>
                      <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                    </div>
                    <div className="relative shrink-0 w-52 text-base font-bold overflow-hidden">{v.title}</div>
                    <div className="relative shrink-0 w-52 h-40 lg:h-12 text-base font-medium mt-2 break-keep">
                      {v.desc.length > 33 ? `${v.desc.slice(0, 33)}...` : v.desc}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* 모바일버전 작은화면: 1개 carousel */}

            <div className=" flex flex-row justify-center items-center ">
              {/* 왼쪽 화살표 버튼 */}
              <button
                disabled={currentImg === 0}
                onClick={() => setCurrentImg((prev) => prev - 1)}
                className={`lg:hidden relative px-16 top-[20px] w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
              >
                <Image alt="arrow" src={'/image/leftArrow.svg'} fill />
              </button>
              {/* 적용 분야 이미지 */}
              <div>
                <div className="w-[17rem] sm:w-[34rem] lg:w-[48rem] h-[14rem] lg:hidden overflow-hidden relative">
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: transformValue,
                    }}
                    className={`lg:hidden w-full h-full absolute flex transition-all duration-300 lg:gap-5`}
                  >
                    {data?.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-64 h-64 flex justify-center  mx-2`}>
                        <Link href={`/customer/news/${v.id}`}>
                          <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 오른쪽 화살표 버튼 */}
              <button
                onClick={() => setCurrentImg((prev) => prev + 1)}
                disabled={currentImg === data?.length - 1}
                className={`lg:hidden relative pl-20 top-[20px] pr-10 w-[3rem] h-[3rem] ${
                  currentImg === data?.length - 1 && 'opacity-50 '
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
            </div>
            {/* 적용 분야 이름 */}
            <div className="lg:w-[48rem] sm:w-[34rem] w-[17rem] lg:h-40 h-24  relative lg:hidden flex overflow-hidden">
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: transformValue,
                }}
                className="lg:hidden w-full h-full absolute flex transition-all duration-300 "
              >
                {data?.map((v, i) => (
                  <div key={i} className="flex flex-col mt-3 mx-2">
                    <Link href={`/customer/news/${v.id}`}>
                      <div className="relative shrink-0 w-64 text-base font-bold ">{v.title}</div>
                      <div className="relative shrink-0 text-base font-medium mt-2 ">
                        {v.desc.length > 40 ? `${v.desc.slice(0, 45)}...` : v.desc}
                      </div>
                    </Link>
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

export default IntroSlider
