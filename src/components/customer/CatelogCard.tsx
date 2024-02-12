'use client'

import Image from 'next/image'
import React from 'react'
import { CatelogProps } from '@/lib/types'
const CatelogCard = (post: CatelogProps) => {
  return (
    <a className="w-64" href={post.pdf} target="_blank">
      <div className="relative h-80  border border-black-400">
        <Image className="object-cover" alt="img" src={post.img} fill />
      </div>
      <div className="w-full bg-[#79AD4B] mt-8 p-4 rounded-lg">
        <h1 className=" font-md text-lg text-center text-white">{post.title}</h1>
      </div>
    </a>
  )
}

export default CatelogCard
