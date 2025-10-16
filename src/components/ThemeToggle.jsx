import { useEffect, useState } from 'react'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text)] hover:bg-[color-mix(in_oklab,var(--surface),var(--border) 15%)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="size-2.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
      <span className="text-sm">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}


