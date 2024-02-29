import FloatingButton from '@/components/battery/Floating'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { Metadata } from 'next'
import BatteryDetail from '@/components/battery/BatteryDetail'

export const metadata: Metadata = {
  title: '(주)아이비티 기타 배터리 제품',
  description: 'IBT 배터리 제품 소개 페이지',
}

const BatteryOthersPage = () => {
  return (
    <>
      {/* 오른쪽 플로팅 버튼 */}
      <FloatingButton />
      <BatteryDetail title={['기타', 'Others']} explain={[]} />
      {/* <div className="text-center mt-48">
        <div className="text-6xl font-bold mb-32 text-primary-green">기타</div>
      </div> */}
      {/* 이미지-설명 박스 */}
      <CheckerBoard
        image1={'/image/기타/other1.png'}
        title1={['항공장애등용', 'Aerial disability lights']}
        image2={'/image/기타/other2.png'}
        title2={['개폐기용', 'switch']}
        image3={''}
        title3={['통신용 5G 정류기', '5G rectifier for communication']}
      />
    </>
  )
}

export default BatteryOthersPage
