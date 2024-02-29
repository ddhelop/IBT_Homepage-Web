import LoginForm from '@/components/admin/LoginForm'
import { logout } from '@/lib/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = cookies().get('session')?.value

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-md rounded-lg items-center justify-center p-8 mb-4 flex flex-col min-w-96 min-h-80">
        {!session ? (
          <LoginForm />
        ) : (
          <form
            action={async () => {
              'use server'
              await logout()
              redirect('/')
            }}
          >
            <button
              className="p-4 w-40 rounded-lg transition
        bg-[#04BF7B] text-white font-bold"
            >
              로그아웃 하기
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
