'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/config'
import { Loader2, Lock, Clock, UserCheck, Headphones } from 'lucide-react'

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
  const [prenom, setPrenom] = useState('')
  const [nomFamille, setNomFamille] = useState('')
  const [tel, setTel] = useState('')
  const [ville, setVille] = useState('')
  const [niveau, setNiveau] = useState('')
  const [filiere, setFiliere] = useState('')
  const [annee, setAnnee] = useState('')
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

    setLoading(true)

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
            Demande envoyée !
          </h2>
          <p className="text-white/55 mb-3">
            Votre profil a été enregistré,{' '}
            <strong className="text-white">{prenom}</strong>. Un conseiller vous
            contactera sous 24h.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setPrenom('')
              setNomFamille('')
              setTel('')
              setVille('')
              setNiveau('')
              setFiliere('')
              setAnnee('')
            }}
            className="text-[#E8871A] font-semibold text-sm hover:underline mt-4"
          >
            ← Nouvelle demande
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
          <div className="text-center mb-10">
            <span className="text-3xl block mb-3">✨</span>
            <h2 className="font-display text-[clamp(22px,4vw,30px)] font-bold text-white mb-2">
              Réservez votre consultation personnalisée
            </h2>
            <p className="text-sm text-white/50 mb-1">
              Votre projet d&apos;études commence ici.
            </p>
            <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
              Complétez le formulaire en quelques minutes. Un conseiller
              analysera votre profil et vous contactera sous 24 heures.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* === Section: Infos perso === */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">👤</span>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
                  Informations personnelles
                </h3>
              </div>
              <p className="text-xs text-white/35 mb-5">
                Ces informations nous permettront de préparer votre étude de
                dossier.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Prénom</label>
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
                    <label className={labelClass}>Nom</label>
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
                  <label className={labelClass}>Téléphone (WhatsApp)</label>
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
                  <label className={labelClass}>Ville</label>
                  <input
                    type="text"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    placeholder="Casablanca, Rabat, Fès…"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/[0.06]" />

            {/* === Section: Parcours === */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🎓</span>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
                  Votre parcours académique
                </h3>
              </div>
              <p className="text-xs text-white/35 mb-5">
                Quel est votre niveau d&apos;études ?
              </p>

              <div className="space-y-4">
                <div>
                  <label className={labelClass}>
                    Niveau d&apos;études actuel
                  </label>
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
                  <label className={labelClass}>Votre filière</label>
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
                  <label className={labelClass}>
                    Année d&apos;obtention
                  </label>
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
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#E8871A] text-white font-bold text-base rounded-xl shadow-[0_8px_32px_rgba(232,135,26,0.4)] hover:bg-[#F5A03C] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <span>🚀</span>
                  Je réserve ma consultation
                </>
              )}
            </button>
          </form>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { icon: Lock, text: 'Données confidentielles' },
              { icon: Clock, text: 'Réponse sous 24h' },
              { icon: UserCheck, text: 'Analyse personnalisée' },
              { icon: Headphones, text: 'Accompagnement individuel' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center gap-1.5 text-center py-3"
              >
                <badge.icon className="w-4 h-4 text-[#E8871A]/60" />
                <span className="text-[11px] text-white/30 leading-tight">
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
