'use client'

import { login } from '@/lib/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FormEvent, useEffect } from 'react'
export default function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { password }: { [k: string]: any } = Object.fromEntries(formData)
      const { success, message } = await login(password)
      window.alert(message)
      if (success) {
        router.push('/admin/batteries')
      }
    } catch (error) {}
  }
  useEffect(() => {
    if (params.get('alert')) {
      window.alert(params.get('alert'))
    }
  }, [params])
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-full h-full justify-between p-2">
      <h1 className="text-xl font-bold text-center">관리자 로그인</h1>
      <div className="flex flex-col w-full">
        <input
          className="bg-gray-100 rounded-md py-2 px-3 w-full "
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <button
        className="p-4 w-40 rounded-lg transition
        bg-[#04BF7B] text-white font-bold"
      >
        로그인
      </button>
    </form>
  )
}
