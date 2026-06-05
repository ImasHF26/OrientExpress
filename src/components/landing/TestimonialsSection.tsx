'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Fatima Zahra',
    parcours: 'Bac+3 → Master ENCG Kénitra',
    text: "J'hésitais entre 5 écoles sans savoir laquelle choisir. CAP FUTURE a analysé mon dossier et m'a orientée vers l'ENCG. Aujourd'hui je suis en Master Marketing et je suis ravie !",
    initial: 'FZ',
  },
  {
    name: 'Youssef',
    parcours: 'Licence → Master ENSA Rabat',
    text: "Grâce à CAP FUTURE, mon dossier était blindé. Lettre de motivation, préparation à l'entretien — tout était carré. J'ai été admis du premier coup.",
    initial: 'Y',
  },
  {
    name: 'Amina',
    parcours: 'Bac+2 → Master FST Fès',
    text: "Je pensais que le Master c'était impossible pour moi. CAP FUTURE m'a prouvé le contraire. En 4 jours ils avaient analysé mon dossier, et en 3 semaines j'étais admise.",
    initial: 'A',
  },
]

export default function TestimonialsSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/25 text-[#E8871A] text-xs font-bold tracking-[0.1em] uppercase mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ils ont trouvé <span className="text-[#E8871A]">leur Master.</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto">
            Des étudiants marocains qui ont réussi leur admission grâce à notre
            accompagnement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#112548] border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#E8871A]/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-[#E8871A]/25 mb-4" />
              <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8871A] to-[#F5A03C] flex items-center justify-center text-white font-bold text-sm">
                  {t.initial}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/40">{t.parcours}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-[#E8871A] text-[#E8871A]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
