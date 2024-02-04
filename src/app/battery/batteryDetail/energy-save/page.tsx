import FloatingButton from '@/components/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, defenseList, energySaveList } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'About Energy Save Lithium',
  description: 'IBT 에너지 저장용 리튬 배터리 제품 소개 페이지',
}

const BatteryEnergySavePage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail
        title={batteryList[3].title}
        explain1={batteryList[3].explain1}
        explain2={batteryList[3].explain2}
        explain3={batteryList[3].explain3}
        explain4={batteryList[3].explain4}
      />
      <BatteryItem detailInfo={energySaveList} mainCategoryIndex={3} />
    </>
  )
}

export default BatteryEnergySavePage
