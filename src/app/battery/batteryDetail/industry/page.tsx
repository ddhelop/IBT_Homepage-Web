import Page from '@/components/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, defenseList } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'About Industry Ni-cd',
  description: 'IBT 산업용 Ni-cd 배터리 제품 소개 페이지',
}

const BatteryIndustryPage = () => {
  return (
    <>
      <Page />
      <BatteryDetail
        title={batteryList[1].title}
        explain1={batteryList[1].explain1}
        explain2={batteryList[1].explain2}
        explain3={batteryList[1].explain3}
        explain4={batteryList[1].explain4}
      />
      <BatteryItem detailInfo={defenseList} />
    </>
  )
}

export default BatteryIndustryPage
