'use client'

import IntroSlider from './IntroSlider'

export default function IntroComponent7(): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-full h-full flex flex-col text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-light text-sm tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-4xl mt-1">News</h2>
            <p className="font-light text-base mt-5">IBT Road</p>
          </div>

          {/* below container */}
          <div className="min-h-[350px] flex align-middle items-center">
            <IntroSlider />
          </div>
          {/* <SlickSlider /> */}
        </div>
      </div>
    </>
  )
}
