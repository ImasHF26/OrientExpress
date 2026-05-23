'use client'


import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo-capfuture.png"
                alt={SITE_CONFIG.name}
                className="h-9 w-auto object-contain"
              />
              <span className="font-extrabold text-white text-base tracking-tight">CAP FUTURE MAROC</span>
            </div>
            <div className="text-sm leading-relaxed mb-0 text-gray-400">
              <p className="mb-1">
                Ton avenir commence par le bon choix.
              </p>
              <p className="font-semibold text-blue-400">
                On t’accompagne vers ton école de rêve au Maroc.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-sm">
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
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Établissements</h4>
            <ul className="space-y-1.5 text-sm font-semibold">
              {[
                { name: 'ENCG', color: 'text-amber-400' },
                { name: 'ENSA', color: 'text-blue-400' },
                { name: 'ENSAM', color: 'text-purple-400' },
                { name: 'Médecine', color: 'text-rose-400' },
                { name: 'ISPITS', color: 'text-emerald-400' },
                { name: 'EST', color: 'text-violet-400' },
              ].map((school) => (
                <li key={school.name} className={`${school.color}`}>
                  {school.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
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
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  )
}
