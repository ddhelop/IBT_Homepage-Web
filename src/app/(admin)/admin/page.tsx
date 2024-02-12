import PostEditList from '@/components/admin/PostEditList'
import PostForm from '@/components/admin/PostForm'
import { Order } from '@/lib/models'
import { Suspense } from 'react'

const getNewsData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin`, {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const AdminPage = async () => {
  const posts = await getNewsData()
  return (
    <div className="flex w-full h-screen bg-gray-200">
      <Suspense fallback={<div className="w-full h-screen bg-red-500">로딩중...</div>}>
        <PostEditList datas={posts} postType="news" />
      </Suspense>
      <PostForm postType="news" />
      <PostForm postType="catelog" />
    </div>
  )
}

export default AdminPage
