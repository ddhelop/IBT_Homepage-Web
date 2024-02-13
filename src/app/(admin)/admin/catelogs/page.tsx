import PostEditList from '@/components/admin/PostEditList'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/catelogs`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminPage = async () => {
  const posts = await getData()

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <PostEditList datas={posts} postType="catelogs" />
    </div>
  )
}

export default AdminPage
