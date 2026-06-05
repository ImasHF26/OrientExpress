'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, HelpCircle, Ban } from 'lucide-react'

const problems = [
  {
    icon: HelpCircle,
    title: 'Orientation confuse',
    desc: "Des dizaines de filières, des centaines d'écoles — mais aucune source fiable pour savoir laquelle te correspond vraiment.",
  },
  {
    icon: Clock,
    title: 'Perte de temps massive',
    desc: "Des semaines à chercher seul, à remplir des dossiers au hasard, pour finalement rater les deadlines ou postuler aux mauvais endroits.",
  },
  {
    icon: Ban,
    title: "Admissions ratées",
    desc: "Sans préparation ciblée ni connaissance des critères réels, beaucoup d'étudiants passent à côté de leur école idéale.",
  },
  {
    icon: AlertTriangle,
    title: 'Mauvais conseils',
    desc: "Les informations qu'on trouve en ligne sont souvent obsolètes, contradictoires ou tout simplement fausses.",
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#0B1F3A] py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-[0.1em] uppercase mb-4">
            Le problème
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            L&apos;orientation au Maroc est{' '}
            <span className="text-red-400">un parcours du combattant.</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Chaque année, des milliers d&apos;étudiants perdent leur chance parce
            qu&apos;ils n&apos;ont pas les bonnes informations au bon moment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#112548] border border-white/10 rounded-2xl p-7 group hover:border-red-500/20 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors">
                <p.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
