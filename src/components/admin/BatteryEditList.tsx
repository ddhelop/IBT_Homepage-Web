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
import CategoryDnd from './CategoryDnd'
import AddButton from './SubmitButton'

type Category = {
  id: number
  title: string
  itemFile: string
  itemTitle: string
  itemSubtitle: string | null
  itemAdvanced: string[]
  products: Product[]
}
type Product = {
  name: string
  img: string
}
const BatteryEditList = ({ datas, postTypeID }: any) => {
  const [state, formAction] = useFormState(handleListEdit, undefined)
  const [img, setImg] = useState<File | null>(null)
  const [title, setTitle] = useState<string>('')
  const [tmpImg, setTmpImg] = useState<string | null>(null)
  console.log(datas)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temp, setTemp] = useState<Category[]>(datas) //버튼의 활성화 기준을 정의하는데에 필요한 비교대상 정의
  const [categoryList, setCateogoryList] = useState<Category[]>(datas)
  const [productList, setProductList] = useState<Product[]>(datas)

  const onCategoryListDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newOrderList = reorderPosts(categoryList, source.index, destination.index)
    setCateogoryList(newOrderList)
  }
  const onProductListDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newOrderList = reorderPosts(productList, source.index, destination.index)
    setProductList(newOrderList)
  }
  const handleInputChange = (type: string, value: string) => {}

  const handleDelete = (title: string, type: 'category' | 'product') => {
    if (type == 'category') {
      const tmpArr = [...categoryList]
      setCateogoryList(tmpArr.filter((item) => item.title != title))
    } else {
      const tmpArr = [...productList]
      setProductList(tmpArr.filter((item) => item.name != title))
    }
  }
  //   useEffect(() => {
  //     setTemp(posts)
  //   }, [state])

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
    <div className="flex flex-col w-[min(92%,720px)">
      <div className="bg-white rounded-lg">
        <div className="flex p-4 text-gray-600 bg-gray-100 m-4 rounded-md">
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
            <h1>종분류 항목 추가</h1>
            <input
              required
              value={title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              type="text"
              name="title"
              className="text-gray-400 bg-gray-50 h-6 rounded-md mt-2 p-4 border mb-12"
            />
            <input
              required
              value={title}
              onChange={(e) => handleInputChange('itemTitle', e.target.value)}
              type="text"
              name="title"
              className="text-gray-400 bg-gray-50 h-6 rounded-md mt-2 p-4 border mb-12"
            />
            {/* <AddButton isActive={!title.length || !img} func={() => console.log('hello')} isLoading={isLoading} /> */}
          </div>
        </div>
      </div>
      <CategoryDnd
        datas={datas}
        onCategoryListDragEnd={onCategoryListDragEnd}
        categoryList={categoryList}
        handleDelete={handleDelete}
      />
      <h3 className="mx-8 my-2 text-green-800">{state?.message}</h3>
    </div>
  )
}

export default BatteryEditList
