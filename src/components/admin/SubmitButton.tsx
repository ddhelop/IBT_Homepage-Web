import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ isActive }: { isActive: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      className={`p-4 w-32 rounded-lg transition
${isActive || pending ? 'bg-gray-200 shadow-none text-gray-400' : 'bg-[#04BF7B] text-white shadow-lg'}`}
      disabled={isActive}
    >
      {pending ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : !isActive ? (
        '글 수정하기'
      ) : (
        '수정완료'
      )}
    </button>
  )
}
