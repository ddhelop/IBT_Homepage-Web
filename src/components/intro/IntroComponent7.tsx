'use client'

import { useState } from 'react'
import SlickSlider from '../commons/SlickSlider'

export default function IntroComponent7(): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="flex flex-col h-full text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-medium lg:font-light text-xl lg:text-sm  tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-6xl lg:text-4xl mt-2">News</h2>
            <p className="font-light text-4xl lg:text-2xl mt-6">IBT Road</p>
          </div>

          {/* below container */}
          <SlickSlider />
        </div>
      </div>
    </>
  )
}
