'use client'
import { IntroItemData, ModelInfo } from '@/lib/data'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// interface ISliderProps {
//   data: { img: string; title: string; desc: string }[]
// }

const IntroSlider = (props: any) => {
  const [imagesPerPage, setImagesPerPage] = useState(4) // 한 페이지당 이미지 개수 - PC버전 4개
  const [currentImg, setCurrentImg] = useState(0) // 현재 보고 있는 carousel 페이지 번호
  const carouselRef = useRef(null)
  const [screenWidth, setScreenWidth] = useState(0)

  const data = props.data.itemAdvanced // 적용분야 Data -> name, imagePath
  console.log(data)

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
        className="w-full h-full flex flex-col items-center justify-center"
      >
        {props.data.length > 3 ? (
          // 개수가 5개 이상인 경우
          <>
            <div className="w-full flex flex-row justify-center items-center">
              {/* 왼쪽 화살표 */}
              <button
                // 첫 페이지에서는 왼쪽 화살표 disabled 처리
                disabled={currentImg === 0}
                // 누르면 currentImg 번호 - 1
                onClick={() => setCurrentImg((prev) => prev - 1)}
                className={`relative  lg:px-20 pl-10 pr-20 pb-10 w-[3rem] h-[3rem] ${currentImg === 0 && 'opacity-50'}`}
              >
                <Image alt="arrow" src={'/image/leftArrow.svg'} fill />
              </button>
              <div className="">
                <div className="w-[17rem] sm:w-[34rem] lg:w-[48rem] h-[14rem] overflow-hidden relative">
                  {/* ----- 적용 분야 이미지 ----- */}
                  {/* PC버전 큰화면: 4개 carousel*/}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정, 3은 이미지 사이 gap 고려
                      transform: transformValue,
                    }}
                    className={`hidden lg:w-full lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300  `}
                  >
                    {props.data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-56 h-56 mx-4`}>
                        <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                      </div>
                    ))}
                  </div>
                  {/* 모바일버전 작은화면: 1개 carousel */}
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: transformValue,
                    }}
                    className={`lg:hidden w-full h-full absolute flex transition-all duration-300 lg:gap-5`}
                  >
                    {props.data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-64 h-64 flex justify-center  mx-2`}>
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

            <div className="lg:w-[48rem] lg:h-40 sm:w-[34rem] w-[17rem] h-20 overflow-hidden relative flex">
              {/* ----- 적용 분야 이름 ----- */}
              {/* PC버전 큰화면: 4개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: `translateX(-${(455 / imagesPerPage) * currentImg}%)`,
                }}
                className="hidden lg:w-56 lg:h-full lg:absolute lg:flex lg:transition-all lg:duration-300 "
              >
                {props.data.map((v, i) => (
                  <div key={i} className="flex flex-col mx-4 mt-3">
                    <div className="relative shrink-0 w-56 text-base font-bold ">{v.title}</div>
                    <div className="relative shrink-0   text-base font-medium mt-2">{v.desc}</div>
                  </div>
                ))}
              </div>
              {/* 모바일버전 작은화면: 1개 carousel */}
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: transformValue,
                }}
                className="lg:hidden w-full h-full absolute flex transition-all duration-300"
              >
                {props.data.map((v, i) => (
                  <div key={i} className="flex flex-col mt-3 mx-2">
                    <div className="relative shrink-0 w-64 text-base font-bold ">{v.title}</div>
                    <div className="relative shrink-0  text-base font-medium mt-2">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // 개수가 3개 이하인 경우
          <>
            {/* PC버전 큰화면: carousel 제거하고 가운데 정렬 */}
            <div className={'hidden lg:relative lg:w-full lg:flex lg:flex-row lg:justify-center lg:gap-3'}>
              {props.data.map((v, i) => (
                <div key={i} className={'w-48 h-48 relative flex flex-col justify-center items-center'}>
                  <div key={i} className={`relative shrink-0 w-56 h-56 mx-4`}>
                    <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                  </div>
                  <div className="relative shrink-0 w-56 text-base font-bold ">{v.title}</div>
                  <div className="relative shrink-0   text-base font-medium mt-2">{v.desc}</div>
                </div>
              ))}
            </div>

            {/* 모바일버전 작은화면: 1개 carousel */}

            <div className=" flex flex-row justify-center items-center">
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
                <div className="w-[17rem] sm:w-[34rem] lg:w-[48rem] h-[14rem] overflow-hidden relative">
                  <div
                    ref={carouselRef}
                    style={{
                      // translateX로 currentImg 번호에 따라 이동 거리 조정
                      transform: transformValue,
                    }}
                    className={`lg:hidden w-full h-full absolute flex transition-all duration-300 lg:gap-5`}
                  >
                    {props.data.map((v, i) => (
                      <div key={i} className={`relative shrink-0 w-64 h-64 flex justify-center  mx-2`}>
                        <Image className="pointer-events-none" alt={`적용모델-${i}`} fill src={v.img} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 오른쪽 화살표 버튼 */}
              <button
                onClick={() => setCurrentImg((prev) => prev + 1)}
                disabled={currentImg === data.length - 6}
                className={`lg:hidden relative pl-20 pr-10 w-[3rem] h-[3rem] ${
                  currentImg === props.data.length - 1 && 'opacity-50 '
                }`}
              >
                <Image alt="arrow" src={'/image/rightArrow.svg'} fill />
              </button>
            </div>
            {/* 적용 분야 이름 */}
            <div className="lg:w-[48rem] lg:h-40 sm:w-[34rem] w-[17rem] h-20 overflow-hidden relative flex">
              <div
                ref={carouselRef}
                style={{
                  // 제품 이미지와 같게 이동
                  transform: transformValue,
                }}
                className="lg:hidden w-full h-full absolute flex transition-all duration-300"
              >
                {props.data.map((v, i) => (
                  <div key={i} className="flex flex-col mt-3 mx-2">
                    <div className="relative shrink-0 w-64 text-base font-bold ">{v.title}</div>
                    <div className="relative shrink-0  text-base font-medium mt-2">{v.desc}</div>
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
