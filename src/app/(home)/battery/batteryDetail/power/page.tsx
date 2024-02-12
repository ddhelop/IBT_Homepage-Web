import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, powerList } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Power Lithium',
  description: 'IBT 동력용 리튬 배터리 제품 소개 페이지',
}

const BatteryPowerPage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail title={batteryList[2].title} explain={batteryList[2].explain} />
      <BatteryItem detailInfo={powerList} mainCategoryIndex={2} />
    </>
  )
}

export default BatteryPowerPage
