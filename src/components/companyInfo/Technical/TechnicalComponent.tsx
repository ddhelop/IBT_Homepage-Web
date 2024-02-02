'use client'
import { MouseEvent, useState } from 'react'
import './TechnicalComponent.css'

import Technical1 from './Technical1'
import Technical2 from './Technical2'
import Technical3 from './Technical3'
import Technical4 from './Technical4'
import Image from 'next/image'

export default function TechnicalComponent() {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName

  const ViewContents = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <Image
            src="/info/기술인증1.png" // 이미지 경로
            alt="2021"
            width={800} // 너비
            height={150} // 높이
            layout="fixed" // 레이아웃 옵션
            className="mt-3 rounded mb-10"
          />
        )
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
      <div className=" h-[1000px] flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white">
        <h1 className="text-[61.1px] font-medium">기술 인증</h1>

        {/* Tabs */}
        <div className="mt-16 w-1/2 flex items-center justify-center">
          <button
            className={`w-1/5 h-[48px] tab-button4 ${isActive('tab1') ? 'active-tab4' : ''}`}
            value="tab1"
            onClick={onClickButton}
          >
            인증서
          </button>
          <button
            className={`w-1/5 h-[48px] tab-button5 ${isActive('tab2') ? 'active-tab5' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            지식 재산권
          </button>
          <button
            className={`w-1/5 h-[48px] tab-button6 ${isActive('tab3') ? 'active-tab6' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            연구개발
          </button>
          <button
            className={`w-1/5 h-[48px] tab-button7 ${isActive('tab4') ? 'active-tab7' : ''}`}
            onClick={() => setActiveTab('tab4')}
          >
            연구개발확인서
          </button>
        </div>

        <div className="tab-contents">
          <ViewContents />
        </div>
      </div>
    </>
  )
}
