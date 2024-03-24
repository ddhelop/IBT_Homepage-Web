'use client'
import Image from 'next/image'
import React from 'react'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { NoMotionComponent } from '../commons/FramerMotion/Direction/NoMotion'
import { CatalogProps } from '@/lib/types'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { ESG500Data } from '@/lib/data'

export default function Contribution1({ data }: { data: CatalogProps[] }) {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="w-full flex flex-col justify-center align-middle items-center">
        <LeftMotionComponent component={motion.div}>
          <Image
            src="/ESG500/tbd.png" // 이미지 경로
            alt="Social_Contribution"
            width={650} // 너비
            height={406} // 높이
            // layout="responsive" // 레이아웃 옵션
            className="mb-12 mt-16"
          />
        </LeftMotionComponent>
        {/* 첫 단락 */}
        <div className="w-full flex flex-col lg:flex-row p-3">
          <div className="lg:w-1/4 w-full">
            <RightMotionComponent component={motion.div} className="text-xs tracking-wider text-[#9a9a9a]">
              <div className="w-32 h-12 pl-1 border-t-[#84ac58] border-t-2 flex items-center justify-left mb-8">
                {ESG500Data?.[2].subTitle1?.[isEnglish]}
              </div>
            </RightMotionComponent>
          </div>

          <LeftMotionComponent
            component={motion.p}
            className="lg:w-3/4 text-sm leading-9 tracking-wider text-[#7b7b7b]"
          >
            {ESG500Data?.[2].contents1?.[isEnglish]}
          </LeftMotionComponent>
        </div>

        {/* 두번째 단락 */}
        <div className="w-full flex flex-col lg:flex-row p-3 mt-24">
          <div className="lg:w-1/4">
            <RightMotionComponent component={motion.div} className="text-xs tracking-wider text-[#9a9a9a]">
              <div className="w-32 h-12 pl-1 border-t-[#84ac58] border-t-2 flex items-center justify-left mb-8">
                {ESG500Data?.[2].subTitle2?.[isEnglish]}
              </div>
            </RightMotionComponent>
          </div>
          <div className="lg:w-3/4 flex flex-col">
            <LeftMotionComponent component={motion.p} className="text-sm leading-9 tracking-wider text-[#7b7b7b]">
              {ESG500Data?.[2].contents2?.[isEnglish]}
            </LeftMotionComponent>
            <NoMotionComponent component={motion.h2} className="text-2xl mt-28 font-medium text-[#787878]">
              {ESG500Data?.[2].tableTitle?.[isEnglish]}
            </NoMotionComponent>
            {/* table */}
            <div className="overflow-x-auto mt-8 text-[#7b7b7b]">
              <LeftMotionComponent component={motion.p} className="text-right text-sm">
                {ESG500Data?.[2].unit?.[isEnglish]}
              </LeftMotionComponent>
              <LeftMotionComponent component={motion.table} className="min-w-full">
                <thead className="bg-[#84ac58] text-white tracking-[-0.1rem] h-12 text-sm font-light">
                  <tr>
                    <th className="px-1 py-2"></th>
                    <th className="px-1 py-2">2019</th>
                    <th className="px-1 py-2">2020</th>
                    <th className="px-1 py-2">2021</th>
                    <th className="px-1 py-2">2022</th>
                    <th className="px-1 py-2">2023</th>
                    <th className="px-1 py-2">2024</th>
                    <th className="px-1 py-2">2025</th>
                    <th className="px-1 py-2">2026</th>
                    <th className="px-1 py-2">2027</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-[#f0f0f0]">
                    <td className="border px-1 py-2 text-center">{ESG500Data?.[2].fundraising?.[isEnglish]}</td>
                    <td className="border px-4 py-2 text-center">500</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                  </tr>
                  <tr>
                    <td className="border px-1 py-2 text-center">{ESG500Data?.[2].use?.[isEnglish]}</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                  </tr>
                </tbody>
              </LeftMotionComponent>
            </div>
            <NoMotionComponent component={motion.div} className="flex flex-col">
              {/* table end*/}
              <p className="text-sm leading-9 tracking-wider text-[#7b7b7b] mb-12">
                {ESG500Data?.[2].tableContent?.[isEnglish]}
              </p>

              {data.map((el, index) => (
                <a
                  key={index}
                  href={el.pdf}
                  className="text-sm hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
                  target="_blank"
                >
                  {el.title[isEnglish]}
                </a>
              ))}
            </NoMotionComponent>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-20 p-3">
          <div className="lg:w-1/4 ">
            <RightMotionComponent component={motion.div} className="text-xs tracking-wider text-[#9a9a9a]">
              <div className="w-32 h-12 pl-1 border-t-[#84ac58] border-t-2 flex items-center justify-left mb-8">
                {ESG500Data?.[2].support?.[isEnglish]}
              </div>
            </RightMotionComponent>
          </div>
          <LeftMotionComponent component={motion.div} className="lg:w-3/4">
            <p className="text-sm leading-9 tracking-wider text-[#7b7b7b]">
              {ESG500Data?.[2].supportContent1?.[isEnglish]}
            </p>

            <p className="text-sm mt-12 leading-9 tracking-wider text-[#7b7b7b]">
              {ESG500Data?.[2].supportContent2?.[isEnglish]}
            </p>
          </LeftMotionComponent>
        </div>
      </div>
    </>
  )
}
