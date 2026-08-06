import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { Building, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1F3A] text-white">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-28">
        <Link href="/" className="inline-flex items-center gap-2 text-[#E8871A] text-sm font-semibold hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Retour à l&apos;accueil
        </Link>

        <div className="bg-[#112548] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="border-b border-white/10 pb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/30 text-[#E8871A] text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5" /> Transparence & Édition
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Mentions Légales
            </h1>
            <p className="text-sm text-white/50">
              Informations légales concernant l&apos;éditeur et l&apos;hébergeur du site
            </p>
          </div>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">1. Éditeur du site</h2>
            <p>
              Le présent site web <strong>{SITE_CONFIG.name}</strong> est édité par la plateforme d&apos;orientation académique CAP FUTURE MAROC.
            </p>
            <div className="bg-white/5 p-4 rounded-xl space-y-2 border border-white/5 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#E8871A]" />
                <span><strong>Plateforme :</strong> {SITE_CONFIG.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8871A]" />
                <span><strong>Région :</strong> {SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8871A]" />
                <span><strong>Téléphone :</strong> {SITE_CONFIG.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8871A]" />
                <span><strong>E-mail :</strong> {SITE_CONFIG.email}</span>
              </div>
            </div>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">2. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présentés sur ce site (textes, graphismes, logos, icônes, illustrations) sont la propriété exclusive de CAP FUTURE MAROC ou font l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, distribution ou représentation totale ou partielle sans autorisation expresse est interdite.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">3. Clause de non-affiliation Meta</h2>
            <p className="bg-[#0B1F3A] p-4 rounded-xl border border-[#E8871A]/30 text-white/90 text-xs italic">
              Ce site ne fait pas partie du site web Facebook ou de Meta Inc. En outre, ce site n&apos;est pas approuvé par Meta de quelque manière que ce soit. FACEBOOK est une marque déposée de META, Inc.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white">4. Hébergement</h2>
            <p>
              Le site est hébergé sur des serveurs sécurisés conformes aux normes internationales de disponibilité et de cybersécurité.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
