'use client'

import React, { useState } from 'react'
import { CatelogProps } from '@/lib/types'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { reorderPosts, toBase64 } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'

const CatelogPosts = ({ datas }: any) => {
  const [catelogs, setCatelogs] = useState<CatelogProps[]>(datas)
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newPosts = reorderPosts(catelogs, source.index, destination.index)
    setCatelogs(newPosts)
  }
  const handleDelete = (id: number) => {
    const tempCatelogs = Array.from(catelogs)
    setCatelogs(tempCatelogs.filter((item) => item.catelogId != id))
  }
  const handleSubmit = () => {
    if (catelogs === datas) return
  }

  return (
    <div className="flex px-16 flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">뉴스 글 수정</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {catelogs?.map((catelog: any, id: number) => (
                <Draggable key={catelog?.catelogId} draggableId={catelog?.catelogId.toString()} index={id}>
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
                          src={`data:image/png;base64,${toBase64(catelog.img?.data)}`}
                          fill
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h1 className="font-md text-md min-h-16">{catelog.title}</h1>
                        <h3 className="text-gray-300 font-light text-xs">{catelog.createdAt}</h3>
                      </div>
                      <button onClick={() => handleDelete(catelog?.catelogId)}>
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

export default CatelogPosts
