import React, { useRef } from 'react'
import ScrollFloat from './ScrollFloat'
import AnimatedDivider from './AnimatedDivider'
import ScrollReveal from './ScrollReveal'

export default function AboutSection() {
  const headingRef = useRef(null)
  return (
    <section id="about" className="w-full">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <ScrollFloat
            ref={headingRef}
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="!my-0 mb-2"
            textClassName="!text-4xl sm:!text-5xl font-semibold tracking-tight text-[var(--text)]"
          >
            about.
          </ScrollFloat>
          <AnimatedDivider
            triggerRef={headingRef}
            initialScaleX={0}
            ease="power2.out"
            duration={1}
            scrollStart="top bottom-=20%"
            scrollEnd="bottom top"
          />
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={10}
            containerClassName="!mt-6"
            textClassName="!text-xl sm:!text-[22px] !leading-relaxed !text-justify text-[var(--muted)] !font-normal"
          >
            i'm a 4th year undergraduate student studying artificial intelligence and machine learning, with a strong passion for frontend web development. i specialize in crafting clean, responsive user interfaces using modern web frameworks, and i enjoy seamlessly integrating these interfaces with backend systems to build full-stack experiences that are both functional and visually engaging.
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
