'use client'

import { motion } from 'framer-motion'
import { Search, Users, Trophy } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Analyse de votre dossier',
    desc: "On étudie votre profil au millimètre : notes, parcours, ambitions. On identifie les Masters et écoles qui matchent vraiment avec vous.",
  },
  {
    num: '02',
    icon: Users,
    title: 'Stratégie personnalisée',
    desc: "Un conseiller expert vous guide : choix des écoles, dossier de candidature, lettres de motivation, préparation aux entretiens.",
  },
  {
    num: '03',
    icon: Trophy,
    title: "Admission garantie",
    desc: "On vous accompagne jusqu'à l'admission. Si on ne trouve pas de Master adapté, vous êtes remboursé. C'est notre engagement.",
  },
]

export default function SolutionSection() {
  return (
    <section className="bg-[#0d2340] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/25 text-[#E8871A] text-xs font-bold tracking-[0.1em] uppercase mb-4">
            Notre solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Un accompagnement{' '}
            <span className="text-[#E8871A]">de A à Z.</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            De l&apos;analyse de votre dossier jusqu&apos;à votre admission, on
            ne lâche rien.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#112548] border border-white/10 rounded-2xl p-8 text-center group hover:border-[#E8871A]/30 hover:shadow-[0_0_40px_rgba(232,135,26,0.06)] transition-all duration-500 relative"
            >
              {/* Step number */}
              <span className="text-[#E8871A] text-xs font-bold tracking-[0.15em] uppercase mb-5 block">
                Étape {s.num}
              </span>
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#E8871A]/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-[#E8871A]/15 group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-7 h-7 text-[#E8871A]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
