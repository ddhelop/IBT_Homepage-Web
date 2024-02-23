'use client'
import Image from 'next/image'
import React from 'react'
import SocialContributionComponent from './SocialContributionComponent'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { motion } from 'framer-motion'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { NoMotionComponent } from '../commons/FramerMotion/Direction/NoMotion'
import { CatalogProps } from '@/lib/types'

export default function ESG500Component({ data }: { data: CatalogProps[] }) {
  return (
    <>
      <div className="w-full p-5 md:p-20 flex flex-col items-center lg:items-start min-h-screen bg-no-repeat bg-cover bg-white overflow-hidden">
        <div className="w-3/5 flex flex-col items-center">
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/eco_friendly.svg" // 이미지 경로
              alt="eco_friendly"
              width={300} // 너비
              height={194} // 높이
              // layout="fixed" // 레이아웃 옵션
              className="mb-20 mt-40 md:mt-20"
            />
          </RightMotionComponent>
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/Eclipse1.png" // 이미지 경로
              alt="Eclipse1"
              width={410} // 너비
              height={410} // 높이
              // layout="fixed" // 레이아웃 옵션
              className=""
            />
          </RightMotionComponent>
        </div>

        {/* 2nd */}
        <div className="lg:flex w-full items-end justify-end mt-20">
          <SocialContributionComponent data={data} />
        </div>

        {/* 세번째 단락 */}
        <div className="w-full mt-60 lg:mt-72 flex flex-col items-center lg:items-start lg:px-32">
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/Reliable_Governance.svg" // 이미지 경로
              alt="Reliable_Governance"
              width={450} // 너비
              height={194} // 높이
              // layout="responsive" // 레이아웃 옵션
              className="mb-9 lg:mb-8 g:max-w-screen-md"
            />
          </RightMotionComponent>

          <RightMotionComponent component={motion.h1} className="text-2xl font-normal my-16">
            지식, 윤리, 인재의 힘
          </RightMotionComponent>

          <RightMotionComponent component={motion.p} className="font-normal text-sm text-[#999999] leading-8 mb-28">
            우리는 지속 가능한 미래를 향한 여정에서 &apos;Reliable Governance&apos;를 핵심 가치로 삼고 있습니다.
            <br /> 이는 단순히 우리의 운영 체계를 넘어서, <br />
            모든 결정과 행동이 윤리적 원칙, 인재의 성장, 그리고 지식의 발전에 기반하도록 하는 우리의 약속입니다.
          </RightMotionComponent>
        </div>

        <div className="w-full flex flex-col items-center ">
          <NoMotionComponent component={motion.div} className="flex flex-col items-center">
            <p className="font-bold text-xl text-[#79ad4b] mb-3">인재 경영: 우리의 가장 큰 자산</p>
            <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center align-middle text-[#404040] mb-12">
              <div className="w-[70%] flex flex-col items-start justify-center text-sm">
                <p className="mb-7">인재는 우리 조직의 가장 큰 자산입니다.</p>
                <p className="text-left mb-7">
                  우리는 직원들이 자신의 잠재력을 최대한 발휘할 수 있는 환경을 조성하는 데 전념하고 있습니다.{' '}
                </p>
                <p>개인의 성장과 발전이 있을 때, 우리는 함께 더 강해질 수 있다고 믿습니다.</p>
              </div>
            </div>
          </NoMotionComponent>
          <div className="flex flex-col md:flex-row gap-12">
            <RightMotionComponent component={motion.div} className="flex flex-col items-center">
              <p className="font-bold text-xl text-[#79ad4b] mb-3">윤리경영: 신뢰의 기반</p>
              <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center text-[#404040]">
                <div className="w-[80%] flex flex-col items-center justify-center text-sm">
                  <p className="mb-4">우리는 투명성과 정직성을 우리 사업의 근간으로 삼습니다.</p>
                  <p className="text-left mb-4">
                    모든 이해관계자와의 관계에서 공정하고 윤리적인 행동을 최우선으로 하며, 이는 우리가 시장에서 신뢰를
                    얻 기반이 됩니다.{' '}
                  </p>
                  <p>우리는 윤리적 결정이 장기적으로 회사와 사회에 가장 큰 가치를 제공한다고 믿습니다.</p>
                </div>
              </div>
            </RightMotionComponent>
            <LeftMotionComponent component={motion.div} className="flex flex-col items-center">
              <p className="font-bold text-xl text-[#79ad4b] mb-3">지식경영: 끊임없는 혁신의 동력</p>
              <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center text-[#404040]">
                <div className="w-[80%] flex flex-col  justify-center items-center text-sm">
                  <p className="mb-4">지식은 변화하는 시장과 기술에 대응하기 위한 우리의 열쇠입니다.</p>
                  <p className="text-left mb-4">
                    우리는 지속적인 학습과 혁신을 통해 경쟁력을 강화하고, 새로운 기회를 창출합니다.
                  </p>
                  <p>
                    지식 공유와 협업을 장려함으로써, IBT는 업계의 선도적인 위치를 유지하고, 지속 가능한 성장을 이끌어갈
                    수 있습니다
                  </p>
                </div>
              </div>
            </LeftMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
