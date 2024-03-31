'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { BatteryPage, HydrogenPage, Post, User } from './models'
import { connectToDb, getErrorMessage, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'
import { batteriesData_admin, postData_admin } from './data'
import { Category, PageType, PostType } from './types'

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

export const checkAccount = async (password: string) => {
  connectToDb()
  const _currPW: { id: number; secure: string } | null = await User.findOne({ id: 0 })
  if (!_currPW) return false
  if (password !== _currPW.secure) {
    return false
  } else {
    return true
  }
}
export const changePassword = async (reqData: { currPW: string; newPW: string }) => {
  try {
    //MongoDB에 연결
    connectToDb()
    const isAdmin: boolean = await checkAccount(reqData.currPW)
    if (!isAdmin) {
      return { success: false, message: '기존에 사용하는 비밀번호와 일치하지 않습니다.' }
    } else {
      await User.updateOne({ id: 0 }, { secure: reqData.newPW })
      return { success: true, message: '비밀번호 변경이 완료되었습니다.' }
    }
  } catch (error) {
    console.log(error)
    return { success: false, message: getErrorMessage(error) }
  }
}

export const fetchPageData = async (id: number, type: string) => {
  connectToDb()

  const res = await fetch(`${process.env.URL}/api/admin/${type === 'battery' ? 'batteries' : 'hydrogens'}/${id}`, {
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
  const { postType, editId, title_en, title_kr, desc, img, pdf }: { [k: string]: any } = Object.fromEntries(formData)
  try {
    //MongoDB에 연결
    connectToDb()
    const prevData: { id: number; data: PostType[] } | null = await Post.findOne({ id: +postType })
    if (!prevData) return { success: false, message: '이전 데이터를 불러오는데 실패했습니다.' }
    const newId = prevData.data.length ? Math.max(...prevData.data.map((item) => item.id)) + 1 : 0
    console.log(Object.fromEntries(formData))
    switch (+postType) {
      case 0:
        if (!img) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        if (editId) {
          prevData.data[prevData.data.findIndex((item) => item.id === +editId)] = {
            id: editId,
            title: title_kr,
            img,
            desc,
          }
          await Post.updateOne({ id: 0 }, { data: [...prevData.data] })
        } else {
          const newNews = { id: newId, title: title_kr, img, desc }
          await Post.updateOne({ id: +postType }, { data: [...prevData.data, newNews] })
        }
        revalidatePath('/admin')
        break
      case 1:
        if (!img || !pdf) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        const newCatalog = { id: newId, title: [title_kr, title_en], img, pdf }
        await Post.updateOne({ id: +postType }, { data: [...prevData.data, newCatalog] })
        revalidatePath('/admin/catelog')
        break
      case 2:
        if (!pdf) return { success: false, message: 'SignedURL 생성을 실패했습니다.' }
        const newEsg = { id: newId, title: [title_kr, title_en], pdf }
        await Post.updateOne({ id: +postType }, { data: [...prevData.data, newEsg] })
        revalidatePath('/admin/esg-pdf')
    }
    console.log(postData_admin[+postType].title, 'Post successfully updated!')
    return { success: true, message: 'createPost success' }
  } catch (error) {
    console.log(error)
    return { success: false, message: getErrorMessage(error) }
  }
}

export const handleBatteryListEdit = async (
  categoryList: Category[],
  pageId: number,
  isDelete: boolean,
  type: PageType,
) => {
  connectToDb()
  try {
    type === 'battery'
      ? await BatteryPage.updateOne({ id: pageId }, { data: categoryList })
      : await HydrogenPage.updateOne({ id: pageId }, { data: categoryList })
    console.log('리스트 순서변경 및 삭제 성공! /PageId:', pageId)
    return {
      success: true,
      message: isDelete ? '항목이 정상적으로 삭제되었습니다' : '순서가 정상적으로 수정되었습니다',
    }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}
export const handleOthersDelete = async (data: Category, type: 'battery' | 'hydrogen') => {
  connectToDb()
  try {
    await BatteryPage.updateOne({ id: 4 }, { data })
    console.log('리스트 순서변경 및 삭제 성공! /PageId:')
    revalidatePath('/admin/batteries')
    return {
      success: true,
      message: '항목이 정상적으로 삭제되었습니다',
    }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}

export const handleListEdit = async (posts: PostType[], postTypeId: number) => {
  connectToDb()
  try {
    await Post.updateOne({ id: postTypeId }, { data: posts })
    console.log('리스트 순서변경 및 삭제 성공! /PageId:', postTypeId)
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
      to: 'shlee0916@rocketibt.co.kr',
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

export const createOthersPage = async (formData: FormData, type: 'battery' | 'hydrogen') => {
  const productImgs: string[] | null = formData.getAll('productImg') as unknown as string[]
  const productNames_kr: string[] | null = formData.getAll('productName_kr') as unknown as string[]
  const productNames_en: string[] | null = formData.getAll('productName_en') as unknown as string[]
  try {
    const products = productImgs.map(function (img: string, id: number) {
      return { id, name: [productNames_kr[id], productNames_en[id]], img }
    })
    connectToDb() //MongoDB에 연결
    let prevData: { id: number; data: Category[] } | null =
      type === 'battery' ? await BatteryPage.findOne({ id: 4 }) : await HydrogenPage.findOne({ id: 6 })
    if (!prevData) return { success: false, message: '이전 Others 페이지 데이터를 불러오는데 실패했습니다.' }

    const data = { id: 0, title: [], itemFile: '', itemTitle: [], itemSubtitle: [], itemAdvanced: [], products }

    if (type === 'battery') {
      await BatteryPage.updateOne({ id: 4 }, { data })
      revalidatePath('/admin/batteries')
    } else {
      await HydrogenPage.updateOne({ id: 6 }, { data })
      revalidatePath('/admin/hydrogens')
    }
    return { success: true, message: 'create or edit OthersPage success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}

export const createPage = async (formData: FormData, type: PageType) => {
  const {
    title_kr,
    title_en,
    itemTitle_kr,
    itemTitle_en,
    itemSubtitle_kr,
    itemSubtitle_en,
    itemAdvanced_kr,
    itemAdvanced_en,
    pageId,
    cateImg,
    editSectionId,
  }: { [k: string]: any } = Object.fromEntries(formData)

  const productImgs: string[] | null = formData.getAll('productImg') as unknown as string[]
  const productNames_kr: string[] | null = formData.getAll('productName_kr') as unknown as string[]
  const productNames_en: string[] | null = formData.getAll('productName_en') as unknown as string[]
  //데이터는 잘 받아옴
  try {
    const products = productImgs.map(function (img: string, id: number) {
      return { id, name: [productNames_kr[id], productNames_en[id]], img }
    })
    connectToDb() //MongoDB에 연결
    let prevData: { id: number; data: Category[] } | null =
      type === 'battery' ? await BatteryPage.findOne({ id: +pageId }) : await HydrogenPage.findOne({ id: +pageId })
    if (!prevData) return { success: false, message: '이전 배터리페이지 데이터를 불러오는데 실패했습니다.' }

    if (editSectionId) {
      prevData.data[prevData.data.findIndex((item) => item.id === +editSectionId)] = {
        id: +editSectionId,
        title: [title_kr, title_en],
        itemFile: cateImg,
        itemTitle: [itemTitle_kr, itemTitle_en],
        itemSubtitle: [itemSubtitle_kr, itemSubtitle_en],
        itemAdvanced: [itemAdvanced_kr, itemAdvanced_en],
        products,
      }
      type === 'battery'
        ? await BatteryPage.updateOne({ id: +pageId }, { data: [...prevData.data] })
        : await HydrogenPage.updateOne({ id: +pageId }, { data: [...prevData.data] })
      console.log(batteriesData_admin[+pageId].title, 'BatteryPage successfully Edited!\nresponse:')
    } else {
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

      type === 'battery'
        ? await BatteryPage.updateOne({ id: +pageId }, { data: [...prevData.data, data] })
        : await HydrogenPage.updateOne({ id: +pageId }, { data: [...prevData.data, data] })
      console.log(type, 'Page successfully Added!\nresponse:')
    }
    revalidatePath('/admin/batteries')
    return { success: true, message: 'create or edit BatteryPage success' }
  } catch (error) {
    return { success: false, message: getErrorMessage(error) }
  }
}
