import React from 'react'

const Loading = () => {
  return (
    <div className="flex w-full justify-center pt-48">
      <div className="flex flex-col">
        <h1 className="text-[#79AD4B] text-6xl text-center my-8">CATALOG</h1>
        <div className="grid grid-cols-3 mt-8 w-full gap-8">
          {[...Array(6)].map((item: any, i: number) => (
            <span
              key={i}
              className="bg-gray-200 w-64 mb-8 h-80 my-animate-pulse rounded-lg"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading
