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
              ENCG, ENSA, ENSAM, Médecine, ISPITS, EST — accède aux plus prestigieux établissements et bénéficie de l&apos;accompagnement personnalisé de nos conseillers experts.
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

          {/* Right Column: Sophisticated App/Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block mt-12 lg:mt-0 max-w-lg lg:max-w-none mx-auto w-full"
          >
            {/* Elegant glassmorphic device frame */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-indigo-100/50">
              {/* Background glowing gradients */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200 rounded-3xl blur-2xl opacity-30 -z-10" />



              {/* Main Banner Image - perfectly fitted at its natural aspect ratio */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100/80 mb-5 bg-gray-50">
                <img
                  src="/banner-capfuture.png"
                  alt="CAP FUTURE MAROC Orientation"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Interactive Features / Information Board */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    Portail d&apos;Orientation 2026
                  </span>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    Orientation Ouverte
                  </span>
                </div>

                {/* Grid of Prestigious School Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { code: 'ENSA', name: 'Ingénierie', color: 'bg-blue-50/70 text-blue-700 border-blue-100/60' },
                    { code: 'ENCG', name: 'Management', color: 'bg-amber-50/70 text-amber-700 border-amber-100/60' },
                    { code: 'ENSAM', name: 'Arts & Métiers', color: 'bg-purple-50/70 text-purple-700 border-purple-100/60' },
                    { code: 'Médecine', name: 'Santé', color: 'bg-emerald-50/70 text-emerald-700 border-emerald-100/60' },
                    { code: 'ISPITS', name: 'Paramédical', color: 'bg-rose-50/70 text-rose-700 border-rose-100/60' },
                    { code: 'EST', name: 'Technologie', color: 'bg-indigo-50/70 text-indigo-700 border-indigo-100/60' },
                  ].map((school, i) => (
                    <motion.div
                      key={school.code}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className={`p-2.5 rounded-xl border text-center ${school.color} hover:scale-[1.03] transition-transform duration-300 shadow-sm cursor-default`}
                    >
                      <div className="font-extrabold text-xs sm:text-sm">{school.code}</div>
                      <div className="text-[9px] font-semibold opacity-80 mt-0.5">{school.name}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Dashboard bottom stats */}
                <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100/30 rounded-2xl p-3.5 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📈</span>
                    <div>
                      <div className="font-bold text-gray-800">98% Taux d&apos;Admission</div>
                      <div className="text-[10px] text-gray-500 font-medium">Préparation certifiée</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <div>
                      <div className="font-bold text-gray-800">Accompagnement 1:1</div>
                      <div className="text-[10px] text-indigo-600 font-semibold uppercase">Conseillers Experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
