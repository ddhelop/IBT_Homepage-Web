import FloatingButton from '@/components/battery/Floating'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { Metadata } from 'next'
import BatteryDetail from '@/components/battery/BatteryDetail'
import { fetchPageData } from '@/lib/action'

export const metadata: Metadata = {
  title: '(주)아이비티 기타 수소 제품',
  description: 'IBT 수소 페이지',
}

const BatteryOthersPage = async () => {
  const data = await fetchPageData(6, 'hydrogen')
  const product = data.data[0].products

  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      <BatteryDetail title={['기타', 'Others']} explain={[]} />
      {/* 이미지-설명 박스 */}
      <CheckerBoard
        image1={product[0]?.img || ''}
        title1={product[0]?.name || ['', '']}
        image2={product[1]?.img || ''}
        title2={product[1]?.name || ['', '']}
        image3={product[2]?.img || ''}
        title3={product[2]?.name || ['', '']}
      />
    </>
  )
}

export default BatteryOthersPage
