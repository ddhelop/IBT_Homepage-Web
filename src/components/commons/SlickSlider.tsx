import React, { Component, MouseEvent } from 'react'
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

function NextArrow(props: ArrowProps) {
  const { onClick } = props
  return (
    <div
      className="absolute top-[13%] md:top-[-6%] left-[105%] md:left-[99%] w-8 md:w-16 h-8 md:h-16"
      onClick={onClick}
    >
      <Image
        src="/intro/right arrow.svg" // 이미지 경로
        alt="slidesImages"
        width={69} // 너비
        height={287} // 높이
        layout="fixed" // 레이아웃 옵션
        onClick={onClick}
        className="cursor-pointer block"
      />
    </div>
  )
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props
  return (
    <div
      className="absolute top-[13%] md:top-[-6%] left-[-13%] md:left-[-3%] w-8 md:w-16 h-8 md:h-16"
      onClick={onClick}
    >
      <Image
        src="/intro/left arrow.svg" // 이미지 경로
        alt="slidesImages"
        width={69} // 너비
        height={287} // 높이
        layout="responsive" // 레이아웃 옵션
        onClick={onClick}
        className="cursor-pointer block"
      />
    </div>
  )
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // 모바일 화면에서 보여줄 슬라이드의 개수
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    }

    return (
      <div className="text-center">
        <div className="m-auto w-full p-20">
          <Slider {...settings}>
            {slidesData.map((el) => (
              <div key={el.title}>
                <div className="flex justify-center ">
                  <img src={el.image} alt={el.description} />
                </div>
                <div>
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
