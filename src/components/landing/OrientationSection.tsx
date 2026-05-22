'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  ClipboardList,
  Phone,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Database,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  SITE_CONFIG,
  FORM_OPTIONS,
  SCHOOLS,
} from '@/lib/config'

interface FormData {
  nom: string
  telephone: string
  niveau: string
  filiere: string
  interet: string
  etablissement: string
}

export default function OrientationSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    telephone: '',
    niveau: '',
    filiere: '',
    interet: 'Général / Non spécifié',
    etablissement: 'Non spécifié',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Écouter l'événement de pré-sélection d'établissement
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent
      const schoolAcronym = customEvent.detail as string
      if (schoolAcronym) {
        setFormData((prev) => ({ ...prev, etablissement: schoolAcronym }))
      }
    }
    window.addEventListener('preselect-school', handler)
    return () => window.removeEventListener('preselect-school', handler)
  }, [])

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.nom.trim() !== '' && formData.telephone.trim() !== ''
      case 1:
        if (formData.niveau === 'Bac') {
          return formData.filiere !== ''
        }
        return formData.niveau !== ''
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const payload = {
        ...formData,
        filiere: formData.filiere || 'Non spécifiée',
      }
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setSubmitError(data.error || 'Erreur lors de l\'inscription.')
      }
    } catch {
      setSubmitError('Erreur de connexion. Vérifiez votre connexion internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    { title: 'Vos informations', icon: ClipboardList },
    { title: 'Votre parcours', icon: GraduationCap },
  ]

  if (submitted) {
    return (
      <section id="orientation" className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200"
          >
            <CheckCircle2 className="w-10 h-10 text-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Félicitations {formData.nom} !
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-4"
          >
            Ton inscription a été validée avec succès. Un conseiller te contactera sous peu pour finaliser ton rendez-vous d&apos;orientation.
          </motion.p>

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto shadow-sm"
          >
            <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-200/60 pb-2">Récapitulatif de candidature :</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Nom :</span>
                <span className="font-semibold text-gray-900">{formData.nom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Téléphone :</span>
                <span className="font-semibold text-gray-900">{formData.telephone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Niveau :</span>
                <span className="font-semibold text-gray-900">{formData.niveau}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Filière :</span>
                <span className="font-semibold text-gray-900">{formData.filiere || 'Non spécifiée'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je suis ${formData.nom} (${formData.telephone}). Je viens de valider ma demande d'orientation sur CAP FUTURE MAROC (Niveau : ${formData.niveau}, Filière : ${formData.filiere || 'Non spécifiée'}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg font-bold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contacter via WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl font-bold border-gray-300"
              onClick={() => {
                setSubmitted(false)
                setCurrentStep(0)
                setFormData({
                  nom: '',
                  telephone: '',
                  niveau: '',
                  filiere: '',
                  interet: 'Général / Non spécifié',
                  etablissement: 'Non spécifié',
                })
              }}
            >
              Nouvelle inscription
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="orientation" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/60 text-blue-800 text-sm font-semibold mb-4">
            Orientation 2026
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Réserve ta place pour l&apos;année prochaine
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Remplis notre formulaire intelligent en quelques étapes rapides et sécurise ton orientation dans ta région.
          </p>
        </motion.div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-1 sm:gap-2">
              <motion.div
                animate={{
                  backgroundColor:
                    i <= currentStep ? '#2563eb' : '#e5e7eb',
                  scale: i === currentStep ? 1.1 : 1,
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm"
              >
                <step.icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i <= currentStep ? 'text-white' : 'text-gray-400'
                  }`}
                />
              </motion.div>
              {i < steps.length - 1 && (
                <div
                  className={`h-0.5 w-6 sm:w-14 transition-colors ${
                    i < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="border-2 border-gray-100 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              {/* Step 0: Personal Info */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Informations personnelles
                    </h3>
                    <p className="text-gray-550 text-sm">
                      Ces informations nous permettront de t&apos;appeler et de valider ton profil.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="font-semibold text-gray-700">Nom complet *</Label>
                      <Input
                        id="nom"
                        placeholder="Ex: Mohamed Amrani"
                        value={formData.nom}
                        onChange={(e) => updateField('nom', e.target.value)}
                        className="h-12 text-base rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="font-semibold text-gray-700">
                        Numéro de téléphone *
                      </Label>
                      <Input
                        id="telephone"
                        type="tel"
                        placeholder="Ex: 06 12 34 56 78"
                        value={formData.telephone}
                        onChange={(e) =>
                          updateField('telephone', e.target.value)
                        }
                        className="h-12 text-base rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Academic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Ton parcours académique
                    </h3>
                    <p className="text-gray-550 text-sm">
                      Ces critères nous aident à filtrer les conditions d&apos;admission des écoles.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-semibold text-gray-700">Niveau d&apos;étude actuel *</Label>
                      <Select
                        value={formData.niveau}
                        onValueChange={(v) => {
                          setFormData((prev) => ({
                            ...prev,
                            niveau: v,
                            filiere: '',
                          }))
                        }}
                      >
                        <SelectTrigger className="h-12 text-base rounded-xl border-gray-200">
                          <SelectValue placeholder="Sélectionne ton niveau" />
                        </SelectTrigger>
                        <SelectContent>
                          {FORM_OPTIONS.niveaux.map((n) => (
                            <SelectItem key={n} value={n}>
                              {n}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filiere" className="font-semibold text-gray-700">
                        Filière d&apos;origine {formData.niveau === 'Bac' ? '*' : '(Optionnelle)'}
                      </Label>
                      {formData.niveau === 'Bac' ? (
                        <Select
                          value={formData.filiere}
                          onValueChange={(v) => updateField('filiere', v)}
                        >
                          <SelectTrigger className="h-12 text-base rounded-xl border-gray-200">
                            <SelectValue placeholder="Sélectionne ta filière" />
                          </SelectTrigger>
                          <SelectContent>
                            {FORM_OPTIONS.filieres.map((f) => (
                              <SelectItem key={f} value={f}>
                                {f}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          id="filiere"
                          placeholder="Ex: Économie, Techniques de Management, etc. (Optionnelle)"
                          value={formData.filiere}
                          onChange={(e) => updateField('filiere', e.target.value)}
                          className="h-12 text-base rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}



              {/* Error message */}
              {submitError && (
                <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-750 text-sm">
                  {submitError}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setCurrentStep(Math.max(0, currentStep - 1))
                  }
                  disabled={currentStep === 0 || isSubmitting}
                  className="text-gray-500 font-semibold rounded-xl"
                >
                  Retour
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!canProceed()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-900 text-white shadow-lg disabled:opacity-50 font-bold rounded-xl px-6"
                  >
                    Continuer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-900 text-white shadow-lg disabled:opacity-50 font-bold rounded-xl px-6"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Database className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? 'Enregistrement...' : 'Valider & sauvegarder'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
