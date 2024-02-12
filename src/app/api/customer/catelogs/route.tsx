import { Catelog, Order } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    connectToDb()
    const [catelogs, order] = await Promise.all([Catelog.find().exec(), Order.findOne({ id: 0 })])
    let sortedCatelogs = order.catelogOrder.map(
      (item: number) => catelogs[catelogs.findIndex((e) => e.catelogId == item)],
    )
    console.log(catelogs)
    return NextResponse.json(sortedCatelogs)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch catelogs!')
  }
}

export const POST = async (request: NextRequest) => {
  return NextResponse.json({ success: true })
}
