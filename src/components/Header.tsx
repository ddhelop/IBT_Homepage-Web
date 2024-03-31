'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { isEnglishState } from '@/context/recoil-context'
import { headerData } from '@/lib/data'

export const Header = () => {
  const [active, setActive] = useState(false) // 모바일 화면에서 상세 navigation이 내려오는지 여부를 저장
  // 모바일버전 상세 메뉴 관리 -> active 사용
  // PC버전의 헤더 상단에 가로로 나열되는 기본 메뉴 컴포넌트가 세로로 나열 되도록 구현

  const [navDown, setNavDown] = useState(false) // PC 화면에서 상세 navigation이 내려오는지 여부를 저장
  // PC버전 상세 메뉴 관리 -> navDown 사용
  // 상세 메뉴 컨텐츠가 hidden -> visible 되도록 구현

  const [isEnglish, setIsEnglish] = useRecoilState(isEnglishState) // 언어 버전 관리
  // 전역 변수 연결 필요

  const toggleEnglish = () => {
    isEnglish == 0 ? setIsEnglish(1) : setIsEnglish(0)
  }
  const handleClick = () => {
    setActive(!active)
  }

  const location = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)
  const updateScroll = () => {
    setScrollPosition(window?.scrollY || document?.documentElement.scrollTop)
  }
  useEffect(() => {
    window?.addEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        {/* 상세 메뉴가 열릴 때는 흰색 배경, 이외에는 투명 배경 */}
        <nav
          className={`flex items-center flex-wrap lg:px-0 py-3 shadow-md ${
            navDown
              ? 'bg-white'
              : active
              ? 'bg-white '
              : location === '/'
              ? 'bg-transparent hover:bg-white'
              : 'bg-white'
          }`}
          onMouseEnter={() => setNavDown(true)} // 마우스가 영역에 들어오면 상세 메뉴 열기
          onMouseLeave={() => setNavDown(false)} // 마우스가 영역 벗어나면 상세 메뉴 닫기
        >
          {/* 반응형 -> 모바일의 경우, 헤더에 로고와 햄버거바만 존재 */}
          {/* 로고 */}
          <Link href={'/'} className="inline-flex items-center p-2 ml-5 lg:hidden">
            <Image alt="logo" src={'/image/Logo.png'} width={100} height={50} />
          </Link>
          {/* 햄버거 바 */}
          <button
            className="inline-flex p-3 rounded lg:hidden text-black mr-5 ml-auto hover:text-black outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* 네비게이션*/}
          <div className={`${active ? 'shadow-sm' : 'hidden px-40'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className="lg:inline-flex lg:flex-row lg:w-full lg:items-center lg:h-auto items-center text-center lg:justify-between flex flex-col">
              {/* 로고 */}
              <Link href={'/'} className={`inline-flex items-center p-2 mr-4 ${active ? 'hidden' : ''}`}>
                <Image alt="logo" src={'/image/Logo.png'} width={100} height={50} />
              </Link>
              <ul className={`${active ? 'w-full' : 'flex w-3/4 justify-between'}`}>
                {/* ----- 1. 회사정보 ----- */}
                {/* 헤더 기본 메뉴 */}
                <div
                  // 모바일 버전에서는 세로 정렬, PC 버전에서는 가로 정렬(inline-flex)
                  className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'text-3xl mt-3 hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : // 첫페이지 최상단에서는 폰트 흰색으로 설정
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
              }`}
                >
                  <Link prefetch href={'/companyInfo'}>
                    <li onClick={() => setActive(false)}>{headerData[0].title[isEnglish]}</li>
                  </Link>
                  {/* PC버전 상세 메뉴 */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    // navDown에 따라 visible <-> hidden
                    // active의 경우에도 hidden 조건 추가해주어야 모바일 버전에서 가려짐
                    className={`${navDown ? '' : 'hidden'} ${
                      active ? 'hidden' : ''
                    } absolute translate-y-1/2 mt-[120px]`}
                  >
                    <Link href={'/companyInfo'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[0].subTitle1?.[isEnglish]}
                      </li>
                    </Link>
                    <Link prefetch href={'/companyInfo#history'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[0].subTitle2?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/companyInfo#collaborate'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[0].subTitle3?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/companyInfo#technical'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[0].subTitle4?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/companyInfo#directions'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[0].subTitle5?.[isEnglish]}
                      </li>
                    </Link>
                  </motion.ul>
                </div>
                {/* ----- 2. battery ----- */}
                {/* 헤더 기본 메뉴 */}
                <div
                  // 모바일 버전에서는 세로 정렬, PC 버전에서는 가로 정렬(inline-flex)
                  className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'text-3xl mt-3 hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : // 첫페이지 최상단에서는 폰트 흰색으로 설정
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
              }`}
                >
                  <Link prefetch href={'/battery'}>
                    <li onClick={() => setActive(false)}>{headerData[1].title}</li>
                  </Link>
                  {/* PC버전 상세 메뉴 */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    // navDown에 따라 visible <-> hidden
                    // active의 경우에도 hidden 조건 추가해주어야 모바일 버전에서 가려짐
                    className={`${navDown ? '' : 'hidden'} ${
                      active ? 'hidden' : ''
                    } absolute translate-y-1/2 mt-[120px]`}
                  >
                    <Link href={'/battery#nicd'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[1].subTitle1}
                      </li>
                    </Link>
                    <Link href={'/battery#lithium'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[1].subTitle2}
                      </li>
                    </Link>
                    <Link href={'/battery/batteryDetail/others'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[1].subTitle3?.[isEnglish]}
                      </li>
                    </Link>
                  </motion.ul>
                </div>
                {/* ----- 3. hydrogen ----- */}
                {/* 헤더 기본 메뉴 */}
                <div
                  // 모바일 버전에서는 세로 정렬, PC 버전에서는 가로 정렬(inline-flex)
                  className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'text-3xl mt-3 hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : // 첫페이지 최상단에서는 폰트 흰색으로 설정
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
              }`}
                >
                  <Link href={'/hydrogen'}>
                    <li onClick={() => setActive(false)}>{headerData[2].title}</li>
                  </Link>
                  {/* PC버전 상세 메뉴 */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    // navDown에 따라 visible <-> hidden
                    // active의 경우에도 hidden 조건 추가해주어야 모바일 버전에서 가려짐
                    className={`${navDown ? '' : 'hidden'} ${
                      active ? 'hidden' : ''
                    } absolute translate-y-1/2 mt-[120px]`}
                  >
                    <Link href={'/hydrogen#electrolysis'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[2].subTitle1?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/hydrogen#hydrogen_service'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[2].subTitle2?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/hydrogen#energy_independence'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[2].subTitle3?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/hydrogen/hydrogenDetail/others'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[2].subTitle4?.[isEnglish]}
                      </li>
                    </Link>
                  </motion.ul>
                </div>
                {/* ----- 4. 고객지원 ----- */}
                {/* 헤더 기본 메뉴 */}
                <div
                  // 모바일 버전에서는 세로 정렬, PC 버전에서는 가로 정렬(inline-flex)
                  className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'text-3xl mt-3 hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : // 첫페이지 최상단에서는 폰트 흰색으로 설정
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
              }`}
                >
                  <Link prefetch href={'/customer/news'}>
                    <li onClick={() => setActive(false)}>{headerData[3].title?.[isEnglish]}</li>
                  </Link>
                  {/* PC버전 상세 메뉴 */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    // navDown에 따라 visible <-> hidden
                    // active의 경우에도 hidden 조건 추가해주어야 모바일 버전에서 가려짐
                    className={`${navDown ? '' : 'hidden'} ${
                      active ? 'hidden' : ''
                    } absolute translate-y-1/2 mt-[120px]`}
                  >
                    <Link prefetch href={'/customer/catelogs'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[3].subTitle1?.[isEnglish]}
                      </li>
                    </Link>
                    <Link href={'/customer/news'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[3].subTitle2}
                      </li>
                    </Link>
                    <Link prefetch href={'/customer/contact-us'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[3].subTitle3}
                      </li>
                    </Link>
                  </motion.ul>
                </div>
                {/* ----- 5. ESG ----- */}
                {/* 헤더 기본 메뉴 */}
                <div
                  // 모바일 버전에서는 세로 정렬, PC 버전에서는 가로 정렬(inline-flex)
                  className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'text-3xl mt-3 hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : // 첫페이지 최상단에서는 폰트 흰색으로 설정
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
              }`}
                >
                  <Link prefetch href={'/ESG_500'}>
                    <li onClick={() => setActive(false)}>{headerData[4].title}</li>
                  </Link>
                  {/* PC버전 상세 메뉴 */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    // navDown에 따라 visible <-> hidden
                    // active의 경우에도 hidden 조건 추가해주어야 모바일 버전에서 가려짐
                    className={`${navDown ? '' : 'hidden'} ${
                      active ? 'hidden' : ''
                    } absolute translate-y-1/2 mt-[120px]`}
                  >
                    <Link href={'/ESG_500'}>
                      <li
                        className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                        onClick={() => setNavDown(false)}
                      >
                        {headerData[4].subTitle1}
                      </li>
                    </Link>
                  </motion.ul>
                </div>
              </ul>
              {/* ----- 언어 선택 버튼 ----- */}
              <button
                className={`lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center ${
                  active ? 'hidden' : ''
                }`}
                onClick={() => toggleEnglish()}
              >
                <div
                  className={`${!isEnglish ? 'text-black' : 'text-gray-400/30'} px-3 ${
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
                  }`}
                >
                  KOR
                </div>
                <div className="h-[1px] bg-gray-400/30" />
                <div
                  className={`${!isEnglish ? 'text-gray-400/30' : 'text-black'} px-3 ${
                    location === '/' && scrollPosition < 120 && !navDown && 'text-white'
                  }`}
                >
                  ENG
                </div>
              </button>
            </div>
          </div>
        </nav>
        {/* PC버전 상세 메뉴 dropdown 배경 */}
        <div
          className={`${
            navDown ? '' : 'hidden'
          } lg:flex-col lg:flex-grow lg:w-full lg:bg-white lg:h-[250px] lg:z-0 shadow-sm`}
          onMouseEnter={() => setNavDown(true)} // 마우스가 영역에 들어오면 상세 메뉴 열기
          onMouseLeave={() => setNavDown(false)} // 마우스가 영역 벗어나면 상세 메뉴 닫기
        />
      </nav>
    </>
  )
}
