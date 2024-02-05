import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full h-80 bg-footer-black mt-20">
      <div className="flex flex-col w-full h-80 justify-center items-center">
        <div className="relative w-40 h-1/4">
          <Image src={'/image/Logo.png'} width={1000} height={300} objectFit="cover" />
        </div>
        <div className="flex flex-row w-full justify-center mt-5">
          <div className="flex flex-col w-2/5 items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">ADDRESS</div>
            <div>서울지점: 서울시 성동구 성수일로 99</div>
            <div>서울숲 AK벨리지식산업센터 1103호,1104호</div>
            <div>광주본사: 광주광역시 북구 첨단벤처소로 38번길 2</div>
          </div>
          <div className="w-[1px] rounded-xl bg-gray-400 mx-10" />
          <div className="flex flex-col w-2/5 items-center text-gray-200 pt-3 pb-6">
            <div className="font-bold mb-3">TELEPHONE</div>
            <div>서울지점: 02-3409-7141 / 02-6965-7975</div>
            <div>광주본사: 062-971-7983</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
