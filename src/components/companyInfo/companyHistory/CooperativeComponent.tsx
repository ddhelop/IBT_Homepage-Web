'use client'
import { DownMotionComponent } from '@/components/commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'
import React from 'react'
import LogoComponent from '../LogoComponent'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function CooperativeComponent() {
  const isEnglish = useRecoilValue(isEnglishState)

  return (
    <div className="mb-72">
      <DownMotionComponent component={motion.div} className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-4xl mb-12 font-medium">{CompanyInfoData?.[3].title?.[isEnglish]}</h1>
        <h2 className="text-3xl lg:text-2xl mb-7 font-bold">{CompanyInfoData?.[3].contents?.[isEnglish]}</h2>
      </DownMotionComponent>

      <DownMotionComponent component={motion.div} className="flex flex-col items-center">
        <p className="text-xl lg:text-base text-center mb-12 font-light break-keep">
          {CompanyInfoData?.[3].desc?.[isEnglish]}
        </p>
      </DownMotionComponent>

      <LogoComponent />
    </div>
  )
}
