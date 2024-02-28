import { getSession, login, logout } from '@/lib/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = cookies().get('session')?.value
  console.log(session)
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-md rounded items-center justify-center px-8 pt-6 pb-8 mb-4 flex flex-col min-w-96 min-h-96">
        {!session ? (
          <form
            action={async (formData) => {
              'use server'
              const { username, password }: { [k: string]: any } = Object.fromEntries(formData)
              await login(username, password)
              redirect('/admin/catelogs')
            }}
          >
            <h1 className="text-lg font-bold mb-4 text-center">관리자 로그인</h1>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              name="username"
              type="text"
              placeholder="사용자 이름을 입력하세요"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              로그인
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              'use server'
              await logout()
              redirect('/')
            }}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              로그아웃 하기
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
