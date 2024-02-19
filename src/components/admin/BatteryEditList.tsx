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
import { batteriesData_admin, postData_admin } from '@/lib/data'
import SubmitButton from './SubmitButton'
import { reorderPosts } from '@/lib/utils'

const BatteryEditList = ({ datas, postTypeID }: any) => {
  const [state, formAction] = useFormState(handleListEdit, undefined)
  const [img, setImg] = useState<File | null>(null)
  const [title, setTitle] = useState<string>('')
  const [tmpImg, setTmpImg] = useState<string | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temp, setTemp] = useState<any[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의
  const [posts, setPosts] = useState<any[]>(datas)

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

  const showImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tmpImg) {
      URL.revokeObjectURL(tmpImg)
    }
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImg(file)
      setTmpImg(URL.createObjectURL(file))
    }
  }
  return (
    <div className="flex flex-col w-[min(92%,640px)]">
      <div className="mx-8 bg-white rounded-lg">
        <div className="flex p-4 font-medium text-gray-600 bg-gray-100 m-4 rounded-md">
          <div className="flex flex-col w-40 ">
            <div className="h-32 relative flex border rounded-md mb-4">
              {tmpImg ? (
                <Image src={tmpImg} alt="tempImg" fill className="object-contain" />
              ) : (
                <div className="bg-gray-50 w-full h-full" />
              )}
            </div>
            <input required type="file" name="image" accept="image/*" onChange={showImage} />
          </div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <h1>{batteriesData_admin[postTypeID]?.title + ' 적용제품 제목'}</h1>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              className="text-gray-400 bg-gray-50 h-6 rounded-md mt-2 p-4 border mb-12"
            />
            <button
              className={`p-4 w-32 rounded-lg transition self-end font-bold
        ${!title.length || !img ? 'bg-gray-200 shadow-none text-gray-400' : 'bg-[#04BF7B] text-white shadow-md'}`}
              disabled={!title.length || !img}
              onClick={() => console.log(img, title, 'heelo')}
            >
              {isLoading ? (
                <div
                  className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                `추가하기`
              )}
            </button>
          </div>
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
                          className="flex h-24 items-center bg-white border m-4 p-2 rounded-md"
                        >
                          <div className="relative w-24 h-full">
                            <Image alt="img" className="object-cover" src={post.img} fill />
                          </div>
                          <h1 className="truncate font-bold text-md basis-1/4">{post.title}</h1>

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
          <input type="hidden" name="postType" value={batteriesData_admin[postTypeID]?.postType} />
          <input type="hidden" name="modifiedOrder" value={JSON.stringify(posts.map((item: any) => item.id))} />
          <SubmitButton isActive={temp === posts} />
        </form>
      </div>
      <h3 className="mx-8 my-2 text-green-800">{state?.message}</h3>
    </div>
  )
}

export default BatteryEditList
