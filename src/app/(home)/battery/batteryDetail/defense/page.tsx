import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, defenseList } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Defense Ni-cd',
  description: 'IBT 방산용 Ni-cd 배터리 제품 소개 페이지',
}

const BatteryDefensePage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail title={batteryList[0].title} explain={batteryList[0].explain} />
      <BatteryItem detailInfo={defenseList} mainCategoryIndex={0} />
    </>
  )
}

export default BatteryDefensePage
