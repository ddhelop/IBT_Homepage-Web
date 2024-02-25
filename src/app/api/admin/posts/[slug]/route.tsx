import { Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
  const { slug } = params
  try {
    connectToDb()
    const posts = await Post.findOne({ id: slug })
    console.log('Fetching PostList:', posts)
    return NextResponse.json(posts)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch post!')
  }
}
