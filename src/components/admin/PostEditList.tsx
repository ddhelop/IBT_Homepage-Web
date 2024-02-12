'use client'

import React, { useState } from 'react'
import { NewsProps } from '@/lib/types'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { handlePostListEdit } from '@/lib/action'

const reorderPosts = (posts: any, startIndex: number, endIndex: number) => {
  const newPostList = Array.from(posts)
  const [removed] = newPostList.splice(startIndex, 1)
  newPostList.splice(endIndex, 0, removed)
  return newPostList as unknown as any
}

const PostEditList = ({ datas, postType }: any) => {
  const [posts, setPosts] = useState<NewsProps[]>(datas)
  console.log(datas)
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    console.log(source.index, destination.index)
    const newPosts = reorderPosts(posts, source.index, destination.index)
    const orders = newPosts.map((item: any) => item.postId)
    console.log(orders)
    setPosts(newPosts)
  }
  const handleDelete = (id: number) => {
    const tempposts = Array.from(posts)
    setPosts(tempposts.filter((item) => item.postId != id))
  }

  return (
    <div className="flex px-16 flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">뉴스 글 수정</h1>

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
                      className="flex p-4 h-40 border border-black-400 bg-white"
                    >
                      <div className="relative w-40">
                        <Image alt="img" className="object-contain" src={post.img} fill />
                      </div>
                      <div className="p-4 flex-1">
                        <h1 className="font-md text-md min-h-16">{post.title}</h1>
                        <h1>{post.postId}</h1>
                        <h3 className="text-gray-700 font-light text-s">{post.createdAt.substring(0, 10)}</h3>
                      </div>
                      <button onClick={() => handleDelete(post?.postId)}>
                        <IoIosClose size={48} color="#747474" />
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

      <button className="mt-8" onClick={() => handlePostListEdit(posts.map((item: any) => item.postId))}>
        글 수정완료
      </button>
    </div>
  )
}

export default PostEditList
