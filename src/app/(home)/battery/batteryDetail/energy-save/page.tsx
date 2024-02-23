import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import { batteryList, energySaveList } from '@/lib/data'
import { Metadata } from 'next'
import { fetchPageData } from '@/lib/action'

export const metadata: Metadata = {
  title: 'About Energy Save Lithium',
  description: 'IBT 에너지 저장용 리튬 배터리 제품 소개 페이지',
}

const BatteryEnergySavePage = async () => {
  const data = await fetchPageData(3)
  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      {/* 상단 녹색 텍스트 부분 - 배터리 중분류(에너지저장용 Lithium) 소개 */}
      <BatteryDetail title={batteryList[3].title} explain={batteryList[3].explain} />
      {/* 소분류 컴포넌트 */}
      {/* mainCategoryIndex는 중분류를 구분하기 위해 사용 -> 방산용 Nicd:0, 산업용 Nicd:1, 동력용 Lithium:2, 에너지저장용 Lithium:3 */}
      <BatteryItem detailInfo={data.data} mainCategoryIndex={3} />
    </>
  )
}

export default BatteryEnergySavePage
