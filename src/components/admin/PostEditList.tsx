'use client'

import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { handleListEdit } from '@/lib/action'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { postData_admin } from '@/lib/data'
import { reorderPosts } from '@/lib/utils'
import { SubmitButton } from './SubmitButton'

const PostEditList = ({ datas, postTypeID }: any) => {
  const [state, formAction] = useFormState(handleListEdit, undefined)

  const [temp, setTemp] = useState<any[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의
  const [posts, setPosts] = useState<any[]>(datas)
  console.log(datas)
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newPosts = reorderPosts(posts, source.index, destination.index)
    setPosts(newPosts)
  }
  const handleDelete = (id: number) => {
    const tempposts = Array.from(posts)
    setPosts(tempposts.filter((item) => item.id != id))
  }
  useEffect(() => {
    setTemp(posts)
  }, [state])
  return (
    <div className="flex flex-col">
      <div className="mx-8 pb-2 bg-white rounded-lg">
        <div className="flex p-4 font-medium text-gray-400">
          <h3 className="basis-1/4">{postData_admin[postTypeID].name} 제목</h3>
          <h3 className="basis-1/4 ml-8">생성된 날짜</h3>
          <h3 className="basis-1/2">내용</h3>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId="droppable">
            {(droppableProvided) => (
              <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                {datas.length ? (
                  posts?.map((post: any, id: number) => (
                    <Draggable key={post?.id} draggableId={post?.id.toString()} index={id}>
                      {(draggableProvided) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          className="flex px-4 h-12 items-center bg-white border-t"
                        >
                          <h1 className="truncate font-bold text-md basis-1/4">{post.title}</h1>

                          <div className="relative w-8 h-8">
                            {postTypeID !== 2 && <Image alt="img" className="object-cover" src={post.img} fill />}
                          </div>

                          <h3 className="text-gray-700 font-medium ml-4 basis-1/4">
                            {post.createdAt.substring(0, 10)}
                          </h3>

                          <h3 className="ml-4 basis-1/2 font-light w-48 truncate">{post.desc}</h3>

                          <button onClick={() => handleDelete(post?.id)}>
                            <IoIosClose size={32} color="#747474" />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div className="w-full h-40 flex items-center justify-center">
                    <h1 className="text-gray-300">게시글이 존재하지 않습니다.</h1>
                  </div>
                )}
                {droppableProvided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
      <div className="flex flex-1 justify-between mx-8 mt-8">
        <form action={formAction}>
          <input type="hidden" name="postType" value={postData_admin[postTypeID].postType} />
          <input type="hidden" name="modifiedOrder" value={JSON.stringify(posts.map((item: any) => item.id))} />
          <SubmitButton isActive={temp === posts} />
        </form>
      </div>
      <h3 className="mx-8 my-2 text-green-800">{state?.message}</h3>
      <Link
        href={postData_admin[postTypeID].href}
        className=" absolute bottom-12 right-12 p-4 rounded-full
       bg-[#04BF7B] text-white shadow-lg"
      >
        <FaPlus size={40} />
      </Link>
    </div>
  )
}

export default PostEditList
