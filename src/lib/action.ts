'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { BatteryPage, Catelog, ESGPdf, Order, Post } from './models'
import { connectToDb, getErrorMessage, getId, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'
import { S3BucketUrl, batteriesData_admin } from './data'
import { deleteS3Object, getSignedFileUrl } from './awsUtils'
import { Category } from './types'

export const compare = async (username: string, password: string) => {
  if (
    username == (process.env.ADMIN_ID as unknown as string) &&
    password == (process.env.ADMIN_PASSWORD as unknown as string)
  ) {
    return true
  } else {
    return false
  }
}

export const fetchPageData = async (id: number) => {
  const res = await fetch(`${process.env.URL}/api/admin/batteries/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

export const createPost = async (formData: FormData) => {
  const { postType, title, desc, img, pdf }: { [k: string]: any } = Object.fromEntries(formData)
  console.log('createPost Entered', img, pdf)
  try {
    //MongoDB에 연결
    connectToDb()
    console.log('Connected To DB')
    let newId, newOrder
    const order = await Order.findOne({ id: 0 })

    //1. counter모델에서의 esgPdfIdCounter를 MongoDB로부터 불러와 기존값 +1를 newId 변수에 저장
    //2. order모델에서의 ESGPDFOrder를 newOrder에 저장한 후, 방금 생성한 newId를 newOrder 배열에 저장
    switch (postType) {
      case 'news':
        newId = await getId('news')
        newOrder = order.postOrder
        break
      case 'catelog':
        newId = await getId('catelog')
        newOrder = order.catelogOrder
        break
      case 'esg-pdf':
        newId = await getId('esg-pdf')
        newOrder = order.ESGPDFOrder
    }
    //order 배열 끝에 방금 생성한 id값 push
    newOrder.push(newId)
    console.log('Order Received')
    //3. 방금 추가한 객체가 반영된 최신 order 배열을 ESGPDFOrder 필드에 덮어쓰기하여 추후 배열순서 변경에 참고할 수 있도록 저장
    //4. pre-signed URL과 기존에 입력한 Title 두 정보를 활용해 MongoDB에 저장
    switch (postType) {
      case 'news':
        if (!img) {
          return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        }
        const newPost = new Post({ title, img: img, desc, id: newId })
        await Promise.all([newPost.save(), Order.updateOne({ id: 0 }, { postOrder: newOrder })])
        break
      case 'catelog':
        if (!img || !pdf) {
          return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        }
        const newCatelog = new Catelog({
          title,
          img: img,
          pdf: pdf,
          desc,
          id: newId,
        })
        await Promise.all([newCatelog.save(), Order.updateOne({ id: 0 }, { catelogOrder: newOrder })])
      case 'esg-pdf':
        if (!pdf) {
          return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        }
        const newESGPdf = new ESGPdf({
          title,
          pdf: pdf,
          id: newId,
        })
        await Promise.all([newESGPdf.save(), Order.updateOne({ id: 0 }, { ESGPDFOrder: newOrder })])
    }
    console.log(postType, 'Post saved to db\nNew Order:', newOrder)

    revalidatePath('/admin')
    revalidatePath('/api/admin')
    return { success: true, message: 'createPost success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}

export const handleBatteryListEdit = async (categoryList: Category[], batteryId: number) => {
  connectToDb()
  try {
    const res = await BatteryPage.updateOne({ id: batteryId }, { data: categoryList })
    console.log('리스트 순서변경 및 삭제 성공! /batteryId:', batteryId)
    revalidatePath('/')
    return { success: true, message: '글이 성공적으로 수정되었습니다' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}

export const handleListEdit = async (prevState: any, formData: FormData) => {
  //postType의 범위를 명확히 선언해 postType 스위치문 예외처리가 되지 않게끔하기
  connectToDb()
  const { modifiedOrder, postType } = Object.fromEntries(formData)
  console.log(modifiedOrder, postType)
  let newOrder = JSON.parse(modifiedOrder as string)
  let datas: any[] = [] //[MongoDB Collections, Order update를 위한 Promise 객체] => 2번째는 사용안됨. 성능 최적화를 위해 비동기로 뱅형하기 위해 임시로 합침
  try {
    //순서변경 도중에, 객체를 삭제했을 경우를 위해 순회하고자 컬렉션을 MongoDB로부터 불러옴
    //함수 인자로 받은 새 Order 배열을 MongoDB Order 객체에 덮어쓰기해 추후 getData할때 정렬하는 순서를 재정의
    //만약에 newOrder가 빈 배열이라면, 모든 요소가 삭제되었음을 의미함 -> 바로 MongoDB 내 다큐먼트들을 삭제
    switch (postType) {
      case 'news':
        datas = await Promise.all([Post.find().exec(), Order.updateOne({ id: 0 }, { postOrder: newOrder })])
        break
      case 'catelog':
        datas = await Promise.all([Catelog.find().exec(), Order.updateOne({ id: 0 }, { catelogOrder: newOrder })])
        break
      case 'esg-pdf':
        datas = await Promise.all([ESGPdf.find().exec(), Order.updateOne({ id: 0 }, { ESGPDFOrder: newOrder })])
    }
    if (!newOrder.length) {
      console.log('전체 삭제 시작')
      let key_img, key_pdf
      switch (postType) {
        case 'news':
          key_img = datas[0][0].img.replace(S3BucketUrl + '/', '')
          await Promise.all([Post.deleteMany({}), deleteS3Object(key_img)])
          break
        case 'catelog':
          key_img = datas[0][0].img.replace(S3BucketUrl + '/', '')
          key_pdf = datas[0][0].pdf.replace(S3BucketUrl + '/', '')
          console.log(key_img, key_pdf)
          await Promise.all([Catelog.deleteMany({}), deleteS3Object(key_img), deleteS3Object(key_pdf)])
          break
        case 'esg-pdf':
          key_pdf = datas[0][0].pdf.replace(S3BucketUrl + '/', '')
          await Promise.all([ESGPdf.deleteMany({}), deleteS3Object(key_pdf)])
      }
    }
    if (newOrder.length) {
      if (!datas[0].length) return { success: false, message: '순서정보와 다큐먼트 정보가 일치하지 않습니다' }
      datas[0].map(async (item: any) => {
        if (newOrder.indexOf(item.id) == -1) {
          if (item.pdf) deleteS3Object(item.pdf.replace(S3BucketUrl + '/', ''))
          if (item.img) deleteS3Object(item.img.replace(S3BucketUrl + '/', ''))
          console.log('배열들 중 일부가 삭제되어야함. 일부 삭제 시작')
          //만약 새로받은 Order 배열에서 id가 사라진 객체가 있으면, MongoDB 컬렉션에서도 동일하게 처리
          switch (postType) {
            case 'news':
              await Post.deleteOne({ id: item.id })
              break
            case 'catelog':
              await Catelog.deleteOne({ id: item.id })
              break
            case 'esg-pdf':
              await ESGPdf.deleteOne({ id: item.id })
          }
        }
      })
    }
    console.log('리스트 순서변경 및 삭제 성공! / postType:', postType)
    revalidatePath('/')
    return { success: true, message: '글이 성공적으로 수정되었습니다' }
  } catch (error) {
    console.log(error)
    return { success: false, message: `${postType} 글 수정간 오류 발생` }
  }
}

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND)
  const { category, name, email, number0, number1, number2, title, desc } = Object.fromEntries(formData)
  console.log(category, name, email, number0, number1, number2, title, desc)

  // simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: '이메일 정보가 정확하지 않습니다',
    }
  }
  if (!validateString(title, 200)) {
    return {
      error: '제목 정보가 정확하지 않습니다',
    }
  }
  if (!validateString(desc, 5000)) {
    return {
      error: '내용 정보가 정확하지 않습니다',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: '(주)아이비티 <onboarding@resend.dev>',
      // to: 'neoself1105@gmail.com',
      to: 'sales2@ibteng.co.kr',
      subject: `${category}에 대한 견적문의: ${title}`,
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: desc,
        senderEmail: email,
        title,
        phone: [number0 as string, number1 as string, number2 as string],
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}

export const createBatteryPage = async (formData: FormData) => {
  const { title, itemTitle, itemSubtitle, itemAdvanced, batteryId } = Object.fromEntries(formData)
  const newBatteryId = parseInt(batteryId as string)
  const cateImg: File = formData.get('cateImg') as unknown as File //이미지 데이터
  const productImgs: File[] | null = formData.getAll('productImg') as unknown as File[] //항공 ...
  const productNames: string[] | null = formData.getAll('productName') as unknown as string[] //항공 ...
  //데이터는 잘 받아옴
  let imgUrls: string[] = []
  let signedUrl_cateImg, signedUrl_prodImg
  try {
    if (!cateImg) return { success: false, message: '이미지 파일을 찾을 수 없습니다' }
    signedUrl_cateImg = await getSignedFileUrl({
      name: `batteries/${batteriesData_admin[newBatteryId].title}/${title}-category.png`,
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
    let products: { id: number; name: string; img: string }[] | [] = []
    if (productImgs) {
      for (let i = 0; i < productImgs.length; i++) {
        signedUrl_prodImg = await getSignedFileUrl({
          name: `batteries/${batteriesData_admin[newBatteryId].title}/${title}/${productNames[i]}`,
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
      products = productImgs.map(function (img: File, id: number) {
        return { id, name: productNames[id], img: imgUrls[id] }
      })
    }
    connectToDb() //MongoDB에 연결
    if (!signedUrl_cateImg) {
      return { success: false, message: '대표이미지에 대한 SignedURL 생성을 실패했습니다.' }
    }
    const prevData: { id: number; data: Category[] } | null = await BatteryPage.findOne({ id: newBatteryId })
    if (!prevData) return { success: false, message: '이전 배터리페이지 데이터를 불러오는데 실패했습니다.' }
    const newId = prevData.data.length ? Math.max(...prevData.data.map((item) => item.id)) + 1 : 0
    const data = {
      id: newId,
      title,
      itemFile: signedUrl_cateImg.split('?')[0],
      itemTitle,
      itemSubtitle,
      itemAdvanced,
      products,
    }
    const res = await BatteryPage.updateOne({ id: newBatteryId }, { data: [...prevData.data, data] })
    console.log(batteriesData_admin[newBatteryId].title, 'BatteryPage successfully updated!\nresponse:', res)
    revalidatePath('/admin/batteries')
    // revalidatePath('/api/admin/batteries')
    return { success: true, message: 'createBatteryPage success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}
