import { ESGPdf, Order, Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const GET = async (request: NextRequest) => {
  try {
    connectToDb()
    const [esgPdfs, order] = await Promise.all([ESGPdf.find().exec(), Order.findOne({ id: 0 })])
    let sortedPdfs = order.ESGPDFOrder.map((item: number) => esgPdfs[esgPdfs.findIndex((e) => e.id == item)])
    return NextResponse.json(sortedPdfs)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch posts!')
  }
}
