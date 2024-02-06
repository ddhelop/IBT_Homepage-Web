import FloatingButton from '@/components/Floating'
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
      <FloatingButton />
      {/* Battery 소개 */}
      <div className="relative lg:mx-40 bg-white">
        <div className="flex justify-center">
          <div className="absolute text-center z-10 h-4/5 w-full top-1/2 -translate-y-1/2">
            <div className="h-1/2 translate-y-1/2 flex flex-col jusify-center items-center">
              <div className="relative w-[18rem] h-[12rem]">
                <Image alt="" src={'/image/Logo.png'} fill />
              </div>
              <h1 className="font-bold text-5xl text-white mb-10">IBT는 다릅니다</h1>
              <div className="lg:font-light text-lg text-white leading-6">
                <p>IBT는 자체 보유한 BMS 기술을 바탕으로 개별화된 A/S 서비스와</p>
                <p>신뢰성 있는 고객케어를 제공하고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="relative w-[100rem] h-[45rem]">
            <Image
              alt="1"
              className="flex-shrink-0 z-0"
              src={'/image/310인트로/311_소개_배경.png'}
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      {/* Battery 메인 */}
      <div className="flex w-full min-h-full flex-col items-center mb-20">
        <h1 className="text-6xl font-medium my-40">BATTERY</h1>
        <div className="flex flex-col w-full">
          {/* Ni-cd */}
          <div className="inline-flex h-[30rem] lg:mx-40">
            <div className="lg:relative lg:flex lg:w-2/3 lg:h-full lg:justify-center lg:items-center hidden">
              <Image alt="2" src={'/image/310인트로/312_메인(Ni-cd).png'} fill />
            </div>
            <div className="group relative flex flex-col flex-shrink-0 justify-between lg:w-1/3 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
              <div className="z-10">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="lg:text-4xl text-5xl lg:font-medium font-semibold mb-1.5 lg:mt-0 mt-3">Ni-cd</div>
                    <div className="lg:text-sm text-md lg:font-normal font-medium pl-1.5">니켈카드뮴축전지</div>
                  </div>
                  <Link href="/battery/batteryDetail/defense">
                    <button className="hidden transition-all group-hover:flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green">
                      <Image alt="3" src={'/image/arrow.svg'} width={30} height={10} />
                    </button>
                  </Link>
                </div>
                <div className="mt-5">
                  <p className="text-2xl font-normal leading-10 pl-1 group-hover:hidden lg:text-base lg:leading-10">
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
                      <button className="w-full hover:bg-gray-300 hover:text-black rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-noraml">
                          방산용
                          <Image alt="4" src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                    <Link href="/battery/batteryDetail/industry">
                      <button className="w-full hover:bg-gray-300 hover:text-black rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-noraml">
                          산업용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-end group-hover:hidden">
                <button className="flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green z-10">
                  <Image src={'/image/arrow.svg'} width={30} height={10} />
                </button>
              </div>
              <Image src={'/image/310인트로/312_메인(Ni-cd).png'} fill className="lg:hidden z-0 opacity-40" />
            </div>
          </div>
          {/* Lithium */}
          <div className="inline-flex h-[30rem] lg:mx-40">
            <div className="group relative flex flex-col flex-shrink-0 justify-between lg:w-1/3 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
              <div className="z-10">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="lg:text-4xl text-5xl lg:font-medium font-semibold mb-1.5 lg:mt-0 mt-3">Lithium</div>
                    <div className="lg:text-sm text-md lg:font-normal font-medium pl-1.5">리튬축전지</div>
                  </div>
                  <Link href="/battery/batteryDetail/power">
                    <button className="hidden transition-all group-hover:flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green">
                      <Image src={'/image/arrow.svg'} width={30} height={10} />
                    </button>
                  </Link>
                </div>
                <div className="mt-5">
                  <p className="text-2xl font-normal leading-10 pl-1 group-hover:hidden lg:text-base lg:leading-10">
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
                      <button className="w-full hover:bg-gray-300 hover:text-black rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-noraml">
                          동력용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                    <Link href="/battery/batteryDetail/energy-save">
                      <button className="w-full hover:bg-gray-300 hover:text-black rounded-2xl">
                        <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-noraml">
                          에너지저장용
                          <Image src={'/image/arrow_green.svg'} width={30} height={10} />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-end group-hover:hidden">
                <button className="flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green z-10">
                  <Image src={'/image/arrow.svg'} width={30} height={10} />
                </button>
              </div>
              <Image src={'/image/310인트로/312_메인(Lithium).png'} fill className="lg:hidden z-0 opacity-40" />
            </div>
            <div className="lg:relative lg:flex lg:w-2/3 lg:h-full lg:justify-center lg:items-center hidden">
              <Image src={'/image/310인트로/312_메인(Lithium).png'} fill />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BatteryPage
