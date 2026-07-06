'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Fatima Zahra',
    parcours: 'Licence Éco → Master ENCG Kénitra',
    text: "J'hésitais entre 5 écoles sans savoir laquelle choisir. CAP FUTURE a analysé mon dossier et m'a orientée vers l'ENCG. Aujourd'hui je suis en Master Marketing et je suis ravie de mon parcours !",
    initial: 'FZ',
    gradient: 'from-[#E8871A] to-[#F5A03C]',
  },
  {
    name: 'Youssef M.',
    parcours: 'Licence Info → Master ENSA Rabat',
    text: "Grâce à CAP FUTURE, mon dossier était blindé. Lettre de motivation, préparation à l'entretien — tout était carré. J'ai été admis du premier coup, sans stress.",
    initial: 'Y',
    gradient: 'from-[#0B1F3A] to-[#1a3a5c]',
  },
  {
    name: 'Amina K.',
    parcours: 'Licence SVT → Master FST Fès',
    text: "Je pensais que le Master c'était impossible pour moi. CAP FUTURE m'a prouvé le contraire. En 4 jours ils avaient analysé mon dossier, et en 3 semaines j'étais admise !",
    initial: 'A',
    gradient: 'from-[#E8871A] to-[#d97b15]',
  },
]

export default function TestimonialsSection() {
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
            Ce ne sont pas nos mots —
            <br />
            <span className="text-[#E8871A]">ce sont les leurs.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#E8871A] text-[#E8871A]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#0B1F3A]/60 leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#0B1F3A]/40">{t.parcours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
