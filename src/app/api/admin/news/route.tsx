import { Order, Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    connectToDb()
    const [posts, order] = await Promise.all([Post.find().exec(), Order.findOne({ id: 0 })])
    let sortedPosts = order.postOrder.map((item: number) => posts[posts.findIndex((e) => e.postId == item)])
    console.log('fetching News / posts:', posts, 'order:', order, 'SortedCatelogs:', sortedPosts)
    return NextResponse.json(sortedPosts)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch posts!')
  }
}
