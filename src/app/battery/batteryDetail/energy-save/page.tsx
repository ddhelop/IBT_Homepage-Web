import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, energySaveList } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Energy Save Lithium',
  description: 'IBT 에너지 저장용 리튬 배터리 제품 소개 페이지',
}

const BatteryEnergySavePage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail title={batteryList[3].title} explain={batteryList[3].explain} />
      <BatteryItem detailInfo={energySaveList} mainCategoryIndex={3} />
    </>
  )
}

export default BatteryEnergySavePage
