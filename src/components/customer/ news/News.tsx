'use client'
import PaginationComponent from '@/components/commons/Pagination/Pagination'
import NewsCard from '@/components/customer/NewsCard'
import { NewsProps, PaginationProps } from '@/lib/types'
import Link from 'next/link'
import { useState } from 'react'

const POSTS_PER_PAGE = 20 // 한 페이지당 게시물 수

const News = ({ posts }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지 상태
  const totalPageCount = Array.isArray(posts) ? Math.ceil(posts.length / POSTS_PER_PAGE) : 0

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = () => {
    if (!Array.isArray(posts) || posts.length === 0) {
      return [] // posts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    return posts.slice(startIndex, endIndex)
  }

  const currentPagePosts = getCurrentPagePosts()

  return (
    <div className="flex justify-center pt-48">
      <div className="flex flex-col">
        <h1 className="text-[#79AD4B] text-6xl text-center my-8">IBT News</h1>
        <div className="w-full flex justify-start mt-2">
          <h3>전체</h3>
          <h3 className="w-8 text-center text-[#79AD4B]">{posts.length}</h3>
          <h3>건</h3>
        </div>
        {posts?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mt-8 w-[min(92%,1920px)] gap-8">
            {currentPagePosts?.map((post: NewsProps) => (
              <Link prefetch key={post.id.toString()} href={`/customer/news/${post.id}`}>
                <NewsCard key={post.id.toString()} {...post} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex justify-center w-[1080px]">
            <div className="w-full h-96 flex items-center justify-center text-gray-400">
              <h1 className="text-2xl sm:text-lg w-full text-center">게시글이 없어요!</h1>
            </div>
          </div>
        )}

        {/* pagination */}
        <div className="w-full flex justify-center items-center mt-12">
          <PaginationComponent
            posts={getCurrentPagePosts()}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPageCount={totalPageCount}
          />
        </div>
      </div>
    </div>
  )
}

export default News
