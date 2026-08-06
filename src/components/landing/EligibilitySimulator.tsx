'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles, ArrowRight, RotateCcw, GraduationCap, Building2 } from 'lucide-react'
import { trackCta } from '@/lib/analytics'

export default function EligibilitySimulator() {
  const [step, setStep] = useState(1)
  const [niveau, setNiveau] = useState('')
  const [moyenne, setMoyenne] = useState('')
  const [domaine, setDomaine] = useState('')

  const handleSelectNiveau = (val: string) => {
    setNiveau(val)
    setStep(2)
    trackCta(`sim_niveau_${val}`, `Simulateur Niveau: ${val}`, 'EligibilitySimulator')
  }

  const handleSelectMoyenne = (val: string) => {
    setMoyenne(val)
    setStep(3)
    trackCta(`sim_moyenne_${val}`, `Simulateur Note: ${val}`, 'EligibilitySimulator')
  }

  const handleSelectDomaine = (val: string) => {
    setDomaine(val)
    setStep(4)
    trackCta(`sim_domaine_${val}`, `Simulateur Domaine: ${val}`, 'EligibilitySimulator')
  }

  const reset = () => {
    setStep(1)
    setNiveau('')
    setMoyenne('')
    setDomaine('')
  }

  const scrollToForm = () => {
    trackCta('sim_to_consultation_form', 'Valider dossier via Simulateur', 'EligibilitySimulator')
    const el = document.getElementById('consultation')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="simulateur" className="py-20 bg-[#0B1F3A] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/30 text-[#E8871A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Diagnostic Express 2026
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Simulateur d&apos;Éligibilité aux Grandes Écoles & Masters
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto">
            Évaluez vos opportunités d&apos;admission en 3 clics et découvrez les établissements adaptés à votre profil.
          </p>
        </motion.div>

        <div className="bg-[#112548]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step === i
                      ? 'bg-[#E8871A] text-white shadow-lg scale-110'
                      : step > i
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
                </div>
                {i < 3 && <div className={`w-12 h-0.5 ${step > i ? 'bg-emerald-500' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-6">
                  1. Quel est votre niveau d&apos;études actuel ?
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Baccalauréat (Terminal)', icon: GraduationCap },
                    { label: 'Bac+2 (OFPPT, EST, BTS, DEUG)', icon: Building2 },
                    { label: 'Licence (Fondamentale/Pro)', icon: GraduationCap },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSelectNiveau(item.label)}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8871A] hover:bg-[#E8871A]/10 text-white text-sm font-semibold text-left transition-all group flex flex-col gap-3"
                    >
                      <item.icon className="w-6 h-6 text-[#E8871A] group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-6">
                  2. Quelle est votre moyenne ou mention estimée ?
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: '10 à 12 (Passable)', sub: 'Filières courtes & EST/OFPPT/Licences' },
                    { label: '12 à 14 (Assez Bien)', sub: 'Écoles d\'ingénieurs, ENCG & EST' },
                    { label: '14 et plus (Bien / Très Bien)', sub: 'Accès direct Concours ENCG/ENSA/Médecine' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSelectMoyenne(item.label)}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8871A] hover:bg-[#E8871A]/10 text-white text-sm font-semibold text-left transition-all group"
                    >
                      <div className="font-bold text-[#E8871A] mb-1">{item.label}</div>
                      <div className="text-xs text-white/50">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-6">
                  3. Quel domaine vous intéresse le plus ?
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    'Commerce, Management & Finance',
                    'Informatique, Web & Cybersécurité',
                    'Ingénierie & Technologie',
                    'Santé, Médical & Paramédical',
                  ].map((d) => (
                    <button
                      key={d}
                      onClick={() => handleSelectDomaine(d)}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8871A] hover:bg-[#E8871A]/10 text-white text-xs font-semibold text-center transition-all"
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl">
                  🎯
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    Éligibilité Confirmée
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Votre profil ({niveau} · {moyenne}) présente d&apos;excellentes opportunités !
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto mt-2">
                    Nous avons identifié au moins <strong className="text-[#E8871A]">4 établissements et Masters éligibles</strong> dans le domaine <span className="text-white font-semibold">&ldquo;{domaine}&rdquo;</span>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={scrollToForm}
                    className="w-full sm:w-auto py-3.5 px-8 bg-[#E8871A] hover:bg-[#F5A03C] text-white font-bold text-sm rounded-xl shadow-[0_8px_25px_rgba(232,135,26,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    Réserver mon étude de dossier personnalisée <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={reset}
                    className="py-3.5 px-5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-xs font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Refaire le test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
