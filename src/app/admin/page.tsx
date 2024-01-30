import React from 'react'

const AdminPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">관리자 로그인</h2>
        <div className="mb-4">
          <div className="block text-gray-700 text-sm font-bold mb-2">사용자 이름</div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            type="text"
            placeholder="사용자 이름을 입력하세요"
          />
        </div>
        <div className="mb-6">
          <div className="block text-gray-700 text-sm font-bold mb-2">비밀번호</div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            로그인
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
