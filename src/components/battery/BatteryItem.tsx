'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from './Slider'
import { ModelInfo, energySaveList } from '@/lib/data'
import { motion } from 'framer-motion'

interface DetailInfo {
  title: string
  itemFile: string
  itemTitle: string
  itemSubTitle: string
  itemAdvanced: string[]
}

type Props = {
  detailInfo: DetailInfo[]
  mainCategoryIndex: number
}

export default function BatteryItem({ detailInfo, mainCategoryIndex }: Props) {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const categoryLength = detailInfo.length

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
          <div
            className={`${
              categoryLength === 5 ? 'lg:mx-10 mx-5' : categoryLength === 3 ? 'lg:mx-40 mx-5' : 'lg:mx-64 mx-5'
            } flex flex-row items-center mb-40`}
          >
            {detailInfo.map((v, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    categoryIndex == i
                      ? 'opacity-100 font-semibold bg-primary-green'
                      : 'opacity-40 font-semibold bg-category-back hover:bg-gray-700'
                  } relative w-1/${categoryLength} h-20 text-white z-0`}
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
            <div className="relative lg:w-1/2 w-full flex justify-center items-center mb-20 lg:px-0 px-10">
              <Image alt="배터리 제품 이미지" src={detailInfo[categoryIndex].itemFile} width={1000} height={700} />
            </div>

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
                <div className="lg:text-2xl text-xl text-center font-bold mb-10">
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

            {ModelInfo[mainCategoryIndex][categoryIndex].itemAdvanced.length === 0 ? (
              ''
            ) : mainCategoryIndex === 1 || mainCategoryIndex === 3 ? (
              <>
                <div className="w-full mt-20 h-10 border border-t-0 border-b-gray-400" />
                <div className="text-3xl font-bold py-10">Apply</div>
                <Slider categoryIndex={categoryIndex} mainCategoryIndex={mainCategoryIndex} />
              </>
            ) : (
              <>
                <div className="w-full mt-20 h-10 border border-t-0 border-b-gray-400" />
                <div className="text-3xl font-bold py-10">적용 모델</div>
                <Slider categoryIndex={categoryIndex} mainCategoryIndex={mainCategoryIndex} />
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
