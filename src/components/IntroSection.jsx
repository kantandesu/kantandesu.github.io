import React from 'react'
import RotatingText from './RotatingText'
import osagewebLight from '../assets/osageweb_light.svg'
import osagewebDark from '../assets/osageweb_dark.svg'

export default function IntroSection() {
  const [currentTheme, setCurrentTheme] = React.useState(() => {
    const attr = typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : null
    if (attr === 'light' || attr === 'dark') return attr
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  React.useEffect(() => {
    const root = document.documentElement
    const updateThemeFromAttr = () => {
      const attr = root.getAttribute('data-theme')
      if (attr === 'light' || attr === 'dark') setCurrentTheme(attr)
    }
    // Sync once on mount
    updateThemeFromAttr()
    // Observe attribute changes from the theme toggle
    const observer = new MutationObserver(() => updateThemeFromAttr())
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const heroSrc = currentTheme === 'dark' ? osagewebDark : osagewebLight
  return (
    <section className="w-full min-h-screen flex items-start pt-15 sm:pt-40">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          {/* Hero image with dynamic ratio */}
          <div className="w-full">
            <img
              src={heroSrc}
              alt="Portfolio hero"
              className="w-[100%] h-auto object-contain outline-[#3c3836]"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)]">
              {"hi, i'm "}
              <RotatingText
                texts={["ayaan", "আয়ান", "عیان"]}
                mainClassName="inline-flex items-center align-middle justify-center px-2 sm:px-2 md:px-3 bg-[var(--text)] text-[var(--bg)] overflow-hidden py-1 sm:py-1.5 md:py-2 rounded-[var(--radius-sm)] border border-[var(--text)] leading-[1.15]"
                dir="auto"
                splitBy="auto"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden py-0.5 sm:py-1 md:py-1"
                elementLevelClassName="relative -top-[0.25rem]"
                disableElementLevelClassForBengali
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>
            <p className="text-xl sm:text-[22px] leading-relaxed text-[var(--muted)]">
              frontend developer and student. keep scrolling to know more about me and my projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


