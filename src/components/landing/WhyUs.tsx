'use client'

import { motion } from 'framer-motion'
import { Target, BookOpen, Rocket } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Accompagnement personnalisé',
    description:
      'Un conseiller dédié qui connaît parfaitement les établissements de ta région et t\u2019aide à faire le meilleur choix.',
  },
  {
    icon: BookOpen,
    title: 'Conseils d\u2019orientation fiables',
    description:
      'Des informations vérifiées sur les concours, les conditions d\u2019admission et les débouchés de chaque école.',
  },
  {
    icon: Rocket,
    title: 'Aide à l\u2019admission',
    description:
      'On t\u2019accompagne de A à Z : dossier, préparation au concours et suivi jusqu\u2019à ton admission.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/20 text-[#FFD600] text-sm font-semibold mb-4">
            Pourquoi CAP FUTURE ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            L&apos;orientation qui fait la différence
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-[#FFD600]/40 hover:shadow-[0_0_30px_rgba(255,214,0,0.1)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFD600]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFD600]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#FFD600]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
