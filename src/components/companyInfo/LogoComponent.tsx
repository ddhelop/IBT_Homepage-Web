'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { DownMotionComponent } from '../commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'

export default function LogoComponent() {
  const [logos, setLogos] = useState([
    '/intro/logo/KORAIL.png',
    '/intro/logo/seoul humetro.png',
    '/intro/logo/incheon iurail.png',
    '/intro/logo/busan humetro.png',
    '/intro/logo/Daegu Metropolitan Railway Corporation.png',
    '/intro/logo/Gwangju Railway Construction.png',
  ])
  const doubledLogos = [...logos, ...logos]

  const [logos2, setLogs2] = useState([
    '/intro/logo/TOVICA.png',
    '/intro/logo/lignex1.png',
    '/intro/logo/plug.png',
    '/intro/logo/SK E&S.png',
    '/intro/logo/Sk plug hyverse.png',
    '/intro/logo/lg chem.png',
  ])
  const doubledLogos2 = [...logos2, ...logos2]

  const [logos3, setLogs3] = useState([
    '/intro/logo/TOTAL.png',
    '/intro/logo/posco.png',
    '/intro/logo/kepco.png',
    '/intro/logo/Hanhwa.png',
    '/intro/logo/hanhwa solution.png',
  ])
  const doubledLogos3 = [...logos3, ...logos3]

  const [logos4, setLogs4] = useState([
    '/intro/logo/DAEATI.png',
    '/intro/logo/poscofuturem.png',
    '/intro/logo/Defense Agency for Technology.png',
    '/intro/logo/KAI.png',
    '/intro/logo/hanhwa defense.png',
    '/intro/logo/hanhwa system.png',
  ])
  const doubledLogos4 = [...logos4, ...logos4]

  const [logos5, setLogs5] = useState([
    '/intro/logo/HYUNDAI MOVEX.png',
    '/intro/logo/HYUNDAI STEEL.png',
    '/intro/logo/HYUNDAI.png',
    '/intro/logo/stx Corporation.png',
    '/intro/logo/lottechem.png',
    '/intro/logo/hanhwa ocean.png',
  ])
  const doubledLogos5 = [...logos5, ...logos5]

  const [logos6, setLogs6] = useState([
    '/intro/logo/firsteccom.png',
    '/intro/logo/HYUNDAI Rotem.png',
    '/intro/logo/hhi.png',
    '/intro/logo/LOTTE DATA COMMUNICATION.png',
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
