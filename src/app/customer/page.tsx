import NewsPosts from '@/components/admin/NewsPosts'
import NewsCard from '@/components/news/NewsCard'
import { posts } from '@/lib/data'

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
    <div className="flex flex-col bg-white">
      <h1 className="text-[#79AD4B] text-6xl text-center my-8">IBT News</h1>
      <div className="w-full flex justify-start">
        <h3>전체</h3>
        <h3>{posts.length}</h3>
        <h3>건</h3>
      </div>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <NewsCard key={post.postId} {...post} />
        ))}
      </div>
    </div>
  )
}

export default AdminPage
