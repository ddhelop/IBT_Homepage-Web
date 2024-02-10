'use client'
import Image from 'next/image'
import React from 'react'
import SocialContributionComponent from './SocialContributionComponent'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'
import { motion } from 'framer-motion'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { DownMotionComponent } from '../commons/FramerMotion/Direction/DownMotion'
import { NoMotionComponent } from '../commons/FramerMotion/Direction/NoMotion'

export default function ESG500Component() {
  return (
    <>
      <div className="w-full p-5 md:p-20 flex flex-col items-center lg:items-start min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-3/5 flex flex-col max-w-[25rem] lg:max-w-none">
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/eco_friendly.svg" // 이미지 경로
              alt="eco_friendly"
              width={407} // 너비
              height={194} // 높이
              // layout="fixed" // 레이아웃 옵션
              className="mb-32 lg:ml-16"
            />
          </RightMotionComponent>
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/Eclipse1.png" // 이미지 경로
              alt="Eclipse1"
              width={1074} // 너비
              height={1050} // 높이
              // layout="fixed" // 레이아웃 옵션
              className=""
            />
          </RightMotionComponent>
        </div>

        {/* 2nd */}
        <div className="lg:flex w-full items-end justify-end">
          <SocialContributionComponent />
        </div>

        {/* 세번째 단락 */}

        <div className="w-full mt-36 lg:mt-72 flex flex-col items-center lg:items-start">
          <RightMotionComponent component={motion.div}>
            <Image
              src="/ESG500/Reliable_Governance.svg" // 이미지 경로
              alt="Reliable_Governance"
              width={615} // 너비
              height={194} // 높이
              // layout="responsive" // 레이아웃 옵션
              className="mb-24 lg:ml-[108px] lg:max-w-screen-md"
            />
          </RightMotionComponent>
          <RightMotionComponent component={motion.h1} className="text-4xl font-medium lg:ml-44 lg:my-12">
            윤리경영 보고서
          </RightMotionComponent>
          <div className="w-full flex flex-col justify-end items-center">
            <div className="lg:w-3/4 flex flex-col lg:flex-row p-3 mt-28">
              <div className="lg:w-1/4 flex w-full">
                <div className="h-10 text-base tracking-wider text-[#9a9a9a] flex items-center justify-start">
                  <RightMotionComponent component={motion.p} className="">
                    재단 소개 및 사업내용
                  </RightMotionComponent>
                </div>
              </div>
              <div className="lg:w-3/4 flex flex-col">
                <LeftMotionComponent component={motion.p} className="text-base leading-9 tracking-wider text-[#7b7b7b]">
                  지우장학회는 2000년 광주, 전남 지역의 골프 스포츠 인재 육성을 위해 설립되었습니다. 설립 이후 대회
                  후원과 골프 유망주 지원 등을 꾸준히 이어오고 있습니다.
                  <br />
                  재단 이사회는 골프 스포츠에 대한 전문성이 높아 장학사업에 많은 도움을 줄 수 있는 분들로 구성되어 있어
                  공정한 장학생 선발이 가능합니다.
                  <br />
                  설립 이후 총 81명에게 1억6천6백만원의 장학금을 지급하였고, 대회 후원으로 6천만원을 지급하여 총
                  2억2천6백만원의 장학 후원을 하였습니다.
                </LeftMotionComponent>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex md:flex-col justify-end items-center">
            <div className="lg:w-3/4 flex flex-col lg:flex-row p-3 mt-28">
              <div className="lg:w-1/4 flex">
                <RightMotionComponent
                  component={motion.div}
                  className="h-20 border-t-2 text-xl tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start"
                >
                  투명 경영
                </RightMotionComponent>
              </div>

              <div className="lg:w-3/4 flex flex-col">
                <LeftMotionComponent component={motion.p} className="text-base leading-9 tracking-wider text-[#7b7b7b]">
                  지우장학회는 운영과 관련한 모든 법률과 규정을 준수하고 있으며, 회계 전문가를 통해 철저한 내부 관리를
                  실시하고 있습니다.
                  <br />
                  기부 및 후원은 &apos;기금금품의 모집 및 사용에 관한 법률&apos;등 관련 법률을 따르고 있습니다.
                </LeftMotionComponent>

                <DownMotionComponent component={motion.h1} className="text-3xl mt-28 font-medium text-[#787878]">
                  기부금 모금 및 사용 현황
                </DownMotionComponent>
                {/* table */}
                <LeftMotionComponent component={motion.div} className="overflow-x-auto mt-8 text-[#7b7b7b]">
                  <p className="text-right text-base">(단위:만원)</p>
                  <table className="min-w-full">
                    <thead className="bg-green-600 text-white tracking-[-0.1rem] h-12 text-base">
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
                    <tbody className="text-base">
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
                  </table>
                </LeftMotionComponent>
                {/* table end*/}
                <NoMotionComponent component={motion.div} className="flex flex-col">
                  <p className="text-base leading-9 tracking-wider text-[#7b7b7b]">
                    기부금은 장학 목적 사업에만 사용 됩니다.
                  </p>
                  <a
                    href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_22.pdf"
                    className="text-base hover:text-[#000000] mt-12 tracking-wider text-[#7b7b7b] cursor-pointer"
                    target="_blank"
                  >
                    지우장학회 22년 기부금모금액 및 활용실적명세.pdf
                  </a>
                  <a
                    href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_21.pdf"
                    target="_blank"
                    className="text-base hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
                  >
                    지우장학회 21년 기부금모금액 및 활용실적명세.pdf
                  </a>
                  <a
                    href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_20.pdf"
                    target="_blank"
                    className="text-base mt-2 hover:text-[#000000] tracking-wider text-[#7b7b7b] cursor-pointer"
                  >
                    지우장학회 20년 기부금모금액 및 활용실적명세.pdf
                  </a>
                  <a
                    href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_19.pdf"
                    target="_blank"
                    className="text-base hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
                  >
                    지우장학회 19년 기부금모금액 및 활용실적명세.pdf
                  </a>
                </NoMotionComponent>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-end items-center">
            <div className="lg:w-3/4 flex flex-col lg:flex-row p-3 mt-28">
              <div className="lg:w-1/4 flex">
                <RightMotionComponent
                  component={motion.div}
                  className="h-20 border-t-2 text-base tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start"
                >
                  기부 및 후원 문의
                </RightMotionComponent>
              </div>
              <LeftMotionComponent component={motion.div} className="lg:w-3/4 flex flex-col">
                <p className="text-base leading-9 tracking-wider text-[#7b7b7b]">
                  기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.
                </p>
                <p className="text-base leading-9 tracking-wider text-[#7b7b7b] mt-12">
                  광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983
                  <br />
                  서울 광진구 광나루로 56길 85, 1902호(구의동) 02-3424-1988 재단법인중앙장형태기념재단 재단법인 지우장
                </p>
              </LeftMotionComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
