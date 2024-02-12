import { Catelog, Order, Post } from '@/lib/models'
import { connectToDb, getId } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  console.log('request:', request)
  try {
    connectToDb()
    const [posts, order] = await Promise.all([Post.find().exec(), Order.findOne({ id: 0 })])
    let sortedPosts = order.postOrder.map((item: number) => posts[posts.findIndex((e) => e.postId == item)])
    return NextResponse.json(sortedPosts)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch posts!')
  }
}

export const POST = async (request: NextRequest) => {
  return NextResponse.json({ success: true })
}
