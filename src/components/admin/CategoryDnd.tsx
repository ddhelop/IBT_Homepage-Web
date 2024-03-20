'use client'

import React from 'react'

import { DragDropContext, Draggable } from '@hello-pangea/dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { useRouter } from 'next/navigation'

const CategoryDnd = ({ onCategoryListDragEnd, categoryList, handleDelete, isEditMode, batteryId }: any) => {
  const router = useRouter()

  return (
    <div className="w-full">
      <DragDropContext onDragEnd={onCategoryListDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(droppableProvided) => (
            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {categoryList?.map((cate: any, id: number) => (
                <Draggable
                  isDragDisabled={!isEditMode}
                  key={batteryId.toString() + cate?.id.toString()}
                  draggableId={batteryId.toString() + cate?.id.toString()}
                  index={id}
                >
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className="flex h-24 items-center justify-between bg-white border m-4 p-2 rounded-md"
                    >
                      <div className="relative w-24 h-full">
                        <Image alt="img" className="object-cover border rounded-sm" src={cate.itemFile} fill />
                      </div>
                      <div className="ml-4 flex-1">
                        <h1 className="truncate font-bold text-md">{cate.title[0]}</h1>
                        <h1 className="truncate font-regular text-gray-500 text-sm">
                          <span className="font-bold mr-1 text-gray-700">{cate.products.length}</span>개의 적용제품
                        </h1>
                      </div>
                      {isEditMode ? (
                        <button onClick={() => handleDelete(cate?.id, 'category')}>
                          <IoIosClose size={40} color="#747474" />
                        </button>
                      ) : (
                        <button onClick={() => router.push(`/admin/batteries/${batteryId}/${cate?.id}`)}>
                          <IoIosClose size={40} color="#747474" />
                        </button>
                      )}
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
