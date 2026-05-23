'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/60 text-blue-800 text-sm font-semibold mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            3 étapes pour trouver ton établissement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un processus d&apos;orientation simple, personnalisé et ultra-rapide pour t&apos;inscrire et réussir ton parcours académique.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              step: '01',
              title: 'Remplis le formulaire',
              description:
                'Indique ton niveau d’études, tes objectifs et les filières qui t’intéressent. Nous analysons ton profil pour t’orienter vers les meilleurs choix.',
              icon: '📝',
              color: 'from-blue-600 to-indigo-700',
            },
            {
              step: '02',
              title: 'Échange avec un conseiller',
              description:
                'Bénéficie d’un accompagnement personnalisé avec un conseiller d’orientation pour construire un projet d’études clair et adapté à ton avenir.',
              icon: '💬',
              color: 'from-amber-500 to-orange-600',
            },
            {
              step: '03',
              title: 'Prépare ton concours',
              description:
                'Accède à des ressources, conseils et méthodes efficaces pour réussir tes concours et maximiser tes chances d’intégrer l’école de ton choix.',
              icon: '🎓',
              color: 'from-indigo-600 to-violet-700',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative text-center group"
            >
              {index < 2 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-gray-150" />
              )}
              <div className={`relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 text-4xl mb-6 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50/50" />
                <span className="relative">{item.icon}</span>
                <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${item.color} text-white text-xs font-bold flex items-center justify-center shadow`}>
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('#orientation')}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-850 text-white shadow-xl hover:shadow-blue-500/20 transition-all duration-300 text-base px-8 py-6 rounded-xl font-bold"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Commencer mon inscription
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
