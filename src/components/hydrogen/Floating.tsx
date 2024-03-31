'use client'
import { isEnglishState } from '@/context/recoil-context'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

const FloatingButton = () => {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      {/* 모바일 버전 -> 숨기기 */}
      {/* PC 버전 -> fixed, float-right를 이용하여 고정 */}
      <div className="hidden lg:flex lg:w-full lg:fixed lg:float-right lg:top-1/4 lg:mr-[30px] lg:z-50">
        <div className="lg:fixed lg:right-[30px] lg:w-[110px] lg:rounded-xl lg:overflow-hidden lg:gap-[5px] lg:text-center lg:text-gray-800 lg:z-50 lg:border lg:border-gray-300 lg:drop-shadow-lg">
          <Link href="/hydrogen">
            <div className="bg-slate-700 text-white px-2 py-3 rounded-t-xl hover:bg-primary-green hover:text-white font-bold">
              Hydrogen
            </div>
          </Link>
          {/* 해시태그를 이용하여 해당 ID를 가진 요소 위치로 이동 */}
          <Link href="/hydrogen#electrolysis">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {isEnglish ? 'Electrolysis' : '수전해 발전'}
            </div>
          </Link>
          {/* 해시태그를 이용하여 해당 ID를 가진 요소 위치로 이동 */}
          <Link href="/hydrogen#hydrogen_service">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {isEnglish ? 'Hydrogen' : '수소 발전'}
            </div>
          </Link>
          {/* 해시태그를 이용하여 해당 ID를 가진 요소 위치로 이동 */}
          <Link href="/hydrogen#energy_independence">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {isEnglish ? 'Independence' : '에너지 자립'}
            </div>
          </Link>
          {/* 기타 페이지로 이동 */}
          <Link href="/hydrogen/hydrogenDetail/others">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {isEnglish ? 'Others' : '기타'}
            </div>
          </Link>
          {/* 카탈로그 페이지로 이동 */}
          <Link href="/customer/catelogs">
            <div className="bg-slate-300 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {isEnglish ? 'Catalog' : '카탈로그'}
            </div>
          </Link>
          {/* Contact Us 페이지로 이동 */}
          <Link href="/customer/contact-us">
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
