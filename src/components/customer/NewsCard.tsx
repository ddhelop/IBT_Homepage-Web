import Image from 'next/image'
import React from 'react'
import { NewsProps } from '@/lib/types'
const NewsCard = (post: NewsProps) => {
  return (
    <div className="w-64 h-80 border border-black-400 bg-white">
      <div className="relative h-40">
        <Image className="object-cover" alt="img" src={post.img} fill />
      </div>
      <div className="p-4">
        <h3 className="text-[#FFB400] font-regular text-sm">회사뉴스</h3>
        <h1 className="font-md text-md min-h-16">{post.title}</h1>
        <h3 className="text-gray-300 font-light text-xs">{post.createdAt}</h3>
      </div>
    </div>
  )
}

export default NewsCard
