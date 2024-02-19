import NewsCard from '@/components/customer/NewsCard'

import { NewsProps } from '@/lib/types'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const NewsPage = async () => {
  const posts = await getData()
  console.log(posts)
  return (
    <div className="flex justify-center w-full pt-48 min-h-[64vh] lg:min-h-[80vh]">
      <div className="flex flex-col sm:w-auto w-[92%]">
        <h1 className="text-[#79AD4B] text-6xl text-center">IBT News</h1>
        <div className="w-full flex justify-start mt-2">
          <h3>전체</h3>
          <h3 className="w-8 text-center text-[#79AD4B]">{posts.length}</h3>
          <h3>건</h3>
        </div>
        <div className="flex flex-wrap mt-8">
          {posts?.length ? (
            posts.map((post: NewsProps) => (
              <Link prefetch key={post.id.toString()} href={`/customer/news/${post.id}`}>
                <NewsCard key={post.id.toString()} {...post} />
              </Link>
            ))
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-gray-400">
              <h1 className="text-2xl sm:text-lg">게시글이 없어요!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
