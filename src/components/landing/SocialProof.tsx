'use client'

import { motion } from 'framer-motion'
import { Quote, Star, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '+300', label: 'étudiants accompagnés' },
  { value: '+50', label: 'admissions réussies' },
  { value: '6+', label: 'filières couvertes' },
]

const testimonials = [
  {
    name: 'Fatima Zahra',
    parcours: 'Bac SM → ENSA Kénitra',
    text: "Grâce à CAP FUTURE, j'ai compris les différences entre l'ENSA et l'EST. Aujourd'hui je suis en 2ème année Génie Informatique et je suis ravie de mon choix !",
    rating: 5,
    initial: 'FZ',
  },
  {
    name: 'Youssef',
    parcours: 'CPGE → EMI Rabat',
    text: "CAP FUTURE m'a mis en contact avec un ancien de l'EMI qui m'a donné des conseils précieux pour le CNC. Je suis maintenant en première année !",
    rating: 5,
    initial: 'Y',
  },
  {
    name: 'Amina',
    parcours: 'Bac SVT → ISPITS Rabat',
    text: "Grâce à CAP FUTURE j'ai découvert l'ISPITS. Le formulaire était simple et j'ai été contactée le lendemain par un conseiller !",
    rating: 5,
    initial: 'A',
  },
]

const trustIndicators = [
  'Région Rabat-Salé-Kénitra',
  'Établissements publics',
  'Données sécurisées',
  'Service 100% gratuit',
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 sm:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
              className="text-center"
            >
              <span className="text-4xl sm:text-5xl font-bold text-[#FFD600] block">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 mt-2 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/20 text-[#FFD600] text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ils ont trouvé leur voie
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Des étudiants de la région <strong className="text-gray-300">Rabat-Salé-Kénitra</strong> qui
            ont réussi leur orientation grâce à notre accompagnement.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-[#FFD600]/20 transition-all duration-500">
                <Quote className="w-8 h-8 text-[#FFD600]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed flex-1 text-sm sm:text-base">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD600] to-[#E6C200] flex items-center justify-center text-[#0F0F0F] font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.parcours}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FFD600] text-[#FFD600]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {trustIndicators.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-gray-400"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
