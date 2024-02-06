'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from './Slider'
import { ModelInfo } from '@/lib/data'

interface DetailInfo {
  title: string
  backgroundImage: string
  itemFile: string
  itemTitle: string
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
        <div className={`${detailInfo.length > 2 ? 'mx-20' : 'mx-80'} flex flex-row items-center mb-40`}>
          {detailInfo.map((v, i) => {
            return (
              <div
                className={`${
                  categoryIndex == i
                    ? 'opacity-100 font-bold bg-primary-green'
                    : 'opacity-40 font-semibold bg-category-back'
                } relative w-1/${detailInfo.length} h-20 text-white`}
                onClick={() => setCategoryIndex(i)}
              >
                <div className="absolute flex justify-center items-center z-10 h-full w-full text-3xl">{v.title}</div>
                {/* <Image src={v.backgroundImage} className="z-0" fill objectFit="cover" /> */}
              </div>
            )
          })}
        </div>
        {/* 제품 이미지 */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-1/2 flex justify-center items-center mb-20">
            <Image src={detailInfo[categoryIndex].itemFile} width={1000} height={700} />
          </div>
          {/* 에너지저장용 설명 */}
          {mainCategoryIndex === 3 && (
            <div className="w-2/3 text-center mb-20">
              {categoryIndex === 0
                ? `리튬 배터리를 사용하는 UPS(무정전 전원 공급장치)는 높은 에너지 밀도와 긴 수명으로 비상 전원 솔루션에 혁신을 가져왔습니다. 이 배터리는 빠른 충전 시간과 낮은 유지보수 비용으로
경제적이며, 데이터 센터, 의료 시설, 통신 인프라, 제조업 및 산업 시설, 금융 거래소, 공공 기관, 주거/상업 건물 등 중요한 시설에서 전력 중단 시 안정적인 전원을 보장하여 시스템의 전력 공급을 강화합니다. 리튬 UPS는 환경에 미치는 영향이 적고, 장기적인 비용 효율성을 제공하여 지속 가능한 에너지 솔루션으로 주목받고 있습니다.
`
                : `ESS(Energy Storage Systems)는 재생 가능한 에너지 소스와 결합하여 전력망의 안정성을 향상시키고 에너지 효율을 높이는 혁신적인 기술입니다. 이 시스템은 과잉 에너지를 저장하여 수요가 높을 때 이를 방출함으로써 전력 공급의 균형을 유지합니다. ESS는 피크 시간의 전력 사용을 최적화하고, 재생 에너지의 변동성을 관리하여 더욱 신뢰할 수 있는 전력 공급망을 구축합니다. 이러한 기술은 장기적인 에너지 비용 절감과 함께 친환경적인 에너지 관리 솔루션으로 각광받고 있습니다. 
\n
IBT는 종합에너지 시스템으로써 신재생에너지 연계, 주파수 조정, 피크 저감, Micorgrid 등 다양한 용도의 ESS(Energy Storage System)을 구축하였고 다양한 배터리 시스템 및 PCS 선정, 설계, 제조 및 운용 기술과 3단계의 BMS를 이용하여 위험을 최소화한 신뢰성 높은 시스템을 제공하고 있습니다.
부하 패턴 분석을 통한 최적 용량 및 신뢰도 높은 배터리로 고객 맞춤형 ESS 공급과 통합 EMS를 통한 효율적이고 안정적인 운영을 보장합니다.`}
            </div>
          )}
          {/* 제품명 */}
          <div className="text-5xl font-bold mb-10">{detailInfo[categoryIndex].itemTitle}</div>

          {/* 제품특징 */}
          {mainCategoryIndex === 3 ? (
            <>
              <div className="text-4xl font-light my-20">제품 특징</div>
              {detailInfo[categoryIndex].itemAdvanced.map((v, i) => {
                return i % 2 === 1 ? (
                  <span className="w-3/4 text-xl font-light mb-4 text-center">{v}</span>
                ) : (
                  <span className="w-3/4 text-xl font-medium mb-4 text-center">{v}</span>
                )
              })}
            </>
          ) : (
            <>
              <div className="text-3xl font-light my-20">주요 특징</div>{' '}
              {detailInfo[categoryIndex].itemAdvanced.map((adv) => {
                return <div className="w-3/4 text-3xl font-light mb-4 text-center">{adv}</div>
              })}
            </>
          )}

          {/* 동력용 충전기 */}
          {mainCategoryIndex === 2 && (
            <div className="relative w-1/3 flex flex-col justify-center items-center mt-20 mb-20">
              <Image src={'/image/340동력용Lithium/341.2_동력용 Lithium_제품(충전기).png'} width={1000} height={700} />
              <div className="text-5xl font-bold mb-10">충전기</div>
            </div>
          )}
          {ModelInfo[mainCategoryIndex][categoryIndex].itemAdvanced.length === 0 ? (
            ''
          ) : (
            <>
              <div className="w-full mt-20 h-10 border border-t-0 border-b-black" />
              <Slider categoryIndex={categoryIndex} mainCategoryIndex={mainCategoryIndex} />
            </>
          )}
        </div>
      </section>
    </>
  )
}
