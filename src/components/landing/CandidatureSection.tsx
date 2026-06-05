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
import { SCHOOLS, SITE_CONFIG } from '@/lib/config'

const schoolEmojis: Record<string, string> = {
  encg: '🏛️',
  ensa: '⚙️',
  ensam: '🔧',
  medecine: '🩺',
  ispits: '💉',
  est: '💻',
}

export default function CandidatureSection() {
  const handlePostuler = (schoolAcronym: string) => {
    const formSection = document.querySelector('#orientation')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('preselect-school', { detail: schoolAcronym }))
    }
  }

  return (
    <section id="candidature" className="py-24 sm:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/20 text-[#FFD600] text-sm font-semibold mb-4">
            Nos Établissements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Les meilleures écoles publiques{' '}
            <span className="text-[#FFD600]">au Maroc</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvre les établissements publics de ta région. Compare les spécialités,
            les conditions d&apos;admission et les débouchés professionnels.
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
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FFD600]/30 hover:shadow-[0_0_40px_rgba(255,214,0,0.08)] transition-all duration-500">
                {/* Header */}
                <div className="p-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-[#FFD600]/10 flex items-center justify-center text-2xl group-hover:bg-[#FFD600]/20 group-hover:scale-110 transition-all duration-300">
                      {schoolEmojis[school.slug] || '🎓'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">{school.acronym}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFD600]/10 text-[#FFD600] border border-[#FFD600]/20 font-medium">
                          {school.type === 'public' ? 'Public' : 'Privé'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{school.name}</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-gray-500 leading-relaxed">{school.description}</p>

                  {/* Specialties */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Spécialités
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {school.specialites.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="bg-white/5 text-gray-300 text-xs px-2.5 py-1 rounded-lg border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                      {school.specialites.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{school.specialites.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <GraduationCap className="w-4 h-4 text-[#FFD600] shrink-0" />
                      <span>{school.admission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4 text-[#FFD600] shrink-0" />
                      <span>{school.duree}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Building2 className="w-4 h-4 text-[#FFD600] shrink-0" />
                      <span>{school.frais}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => handlePostuler(school.acronym)}
                      className="flex-1 bg-[#FFD600] text-[#0F0F0F] hover:bg-[#E6C200] font-bold text-sm h-10 rounded-xl shadow-[0_0_15px_rgba(255,214,0,0.15)]"
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
                        className="border-white/10 text-gray-400 hover:border-[#FFD600]/30 hover:text-[#FFD600] text-sm h-10 rounded-xl bg-transparent"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
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
            les options disponibles.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour, je cherche un établissement. Pouvez-vous m\'aider ?')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#FFD600] text-[#0F0F0F] hover:bg-[#E6C200] font-bold shadow-[0_0_20px_rgba(255,214,0,0.2)] rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Parler à un conseiller
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
