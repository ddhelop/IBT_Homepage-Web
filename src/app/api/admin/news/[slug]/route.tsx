import { Post } from '@/lib/models'
import { PostType } from '@/lib/types'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
  const { slug } = params
  try {
    connectToDb()
    const newsList = await Post.findOne({ id: 0 })
    const news = newsList.data.filter((item: PostType) => item.id == slug)

    return NextResponse.json(news[0])
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch dd!')
  }
}
