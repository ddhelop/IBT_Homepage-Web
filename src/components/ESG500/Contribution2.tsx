import Image from 'next/image'
import React from 'react'

export default function Contribution2() {
  return (
    <>
      <div className="w-full flex flex-col justify-center align-middle items-center">
        <Image
          src="/ESG500/tbd.png" // 이미지 경로
          alt="Social_Contribution"
          width={1300} // 너비
          height={406} // 높이
          layout="fixed" // 레이아웃 옵션
          className="mb-28 mt-28"
        />
        {/* 첫 단락 */}
        <div className="w-full flex flex-row p-3">
          <div className="w-1/3 flex ">
            <div className="w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-center">
              재단소개 및 사업내용
            </div>
          </div>
          <p className="w-2/3 text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
            안녕하세요. 중양장형태기념재단 이사장 허상만입니다.
            <br />
            중양장형태기념재단은 2013년 작고하신 중양 장형태 전 전남도지사님의 뜻을 이어 받아 젊은 인재들을 지원,
            육성하여 사회에 기여하고자 설립 되었습니다.
            <br />
            재단 이사회는 사회 각계의 명망 있는 분들로 구성 되어 있으며 장학생 선발과 장학금 지급을 공정히 하기 위해
            노력하고 있습니다.
            <br />
            2014년 첫 장학생 선발 이후 2020년 현재까지 총 23명의 광주, 전남 지역 고등학생과 대학생에게 1억8천4백만원의
            장학금을 지원하고 있습니다.
          </p>
        </div>

        {/* 두번째 단락 */}
        <div className="w-full flex flex-row p-3 mt-24">
          <div className="w-1/3 flex ">
            <div className="w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start">
              <p className="pl-6">투명 경영</p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
              중양장형태기념재단은 운영과 관련한 모든 법률과 규정을 준수 하고 있으며, 회계법인을 통해 철저한 감사를 실시
              하고 있습니다.
              <br />
              기부 및 후원은 ‘기부금품의 모집 및 사용에 관한 법률’ 등 관련 법률을 따르고 있으며, 운영 내용은 국세청
              ‘공익법인 결산서류 등 공시시스템’에 매년 공시 하고 있습니다.
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
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">0</td>
                    <td className="border px-4 py-2 text-center">200</td>
                    <td className="border px-4 py-2 text-center">400</td>
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
                    <td className="border px-4 py-2 text-center">200</td>
                    <td className="border px-4 py-2 text-center">400</td>
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
              중양장형태기념재단 22년 기부금모금액 및 활용실적명세.pdf
              <br />
              중양장형태기념재단 21년 기부금모금액 및 활용실적명세.pdf
              <br />
              중양장형태기념재단 20년 기부금모금액 및 활용실적명세.pdf
              <br />
              중양장형태기념재단 19년 기부금모금액 및 활용실적명세.pdf
              <br />
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row mt-20">
          <div className="w-1/3 flex ">
            <div className="w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-center">
              <p className="pl-6">재단소개 및 사업내용</p>
            </div>
          </div>
          <div className="w-2/3">
            <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
              기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.
            </p>

            <p className="text-[20px] mt-12 leading-9 tracking-wider text-[#7b7b7b]">
              광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983
              <br />
              서울 광진구 광나루토 56길 85, 1902호(구의동) 02-3424-1988 재단법인 중앙장형태기념재단 재단법인 지우장학회
              고객지원센터
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
