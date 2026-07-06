'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    num: '1',
    title: 'Les masters non reconnus',
    desc: "Au Maroc, tous les masters ne se valent pas. Certains sont sans accréditation nationale, sans débouchés réels — et vous laissent avec un diplôme sans valeur sur le marché de l'emploi. Une seule erreur et vous perdez deux ans.",
  },
  {
    num: '2',
    title: 'La complexité des seuils de sélection',
    desc: "Chaque programme a ses propres critères : mention, filière, lettre de motivation, entretien oral… Sans stratégie précise, vous candidatez dans le vide — et vous essuyez des refus que vous n'aviez pas anticipés.",
  },
  {
    num: '3',
    title: 'Le temps perdu est irrécupérable',
    desc: "Une candidature ratée, des délais manqués, une année blanche. Chaque mois d'attente est un mois de moins dans votre carrière. Le coût d'une mauvaise décision aujourd'hui se paie pendant des années.",
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
            <span className="text-[#E8871A] italic">
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
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 overflow-hidden flex"
            >
              {/* Red left border */}
              <div className="w-[4px] shrink-0 bg-gradient-to-b from-red-400 via-red-500 to-red-600" />

              {/* Content */}
              <div className="p-7">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                    <span className="block w-[6px] h-[1.5px] bg-white rounded-full" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0B1F3A]/40">
                    Risque n°{p.num}
                  </span>
                </div>

                <h3 className="font-display text-[18px] font-bold text-[#0B1F3A] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#0B1F3A]/45 leading-[1.75]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
