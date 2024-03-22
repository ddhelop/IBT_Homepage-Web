import { HydrogenPage } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const GET = async (request: NextRequest) => {
  connectToDb()
  try {
    const hydrogenPages = await HydrogenPage.find().exec()
    return NextResponse.json(hydrogenPages)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch catelogs!')
  }
}
