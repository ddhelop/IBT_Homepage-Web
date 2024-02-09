'use client'

import { loggedInState } from '@/context/recoil-context'
import { compare } from '@/lib/action'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const LoginPage = () => {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState)
  const [error, setError] = useState<string | null>(null)
  const [isClient, setIsClient] = useState<boolean>(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const user = await compare(e.target.username.value, e.target.password.value)
    if (user) {
      setLoggedIn(true)
      router.replace('/admin/news')
    } else {
      setError('아이디나 비밀번호가 일치하지 않습니다a.')
    }
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">관리자 로그인</h2>
        {isClient ? (
          loggedIn === true ? (
            <>
              <div>이미 관리자로 로그인한 상태입니다.</div>
              <button
                onClick={() => setLoggedIn(false)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  type="text"
                  placeholder="사용자 이름을 입력하세요"
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  로그인
                </button>
              </form>
              {error}
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                비밀번호를 잊으셨나요?
              </a>
            </>
          )
        ) : (
          <div>로딩중</div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
