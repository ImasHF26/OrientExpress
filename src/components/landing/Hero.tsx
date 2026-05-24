'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, MapPin } from 'lucide-react'
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
        {/* National Trust Badge */}
        <div className="flex justify-center lg:justify-start mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/60 text-blue-800 text-sm font-semibold shadow-sm"
          >
            <MapPin className="w-4 h-4 text-blue-600" />
            Région Rabat-Salé-Kénitra — Orientation Nationale
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:items-stretch items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left flex flex-col justify-center lg:col-span-5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Ton avenir commence{' '}
              <span className="text-blue-700">
                ici
              </span>
            </h1>

            <div className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              <span className="text-gray-900 font-extrabold text-xl sm:text-2xl block mb-1">
                Construis ton avenir dès aujourd’hui
              </span>
              <span className="text-blue-600 font-bold block mb-2 text-base sm:text-lg">
                Orientation &amp; Accompagnement Personnalisé
              </span>
              <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent font-black block mb-4 tracking-wide text-sm sm:text-base uppercase border-y border-gray-100 py-1.5 inline-block">
                ENCG • ENSA • ENSAM • Médecine • ISPITS • EST
              </span>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
                Profite d’un accompagnement stratégique avec nos conseillers experts pour faire les meilleurs choix d’orientation et maximiser tes chances de réussite.
              </p>
            </div>

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
                className="border-2 border-blue-200 text-blue-800 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-base px-8 py-6 rounded-xl font-bold"
              >
                Contacter un conseiller
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Premium Banner Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block mt-12 lg:mt-0 max-w-lg lg:max-w-none mx-auto w-full lg:col-span-7 lg:h-full"
          >
            <div className="relative lg:h-full flex items-center justify-center">
              {/* Premium Background glowing gradients */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200 rounded-3xl blur-2xl opacity-35" />

              {/* Main Banner Image - perfectly fitted and never cropped */}
              <img
                src="/banner-capfuture.png"
                alt="CAP FUTURE MAROC Orientation"
                className="relative rounded-2xl shadow-2xl border border-white/50 w-full h-auto object-contain block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
