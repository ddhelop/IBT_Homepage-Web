'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { DownMotionComponent } from '../commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'

export default function LogoComponent() {
  const [logos, setLogos] = useState([
    '/intro/logo/KORAIL.png',
    '/intro/logo/서울교통공사.png',
    '/intro/logo/인천광역시 도시철도건설본부.png',
    '/intro/logo/부산교통공사.png',
    '/intro/logo/대구도시철도공사.png',
    '/intro/logo/광주철도건설본부.png',
  ])
  const doubledLogos = [...logos, ...logos]

  const [logos2, setLogs2] = useState([
    '/intro/logo/TOVICA.png',
    '/intro/logo/LIG넥스원.png',
    '/intro/logo/plug.png',
    '/intro/logo/SK E&S.png',
    '/intro/logo/Sk plug hyverse.png',
    '/intro/logo/LG 화학.png',
  ])
  const doubledLogos2 = [...logos2, ...logos2]

  const [logos3, setLogs3] = useState([
    '/intro/logo/TOTAL.png',
    '/intro/logo/posco.png',
    '/intro/logo/한국전력공사.png',
    '/intro/logo/Hanhwa.png',
    '/intro/logo/한화솔루션.png',
  ])
  const doubledLogos3 = [...logos3, ...logos3]

  const [logos4, setLogs4] = useState([
    '/intro/logo/DAEATI.png',
    '/intro/logo/포스코케미칼.png',
    '/intro/logo/국방기술품질원.png',
    '/intro/logo/KAI 한국항공우주산업.png',
    '/intro/logo/한화디펜스.png',
    '/intro/logo/한화시스템.png',
  ])
  const doubledLogos4 = [...logos4, ...logos4]

  const [logos5, setLogs5] = useState([
    '/intro/logo/HYUNDAI MOVEX.png',
    '/intro/logo/HYUNDAI STEEL.png',
    '/intro/logo/HYUNDAI.png',
    '/intro/logo/stx Corporation.png',
    '/intro/logo/롯데케미칼.png',
    '/intro/logo/한화오션.png',
  ])
  const doubledLogos5 = [...logos5, ...logos5]

  const [logos6, setLogs6] = useState([
    '/intro/logo/퍼스텍.png',
    '/intro/logo/HYUNDAI Rotem.png',
    '/intro/logo/현대중공업.png',
    '/intro/logo/롯데정보통신.png',
    '/intro/logo/LS ELECTRIC.png',
    '/intro/logo/VINSSEN.png',
  ])
  const doubledLogos6 = [...logos6, ...logos6]

  const scrollRef = useRef(null)
  const Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0, 0.4, 0.8, 1.2],
        delay: 0.2,
      },
    },
  }

  return (
    <>
      <div id="collaborate" className="w-full lg:mb-40 flex flex-col items-center py-20 overflow-hidden">
        <DownMotionComponent component={motion.div} className="flex flex-col items-center">
          <h1 className="text-6xl mb-24 font-medium">협력 / 제휴사</h1>
          <h2 className="text-4xl mb-7 font-bold">함께하는 IBT</h2>
        </DownMotionComponent>

        <DownMotionComponent component={motion.div} className="flex flex-col items-center">
          <p className="text-lg text-center mb-16 font-light leading-7">
            IBT는 신뢰를 바탕으로 국내외 기업들과
            <br />
            함께 고민하고 해결해나갑니다.
          </p>
        </DownMotionComponent>

        <motion.div viewport={{ root: scrollRef }} initial="offscreen" whileInView="onscreen" variants={Variants}>
          {/* 1번째 줄 */}
          <div className="inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner1-${index}`} width={350} height={60} />
                </li>
              ))}
            </ul>

            <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner1-${index}`} width={320} height={60} />
                </li>
              ))}
            </ul>
          </div>

          {/* 두번째 줄 */}
          <div className="w-full max-h-[110px] inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos2.map((logo, index) => (
                <li key={index} className="min-w-[170px]">
                  <Image src={logo} alt={`Partner2-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>

            <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos2.map((logo, index) => (
                <li key={index} className="min-w-[170px]">
                  <Image src={logo} alt={`Partner2-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>
          </div>

          {/* 세번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos3.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner3-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos3.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner3-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>
          </div>

          {/* 네번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos4.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner4-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos4.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner4-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>
          </div>

          {/* 다섯번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos5.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner5-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
              {doubledLogos5.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner5-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>
          </div>

          {/* 여섯번째 줄 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos6.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner6-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
              {doubledLogos6.map((logo, index) => (
                <li key={index} className="max-w-[220px]">
                  <Image src={logo} alt={`Partner6-${index}`} width={250} height={60} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        {/*  */}
      </div>
    </>
  )
}
