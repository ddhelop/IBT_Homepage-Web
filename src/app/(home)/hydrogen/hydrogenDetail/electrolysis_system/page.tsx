import { hydrogenListData } from '@/lib/data'
import { Metadata } from 'next'
import { fetchPageData } from '@/lib/action'
import HydrogenDetail from '@/components/hydrogen/HydrogenDetail'
import HydrogenItem from '@/components/hydrogen/HydrogenItem'
import FloatingButton from '@/components/hydrogen/Floating'

export const metadata: Metadata = {
  title: '(주)아이비티 수전해 발전',
  description: 'IBT 수전해 시스템 페이지',
}

const ElectrolysisSystemPage = async () => {
  const data = await fetchPageData(0, 'hydrogen')

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      {/* 상단 녹색 텍스트 부분 - 배터리 중분류(방산용 Ni-Cd) 소개 */}
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <div className="w-[min(92%,1280px)]">
          <HydrogenDetail title={hydrogenListData[0].title} explain={hydrogenListData[0].explain} />
          {/* 소분류 컴포넌트 */}
          <HydrogenItem detailInfo={data.data} mainCategoryIndex={0} />
        </div>
      </div>
    </>
  )
}

export default ElectrolysisSystemPage
