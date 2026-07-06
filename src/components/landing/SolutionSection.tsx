'use client'

import { motion } from 'framer-motion'
import { Search, Trophy, FileText, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    iconBg: 'bg-[#1a3a5c]',
    iconColor: 'text-cyan-400',
    title: 'Diagnostic complet du profil',
    desc: "Analyse de vos points forts, identification des lacunes, et stratégie de présentation optimale face aux commissions de sélection.",
  },
  {
    icon: Trophy,
    iconBg: 'bg-[#3a2a1a]',
    iconColor: 'text-[#E8871A]',
    title: 'Sélection des bons programmes',
    desc: "Masters classiques, professionnalisants, Écoles d'ingénieurs — uniquement des formations accréditées qui ouvrent vers des postes d'encadrement.",
  },
  {
    icon: FileText,
    iconBg: 'bg-[#2a2a1a]',
    iconColor: 'text-orange-400',
    title: 'Accompagnement de A à Z',
    desc: "Lettre de motivation, dossier administratif, préparation à l'entretien oral — nous sommes à vos côtés jusqu'à la lettre d'admission.",
  },
]

export default function SolutionSection() {
  return (
    <section className="bg-[#0B1F3A] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            ✦ Notre solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            CAP FUTURE MAROC —
            <br />
            <span className="text-[#E8871A] italic">
              le dossier au millimètre.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-[#112548] border border-white/10 rounded-2xl p-7 hover:border-white/15 transition-all duration-500 group"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-6`}
              >
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>

              <h3 className="font-display text-[18px] font-bold text-white mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[14px] text-white/45 leading-[1.75]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#112548] border border-white/10 rounded-2xl p-7 sm:p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-[#1a3a5c] flex items-center justify-center mb-5">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="font-display text-xl font-bold text-[#E8871A] mb-2">
            Garantie de résultat
          </h3>
          <p className="text-[14px] text-white/50 leading-[1.75]">
            Si les conditions convenues ne sont pas atteintes, nous reprenons le
            travail gratuitement. Zéro risque de votre côté — notre engagement,
            c&apos;est votre admission.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
