import PostEditList from '@/components/admin/PostEditList'

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

const AdminPage = async () => {
  const posts = await getNewsData() //데이터 불러오는 딜레이가 아님

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <PostEditList datas={posts} postType="news" />
    </div>
  )
}

export default AdminPage
