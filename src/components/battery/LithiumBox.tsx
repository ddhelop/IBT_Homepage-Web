'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillThunderbolt } from 'react-icons/ai'
import { MdEnergySavingsLeaf } from 'react-icons/md'

export default function LithiumBox() {
  let boxLeftVariants = {}
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768
    {
      isMobile
        ? (boxLeftVariants = {
            initial: {
              opacity: 0,
            },
            whileInView: { opacity: 1 },
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          })
        : (boxLeftVariants = {
            initial: {
              opacity: 0,
              x: +100,
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
      <motion.div {...boxLeftVariants} className="inline-flex min-h-80 rounded-3xl shadow-md lg:shadow-lg">
        {/* 회색 컨텐츠 영역 -> group이라는 이름을 붙여, 해당 요소에 hover할 때 다른 이벤트 발생하도록 */}
        {/* 반응형 - 모바일 버전에서는 우측 이미지가 배경으로 들어가므로, 글자가 잘보이도록 background black으로 깔아줌 */}
        <div className="group relative flex rounded-3xl border lg:border-none lg:rounded-none lg:rounded-l-lg flex-col flex-shrink-0 justify-between w-full lg:w-2/5 bg-gray-100 p-8">
          <div className="z-10">
            {/* 컨텐츠 상단 한줄 */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-black text-5xl lg:text-4xl font-bold lg:font-medium mb-1.5 lg:mt-0 mt-3">
                  Lithium
                </div>
                <div className="text-gray-600 text-xl lg:text-sm font-bold">리튬축전지</div>
              </div>
              {/* 화살표 버튼의 경우 group hover시에만 나타나도록 hidden 설정 */}
              <Link prefetch href="/battery/batteryDetail/power">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="transition-all block lg:hidden group-hover:flex rounded-xl w-30 p-5 items-center justify-center bg-primary-green"
                >
                  <Image alt="arrow" src={'/image/arrow.svg'} width={30} height={10} />
                </motion.button>
              </Link>
            </div>
            {/* 컨텐츠 본문 */}
            <div className="mt-8">
              {/* 기본은 보이게, group hover시 hidden */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
                className="text-2xl lg:text-sm font-medium text-gray-900 hidden lg:block group-hover:hidden"
              >
                IBT의 LiFePO4 배터리는 부피가 작고 가볍고 전력효율이 높으며, 충방전 관리가 매우 용이하여 골프카, 지게차,
                AGV, 선박, 통신, UPS, 특수용 등 다양한 영역의 고객에게 사랑받고 있습니다.
              </motion.p>
              {/* 기본은 hidden, group hover시에 나타나는 중분류 버튼 */}
              <div className="flex lg:hidden group-hover:flex flex-row lg:flex-col gap-6 text-gray-600 lg:text-lg text-2xl font-medium lg:font-bold">
                <Link prefetch className="w-full" href="/battery/batteryDetail/power">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white  hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none">
                      동력용
                      <AiFillThunderbolt className="flex lg:hidden mb-6 opacity-50" size={32} />
                      <Image
                        className="hidden lg:flex"
                        alt="arrow"
                        src={'/image/arrow_green.svg'}
                        width={30}
                        height={10}
                      />
                    </div>
                  </motion.button>
                </Link>
                <Link prefetch className="w-full" href="/battery/batteryDetail/energy-save">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none">
                      에너지저장용
                      <MdEnergySavingsLeaf className="flex lg:hidden mb-6 opacity-50" size={32} />
                      <Image
                        className="hidden lg:flex"
                        alt="arrow"
                        src={'/image/arrow_green.svg'}
                        width={30}
                        height={10}
                      />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          {/* 컨텐츠 하단 버튼 */}
          {/* 기본은 보이게, group hover시 hidden */}

          {/* 반응형 -> 모바일 버전에서는 우측 이미지가 배경으로 들어감 */}
          {/* <Image
            alt="Lithium"
            src={'/image/310인트로/312_메인(Lithium).png'}
            fill
            className="lg:hidden z-0 opacity-40"
          /> */}
        </div>
        {/* 배터리 이미지 영역 */}
        <div className="lg:relative lg:flex lg:w-3/5 lg:justify-center lg:items-center hidden">
          <Image
            alt="Lithium"
            src={'/image/310인트로/312_메인(Lithium).png'}
            fill
            className="rounded-r-lg object-cover"
          />
        </div>
      </motion.div>
    </>
  )
}
