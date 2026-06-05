'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  MessageCircle,
  Trophy,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    step: '01',
    title: 'Remplis le formulaire',
    description:
      'Indique ton niveau d\u2019études, tes objectifs et les filières qui t\u2019intéressent. Nous analysons ton profil pour t\u2019orienter vers les meilleurs choix.',
    icon: ClipboardList,
  },
  {
    step: '02',
    title: 'Échange avec un conseiller',
    description:
      'Bénéficie d\u2019un accompagnement personnalisé avec un conseiller d\u2019orientation pour construire un projet d\u2019études clair et adapté à ton avenir.',
    icon: MessageCircle,
  },
  {
    step: '03',
    title: 'Prépare ton concours',
    description:
      'Accède à des ressources, conseils et méthodes efficaces pour réussir tes concours et maximiser tes chances d\u2019intégrer l\u2019école de ton choix.',
    icon: Trophy,
  },
]

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F0F]">
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
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            3 étapes pour trouver ton établissement
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un processus d&apos;orientation simple, personnalisé et ultra-rapide
            pour t&apos;inscrire et réussir ton parcours académique.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Connecting dashed line (desktop only) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-[#FFD600]/20" />
                )}

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#FFD600]/30 transition-all duration-300">
                  <span className="text-[#FFD600] text-sm font-bold uppercase tracking-widest mb-4 block">
                    Étape {item.step}
                  </span>
                  <div className="w-20 h-20 rounded-2xl bg-[#FFD600]/10 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#FFD600]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('#orientation')}
            className="bg-[#FFD600] text-[#0F0F0F] hover:bg-[#E6C200] font-bold rounded-2xl shadow-[0_0_25px_rgba(255,214,0,0.3)] text-base px-8 py-6 transition-all duration-300"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Commencer mon inscription
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
