'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/config'
import { Loader2 } from 'lucide-react'

const NIVEAUX = ['Bac', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5']

const FILIERES = [
  'Droit privé',
  'Droit public',
  'Économie & Gestion',
  'Sciences de la Matière Physique',
  'Sciences de la Matière Chimie',
  'Sciences de la Vie',
  'Informatique / SMI',
  'Mathématiques / SMA',
  'Génie Civil',
  'Génie Électrique',
  'Génie Mécanique',
  'Génie Informatique',
  'Lettres & Sciences Humaines',
  'Autre',
]

type TabType = 'licence' | 'master' | 'ingenieur'

export default function OrientationSection() {
  const [activeTab, setActiveTab] = useState<TabType>('licence')
  const [prenom, setPrenom] = useState('')
  const [nomFamille, setNomFamille] = useState('')
  const [tel, setTel] = useState('')
  const [ville, setVille] = useState('')
  const [filiere, setFiliere] = useState('')
  const [niveau, setNiveau] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const inputClass =
    'w-full bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-4 py-[14px] text-[15px] text-white outline-none font-sans placeholder:text-white/30 transition-all duration-200 focus:border-[#E8871A] focus:shadow-[0_0_0_3px_rgba(232,135,26,0.15)]'

  const labelClass =
    'block text-xs font-bold tracking-[0.07em] uppercase text-white/65 mb-2'

  const tabLabels: Record<TabType, string> = {
    licence: 'Licence +3',
    ingenieur: 'Écoles',
    master: 'Master',
  }

  const openWhatsApp = () => {
    const fullName = `${prenom} ${nomFamille}`.trim()
    const msg = [
      'Bonjour CAP FUTURE MAROC 👋',
      '',
      `Je souhaite une étude de dossier (${tabLabels[activeTab]}).`,
      '',
      `👤 Nom : ${fullName}`,
      `📍 Ville : ${ville}`,
      `🎓 Niveau : ${niveau}`,
      filiere ? `📚 Filière : ${filiere}` : '',
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

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'enregistrement.")
      }

      openWhatsApp()
      setSubmitted(true)
    } catch (err) {
      console.error('Erreur:', err)
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
          className="bg-[#112548] border border-white/10 rounded-[20px] p-12 max-w-[620px] mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8871A] to-[#F5A03C]" />
          <div className="text-5xl mb-4">✅</div>
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Demande envoyée !
          </h2>
          <p className="text-white/55 mb-3">
            Votre profil a été enregistré avec succès,{' '}
            <strong className="text-white">{prenom}</strong>.
          </p>
          <p className="text-white/40 text-sm mb-6">
            Notre équipe vous contacte sous 24h. Si la conversation WhatsApp
            s&apos;est ouverte, envoyez le message pour accélérer le processus.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setPrenom('')
              setNomFamille('')
              setTel('')
              setVille('')
              setFiliere('')
              setNiveau('')
            }}
            className="text-[#E8871A] font-semibold text-sm hover:underline"
          >
            ← Nouvelle demande
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="consultation" className="bg-[#0B1F3A] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#112548] border border-white/10 rounded-[20px] p-8 sm:p-[48px] max-w-[660px] mx-auto relative overflow-hidden"
      >
        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8871A] to-[#F5A03C]" />

        {/* Header */}
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3">
          ✦ Consultation gratuite
        </div>

        <h2 className="font-display text-[clamp(22px,3.5vw,30px)] font-bold text-white mb-2">
          Dossier au millimètre —
          <br />
          commencez ici.
        </h2>

        <p className="text-[14px] text-white/50 mb-6 leading-[1.7]">
          Remplissez ce formulaire — notre équipe vous contacte sous 24h pour
          analyser votre profil.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(Object.keys(tabLabels) as TabType[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#E8871A] text-white shadow-[0_4px_16px_rgba(232,135,26,0.3)]'
                  : 'bg-white/[0.06] border border-white/[0.1] text-white/40 hover:text-white/60'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Prénom + Nom côte à côte */}
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

          {/* Téléphone */}
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

          {/* Ville */}
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

          {/* Filière */}
          <div>
            <label className={labelClass}>Filière de la licence</label>
            <select
              value={filiere}
              onChange={(e) => setFiliere(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center',
              }}
            >
              <option value="" className="bg-[#112548] text-white/50">
                Choisissez votre filière…
              </option>
              {FILIERES.map((f) => (
                <option key={f} value={f} className="bg-[#112548] text-white">
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Niveau — Pills */}
          <div>
            <label className={labelClass}>
              Année d&apos;obtention du bac
            </label>
            <div className="grid grid-cols-3 gap-2">
              {NIVEAUX.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setNiveau(n)}
                  className={`py-[11px] px-1.5 text-[13px] font-semibold rounded-lg border cursor-pointer transition-all duration-200 font-sans ${
                    niveau === n
                      ? 'bg-[#E8871A] border-[#E8871A] text-white shadow-[0_4px_16px_rgba(232,135,26,0.35)]'
                      : 'bg-white/[0.06] border-white/[0.12] text-white/50 hover:border-white/25 hover:text-white/70'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-[16px] bg-[#E8871A] text-white font-sans text-sm font-bold border-none rounded-[10px] cursor-pointer mt-2 shadow-[0_8px_32px_rgba(232,135,26,0.4)] tracking-[0.02em] hover:bg-[#F5A03C] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enregistrement en cours…
              </>
            ) : (
              'Valider mon profil et réserver mon étude de dossier →'
            )}
          </button>
        </form>

        <p className="text-center text-xs text-white/30 mt-[14px]">
          🔒 Données confidentielles · ✔ Gratuit · ✔ Réponse sous 24h
        </p>
      </motion.div>
    </section>
  )
}
