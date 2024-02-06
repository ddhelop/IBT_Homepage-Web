import Image from 'next/image'

export default function CompanyHistory3() {
  return (
    <>
      <div className="mt-12 w-full flex flex-col justify-center">
        {/* top */}
        <div className="flex flex-col">
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-3">2005</h3>
          <p className="font-[350] text-[13.7px] mb-8">ISO14001 인증 획득</p>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-3">2004</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-8">
            배기식 니켈 수소 전지 특허 출원
            <br />
            UH-1H 헬기용 축전지 국산화 개발
            <br />
            INNO-BIZ 기업 선정
            <br />
            F-4 항공기용 축전지 국산화 개발
          </p>

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-3">2003</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-7">
            ㈜아이비티 상호변경
            <br />
            기업부설연구소 설립
            <br />
            벤처기업인증 획득
            <br />
            철도안전용품 인증 획득
            <br />
            광주공장 신사옥 준공
            <br />
            IEC 규격 인증획득
          </p>
        </div>
        {/* middle */}
        <div className="relative">
          <Image
            src="/info/2003.png" // 이미지 경로
            alt="2021"
            width={330} // 너비
            height={150} // 높이
            // layout="fixed" // 레이아웃 옵션
            className="mt-3 rounded mb-10"
          />

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-3">2002</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-8">
            항공기용 축전지 국산화 개발업체 선정(방위사업청)
            <br />
            AGV용 축전지 개발
            <br />
            ISO 9001 인증 획득
          </p>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2001</h3>
          <p className="font-[350] text-[13.7px]  mb-6">함포용 축전지 국산화 개발</p>

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2000</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-10">
            디젤 기관차용 축전지 국산화 개발
            <br />
            항공기 시동용 축전지 국산화개발
          </p>

          <Image
            src="/info/2000.png" // 이미지 경로
            alt="2000"
            width={270} // 너비
            height={185} // 높이
            // layout="fixed" // 레이아웃 옵션
            className="mt-3 mb-12"
          />

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">1998</h3>
          <p className="font-[350] text-[13.7px] mb-7">소결식 니켈카드뮴 축전지 개발</p>

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">1993</h3>
          <p className="font-[350] text-[13.7px] mb-7">포켓식 니켈카드뮴 전지 KS 인증획득</p>

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">1987</h3>
          <p className="font-[350] text-[13.7px] mb-7">일본 혼다전기와 기술 제휴</p>

          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">1986</h3>
          <p className="font-[350] text-[13.7px] mb-7">(주)로케트기전 설립</p>

          <div className="absolute top-[0%] left-[-109%]">
            <p className="text-[#2B6434] font-bold tracking-[1.059px] text-[28.2px] leading-[45.9px]">
              배터리 산업의 개척자,
              <br />
              기술력으로 초석을 다지다
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
