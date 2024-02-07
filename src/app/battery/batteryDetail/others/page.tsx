import FloatingButton from '@/components/Floating'
import BatteryDetail from '@/components/battery/BatteryDetail'
import BatteryItem from '@/components/battery/BatteryItem'
import CheckerBoard from '@/components/battery/CheckerBoard'
import { batteryList, industryList } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'About Others',
  description: 'IBT 배터리 제품 소개 페이지',
}

const BatteryOthersPage = () => {
  return (
    <>
      <FloatingButton />
      <div className="text-center lg:pt-24 pt-32">
        <div className="text-6xl font-medium my-32 text-primary-green lg:translate-x-[65px]">기타</div>
      </div>
      <CheckerBoard
        image1={'/image/Lithium.png'}
        title1={'항공장애등용'}
        explain1={'설명 필요'}
        image2={'/image/Lithium.png'}
        title2={'개폐기용'}
        explain2={'설명 필요'}
        image3={'/image/Lithium.png'}
        title3={'통신용 5G 정류기'}
        explain3={'설명 필요'}
      />
    </>
  )
}

export default BatteryOthersPage
