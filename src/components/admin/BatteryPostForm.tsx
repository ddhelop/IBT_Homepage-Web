'use client'
import { createBatteryPage } from '@/lib/action'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import AddButton from './SubmitButton'
import { batteriesData_admin } from '@/lib/data'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import { reorderPosts } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'
import { useFormState } from 'react-dom'

type PostFormProp = {
  batteryId: number
}
export type Product = {
  id: number
  name: string
  img: File
}
const BatteryPostForm = ({ batteryId }: PostFormProp) => {
  const [error, setError] = useState<string | null>(null)
  const [productList, setProductList] = useState<Product[]>([])

  const [cateTmpUrl, setCateTmpUrl] = useState<string | null>(null)
  const [prodTmpUrl, setProdTmpUrl] = useState<string | null>(null)

  //cateImg는 form 제출시에 serverAction으로 보낼때 빼고는 데이터 전송이 없으므로 별도로 useState로 저장할 필요없음 -> 이미 input에 담겨있음
  //허나 prodImg는 별개의 함수로 배열에 추가되는 로직이 있기에 useState에 담고 있어야함.
  const [prodImg, setProdImg] = useState<File | null>(null)

  const [prodName, setProdName] = useState<string>('')
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
    console.log('새로운 ProductList:', [...productList, { id: newId, name: prodName, img: prodImg }])
    setProdName('')
    setProdTmpUrl(null)
    setProdImg(null)
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //브라우저의 기본 액션인 Post, Get 액션을 막아 재로드 되는 것을 방지
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget) //새로운 FormData 생성
      const { title, itemTitle, itemAdvanced, cateImg } = Object.fromEntries(formData)
      if (!cateImg) {
        setError('이미지 파일을 추가하지 않았습니다.')
        return false
      }
      if (!productList.length) {
        setError('적용제품을 최소 1개 추가해야합니다.')
        return false
      }
      if (!title || !itemTitle || !itemAdvanced) {
        setError('내용이 모두 입력되지 않았습니다.')
        return false
      }
      formData.append('batteryId', batteryId.toString())
      formData.append('cateImg', cateImg)
      for (let i = 0; i < productList.length; i++) {
        formData.append('productName', productList[i].name)
        formData.append('productImg', productList[i].img)
      }

      /////////const res = await fetch('/api/admin', { method: 'POST', body: formData, cache: 'no-store' }) //fetch request 실행 -> body를 Formdata로 지정해놓으면, multi-part contentType, handler등의 설정을 다 해줌
      const { success, message } = await createBatteryPage(formData)

      if (!success) {
        setError(message)
      }
      console.log(message)
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsLoading(false)
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
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold bg-white p-8">
        {batteriesData_admin[batteryId].title + ' 페이지의 중분류 추가'}
      </h1>
      <form className="m-8 p-8 bg-white rounded-lg flex-col" onSubmit={onSubmit}>
        <div className="2xl:flex">
          <div className="flex-1 text-gray-700 font-bold">
            <h2 className="mb-2">{`중분류 제목 (ex:항공,육상)`}</h2>
            <input required type="text" name="title" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />
            <h2 className="mb-2">이미지</h2>
            <div className="flex mb-4">
              <div className="h-40 w-64 relative flex border rounded-md ">
                {cateTmpUrl ? (
                  <Image src={cateTmpUrl} alt="tempImg" fill className="object-contain" />
                ) : (
                  <div className="bg-gray-50 w-full h-full" />
                )}
              </div>
              <input
                required
                type="file"
                name="cateImg"
                accept="image/*"
                className="bg-gray-100 rounded-md p-4 ml-4"
                onChange={(e) => showImage(e, 'catelog')}
              />
            </div>
            <h2 className="mb-2">{`배터리명 (ex:Ni-cd battery Sintered Type)`}</h2>
            <input required type="text" name="itemTitle" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />
            <h2 className="mb-2">{`배터리 부제목(필수아님)`}</h2>
            <input type="text" name="itemSubtitle" className="bg-gray-100 rounded-md py-2 px-3 w-full mb-4" />

            <h2 className="mb-2">배터리 설명 / 내용 형식 미리보기:</h2>
            <div className="flex">
              <textarea
                name="itemAdvanced"
                onChange={(e) => setDesc(e.target.value)}
                className="bg-gray-100 rounded-md py-2 px-3 mb-8 basis-1/2"
                rows={5}
                cols={33}
              />
              <div className="text-center whitespace-pre-line basis-1/2">{desc}</div>
            </div>
          </div>
          <div className="border m-4"></div>
          <div className="flex-col flex-2 rounded-md ">
            <div className="flex p-4 text-gray-600 bg-gray-100 m-4 rounded-md">
              <div className="h-32 w-40 relative flex border rounded-md">
                {prodTmpUrl && <Image src={prodTmpUrl} alt="tempImg" fill className="object-contain" />}
              </div>
              <div className="flex flex-col ml-4 justify-between">
                <input
                  value={prodName}
                  onChange={(e) => setProdName(e.target.value)}
                  placeholder="적용제품명"
                  type="text"
                  className=" text-gray-400 bg-gray-50 h-6 rounded-md px-2 py-4 border"
                />
                <input type="file" required accept="image/*" onChange={(e) => showImage(e, 'product')} />
                <AddButton
                  isForSubmit={false}
                  isActive={prodTmpUrl != null && prodName.length > 0}
                  func={() => addProduct()}
                  isLoading={isLoading}
                />
              </div>
            </div>
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
                            className="flex px-4 h-12 items-center bg-white border-t"
                          >
                            <h1 className="truncate font-bold text-md basis-1/4">{prod.name}</h1>

                            <div className="relative w-8 h-8">
                              <Image alt="img" className="object-cover" src={URL.createObjectURL(prod.img)} fill />
                            </div>

                            <h3 className="ml-4 basis-1/2 font-light w-48 truncate">{prod.name}</h3>

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
        <AddButton isForSubmit={true} isActive={true} isLoading={isLoading} />
      </form>
    </div>
  )
}

export default BatteryPostForm
