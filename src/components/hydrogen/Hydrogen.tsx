import Image from 'next/image'

export default function Hydrogen() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-medium pt-72 pb-36 text-[#79ad4b]">HYDROGEN</div>
      <Image src="/image/hydrogen/hydrogen_intro.png" width={1920} height={1171} alt="hydrogen" />
      <div></div>
    </div>
  )
}
