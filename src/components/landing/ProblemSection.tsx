'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Puzzle, Clock } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    num: '01',
    title: 'Un marché très compétitif et saturé',
    desc: "Chaque année, des milliers de candidats visent les mêmes Masters. Sans une stratégie précise, votre dossier risque de se perdre dans la masse et de passer inaperçu face aux commissions d'admission.",
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Puzzle,
    num: '02',
    title: 'La complexité des écoles et des procédures',
    desc: "Entre les conditions d'admission, les dates limites, les concours, les dossiers de candidature et les entretiens, il est facile de rater une étape ou de mal préparer son dossier.",
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Clock,
    num: '03',
    title: 'Le temps perdu et les mauvais choix',
    desc: "Beaucoup d'étudiants perdent des mois à s'orienter seuls, postulent aux mauvais programmes, et finissent par rater les deadlines critiques — une année entière perdue.",
    color: 'text-amber-600',
    bg: 'bg-amber-500/10',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight">
            Votre licence en main —
            <br />
            <span className="text-[#E8871A]">
              mais les pièges sont nombreux.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase ${p.color}`}
                >
                  <span className={`w-2 h-2 rounded-full ${p.bg} ${p.color}`}>
                    <span className={`block w-2 h-2 rounded-full ${p.color.replace('text-', 'bg-')}`} />
                  </span>
                  Problème n°{p.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[#0B1F3A]/50 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
