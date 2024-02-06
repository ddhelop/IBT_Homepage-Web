import NewsPosts from '@/components/admin/NewsPosts'
import PostForm from '@/components/admin/PostForm'
import { Suspense } from 'react'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/admin/news', {
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
    <div className="flex w-full h-screen pt-80 bg-gray-200">
      <div className="bg-white basis-1/4 px-16">
        <ul className="">
          <h1 className="text-lg">뉴스</h1>
          <h1 className="text-lg">카탈로그</h1>
        </ul>
      </div>

      <div className="basis-1/4">
        <Suspense fallback={<div className="w-full h-screen bg-red-500">로딩중...</div>}>
          <NewsPosts posts={posts} />
        </Suspense>
      </div>
      <div className="basis-1/2">
        <PostForm />
      </div>
    </div>
  )
}

export default AdminPage
