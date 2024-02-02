'use client'

import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className="w-[100px] sticky top-1/4 float-right mr-5 rounded-xl overflow-hidden gap-5 text-center text-gray-800 bg-slate-200">
        {/* 상단으로 (battery 소개) 이동 */}
        <Link href="/battery">
          <div className="bg-slate-300 py-2 hover:bg-primary-green hover:text-white">배터리</div>
        </Link>
        {/* 대분류로 (battery 메인) 이동 */}
        <div className="bg-slate-400 py-2 hover:bg-primary-green hover:text-white">Ni-cd</div>
        <Link href="/battery/batteryDetail/defense">
          <div className="bg-slate-100 py-2 hover:bg-primary-green hover:text-white">방산</div>
        </Link>
        <Link href="/battery/batteryDetail/industry">
          <div className="bg-slate-100 py-2 hover:bg-primary-green hover:text-white">산업</div>
        </Link>
        <div className="bg-slate-400 py-2 hover:bg-primary-green hover:text-white">Lithium</div>
        <Link href="/battery/batteryDetail/power">
          <div className="bg-slate-100 py-2 hover:bg-primary-green hover:text-white">동력</div>
        </Link>
        <Link href="/battery/batteryDetail/energy-save">
          <div className="bg-slate-100 py-2 hover:bg-primary-green hover:text-white">에너지저장</div>
        </Link>
        <Link href="/about-corp">
          <div className="bg-slate-300 py-2 hover:bg-primary-green hover:text-white">카탈로그</div>
        </Link>
        <Link href="/about-corp">
          <div className="bg-slate-300 py-2 hover:bg-primary-green hover:text-white">Contact Us</div>
        </Link>
      </div>
    </>
  )
}

export default Page
