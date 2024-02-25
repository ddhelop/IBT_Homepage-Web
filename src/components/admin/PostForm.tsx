'use client'
import { createPost } from '@/lib/action'
import { getSignedFileUrl } from '@/lib/awsUtils'
import { postData_admin } from '@/lib/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type PostTypeProps = {
  postTypeId: number
}
const PostForm = ({ postTypeId }: PostTypeProps) => {
  const [error, setError] = useState<string | null>(null)
  const [tempUrl, setTempUrl] = useState<string | null>(null)

  const [image, setImage] = useState<File | null>(null)
  const [pdf, setPDF] = useState<File | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
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
      const { title } = Object.fromEntries(formData)
      if (!title) return false
      formData.append('postType', postTypeId.toString())
      const keyString = Math.random().toString(36).substring(0, 12)
      //S3 버킷에 PDF 파일을 저장한 후, 이를 불러오는 pre-signed URL을 가져오는 과정
      switch (postTypeId) {
        case 0:
          if (!image) return false
          const preImg_news = await getSignedFileUrl({ name: `news/` + keyString, type: image.type })
          await fetch(preImg_news, { method: 'PUT', body: image, headers: { 'Content-type': image.type } })
          formData.append('img', preImg_news.split('?')[0])
          break
        case 1:
          if (!image || !pdf) return false
          const [preImg_cate, prePdf_cate] = await Promise.all([
            getSignedFileUrl({ name: `catelog/` + keyString + '/img', type: image.type }),
            getSignedFileUrl({ name: `catelog/` + keyString + '/pdf', type: pdf.type }),
          ])
          await Promise.all([
            fetch(preImg_cate, { method: 'PUT', body: image, headers: { 'Content-type': image.type } }),
            //prettier-ignore
            fetch(prePdf_cate, { method: 'PUT', body: pdf, headers: { 'Content-type': pdf.type, 'Content-Disposition': 'inline' }}),
          ])
          formData.append('img', preImg_cate.split('?')[0])
          formData.append('pdf', prePdf_cate.split('?')[0])
          break
        case 2:
          if (!pdf) return false
          const prePdf_esg = await getSignedFileUrl({ name: `esg-pdf/` + keyString, type: pdf.type })
          //prettier-ignore
          await fetch(prePdf_esg, {method: 'PUT',body: pdf,headers: { 'Content-type': pdf.type, 'Content-Disposition': 'inline' },})
          formData.append('pdf', prePdf_esg.split('?')[0])
      }
      const { success, message } = await createPost(formData)
      if (!success) setError(message)
      switch (postTypeId) {
        case 0:
          router.push(`/admin`)
          break
        case 1:
          router.push(`/admin/catelogs`)
          break
        case 2:
          router.push(`/admin/esg-pdf`)
      }
    } catch (e: any) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-12 bg-white p-8">새 {postData_admin[postTypeId].name} 추가</h1>
      <form className="mx-8 p-8 bg-white rounded-lg" onSubmit={onSubmit}>
        {postTypeId !== 2 && (
          <>
            <h2 className="block text-gray-700 font-bold mb-2">이미지:</h2>
            {tempUrl && (
              <div className="w-64 h-64 relative">
                <Image src={tempUrl} alt="tempImg" fill className="object-contain" />
              </div>
            )}
            <input
              required
              type="file"
              accept="image/*"
              className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4"
              onChange={showImage}
            />
          </>
        )}
        {postTypeId !== 0 && (
          <>
            <h2 className="block text-gray-700 font-bold mb-2">PDF:</h2>
            <input
              required
              type="file"
              accept="application/pdf"
              className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4"
              onChange={(e) => setPDF(e.target.files?.[0])}
            />
          </>
        )}

        <h2 className="block text-gray-700 font-bold mb-2">글 제목:</h2>
        <input required type="text" name="title" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />
        {postTypeId === 0 && (
          <>
            <h2 className="block text-gray-700 font-bold mb-2">글:</h2>
            <textarea
              required
              name="description"
              className="bg-gray-100 rounded-md py-2 px-3 w-full mb-8"
              rows={5}
              cols={33}
            />
          </>
        )}
        <h1 className="text-red-400 mb-2">{error}</h1>
        <button
          className={`p-4 w-32 rounded-lg transition
        bg-[#04BF7B] text-white font-bold`}
        >
          {isLoading ? (
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            `추가하기`
          )}
        </button>
      </form>
    </div>
  )
}

export default PostForm
