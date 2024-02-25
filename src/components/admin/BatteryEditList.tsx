'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { handleBatteryListEdit } from '@/lib/action'

import { getErrorMessage, reorderPosts } from '@/lib/utils'
import CategoryDnd from './CategoryDnd'
import AddButton from './SubmitButton'
import { batteriesData_admin } from '@/lib/data'
import { FaPlus } from 'react-icons/fa6'
import Link from 'next/link'
import { Category } from '@/lib/types'

const BatteryEditList = ({ datas, batteryId }: any) => {
  const [categoryList, setCategoryList] = useState<Category[]>(datas.data)
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temp, setTemp] = useState<Category[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의

  const onCategoryListDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    if (source.index !== destination.index) {
      const tmpList = reorderPosts(categoryList, source.index, destination.index)
      setCategoryList(tmpList)
    }
  }
  const handleDelete = (id: number) => {
    const tmpArr = [...categoryList]
    setCategoryList(tmpArr.filter((item) => item.id != id))
  }
  useEffect(() => {
    setTemp(categoryList)
  }, [isLoading])

  const onSubmit = async () => {
    setMessage('')
    const isConfirmed = window.confirm(`${batteriesData_admin[batteryId].title} 리스트를 수정하시겠습니까?`)
    if (isConfirmed) {
      setIsLoading(true)
      try {
        const { success, message } = await handleBatteryListEdit(categoryList, batteryId)
        setMessage(message)
      } catch (e) {
        console.log(getErrorMessage(e))
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col w-[640px] bg-gray-50 rounded-lg">
      <CategoryDnd
        datas={datas}
        onCategoryListDragEnd={onCategoryListDragEnd}
        categoryList={categoryList}
        handleDelete={handleDelete}
      />
      <h1 className="text-gray-600 text-sm px-6 mt-4">{message}</h1>
      <div className="p-4 flex items-center gap-8">
        <AddButton
          text="순서 변경하기"
          isLoading={isLoading}
          isForSubmit={false}
          func={() => onSubmit()}
          isActive={temp !== categoryList}
        />
        <Link
          href={`/admin/batteries/${batteryId}`}
          className=" p-2 rounded-full
       bg-[#04BF7B] text-white shadow-lg"
        >
          <FaPlus size={32} />
        </Link>
      </div>
    </div>
  )
}

export default BatteryEditList
