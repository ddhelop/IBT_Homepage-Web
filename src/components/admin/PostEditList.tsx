'use client'

import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { DragDropContext, Draggable } from '@hello-pangea/dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { handleListEdit } from '@/lib/action'
import Link from 'next/link'
import { postData_admin } from '@/lib/data'
import { getErrorMessage, reorderPosts } from '@/lib/utils'
import SubmitButton from './SubmitButton'
import { useRouter } from 'next/navigation'

const PostEditList = ({ datas, postTypeID }: any) => {
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<any[]>(datas)
  const [temp, setTemp] = useState<any[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의

  const router = useRouter()
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
  const onSubmit = async () => {
    setMessage('')
    const isConfirmed = window.confirm(`${postData_admin[postTypeID].title} 리스트를 수정하시겠습니까?`)
    if (isConfirmed) {
      setIsLoading(true)
      try {
        const { success, message } = await handleListEdit(posts, postTypeID)
        setMessage(message)
      } catch (e) {
        setMessage(getErrorMessage(e))
      } finally {
        setIsLoading(false)
      }
    }
  }
  useEffect(() => {
    setTemp(posts)
  }, [isLoading])

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
                          <h1 className="truncate font-bold text-md basis-1/4">
                            {postTypeID === 0 ? post.title : post.title[0]}
                          </h1>

                          <div className="relative w-8 h-8">
                            {postTypeID !== 2 && <Image alt="img" className="object-cover" src={post.img} fill />}
                          </div>

                          <h3 className="text-gray-700 font-medium ml-4 basis-1/4">
                            {post.createdAt.substring(0, 10)}
                          </h3>
                          <h3 className="ml-4 basis-1/3 font-light w-32 truncate mr-4">{post.desc}</h3>
                          {postTypeID === 0 && (
                            <button className="mr-4" onClick={() => router.push(`/admin/news/edit/${post.id}`)}>
                              <MdEdit size={24} color="#747474" />
                            </button>
                          )}
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
      <div className="flex mx-8 mt-4">
        <SubmitButton
          text="수정 완료"
          isLoading={isLoading}
          isForSubmit={false}
          func={() => onSubmit()}
          isActive={temp !== posts}
        />
        <h1 className="text-gray-600 text-sm px-6 mt-4">{message}</h1>
      </div>
      <Link
        href={postData_admin[postTypeID].href}
        className="fixed bottom-12 right-12 p-4 rounded-full
       bg-[#04BF7B] text-white shadow-lg"
      >
        <FaPlus size={40} />
      </Link>
    </div>
  )
}

export default PostEditList
