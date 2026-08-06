'use client'

import Link from 'next/link'
import { trackCta } from '@/lib/analytics'

export default function Footer() {
  return (
    <footer className="bg-[#071527] border-t border-white/[0.08] py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white/70">CAP FUTURE</span>{' '}
            <span className="text-[#E8871A] font-semibold">MAROC</span> – Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/50">
            <Link
              href="/mentions-legales"
              onClick={() => trackCta('footer_mentions', 'Mentions légales', 'Footer')}
              className="hover:text-[#E8871A] transition-colors"
            >
              Mentions légales
            </Link>
            <span>•</span>
            <Link
              href="/politique-de-confidentialite"
              onClick={() => trackCta('footer_privacy', 'Politique de confidentialité', 'Footer')}
              className="hover:text-[#E8871A] transition-colors"
            >
              Politique de confidentialité
            </Link>
            <span>•</span>
            <Link
              href="/cgu"
              onClick={() => trackCta('footer_cgu', 'CGU', 'Footer')}
              className="hover:text-[#E8871A] transition-colors"
            >
              CGU
            </Link>
          </div>
        </div>

        {/* Official Meta Disclaimer Required by Meta Ads Policies */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-[11px] text-white/30 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-white/40">Avertissement Meta Ads :</strong> Ce site ne fait pas partie du site web Facebook ou de Meta Inc. En outre, ce site n&apos;est pas approuvé par Meta de quelque manière que ce soit. FACEBOOK est une marque déposée de META, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
