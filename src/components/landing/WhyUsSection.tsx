'use client'

import { motion } from 'framer-motion'
import { Check, Search, BarChart3, GraduationCap, MessageSquare, FileText, UserCheck } from 'lucide-react'

const benefits = [
  'Analyse complète de votre dossier académique',
  "Évaluation de vos chances d'admission",
  'Sélection des Masters, Écoles et Licences Professionnelles adaptés',
  'Conseils personnalisés',
  'Préparation de votre candidature',
  "Accompagnement jusqu'à votre admission",
]

export default function WhyUsSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
              Pourquoi nous choisir
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 leading-tight">
              Pourquoi choisir
              <br />
              <span className="text-[#E8871A] italic">
                CAP FUTURE MAROC ?
              </span>
            </h2>
            <p className="text-[15px] text-[#0B1F3A]/50 leading-relaxed mb-3">
              Parce que votre avenir mérite une véritable stratégie.
            </p>
            <p className="text-[14px] text-[#0B1F3A]/40 leading-relaxed mb-3">
              Chaque étudiant possède un parcours unique. Nous analysons votre
              dossier dans les moindres détails afin de vous proposer les
              établissements et les formations qui correspondent réellement à
              votre profil.
            </p>
            <p className="text-[14px] text-[#0B1F3A]/40 leading-relaxed">
              Notre objectif est simple : vous aider à faire un choix réfléchi,
              stratégique et durable.
            </p>
          </motion.div>

          {/* Right column — Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-[#0B1F3A]/60 uppercase tracking-wider mb-6">
              Ce que nous vous apportons
            </h3>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#E8871A]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#E8871A]" />
                  </div>
                  <span className="text-[14px] text-[#0B1F3A]/70 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
