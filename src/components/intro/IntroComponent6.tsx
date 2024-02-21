'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { Variants, motion } from 'framer-motion'
import { useScrollAnimation } from '../commons/UseScrollAnimation'
import { useRef } from 'react'
import { RightMotionComponent } from '../commons/FramerMotion/Direction/RightMotion'

const Data = [
  {
    title: '회사소개',
    description: 'IBT의 브랜드\n아이덴티티 및 비전',
    icon: '/intro/companyIntro.svg',
    width: 45,
    height: 45,
    path: '/companyInfo',
    animation: 'animate-fadeInDown1',
  },
  {
    title: 'Battery',
    description: 'IBT 대표 제품\n라인업 소개',
    icon: '/intro/battery.svg',
    width: 23,
    height: 45,
    path: '/battery',
    animation: 'animate-fadeInDown2',
  },
  {
    title: 'Hydrogen',
    description: '수소 연료전지의 소개와\n도입효과 및 강점',
    icon: '/intro/hydrogen.svg',
    width: 45,
    height: 45,
    path: '/hydrogen',
    animation: 'animate-fadeInDown3',
  },
  {
    title: '고객문의',
    description: 'IBT에\n자유롭게 문의하세요',
    icon: '/intro/customer.svg',
    width: 45,
    height: 45,
    path: '/customer/contact-us',
    animation: 'animate-fadeInDown4',
  },
]

export default function IntroComponent6(): JSX.Element {
  const router = useRouter()
  const scrollRef = useRef(null)

  const Variants: Variants = {
    rightOffscreen: {
      opacity: 0,
      x: 300,
    },
    rightOnscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.4, 0.8, 1.2],
      },
    },

    leftOffscreen: {
      opacity: 0,
      x: -300,
    },
    leftOnscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.4, 0.8, 1.2],

        bounce: 0.5,
      },
    },
  }

  return (
    <>
      <div
        style={{ backgroundImage: 'url(/intro/intro6.png)' }}
        className="relative w-full text-center flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
      >
        <div className="w-full flex flex-col lg:flex-row items-center">
          {/* left container */}
          <motion.div
            initial="leftOffscreen"
            whileInView="rightOnscreen"
            viewport={{ root: scrollRef }}
            variants={Variants}
            className="w-[90%] lg:w-[50%] flex flex-col justify-center items-center"
          >
            <h1 className="text-white text-3xl lg:text-5xl font-bold lg:text-left leading-[65.67px] tracking-[0.2px]">
              연료 전지 분야
              <br />
              All in One Solution 공급
            </h1>

            <p className="text-white text-[19.5px] font-medium lg:font-light lg:text-left leading-[29.8px] tracking-[0.23px] mt-6 md:mt-[38px] md:mr-[114px]">
              연료전지 개발 생산 기업 IBT는
              <br />
              수소 에너지 관련 고도화 기업으로 성장하고 있습니다.
            </p>
          </motion.div>

          {/* right container */}
          <div className="mt-12 lg:mt-0 lg:w-[50%] overflow-hidden">
            <div className="flex flex-wrap justify-center items-center h-full w-[600px] lg:mx-auto">
              {Data.map((data, index) => (
                <RightMotionComponent component={motion.div} key={data.path} className="p-2 box">
                  <div
                    className="w-[17.18rem] h-52 rounded-[10px] bg-[#355781] opacity-[0.85] flex flex-col justify-between p-4 lg:p-8 text-white"
                    style={{ boxShadow: '2px 2px 12px 5px rgba(0, 0, 0, 0.20)' }}
                  >
                    <Image
                      src={data.icon} // 이미지 경로
                      alt="icon"
                      width={data.width} // 너비
                      height={data.height} // 높이
                      // layout="fixed" // 레이아웃 옵션
                      className="hidden md:flex"
                    />

                    <h3 className="font-bold text-left text-3xl mt-1">{data.title}</h3>
                    <div className="flex justify-between">
                      <p className="font-medium md:font-thin text-lg md:text-sm text-left text-pretty mt-1 flex-1 mr-4">
                        {data.description}
                      </p>
                      <div className="w-16 md:w-12 flex aspect-square relative">
                        <Image
                          src="intro/pointer.svg" // 이미지 경로
                          alt="바로가기"
                          fill
                          className="mt-1 cursor-pointer"
                          onClick={() => {
                            router.push(data.path)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </RightMotionComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
