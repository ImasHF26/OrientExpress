'use client'

import { motion } from 'framer-motion'

import { trackCta } from '@/lib/analytics'

export default function CTAFinal() {
  const scrollTo = (id: string) => {
    trackCta('cta_final_reserve', 'Je réserve ma consultation CTAFinal', 'CTAFinal')
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0B1F3A]">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#E8871A]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[250px] h-[250px] bg-[#E8871A]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Votre avenir mérite
            <br />
            <span className="text-[#E8871A] italic">
              les meilleurs conseils.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/50 mb-4 max-w-xl mx-auto leading-relaxed">
            Ne prenez pas une décision aussi importante seul.
          </p>

          <p className="text-sm text-white/40 mb-10 max-w-lg mx-auto leading-relaxed">
            Réservez votre consultation et bénéficiez d&apos;un accompagnement
            personnalisé pour construire un projet d&apos;études solide et
            maximiser vos chances d&apos;admission.
          </p>

          <button
            onClick={() => scrollTo('#consultation')}
            className="bg-[#E8871A] text-white text-lg font-bold px-12 py-5 rounded-xl shadow-[0_8px_40px_rgba(232,135,26,0.35)] hover:bg-[#F5A03C] hover:shadow-[0_12px_50px_rgba(232,135,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>🚀</span>
            Je réserve ma consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
