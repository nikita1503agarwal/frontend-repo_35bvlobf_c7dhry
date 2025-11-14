import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden" aria-label="Hero">
      {/* Background base */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(79,175,255,0.15),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(168,85,247,0.15),transparent_60%),linear-gradient(180deg,#0D0D0D,#111111,#141414,#1A1A1A)]" />

      {/* Soft gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(79,175,255,0.45), transparent 60%)' }} />
        <div className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.35), transparent 60%)' }} />
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
            FUTURISTIC PORTFOLIO
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white" style={{ textShadow: '0 0 30px rgba(79,175,255,0.25)' }}>
            Hi, I’m a
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]">
              Digital Creator
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-white/70 leading-relaxed">
            Crafting premium code, visuals, edits, and interfaces with a cinematic, minimal aesthetic. Sleek experiences that glow in the dark.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90 blur-md transition-all duration-300 group-hover:blur-xl" />
              <span className="relative z-10 text-sm font-medium text-white tracking-wide">View Projects</span>
            </a>
            <a href="#contact" className="relative inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(79,175,255,0.35)]">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* subtle bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0D0D0D]" />
    </section>
  )
}
