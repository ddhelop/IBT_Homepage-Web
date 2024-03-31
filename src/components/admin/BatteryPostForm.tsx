'use client'

import { createPage } from '@/lib/action'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef, useState } from 'react'
import SubmitButton from './SubmitButton'
import { batteriesData_admin, hydrogensData_admin } from '@/lib/data'
import { DragDropContext, Draggable } from '@hello-pangea/dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import { reorderPosts } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'
import { getSignedFileUrl } from '@/lib/awsUtils'
import { PageType } from '@/lib/types'

type PostFormProp = {
  pageId: number[]
  prevData?: any
  type: PageType
}
export type Product = {
  id: number
  name: string[]
  img: File
}

//pageId =[ 중분류 id(0,1,2,3), data.id(고유값)]
const BatteryPostForm = ({ pageId, prevData, type }: PostFormProp) => {
  const [error, setError] = useState<string | null>(null)
  const [productList, setProductList] = useState<Product[]>([])

  const [cateTmpUrl, setCateTmpUrl] = useState<string | null>(null)
  const [prodTmpUrl, setProdTmpUrl] = useState<string | null>(null)

  //cateImg는 form 제출시에 serverAction으로 보낼때 빼고는 데이터 전송이 없으므로 별도로 useState로 저장할 필요없음 -> 이미 input에 담겨있음
  //허나 prodImg는 별개의 함수로 배열에 추가되는 로직이 있기에 useState에 담고 있어야함.
  const [cateImg, setCateImg] = useState<File | null>(null)
  const [prodImg, setProdImg] = useState<File | null>(null)

  const fileRef = useRef<HTMLInputElement>(null)

  const [prodName, setProdName] = useState<string[]>(['', ''])
  const [desc, setDesc] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const showImage = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'catelog') => {
    if (cateTmpUrl) {
      URL.revokeObjectURL(cateTmpUrl)
    }
    if (prodTmpUrl) {
      URL.revokeObjectURL(prodTmpUrl)
    }
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0]
      if (type == 'catelog') {
        setCateImg(file)
        setCateTmpUrl(URL.createObjectURL(file))
      } else {
        setProdImg(file)
        setProdTmpUrl(URL.createObjectURL(file))
      }
    }
  }
  const addProduct = () => {
    if (!prodImg) {
      setError('적용제품사진이 등록되지 않았습니다')
      return
    }
    const newId = productList.length ? Math.max(...productList.map((item) => item.id)) + 1 : 0
    setProductList([...productList, { id: newId, name: prodName, img: prodImg }])
    setProdName(['', ''])
    setProdTmpUrl(null)
    setProdImg(null)
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지

    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { title_en } = Object.fromEntries(formData)
      const keyString = Math.random().toString(36).substring(0, 4)

      formData.append('pageId', pageId[0].toString())

      //이번에 새로 추가하는 상황이면, prevData가 없을 것 -> presignedURL을 채집하여 이를 ?까지만 자른 후 formData에 추가
      if (!cateImg) {
        setError('대표 이미지를 선택해주세요.')
        setIsLoading(false)
        return false
      } else if (typeof cateImg !== 'string') {
        let preImg_cate = await getSignedFileUrl({
          name: `${type}/${
            type === 'battery' ? batteriesData_admin[pageId[0]].title : hydrogensData_admin[pageId[0]].title
          }/${title_en + keyString}-category.png`,
          type: cateImg.type,
        })
        await fetch(preImg_cate, { method: 'PUT', body: cateImg, headers: { 'Content-type': cateImg.type } })
        formData.append('cateImg', preImg_cate.split('?')[0])
        //기존 데이터를 수정하는 경우이면, prevData가 있을 것 -> 가공된 기존정보를 그대로 formData에 추가
      } else {
        let preImg_cate = prevData.itemFile
        formData.append('cateImg', preImg_cate)
      }
      if (prevData) formData.append('editSectionId', pageId[1].toString())

      let presignedPromises: Promise<string>[] = []
      if (productList.length) {
        productList.forEach((item) => {
          formData.append('productName_kr', item.name[0])
          formData.append('productName_en', item.name[1])
          if (typeof item.img !== 'string') {
            presignedPromises.push(
              getSignedFileUrl({
                name: `${type}/${
                  type === 'battery' ? batteriesData_admin[pageId[0]].title : hydrogensData_admin[pageId[0]].title
                }/${title_en}/${item.name + keyString}`,
                type: item.img.type,
              }),
            )
          } else {
            presignedPromises.push(item.img)
          }
        })
        //기존 데이터가 존재한다면, presignedPromises 배열이 초기값인 빈 배열이기에, 별도로 Promise가 수행되지 않을 것.

        const productImg = await Promise.all(presignedPromises)
        let uploadPromises: Promise<any>[] = []
        productList.forEach((item, id) => {
          //이미 기존에 있어 presignedURL로 img에 저장되어있는 경우
          if (typeof item.img === 'string') {
            formData.append('productImg', item.img)
          } else {
            //수정하는 과정에서 새로운 적용제품 사진을 추가하는 경우
            formData.append('productImg', productImg[id].split('?')[0] as string)
            uploadPromises.push(
              // prettier-ignore
              fetch(productImg[id].split('?')[0] as string, { method: 'PUT', body: item.img, headers: { 'Content-type': item.img.type }}),
            )
          }
        })
        //기존 데이터가 존재한다면, uploadPromises 배열이 초기값인 빈 배열이기에, 별도로 Promise가 수행되지 않을 것.
        await Promise.all(uploadPromises)
      }
      const { success, message } = await createPage(formData, type)
      if (!success) {
        setError(message)
        setIsLoading(false)
      } else {
        setIsLoading(false)
        router.push(type === 'battery' ? '/admin/batteries' : '/admin/hydrogens')
        console.log(message)
      }
    } catch (e: any) {
      console.log(e)
    }
  }
  const handleDelete = (id: number) => {
    setProductList([...productList].filter((item) => item.id != id))
  }
  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) return
    const newOrderList = reorderPosts(productList, source.index, destination.index)
    setProductList(newOrderList)
  }

  useEffect(() => {
    if (prevData) {
      let inputs = document.getElementsByTagName('input')
      let textareas = document.getElementsByTagName('textarea')

      inputs[0].value = prevData.title[0]
      inputs[1].value = prevData.title[1]
      inputs[2].value = prevData.itemTitle[0]
      inputs[3].value = prevData.itemTitle[1]
      inputs[4].value = prevData.itemSubtitle[0]
      inputs[5].value = prevData.itemSubtitle[1]
      textareas[0].value = prevData.itemAdvanced[0]
      textareas[1].value = prevData.itemAdvanced[1]
      setCateTmpUrl(prevData.itemFile)
      setCateImg(prevData.itemFile)
      setProductList(prevData.products)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold bg-white p-8">
        {type === 'battery'
          ? batteriesData_admin[pageId[0]].title
          : hydrogensData_admin[pageId[0]].title + ' 페이지의 중분류 추가'}
      </h1>
      <form className="m-8 p-8 bg-white rounded-lg flex-col" onSubmit={onSubmit}>
        <div className="2xl:flex">
          <div className="flex-1 text-gray-700 font-bold">
            <div className="flex justify-between gap-8">
              <div className="flex flex-1 flex-col">
                <h2 className="mb-2">
                  <span className="text-red-400">*</span>
                  {`중분류 제목 (ex:항공,육상)`}
                </h2>
                <div className="flex gap-4">
                  <input
                    required
                    type="text"
                    id="title_kr"
                    name="title_kr"
                    placeholder={'한글'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                  <input
                    required
                    type="text"
                    id="title_en"
                    name="title_en"
                    placeholder={'영문'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                </div>
                <h2 className="mb-2">{`제목 (ex:Ni-cd battery Sintered Type)`}</h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="itemTitle_kr"
                    name="itemTitle_kr"
                    placeholder={'한글'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                  <input
                    type="text"
                    id="itemTitle_en"
                    name="itemTitle_en"
                    placeholder={'영문'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                </div>

                <h2 className="mb-2">부제목</h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="itemSubtitle_kr"
                    name="itemSubtitle_kr"
                    placeholder={'한글'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                  <input
                    type="text"
                    id="itemSubtitle_en"
                    name="itemSubtitle_en"
                    placeholder={'영문'}
                    className="bg-gray-100 rounded-md py-2 px-3 font-medium w-full mb-4"
                  />
                </div>
                <h2 className="mb-2">
                  <span className="text-red-400">*</span>설명
                </h2>
                <div className="flex gap-4">
                  <textarea
                    required
                    id="itemAdvanced_kr"
                    name="itemAdvanced_kr"
                    placeholder={'한글'}
                    onChange={(e) => setDesc(e.target.value)}
                    className="bg-gray-100 font-medium rounded-md py-2 px-3 mb-8"
                    rows={5}
                    cols={33}
                  />
                  <textarea
                    required
                    id="itemAdvanced_en"
                    name="itemAdvanced_en"
                    placeholder={'영문'}
                    onChange={(e) => setDesc(e.target.value)}
                    className="bg-gray-100 font-medium rounded-md py-2 px-3 mb-8"
                    rows={5}
                    cols={33}
                  />
                </div>
              </div>
              <div className="flex flex-2 flex-col">
                <h2 className="mb-2">
                  <span className="text-red-400">*</span>이미지
                </h2>
                <div className="h-64 w-80 relative flex border rounded-md mb-2">
                  {cateTmpUrl ? (
                    <Image src={cateTmpUrl} alt="tempImg" fill className="object-contain" />
                  ) : (
                    <div className="bg-gray-50 w-full h-full" />
                  )}
                </div>
                <label htmlFor="file">
                  <button
                    type="button"
                    onClick={() => fileRef?.current?.click()}
                    className="rounded-md text-gray-700 p-2 border border-green-700"
                  >
                    파일 업로드하기
                  </button>
                </label>
                <input
                  id="cateImg"
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => showImage(e, 'catelog')}
                />
              </div>
            </div>
          </div>
          <div className="border m-4"></div>
          <div className="flex-col flex-2 rounded-md ">
            <div className="flex p-4 bg-gray-100 m-4 rounded-md">
              <div className="h-32 w-40 relative flex border rounded-md">
                {prodTmpUrl && <Image src={prodTmpUrl} alt="tempImg" fill className="object-contain" />}
              </div>
              <div className="flex flex-col ml-4 justify-between">
                <input
                  value={prodName[0]}
                  onChange={(e) => {
                    let tmp = [...prodName]
                    tmp[0] = e.target.value
                    setProdName(tmp)
                  }}
                  placeholder="적용제품명 한글"
                  type="text"
                  className="bg-gray-50 h-6 rounded-md px-2 py-4 border"
                />
                <input
                  value={prodName[1]}
                  onChange={(e) => {
                    let tmp = [...prodName]
                    tmp[1] = e.target.value
                    setProdName(tmp)
                  }}
                  placeholder="적용제품명 영문"
                  type="text"
                  className="bg-gray-50 h-6 rounded-md px-2 py-4 border"
                />
                <input type="file" accept="image/*" onChange={(e) => showImage(e, 'product')} />
                <SubmitButton
                  text="제품 추가"
                  isForSubmit={false}
                  isActive={prodTmpUrl != null}
                  func={() => addProduct()}
                />
              </div>
            </div>
            <h1 className="ml-4 text-gray-400 font-regular mb-2">{productList.length}개의 적용제품 등록됨</h1>
            <DragDropContext onDragEnd={onDragEnd}>
              <StrictModeDroppable droppableId="droppable">
                {(droppableProvided) => (
                  <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                    {productList?.map((prod: any, id: number) => (
                      <Draggable key={prod?.id} draggableId={prod?.id.toString()} index={id}>
                        {(draggableProvided) => (
                          <div
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                            className="flex items-center p-2 bg-white border mx-4 mb-2 rounded-md"
                          >
                            <div className="relative w-20 aspect-square border">
                              <Image
                                alt="img"
                                className="object-cover"
                                src={typeof prod.img === 'string' ? prod.img : URL.createObjectURL(prod.img)}
                                fill
                              />
                            </div>
                            <div className="flex-1 ml-4">
                              <h1 className="truncate font-medium text-lg">{prod.name[0]}</h1>
                              <h1 className="truncate font-medium text-lg">{prod.name[1]}</h1>
                            </div>
                            <button onClick={() => handleDelete(prod?.id)}>
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
        </div>
        <h1 className="text-red-400 mb-2">{error}</h1>
        <SubmitButton text="완료" isForSubmit={true} isActive={true} isLoading={isLoading} />
      </form>
    </div>
  )
}

export default BatteryPostForm
