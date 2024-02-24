import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CompanyHistory2() {
  return (
    <>
      <div className="mt-20 w-full flex flex-col lg:items-end">
        {/* top */}
        <div className="mr-32 lg:mr-0 lg:w-[87%] flex flex-col items-center">
          <div className="w-[50%] lg:w-[26%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2014</h3>
              <p className="font-light text-sm mb-7">UPS, ESS 리튬인산철 전지시스템 개발</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2013</h3>
              <p className="font-light text-sm mb-8">마이크로그리드용 리튬인산철 전지시스템 개발</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2012</h3>
              <p className="font-light text-sm leading-8 mb-5">
                선박용 배터리시스템 개발
                <br />
                레독스플로우배터리 시스템 개발(산업융합원천기술개발사업 수행)
              </p>
              <Image
                src="/info/2012.png" // 이미지 경로
                alt="2021"
                width={263} // 너비
                height={150} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mt-3 rounded mb-10"
              />
            </LeftMotionComponent>
          </div>
        </div>
        {/* middle */}
        <div className="mr-48 lg:m-0 lg:w-[92.5%] flex flex-col items-center relative">
          <div className="w-[50%] lg:w-[18%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2011</h3>
              <p className="font-light text-sm leading-8 mb-7">
                포켓식 니켈수소 전지 KS인증 획득
                <br />
                니켈수소 전지 녹색인증 획득
                <br />
                발칸포용 니켈카드뮴배터리 개발
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2010</h3>
              <p className="font-light text-sm leading-7 mb-6">
                대용량 리튬인산철전지 시스템 출시
                <br />
                골프카용 리튬전지팩 개발
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2009</h3>
              <p className="font-light text-sm mb-8">광주광역시 선도산업 지원과제 수행 (NEV용 Ni-MH)</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2008</h3>
              <p className="font-light text-sm leading-7 mb-14">
                T-50 고등훈련기용 니켈카드뮴축전지 개발
                <br />
                KTX 객차 및 동차용 니켈카드뮴 축전지 개발
              </p>
              <Image
                src="/info/2008.png" // 이미지 경로
                alt="2018"
                width={270} // 너비
                height={185} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mt-3 mb-8"
              />
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2006</h3>
              <p className="font-light text-sm leading-7 mb-14">
                배기식 니켈수소전지 특허등록
                <br />
                500MD 헬기용 축전지 국산화 개발
                <br />
                F-4/5 전투기용 축전지 국산화 개발
                <br />
                우수재활용 제품(GR) 인증
                <br />
                천마 지대공 유도무기용 축전지 개발
              </p>
            </LeftMotionComponent>
          </div>
          <div className="hidden lg:flex absolute lg:left-[6%] xl:left-[13%] 2xl:left-[19%]">
            <RightMotionComponent component={motion.div}>
              <p className="text-[#2B6434] font-bold tracking-[1.059px] lg:text-xl leading-[3.3rem]">
                국산화의 선두주자,
                <br />
                글로벌 경쟁력을 강화하다
              </p>
            </RightMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
