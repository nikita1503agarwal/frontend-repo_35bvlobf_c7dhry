import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 120px rgba(79,175,255,0.15)' }} />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-white/90 text-2xl tracking-wider mb-4">About Me</h2>
            <p className="text-white/70 leading-relaxed">
              I’m a multi‑disciplinary creator blending code, design, motion, and product thinking. I love building premium, minimal experiences that feel cinematic — the kind that make technology feel soft, human, and alive.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              My toolkit spans full‑stack development, brand and visual systems, video editing and motion, and interface design. I collaborate end‑to‑end: from concept, to craft, to launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
