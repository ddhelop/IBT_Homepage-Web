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
  const { className, style, onClick } = props
  return (
    <Image
      src="/intro/right arrow.svg" // 이미지 경로
      alt="slidesImages"
      width={69} // 너비
      height={287} // 높이
      layout="fixed" // 레이아웃 옵션
      onClick={onClick}
      className="cursor-pointer block absolute top-0 left-[98%]"
    />
  )
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props
  return (
    <Image
      src="/intro/left arrow.svg" // 이미지 경로
      alt="slidesImages"
      width={69} // 너비
      height={287} // 높이
      layout="fixed" // 레이아웃 옵션
      onClick={onClick}
      className="cursor-pointer block absolute top-0 left-[-2%]"
    />
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
    }

    return (
      <div className="w-11/12 mt-[120px]">
        <Slider {...settings} className="items-center">
          {slidesData.map((data, index) => (
            <div key={index} className="flex flex-col justify-center items-center h-full relative">
              <Image
                src={data.image} // 이미지 경로
                alt="slidesImages"
                width={data.width} // 너비
                height={data.height} // 높이
                layout="fixed" // 레이아웃 옵션
                className="ml-[24%;]"
              />
              <div className="text-center mt-[30px]">
                <h1 className="font-bold text-[15.4px] tracking-[0.23px]">{data.title}</h1>
                <p className="font-light text-[15.4px] tracking-[0.23px]">{data.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
