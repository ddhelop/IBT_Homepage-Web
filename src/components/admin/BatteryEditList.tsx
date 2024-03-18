'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { handleBatteryListEdit } from '@/lib/action'

import { getErrorMessage, reorderPosts } from '@/lib/utils'
import CategoryDnd from './CategoryDnd'
import SubmitButton from './SubmitButton'
import { batteriesData_admin } from '@/lib/data'
import { FaPlus } from 'react-icons/fa6'
import Link from 'next/link'
import { Category } from '@/lib/types'

const BatteryEditList = ({ datas, batteryId }: any) => {
  const [categoryList, setCategoryList] = useState<Category[]>(datas.data)
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temp, setTemp] = useState<Category[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const onCategoryListDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    if (source.index !== destination.index) {
      const tmpList = reorderPosts(categoryList, source.index, destination.index)
      setCategoryList(tmpList)
    }
  }
  const toggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false)
    } else {
      setIsEditMode(true)
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
    console.log('onSubmit')
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
    <div className="flex flex-col w-[640px] justify-between bg-white shadow-md border rounded-lg p-4 min-h-[480px] mb-2">
      <h1 className="text-xl font-bold text-center mb-4 text-gray-600">
        {batteriesData_admin[batteryId].title + '페이지 리스트'}
      </h1>
      <div className="bg-gray-100 rounded-lg flex-1">
        <CategoryDnd
          batteryId={batteryId}
          isEditMode={isEditMode}
          onCategoryListDragEnd={onCategoryListDragEnd}
          categoryList={categoryList}
          handleDelete={handleDelete}
        />
      </div>
      <h1 className="text-gray-600 text-sm px-6 mt-4">{message}</h1>
      <div className="p-4 flex items-center gap-4">
        <SubmitButton
          text={isEditMode ? '수정 완료' : '수정 하기'}
          isLoading={isLoading}
          isForSubmit={false}
          func={isEditMode ? onSubmit : toggleEditMode}
          isActive={temp !== categoryList || !isEditMode}
        />
        <Link
          href={`/admin/batteries/${batteryId}`}
          className="p-4 rounded-lg border
       border-[#04BF7B] text-[#04BF7B]"
        >
          {batteriesData_admin[batteryId].title + ` 페이지 추가하기`}
        </Link>
      </div>
    </div>
  )
}

export default BatteryEditList
