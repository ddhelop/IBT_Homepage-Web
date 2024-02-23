import Image from 'next/image'
import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'

export default function CompanyHistory1() {
  return (
    <>
      <div className="mt-20 w-full flex flex-col lg:items-end">
        {/* top */}
        <div className="lg:w-[82%] flex flex-col items-center">
          <div className="w-[50%] lg:w-[32%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-5">2023</h3>
              <p className="font-light text-sm mb-16">수소발전 통합 제어 / 관제 시스템 개발</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-5">2021</h3>
              <p className="font-light text-sm ">
                KAI(한국항공우주산업㈜) 의 LCH(소형민수헬기) 및 LAH(소형무장헬기) 개발사업 참여
              </p>

              <Image
                src="/info/2021.png" // 이미지 경로
                alt="2021"
                width={334} // 너비
                height={179} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mt-3 rounded mb-10"
              />
            </LeftMotionComponent>
          </div>
        </div>

        {/* middle */}
        <div className="lg:w-[81.5%] flex flex-col items-center relative">
          <div className="w-[50%] lg:w-[32%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-3">2020</h3>
              <p className="font-light text-sm leading-8 mb-7">
                청소차용 리튬팩 개발
                <br />
                중대형 친환경 선박 동력 ESS용 배터리 시스템 개발
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-4">2019</h3>
              <p className="font-light text-sm mb-7">AGV 및 지게차용 리튬인산철 전지개발</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-4">2018</h3>
              <p className="font-light text-sm mb-7">AS9100 항공우주 품질경영시스템 인증 획득</p>
              <Image
                src="/info/2018.png" // 이미지 경로
                alt="2018"
                width={384} // 너비
                height={185} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mt-3 mb-8"
              />
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-4">2017</h3>
              <p className="font-light text-sm leading-8 mb-7">
                도시철도차량용 축전지,충전기 개발 및 표준화 연구태양전지식 고감도 항공장애 표시등
                <br />
                시스템 개발선 박용 리튬인산철 전지 시스템 개발
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-2xl font-bold tracking-normal text-[#59A833] mb-4">2015</h3>
              <p className="font-light text-sm mb-7">
                광주광역시 강소기업 선정한전 배전지능화용 리튬인산철 전지팩 개발
              </p>
            </LeftMotionComponent>
          </div>

          <div className="hidden lg:flex absolute lg:left-[6%] xl:left-[13%] 2xl:left-[14%]">
            <RightMotionComponent component={motion.div}>
              <p className="text-[#2B6434] font-bold tracking-[1.059px] lg:text-xl xl:text-2xl leading-[3.3rem]">
                친환경 에너지의 리더,
                <br />
                지속 가능한 미래를 열다
              </p>
            </RightMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
