'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from './Slider'
import { ModelInfo } from '@/lib/data'
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
              detailInfo.length == 5 ? 'mx-10' : detailInfo.length == 3 ? 'lg:mx-40 mx-5' : 'lg:mx-64 mx-5'
            } flex flex-row items-center mb-40`}
          >
            {detailInfo.map((v, i) => {
              return (
                <div
                  className={`${
                    categoryIndex == i
                      ? 'opacity-100 font-semibold bg-primary-green'
                      : 'opacity-40 font-semibold bg-category-back hover:bg-gray-700'
                  } relative w-1/${detailInfo.length} h-20 text-white z-0`}
                  onClick={() => setCategoryIndex(i)}
                >
                  <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">{v.title}</div>
                </div>
              )
            })}
          </div>
        </motion.div>
        {/* <div
          className={`${
            detailInfo.length == 5 ? 'mx-10' : detailInfo.length == 3 ? 'lg:mx-48 mx-5' : 'lg:mx-80 mx-5'
          } flex flex-row items-center mb-40`}
        >
          <div className={`relative w-1/5 h-20 text-white z-0`}>
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">d</div>
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">d</div>
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">d</div>
            <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">d</div>
          </div>
        </div> */}
        {/* 제품 이미지 */}
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

            {/* 에너지저장용 설명 */}
            {mainCategoryIndex === 3 ? (
              categoryIndex === 0 ? (
                <>
                  <div className="lg:w-2/3 w-full px-10 mb-10 leading-extra-loose text-xl">
                    {`리튬 배터리를 사용하는 UPS(무정전 전원 공급장치)는 높은 에너지 밀도와 긴 수명으로 비상 전원 솔루션에 혁신을 가져왔습니다.
                  이 배터리는 빠른 충전 시간과 낮은 유지보수 비용으로 경제적이며, 데이터 센터, 의료 시설, 통신 인프라, 제조업 및 산업 시설,
                  금융 거래소, 공공 기관, 주거/상업 건물 등 중요시설에서 전력 중단 시 안정적인 전원을 보장하여 시스템의 전력 공급을 강화합니다. 
                  리튬 UPS는 환경에 미치는 영향이 적고, 장기적인 비용 효율성을 제공하여 지속 가능한 에너지 솔루션으로 주목받고 있습니다.`}
                  </div>
                  <div className="lg:w-2/3 w-full px-10 mb-20 leading-extra-loose text-xl">{`IBT는 경량화, 소형화된 배터리와 통합 배터리 관리 시스템 BMS를 통해 지속적으로 배터리를 최적화 하여 성능을 극대화 하고
                  안정성을 유지하며, Module 구성으로 필요한 용량 및 전압에 맞게 제공합니다.`}</div>
                </>
              ) : (
                <>
                  <div className="lg:w-2/3 w-full px-10 mb-10 leading-extra-loose text-xl">
                    {`ESS(Energy Storage Systems)는 재생 가능한 에너지 소스와 결합하여 전력망의 안정성을 향상시키고 에너지 효율을 높이는 혁신적인
                  기술입니다. 이 시스템은 과잉 에너지를 저장하여 수요가 높을 때 이를 방출함으로써 전력 공급의 균형을 유지합니다. ESS는 피크 시간의 전력 사용을
                  최적화하고, 재생 에너지의 변동성을 관리하여 더욱 신뢰할 수 있는 전력 공급망을 구축합니다. 이러한 기술은 장기적인 에너지 비용 절감과
                  함께 친환경적인 에너지 관리 솔루션으로 각광받고 있습니다.`}
                  </div>
                  <div className="lg:w-2/3 w-full px-10 mb-20 leading-extra-loose text-xl">
                    {`IBT는 종합에너지 시스템으로써 신재생에너지 연계, 주파수 조정, 피크 저감, Micorgrid 등 다양한 용도의 ESS(Energy Storage System)을
                  구축하였고 다양한 배터리 시스템 및 PCS 선정, 설계, 제조 및 운용 기술과 3단계의 첨단 BMS를 이용하여 위험을 최소화한 신뢰성 높은 시스템을
                  제공하고 있습니다. 다양한 ESS 응용 분야에 적합하도록 설계되어, 시스템의 확장 요구 사항에 유연하게 대응할 수 있는 IBT는 부하 패턴 분석을 통한
                  최적 용량 및 신뢰도 높은 배터리로 고객 맞춤형 ESS 공급과 통합 EMS를 통한 효율적이고 안정적인 운영을 보장합니다.`}
                  </div>
                </>
              )
            ) : mainCategoryIndex === 0 ? (
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
                {detailInfo[categoryIndex].itemAdvanced.map((adv) => {
                  return <div className="w-3/4 text-2xl font-[350] mb-4 text-center">{adv}</div>
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
