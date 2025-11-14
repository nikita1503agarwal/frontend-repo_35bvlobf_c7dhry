import React from 'react'
import { Code2, Palette, Film, PenTool } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Coding', desc: 'Web apps, automations, creative coding' },
  { icon: Palette, title: 'Graphic Design', desc: 'Branding, posters, visuals that pop' },
  { icon: Film, title: 'Video Editing', desc: 'Cuts, motion, color — cinematic polish' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Elegant interfaces with clarity' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-white/90 text-2xl tracking-wider mb-8">Core Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(79,175,255,0.25)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: 'inset 0 0 40px rgba(79,175,255,0.08)' }} />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300 ring-1 ring-cyan-300/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white/90 font-medium">{title}</h3>
                  <p className="text-white/60 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
