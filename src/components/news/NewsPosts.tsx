'use client'
import React, { useState } from 'react'
import NewsCardAdmin from '../admin/NewsCardAdmin'
import { NewsProps } from '@/lib/types'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const NewsPosts = ({ posts }: any) => {
  const [news, setNews] = useState<NewsProps[]>(posts)
  const onDragEnd = (result: any) => {
    const { source, desc } = result
  }
  const onDragStart = (result: any) => {
    const { source, desc } = result
  }
  const onDragUpdate = (result: any) => {
    const { source, desc } = result
  }

  return (
    <div className="flex p-8 flex-col gap-4  bg-red-100  w-[800px]">
      <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {news?.map((post: any, id: number) => (
                <Draggable key={post.postId} draggableId={post.postId.toString()} index={post.postId}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className="flex p-4 h-40 border border-black-400 bg-white"
                    >
                      <NewsCardAdmin {...post} />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default NewsPosts
