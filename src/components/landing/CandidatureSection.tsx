'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  ArrowRight,
  Phone,
  Clock,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SCHOOLS, SITE_CONFIG } from '@/lib/config'

export default function CandidatureSection() {
  const handlePostuler = (schoolAcronym: string) => {
    // Scroll vers le formulaire d'inscription avec pré-sélection de l'établissement
    const formSection = document.querySelector('#orientation')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
      // Dispatch custom event pour pré-sélectionner l'établissement
      window.dispatchEvent(new CustomEvent('preselect-school', { detail: schoolAcronym }))
    }
  }

  return (
    <section id="candidature" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Établissements de la région
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Les meilleurs établissements de <span className="text-teal-600">Rabat-Salé-Kénitra</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvre les établissements publics et privés de ta région. Compare
            les spécialités, les conditions d&apos;admission et les débouchés professionnels.
          </p>
        </motion.div>

        {/* Schools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOOLS.map((school, index) => (
            <motion.div
              key={school.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Card Header with unique color */}
                <div className={`bg-gradient-to-r ${school.gradient} p-5 text-white relative overflow-hidden`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="bg-white/20 text-white border-white/30 text-xs mb-2">
                          {school.type === 'public' ? 'Établissement Public' : 'Privé'}
                        </Badge>
                        <h3 className="text-lg font-bold">{school.acronym}</h3>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {school.rating} ★
                      </Badge>
                    </div>
                    <p className="text-sm text-white/90 mt-1 leading-snug">{school.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-white/80 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {school.duree}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 space-y-4">
                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">{school.description}</p>

                  {/* Specialities */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Spécialités
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {school.specialites.map((spec) => (
                        <Badge
                          key={spec}
                          variant="secondary"
                          className={`text-xs ${school.badgeBg}`}
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{school.admission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{school.frais}</span>
                    </div>
                  </div>

                  {/* Debouches */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Débouchés
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {school.debouches.map((d) => (
                        <span
                          key={d}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => handlePostuler(school.acronym)}
                      className={`flex-1 bg-gradient-to-r ${school.gradient} hover:opacity-90 text-white text-sm h-10`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      Postuler
                    </Button>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par ${school.acronym} (${school.name}). Pouvez-vous m'aider ?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-200 text-teal-700 hover:bg-teal-50 text-sm h-10"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">
            Tu ne trouves pas ton établissement ? Nos conseillers connaissent toutes
            les options de la région <strong>Rabat-Salé-Kénitra</strong>.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour, je cherche un établissement dans la région Rabat-Salé-Kénitra. Pouvez-vous m\'aider ?')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Parler à un conseiller
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
