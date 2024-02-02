import Page from '@/components/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, defenseList } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'About Power Lithium',
  description: 'IBT 동력용 리튬 배터리 제품 소개 페이지',
}

const BatteryPowerPage = () => {
  return (
    <>
      <Page />
      <BatteryDetail
        title={batteryList[2].title}
        explain1={batteryList[2].explain1}
        explain2={batteryList[2].explain2}
        explain3={batteryList[2].explain3}
        explain4={batteryList[2].explain4}
      />
      <BatteryItem detailInfo={defenseList} />
    </>
  )
}

export default BatteryPowerPage
