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
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      {/* 상단 녹색 텍스트 부분 - 배터리 중분류(방산용 Ni-cd) 소개 */}
      <BatteryDetail title={batteryList[0].title} explain={batteryList[0].explain} />
      {/* 소분류 컴포넌트 */}
      {/* mainCategoryIndex는 중분류를 구분하기 위해 사용 -> 방산용 Nicd:0, 산업용 Nicd:1, 동력용 Lithium:2, 에너지저장용 Lithium:3 */}
      <BatteryItem detailInfo={defenseList} mainCategoryIndex={0} />
    </>
  )
}

export default BatteryDefensePage
