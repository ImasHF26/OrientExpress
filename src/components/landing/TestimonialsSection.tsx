'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Youssef K.',
    info: 'Licence en Économie – Casablanca',
    text: "Grâce à CAP FUTURE MAROC, j'ai enfin trouvé un Master parfaitement adapté à mon profil. L'accompagnement était clair, professionnel et rassurant.",
    initial: 'Y.K',
    avatarBg: 'bg-[#0B1F3A]',
  },
  {
    name: 'Nadia M.',
    info: 'Licence Sciences – Marrakech',
    text: "J'étais complètement perdue après ma licence. Grâce aux conseils reçus, j'ai pu préparer un dossier solide et intégrer le Master que je souhaitais.",
    initial: 'N.M',
    avatarBg: 'bg-gradient-to-br from-[#E8871A] to-[#d97b15]',
  },
  {
    name: 'Omar B.',
    info: 'Licence FSJES – Fès',
    text: "Une équipe sérieuse, disponible et à l'écoute. Leur accompagnement m'a permis de postuler avec confiance.",
    initial: 'O.B',
    avatarBg: 'bg-[#0B1F3A]',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            Ils nous font confiance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A]">
            Témoignages
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
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#E8871A] text-[#E8871A]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#0B1F3A]/55 leading-[1.8] flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-xs`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#0B1F3A]/40">{t.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
