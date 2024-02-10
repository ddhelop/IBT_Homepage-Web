import NewsPosts from '@/components/admin/NewsPosts'
import PostForm from '@/components/admin/PostForm'
import { Suspense } from 'react'

const getNewsData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminNewsPage = async () => {
  const posts = await getNewsData()
  return (
    <div className="flex w-full h-screen pt-80 bg-gray-200">
      <div className="bg-gray-100 basis-1/4 px-16">
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
      <div className="basis-1/2 bg-gray-100">
        <PostForm />
      </div>
    </div>
  )
}

export default AdminNewsPage
