import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-[100px] p-24">
      <div className="bg-gray-200 h-96 w-96 my-animate-pulse rounded-lg" />
      <div className="bg-gray-200 h-12 w-64 rounded-lg my-animate-pulse " />
      <span className="bg-gray-200 h-8 w-32 rounded-lg my-animate-pulse self-end" />
    </div>
  )
}

export default Loading
