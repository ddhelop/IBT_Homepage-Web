'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import mediumZoom from 'medium-zoom'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function Technical4() {
  useEffect(() => {
    // 'use client' 키워드를 고려하여 DOM이 준비된 후에 mediumZoom을 적용
    mediumZoom('.technical-zoom-container img', {
      background: 'rgba(0, 0, 0, 0.6)', // 어두운 배경으로 설정
      scrollOffset: 0,
    })
  }, []) // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  const isEnglish = useRecoilValue(isEnglishState)

  return (
    <>
      <div className="technical-zoom-container flex flex-col w-full mt-9 items-center">
        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image
              className="max-h-[26.6rem]"
              src="/info/prize/1_800px.jpg"
              alt="천마 전지 축전식"
              width={310}
              height={430}
            />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm1?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm9?.[isEnglish]}</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/2_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm2?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm9?.[isEnglish]}</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/3_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm3?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm9?.[isEnglish]}</p>
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/4_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm4?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm10?.[isEnglish]}</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/5_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm5?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm10?.[isEnglish]}</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image
              className="min-h-[27.5rem]"
              src="/info/prize/6_800px.jpg"
              alt="천마 전지 축전식"
              width={310}
              height={430}
            />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm6?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm10?.[isEnglish]}</p>
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/7_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm7?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm9?.[isEnglish]}</p>
          </div>

          <div className="flex flex-col text-center items-center mx-4">
            <Image src="/info/prize/8_800px.jpg" alt="천마 전지 축전식" width={310} height={430} />

            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm8?.[isEnglish]}</p>
            <div className="w-32 border-[2.3px] border-green-700"></div>
            <p className="text-sm py-2 ">{CompanyInfoData?.[8].confirm9?.[isEnglish]}</p>
          </div>
        </div>
      </div>
    </>
  )
}
