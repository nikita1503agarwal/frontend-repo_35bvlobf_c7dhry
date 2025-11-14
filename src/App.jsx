import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#0D0D0D]/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-medium text-white/80 tracking-wide">Creator</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/60">
            <a href="#skills" className="hover:text-white/90">Skills</a>
            <a href="#portfolio" className="hover:text-white/90">Work</a>
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div className="relative">
          {/* subtle section background gradient */}
          <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#101010] via-[#0F0F0F] to-[#0D0D0D]" />
          <div className="relative">
            <Skills />
            <Portfolio />
            <About />
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Digital Creator — All rights reserved.
      </footer>
    </div>
  )
}

export default App
