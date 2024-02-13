'use client'

import React, { useEffect, useState } from 'react'
import { CatelogProps, NewsProps } from '@/lib/types'
import { FaPlus } from 'react-icons/fa6'

import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { handleCatelogListEdit, handlePostListEdit } from '@/lib/action'
import { useFormState } from 'react-dom'
import Link from 'next/link'

const reorderPosts = (posts: any, startIndex: number, endIndex: number) => {
  const newPostList = Array.from(posts)

  const [removed] = newPostList.splice(startIndex, 1)
  newPostList.splice(endIndex, 0, removed)
  return newPostList as unknown as any
}

const PostEditList = ({ datas, postType }: any) => {
  const [state, formAction] = useFormState(postType == 'news' ? handlePostListEdit : handleCatelogListEdit, undefined)

  const [temp, setTemp] = postType == 'news' ? useState<NewsProps[]>(datas) : useState<CatelogProps[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의
  const [posts, setPosts] = useState<any[]>(datas)
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newPosts = reorderPosts(posts, source.index, destination.index)
    setPosts(newPosts)
  }
  const handleDelete = (id: number) => {
    const tempposts = Array.from(posts)
    setPosts(tempposts.filter((item) => item.postId != id))
  }
  useEffect(() => {
    setTemp(posts)
  }, [state])

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4 bg-white p-8">{postType == 'news' ? '뉴스 게시글' : '카탈로그 글'}</h1>
      <div className="mx-8 pb-2 bg-white rounded-lg">
        <div className="flex p-4 font-medium text-gray-400">
          <h3 className="basis-1/4">{postType == 'news' ? '뉴스 제목' : '카탈로그 제목'}</h3>
          <h3 className="basis-1/4 ml-8">생성된 날짜</h3>
          <h3 className="basis-1/2">내용</h3>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId="droppable">
            {(droppableProvided) => (
              <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                {posts?.map((post: any, id: number) => (
                  <Draggable key={post?.postId} draggableId={post?.postId.toString()} index={id}>
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        className={`flex px-4 h-12 items-center bg-white border-t`}
                      >
                        <h1 className="font-bold text-md basis-1/4">{post.title}</h1>
                        <div className="relative w-8 h-8">
                          <Image alt="img" className="object-cover" src={post.img} fill />
                        </div>
                        <h3 className="text-gray-700 font-medium ml-4 basis-1/4">{post.createdAt.substring(0, 10)}</h3>

                        <h3 className="ml-4 basis-1/2 font-light w-48 truncate">{post.desc}</h3>

                        <button onClick={() => handleDelete(post?.postId)}>
                          <IoIosClose size={32} color="#747474" />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
      <div className="flex flex-1 justify-between mx-8 mt-8">
        <form action={formAction}>
          <input type="hidden" name="_postOrder" value={JSON.stringify(posts.map((item: any) => item.postId))} />
          <button
            className={`p-4 w-32 rounded-lg transition
        ${temp === posts ? 'bg-gray-200 shadow-none text-gray-400' : 'bg-[#04BF7B] text-white shadow-lg'}`}
            disabled={temp == posts}
          >
            글 수정하기
          </button>
        </form>
      </div>
      <h3 className="mx-8 my-2 text-green-800">{state?.message}</h3>
      <Link
        href={postType == 'news' ? '/admin/news/add' : '/admin/catelogs/add'}
        className=" absolute bottom-12 right-12 p-4 rounded-full
       bg-[#04BF7B] text-white shadow-lg"
      >
        <FaPlus size={40} />
      </Link>
    </div>
  )
}

export default PostEditList
