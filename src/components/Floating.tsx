'use client'

import Link from 'next/link'

const FloatingButton = () => {
  return (
    <>
      <div className="w-35 sticky top-1/4 float-right mr-5 rounded-xl overflow-hidden gap-5 text-center text-gray-800 z-20">
        {/* 상단으로 (battery 소개) 이동 */}
        <Link href="/battery">
          <div className="bg-slate-300 px-2 py-2 rounded-t-xl hover:bg-primary-green hover:text-white">배터리</div>
        </Link>
        {/* 대분류로 (battery 메인) 이동 */}
        <div className="bg-slate-400 px-2 py-2 hover:bg-primary-green hover:text-white">Ni-cd</div>
        <Link href="/battery/batteryDetail/defense">
          <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">방산</div>
        </Link>
        <div className="h-0.5 rounded-xl bg-gray-200" />
        <Link href="/battery/batteryDetail/industry">
          <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">산업</div>
        </Link>
        <div className="bg-slate-400 px-2 py-2 hover:bg-primary-green hover:text-white">Lithium</div>
        <Link href="/battery/batteryDetail/power">
          <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">동력</div>
        </Link>
        <div className="h-0.5 rounded-xl bg-gray-200" />
        <Link href="/battery/batteryDetail/energy-save">
          <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">에너지저장</div>
        </Link>
        <Link href="/about-corp">
          <div className="bg-slate-300 px-2 py-2 hover:bg-primary-green hover:text-white">카탈로그</div>
        </Link>

        <Link href="/about-corp">
          <div className="bg-slate-300 px-2 py-2 rounded-b-xl hover:bg-primary-green hover:text-white">Contact Us</div>
        </Link>
      </div>
    </>
  )
}

export default FloatingButton
