'use client'

import { useState } from 'react'
import SlickSlider from '../commons/SlickSlider'

export default function IntroComponent7(): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="flex flex-col h-full text-center align-middle justify-center">
          {/* top container */}
          <div className="h-1/2 min-h-[600px] flex flex-col justify-center align-middle">
            <p className="font-light text-sm tracking-[0.2px] mt-44">Dynamic Growth</p>
            <h2 className="font-bold text-4xl mt-1">News</h2>
            <p className="font-light text-base mt-5">IBT Road</p>
          </div>

          {/* below container */}

          <SlickSlider />
        </div>
      </div>
    </>
  )
}
