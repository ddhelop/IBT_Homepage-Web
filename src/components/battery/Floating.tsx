'use client'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <>
      <div className="hidden lg:flex lg:w-[100px] lg:sticky lg:float-right lg:top-1/4 lg:mr-[30px] lg:z-50">
        <div className="lg:w-[100px] lg:rounded-xl lg:overflow-hidden lg:gap-[5px] lg:text-center lg:text-gray-800 lg:z-50 lg:border lg:border-gray-300 lg:drop-shadow-lg">
          {/* 상단으로 (battery 소개) 이동 */}
          <Link href="/battery">
            <div className="bg-slate-700 text-white px-2 py-3 rounded-t-xl hover:bg-primary-green hover:text-white">
              배터리
            </div>
          </Link>
          {/* 대분류로 (battery 메인) 이동 */}
          <Link href="/battery#nicd">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">Ni-cd</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery/batteryDetail/defense">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white">방산</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery/batteryDetail/industry">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white">산업</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery#lithium">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">Lithium</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery/batteryDetail/power">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white">동력</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery/batteryDetail/energy-save">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white">에너지저장</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/battery/batteryDetail/others">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">기타</div>
          </Link>
          {/* <div className="h-0.5 rounded-xl bg-gray-300" /> */}
          <Link href="/about-corp">
            <div className="bg-slate-300 px-2 py-2 hover:bg-primary-green hover:text-white">카탈로그</div>
          </Link>
          <Link href="/about-corp">
            <div className="bg-slate-300 px-2 py-2 rounded-b-xl hover:bg-primary-green hover:text-white">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FloatingButton
