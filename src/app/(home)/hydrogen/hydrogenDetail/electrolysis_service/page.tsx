import { hydrogenListData } from '@/lib/data'
import { Metadata } from 'next'
import { fetchPageData } from '@/lib/action'
import HydrogenDetail from '@/components/hydrogen/HydrogenDetail'
import HydrogenItem from '@/components/hydrogen/HydrogenItem'
import FloatingButton from '@/components/hydrogen/Floating'

export const metadata: Metadata = {
  title: '(주)아이비티 수전해 발전',
  description: 'IBT 수전해 서비스 페이지',
}

const ElectrolysisServicePage = async () => {
  const data = await fetchPageData(1, 'hydrogen')

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <div className="w-[min(92%,1280px)]">
          <HydrogenDetail title={hydrogenListData[1].title} explain={hydrogenListData[1].explain} />
          <HydrogenItem detailInfo={data.data} mainCategoryIndex={0} />
        </div>
      </div>
    </>
  )
}

export default ElectrolysisServicePage
