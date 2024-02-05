import FloatingButton from '@/components/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, defenseList } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'About Defense Ni-cd',
  description: 'IBT 방산용 Ni-cd 배터리 제품 소개 페이지',
}

const BatteryDefensePage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail
        title={batteryList[0].title}
        explain1={batteryList[0].explain1}
        explain2={batteryList[0].explain2}
        explain3={batteryList[0].explain3}
        explain4={batteryList[0].explain4}
      />
      <BatteryItem detailInfo={defenseList} mainCategoryIndex={0} />
    </>
  )
}

export default BatteryDefensePage
