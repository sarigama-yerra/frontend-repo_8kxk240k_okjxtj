import Spline from '@splinetool/react-spline'
import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-36">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" /> Available for freelance
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Graphic Designer crafting playful, modern brands
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            I blend typography, color, and motion into memorable identities. Explore selected work and ongoing experiments below.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
              See my work <ArrowDownRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-slate-900 px-5 py-3 font-medium border border-white/60 hover:bg-white">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
