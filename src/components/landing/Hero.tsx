'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1F3A]"
    >
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#E8871A]/10 to-[#E8871A]/3 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-[#E8871A]/5 via-white/3 to-transparent rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full bg-[#E8871A]/15 border border-[#E8871A]/35 text-[#F5A03C] text-xs font-semibold tracking-[0.08em] uppercase mb-8"
        >
          Accompagnement académique premium · Maroc
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-black text-[clamp(34px,7vw,66px)] leading-[1.08] text-white max-w-[780px] mx-auto mb-5"
        >
          Votre Master au Maroc,
          <br />
          <span className="text-[#E8871A]">garanti ou remboursé.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[clamp(15px,2.5vw,19px)] font-light text-white/55 italic mb-7 max-w-[560px] mx-auto"
        >
          « Nwajdolik l-master lli kaystahl — bla dya3 waqt, bla mfajaat »
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[clamp(15px,2.2vw,18px)] text-white/65 max-w-[560px] mx-auto mb-[52px] leading-[1.85]"
        >
          Nous analysons votre dossier au millimètre, sélectionnons uniquement
          les Masters et Écoles d&apos;ingénieurs reconnus, et vous accompagnons
          jusqu&apos;à l&apos;admission.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={() => scrollTo('#consultation')}
            className="inline-block bg-[#E8871A] text-white text-base font-bold px-12 py-[18px] rounded-lg shadow-[0_8px_32px_rgba(232,135,26,0.35)] hover:bg-[#F5A03C] hover:shadow-[0_12px_40px_rgba(232,135,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Réserver ma consultation gratuite →
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex border border-white/10 rounded-[20px] overflow-hidden max-w-[600px] mx-auto mt-16 flex-wrap"
        >
          {[
            { value: '+340', label: 'Étudiants admis' },
            { value: '97 %', label: 'Taux de réussite' },
            { value: '4 j', label: 'Analyse dossier' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 min-w-[140px] py-6 px-5 text-center ${
                i < 2 ? 'border-r border-white/10' : ''
              }`}
            >
              <span className="block font-display text-4xl font-bold text-[#E8871A]">
                {stat.value}
              </span>
              <span className="text-xs text-white/45 tracking-[0.08em] uppercase mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
