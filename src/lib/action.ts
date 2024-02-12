'use server'

import { Order, Post } from './models'

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
export const handlePostListEdit = async (postOrder: any[]) => {
  'use server'
  const [posts, _] = await Promise.all([Post.find().exec(), Order.updateOne({ id: 0 }, { postOrder })])
  posts.map(async (item: any) => {
    if (postOrder.findIndex(item.postId) == -1) {
      //만약 새로받은 postOrder 배열에서 postId가 사라졌다면
      await Post.deleteOne({ postId: item.postId })
    }
  })
  console.log('EdittingPostListEdit Done')
}
