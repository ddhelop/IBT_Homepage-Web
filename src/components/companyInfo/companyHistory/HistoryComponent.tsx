'use client'
import { MouseEvent, useState } from 'react'
import CompanyHistory1 from './CompanyHistory1'
import CompanyHistory3 from './CompanyHistory3'
import CompanyHistory2 from './CompanyHistory2'
import './HistoryComponent.css'

export default function HistoryComponent() {
  const [activeTab, setActiveTab] = useState('tab1')
  const isActive = (tabName: string) => activeTab === tabName

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
        className="w-full h-[2376px] flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white"
      >
        <h1 className="text-[61.1px] font-medium">연혁</h1>
        <p className="mt-12 text-center font-light text-[19.5px]">
          1986년부터 지금까지,
          <br />
          도전정신으로 IBT는 성장하고 있습니다.
        </p>

        {/* Tabs */}
        <div className="mt-24 w-2/3 flex items-center justify-center ">
          <button
            className={`w-1/3 h-12 tab-button1 ${isActive('tab1') ? 'active-tab1' : ''}`}
            value="tab1"
            onClick={onClickButton}
          >
            2015~
          </button>
          <button
            className={`w-1/3 h-12 tab-button2 ${isActive('tab2') ? 'active-tab2' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            2003 - 2014
          </button>
          <button
            className={`w-1/3 h-12 tab-button3 ${isActive('tab3') ? 'active-tab3' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            1986 - 2002
          </button>
        </div>

        <div className="tab-contents w-full">
          <ViewContents />
        </div>
      </div>
    </>
  )
}
