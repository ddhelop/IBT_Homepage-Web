'use client'

import Image from 'next/image'
import React from 'react'
import { CatalogProps } from '@/lib/types'
import { isEnglishState } from '@/context/recoil-context'
import { useRecoilValue } from 'recoil'

const CatelogCard = (post: CatalogProps) => {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <a className="w-64 mb-8" href={post.pdf} target="_blank">
      <div className="relative aspect-[463/655] rounded-md border border-black-400">
        <Image className="object-cover" alt="img" src={post.img} fill />
      </div>
      <div className="w-full bg-[#79AD4B] mt-4 p-3 rounded-md">
        <h1 className=" font-md text-lg text-center text-white">{post.title[isEnglish]}</h1>
      </div>
    </a>
  )
}

export default CatelogCard
