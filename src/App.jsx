import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AyaanLogo from './components/AyaanLogo'
import IntroSection from './components/IntroSection'

function App() {

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col">
      <header className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center justify-end">
          <AyaanLogo />
        </div>
      </header>
      <main className="flex-1 flex items-center py-1 sm:py-1">
        <IntroSection />
      </main>
    </div>
  )
}

export default App
