'use client'

import { useState } from 'react'
import { Calendar, ChevronRight, X } from 'lucide-react'
import { trackCta } from '@/lib/analytics'

export default function CalendarTickerBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const scrollToForm = () => {
    trackCta('banner_concours_cta', 'S\'inscrire avant clôture', 'CalendarBanner')
    const element = document.getElementById('consultation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#0B1F3A] via-[#112D55] to-[#0B1F3A] border-b border-[#E8871A]/30 text-white text-xs py-2.5 px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8871A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8871A]"></span>
          </span>

          <span className="font-bold text-[#E8871A] flex items-center gap-1 shrink-0 uppercase tracking-wide text-[11px]">
            <Calendar className="w-3.5 h-3.5" />
            Concours & Admission 2026 :
          </span>

          <p className="truncate text-white/90 text-xs">
            <strong className="text-white font-semibold">ENCG, ENSA, Médecine, EST & Masters</strong> — Période de constitution et validation des dossiers d&apos;orientation en cours.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={scrollToForm}
            className="hidden sm:flex items-center gap-1 bg-[#E8871A] hover:bg-[#F5A03C] text-white text-[11px] font-bold px-3 py-1 rounded-full transition-all shadow-sm"
          >
            Réserver son bilan <ChevronRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/40 hover:text-white transition-colors"
            title="Fermer la notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
