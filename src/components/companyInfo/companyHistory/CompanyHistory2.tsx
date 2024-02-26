import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export default function CompanyHistory2() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="mt-20 w-full flex flex-col lg:items-end whitespace-pre-wrap">
        {/* top */}
        <div className="mr-32 lg:mr-0 lg:w-[87%] flex flex-col items-center">
          <div className="w-[50%] lg:w-[26%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2014</h3>
              <p className="font-light text-sm mb-7">{CompanyInfoData[2][2014]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2013</h3>
              <p className="font-light text-sm mb-8">{CompanyInfoData[2][2013]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-3">2012</h3>
              <p className="font-light text-sm leading-8 mb-5">{CompanyInfoData[2][2012]?.[isEnglish]}</p>
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
              <p className="font-light text-sm leading-8 mb-7">{CompanyInfoData[2][2011]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2010</h3>
              <p className="font-light text-sm leading-7 mb-6">{CompanyInfoData[2][2010]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2009</h3>
              <p className="font-light text-sm mb-8">{CompanyInfoData[2][2009]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-xl font-bold tracking-[-0.38px] text-[#59A833] mb-4">2008</h3>
              <p className="font-light text-sm leading-7 mb-14">{CompanyInfoData[2][2008]?.[isEnglish]}</p>
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
              <p className="font-light text-sm leading-7 mb-14">{CompanyInfoData[2][2006]?.[isEnglish]}</p>
            </LeftMotionComponent>
          </div>
          <div className="hidden lg:flex absolute lg:left-[6%] xl:left-[13%] 2xl:left-[19%]">
            <RightMotionComponent component={motion.div}>
              <p className="text-[#2B6434] font-bold tracking-[1.059px] lg:text-xl leading-[3.3rem]">
                {CompanyInfoData[2].text2?.[isEnglish]}
              </p>
            </RightMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
