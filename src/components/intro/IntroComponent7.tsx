import { useEffect, useState } from 'react'
import IntroSlider from './IntroSlider'

export interface ApiResponse {
  isSuccess: boolean
  code: number
  message: string
  result: { img: string; title: string; desc: string }[] // API 응답 형식을 명시
}

const IntroComponent7 = (data: any) => {
  return (
    <>
      <div className="flex flex-col md:min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-full h-full flex flex-col text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-medium lg:font-light text-xl lg:text-sm  tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-6xl lg:text-4xl mt-2">News</h2>
            <p className="font-light text-4xl lg:text-2xl mt-6">IBT Road</p>
          </div>
          {/* below container */}
          <div className="min-h-[350px] flex align-middle items-center pt-36">
            <IntroSlider news={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroComponent7
