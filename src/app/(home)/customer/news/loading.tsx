import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center pt-48">
      <div className="flex flex-col">
        <h1 className="text-[#79AD4B] text-6xl text-center my-8">IBT News</h1>
        <div className="w-full flex justify-start mt-2">
          <span
            className="bg-gray-200 w-32 flex mt-2 h-5 my-animate-pulse rounded-sm"
            style={{ animationDuration: '1s' }}
          />
        </div>
        <div className="grid grid-cols-5 mt-8 w-full gap-8">
          {[...Array(6)].map((item: any, i: number) => (
            <span
              key={i}
              className="bg-gray-200 w-64 h-80 my-animate-pulse rounded-lg"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading
