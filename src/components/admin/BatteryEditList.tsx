'use client'

import React, { useEffect, useState } from 'react'
import { handleBatteryListEdit } from '@/lib/action'
import { getErrorMessage, reorderPosts } from '@/lib/utils'
import CategoryDnd from './CategoryDnd'
import SubmitButton from './SubmitButton'
import { batteriesData_admin, hydrogensData_admin } from '@/lib/data'
import Link from 'next/link'
import { Category, PageType } from '@/lib/types'

const BatteryEditList = ({ datas, pageId, type }: { datas: any; pageId: number; type: PageType }) => {
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

  useEffect(() => {
    setTemp(categoryList)
  }, [isLoading])

  const onSubmit = async () => {
    setMessage('')
    const isConfirmed = window.confirm(`${batteriesData_admin[pageId].title} 리스트의 순서를 변경하시겠습니까?`)
    if (isConfirmed) {
      setIsLoading(true)
      try {
        const { success, message } = await handleBatteryListEdit(categoryList, pageId, false, type)
        setMessage(message)
        setIsEditMode(false)
      } catch (e) {
        console.log(getErrorMessage(e))
      } finally {
        setIsLoading(false)
      }
    }
  }
  const onDeleteSubmit = async (id: number) => {
    setMessage('')
    const isConfirmed = window.confirm(`정말로 해당 항목을 제거하시겠습니까?`)
    if (isConfirmed) {
      setIsLoading(true)
      try {
        const { success, message } = await handleBatteryListEdit(
          [...categoryList].filter((item) => item.id != id),
          pageId,
          true,
          type,
        )
        if (success) {
          setCategoryList([...categoryList].filter((item) => item.id != id))
          setIsEditMode(false)
        }
        setMessage(message)
      } catch (e) {
        console.log(getErrorMessage(e))
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col w-[min(90%,480px)] justify-between bg-white shadow-md border rounded-lg p-4 min-h-[520px] mb-2">
      <h1 className="text-xl font-bold text-center mb-4 text-gray-600">
        {type === 'battery' ? batteriesData_admin[pageId].title : hydrogensData_admin[pageId].title}
      </h1>
      <div className={`${isEditMode ? 'bg-gray-100' : 'bg-white'} rounded-lg flex-1`}>
        <CategoryDnd
          pageId={pageId}
          isEditMode={isEditMode}
          onDeleteSubmit={onDeleteSubmit}
          onCategoryListDragEnd={onCategoryListDragEnd}
          categoryList={categoryList}
          type={type}
        />
      </div>
      <h1 className="text-gray-400 text-sm px-2 mt-4">{message}</h1>
      <div className="p-2 flex justify-between items-center gap-4">
        <SubmitButton
          text={isEditMode ? '순서 저장' : '순서 변경'}
          isLoading={isLoading}
          isForSubmit={false}
          func={() => (isEditMode ? onSubmit() : setIsEditMode(true))}
          isActive={(temp !== categoryList || !isEditMode) && categoryList.length > 0}
        />
        {isEditMode && (
          <button className="p-2 font-medium text-gray-600 flex flex-1" onClick={() => setIsEditMode(false)}>
            변경 취소
          </button>
        )}
        <Link
          href={`/admin/${type === 'battery' ? 'batteries' : 'hydrogens'}/${pageId}`}
          className="p-4 rounded-lg border border-[#04BF7B] text-[#04BF7B]"
        >
          페이지 추가
        </Link>
      </div>
    </div>
  )
}

export default BatteryEditList
