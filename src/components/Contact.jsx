import React from 'react'
import { Mail, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="text-white/90 text-2xl tracking-wider mb-8">Contact</h2>
        <form className="space-y-4">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 group-focus-within:border-cyan-300/50 transition" />
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md px-4 py-3 ring-1 ring-inset ring-white/10">
              <User className="h-4 w-4 text-white/50" />
              <input className="w-full bg-transparent text-white/80 placeholder-white/40 focus:outline-none" placeholder="Your name" />
            </div>
          </div>
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 group-focus-within:border-cyan-300/50 transition" />
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md px-4 py-3 ring-1 ring-inset ring-white/10">
              <Mail className="h-4 w-4 text-white/50" />
              <input type="email" className="w-full bg-transparent text-white/80 placeholder-white/40 focus:outline-none" placeholder="Email address" />
            </div>
          </div>
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 group-focus-within:border-cyan-300/50 transition" />
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 backdrop-blur-md px-4 py-3 ring-1 ring-inset ring-white/10">
              <MessageSquare className="h-4 w-4 mt-1 text-white/50" />
              <textarea rows="5" className="w-full bg-transparent text-white/80 placeholder-white/40 focus:outline-none" placeholder="Tell me about your project" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" className="relative inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-md transition hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(79,175,255,0.35)]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
