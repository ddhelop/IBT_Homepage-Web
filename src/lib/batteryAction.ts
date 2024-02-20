import { batteriesData_admin } from './data'
import { BatteryPage } from './models'
import { connectToDb, getErrorMessage, getSignedFileUrl } from './utils'

export const fetchPageData = async (id: number) => {
  try {
    connectToDb()
    const batteryPageData = await BatteryPage.findOne({ id })
    return batteryPageData
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data!')
  }
}
export const createBatteryPage = async (formData: FormData) => {
  const { title, itemTitle, itemSubtitle, itemAdvanced, batteryId } = Object.fromEntries(formData)
  const cateImg: File = formData.get('cateImg') as unknown as File //이미지 데이터
  const productImgs: File[] = formData.getAll('productImg') as unknown as File[] //항공 ...
  const productNames: string[] | null = formData.getAll('productName') as unknown as string[] //항공 ...

  let imgUrls: string[] = []
  let signedUrl_cateImg, signedUrl_prodImg
  try {
    if (!cateImg) return { success: false, message: '이미지 파일을 찾을 수 없습니다' }
    signedUrl_cateImg = await getSignedFileUrl({
      name: `batteries/${batteriesData_admin[parseInt(batteryId as string)].title}/${title}-category.png`,
      type: cateImg.type,
    })
    const uploadImg = await fetch(signedUrl_cateImg, {
      method: 'PUT',
      body: cateImg,
      headers: { 'Content-type': cateImg.type },
    })
    if (uploadImg.status != 200) {
      return { succes: false, message: '대표 이미지를 저장하는 데에 실패했습니다.' }
    }

    for (let i = 0; i < productImgs.length; i++) {
      signedUrl_prodImg = await getSignedFileUrl({
        name: `batteries/${batteriesData_admin[parseInt(batteryId as string)].title}/${title}/${productNames[i]}`,
        type: productImgs[i].type,
      })
      const uploadImg = await fetch(signedUrl_prodImg, {
        method: 'PUT',
        body: productImgs[i],
        headers: { 'Content-type': productImgs[i].type },
      })
      if (uploadImg.status != 200) {
        return { succes: false, message: '적용제품들의 이미지를 저장하는 데에 실패했습니다.' }
      } else {
        imgUrls.push(signedUrl_prodImg.split('?')[0])
      }
    }
    const products: { id: number; name: string; img: string }[] = productImgs.map(function (img: File, id: number) {
      return { id, name: productNames[id], img: imgUrls[id] }
    })

    connectToDb() //MongoDB에 연결
    if (!signedUrl_cateImg || !signedUrl_prodImg) {
      return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
    }
    const data = {
      title,
      itemFile: signedUrl_cateImg.split('?')[0],
      itemTitle,
      itemSubtitle: itemSubtitle ? itemSubtitle : ' ',
      itemAdvanced,
      products,
    }

    const res = await BatteryPage.updateOne({ id: parseInt(batteryId as string) }, { data })

    console.log(batteriesData_admin[parseInt(batteryId as string)], 'BatteryPage successfully updated! response:', res)
    return { success: true, message: 'createBatteryPage success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}
