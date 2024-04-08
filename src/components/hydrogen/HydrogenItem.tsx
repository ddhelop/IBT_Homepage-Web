'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from './Slider'
import { motion } from 'framer-motion'
import { Product } from '@/lib/types'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'

interface DetailInfo {
  id: number
  title: string[] // 소분류카테고리명
  itemFile: string // 제품이미지
  itemTitle: string[] // 제품명
  itemSubtitle: string[] // 제품추가설명
  itemAdvanced: string[] // 제품소개
  products: Product[] // 제품적용모델
}

type Props = {
  detailInfo: DetailInfo[]
  mainCategoryIndex: number // 중분류카테고리Index -> 0: 방산용 1: 산업용 2: 동력용 3: 에너지저장용
}

export default function HydrogenItem({ detailInfo, mainCategoryIndex }: Props) {
  const isEnglish = useRecoilValue(isEnglishState)

  const [categoryIndex, setCategoryIndex] = useState(0) // 선택한 소분류 카테고리를 저장, 가장 왼쪽 0번이 default
  // const categoryLength = detailInfo.length // detailInfo의 길이로 소분류 카테고리 개수 저장
  // const [categoryWidth, setCategoryWidth] = useState('')
  // // console.log(categoryWidth)
  // useEffect(() => {
  //   setCategoryWidth(`${Math.round((1 / categoryLength) * 100)}%`)
  // }, [])

  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center items-center ">
        {/* 소분류 카테고리 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className="w-full lg:w-[65%]"
        >
          <div className={'flex flex-row items-center justify-center mb-40'}>
            {detailInfo.map((v, i) => {
              return (
                // 소분류 카테고리 박스
                // 클릭하면 categoryIndex 변경
                <div
                  key={i}
                  className={`${
                    categoryIndex == i
                      ? 'opacity-100 font-semibold bg-primary-green text-white shadow-lg'
                      : 'opacity-40 font-semibold bg-gray-200 hover:bg-gray-700 border-y border-gray-500 text-black'
                  } relative w-96 h-16 z-0`}
                  onClick={() => setCategoryIndex(i)}
                >
                  <div className="absolute flex justify-center items-center z-10 w-full h-full text-2xl">
                    {v.title[isEnglish]}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
        <div className="w-full lg:w-[65%] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* 배터리 제품 이미지 */}
            <div className="relative flex lg:w-[700px] lg:h-[550px] w-[300px] h-[300px] justify-center items-center mb-20 lg:px-0 px-10">
              <Image
                alt="배터리 제품 이미지"
                src={detailInfo[categoryIndex].itemFile}
                fill
                className="object-contain"
              />
            </div>

            {/* 제품 소개 */}
            {/* 에너지저장용 설명 - 다른 페이지와 양식 다름 */}
            {mainCategoryIndex === 3 ? (
              <>
                <div className="w-full px-10 mb-10 leading-extra-loose text-xl whitespace-pre-line break-keep">
                  {detailInfo[categoryIndex].itemAdvanced[isEnglish]}
                </div>
              </>
            ) : mainCategoryIndex === 0 ? (
              // 방산용 - 제품 추가 설명 존재 X
              <div className="lg:text-5xl text-4xl text-center font-bold mb-10">
                {/* 제품명 */}
                {detailInfo[categoryIndex].itemTitle[isEnglish]}
              </div>
            ) : (
              <>
                <div className="lg:text-5xl text-4xl text-center font-bold mb-10">
                  {/* 제품명 */}
                  {detailInfo[categoryIndex].itemTitle[isEnglish]}
                </div>
                <div className="lg:text-2xl text-xl text-center font-normal mb-10 whitespace-pre-line">
                  {/* 제품 추가 설명 */}
                  {detailInfo[categoryIndex].itemSubtitle[isEnglish]}
                </div>
              </>
            )}
          </motion.div>
          {/* 제품특징 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="w-full flex flex-col items-center justify-center pt-16"
          >
            {/* 에너지저장용은 없음 */}
            {mainCategoryIndex === 3 ? (
              ''
            ) : (
              <>
                <div className="text-2xl font-normal mb-4 text-center whitespace-pre-line basis-1/2 break-keep text-balance">
                  {detailInfo[categoryIndex].itemAdvanced[isEnglish]}
                </div>
              </>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* 동력용 충전기 */}
            {mainCategoryIndex === 2 && categoryIndex === 0 && (
              <div className="relative w-1/3 flex flex-col justify-center items-center mt-20">
                <Image
                  alt="동력용 Lithium 제품(충전기)"
                  src={'/image/340동력용Lithium/341.2_동력용 Lithium_제품(충전기).png'}
                  width={1000}
                  height={700}
                />
                <div className="text-4xl font-bold mx-10">{isEnglish ? 'Charger' : '충전기'}</div>
              </div>
            )}
            {/* 제품의 적용분야 */}
            {detailInfo[categoryIndex].products.length === 0 ? (
              ''
            ) : mainCategoryIndex === 1 || mainCategoryIndex === 3 ? (
              <>
                <div className="w-full mt-20 h-1 border border-t-0 border-x-0 border-b-gray-400" />
                {/* 산업용Nicd(1), 에너지저장용Lithium(3)의 경우 "Apply" */}
                <div className="text-3xl font-bold py-10">Apply</div>
                {/* 적용되는 분야 슬라이드 Carousel */}
                <Slider
                  array={detailInfo[categoryIndex].products}
                  categoryIndex={categoryIndex}
                  mainCategoryIndex={mainCategoryIndex}
                />
              </>
            ) : (
              <>
                <div className="w-full mt-20 h-1 border border-t-0 border-x-0 border-b-gray-400" />
                {/* 방산용Nicd(0), 동력용Lithium(2)의 경우 "적용 모델" */}
                <div className="text-3xl font-bold py-10">{isEnglish ? 'Application Model' : '적용 모델'}</div>
                {/* 적용되는 분야 슬라이드 Carousel */}
                <Slider
                  array={detailInfo[categoryIndex].products}
                  categoryIndex={categoryIndex}
                  mainCategoryIndex={mainCategoryIndex}
                />
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
