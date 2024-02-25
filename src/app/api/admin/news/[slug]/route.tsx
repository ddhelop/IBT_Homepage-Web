import { Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
  const { slug } = params
  try {
    connectToDb()
    console.log('heeloo')
    const newsList = await Post.findOne({ id: 0 })
    console.log(newsList)
    return NextResponse.json(newsList.data[slug])
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch dd!')
  }
}
