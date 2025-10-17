import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AyaanLogo from './components/AyaanLogo'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import CredentialsSection from './components/CredentialsSection'

function App() {

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col">
      <header className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end">
          <AyaanLogo />
        </div>
      </header>
      <main className="flex-1 flex flex-col py-1 sm:py-1">
        <IntroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <CredentialsSection />
      </main>
    </div>
  )
}

export default App
