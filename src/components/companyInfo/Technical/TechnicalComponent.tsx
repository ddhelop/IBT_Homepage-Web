'use client'
import { MouseEvent, useState } from 'react'
import './TechnicalComponent.css'

import Technical1 from './Technical1'
import Technical2 from './Technical2'
import Technical3 from './Technical3'
import Technical4 from './Technical4'
import { DownMotionComponent } from '@/components/commons/FramerMotion/Direction/DownMotion'
import { motion } from 'framer-motion'
import { NoMotionComponent } from '@/components/commons/FramerMotion/Direction/NoMotion'
import { useRecoilValue } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'

export default function TechnicalComponent() {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName
  const isEnglish = useRecoilValue(isEnglishState)

  const ViewContents = () => {
    switch (activeTab) {
      case 'tab1':
        return <Technical1 />
      case 'tab2':
        return <Technical2 />
      case 'tab3':
        return <Technical3 />
      case 'tab4':
        return <Technical4 />
    }
  }

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.value)
  }

  return (
    <>
      <div
        id="technical"
        className="flex flex-col mb-72 justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white whitespace-pre-wrap "
      >
        <DownMotionComponent component={motion.div}>
          <h1 className="text-4xl font-medium">{CompanyInfoData?.[4].title?.[isEnglish]}</h1>
        </DownMotionComponent>

        {/* Tabs */}

        <NoMotionComponent component={motion.div} className="w-4/5 mt-16 flex items-center justify-center text-black">
          <button
            className={`w-32 h-12 tab-button4 ${isActive('tab1') ? 'active-tab4' : ''}`}
            value="tab1"
            onClick={onClickButton}
          >
            {CompanyInfoData?.[4].tab1?.[isEnglish]}
          </button>
          <button
            className={`w-32 h-12 tab-button5 ${isActive('tab2') ? 'active-tab5' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            {CompanyInfoData?.[4].tab2?.[isEnglish]}
          </button>
          <button
            className={`w-32 h-12 tab-button6 ${isActive('tab3') ? 'active-tab6' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            {CompanyInfoData?.[4].tab3?.[isEnglish]}
          </button>
          <button
            className={`w-32 h-12 tab-button7 ${isActive('tab4') ? 'active-tab7' : ''}`}
            onClick={() => setActiveTab('tab4')}
          >
            {CompanyInfoData?.[4].tab4?.[isEnglish]}
          </button>
        </NoMotionComponent>

        <NoMotionComponent component={motion.div} className="tab-contents w-full">
          <ViewContents />
        </NoMotionComponent>
      </div>
    </>
  )
}
