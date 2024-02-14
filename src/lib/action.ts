'use server'

import { revalidatePath } from 'next/cache'
import { Catelog, Order, Post } from './models'
import { connectToDb } from './utils'

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
export const handlePostListEdit = async (prevState: any, formData: any) => {
  connectToDb()
  const { _postOrder } = Object.fromEntries(formData)
  let postOrder = JSON.parse(_postOrder)
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

export const handleCatelogListEdit = async (prevState: any, formData: any) => {
  connectToDb()
  const { _postOrder } = Object.fromEntries(formData)
  let catelogOrder = JSON.parse(_postOrder)
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
