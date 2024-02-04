import React from 'react'
import GoogleMapComponent from './GoogleMapComponent'
import { AiOutlineCompass, AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai'

export default function DirectionsComponent() {
  return (
    <>
      <div className="h-[2300px] flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white">
        <h1 className="text-6xl font-medium">오시는 길</h1>
        {/* 광주지점 */}
        <div className="mt-32 flex flex-col p-5">
          <h2 className="text-[29px] font-medium mb-8">광주지점</h2>
          <div className="flex flex-col md:flex-row items-center">
            <GoogleMapComponent lat={35.234260075696} lng={126.86200816162} />
            <div className="w-6/7 h-full md:w-[33.85vw] md:h-[33.85vw] bg-[#f1f1f1] text-[13px] ">
              <div className="w-full h-1/2 flex flex-row border-b-[1.5px] border-[#b3b3b3]">
                <div className="w-1/2 flex flex-col justify-center items-center text-center border-r-[1.5px] border-[#b3b3b3]">
                  <AiOutlineCompass className="w-12 h-12 hidden md:flex" />
                  <p className="md:mt-4 font-semibold mb-1">주소</p>
                  <p className="font-normal text-[#545454] leading-5">
                    광주시 북구 첨단벤처
                    <br />
                    소로 38번길 2
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-center">
                  <AiOutlinePhone className="w-12 h-12 hidden md:flex" />
                  <p className="md:mt-4 font-semibold mb-1">연락처</p>
                  <p className="font-normal text-[#545454] leading-5">
                    TEL:062-971-7983~6
                    <br />
                    Fax:062-971-7989
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <AiOutlineClockCircle className="w-12 h-12 hidden md:flex" />
                <p className="md:mt-4 font-semibold md:mb-1">안내</p>
                <p className="font-normal text-[#545454] leading-5">
                  호남고속도로(88번고속도로,남해안고속도로) → 광산 IC진입 → 우회전(광주과학
                  <br />
                  기술원 방향) → 4Km 직진(AMKOR(구아남전자)탑) → 150m 진입 → 좌회전
                  <br />
                  (AMKOR 후문) → 우회전(200m)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 서울지점 */}
        <div className="mt-32 flex flex-col p-5">
          <h2 className="text-[29px] font-medium mb-8">서울지점</h2>
          <div className="flex flex-col md:flex-row items-center">
            <GoogleMapComponent lat={35.234260075696} lng={126.86200816162} />
            <div className="w-full h-full md:w-[33.85vw] md:h-[33.85vw] bg-[#f1f1f1] text-[13px] ">
              <div className="w-full h-1/2 flex flex-row border-b-[1.5px] border-[#b3b3b3]">
                <div className="w-1/2 flex flex-col justify-center items-center text-center border-r-[1.5px] border-[#b3b3b3]">
                  <AiOutlineCompass className="w-12 h-12 hidden md:flex" />
                  <p className="md:mt-4 font-semibold mb-1">주소</p>
                  <p className="font-normal text-[#545454] leading-5">
                    서울특별시 성동구
                    <br />
                    성수일로 99
                    <br />
                    서울숲 AK 벨리
                    <br />
                    1103호,1104호
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-center">
                  <AiOutlinePhone className="w-12 h-12 hidden md:flex" />
                  <p className="md:mt-4 font-semibold mb-1">연락처</p>
                  <p className="font-normal text-[#545454] leading-5">
                    TEL:02-3409-7141 / 02-6965-7975
                    <br />
                    Fax:02-3436-9127
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <AiOutlineClockCircle className="w-12 h-12 hidden md:flex" />
                <p className="md:mt-4 font-semibold mb-1">안내</p>
                <p className="font-normal text-[#545454] leading-5">
                  - 지하철 -
                  <br />
                  2호선 | 뚝섬역 4번출구
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
