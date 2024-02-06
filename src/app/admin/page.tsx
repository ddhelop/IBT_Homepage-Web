import NewsPosts from '@/components/admin/NewsPosts'
import { posts } from '@/lib/data'
import { connectToDb } from '@/lib/utils'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/admin', {
    // cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminPage = async () => {
  // const dposts = await getData()
  // console.log(dposts)

  return (
    <div className="flex flex-col items-end bg-gray-50">
      <h1>뉴스 관리</h1>
      <NewsPosts posts={posts} />
    </div>
  )
}

export default AdminPage
