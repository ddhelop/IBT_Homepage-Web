'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { NoMotionComponent } from '../commons/FramerMotion/Direction/NoMotion'
import axios from 'axios'

export default function Contribution1() {
  const [pdf, setPdf] = useState<{ pdf: string; title: string }[]>([])

  useEffect(() => {
    async function fetchPDF(): Promise<void> {
      try {
        const response = await axios.get(`http://localhost:3000/api/admin/esg-pdf`)
        setPdf(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    void fetchPDF()
  }, []) // 빈 의존성 배열로 마운트 시에만 실행

  return (
    <>
      <div className="w-full flex flex-col justify-center align-middle items-center">
        <LeftMotionComponent component={motion.div}>
          <Image
            src="/ESG500/tbd.png" // 이미지 경로
            alt="Social_Contribution"
            width={1300} // 너비
            height={406} // 높이
            // layout="responsive" // 레이아웃 옵션
            className="mb-28 mt-28"
          />
        </LeftMotionComponent>
        {/* 첫 단락 */}
        <div className="w-full flex flex-col lg:flex-row p-3">
          <div className="lg:w-1/4 flex">
            <RightMotionComponent
              component={motion.div}
              className=" h-20 border-t-2 text-base tracking-wider text-[#9a9a9a] border-t-[#84ac58] flex items-center justify-center"
            >
              재단소개 및 사업내용
            </RightMotionComponent>
          </div>

          <LeftMotionComponent
            component={motion.p}
            className="lg:w-3/4 text-base leading-9 tracking-wider text-[#7b7b7b]"
          >
            안녕하세요. 지우장학회 이사장 장민기입니다.
            <br />
            지우장학회는 2000년 광주, 전남 지역의 골프 스포츠 인재 육성을 위해 설립되었습니다. 설립 이후 대회 후원과
            골프 유망주 지원 등을 꾸준히 이어오고 있습니다.
            <br />
            재단 이사회는 골프 스포츠에 대한 전문성이 높아 장학사업에 많은 도움을 줄 수 있는 분들로 구성 되어 있어 공정
            한 장학생 선발이 가능합니다.
            <br />
            설립 이후 총 81명에게 1억6천6백만원의 장학금을 지급 하였고, 대회 후원으로 6천만원을 지급하여 총 2억2천6백
            만원의 장학 후원을 하였습니다.
          </LeftMotionComponent>
        </div>

        {/* 두번째 단락 */}
        <div className="w-full flex flex-col lg:flex-row p-3 mt-24">
          <div className="lg:w-1/4 flex ">
            <RightMotionComponent
              component={motion.div}
              className=" h-20 border-t-2 text-base tracking-wider text-[#9a9a9a] border-t-[#84ac58] flex items-center justify-start"
            >
              <p className="lg:pr-28">투명 경영</p>
            </RightMotionComponent>
          </div>
          <div className="lg:w-3/4 flex flex-col">
            <LeftMotionComponent component={motion.p} className="text-base leading-9 tracking-wider text-[#7b7b7b]">
              지우장학회는 운영과 관련한 모든 법률과 규정을 준수 하고 있으며, 회계 전문가를 통해 철저히 내부 관리를
              실시하고 있습니다.
              <br />
              기부 빛 후원은 &apos;기부금품의 모집 및 사용에 관한 법률&apos;등 관련 법률을 따르고 있습니다.
            </LeftMotionComponent>
            <NoMotionComponent component={motion.h2} className="text-3xl mt-28 font-medium text-[#787878]">
              기부금 모금 및 사용 현황
            </NoMotionComponent>
            {/* table */}
            <div className="overflow-x-auto mt-8 text-[#7b7b7b]">
              <LeftMotionComponent component={motion.p} className="text-right text-base">
                (단위:만원)
              </LeftMotionComponent>
              <LeftMotionComponent component={motion.table} className="min-w-full">
                <thead className="bg-[#84ac58] text-white tracking-[-0.1rem] h-12 text-sm">
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">2019년</th>
                    <th className="px-4 py-2">2020년</th>
                    <th className="px-4 py-2">2021년</th>
                    <th className="px-4 py-2">2022년</th>
                    <th className="px-4 py-2">2023년</th>
                    <th className="px-4 py-2">2024년</th>
                    <th className="px-4 py-2">2025년</th>
                    <th className="px-4 py-2">2026년</th>
                    <th className="px-4 py-2">2027년</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-[#f0f0f0]">
                    <td className="border px-4 py-2 text-center">기부금 모금</td>
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
                    <td className="border px-4 py-2 text-center">기부금 사용</td>
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
              <p className="text-base leading-9 tracking-wider text-[#7b7b7b] mb-12">
                기부금은 장학 목적 사업에만 사용 됩니다.
              </p>

              {pdf.map((el, index) => (
                <a
                  key={index}
                  href={el.pdf}
                  className="text-base hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
                  target="_blank"
                >
                  {el.title}
                </a>
              ))}
            </NoMotionComponent>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-20 p-3">
          <div className="lg:w-1/4 flex ">
            <RightMotionComponent
              component={motion.div}
              className="h-20 border-t-2 text-base tracking-wider text-[#9a9a9a] border-t-[#84ac58] flex items-center justify-center"
            >
              <div className="lg:pr-6">기부 및 후원 문의</div>
            </RightMotionComponent>
          </div>
          <LeftMotionComponent component={motion.div} className="lg:w-3/4">
            <p className="text-base leading-9 tracking-wider text-[#7b7b7b]">
              기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.
            </p>

            <p className="text-base mt-12 leading-9 tracking-wider text-[#7b7b7b]">
              광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983
              <br />
              서울 광진구 광나루토 56길 85, 1902호(구의동) 02-3424-1988 재단법인 중양장형태기념재단 재단법인 지우장학회
              고객지원센터
            </p>
          </LeftMotionComponent>
        </div>
      </div>
    </>
  )
}
