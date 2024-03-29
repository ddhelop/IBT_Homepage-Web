'use client'

import React, { FormEvent, useState } from 'react'
import SubmitButton from './SubmitButton'
import { changePassword } from '@/lib/action'
import crypto from 'crypto'
import { useRouter } from 'next/navigation'

const ChangeAccount = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { current_pw, new_pw, new_pw_confirm }: { [k: string]: any } = Object.fromEntries(formData)
      if (new_pw !== new_pw_confirm) {
        setError('새 비밀번호가 맞지 않습니다.')
        setIsLoading(false)
        return false
      } else {
        const currPW = crypto.createHash('sha256').update(current_pw).digest('hex')
        const newPW = crypto.createHash('sha256').update(new_pw).digest('hex')
        const reqData = { currPW, newPW }
        const { success, message } = await changePassword(reqData)
        setIsLoading(false)
        if (!success) {
          setError(message)
        } else {
          window.alert(message)
          router.push('/admin/batteries')
        }
      }
    } catch (e: any) {
      console.log(e)
    }
  }
  return (
    <form className="m-8 p-8 bg-white rounded-lg flex-col" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <h1>사용중인 비밀번호를 입력해주세요.</h1>
        <input
          required
          type="password"
          name="current_pw"
          placeholder={'현재 비밀번호'}
          className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
        />
        <h1>새 비밀번호를 입력해주세요.</h1>
        <input
          required
          type="password"
          name="new_pw"
          placeholder={'새 비밀번호'}
          className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
        />
        <h1>새 비밀번호를 한번 더 입력해주세요.</h1>
        <input
          required
          type="password"
          name="new_pw_confirm"
          placeholder={'새 비밀번호 확인'}
          className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
        />
        {error}
        <SubmitButton text={'변경하기'} isForSubmit isActive={true} isLoading={isLoading} />
      </div>
    </form>
  )
}

export default ChangeAccount
