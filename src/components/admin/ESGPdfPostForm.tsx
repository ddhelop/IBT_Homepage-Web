'use client'
import { createPost } from '@/lib/action'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const ESGPdfPostForm = () => {
  const [error, setError] = useState<string | null>(null)
  const [pdf, setPDF] = useState<File | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { title } = Object.fromEntries(formData)

      if (!pdf) {
        setError('PDF파일을 추가하지 않았습니다.')
        return false
      }
      formData.append('pdf', pdf)

      if (!title) {
        setError('제목을 작성하지 않았습니다.')
        return false
      }
      formData.append('title', title)
      formData.append('postType', 'esg-pdf')
      const { success, message } = await createPost(formData)
      router.push(`/admin/esg-pdf`)
      if (!success) {
        setError(message)
      }
      console.log(message)
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-12 bg-white p-8">지우장학재단 PDF 추가</h1>
      <form className="mx-8 p-8 bg-white rounded-lg" onSubmit={onSubmit}>
        <h2 className="block text-gray-700 font-bold mb-2">PDF:</h2>
        <input
          required
          type="file"
          name="pdf"
          accept="application/pdf"
          className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4"
          onChange={(e) => setPDF(e.target.files?.[0])}
        />
        <h2 className="block text-gray-700 font-bold mb-2">pdf 제목:</h2>
        <input required type="text" name="title" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />
        {error}
        <button
          className={`p-4 w-32 rounded-lg transition
        bg-[#04BF7B] text-white font-bold`}
        >
          {isLoading ? '저장중...' : `작성하기`}
        </button>
      </form>
    </div>
  )
}

export default ESGPdfPostForm
