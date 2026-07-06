'use client'

import { motion } from 'framer-motion'

export default function CTAFinal() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0B1F3A]">
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
          {/* Label */}
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-8">
            → Passez à l&apos;action
          </span>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Le choix que vous faites aujourd&apos;hui{' '}
            <span className="text-[#E8871A]">
              bâtit votre carrière de demain.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Prenez 30 minutes maintenant. Réservez votre consultation gratuite
            avec un expert CAP FUTURE MAROC. Nous analysons votre dossier et
            posons ensemble la feuille de route — sans engagement.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('#consultation')}
            className="inline-block bg-[#E8871A] text-white text-lg font-bold px-12 py-5 rounded-lg shadow-[0_8px_40px_rgba(232,135,26,0.35)] hover:bg-[#F5A03C] hover:shadow-[0_12px_50px_rgba(232,135,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            🎯 Je réserve mon audit d&apos;orientation
          </button>

          {/* Scarcity note */}
          <p className="text-sm text-white/35 mt-5">
            ⏳ Places limitées · Candidatures ouvertes dès maintenant
          </p>
        </motion.div>
      </div>
    </section>
  )
}
