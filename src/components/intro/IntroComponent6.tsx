'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

const Data = [
  {
    title: '회사소개',
    description: 'IBT의 브랜드\n아이덴티티 및 비전',
    icon: '/intro/companyIntro.svg',
    width: 45,
    height: 45,
    path: '/companyInfo',
  },
  {
    title: 'Battery',
    description: 'IBT 대표 제품\n라인업 소개',
    icon: '/intro/battery.svg',
    width: 23,
    height: 45,
    path: '/battery',
  },
  {
    title: 'Hydrogen',
    description: '수소 연료전지의 소개와\n도입효과 및 강점',
    icon: '/intro/hydrogen.svg',
    width: 45,
    height: 45,
    path: '/hydrogen',
  },
  {
    title: '고객문의',
    description: 'IBT에\n자유롭게 문의하세요',
    icon: '/intro/customer.svg',
    width: 45,
    height: 45,
    path: '/',
  },
]

export default function IntroComponent6(): JSX.Element {
  const router = useRouter()
  return (
    <>
      <div
        style={{ backgroundImage: 'url(/intro/intro6.png)' }}
        className="relative w-full text-center flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
      >
        <div className="w-full flex flex-col md:flex-row ">
          {/* left container */}
          <div className="md:w-[50%] flex flex-col justify-center items-center h-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold md:text-left leading-[65.67px] tracking-[0.2px]">
              연료 전지 분야
              <br />
              All in One Solution 공급
            </h1>

            <p className="text-white text-[19.5px] font-light md:text-left leading-[29.8px] tracking-[0.23px] mt-6 md:mt-[38px] md:mr-[114px]">
              연료전지 개발 생산 기업 IBT는
              <br />
              수소 에너지 관련 고도화 기업으로 성장하고 있습니다.
            </p>
          </div>

          {/* right container */}
          <div className="md:w-[50%]">
            <div className="flex flex-wrap justify-center items-center h-full md:max-w-[600px] md:min-w-[600px] md:mx-auto">
              {Data.map((data, index) => (
                <div key={index} className="p-2">
                  <div
                    className="w-[274px] md:h-52 rounded-[10px] bg-[#355781] opacity-[0.85] flex flex-col justify-between p-8 text-white"
                    style={{ boxShadow: '2px 2px 12px 5px rgba(0, 0, 0, 0.20)' }}
                  >
                    <Image
                      src={data.icon} // 이미지 경로
                      alt="icon"
                      width={data.width} // 너비
                      height={data.height} // 높이
                      layout="fixed" // 레이아웃 옵션
                      className="hidden md:flex"
                    />

                    <h3 className="font-bold text-left text-[28px] mt-1">{data.title}</h3>
                    <div className="flex flex-row justify-between">
                      <p className="font-thin text-[14px] text-left whitespace-pre-line mt-1">{data.description}</p>
                      <div>
                        <Image
                          src="intro/pointer.svg" // 이미지 경로
                          alt="바로가기"
                          width={40} // 너비
                          height={40} // 높이
                          layout="fixed" // 레이아웃 옵션
                          className="mt-1 cursor-pointer"
                          onClick={() => {
                            router.push(data.path)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
