'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [active, setActive] = useState(false)
  const [navDown, setNavDown] = useState(false)

  const [isKorean, setIsKorean] = useState(true)
  // 전역 변수 연결 필요

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white py-3" onMouseEnter={() => setNavDown(true)}>
        <div className="inline-flex items-center p-2 ml-5 lg:hidden">
          <Image alt="logo" src={'/image/Logo.png'} width={100} height={50} />
        </div>
        {/* 햄버거 바 */}
        <button
          className=" inline-flex p-3 hover:bg-gray-200 rounded lg:hidden text-black mr-5 ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* 네비게이션*/}
        <div className={`${active ? '' : 'hidden px-40'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:w-full lg:items-center lg:h-auto items-center text-center lg:justify-between flex flex-col">
            {/* 로고 */}
            <Link href={'/intro'} className={`inline-flex items-center p-2 mr-4 ${active ? 'hidden' : ''}`}>
              <Image alt="logo" src={'/image/Logo.png'} width={100} height={50} />
            </Link>
            <ul className={`${active ? 'w-full' : 'flex w-3/4 justify-between'}`}>
              {/* 1. 회사정보 */}
              <div
                className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black justify-center items-center
              ${
                active
                  ? 'hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : ''
              }`}
              >
                <Link href={`${active ? '/companyInfo' : ''}`}>
                  <li onClick={() => setActive(false)}>회사정보</li>
                </Link>
                <ul
                  className={`${
                    navDown
                      ? 'transition-opacity duration-300 ease-in transform opacity-100'
                      : 'transition-opacity duration-300 ease-out transform opacity-0'
                  } ${active ? 'hidden' : ''} absolute translate-y-1/2 mt-[120px]`}
                >
                  <Link href={'/companyInfo'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      비전
                    </li>
                  </Link>
                  <Link href={'/companyInfo'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      연혁
                    </li>
                  </Link>
                  <Link href={'/companyInfo'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      협력/제휴사
                    </li>
                  </Link>
                  <Link href={'/companyInfo'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      기술인증
                    </li>
                  </Link>
                  <Link href={'/companyInfo'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      오시는길
                    </li>
                  </Link>
                </ul>
              </div>
              {/* 2. battery */}
              <div
                className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black items-center justify-center
              ${
                active
                  ? 'hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : ''
              }`}
              >
                <Link href={`${active ? '/battery' : ''}`}>
                  <li onClick={() => setActive(false)}>Battery</li>
                </Link>
                <ul
                  className={`${
                    navDown
                      ? 'transition-opacity duration-300 ease-in transform opacity-100'
                      : 'transition-opacity duration-300 ease-out transform opacity-0'
                  } ${active ? 'hidden' : ''} absolute translate-y-1/2 mt-[120px]`}
                >
                  <Link href={'/battery'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      Ni-cd
                    </li>
                  </Link>
                  <Link href={'/battery'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      Lithium
                    </li>
                  </Link>
                  <Link href={'/battery'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      기타
                    </li>
                  </Link>
                </ul>
              </div>
              {/* 3. hydrogen */}
              <div
                className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black items-center justify-center
              ${
                active
                  ? 'hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : ''
              }`}
              >
                <Link href={`${active ? '/hydrogen' : ''}`}>
                  <li onClick={() => setActive(false)}>Hydrogen</li>
                </Link>
                <ul
                  className={`${
                    navDown
                      ? 'transition-opacity duration-300 ease-in transform opacity-100'
                      : 'transition-opacity duration-300 ease-out transform opacity-0'
                  } ${active ? 'hidden' : ''} absolute translate-y-1/2 mt-[120px]`}
                >
                  <Link href={'/hydrogen'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      수소경제
                    </li>
                  </Link>
                  <Link href={'/hydrogen'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      사업개요
                    </li>
                  </Link>
                </ul>
              </div>
              {/* 4. 고객지원 */}
              <div
                className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black items-center justify-center
              ${
                active
                  ? 'hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : ''
              }`}
              >
                <Link href={`${active ? '/' : ''}`}>
                  <li onClick={() => setActive(false)}>고객지원</li>
                </Link>
                <ul
                  className={`${
                    navDown
                      ? 'transition-opacity duration-300 ease-in transform opacity-100'
                      : 'transition-opacity duration-300 ease-out transform opacity-0'
                  } ${active ? 'hidden' : ''} absolute translate-y-1/2 mt-[120px]`}
                >
                  <Link href={'/'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      카탈로그
                    </li>
                  </Link>
                  <Link href={'/'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      IBT News
                    </li>
                  </Link>
                  <Link href={'/'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
              {/* 5. ESG */}
              <div
                className={`lg:relative lg:inline-flex lg:w-full w-full px-3 py-2 rounded text-black items-center justify-center
              ${
                active
                  ? 'hover:bg-gray-200 hover:scale-110 hover:transition-transform ease-in-out duration-400 active:bg-gray-200'
                  : ''
              }`}
              >
                <Link href={`${active ? '/ESG_500' : ''}`}>
                  <li onClick={() => setActive(false)}>ESG</li>
                </Link>
                <ul
                  className={`${
                    navDown
                      ? 'transition-opacity duration-300 ease-in transform opacity-100'
                      : 'transition-opacity duration-300 ease-out transform opacity-0'
                  } ${active ? 'hidden' : ''} absolute translate-y-1/2 mt-[120px]`}
                >
                  <Link href={'/ESG_500'}>
                    <li
                      className="mb-[20px] hover:scale-110 hover:transition-transform ease-in-out duration-400 z-10"
                      onClick={() => setNavDown(false)}
                    >
                      IBT ESG
                    </li>
                  </Link>
                </ul>
              </div>
            </ul>
            {/* 언어 선택 버튼 */}
            <button
              className={`lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center ${
                active ? 'hidden' : ''
              }`}
            >
              <div className={`${isKorean ? 'text-gray-700' : 'text-gray-300'} px-3`} onClick={() => setIsKorean(true)}>
                KOR
              </div>
              <div className="h-[1px] bg-gray-200" />
              <div
                className={`${isKorean ? 'text-gray-200' : 'text-gray-700'} px-3`}
                onClick={() => setIsKorean(false)}
              >
                ENG
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* 네비게이션 dropdown 배경 */}
      <div
        className={`${
          navDown ? '' : 'hidden'
        } lg:flex-col lg:flex-grow lg:w-full lg:bg-white lg:h-[250px] lg:z-0 shadow-sm`}
        onMouseLeave={() => setNavDown(false)}
      />
    </>
  )
}
