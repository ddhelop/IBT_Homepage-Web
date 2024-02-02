import Image from 'next/image'
import React from 'react'
import { toBase64 } from '@/lib/utils'
import { NewsProps } from '@/lib/types'

const NewsCardAdmin = (post: NewsProps) => {
  return (
    <>
      <div className="relative w-40">
        <Image alt="img" className="object-contain" src={`data:image/png;base64,${toBase64(post.img?.data)}`} fill />
      </div>
      <div className="p-4">
        <h3 className="text-[#FFB400] font-regular text-sm">회사뉴스</h3>
        <h1 className="font-md text-md min-h-16">{post.title}</h1>
        <h3 className="text-gray-300 font-light text-xs">{post.createdAt}</h3>
      </div>
    </>
  )
}

export default NewsCardAdmin
