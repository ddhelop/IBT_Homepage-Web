import Image from 'next/image'

export default function CompanyInfoComponent() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white">
        <div className="flex flex-col align-middle items-center w-2/3 h-full">
          <Image
            src="/info/logo.png" // 이미지 경로
            alt="slidesImages"
            width={322} // 너비
            height={187} // 높이
            // layout="fixed" // 레이아웃 옵션
          />
          <h2 className="mt-[15px] text-center font-medium text-[30.5px] leading-[67.8px]">
            IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며,
            <br />
          </h2>
          <p className="mt-[50px] text-center font-thin text-[28.6px] leading-[50.6px]">
            브랜드 컬러인 IBT 그린은 친환경 이념을,
            <br />
            우로 뻗는 타원은 끊임없이 도약하는 IBT의 혁신정신을 나타냅니다.
            <br />
            ‘International Battery Technology’의 약자인 IBT는,
            <br />
            세계를 선도하는 한국의 기업으로 성장할 것입니다.
          </p>
        </div>
      </div>
    </>
  )
}
