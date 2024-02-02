import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import Image from 'next/image'

export const metadata = {
  title: 'About Battery',
  description: 'IBT Battery 제품 소개 페이지',
}

const BatteryDetailPage = () => {
  return (
    <>
      <BatteryDetail />
      <BatteryItem />
    </>
  )
}

export default BatteryDetailPage
