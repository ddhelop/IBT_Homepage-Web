'use client'
import { Component, MouseEvent, useRef, useState } from 'react'
import CompanyHistory1 from './CompanyHistory1'
import CompanyHistory3 from './CompanyHistory3'
import CompanyHistory2 from './CompanyHistory2'
import { motion } from 'framer-motion'
import './HistoryComponent.css'
import { DownMotionComponent } from '@/components/commons/FramerMotion/Direction/DownMotion'
import { isEnglishState } from '@/context/recoil-context'
import { useRecoilValue } from 'recoil'
import { CompanyTitleData } from '@/lib/data'

export default function HistoryComponent() {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName
  const isEnglish = useRecoilValue(isEnglishState)
  const ViewContents = () => {
    switch (activeTab) {
      case 'tab1':
        return <CompanyHistory1 />
      case 'tab2':
        return <CompanyHistory2 />
      case 'tab3':
        return <CompanyHistory3 />
      default:
        return <CompanyHistory1 />
    }
  }

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.value)
  }

  return (
    <>
      <div
        id="history"
        className="w-full flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white mb-72"
      >
        <DownMotionComponent component={motion.h1} className="text-4xl font-medium">
          {CompanyTitleData.title?.[isEnglish]}
        </DownMotionComponent>
        <DownMotionComponent component={motion.p} className="mt-12 text-center font-medium text-xl whitespace-pre-wrap">
          {CompanyTitleData.contents?.[isEnglish]}
        </DownMotionComponent>

        {/* Tabs */}
        <DownMotionComponent
          component={motion.div}
          className="mt-24 w-[min(90%,820px)] flex items-center justify-center "
        >
          <button
            className={`w-1/3 h-12 tab-button1 ${isActive('tab1') ? 'active-tab1' : ''}`}
            value="tab1"
            onClick={onClickButton}
          >
            <h1 className="text-xl">2015~</h1>
          </button>
          <button
            className={`w-1/3 h-12 tab-button2 ${isActive('tab2') ? 'active-tab2' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            <h1 className="text-xl">2003 - 2014</h1>
          </button>
          <button
            className={`w-1/3 h-12 tab-button3 ${isActive('tab3') ? 'active-tab3' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            <h1 className="text-xl">1986 - 2005</h1>
          </button>
        </DownMotionComponent>

        <div className="tab-contents w-full">
          <ViewContents />
        </div>
      </div>
    </>
  )
}
