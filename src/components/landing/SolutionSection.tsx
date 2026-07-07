'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Search, Target, FileEdit, UserCheck, ShieldCheck } from 'lucide-react'

const steps = [
  {
    num: '1',
    icon: CalendarCheck,
    title: 'Réservation',
    desc: 'Vous prenez rendez-vous avec un conseiller CAP FUTURE MAROC.',
  },
  {
    num: '2',
    icon: Search,
    title: 'Analyse',
    desc: 'Nous étudions votre parcours académique, votre profil et vos objectifs.',
  },
  {
    num: '3',
    icon: Target,
    title: 'Orientation',
    desc: "Nous sélectionnons les Masters, Écoles ou Licences Professionnelles les plus adaptés à votre dossier.",
  },
  {
    num: '4',
    icon: FileEdit,
    title: 'Préparation',
    desc: "Nous vous accompagnons dans la préparation de votre dossier, de votre lettre de motivation et de votre entretien.",
  },
  {
    num: '5',
    icon: UserCheck,
    title: 'Suivi',
    desc: "Nous restons à vos côtés jusqu'à la finalisation de vos candidatures.",
  },
]

export default function SolutionSection() {
  return (
    <section className="bg-[#0B1F3A] py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            Notre méthode
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Comment se déroule
            <br />
            <span className="text-[#E8871A] italic">
              votre accompagnement ?
            </span>
          </h2>
        </motion.div>

        {/* Steps — vertical timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#E8871A]/40 via-[#E8871A]/20 to-transparent" />

          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-5 sm:gap-6 group"
              >
                {/* Step circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#112548] border border-[#E8871A]/20 flex items-center justify-center group-hover:border-[#E8871A]/40 group-hover:bg-[#E8871A]/10 transition-all duration-500">
                    <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8871A]" />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-8 pt-1 flex-1">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#E8871A]/50 block mb-1">
                    Étape {s.num}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#112548] border border-white/[0.08] rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#E8871A]/10 flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-7 h-7 text-[#E8871A]" />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Notre engagement
          </h3>
          <p className="text-[15px] text-white/60 font-medium mb-3">
            Votre réussite est notre priorité.
          </p>
          <p className="text-[14px] text-white/40 leading-relaxed max-w-lg mx-auto">
            Nous mettons tout en œuvre pour vous proposer une stratégie
            d&apos;admission personnalisée, adaptée à votre profil et à vos
            ambitions. Notre accompagnement repose sur la transparence, le
            professionnalisme et une parfaite connaissance des procédures
            d&apos;admission.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
