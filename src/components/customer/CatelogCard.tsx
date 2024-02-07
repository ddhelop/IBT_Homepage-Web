'use client'

import Image from 'next/image'
import React from 'react'
import { toBase64 } from '@/lib/utils'
import { CatelogProps } from '@/lib/types'
import Link from 'next/link'
const CatelogCard = (post: CatelogProps) => {
  console.log(post)
  const downloadPDF = (buffer: Buffer, title: string) => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([buffer], { type: 'application/pdf' }))
    a.download = title + '.pdf'
    a.click()
  }
  return (
    <div className="w-64">
      <div className="relative h-80  border border-black-400">
        <Image className="object-cover" alt="img" src={`data:image/png;base64,${toBase64(post.img?.data)}`} fill />
      </div>
      <button
        onClick={() => downloadPDF(post.pdf.data, post.title)}
        className="w-full bg-[#79AD4B] mt-8 p-4 rounded-lg"
      >
        <h1 className=" font-md text-lg text-center text-white">{post.title}</h1>
      </button>
    </div>
  )
}

export default CatelogCard
