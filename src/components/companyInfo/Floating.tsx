'use client'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <>
      <div className="hidden lg:flex lg:w-full lg:fixed lg:float-right lg:top-1/3 lg:mr-[30px] lg:z-50">
        <div className="lg:fixed lg:right-[30px] lg:w-[100px] lg:rounded-xl lg:overflow-hidden lg:gap-[5px] lg:text-center lg:text-gray-800 lg:z-50 lg:border lg:border-gray-300 lg:drop-shadow-lg">
          <Link href="/companyInfo">
            <div className="bg-slate-700 text-white px-2 py-3 rounded-t-xl hover:bg-primary-green hover:text-white">
              회사정보
            </div>
          </Link>
          <Link href="/companyInfo">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">비전</div>
          </Link>
          <Link href="/companyInfo#history">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">연혁</div>
          </Link>
          <Link href="/companyInfo#collaborate">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">협력/제휴사</div>
          </Link>
          <Link href="/companyInfo#technical">
            <div className="bg-slate-100 px-2 py-2 hover:bg-primary-green hover:text-white">기술 인증</div>
          </Link>
          <Link href="/companyInfo#directions">
            <div className="bg-slate-100 px-2 pt-2 pb-3 hover:bg-primary-green hover:text-white">오시는길</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FloatingButton
