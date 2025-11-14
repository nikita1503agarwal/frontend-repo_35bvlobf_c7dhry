import React from 'react'

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop`,
}))

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-white/90 text-2xl tracking-wider">Selected Work</h2>
          <a href="#contact" className="text-cyan-300/90 hover:text-cyan-200 transition text-sm">Request a project →</a>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
                        *:mb-4">
          {items.map((it) => (
            <article key={it.id} className="break-inside-avoid rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 80px rgba(255,255,255,0.04)' }} />
              <div className="relative">
                <img src={it.img} alt={it.title} className="w-full object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-white/90 font-medium">{it.title}</h3>
                <span className="text-white/50 text-xs">2025</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
