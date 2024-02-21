'use client'

import React, { useEffect, useState } from 'react'

import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
const CategoryDnd = ({ onCategoryListDragEnd, categoryList, handleDelete }: any) => {
  return (
    <div className="w-full">
      <DragDropContext onDragEnd={onCategoryListDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {categoryList?.map((cate: any, id: number) => (
                <Draggable key={cate?.id} draggableId={cate?.id.toString()} index={id}>
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className="flex h-24 items-center justify-between bg-white border m-4 p-2 rounded-md"
                    >
                      <div className="relative w-24 h-full">
                        <Image alt="img" className="object-cover" src={cate.itemFile} fill />
                      </div>
                      <h1 className="truncate font-bold text-md ml-4 flex-1">{cate.title}</h1>
                      <button onClick={() => handleDelete(cate?.id, 'category')}>
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
  )
}

export default CategoryDnd
