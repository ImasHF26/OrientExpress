import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react'

export default function PolitiqueConfidentialite() {
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
              <ShieldCheck className="w-3.5 h-3.5" /> Conformité RGPD & Loi 09-08
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Politique de Confidentialité
            </h1>
            <p className="text-sm text-white/50">
              Dernière mise à jour : Février 2026 — CAP FUTURE MAROC
            </p>
          </div>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#E8871A]" /> 1. Collecte des données personnelles
            </h2>
            <p>
              CAP FUTURE MAROC s&apos;engage à protéger la vie privée des utilisateurs de sa plateforme d&apos;orientation académique. Dans le cadre de l&apos;utilisation de nos services et formulaires de consultation, nous pouvons être amenés à collecter les données suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/70">
              <li>Identité : Prénom et Nom de famille.</li>
              <li>Coordonnées : Numéro de téléphone et identifiant WhatsApp.</li>
              <li>Localisation : Ville de résidence au Maroc.</li>
              <li>Parcours académique : Niveau d&apos;études (Bac, Bac+2, Licence), filières et années d&apos;obtention.</li>
            </ul>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">2. Finalité du traitement des données</h2>
            <p>
              Les données personnelles recueillies font l&apos;objet d&apos;un traitement informatique destiné exclusivement à :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/70">
              <li>L&apos;analyse et l&apos;étude de dossier de candidature ou d&apos;orientation.</li>
              <li>La prise de contact par un conseiller d&apos;orientation (via appel téléphonique ou message WhatsApp sous 24h).</li>
              <li>L&apos;optimisation de la qualité du service et le suivi des statistiques de consultation (Meta Pixel / Analytics anonymisées).</li>
            </ul>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">3. Protection et non-cession des données</h2>
            <p>
              Vos informations personnelles ne sont en aucun cas vendues, louées ou cédées à des tiers commerciaux. Elles sont strictement réservées à l&apos;équipe de conseillers de CAP FUTURE MAROC.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">4. Vos droits (Loi 09-08 & RGPD)</h2>
            <p>
              Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données vous concernant.
            </p>
            <p>
              Pour exercer ce droit, vous pouvez nous contacter directement par e-mail à :{' '}
              <a href="mailto:capfuturemaroc@gmail.com" className="text-[#E8871A] font-semibold underline">
                capfuturemaroc@gmail.com
              </a>.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white">5. Cookies et Suivi Meta Ads</h2>
            <p>
              Notre site utilise des cookies de mesure d&apos;audience (Meta Pixel) afin d&apos;analyser le comportement de navigation et d&apos;optimiser nos campagnes publicitaires. Vous pouvez à tout moment personnaliser vos choix de cookies via le bandeau de consentement présent sur notre site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
