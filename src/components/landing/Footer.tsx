'use client'

import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-[#071529] text-center py-7 px-6 text-xs text-white/25 border-t border-white/[0.06] font-sans">
      © {new Date().getFullYear()}{' '}
      <span className="text-[#E8871A]">{SITE_CONFIG.name}</span> · Tous droits
      réservés · Service marocain de confiance
    </footer>
  )
}
