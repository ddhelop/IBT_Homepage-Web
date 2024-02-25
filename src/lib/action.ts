'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { BatteryPage, Post } from './models'
import { connectToDb, getErrorMessage, getId, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'
import { S3BucketUrl, batteriesData_admin, postData_admin } from './data'
import { deleteS3Object, getSignedFileUrl } from './awsUtils'
import { Category, PostType } from './types'

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
export const fetchPostData = async (id: number) => {
  const res = await fetch(`${process.env.URL}/api/admin/posts/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
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
  try {
    //MongoDB에 연결
    connectToDb()
    const prevData: { id: number; data: PostType[] } | null = await Post.findOne({ id: +postType })
    if (!prevData) return { success: false, message: '이전 데이터를 불러오는데 실패했습니다.' }
    const newId = prevData.data.length ? Math.max(...prevData.data.map((item) => item.id)) + 1 : 0

    switch (+postType) {
      case 0:
        if (!img) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        const newNews = { id: newId, title, img, desc }
        await Post.updateOne({ id: +postType }, { data: [...prevData.data, newNews] })
        revalidatePath('/admin')
        break
      case 1:
        if (!img || !pdf) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        const newCatalog = { id: newId, title, img, pdf }
        await Post.updateOne({ id: +postType }, { data: [...prevData.data, newCatalog] })
        revalidatePath('/admin/catelog')
        break
      case 2:
        if (!pdf) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        const newEsg = { id: newId, title, pdf }
        await Post.updateOne({ id: +postType }, { data: [...prevData.data, newEsg] })
        revalidatePath('/admin/esg-pdf')
    }
    console.log(postData_admin[+postType].title, 'Post successfully updated!')
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

export const handleListEdit = async (posts: PostType[], postTypeId: number) => {
  connectToDb()
  try {
    await Post.updateOne({ id: postTypeId }, { data: posts })
    console.log('리스트 순서변경 및 삭제 성공! /batteryId:', postTypeId)
    switch (postTypeId) {
      case 0:
        revalidatePath('/admin')
        break
      case 1:
        revalidatePath('/admin/catelog')
        break
      case 2:
        revalidatePath('/admin/esg-pdf')
    }
    return { success: true, message: '글이 성공적으로 수정되었습니다' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
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
