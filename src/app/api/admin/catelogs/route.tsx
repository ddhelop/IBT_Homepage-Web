import { Catelog, Order } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    connectToDb()
    const [catelogs, order] = await Promise.all([Catelog.find().exec(), Order.findOne({ id: 0 })])
    let sortedCatelogs = order.catelogOrder.map((item: number) => catelogs[catelogs.findIndex((e) => e.postId == item)])
    console.log('fetching Catelogs / posts:', catelogs, 'order:', order)
    return NextResponse.json(sortedCatelogs)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch catelogs!')
  }
}
