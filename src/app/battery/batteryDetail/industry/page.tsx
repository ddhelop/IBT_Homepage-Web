import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, industryList } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Industry Ni-cd',
  description: 'IBT 산업용 Ni-cd 배터리 제품 소개 페이지',
}

const BatteryIndustryPage = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail title={batteryList[1].title} explain={batteryList[1].explain} />
      <BatteryItem detailInfo={industryList} mainCategoryIndex={1} />
    </>
  )
}

export default BatteryIndustryPage
