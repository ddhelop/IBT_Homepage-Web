import NewsCard from '@/components/customer/NewsCard'

import { NewsProps } from '@/lib/types'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    method: 'GET',
    cache: 'no-store',
    // next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const NewsPage = async () => {
  const posts = await getData()

  return (
    <div className="flex flex-col bg-white px-16">
      <h1 className="text-[#79AD4B] text-6xl text-center my-8">IBT News</h1>
      <div className="w-full flex justify-start mt-2">
        <h3>전체</h3>
        <h3 className="w-8 text-center text-[#FFB400]">{posts.length}</h3>
        <h3>건</h3>
      </div>
      <div className="flex flex-wrap gap-8 mt-8">
        {posts.map((post: NewsProps) => (
          <Link key={post.postId.toString()} href={`/customer/news/${post.postId}`}>
            <NewsCard key={post.postId.toString()} {...post} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewsPage
