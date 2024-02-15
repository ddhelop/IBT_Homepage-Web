import React from 'react'
import { useFormStatus } from 'react-dom'

export default function Button() {
  const { pending } = useFormStatus()
  return <button className="w-32 h-8 bg-[#069729] text-white rounded">{pending ? '전송 중...' : '작성완료'}</button>
}
