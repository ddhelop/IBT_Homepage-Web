import Image from 'next/image'
import React from 'react'

export default function Contribution1() {
  return (
    <>
      <div className="w-full flex flex-col justify-center align-middle items-center">
        <Image
          src="/ESG500/tbd.png" // 이미지 경로
          alt="Social_Contribution"
          width={1300} // 너비
          height={406} // 높이
          layout="responsive" // 레이아웃 옵션
          className="mb-28 mt-28"
        />
        {/* 첫 단락 */}
        <div className="w-full flex flex-col md:flex-row p-3">
          <div className="md:w-1/3 flex">
            <div className="md:w-1/2 h-20 border-t-2 text-xl tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-center">
              재단소개 및 사업내용
            </div>
          </div>
          <p className="md:w-2/3 text-xl leading-9 tracking-wider text-[#7b7b7b]">
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
          </p>
        </div>

        {/* 두번째 단락 */}
        <div className="w-full flex flex-col md:flex-row p-3 mt-24">
          <div className="md:w-1/3 flex ">
            <div className="md:w-1/2 h-[80px] border-t-2 text-[20px] tracking-wider text-[#9a9a9a] border-t-[#4be7ff] flex items-center justify-start">
              <p className="md:pl-6">투명 경영</p>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col">
            <p className="text-[20px] leading-9 tracking-wider text-[#7b7b7b]">
              지우장학회는 운영과 관련한 모든 법률과 규정을 준수 하고 있으며, 회계 전문가를 통해 철저히 내부 관리를
              실시하고 있습니다.
              <br />
              기부 빛 후원은 &apos;기부금품의 모집 및 사용에 관한 법률&apos;등 관련 법률을 따르고 있습니다.
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
            <a
              href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_22.pdf"
              className="text-[18px] hover:text-[#000000] mt-12 tracking-wider text-[#7b7b7b] cursor-pointer"
              target="_blank"
            >
              지우장학회 22년 기부금모금액 및 활용실적명세.pdf
            </a>
            <a
              href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_21.pdf"
              target="_blank"
              className="text-[18px] hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
            >
              지우장학회 21년 기부금모금액 및 활용실적명세.pdf
            </a>
            <a
              href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_20.pdf"
              target="_blank"
              className="text-[18px] mt-2 hover:text-[#000000] tracking-wider text-[#7b7b7b] cursor-pointer"
            >
              지우장학회 20년 기부금모금액 및 활용실적명세.pdf
            </a>
            <a
              href="http://rocketibt.cafe24.com/bizdemo101303/img/images/ibt_pdf_19.pdf"
              target="_blank"
              className="text-[18px] hover:text-[#000000] mt-2 tracking-wider text-[#7b7b7b] cursor-pointer"
            >
              지우장학회 19년 기부금모금액 및 활용실적명세.pdf
            </a>

            <p className="text-[20px] mt-16 leading-9 tracking-wider text-[#7b7b7b]">
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
