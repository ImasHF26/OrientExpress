'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Luxurious Ambient Mesh Glow Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        {/* Massive top-left violet orb */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-200/50 to-indigo-100/10 rounded-full blur-3xl animate-pulse" />
        {/* Massive bottom-right cyan-amber orb */}
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-cyan-100/40 via-indigo-50/20 to-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Glassmorphic Floating Badge */}
        <div className="flex justify-center lg:justify-start mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-indigo-100/80 text-indigo-850 text-xs sm:text-sm font-semibold shadow-[0_8px_30px_-6px_rgba(99,102,241,0.12)] hover:border-indigo-200 transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-violet-600 animate-bounce" />
            Région Rabat-Salé-Kénitra — Orientation Nationale
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:items-stretch items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left flex flex-col justify-center lg:col-span-5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 leading-[1.15] mb-6 tracking-tight">
              Ton avenir{' '}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-800 bg-clip-text text-transparent font-extrabold block mt-2">
                commence ici.
              </span>
            </h1>

            <div className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              <span className="text-indigo-600 font-semibold block mb-2 text-sm sm:text-base uppercase tracking-wider">
                Orientation &amp; Accompagnement Personnalisé
              </span>
              <span className="text-slate-800 font-semibold text-lg sm:text-xl block mb-4">
                Construis ton avenir dès aujourd’hui
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-indigo-800 text-white font-bold block mb-6 tracking-wider text-xs sm:text-sm uppercase py-2 px-4 rounded-xl shadow-md shadow-indigo-500/10 inline-block">
                ENCG • ENSA • ENSAM • Médecine • ISPITS • EST
              </span>
              <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                Profite d’un accompagnement stratégique avec nos conseillers experts pour faire les meilleurs choix d’orientation et maximiser tes chances de réussite.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollTo('#orientation')}
                size="lg"
                className="bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-800 hover:from-violet-750 hover:to-indigo-900 text-white shadow-[0_10px_25px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_12px_30px_-5px_rgba(99,102,241,0.55)] hover:scale-[1.02] transform active:scale-[0.98] transition-all duration-300 text-base px-8 py-6 rounded-2xl font-bold"
              >
                <GraduationCap className="w-5 h-5 mr-2 animate-pulse" />
                Réserve ta place
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo('#contact')}
                size="lg"
                variant="outline"
                className="bg-white/90 backdrop-blur-sm border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50/50 hover:border-indigo-300 hover:scale-[1.02] transform active:scale-[0.98] transition-all duration-300 text-base px-8 py-6 rounded-2xl font-bold"
              >
                Contacter un conseiller
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Premium Banner Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block mt-12 lg:mt-0 max-w-lg lg:max-w-none mx-auto w-full lg:col-span-7 lg:h-full flex items-center"
          >
            {/* Elegant Floating Card Container */}
            <div className="relative w-full rounded-[32px] p-4 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_24px_60px_-15px_rgba(99,102,241,0.15)] hover:shadow-[0_32px_75px_-12px_rgba(99,102,241,0.25)] hover:scale-[1.01] transition-all duration-500 flex items-center justify-center">
              {/* Premium Glow effect under card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-200 rounded-[40px] blur-3xl opacity-35 animate-pulse" />

              {/* Main Banner Image - perfectly fitted and never cropped */}
              <img
                src="/banner-capfuture.png"
                alt="CAP FUTURE MAROC Orientation"
                className="relative rounded-2xl shadow-sm border border-white/40 w-full h-auto object-contain block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
