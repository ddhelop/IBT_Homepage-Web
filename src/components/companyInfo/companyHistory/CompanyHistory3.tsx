import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export default function CompanyHistory3() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="mt-20 w-full flex flex-col lg:items-end whitespace-pre-wrap">
        {/* top */}
        <div className="ml-8 lg:ml-0 lg:w-[91.5%] flex flex-col items-center ">
          <div className="lg:ml-44 w-[50%] lg:w-[32%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2005</h3>
              <p className="font-light text-xl lg:text-sm mb-10 break-keep">{CompanyInfoData[2][2005]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2004</h3>
              <p className="font-light text-xl lg:text-sm leading-7 mb-10 break-keep">
                {CompanyInfoData[2][2004]?.[isEnglish]}
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2003</h3>
              <p className="font-light text-xl lg:text-sm mb-8 break-keep">{CompanyInfoData[2][2004]?.[isEnglish]}</p>
            </LeftMotionComponent>
          </div>
        </div>

        {/* middle */}
        <div className="ml-8 lg:ml-0 lg:w-[91.5%] flex flex-col items-center relative">
          <div className="lg:ml-44 w-[50%] lg:w-[32%]">
            <LeftMotionComponent component={motion.div}>
              <Image
                src="/info/2003.png" // 이미지 경로
                alt="2021"
                width={330} // 너비
                height={150} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="lg:mt-3 rounded mb-10"
              />

              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2002</h3>
              <p className="font-light text-xl lg:text-sm break-keep mb-10">{CompanyInfoData[2][2002]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2001</h3>
              <p className="font-light text-xl lg:text-sm break-keep mb-6">{CompanyInfoData[2][2001]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2000</h3>
              <p className="font-light text-xl lg:text-sm break-keep mb-10">{CompanyInfoData[2][2000]?.[isEnglish]}</p>

              <Image
                src="/info/2000.png" // 이미지 경로
                alt="2000"
                width={270} // 너비
                height={185} // 높이
                // layout="fixed" // 레이아웃 옵션
                className="mt-3 mb-12"
              />
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">1998</h3>
              <p className="font-light text-xl lg:text-sm mb-7 break-keep">{CompanyInfoData[2][1998]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">1993</h3>
              <p className="font-light text-xl lg:text-sm mb-7 break-keep">{CompanyInfoData[2][1993]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">1987</h3>
              <p className="font-light text-xl lg:text-sm mb-7 break-keep">{CompanyInfoData[2][1987]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">1986</h3>
              <p className="font-light text-xl lg:text-sm mb-7 break-keep ">{CompanyInfoData[2][1986]?.[isEnglish]}</p>
            </LeftMotionComponent>
          </div>

          <div className="hidden lg:flex absolute lg:left-[6%] xl:left-[13%] 2xl:left-[23%]">
            <RightMotionComponent component={motion.div}>
              <p className="text-[#2B6434] font-bold tracking-[1.059px] lg:text-xl ">
                {CompanyInfoData[2].text3?.[isEnglish]}
              </p>
            </RightMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
