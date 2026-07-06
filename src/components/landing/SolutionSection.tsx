'use client'

import { motion } from 'framer-motion'
import { Search, Target, Rocket, ShieldCheck } from 'lucide-react'

const steps = [
  {
    num: '1',
    icon: Search,
    title: 'Diagnostic précis de votre profil',
    desc: "On analyse votre parcours, vos notes, vos ambitions et vos contraintes. On identifie vos points forts et les Masters/écoles où vous avez les meilleures chances.",
  },
  {
    num: '2',
    icon: Target,
    title: 'Sélection des bons établissements',
    desc: "On sélectionne uniquement les programmes qui matchent réellement avec votre profil. Pas de candidatures au hasard — chaque dossier est ciblé et optimisé.",
  },
  {
    num: '3',
    icon: Rocket,
    title: "Accompagnement de A à Z",
    desc: "Dossier de candidature, lettre de motivation, préparation aux entretiens et concours — on vous accompagne jusqu'à l'admission confirmée.",
  },
]

export default function SolutionSection() {
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
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            Notre méthode
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight">
            CAP FUTURE MAROC —
            <br />
            <span className="text-[#E8871A]">le dossier au millimètre.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#E8871A]/10 flex items-center justify-center group-hover:bg-[#E8871A]/15 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-5 h-5 text-[#E8871A]" />
                </div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#0B1F3A]/30">
                  Étape {s.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-[#0B1F3A]/50 leading-relaxed">
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
          className="bg-[#0B1F3A] rounded-2xl p-6 sm:p-8 flex items-start gap-5"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E8871A]/15 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#E8871A]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-1.5">
              Garantie de résultat
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Si nous estimons pouvoir vous accompagner et que vous n&apos;obtenez
              pas d&apos;admission, nous vous remboursons intégralement. C&apos;est
              notre engagement — zéro risque pour vous.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
