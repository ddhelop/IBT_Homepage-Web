'use client'
import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/context/useIntersectionObserver.client'
import { IContentBlockProps } from './IntroComponent.types'

export default function ContentBlock(props: IContentBlockProps) {
  const contentRef = useRef(null) // 텍스트 컨텐츠를 위한 ref
  const [isVisible, setIsVisible] = useState(false) // 컨텐츠 가시성 상태

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting) // 컨텐츠 가시성 상태 업데이트
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.2,
      },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current) // contentRef를 관찰
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current) // 컴포넌트 언마운트 시 관찰 중단
      }
    }
  }, [contentRef])

  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="text-center flex flex-col items-center justify-center p-8 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
    >
      {/* contentRef를 적용할 새로운 div 추가 */}
      <div ref={contentRef} className={`${isVisible ? 'animate-fadeIn' : ''}`}>
        <h1 className={`text-5xl font-bold mb-4 text-white ${isVisible ? 'animate-growText' : ''}`}>{props.title}</h1>
        <p className="leading-relaxed whitespace-pre-line text-xl font-light mt-20 text-white">{props.text}</p>
      </div>
    </div>
  )
}
