'use client'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import Contribution1 from './Contribution1'
import Contribution2 from './Contribution2'
import './Contribution.css'
import { LeftMotionComponent } from '../commons/FramerMotion/Direction/LeftMotion'
import { motion } from 'framer-motion'

export default function SocialContributionComponent() {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName

  const ViewContents = () => {
    switch (activeTab) {
      case 'tab1':
        return <Contribution1 />
      case 'tab2':
        return <Contribution2 />
      default:
        return <Contribution1 />
    }
  }
  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.value)
  }

  return (
    <>
      <div className="md:mt-40 lg:flex lg:flex-col items-center lg:items-end lg:mr-[8%] overflow-hidden">
        <div className="lg:w-3/4 flex flex-col items-center">
          <div className="max-w-[35rem] mt-48 md:mt-0">
            <LeftMotionComponent component={motion.div}>
              <Image
                src="/ESG500/Social_Contribution.svg" // 이미지 경로
                alt="Social_Contribution"
                width={646} // 너비
                height={194} // 높이
                // layout="responsive" // 레이아웃 옵션
                className="lg:my-24"
              />
            </LeftMotionComponent>
          </div>

          {/* Tabs */}
          <LeftMotionComponent component={motion.div} className="mt-24 w-full flex items-center justify-center">
            <button
              className={`w-2/5 lg:w-2/5 h-12 tab-button1 ${isActive('tab1') ? 'active-tab1' : ''}`}
              value="tab1"
              onClick={onClickButton}
            >
              (재) 지우장학회
            </button>
            <button
              className={`w-2/5 lg:w-2/5 h-12  tab-button2 ${isActive('tab2') ? 'active-tab2' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              중앙장형태 장학재단
            </button>
          </LeftMotionComponent>

          <div className="tab-contents">
            <ViewContents />
          </div>
        </div>
      </div>
    </>
  )
}
