'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/config'
import { Loader2 } from 'lucide-react'

const NIVEAUX = ['Bac', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5']

export default function OrientationSection() {
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [ville, setVille] = useState('')
  const [niveau, setNiveau] = useState('')
  const [filiere, setFiliere] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const inputClass =
    'w-full bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-4 py-[14px] text-[15px] text-white outline-none font-sans placeholder:text-white/30 transition-all duration-200 focus:border-[#E8871A] focus:shadow-[0_0_0_3px_rgba(232,135,26,0.15)]'

  const labelClass =
    'block text-xs font-bold tracking-[0.07em] uppercase text-white/65 mb-2'

  const openWhatsApp = () => {
    const msg = [
      'Bonjour CAP FUTURE MAROC 👋',
      '',
      'Je souhaite une étude de dossier.',
      '',
      `👤 Nom : ${nom}`,
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

    if (!nom.trim() || !tel.trim() || !ville.trim() || !niveau) {
      setError('Merci de remplir tous les champs obligatoires.')
      return
    }

    setLoading(true)

    try {
      // 1. Sauvegarder en base de données
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nom.trim(),
          telephone: tel.trim(),
          ville: ville.trim(),
          niveau,
          filiere: filiere.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l\'enregistrement.')
      }

      // 2. Ouvrir WhatsApp
      openWhatsApp()

      // 3. Afficher succès
      setSubmitted(true)
    } catch (err) {
      console.error('Erreur:', err)
      // Même si la BDD échoue, on ouvre WhatsApp quand même
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
            Votre profil a été enregistré avec succès, <strong className="text-white">{nom}</strong>.
          </p>
          <p className="text-white/40 text-sm mb-6">
            Notre équipe vous contacte sous 24h. Si la conversation WhatsApp
            s&apos;est ouverte, envoyez le message pour accélérer le processus.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setNom('')
              setTel('')
              setVille('')
              setNiveau('')
              setFiliere('')
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
        className="bg-[#112548] border border-white/10 rounded-[20px] p-8 sm:p-[52px_48px] max-w-[620px] mx-auto relative overflow-hidden"
      >
        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8871A] to-[#F5A03C]" />

        {/* Header */}
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-[14px]">
          ✦ Audit d&apos;orientation
        </div>

        <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-bold text-white mb-2">
          Dossier au millimètre — commencez ici.
        </h2>

        <p className="text-[15px] text-white/50 mb-8 leading-[1.7]">
          Remplissez ce formulaire — notre équipe vous contacte sous 24h pour
          analyser votre profil.
        </p>

        <form onSubmit={handleSubmit} className="space-y-[18px]">
          {/* Nom */}
          <div>
            <label className={labelClass}>👤 Nom complet</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Ex : Mohammed El Amrani"
              required
              className={inputClass}
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className={labelClass}>📱 Téléphone WhatsApp</label>
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
            <label className={labelClass}>📍 Ville</label>
            <input
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              placeholder="Casablanca, Rabat, Fès…"
              required
              className={inputClass}
            />
          </div>

          {/* Niveau — Pills */}
          <div>
            <label className={labelClass}>🎓 Niveau d&apos;études actuel</label>
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

            {/* Filière dynamique */}
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                niveau ? 'max-h-[180px] opacity-100 mt-3.5' : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className="bg-[#E8871A]/[0.07] border border-[#E8871A]/[0.22] rounded-[10px] p-4">
                <label className="block text-[11px] font-bold tracking-[0.08em] uppercase text-[#E8871A] mb-2">
                  ✏️ Précisez votre filière actuelle
                </label>
                <input
                  type="text"
                  value={filiere}
                  onChange={(e) => setFiliere(e.target.value)}
                  placeholder="Ex : Droit privé, Économie, Informatique, Génie civil…"
                  className="w-full bg-white/[0.06] border border-[#E8871A]/[0.22] rounded-lg px-4 py-[13px] text-sm text-white outline-none font-sans placeholder:text-white/30 focus:border-[#E8871A]"
                />
                <p className="text-xs text-[#E8871A]/60 mt-[7px] italic leading-[1.5]">
                  « Hadi important bzzaf — précisez le plus possible pour une
                  analyse complète. »
                </p>
              </div>
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
            className="w-full py-[18px] bg-[#E8871A] text-white font-sans text-base font-bold border-none rounded-[10px] cursor-pointer mt-2 shadow-[0_8px_32px_rgba(232,135,26,0.4)] tracking-[0.02em] hover:bg-[#F5A03C] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enregistrement en cours…
              </>
            ) : (
              'Valider mon profil et lancer mon orientation →'
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
