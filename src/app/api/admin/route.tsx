import { Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    connectToDb()
    const posts = await Post.find().exec()
    console.log(posts)
    return NextResponse.json(posts)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch posts!')
  }
}
