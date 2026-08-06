'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'
import { trackCta } from '@/lib/analytics'
import { trackMetaLead } from '@/lib/metaPixel'
import { Loader2, Lock, Clock, UserCheck, Headphones, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react'

const NIVEAUX = [
  'Bac',
  'Bac+2 OFPPT',
  'BTS',
  'DUT',
  'EST',
  'Bac+2 Privé',
  'DEUG',
  'Licence Fondamentale',
  'Licence Professionnelle',
  "Licence d'excellence",
  "Licence d'Université Spécialisée (LUS)",
  'Bac+4',
  'Autre',
]

const SPECIALITES_BAC = [
  'Sciences Mathématiques A (SMA)',
  'Sciences Mathématiques B (SMB)',
  'Sciences Physiques (PC)',
  'Sciences de la Vie et de la Terre (SVT)',
  'Sciences Économiques',
  'Sciences de Gestion Comptable (SGC)',
  'Sciences Humaines',
  'Lettres',
  'Autre',
]

const SPECIALITES_BAC2 = [
  'Gestion des Entreprises',
  'Finance et Comptabilité',
  'Gestion des Ressources Humaines',
  'Secrétariat de Direction',
  'Commerce et Marketing',
  'Logistique',
  'Management des Organisations',
  'Développement Digital',
  'Réseaux Informatiques',
  'Cybersécurité',
  'Intelligence Artificielle',
  'Autre',
]

const SPECIALITES_BAC3 = [
  'Sciences Économiques et Gestion',
  'Comptabilité Finance et Fiscalité',
  'Management des Organisations',
  'Commerce et Marketing',
  'Management des Ressources Humaines',
  'Management Logistique',
  'Audit et Contrôle de Gestion',
  'Sciences de la Vie et de la Terre',
  'Sciences de la Matière Physique',
  'Sciences Mathématiques et Informatique',
  'Droit',
  'Autre',
]

const ANNEES = Array.from({ length: 10 }, (_, i) => `${2026 - i}`)

export default function OrientationSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [prenom, setPrenom] = useState('')
  const [nomFamille, setNomFamille] = useState('')
  const [tel, setTel] = useState('')
  const [ville, setVille] = useState('')
  const [niveau, setNiveau] = useState('')
  const [filiere, setFiliere] = useState('')
  const [annee, setAnnee] = useState('')
  const [consent, setConsent] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getFiliereOptions = () => {
    if (niveau === 'Bac') return SPECIALITES_BAC
    if (['Bac+2 OFPPT', 'BTS', 'DUT', 'EST', 'Bac+2 Privé', 'DEUG'].includes(niveau)) {
      return SPECIALITES_BAC2
    }
    if (niveau) {
      return SPECIALITES_BAC3
    }
    return []
  }

  const filiereOptions = getFiliereOptions()

  const handleNiveauChange = (val: string) => {
    setNiveau(val)
    setFiliere('')
  }

  const inputClass =
    'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[15px] text-white outline-none font-sans placeholder:text-white/25 transition-all duration-200 focus:border-[#E8871A] focus:shadow-[0_0_0_3px_rgba(232,135,26,0.12)] hover:border-white/[0.18]'

  const selectClass = `${inputClass} appearance-none cursor-pointer`

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat' as const,
    backgroundPosition: 'right 16px center',
  }

  const labelClass = 'block text-sm font-semibold text-white/70 mb-2'

  const goToStep2 = () => {
    setError('')
    const fullName = `${prenom} ${nomFamille}`.trim()
    if (!fullName || !tel.trim() || !ville.trim()) {
      setError('Merci de remplir votre prénom, nom, téléphone et ville.')
      return
    }
    trackCta('form_step_1_next', 'Étape 1 Validée', 'ConsultationForm')
    setCurrentStep(2)
  }

  const openWhatsApp = () => {
    const fullName = `${prenom} ${nomFamille}`.trim()
    const msg = [
      'Bonjour CAP FUTURE MAROC 👋',
      '',
      'Je souhaite réserver ma consultation.',
      '',
      `👤 Nom : ${fullName}`,
      `📍 Ville : ${ville}`,
      `🎓 Niveau : ${niveau}`,
      filiere ? `📚 Filière : ${filiere}` : '',
      annee ? `📅 Année : ${annee}` : '',
      '',
      'Merci !',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const fullName = `${prenom} ${nomFamille}`.trim()

    if (!fullName || !tel.trim() || !ville.trim() || !niveau) {
      setError('Merci de remplir tous les champs obligatoires.')
      return
    }

    if (!consent) {
      setError('Veuillez accepter la politique de confidentialité pour soumettre votre demande.')
      return
    }

    setLoading(true)

    // Fire Meta Ads Pixel Lead event ONLY on submission!
    trackMetaLead({ prenom, niveau, ville })
    trackCta('submit_lead_form', 'Formulaire Réservation Soumis', 'ConsultationForm')

    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: fullName,
          telephone: tel.trim(),
          ville: ville.trim(),
          niveau,
          filiere: filiere.trim(),
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur')

      openWhatsApp()
      setSubmitted(true)
    } catch {
      openWhatsApp()
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="consultation" className="bg-[#0B1F3A] py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#112548] border border-white/10 rounded-2xl p-12 max-w-2xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8871A] to-[#F5A03C]" />
          <div className="text-5xl mb-4">✅</div>
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Demande d&apos;orientation envoyée avec succès !
          </h2>
          <p className="text-white/70 mb-3">
            Votre profil a été transmis avec succès,{' '}
            <strong className="text-white">{prenom}</strong>. Un conseiller CAP FUTURE MAROC vous contactera sous 24h.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setCurrentStep(1)
              setPrenom('')
              setNomFamille('')
              setTel('')
              setVille('')
              setNiveau('')
              setFiliere('')
              setAnnee('')
            }}
            className="text-[#E8871A] font-semibold text-sm hover:underline mt-4 inline-block"
          >
            ← Nouvelle demande d&apos;orientation
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="consultation" className="bg-[#0d2340] py-24 sm:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#112548]/80 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8871A] via-[#F5A03C] to-[#E8871A]" />

          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-3xl block mb-3">🎓</span>
            <h2 className="font-display text-[clamp(22px,4vw,30px)] font-bold text-white mb-2">
              Réservez votre consultation personnalisée
            </h2>
            <p className="text-sm text-white/50 mb-4">
              Votre projet d&apos;études supérieures au Maroc commence ici.
            </p>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-3 max-w-xs mx-auto mb-6">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${currentStep === 1 ? 'bg-[#E8871A] text-white' : 'bg-emerald-500 text-white'}`}>
                  {currentStep > 1 ? <CheckCircle2 className="w-4 h-4" /> : '1'}
                </span>
                <span className={`text-xs font-semibold ${currentStep === 1 ? 'text-white' : 'text-white/50'}`}>Coordonnées</span>
              </div>
              <div className="w-8 h-0.5 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${currentStep === 2 ? 'bg-[#E8871A] text-white' : 'bg-white/10 text-white/40'}`}>
                  2
                </span>
                <span className={`text-xs font-semibold ${currentStep === 2 ? 'text-white' : 'text-white/40'}`}>Parcours</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1_form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">👤</span>
                    <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
                      Étape 1/2 : Informations personnelles
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Prénom *</label>
                        <input
                          type="text"
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                          placeholder="Mohammed"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Nom *</label>
                        <input
                          type="text"
                          value={nomFamille}
                          onChange={(e) => setNomFamille(e.target.value)}
                          placeholder="El Amrani"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="+212 6XX XXX XXX"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Ville de résidence *</label>
                      <input
                        type="text"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                        placeholder="Casablanca, Rabat, Fès, Kénitra..."
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={goToStep2}
                    className="w-full py-4 bg-[#E8871A] text-white font-bold text-base rounded-xl shadow-[0_8px_32px_rgba(232,135,26,0.4)] hover:bg-[#F5A03C] transition-all flex items-center justify-center gap-2"
                  >
                    Suivant : Mon Parcours Académique <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2_form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">📚</span>
                    <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
                      Étape 2/2 : Niveau & Filière
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Niveau d&apos;études actuel *</label>
                      <select
                        value={niveau}
                        onChange={(e) => handleNiveauChange(e.target.value)}
                        required
                        className={selectClass}
                        style={selectStyle}
                      >
                        <option value="" className="bg-[#112548]">
                          Sélectionnez votre niveau…
                        </option>
                        {NIVEAUX.map((n) => (
                          <option key={n} value={n} className="bg-[#112548]">
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Votre filière / Spécialité</label>
                      <select
                        value={filiere}
                        onChange={(e) => setFiliere(e.target.value)}
                        disabled={!niveau}
                        className={`${selectClass} ${!niveau ? 'opacity-50 cursor-not-allowed' : ''}`}
                        style={selectStyle}
                      >
                        <option value="" className="bg-[#112548]">
                          {niveau ? 'Sélectionnez votre filière…' : "Sélectionnez d'abord votre niveau…"}
                        </option>
                        {filiereOptions.map((f) => (
                          <option key={f} value={f} className="bg-[#112548]">
                            {f}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Année d&apos;obtention</label>
                      <select
                        value={annee}
                        onChange={(e) => setAnnee(e.target.value)}
                        className={selectClass}
                        style={selectStyle}
                      >
                        <option value="" className="bg-[#112548]">
                          Sélectionnez l&apos;année…
                        </option>
                        {ANNEES.map((a) => (
                          <option key={a} value={a} className="bg-[#112548]">
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Meta RGPD Compliance Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 text-xs text-white/70 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-white/20 text-[#E8871A] focus:ring-[#E8871A] bg-white/10"
                        />
                        <span>
                          J&apos;accepte la{' '}
                          <Link href="/politique-de-confidentialite" className="text-[#E8871A] underline font-semibold">
                            politique de confidentialité
                          </Link>{' '}
                          et autorise CAP FUTURE MAROC à me contacter par téléphone ou WhatsApp pour l&apos;étude de mon dossier.
                        </span>
                      </label>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="py-4 px-4 bg-white/5 hover:bg-white/10 text-white/70 font-semibold text-sm rounded-xl border border-white/10 transition-all flex items-center gap-1 shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" /> Retour
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-4 bg-[#E8871A] text-white font-bold text-base rounded-xl shadow-[0_8px_32px_rgba(232,135,26,0.4)] hover:bg-[#F5A03C] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          <span>🚀</span>
                          Confirmer ma demande de consultation
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
            {[
              { icon: Lock, text: 'Données confidentielles' },
              { icon: Clock, text: 'Réponse sous 24h' },
              { icon: UserCheck, text: 'Analyse personnalisée' },
              { icon: Headphones, text: 'Accompagnement individuel' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center gap-1.5 text-center py-2"
              >
                <badge.icon className="w-4 h-4 text-[#E8871A]/70" />
                <span className="text-[11px] text-white/40 leading-tight">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
