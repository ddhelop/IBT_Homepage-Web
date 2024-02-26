'use client'
import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData } from '@/lib/data'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

const FloatingButton = () => {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="hidden lg:flex lg:w-full lg:fixed lg:float-right lg:top-1/3 lg:mr-[30px] lg:z-50">
        <div className="lg:fixed lg:right-[30px] lg:w-[100px] lg:rounded-xl lg:overflow-hidden lg:gap-[5px] lg:text-center lg:text-gray-800 lg:z-50 lg:border lg:border-gray-300 lg:drop-shadow-lg">
          <Link href="/companyInfo">
            <div className="bg-slate-700 text-white px-2 py-3 rounded-t-xl hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].companyInfo?.[isEnglish]}
            </div>
          </Link>
          <Link href="/companyInfo">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].vision?.[isEnglish]}
            </div>
          </Link>
          <Link href="/companyInfo#history">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].history?.[isEnglish]}
            </div>
          </Link>
          <Link href="/companyInfo#collaborate">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].partner?.[isEnglish]}
            </div>
          </Link>
          <Link href="/companyInfo#technical">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].certification?.[isEnglish]}
            </div>
          </Link>
          <Link href="/companyInfo#directions">
            <div className="bg-slate-100 px-2 pt-2 pb-3 hover:bg-primary-green hover:text-white font-bold">
              {CompanyInfoData?.[11].direction?.[isEnglish]}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FloatingButton
