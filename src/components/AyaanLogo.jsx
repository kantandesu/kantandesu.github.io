import React from 'react'
import logoLight from '../assets/ayaanlogo_website_light.svg'
import logoDark from '../assets/ayaanlogo_website_dark.svg'

export default function AyaanLogo() {
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
    updateThemeFromAttr()
    const observer = new MutationObserver(() => updateThemeFromAttr())
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const handleToggle = () => {
    const next = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  const src = currentTheme === 'dark' ? logoDark : logoLight

  return (
    <img
      src={src}
      alt="Ayaan logo"
      onClick={handleToggle}
      className="relative top-6 sm:top-12"
      width={160}
    />
  )
}


