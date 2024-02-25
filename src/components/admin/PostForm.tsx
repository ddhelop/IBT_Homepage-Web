'use client'
import { createPost } from '@/lib/action'
import { getSignedFileUrl } from '@/lib/awsUtils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type PostTypeProps = {
  postType: string
}
const PostForm = ({ postType }: PostTypeProps) => {
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
      const { title, description } = Object.fromEntries(formData)
      if (!image) {
        setError('이미지 파일을 추가하지 않았습니다.')
        return false
      }
      if (!title) {
        setError('제목을 작성하지 않았습니다.')
        return false
      }
      if (!description) {
        setError('내용을 작성하지 않았습니다.')
        return false
      }

      formData.append('postType', postType)
      formData.append('title', title)
      formData.append('desc', description)

      /////////const res = await fetch('/api/admin', { method: 'POST', body: formData, cache: 'no-store' }) //fetch request 실행 -> body를 Formdata로 지정해놓으면, multi-part contentType, handler등의 설정을 다 해줌
      const keyString = Math.random().toString(36).substring(0, 12)
      //S3 버킷에 PDF 파일을 저장한 후, 이를 불러오는 pre-signed URL을 가져오는 과정
      if (postType == 'catelog') {
        if (!pdf) {
          setError('PDF 파일을 추가하지 않았습니다.')
          return false
        }
        console.log('Starting Upload', new Date().getTime())
        const [presigned_img, presigned_pdf] = await Promise.all([
          getSignedFileUrl({ name: `catelog/` + keyString + '/img', type: image.type }),
          getSignedFileUrl({ name: `catelog/` + keyString + '/pdf', type: pdf.type }),
        ])
        console.log('got PresignedURL', new Date().getTime())
        const [uploadImg_catelog, uploadPDF_catelog] = await Promise.all([
          fetch(presigned_img, { method: 'PUT', body: image, headers: { 'Content-type': image.type } }),
          //prettier-ignore
          fetch(presigned_pdf, { method: 'PUT', body: pdf, headers: { 'Content-type': pdf.type, 'Content-Disposition': 'inline' }}),
        ])
        console.log('Uploaded To S3', new Date().getTime(), uploadImg_catelog)
        if (uploadPDF_catelog.status != 200 || uploadImg_catelog.status != 200) {
          setError('파일 업로드 실패')
          return false
        }
        formData.append('img', presigned_img as string)
        formData.append('pdf', presigned_pdf as string)
        console.log(Object.fromEntries(formData))
      } else {
        const presigned_img = await getSignedFileUrl({ name: `news/` + keyString, type: image.type })
        formData.append('img', JSON.stringify([presigned_img as string, image.type]))
      }
      const { success, message } = await createPost(formData)
      postType == 'news' ? router.push(`/admin`) : router.push(`/admin/catelogs`)
      if (!success) {
        setError(message)
      }
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-12 bg-white p-8">
        {postType == 'news' ? '새 뉴스 추가' : '새 카탈로그 추가'}
      </h1>
      <form className="mx-8 p-8 bg-white rounded-lg" onSubmit={onSubmit}>
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
        {postType == 'catelog' && (
          <>
            <h2 className="block text-gray-700 font-bold mb-2">PDF:</h2>
            <input
              required
              type="file"
              name="pdf"
              accept="application/pdf"
              className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4"
              onChange={(e) => setPDF(e.target.files?.[0])}
            />
          </>
        )}

        <h2 className="block text-gray-700 font-bold mb-2">글 제목:</h2>
        <input required type="text" name="title" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />

        <h2 className="block text-gray-700 font-bold mb-2">글:</h2>
        <textarea name="description" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-8" rows={5} cols={33} />
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
