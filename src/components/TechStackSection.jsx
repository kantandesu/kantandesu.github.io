import React, { useRef } from 'react'
import ScrollFloat from './ScrollFloat'
import AnimatedDivider from './AnimatedDivider'
import ScrollReveal from './ScrollReveal'

export default function TechStackSection() {
  const headingRef = useRef(null)
  return (
    <section id="tech-stack" className="w-full">
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
            tech stack.
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
            JavaScript, React, Vite, Tailwind CSS, HTML, and CSS. I also tinker with build tooling and small backend utilities when needed.
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
