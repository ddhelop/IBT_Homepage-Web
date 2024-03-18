'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { BatteryPage, Post } from './models'
import { connectToDb, getErrorMessage, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'
import { batteriesData_admin, postData_admin } from './data'
import { deleteS3Object, getSignedFileUrl } from './awsUtils'
import { Category, PostType } from './types'

export const fetchPostData = async (id: number) => {
  const res = await fetch(`${process.env.URL}/api/admin/posts/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    console.log(getErrorMessage(res))
    throw new Error('Something went wrong')
  }
  return res.json()
}

export const fetchPageData = async (id: number) => {
  connectToDb()
  const res = await fetch(`${process.env.URL}/api/admin/batteries/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    console.log(getErrorMessage(res))
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
      subject: `${category}: ${title}`,
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
  const {
    title_kr,
    title_en,
    itemTitle_kr,
    itemTitle_en,
    itemSubtitle_kr,
    itemSubtitle_en,
    itemAdvanced_kr,
    itemAdvanced_en,
    batteryId,
    cateImg,
  } = Object.fromEntries(formData)
  const newBatteryId = parseInt(batteryId as string)
  const productImgs: string[] | null = formData.getAll('productImg') as unknown as string[]
  const productNames_kr: string[] | null = formData.getAll('productName_kr') as unknown as string[]
  const productNames_en: string[] | null = formData.getAll('productName_en') as unknown as string[]
  //데이터는 잘 받아옴
  try {
    const products = productImgs.map(function (img: string, id: number) {
      return { id, name: [productNames_kr[id], productNames_en[id]], img }
    })
    connectToDb() //MongoDB에 연결
    const prevData: { id: number; data: Category[] } | null = await BatteryPage.findOne({ id: newBatteryId })
    if (!prevData) return { success: false, message: '이전 배터리페이지 데이터를 불러오는데 실패했습니다.' }
    const newId = prevData.data.length ? Math.max(...prevData.data.map((item) => item.id)) + 1 : 0
    const data = {
      id: newId,
      title: [title_kr, title_en],
      itemFile: cateImg,
      itemTitle: [itemTitle_kr, itemTitle_en],
      itemSubtitle: [itemSubtitle_kr, itemSubtitle_en],
      itemAdvanced: [itemAdvanced_kr, itemAdvanced_en],
      products,
    }
    const res = await BatteryPage.updateOne({ id: newBatteryId }, { data: [...prevData.data, data] })
    console.log(batteriesData_admin[newBatteryId].title, 'BatteryPage successfully updated!\nresponse:', res)
    revalidatePath('/admin/batteries')
    return { success: true, message: 'createBatteryPage success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}
