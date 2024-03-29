'use client'
import Image from 'next/image'
import React from 'react'
import SocialContributionComponent from './SocialContributionComponent'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { motion } from 'framer-motion'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { NoMotionComponent } from '../commons/FramerMotion/Direction/NoMotion'
import { CatalogProps } from '@/lib/types'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { ESG500Data } from '@/lib/data'

export default function ESG500Component({ data }: { data: CatalogProps[] }) {
  const isEnglish = useRecoilValue(isEnglishState)

  return (
    <>
      <div className="w-full p-5 md:p-20 flex flex-col items-center lg:items-start min-h-screen bg-no-repeat bg-cover bg-white overflow-hidden whitespace-pre-wrap break-words">
        <div className="flex flex-col w-full mt-40 md:mt-20 items-center lg:gap-x-16 lg:flex-row">
          <div className="w-1/2 flex flex-col items-center">
            <RightMotionComponent component={motion.div}>
              <Image
                src="/ESG500/eco_friendly.svg" // 이미지 경로
                alt="eco_friendly"
                width={300} // 너비
                height={194} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mb-20"
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
          <LeftMotionComponent
            component={motion.div}
            className="flex flex-col w-3/5 lg:w-2/5 mt-20 lg:mt-2 break-keep tracking-wider"
          >
            <h2 className="text-2xl leading-9 mb-12 text-center lg:text-left">{ESG500Data?.[0].title?.[isEnglish]}</h2>
            <p className="leading-7 text-sm text-[#7b7b7b] text-wrap ">{ESG500Data?.[0].contents?.[isEnglish]}</p>
          </LeftMotionComponent>
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
            {ESG500Data?.[4].title?.[isEnglish]}
          </RightMotionComponent>

          <RightMotionComponent component={motion.p} className="font-normal text-sm text-[#999999] leading-8 mb-28">
            {ESG500Data?.[4].contents?.[isEnglish]}
          </RightMotionComponent>
        </div>

        <div className="w-full flex flex-col items-center ">
          <NoMotionComponent component={motion.div} className="flex flex-col items-center break-keep">
            <p className="font-bold text-xl text-[#79ad4b] mb-3">{ESG500Data?.[4].subTitle1?.[isEnglish]}</p>
            <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center align-middle text-[#404040] mb-12">
              <div className="w-[70%] flex flex-col items-start justify-center text-sm">
                <p className="">{ESG500Data?.[4].contents1?.[isEnglish]}</p>
              </div>
            </div>
          </NoMotionComponent>
          <div className="flex flex-col md:flex-row gap-12">
            <RightMotionComponent component={motion.div} className="flex flex-col items-center break-keep">
              <p className="font-bold text-xl text-[#79ad4b] mb-3">{ESG500Data?.[4].subTitle2?.[isEnglish]}</p>
              <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center text-[#404040]">
                <div className="w-[80%] flex flex-col items-center justify-center text-sm">
                  <p className="">{ESG500Data?.[4].contents2?.[isEnglish]}</p>
                </div>
              </div>
            </RightMotionComponent>
            <LeftMotionComponent component={motion.div} className="flex flex-col items-center break-keep">
              <p className="font-bold text-xl text-[#79ad4b] mb-3">{ESG500Data?.[4].subTitle3?.[isEnglish]}</p>
              <div className="w-96 h-60 bg-[#d9d9d9] rounded-3xl py-5 flex justify-center text-[#404040]">
                <div className="w-[80%] flex flex-col  justify-center items-center text-sm">
                  <p className="">{ESG500Data?.[4].contents3?.[isEnglish]}</p>
                </div>
              </div>
            </LeftMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
