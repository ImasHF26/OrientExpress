'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Users, MapPin, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Royal Academic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-amber-50/60" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* National Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/60 text-blue-800 text-sm font-semibold mb-6 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              Région Rabat-Salé-Kénitra — Orientation Nationale
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Ton avenir commence{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                ici
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-650 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              ENSA, ENCG, EMI, ENSIAS, ISPITS, EST — accède aux plus prestigieux établissements de ta région et bénéficie de l&apos;accompagnement gratuit de nos conseillers experts.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollTo('#orientation')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-900 text-white shadow-xl hover:shadow-blue-500/20 transition-all duration-300 text-base px-8 py-6 rounded-xl font-bold"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Je veux être orienté
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo('#contact')}
                size="lg"
                variant="outline"
                className="border-2 border-amber-300 text-amber-850 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 text-base px-8 py-6 rounded-xl font-bold"
              >
                Contacter un conseiller
              </Button>
            </div>

            {/* Premium Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-10 mt-12 justify-center lg:justify-start border-t border-gray-200/50 pt-8"
            >
              {[
                { icon: Users, value: '6', label: 'Grandes Écoles' },
                { icon: MapPin, value: 'RSK', label: 'Région Couverte' },
                { icon: Trophy, value: '98%', label: 'Taux de Réussite' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-amber-200 rounded-3xl blur-2xl opacity-40" />
              <img
                src="/banner-capfuture.png"
                alt="CAP FUTURE MAROC Orientation"
                className="relative rounded-2xl shadow-2xl border border-white/50 w-full object-cover"
              />
              
              {/* Floating Prestigious Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-3.5 border-2 border-blue-50/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center font-extrabold text-blue-700 text-sm animate-pulse">
                  ENSA
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800">Sciences Appliquées</span>
                  <p className="text-[10px] text-gray-400 font-semibold">Kénitra</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3.5 border-2 border-amber-50/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center font-extrabold text-amber-700 text-sm animate-pulse">
                  ENCG
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800">Commerce & Gest.</span>
                  <p className="text-[10px] text-gray-400 font-semibold">Kénitra</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity }}
                className="absolute top-1/2 -right-6 bg-white rounded-xl shadow-xl p-3.5 border-2 border-cyan-50/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center font-extrabold text-cyan-700 text-sm animate-pulse">
                  ENSIAS
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800">Info. & IA</span>
                  <p className="text-[10px] text-gray-400 font-semibold">Rabat (Irfane)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
