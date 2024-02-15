import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4 bg-white p-8">뉴스 게시글</h1>
        <div className="mx-8 pb-2 bg-white rounded-lg">
          <div className="flex p-4 font-medium text-gray-400">
            <h3 className="basis-1/4">뉴스 제목</h3>
            <h3 className="basis-1/4 ml-8">생성된 날짜</h3>
            <h3 className="basis-1/2">내용</h3>
          </div>
          <ul className=" mx-auto space-y-2 w-[96%]">
            {[...Array(8)].map((item: any, i: number) => (
              <li key={i}>
                <span
                  className="bg-gray-200 w-full inline-block h-7 my-animate-pulse rounded-lg"
                  style={{ animationDelay: `${i * 0.05}s`, animationDuration: '2s' }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Loading
