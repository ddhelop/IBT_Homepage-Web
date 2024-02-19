'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from './Slider'
import { ModelInfo, energySaveList } from '@/lib/data'
import { motion } from 'framer-motion'

interface DetailInfo {
  title: string // 소분류카테고리명
  itemFile: string // 제품이미지
  itemTitle: string // 제품명
  itemSubTitle: string // 제품추가설명
  itemAdvanced: string[] // 제품적용분야
}

type Props = {
  detailInfo: DetailInfo[]
  mainCategoryIndex: number // 중분류카테고리Index -> 0: 방산용 1: 산업용 2: 동력용 3: 에너지저장용
}

export default function BatteryItem({ detailInfo, mainCategoryIndex }: Props) {
  const [categoryIndex, setCategoryIndex] = useState(0) // 선택한 소분류 카테고리를 저장, 가장 왼쪽 0번이 default
  const categoryLength = detailInfo.length // detailInfo의 길이로 소분류 카테고리 개수 저장
  const categoryWidth = Math.round((1 / categoryLength) * 100) // % 단위
  return (
    <>
      <section className="w-full min-h-screen">
        {/* 소분류 카테고리 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
        >
          {/* 소분류 카테고리 개수에 따라 margin 조절 */}
          <div
            className={`${
              categoryLength === 5 ? 'lg:mx-10 mx-5' : categoryLength === 3 ? 'lg:mx-40 mx-5' : 'lg:mx-64 mx-5'
            } flex flex-row items-center mb-40`}
          >
            {detailInfo.map((v, i) => {
              return (
                // 소분류 카테고리 박스
                // 넓이는 {( 1 / 소분류 카테고리 개수 ) * 100}% 로 계산
                // 클릭하면 categoryIndex 변경
                <div
                  key={i}
                  className={`${
                    categoryIndex == i
                      ? 'opacity-100 font-semibold bg-primary-green'
                      : 'opacity-40 font-semibold bg-category-back hover:bg-gray-700'
                  } relative w-[${categoryWidth}%] h-20 text-white z-0`}
                  onClick={() => setCategoryIndex(i)}
                >
                  <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">{v.title}</div>
                </div>
              )
            })}
          </div>
        </motion.div>
        <div className="w-full flex flex-col items-center justify-center">
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
            <div className="relative flex lg:w-[1000px] lg:h-[700px] w-[600px] h-[400px] justify-center items-center mb-20 lg:px-0 px-10">
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
                <div className="lg:w-2/3 w-full px-10 mb-10 leading-extra-loose text-xl">
                  {/* UPS용 */}
                  {energySaveList[categoryIndex].itemAdvanced[0]}
                </div>
                <div className="lg:w-2/3 w-full px-10 mb-20 leading-extra-loose text-xl">
                  {/* ESS용 */}
                  {energySaveList[categoryIndex].itemAdvanced[1]}
                </div>
              </>
            ) : mainCategoryIndex === 0 ? (
              // 방산용 - 제품 추가 설명 존재 X
              <div className="lg:text-5xl text-4xl text-center font-bold mb-10">
                {/* 제품명 */}
                {detailInfo[categoryIndex].itemTitle}
              </div>
            ) : (
              <>
                <div className="lg:text-5xl text-4xl text-center font-bold mb-10">
                  {/* 제품명 */}
                  {detailInfo[categoryIndex].itemTitle}
                </div>
                <div className="lg:text-2xl text-xl text-center font-[350] mb-10">
                  {/* 제품 추가 설명 */}
                  {detailInfo[categoryIndex].itemSubTitle}
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
                {detailInfo[categoryIndex].itemAdvanced.map((adv, id) => {
                  return (
                    <div key={id} className="w-3/4 text-2xl font-[350] mb-4 text-center">
                      {adv}
                    </div>
                  )
                })}
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
              <div className="relative w-1/3 flex flex-col justify-center items-center mt-20 mb-20">
                <Image
                  alt="동력용 Lithium 제품(충전기)"
                  src={'/image/340동력용Lithium/341.2_동력용 Lithium_제품(충전기).png'}
                  width={1000}
                  height={700}
                />
                <div className="text-4xl font-bold mx-10">충전기</div>
              </div>
            )}
            {/* 제품의 적용분야 */}
            {ModelInfo[mainCategoryIndex][categoryIndex].itemAdvanced.length === 0 ? (
              ''
            ) : mainCategoryIndex === 1 || mainCategoryIndex === 3 ? (
              <>
                <div className="w-full mt-20 h-10 border border-t-0 border-b-gray-400" />
                {/* 산업용Nicd(1), 에너지저장용Lithium(3)의 경우 "Apply" */}
                <div className="text-3xl font-bold py-10">Apply</div>
                {/* 적용되는 분야 슬라이드 Carousel */}
                <Slider categoryIndex={categoryIndex} mainCategoryIndex={mainCategoryIndex} />
              </>
            ) : (
              <>
                <div className="w-full mt-20 h-10 border border-t-0 border-b-gray-400" />
                {/* 방산용Nicd(0), 동력용Lithium(2)의 경우 "적용 모델" */}
                <div className="text-3xl font-bold py-10">적용 모델</div>
                {/* 적용되는 분야 슬라이드 Carousel */}
                <Slider categoryIndex={categoryIndex} mainCategoryIndex={mainCategoryIndex} />
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
