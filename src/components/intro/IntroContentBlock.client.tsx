'use client'
import { useIntersectionObserver } from '@/context/useIntersectionObserver.client'
import { IContentBlockProps } from './IntroComponent.types'

export default function ContentBlock(props: IContentBlockProps) {
  const handleAnimation = (entry: IntersectionObserverEntry) => {
    entry.target.classList.add('animate-fadeIn')
  }

  const ref = useIntersectionObserver(handleAnimation, {
    root: null,
    rootMargin: '100px',
    threshold: 0.2,
  })

  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="text-center flex flex-col items-center justify-center p-8 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 animate-fadeIn"
    >
      <div ref={ref}>
        <h1 className="text-5xl font-bold mb-4 text-white">{props.title}</h1>
        <p className="leading-relaxed whitespace-pre-line text-xl font-light mt-20 text-white">{props.text}</p>
      </div>
    </div>
  )
}
