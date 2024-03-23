'use client'
import { createOthersPage } from '@/lib/action'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef, useState } from 'react'
import SubmitButton from './SubmitButton'
import { DragDropContext, Draggable } from '@hello-pangea/dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import { reorderPosts } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'
import { getSignedFileUrl } from '@/lib/awsUtils'

export type Product = {
  id: number
  name: string[]
  img: File
}

const OthersBatteryPostForm = ({ prevData, type }: { prevData: any; type: 'battery' | 'hydrogen' }) => {
  const [error, setError] = useState<string | null>(null)
  const [productList, setProductList] = useState<Product[]>([])

  const [prodImg, setProdImg] = useState<File | null>(null)
  const [prodName, setProdName] = useState<string[]>(['', ''])

  const [prodTmpUrl, setProdTmpUrl] = useState<string | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  //cateImg는 form 제출시에 serverAction으로 보낼때 빼고는 데이터 전송이 없으므로 별도로 useState로 저장할 필요없음 -> 이미 input에 담겨있음
  //허나 prodImg는 별개의 함수로 배열에 추가되는 로직이 있기에 useState에 담고 있어야함.

  const router = useRouter()
  const showImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (prodTmpUrl) {
      URL.revokeObjectURL(prodTmpUrl)
    }
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0]
      setProdImg(file)
      setProdTmpUrl(URL.createObjectURL(file))
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

      let presignedPromises: Promise<string>[] = []
      if (productList.length) {
        productList.forEach((item, id) => {
          formData.append('productName_kr', item.name[0])
          formData.append('productName_en', item.name[1])
          if (typeof item.img !== 'string') {
            presignedPromises.push(
              getSignedFileUrl({
                name: `${type}/others/${id.toString() + title_en}/${item.name + keyString}`,
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
      const { success, message } = await createOthersPage(formData, type)
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
    setIsLoading(true)
    prevData && setProductList(prevData.products)
    setIsLoading(false)
  }, [])

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold bg-white p-8">
        {type === 'battery' ? '배터리' : '수소'} 기타 페이지의 중분류 추가
      </h1>
      <form className="m-8 p-4 bg-white rounded-lg flex-col" onSubmit={onSubmit}>
        <div className="flex-col flex-2 rounded-md ">
          <div className="flex p-2 bg-gray-100  rounded-md">
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
              <input type="file" accept="image/*" onChange={(e) => showImage(e)} />
              <SubmitButton
                text="제품 추가"
                isForSubmit={false}
                isActive={prodTmpUrl != null && prodName[0].length > 0}
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

        <h1 className="text-red-400 mb-2">{error}</h1>
        <SubmitButton text="완료" isForSubmit={true} isActive={productList.length > 0} isLoading={isLoading} />
      </form>
    </div>
  )
}

export default OthersBatteryPostForm
