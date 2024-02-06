'use client'

import { FormEvent, useState } from 'react'

const PostForm = () => {
  const [file, setFile] = useState<File | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { title, description } = Object.fromEntries(formData)
      if (!file) return false

      formData.append('image', file)
      formData.append('title', title)
      formData.append('description', description)
      const res = await fetch('/api/admin/news', { method: 'POST', body: formData }) //fetch request 실행 -> body를 Formdata로 지정해놓으면, multi-part contentType, handler등의 설정을 다 해줌
      //현재 새로고침
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="px-16">
      <h1 className="text-2xl font-bold mb-4 text-center">새 뉴스 작성</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <h2 className="block text-gray-700 font-bold mb-2">이미지:</h2>
          <input
            type="file"
            name="image"
            accept="image/*"
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isLoading ? '저장중...' : `작성하기`}
        </button>
      </form>
    </div>
  )
}

export default PostForm
