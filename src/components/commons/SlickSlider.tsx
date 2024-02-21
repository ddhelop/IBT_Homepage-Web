import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const slidesData = [
  {
    title: '친환경 수소선박업체',
    description: 'Vinssen과 계약 체결',
    image: '/intro/img1.png',
    width: 255,
    height: 223,
  },
  { title: 'Battery', description: 'IBT 대표 제품\n라인업 소개', image: '/intro/img2.png', width: 255, height: 223 },
  {
    title: 'Hydrogen',
    description: '수소 연료전지의 소개와\n도입효과 및 강점',
    image: '/intro/img3.png',
    width: 255,
    height: 223,
  },
  { title: '고객문의', description: 'IBT에\n자유롭게 문의하세요', image: '/intro/img4.png', width: 255, height: 223 },
]

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props

  return (
    <Image
      src="/intro/left arrow.svg"
      alt="nextArrow"
      width={200}
      height={400}
      layout="responsive"
      className={`${className} max-w-10 `}
      style={{ ...style, display: 'block', paddingBottom: '50px' }}
      onClick={onClick}
    />
  )
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props

  return (
    <Image
      src="/intro/right arrow.svg"
      alt="nextArrow"
      width={200}
      height={400}
      layout="responsive"
      className={`${className} max-w-10 pb-[50px]`}
      style={{ ...style, display: 'block', paddingBottom: '50px' }}
      onClick={onClick}
    />
  )
}

const SlickSlider = async () => {
  const data = await getData()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 모바일 화면에서 보여줄 슬라이드의 개수
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className="text-center">
      <div className="m-auto p-20 ">
        <Slider {...settings}>
          {data.map((el) => (
            <div key={el.id}>
              <div className="flex justify-center ">
                <Image width={260} height={180} src={el.img} alt={el.description} />
              </div>
              <div className="mt-6">
                <h2 className="text-base font-bold">{el.title}</h2>
                <p className="text-base font-light mt-1">{el.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SlickSlider
