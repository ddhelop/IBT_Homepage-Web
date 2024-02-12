import BatteryPage from '@/components/battery/BatteryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Battery',
  description: 'IBT Battery 제품 소개 페이지',
}

export default function Page() {
  return <BatteryPage />
}
