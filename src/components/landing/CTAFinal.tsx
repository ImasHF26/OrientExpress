'use client'

import { motion } from 'framer-motion'

export default function CTAFinal() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#0d2340] via-[#0B1F3A] to-[#0B1F3A]">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#E8871A]/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[250px] h-[250px] bg-[#E8871A]/8 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Ton avenir commence{' '}
            <span className="text-[#E8871A]">aujourd&apos;hui.</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-md mx-auto">
            Rejoins les +340 étudiants qui ont trouvé leur Master grâce à CAP
            FUTURE MAROC.
          </p>

          <button
            onClick={() => scrollTo('#consultation')}
            className="inline-block bg-[#E8871A] text-white text-lg font-bold px-12 py-5 rounded-lg shadow-[0_8px_40px_rgba(232,135,26,0.35)] hover:bg-[#F5A03C] hover:shadow-[0_12px_50px_rgba(232,135,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Réserver mon orientation →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
