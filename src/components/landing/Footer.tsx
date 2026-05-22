'use client'

import { Heart } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-405 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-capfuture.png"
                alt={SITE_CONFIG.name}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              {SITE_CONFIG.name} — Plateforme d&apos;orientation étudiante pour la région
              Rabat-Salé-Kénitra. ENSA, ENCG, EMI, ENSIAS, ISPITS, EST — nous
              t&apos;accompagnons gratuitement vers le meilleur établissement public.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Accueil', id: '#hero' },
                { label: 'Inscription', id: '#orientation' },
                { label: 'Contact', id: '#contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-blue-400 text-gray-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Établissements */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Établissements</h4>
            <ul className="space-y-2 text-sm font-semibold">
              {[
                { name: 'ENSA — Kénitra', color: 'text-blue-400' },
                { name: 'ENCG — Kénitra', color: 'text-indigo-400' },
                { name: 'EMI — Rabat', color: 'text-cyan-400' },
                { name: 'ENSIAS — Rabat', color: 'text-emerald-400' },
                { name: 'ISPITS — Rabat', color: 'text-teal-400' },
                { name: 'EST — Salé', color: 'text-violet-400' },
              ].map((school) => (
                <li key={school.name} className={`${school.color}`}>
                  {school.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneNumber}`}
                  className="hover:text-blue-400 transition-colors font-semibold text-white"
                >
                  {SITE_CONFIG.phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-blue-400 transition-colors font-semibold"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="font-medium">{SITE_CONFIG.address}</li>
              <li className="text-xs text-gray-500 font-semibold mt-1">
                {SITE_CONFIG.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
            Fait avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> pour les étudiants de {SITE_CONFIG.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
