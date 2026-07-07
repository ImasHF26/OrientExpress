'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'La consultation est-elle payante ?',
    a: "Oui. Elle comprend une analyse approfondie de votre dossier, une évaluation personnalisée de votre profil ainsi que des recommandations adaptées à votre projet d'études.",
  },
  {
    q: 'Combien de temps dure la consultation ?',
    a: 'En moyenne entre 30 et 45 minutes.',
  },
  {
    q: 'Accompagnez-vous les étudiants OFPPT, BTS et DUT ?',
    a: "Oui. Nous accompagnons également les étudiants issus des Licences, Bac+2, Bac+3 et Masters.",
  },
  {
    q: 'Travaillez-vous avec les établissements publics et privés ?',
    a: "Oui. Nous vous orientons vers les établissements qui correspondent le mieux à votre profil et à vos objectifs.",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white rounded-xl px-6 py-5 text-left flex items-center justify-between gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
      >
        <span className="font-semibold text-[15px] text-[#0B1F3A] group-hover:text-[#E8871A] transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#0B1F3A]/30 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 text-[#E8871A]' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-[14px] text-[#0B1F3A]/50 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32 border-t border-[#D4DEE8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A]">
            Questions fréquentes
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
