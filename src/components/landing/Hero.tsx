'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import { trackCta } from '@/lib/analytics'

export default function Hero() {
  const scrollTo = (id: string) => {
    trackCta('hero_cta_reserve', 'Je réserve ma consultation', 'Hero')
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1F3A]"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#E8871A]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-[#E8871A]/5 via-white/2 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/25 mb-8"
            >
              <span className="text-lg">🎓</span>
              <span className="text-[#F5A03C] text-xs font-semibold tracking-wide uppercase">
                Orientation stratégique
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-black text-[clamp(32px,5.5vw,56px)] leading-[1.1] text-white mb-6"
            >
              Construisez votre avenir
              <br />
              avec la{' '}
              <span className="text-[#E8871A] italic">bonne stratégie.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/60 mb-4 leading-relaxed max-w-lg"
            >
              Trouvez le Master, l&apos;École ou la Licence Professionnelle qui
              correspond réellement à votre profil.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-[15px] text-white/45 mb-8 leading-relaxed max-w-lg"
            >
              Votre admission ne doit rien laisser au hasard. Chez CAP FUTURE
              MAROC, nous analysons votre parcours académique, évaluons vos
              chances d&apos;admission et construisons une stratégie
              personnalisée pour vous orienter vers les formations les plus
              adaptées.
            </motion.p>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 mb-10"
            >
              {[
                'Analyse personnalisée de votre dossier',
                'Orientation stratégique',
                "Accompagnement jusqu'à votre admission",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8871A]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E8871A]" />
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={() => scrollTo('#consultation')}
                className="bg-[#E8871A] text-white text-base font-bold px-10 py-4 rounded-xl shadow-[0_8px_32px_rgba(232,135,26,0.35)] hover:bg-[#F5A03C] hover:shadow-[0_12px_40px_rgba(232,135,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-lg">🚀</span>
                Je réserve ma consultation
              </button>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: '+340', label: 'Étudiants accompagnés', icon: '🎓' },
              { value: '97%', label: "Taux d'admission", icon: '📊' },
              { value: '4j', label: 'Analyse de dossier', icon: '⚡' },
              { value: '24h', label: 'Réponse garantie', icon: '🕐' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                <span className="text-2xl mb-3 block">{stat.icon}</span>
                <span className="block font-display text-3xl font-bold text-[#E8871A] mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
