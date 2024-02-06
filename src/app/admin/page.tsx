import NewsPosts from '@/components/admin/NewsPosts'
import PostForm from '@/components/admin/PostForm'
import { Suspense } from 'react'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/admin', {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminPage = async () => {
  const posts = await getData()

  return (
    <div className="flex w-full h-screen bg-gray-200">
      <h1>뉴스 관리</h1>
      <Suspense fallback={<div className="w-full h-screen bg-red-500">로딩중...</div>}>
        <NewsPosts posts={posts} />
      </Suspense>
      <PostForm />
    </div>
  )
}

export default AdminPage
