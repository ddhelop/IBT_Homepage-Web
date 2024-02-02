import CompanyInfoComponent from '@/components/companyInfo/CompanyInfoComponent'
import DirectionsComponent from '@/components/companyInfo/Directions/DirectionsComponent'

import TechnicalComponent from '@/components/companyInfo/Technical/TechnicalComponent'
import HistoryComponent from '@/components/companyInfo/companyHistory/HistoryComponent'

export default function IntroPage(): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      {/* 1st company info section */}
      <CompanyInfoComponent />
      {/* 2nd company history section */}
      <HistoryComponent />
      {/* 3th partnership section */}
      {/* 4th Technical certification section */}
      <TechnicalComponent />
      {/* 5th directions section*/}
      <DirectionsComponent />
    </div>
  )
}
