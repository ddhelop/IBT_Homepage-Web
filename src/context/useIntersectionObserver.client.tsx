'use client'
import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (
  onIntersect: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit,
) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && onIntersect) {
        onIntersect(entry)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [onIntersect, options])

  return ref
}
