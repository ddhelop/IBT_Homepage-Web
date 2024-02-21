'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function NicdBox() {
  let boxRightVariants = {}
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768
    {
      isMobile
        ? (boxRightVariants = {
            initial: {
              opacity: 0,
            },
            whileInView: { opacity: 1 },
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          })
        : (boxRightVariants = {
            initial: {
              opacity: 0,
              x: -100,
            },
            whileInView: { opacity: 1, x: 0 },
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          })
    }
  }

  return (
    <>
      <motion.div {...boxRightVariants} className="inline-flex h-[30rem] lg:mx-[17%]">
        {/* 배터리 이미지 영역 */}
        <div className="lg:relative lg:flex lg:w-2/3 lg:h-full lg:justify-center lg:items-center hidden">
          <Image alt="Ni-cd" src={'/image/310인트로/312_메인(Ni-cd).png'} fill />
        </div>
        {/* 회색 컨텐츠 영역 -> group이라는 이름을 붙여, 해당 요소에 hover할 때 다른 이벤트 발생하도록 */}
        {/* 반응형 - 모바일 버전에서는 좌측 이미지가 배경으로 들어가므로, 글자가 잘보이도록 background black으로 깔아줌 */}
        <div className="group relative flex flex-col flex-shrink-0 justify-between lg:w-1/3 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
          <div className="z-10">
            {/* 컨텐츠 상단 한줄 */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <div className="lg:text-4xl text-5xl font-bold mb-1.5 lg:mt-0 mt-3">Ni-cd</div>
                <div className="lg:text-sm text-md font-bold pl-1.5">니켈카드뮴축전지</div>
              </div>
              {/* 화살표 버튼의 경우 group hover시에만 나타나도록 hidden 설정 */}
              <Link href="/battery/batteryDetail/defense">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="hidden transition-all group-hover:flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green"
                >
                  <Image alt="arrow" src={'/image/arrow.svg'} width={30} height={10} />
                </motion.button>
              </Link>
            </div>
            {/* 컨텐츠 본문 */}
            <div className="mt-5">
              {/* 기본은 보이게, group hover시 hidden */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
                className="text-2xl font-bold leading-10 pl-1 group-hover:hidden lg:text-base lg:leading-10"
              >
                방산 분야에서는 무기 시스템의 안정적인 작동을 위해, UPS 분야에서는 전력 공급의 연속성을 위해, <br />
                철도 분야에서는 안전한 운행을 위해 IBT의 Ni-cd 배터리가 필수적으로 사용되고 있습니다.
              </motion.p>
              {/* 기본은 hidden, group hover시에 나타나는 중분류 버튼 */}
              <div className="hidden group-hover:flex flex-col gap-5 pt-10">
                <Link href="/battery/batteryDetail/defense">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-full hover:bg-gray-300 hover:text-black rounded-2xl"
                  >
                    <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-bold">
                      방산용
                      <Image alt="arrow" src={'/image/arrow_green.svg'} width={30} height={10} />
                    </div>
                  </motion.button>
                </Link>
                <Link href="/battery/batteryDetail/industry">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full hover:bg-gray-300 hover:text-black rounded-2xl"
                  >
                    <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-bold">
                      산업용
                      <Image alt="arrow" src={'/image/arrow_green.svg'} width={30} height={10} />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          {/* 컨텐츠 하단 버튼 */}
          {/* 기본은 보이게, group hover시 hidden */}
          <div className="flex justify-end group-hover:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              className="flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green z-10"
            >
              <Image alt="arrow" src={'/image/arrow.svg'} width={30} height={10} />
            </motion.button>
          </div>
          {/* 반응형 -> 모바일 버전에서는 좌측 이미지가 배경으로 들어감 */}
          <Image alt="Ni-cd" src={'/image/310인트로/312_메인(Ni-cd).png'} fill className="lg:hidden z-0 opacity-40" />
        </div>
      </motion.div>
    </>
  )
}
