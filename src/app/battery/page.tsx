import Page from '@/components/Floating'
import BatteryItem from '@/components/battery/BatteryItem'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Battery',
  description: 'IBT Battery 제품 소개 페이지',
}

const BatteryPage = () => {
  return (
    <>
      <Page />
      {/* Battery 소개 */}
      <div className="relative h-837 mx-40 bg-white">
        <div className="flex justify-center">
          <div className="absolute text-center z-10 h-full w-full top-1/2 -translate-y-1/2">
            <div className="h-1/2 translate-y-1/2">
              <div className="flex justify-center text-center">
                <Image src={'/image/Logo.png'} width={300} height={221} />
              </div>
              <h1 className="font-bold text-5xl text-white mb-10">IBT는 다릅니다</h1>
              <div className="font-light text-lg text-white leading-6">
                <p>IBT는 자체 보유한 BMS 기술을 바탕으로 개별화된 A/S 서비스와</p>
                <p>신뢰성 있는 고객케어를 제공하고 있습니다.</p>
              </div>
            </div>
          </div>
          <Image
            className="flex-shrink-0 z-0"
            src={'/image/Lithium.png'}
            width={1575}
            height={837}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      {/* Battery 메인 */}
      <div className="flex min-w-screen min-h-screen flex-col items-center bg-white mb-20">
        <h1 className="text-6xl font-medium my-40">BATTERY</h1>
        <div className="flex flex-col px-40 w-full">
          <div className="inline-flex flex-shrink-0 h-514">
            <div className="flex w-2/3 bg-gray-200 justify-center items-center">
              <Image src={'/image/Ni-cd.png'} width={980} height={516} />
            </div>
            <div className="group flex flex-col flex-shrink-0 justify-between w-1/3 bg-gray-200 px-9 py-9">
              <div>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="text-4xl font-medium mb-1.5">Ni-cd</div>
                    <div className="text-sm font-normal pl-1.5">니켈카드뮴축전지</div>
                  </div>
                  <Link href="/battery/batteryDetail/defense">
                    <button className="hidden transition-all group-hover:flex rounded-xl w-30 px-8 h-10 items-center justify-center bg-primary-green">
                      <Image src={'/image/arrow.svg'} width={30} height={10} />
                    </button>
                  </Link>
                </div>
                <div className="mt-5">
                  <p className="text-lg font-normal leading-10 pl-1 group-hover:hidden">
                    방산 분야에서는 무기 시스템의
                    <br />
                    안정적인 작동을 위해,
                    <br />
                    UPS 분야에서는 전력 공급의 연속성을 위해,
                    <br />
                    철도 분야에서는 안전한 운행을 위해
                    <br />
                    IBT의 Ni-cd 배터리가 필수적으로
                    <br />
                    사용되고 있습니다.
                  </p>
                  <div className="hidden group-hover:flex flex-col gap-5 pt-10">
                    <Link href="/battery/batteryDetail/defense">
                      <button className="w-full hover:bg-gray-300 rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 text-lg font-noraml">
                          방산용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                    <Link href="/battery/batteryDetail/industry">
                      <button className="w-full hover:bg-gray-300 rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 text-lg font-noraml">
                          산업용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-end group-hover:hidden">
                <button className="flex rounded-xl w-30 px-8 h-10 items-center justify-center bg-primary-green">
                  <Image src={'/image/arrow.svg'} width={30} height={10} />
                </button>
              </div>
            </div>
          </div>
          <div className="inline-flex h-514 w-1500">
            <div className="group flex flex-col flex-shrink-0 justify-between w-1/3 bg-gray-200 px-9 py-9">
              <div>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="text-4xl font-medium mb-1.5">Lithium</div>
                    <div className="text-sm font-normal pl-1.5">리튬축전지</div>
                  </div>
                  <Link href="/battery/batteryDetail/power">
                    <button className="hidden transition-all group-hover:flex rounded-xl w-30 px-8 h-10 items-center justify-center bg-primary-green">
                      <Image src={'/image/arrow.svg'} width={30} height={10} />
                    </button>
                  </Link>
                </div>
                <div className="mt-5 ">
                  <p className="text-lg font-normal leading-10 pl-1 group-hover:hidden">
                    IBT의 LiFePO4 배터리는
                    <br />
                    부피가 작고 가볍고 전력효율이 높으며,
                    <br />
                    충방전 관리가 매우 용이하여
                    <br />
                    골프카, 지게차, AGV, 선박, 통신, UPS, 특수용 등
                    <br />
                    다양한 영역의 고객에게 사랑받고 있습니다.
                  </p>
                  <div className="hidden group-hover:flex flex-col gap-5 pt-10">
                    <Link href="/battery/batteryDetail/power">
                      <button className="w-full hover:bg-gray-300 rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 text-lg font-noraml">
                          동력용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                    <Link href="/battery/batteryDetail/energy-save">
                      <button className="w-full hover:bg-gray-300 rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 text-lg font-noraml">
                          에너지저장용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-end group-hover:hidden">
                <button className="flex rounded-xl w-1/4 py-3 justify-center bg-primary-green">
                  <Image src={'/image/arrow.svg'} width={30} height={10} />
                </button>
              </div>
            </div>
            <div className="flex w-2/3 bg-gray-200 justify-center items-center">
              <Image src={'/image/Lithium.png'} width={980} height={516} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BatteryPage
