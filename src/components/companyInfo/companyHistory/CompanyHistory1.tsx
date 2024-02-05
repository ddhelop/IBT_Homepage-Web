import Image from 'next/image'

export default function CompanyHistory1() {
  return (
    <>
      <div className="mt-12 w-[370px] flex flex-col justify-center">
        {/* top */}
        <div className="flex flex-col pl-5">
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-16">2023</h3>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-16">2022</h3>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-5">2021</h3>
          <p className="font-[350] text-sm ">
            KAI(한국항공우주산업㈜) 의 LCH(소형민수헬기) 및 LAH(소형무장헬기) 개발사업 참여
          </p>
          <Image
            src="/info/2021.png" // 이미지 경로
            alt="2021"
            width={334} // 너비
            height={179} // 높이
            layout="fixed" // 레이아웃 옵션
            className="mt-3 rounded mb-10"
          />
        </div>
        {/* middle */}
        <div className="relative pl-4">
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-3">2020</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-4">
            청소차용 리튬팩 개발
            <br />
            중대형 친환경 선박 동력 ESS용 배터리 시스템 개발
          </p>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2019</h3>
          <p className="font-[350] text-[13.7px] mb-5">AGV 및 지게차용 리튬인산철 전지개발</p>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2018</h3>
          <p className="font-[350] text-[13.7px] mb-6">AS9100 항공우주 품질경영시스템 인증 획득</p>
          <Image
            src="/info/2018.png" // 이미지 경로
            alt="2018"
            width={384} // 너비
            height={185} // 높이
            layout="fixed" // 레이아웃 옵션
            className="mt-3 mb-8"
          />
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2017</h3>
          <p className="font-[350] text-[13.7px] leading-[31px] mb-5">
            도시철도차량용 축전지,충전기 개발 및 표준화 연구태양전지식 고감도 항공장애 표시등 시스템 개발선 박용
            리튬인산철 전지 시스템 개발
          </p>
          <h3 className="text-[24.7px] font-bold tracking-[-0.38px] text-[#59A833] mb-4">2015</h3>
          <p className="font-[350] text-[13.7px] mb-6">
            광주광역시 강소기업 선정한전 배전지능화용 리튬인산철 전지팩 개발
          </p>
          <div className="absolute top-[0%] left-[-109%]">
            <p className="text-[#2B6434] font-bold tracking-[1.059px] text-[28.2px] leading-[45.9px]">
              친환경 에너지의 리더,
              <br />
              지속 가능한 미래를 열다
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
