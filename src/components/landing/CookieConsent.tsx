'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { initMetaPixel } from '@/lib/metaPixel'
import { ShieldCheck, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('capfuture_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(timer)
    } else if (consent === 'accepted') {
      initMetaPixel()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('capfuture_cookie_consent', 'accepted')
    setShow(false)
    initMetaPixel()
  }

  const handleDecline = () => {
    localStorage.setItem('capfuture_cookie_consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#0D2340]/95 backdrop-blur-xl border border-white/15 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-[#E8871A]/20 flex items-center justify-center shrink-0 text-[#E8871A]">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              Respect de votre vie privée <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </h3>
            <p className="text-xs text-white/70 mt-1 leading-relaxed">
              Nous utilisons des cookies essentiels et analytiques (Meta Pixel) pour mesurer l&apos;audience et améliorer nos services d&apos;orientation. Consultez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#E8871A] underline font-medium hover:text-[#F5A03C]">
                Politique de confidentialité
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-3 bg-[#E8871A] hover:bg-[#F5A03C] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
          >
            Tout accepter
          </button>
          <button
            onClick={handleDecline}
            className="py-2 px-3 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold rounded-xl border border-white/10 transition-all active:scale-95"
          >
            Refuser non-essentiels
          </button>
        </div>
      </div>
    </div>
  )
}
