import { BatteryPage } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
  const { slug } = params
  try {
    connectToDb()
    const batteryPage = await BatteryPage.findOne({ id: slug })
    console.log('FetchBatteryPage:', batteryPage.toString().substring(0, 10))
    return NextResponse.json(batteryPage)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch post!')
  }
}
