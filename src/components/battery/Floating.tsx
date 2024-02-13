'use client'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <>
      <div className="hidden lg:flex lg:w-full lg:fixed lg:float-right lg:top-1/4 lg:mr-[30px] lg:z-50">
        <div className="lg:fixed lg:right-[30px] lg:w-[110px] lg:rounded-xl lg:overflow-hidden lg:gap-[5px] lg:text-center lg:text-gray-800 lg:z-50 lg:border lg:border-gray-300 lg:drop-shadow-lg">
          {/* 상단으로 (battery 소개) 이동 */}
          <Link href="/battery">
            <div className="bg-slate-700 text-white px-2 py-3 rounded-t-xl hover:bg-primary-green hover:text-white font-bold">
              배터리
            </div>
          </Link>
          {/* 대분류 Ni-cd 부분으로 이동 */}
          <Link href="/battery#nicd">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">Ni-cd</div>
          </Link>
          {/* 중분류 방산용 Ni-cd 페이지로 이동 */}
          <Link href="/battery/batteryDetail/defense">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">방산</div>
          </Link>
          {/* 중분류 산업용 Ni-cd 페이지로 이동 */}
          <Link href="/battery/batteryDetail/industry">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">산업</div>
          </Link>
          {/* 대분류 Lithium 부분으로 이동 */}
          <Link href="/battery#lithium">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">Lithium</div>
          </Link>
          {/* 중분류 동력용 Lithium 페이지로 이동 */}
          <Link href="/battery/batteryDetail/power">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">동력</div>
          </Link>
          {/* 중분류 에너지저장용 Lithium 페이지로 이동 */}
          <Link href="/battery/batteryDetail/energy-save">
            <div className="bg-slate-200 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">에너지저장</div>
          </Link>
          {/* 대분류 기타 페이지로 이동 */}
          <Link href="/battery/batteryDetail/others">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">기타</div>
          </Link>
          {/* 카탈로그 페이지로 이동 */}
          <Link href="/admin/catelogs">
            <div className="bg-slate-300 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">카탈로그</div>
          </Link>
          {/* Contact Us 페이지로 이동 */}
          <Link href="/about-corp">
            <div className="bg-slate-300 px-2 pt-2 pb-3 rounded-b-xl hover:bg-primary-green hover:text-white font-bold">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FloatingButton
