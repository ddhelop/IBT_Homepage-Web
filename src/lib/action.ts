'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { Catelog, ESGPdf, Order, Post } from './models'
import { connectToDb, deleteS3Object, getErrorMessage, getId, getSignedFileUrl, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'
import { S3BucketUrl } from './data'

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
export const postESGPdf = async (formData: FormData) => {
  const title: string = formData.get('title') as unknown as string
  const pdf: File = formData.get('pdf') as unknown as File
  try {
    //S3 버킷에 PDF 파일을 저장한 후, 이를 불러오는 pre-signed URL을 가져오는 과정
    const pdfParams = {
      name: 'esg/' + Math.random().toString(36).substring(0, 8) + pdf.name,
      type: pdf.type,
    }
    const signedPDFUrl = await getSignedFileUrl(pdfParams)
    const uploadPDF = await fetch(signedPDFUrl, {
      method: 'PUT',
      body: pdf,
      headers: {
        'Content-type': pdf.type,
        'Content-Disposition': 'inline',
      },
    })
    if (uploadPDF.status != 200) return { success: false, message: 'uploadPDF failed' }

    //MongoDB에 연결
    connectToDb()
    //1. counter모델에서의 esgPdfIdCounter를 MongoDB로부터 불러와 기존값 +1를 newId 변수에 저장
    //2. order모델에서의 ESGPDFOrder를 newOrder에 저장한 후, 방금 생성한 newId를 newOrder 배열에 저장
    const [newId, order] = await Promise.all([getId('ESGPdf'), Order.findOne({ id: 0 })])
    let newOrder = order.ESGPDFOrder
    newOrder.push(newId) //order 배열 끝에 방금 생성한 id값 push
    const newESGPdf = new ESGPdf({
      title,
      pdf: signedPDFUrl?.split('?')[0],
      id: newId,
    })
    //3. 방금 추가한 객체가 반영된 최신 order 배열을 ESGPDFOrder 필드에 덮어쓰기하여 추후 배열순서 변경에 참고할 수 있도록 저장
    //4. pre-signed URL과 기존에 입력한 Title 두 정보를 활용해 MongoDB에 저장
    await Promise.all([newESGPdf.save(), Order.updateOne({ id: 0 }, { ESGPDFOrder: newOrder })])
    console.log('ESGPdf saved to db\nESGPdf Order:', newOrder)
    return { success: true, message: 'uploadESGPDF success' }
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
          key_img = datas[0][0].img.replace(S3BucketUrl, '')
          await Promise.all([Post.deleteMany({}), deleteS3Object(key_img)])
          break
        case 'catelog':
          key_img = datas[0][0].img.replace(S3BucketUrl + '/', '')
          key_pdf = datas[0][0].pdf.replace(S3BucketUrl + '/', '')
          console.log(key_img, key_pdf)
          await Promise.all([Catelog.deleteMany({}), deleteS3Object(key_img), deleteS3Object(key_pdf)])
          break
        case 'esg-pdf':
          key_pdf = datas[0][0].pdf.replace(S3BucketUrl, '')
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
      to: 'neoself1105@gmail.com',
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

export const createESGPDF = () => {
  connectToDb()
}

export const createBatteryPage = () => {
  connectToDb()
}
