import Image from 'next/image'
import { LeftMotionComponent } from '@/components/commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'
import { RightMotionComponent } from '@/components/commons/FramerMotion/Direction/RightMotion'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function CompanyHistory1() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="mt-20 w-full flex flex-col lg:items-end whitespace-pre-wrap">
        {/* top */}
        <div className="lg:w-[82%] flex flex-col items-center">
          <div className="w-[50%] lg:w-[32%]">
            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-5">2023</h3>
              <p className="font-normal text-xl lg:text-sm break-keep mb-16">{CompanyInfoData[2][2023]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-5">2021</h3>

              <p className="font-normal text-xl lg:text-sm break-keep ">{CompanyInfoData[2][2021]?.[isEnglish]}</p>

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
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-3">2020</h3>
              <p className="font-normal text-xl lg:text-sm break-keep  mb-7">{CompanyInfoData[2][2020]?.[isEnglish]}</p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-4">2019</h3>

              <p className="font-normal text-xl lg:text-sm break-keep mb-7 leading-6">
                {CompanyInfoData[2][2019]?.[isEnglish]}
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-4">2018</h3>

              <p className="font-normal text-xl lg:text-sm break-keep mb-7 leading-6">
                {CompanyInfoData[2][2018]?.[isEnglish]}
              </p>

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
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-4">2017</h3>

              <p className="font-normal text-xl lg:text-sm break-keep leading-6 mb-7">
                {CompanyInfoData[2][2017]?.[isEnglish]}
              </p>
            </LeftMotionComponent>

            <LeftMotionComponent component={motion.div}>
              <h3 className="text-4xl lg:text-xl font-bold tracking-normal text-[#59A833] mb-4">2015</h3>

              <p className="font-normal text-xl lg:text-sm break-keep mb-7 leading-8">
                {CompanyInfoData[2][2015]?.[isEnglish]}
              </p>
            </LeftMotionComponent>
          </div>

          <div className="hidden lg:flex absolute lg:left-[6%] xl:left-[7%] 2xl:left-[11%]">
            <RightMotionComponent component={motion.div}>
              <p className="text-[#2B6434] font-bold tracking-[0.875px] lg:text-xl leading-[3.3rem]">
                {CompanyInfoData[2].text1?.[isEnglish]}
              </p>
            </RightMotionComponent>
          </div>
        </div>
      </div>
    </>
  )
}
