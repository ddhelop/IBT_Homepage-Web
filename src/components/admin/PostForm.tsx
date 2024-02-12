'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type PostTypeProps = {
  postType: 'news' | 'catelog'
}
const PostForm = ({ postType }: PostTypeProps) => {
  const [image, setImage] = useState<File | null>(null)
  const [tempUrl, setTempUrl] = useState<string | null>(null)
  const [pdf, setPDF] = useState<File | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const showImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tempUrl) {
      URL.revokeObjectURL(tempUrl)
    }
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setTempUrl(URL.createObjectURL(file))
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { title, description } = Object.fromEntries(formData)
      formData.append('title', title)
      formData.append('description', description)

      if (!image) return false
      formData.append('image', image)

      if (postType == 'catelog') {
        if (!pdf) return false
        formData.append('pdf', pdf)
      }

      const res = await fetch('/api/admin', { method: 'POST', body: formData, cache: 'no-store' }) //fetch request 실행 -> body를 Formdata로 지정해놓으면, multi-part contentType, handler등의 설정을 다 해줌
      console.log(res.status)

      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="px-16">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {postType == 'news' ? '새 뉴스 추가' : '새 카타로그 추가'}
      </h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <h2 className="block text-gray-700 font-bold mb-2">이미지:</h2>
          {tempUrl && (
            <div className="w-64 h-64 relative">
              <Image src={tempUrl} alt="tempImg" fill className="object-contain" />
            </div>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="border rounded py-2 px-3 w-full"
            onChange={showImage}
          />
          {postType == 'catelog' && (
            <>
              <h2 className="block text-gray-700 font-bold mb-2">PDF:</h2>
              <input
                type="file"
                name="pdf"
                accept="application/pdf"
                className="border rounded py-2 px-3 w-full"
                onChange={(e) => setPDF(e.target.files?.[0])}
              />
            </>
          )}
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
