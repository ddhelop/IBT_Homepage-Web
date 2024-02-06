'use client'

import { Posts } from '@/components/Posts'
import { Post } from '@/lib/models'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AdminPage = () => {
  const router = useRouter()
  const [file, setFile] = useState<File>()
  const [mounted, setMounted] = useState(false)

  const onSubmit = async (e: any) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지

    if (!file) return
    try {
      const formData = new FormData(e.target) //새로운 FormData 생성
      const { title, description } = Object.fromEntries(formData)
      formData.append('image', file)
      formData.append('title', title)
      formData.append('description', description)
      const res = await fetch('/api/news', { method: 'POST', body: formData })
      //fetch request 실행 -> body를 Formdata로 지정해놓으면, multi-part contentType, handler등의 설정을 다 해줌
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.log(e)
    }
  }
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">블로그 작성 페이지</h1>
        <Posts />
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <h2 className="block text-gray-700 font-bold mb-2">이미지:</h2>
            <input
              type="file"
              name="image"
              className="border rounded py-2 px-3 w-full"
              onChange={(e) => setFile(e.target.files?.[0])}
            ></input>
          </div>
          <div className="mb-4">
            <h2 className="block text-gray-700 font-bold mb-2">글 제목:</h2>
            <input type="text" name="title" className="border rounded py-2 px-3 w-full" />
          </div>
          <div className="mb-4">
            <h2 className="block text-gray-700 font-bold mb-2">글:</h2>
            <textarea name="description" className="border rounded py-2 px-3 w-full" rows={5} cols={33}></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">작성하기</button>
        </form>
      </div>
    </div>
  )
}

export default AdminPage
