import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-footer-black mt-20 py-10">
      <div className="flex flex-col justify-center gap-9 px-[3rem] lg:px-0 lg:items-center items-start">
        <div className="hidden lg:relative lg:flex lg:w-48 lg:h-28">
          <Image src={'/image/Logo.png'} fill objectFit="cover" />
        </div>
        <div className="flex lg:flex-row flex-col lg:w-full lg:justify-center">
          <div className="flex flex-col lg:w-2/5 lg:items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">ADDRESS</div>
            <div>서울지점: 서울시 성동구 성수일로 99</div>
            <div>서울숲 AK벨리지식산업센터 1103호,1104호</div>
            <div>광주본사: 광주광역시 북구 첨단벤처소로 38번길 2</div>
          </div>
          <div className="lg:w-[1px] lg:rounded-xl lg:bg-gray-400 lg:mx-10" />
          <div className="flex flex-col lg:w-2/5 lg:items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">TELEPHONE</div>
            <div>서울지점: 02-3409-7141 / 02-6965-7975</div>
            <div>광주본사: 062-971-7983</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
