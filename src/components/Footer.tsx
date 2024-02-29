'use client'
import { isEnglishState } from '@/context/recoil-context'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

export default function Footer() {
  const [isEnglish, setIsEnglish] = useRecoilState(isEnglishState)
  return (
    <footer className="w-full bg-footer-black mt-20 py-10">
      <div className="flex flex-col justify-center gap-9 px-[3rem] lg:px-0 lg:items-center items-start">
        {/* 반응형 -> 모바일 버전에서 로고 hidden */}
        <div className="hidden lg:relative lg:flex lg:w-48 lg:h-28">
          <Image alt="logo" src={'/image/Logo.png'} fill className="object-contain" />
        </div>
        <div className="flex lg:flex-row flex-col lg:w-full lg:justify-center">
          {/* 반응형 -> PC 버전에서 가운데 정렬, 모바일 버전에서 왼쪽 정렬 */}
          <div className="flex flex-col lg:w-2/5 lg:items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">ADDRESS</div>
            {isEnglish ? (
              <>
                <div>Seoul Branch: 99 Seongsuil-ro, Seongdong-gu,</div>
                <div>SeoulAK Belli Knowledge Industry Center</div>Seoul Forest, Room 1103, Room 1104<div></div>
              </>
            ) : (
              <>
                {' '}
                <div>서울지점: 서울시 성동구 성수일로 99</div>
                <div>서울숲 AK벨리지식산업센터 1103호,1104호</div>
                <div>광주본사: 광주광역시 북구 첨단벤처소로 38번길 2</div>{' '}
              </>
            )}
          </div>
          <div className="lg:w-[1px] lg:rounded-xl lg:bg-gray-400 lg:mx-10" />
          {/* 반응형 -> PC 버전에서 가운데 정렬, 모바일 버전에서 왼쪽 정렬 */}
          <div className="flex flex-col lg:w-2/5 lg:items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">TELEPHONE</div>
            {isEnglish ? (
              <>
                <div>{'Seoul Branch: 02-3409-7141 / (02)3409-7144 (FAX)'}</div>
                <div>{'Gwangju Headquarters: 062-971-7983 / 062-971-7987 (FAX)'}</div>
              </>
            ) : (
              <>
                <div>{'서울지점 : 02-3409-7141 / (02)3409-7144 (FAX)'}</div>
                <div>{'광주본사 : 062-971-7983 / 062-971-7987 (FAX)'}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
