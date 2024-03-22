'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaShield } from 'react-icons/fa6'
import { FaIndustry } from 'react-icons/fa6'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

export default function HydrogenProject() {
  const isEnglish = useRecoilValue(isEnglishState)
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
      <motion.div {...boxRightVariants} className="inline-flex min-h-80 rounded-3xl shadow-md lg:shadow-lg">
        {/* 배터리 이미지 영역 */}
        <div className="lg:relative lg:flex lg:w-3/5 lg:justify-center lg:items-center hidden">
          <Image
            alt="Hydrogen_project"
            src={'/image/hydrogen/hydrogen_intro1.png'}
            fill
            className="rounded-l-lg object-cover"
          />
        </div>
        {/* 회색 컨텐츠 영역 -> group이라는 이름을 붙여, 해당 요소에 hover할 때 다른 이벤트 발생하도록 */}
        {/* 반응형 - 모바일 버전에서는 좌측 이미지가 배경으로 들어가므로, 글자가 잘보이도록 background black으로 깔아줌 */}
        <div className="group relative flex rounded-3xl border lg:border-none  lg:rounded-none lg:rounded-r-lg flex-col flex-shrink-0 justify-between w-full lg:w-2/5 bg-gray-100 p-8">
          <div className="z-10">
            {/* 컨텐츠 상단 한줄 */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-black text-5xl lg:text-3xl font-semibold mb-1.5 lg:mt-0 mt-3">
                  {isEnglish ? 'Project' : '프로젝트'}
                </div>
                <div className="text-gray-600 text-xl lg:text-sm font-bold">
                  {isEnglish ? 'IBT Participation Project' : 'IBT 참여 프로젝트'}
                </div>
              </div>
              {/* 화살표 버튼의 경우 group hover시에만 나타나도록 hidden 설정 */}
              <Link prefetch href="/battery/batteryDetail/defense">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="transition-all block lg:hidden group-hover:flex rounded-xl w-16 h-8 p-5 items-center justify-center bg-primary-green"
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
                {isEnglish
                  ? `In the defense sector, IBT's Ni-Cd batteries are essential for the stable operation of weapon systems. In the UPS sector, they are used for the continuity of power supply. In the railway sector, they are necessary for safe operation.`
                  : '방산 분야에서는 무기 시스템의 안정적인 작동을 위해, UPS 분야에서는 전력 공급의 연속성을 위해, 철도 분야에서는 안전한 운행을 위해 IBT의 Ni-Cd 배터리가 필수적으로 사용되고 있습니다.'}
              </motion.p>
              {/* 기본은 hidden, group hover시에 나타나는 중분류 버튼 */}
              <div className="flex lg:hidden group-hover:flex flex-row lg:flex-col gap-6 text-gray-600 lg:text-lg text-2xl font-medium lg:font-bold">
                <Link prefetch className="w-full" href="/hydrogen/HydrogenDetail/progress-project">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white  hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none text-base">
                      {isEnglish ? 'Progress Project' : '진행 프로젝트'}
                      <FaShield className="flex lg:hidden mb-6 opacity-50" size={32} />
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
                <Link prefetch className="w-full" href="/hydrogen/hydrogenDetail/progress-project">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none text-base">
                      {isEnglish ? 'Installation' : '설치'}
                      <FaIndustry className="flex lg:hidden mb-6 opacity-50" size={32} />
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
        </div>
      </motion.div>
    </>
  )
}
