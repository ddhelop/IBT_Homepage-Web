'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

export default function Technical4() {
  useEffect(() => {
    // 'use client' 키워드를 고려하여 DOM이 준비된 후에 mediumZoom을 적용
    mediumZoom('img', {
      background: 'rgba(0, 0, 0, 0.6)', // 어두운 배경으로 설정
      scrollOffset: 0,
    })
  }, []) // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/1_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">천마 / 전지, 축전식</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">육군군수사</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/2_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">500MD 헬기 / 17AMP 밧데리</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">육군군수사</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/3_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />
            <p className="text-lg py-2 text-[#909090]">500MD 헬기 / 17AMP 밧데리</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">육군군수사</p>
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/4_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">F-4, F-5 항공기 / CELL, BATTERY</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">국방기술품질원</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/5_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">KT-1, KA-1 / 전지, 축전식</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">국방기술품질원</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/6_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">UH-1H헬기,AH-1J헬기/전지,축전지</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">국방기술품질원</p>
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/7_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">UH-60 헬기 / 셀, 리치</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">육군군수사</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/8_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-lg py-2 text-[#909090]">견인 발칸 / 전지, 축전식</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-lg py-2 text-[#909090]">육군군수사</p>
          </div>
        </div>
      </div>
    </>
  )
}
