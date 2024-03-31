'use client'

import React from 'react'

import { DragDropContext, Draggable } from '@hello-pangea/dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'

import { useRouter } from 'next/navigation'
import { Category, PageType } from '@/lib/types'

const CategoryDnd = ({
  pageId,
  isEditMode,
  onDeleteSubmit,
  onCategoryListDragEnd,
  categoryList,
  type,
}: {
  pageId: number
  isEditMode: boolean
  onDeleteSubmit: (id: number) => void
  onCategoryListDragEnd: (result: any) => void
  categoryList: Category[]
  type: PageType
}) => {
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
                  key={pageId.toString() + cate?.id.toString()}
                  draggableId={pageId.toString() + cate?.id.toString()}
                  index={id}
                >
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      className={`${
                        isEditMode ? 'm-2 rounded-md border' : 'border-t'
                      } flex h-24 items-center justify-between bg-white  p-2`}
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
                      {!isEditMode && (
                        <>
                          <button
                            className="mr-2 bg-gray-100 p-2 rounded-full border"
                            onClick={() =>
                              router.push(
                                `/admin/${type === 'battery' ? 'batteries' : 'hydrogens'}/${pageId}/${cate?.id}`,
                              )
                            }
                          >
                            <MdEdit size={24} color="#747474" />
                          </button>
                          <button
                            className=" bg-gray-100 p-2 rounded-full border"
                            onClick={() => onDeleteSubmit(cate?.id)}
                          >
                            <IoClose size={24} color="#747474" />
                          </button>
                        </>
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
