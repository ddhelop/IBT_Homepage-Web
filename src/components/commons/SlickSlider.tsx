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
    <div className="absolute top-0 left-[105%] md:left-[96%] w-8 md:w-16 h-8 md:h-16" onClick={onClick}>
      <Image
        src="/intro/right arrow.svg" // 이미지 경로
        alt="slidesImages"
        width={69} // 너비
        height={287} // 높이
        layout="fix" // 레이아웃 옵션
        onClick={onClick}
        className="cursor-pointer block"
      />
    </div>
  )
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props
  return (
    <div className="absolute top-0 left-[-18%] md:left-0 w-8 md:w-16 h-8 md:h-16" onClick={onClick}>
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
      <div className="w-2/3 md:w-11/12 mt-[10px]">
        <Slider {...settings} className="items-center">
          {slidesData.map((data, index) => (
            <div key={index} className="flex flex-col justify-center items-center h-full relative">
              <Image
                src={data.image} // 이미지 경로
                alt="slidesImages"
                width={data.width} // 너비
                height={data.height} // 높이
                layout="fixed" // 레이아웃 옵션
                className="md:ml-[25%]"
              />
              <div className="text-center mt-3 md:mt-[30px]">
                <h1 className="font-bold text-sm md:text-base tracking-[0.23px]">{data.title}</h1>
                <p className="font-light text-sm  tracking-[0.23px]">{data.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
