'use client'

import React, { useState } from 'react'
import { NewsProps } from '@/lib/types'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { toBase64 } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'

const reorderPosts = (posts: any, startIndex: number, endIndex: number) => {
  const newPostList = Array.from(posts)
  const [removed] = newPostList.splice(startIndex, 1)
  newPostList.splice(endIndex, 0, removed)
  return newPostList as unknown as any
}

const NewsPosts = ({ posts }: any) => {
  const [news, setNews] = useState<NewsProps[]>(posts)
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    console.log(source.index, destination.index)
    const newPosts = reorderPosts(news, source.index, destination.index)
    setNews(newPosts)
  }
  const handleDelete = (id: number) => {
    const tempNews = Array.from(news)
    setNews(tempNews.filter((item) => item.postId != id))
  }
  const handleSubmit = () => {
    if (news === posts) return
  }

  return (
    <div className="flex p-8 flex-col gap-4 px-64 basis-1/2">
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {news?.map((post: any, id: number) => (
                <Draggable key={post?.postId} draggableId={post?.postId.toString()} index={id}>
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className="flex p-4 h-40 border border-black-400 bg-white"
                    >
                      <div className="relative w-40">
                        <Image
                          alt="img"
                          className="object-contain"
                          src={`data:image/png;base64,${toBase64(post.img?.data)}`}
                          fill
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h1 className="font-md text-md min-h-16">{post.title}</h1>
                        <h3 className="text-gray-300 font-light text-xs">{post.createdAt}</h3>
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
    </div>
  )
}

export default NewsPosts
