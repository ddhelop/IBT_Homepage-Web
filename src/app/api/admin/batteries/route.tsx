import { BatteryPage } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const GET = async (request: NextRequest) => {
  try {
    connectToDb()

    const batteryPages = await BatteryPage.find().exec()
    return NextResponse.json(batteryPages)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch catelogs!')
  }
}
