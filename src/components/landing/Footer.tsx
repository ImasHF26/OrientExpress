'use client'

import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/35">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white/50">CAP FUTURE</span>{' '}
          <span className="text-[#E8871A] font-semibold">MAROC</span> – Tous
          droits réservés.
        </p>
        <div className="flex items-center gap-4 text-xs text-white/25">
          <span className="hover:text-white/40 cursor-pointer transition-colors">
            Mentions légales
          </span>
          <span>•</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">
            Politique de confidentialité
          </span>
          <span>•</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">
            CGU
          </span>
        </div>
      </div>
    </footer>
  )
}
