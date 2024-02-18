'use server'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'
import { Catelog, Order, Post } from './models'
import { connectToDb, getErrorMessage, validateString } from './utils'
import React from 'react'
import ContactFormEmail from '@/components/customer/contact-us/ContactForm'

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

export const handlePostListEdit = async (prevState: any, formData: FormData) => {
  connectToDb()
  const { _postOrder } = Object.fromEntries(formData)
  let postOrder = JSON.parse(_postOrder as string)
  try {
    const [posts, _] = await Promise.all([Post.find().exec(), Order.updateOne({ id: 0 }, { postOrder })])
    posts.map(async (item: any) => {
      if (postOrder.indexOf(item.postId) == -1) {
        //만약 새로받은 postOrder 배열에서 postId가 사라졌다면
        await Post.deleteOne({ postId: item.postId })
      }
    })
    revalidatePath('/')
    console.log('EdittingPostListEdit Done', postOrder)
    return { success: true, message: '글이 성공적으로 수정되었습니다' }
  } catch (e) {
    console.log(e)
    return { success: false, message: '뉴스글 수정간 오류 발생' }
  }
}

export const handleCatelogListEdit = async (prevState: any, formData: FormData) => {
  connectToDb()
  const { _postOrder } = Object.fromEntries(formData)
  let catelogOrder = JSON.parse(_postOrder as string)
  try {
    const [catelogs, _] = await Promise.all([Catelog.find().exec(), Order.updateOne({ id: 0 }, { catelogOrder })])
    catelogs.map(async (item: any) => {
      if (catelogOrder.indexOf(item.postId) == -1) {
        //만약 새로받은 postOrder 배열에서 postId가 사라졌다면
        await Catelog.deleteOne({ postId: item.postId })
      }
    })
    revalidatePath('/')
    console.log('EdittingCatelogListEdit Done')
    return { success: true, message: '글이 성공적으로 수정되었습니다' }
  } catch (e) {
    console.log(e)
    return { success: false, message: '뉴스글 수정간 오류 발생' }
  }
}
const resend = new Resend(process.env.RESEND)

export const sendEmail = async (formData: FormData) => {
  const { category, name, email, number0, number1, number2, title, desc } = Object.fromEntries(formData)
  console.log(category, name, email, number0, number1, number2, title, desc)

  // simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(title, 200)) {
    return {
      error: 'Invalid title',
    }
  }
  if (!validateString(desc, 5000)) {
    return {
      error: 'Invalid message',
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
