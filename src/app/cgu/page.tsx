import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { FileText, ArrowLeft } from 'lucide-react'

export default function CGU() {
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
              <FileText className="w-3.5 h-3.5" /> Conditions du Service
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Conditions Générales d&apos;Utilisation (CGU)
            </h1>
            <p className="text-sm text-white/50">
              Règles régissant l&apos;utilisation des services de conseil et d&apos;orientation CAP FUTURE MAROC
            </p>
          </div>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">1. Objet du service</h2>
            <p>
              CAP FUTURE MAROC propose des prestations d&apos;orientation académique, d&apos;étude de dossier et d&apos;accompagnement personnalisé pour l&apos;accès aux écoles supérieures (ENCG, ENSA, ENSAM, FMP, EST, ISPITS, Masters publics et privés au Maroc).
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">2. Nature du conseil académique</h2>
            <p>
              L&apos;analyse de dossier et les recommandations fournies par nos conseillers visent à maximiser les chances d&apos;admission du candidat. L&apos;admission finale reste toutefois sous la responsabilité et la décision exclusive des commissions de sélection des établissements universitaires et grandes écoles.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-white">3. Engagements de l&apos;utilisateur</h2>
            <p>
              En complétant le formulaire de consultation, l&apos;utilisateur s&apos;engage à fournir des informations exactes et sincères concernant son identité, son numéro de téléphone et ses notes académiques afin de permettre un diagnostic précis.
            </p>
          </section>

          <section className="space-y-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white">4. Modification des conditions</h2>
            <p>
              CAP FUTURE MAROC se réserve le droit de modifier les présentes CGU à tout moment afin de s&apos;adapter aux évolutions législatives et opérationnelles.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
