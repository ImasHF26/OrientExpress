'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const errors = [
  {
    num: '1',
    title: 'Choisir une formation qui ne correspond pas à votre projet.',
    desc: "Toutes les formations n'offrent pas les mêmes perspectives. Un mauvais choix peut ralentir votre évolution professionnelle et vous faire perdre un temps précieux.",
  },
  {
    num: '2',
    title: 'Candidater sans stratégie.',
    desc: "Chaque établissement possède ses propres critères de sélection : mention, filière, dossier académique, lettre de motivation, entretien. Une candidature bien préparée augmente considérablement vos chances d'admission.",
    criteria: ['Mention', 'Filière', 'Dossier académique', 'Lettre de motivation', 'Entretien'],
  },
  {
    num: '3',
    title: "Perdre une année par manque d'information.",
    desc: "Une échéance oubliée. Un dossier incomplet. Une mauvaise orientation. Quelques erreurs suffisent parfois pour repousser votre projet d'études d'une année entière.",
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32 border-t border-[#D4DEE8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight">
            Les erreurs qui peuvent
            <br />
            <span className="text-[#E8871A] italic">
              compromettre votre avenir
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {errors.map((err, i) => (
            <motion.div
              key={err.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex hover:shadow-md transition-shadow duration-500"
            >
              {/* Red left bar */}
              <div className="w-[4px] shrink-0 bg-gradient-to-b from-amber-400 via-orange-500 to-red-500" />

              <div className="p-7 sm:p-8 flex-1">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0B1F3A]/35">
                    Erreur n°{err.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-3">
                  {err.title}
                </h3>

                <p className="text-[14px] text-[#0B1F3A]/45 leading-[1.8]">
                  {err.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
