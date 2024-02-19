import FloatingButton from '@/components/battery/Floating'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Others',
  description: 'IBT 배터리 제품 소개 페이지',
}

const BatteryOthersPage = () => {
  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      <div className="text-center mt-48">
        <div className="text-6xl font-bold mb-32 text-primary-green">기타</div>
      </div>
      {/* 이미지-설명 박스 */}
      <CheckerBoard
        image1={'/image/기타/other1.png'}
        title1={'항공장애등용'}
        explain1={''}
        image2={'/image/기타/other2.png'}
        title2={'개폐기용'}
        explain2={''}
        image3={'/image/기타/other2.png'}
        title3={'통신용 5G 정류기'}
        explain3={''}
      />
    </>
  )
}

export default BatteryOthersPage
