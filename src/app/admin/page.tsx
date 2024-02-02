import NewsPosts from '@/components/news/NewsPosts'

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
  // mongoose.deleteModel('Post')
  // console.log(posts)

  return (
    <div className="flex flex-col items-end bg-gray-50">
      <h1>뉴스 관리</h1>
      <NewsPosts posts={posts} />

      {/* <PostForm /> */}
    </div>
  )
}

export default AdminPage
