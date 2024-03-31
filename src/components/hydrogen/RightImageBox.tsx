'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillThunderbolt } from 'react-icons/ai'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import { isEnglishState } from '@/context/recoil-context'
import { useRecoilValue } from 'recoil'

interface BoxProps {
  img: string
  title: string[]
  subTitle: string[]
  text1: string[]
  link1: string
  text2: string[]
  link2: string
  explain_ko: string
  explain_en: string
}

export default function RightImageBox(props: BoxProps) {
  const isEnglish = useRecoilValue(isEnglishState)

  const { img, title, subTitle, text1, link1, text2, link2, explain_ko, explain_en } = props

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
                <div
                  className={`text-black lg:text-2xl font-semibold mb-1.5 lg:mt-0 mt-3 lg:whitespace-pre-wrap ${
                    isEnglish ? 'lg:text-xl text-3xl mr-1' : 'lg:text-2xl text-4xl'
                  } `}
                >
                  {title[isEnglish]}
                </div>
                <div className="text-gray-600 text-xl lg:text-sm font-bold">{subTitle[isEnglish]}</div>
              </div>
              {/* 화살표 버튼의 경우 group hover시에만 나타나도록 hidden 설정 */}
              <Link prefetch href={link1}>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="transition-all flex rounded-xl w-16 h-8 p-5 items-center justify-center bg-primary-green"
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
                className="text-2xl lg:text-sm font-medium text-gray-900 hidden lg:block group-hover:hidden whitespace-pre-line"
              >
                {isEnglish ? explain_en : explain_ko}
              </motion.p>
              {/* 기본은 hidden, group hover시에 나타나는 중분류 버튼 */}
              <div className="flex lg:hidden group-hover:flex flex-row lg:flex-col gap-6 text-gray-600 lg:text-lg text-2xl font-medium lg:font-bold">
                <Link prefetch className="w-full" href={link1}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white text-lg hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none">
                      {text1[isEnglish]}
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
                <Link prefetch className="w-full" href={link2}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full"
                  >
                    <div className="flex lg:h-auto bg-white hover:bg-gray-300 rounded-2xl lg:bg-inherit flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-4 shadow-sm lg:shadow-none text-lg">
                      {text2[isEnglish]}
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
        </div>
        {/* 배터리 이미지 영역 */}
        <div className="lg:relative lg:flex lg:w-3/5 lg:justify-center lg:items-center hidden">
          <Image alt="Lithium" src={img} fill className="rounded-r-lg object-cover" />
        </div>
      </motion.div>
    </>
  )
}
