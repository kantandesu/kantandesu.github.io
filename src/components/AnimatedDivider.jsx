import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedDivider({
  triggerRef,
  scrollContainerRef,
  className = 'block h-0.5 w-full sm:w-full mb-3 sm:mb-4',
  barClassName = 'block h-full bg-[var(--border)]',
  initialScaleX = 0.2,
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  ease = 'power2.out',
  duration = 1
}) {
  const wrapperRef = useRef(null)
  const barRef = useRef(null)

  useLayoutEffect(() => {
    const divider = barRef.current
    const triggerEl = triggerRef && 'current' in triggerRef ? triggerRef.current : triggerRef
    if (!divider || !triggerEl) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    gsap.set(divider, { transformOrigin: '0% 50%', scaleX: initialScaleX })

    const tween = gsap.to(divider, {
      duration,
      ease,
      scaleX: 1,
      scrollTrigger: {
        trigger: triggerEl,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
        invalidateOnRefresh: true
      }
    })

    return () => {
      if (tween && tween.scrollTrigger) tween.scrollTrigger.kill()
      if (tween) tween.kill()
    }
  }, [triggerRef, scrollContainerRef, initialScaleX, scrollStart, scrollEnd, ease, duration])

  return (
    <span aria-hidden ref={wrapperRef} className={className}>
      <span
        ref={barRef}
        className={barClassName}
        style={{ transformOrigin: '0% 50%', transform: `scaleX(${initialScaleX})` }}
      />
    </span>
  )
}


