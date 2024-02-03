import Image from 'next/image'
import React from 'react'
import SocialContributionComponent from './SocialContributionComponent'

export default function ESG500Component() {
  return (
    <>
      <div className="w-full md:p-[160px] flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div>
          <Image
            src="/ESG500/eco_friendly.svg" // 이미지 경로
            alt="eco_friendly"
            width={487} // 너비
            height={194} // 높이
            layout="fixed" // 레이아웃 옵션
            className="mb-32 md:ml-[108px]"
          />
          <Image
            src="/ESG500/Eclipse1.png" // 이미지 경로
            alt="Eclipse1"
            width={1074} // 너비
            height={1050} // 높이
            layout="fixed" // 레이아웃 옵션
            className=""
          />
        </div>

        {/* 2nd */}
        <SocialContributionComponent />

        {/* 세번째 단락 */}

        <div className="w-full mt-36 md:mt-72">
          <Image
            src="/ESG500/Reliable_Governance.svg" // 이미지 경로
            alt="Reliable_Governance"
            width={715} // 너비
            height={122} // 높이
            layout="responsive" // 레이아웃 옵션
            className="mb-32 md:ml-[108px] max-w-screen-md"
          />
          <h1 className="text-4xl font-medium md:mr-[48%] text-center">윤리경영 보고서</h1>
          <div className="w-full flex flex-col justify-end items-center">
            <div className="md:w-2/3 flex flex-col md:flex-row p-3 mt-28">
              <div className="md:w-1/3 flex w-full">
                <div className="md:w-1/2 h-[40px] text-[20px] tracking-wider text-[#9a9a9a] flex items-center justify-start">
                  <p className="md:pl-6">재단 소개 및 사업내용</p>
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
                  지우장학회는 2000년 광주, 전남 지역의 골프 스포츠 인재 육성을 위해 설립되었습니다. 설립 이후 대회
                  후원과 골프 유망주 지원 등을 꾸준히 이어오고 있습니다.
                  <br />
                  재단 이사회는 골프 스포츠에 대한 전문성이 높아 장학사업에 많은 도움을 줄 수 있는 분들로 구성되어 있어
                  공정한 장학생 선발이 가능합니다.
                  <br />
                  설립 이후 총 81명에게 1억6천6백만원의 장학금을 지급하였고, 대회 후원으로 6천만원을 지급하여 총
                  2억2천6백만원의 장학 후원을 하였습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:flex-col justify-end items-center">
            <div className="md:w-2/3 flex flex-col md:flex-row p-3 mt-28">
              <div className="md:w-1/3 flex">
                <div className="md:w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start">
                  투명 경영
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col">
                <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
                  지우장학회는 운영과 관련한 모든 법률과 규정을 준수하고 있으며, 회계 전문가를 통해 철저한 내부 관리를
                  실시하고 있습니다.
                  <br />
                  기부 및 후원은 &apos;기금금품의 모집 및 사용에 관한 법률&apos;등 관련 법률을 따르고 있습니다.
                </p>

                <h3 className="text-[35px] mt-28 font-medium text-[#787878]">기부금 모금 및 사용 현황</h3>
                {/* table */}
                <div className="overflow-x-auto mt-8 text-[#7b7b7b]">
                  <p className="text-right text-[20px]">(단위:만원)</p>
                  <table className="min-w-full">
                    <thead className="bg-green-600 text-white tracking-[-0.1rem] h-[50px]">
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
                    <tbody>
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
                </div>
                {/* table end*/}

                <p className="text-[18px] leading-9 tracking-wider text-[#7b7b7b]">
                  기부금은 장학 목적 사업에만 사용 됩니다.
                </p>
                <p className="text-[18px] mt-12 leading-8 tracking-wider text-[#7b7b7b]">
                  지우장학회 22년 기부금모금액 및 활용실적명세.pdf
                  <br />
                  지우장학회 21년 기부금모금액 및 활용실적명세.pdf
                  <br />
                  지우장학회 20년 기부금모금액 및 활용실적명세.pdf
                  <br />
                  지우장학회 19년 기부금모금액 및 활용실적명세.pdf
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-end items-center">
            <div className="md:w-2/3 flex flex-col md:flex-row p-3 mt-28">
              <div className="md:w-1/3 flex">
                <div className="md:w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start">
                  기부 및 후원 문의
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
                  기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.
                </p>
                <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b] mt-12">
                  광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983
                  <br />
                  서울 광진구 광나루로 56길 85, 1902호(구의동) 02-3424-1988 재단법인중양장형태기념재단 재단법인 지우장
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
