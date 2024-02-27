import FloatingButton from '@/components/battery/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hydrogen',
  description: 'IBT Hydrogen 제품 소개 페이지',
}

const HydrogenPage_Temp = () => {
  return (
    <>
      <FloatingButton />
      <BatteryDetail
        title={['HYDROGEN', 'HYDROGEN']}
        explain={[
          '아이비티는 고객의 니즈에 따라',
          '고 에너지 밀도 고출력 특성을 갖춘 다양한 제품을 제공하고 있습니다.',
          '우수한 가격 경쟁력을 바탕으로',
          '내구성을 가지며 진동, 충격에 강한 특징을 가지고 있습니다.',
        ]}
      />
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

export default HydrogenPage_Temp
