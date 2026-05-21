'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const testimonials = [
  {
    name: 'Fatima Zahra',
    parcours: 'Bac SM → ENSA Kénitra',
    text: "J'étais indécise entre l'ENSA et l'EST Salé. Mon conseiller m'a expliqué les différences entre les deux programmes et les débouchés de chacun. Aujourd'hui je suis en 2ème année Génie Informatique à l'ENSA et je suis ravie de mon choix !",
    rating: 5,
    initial: 'FZ',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    name: 'Youssef',
    parcours: 'CPGE → EMI Rabat',
    text: "Mon rêve était l'EMI mais je ne savais pas comment préparer le Concours National Commun. OrientExpress m'a mis en contact avec un ancien élève de l'EMI qui m'a donné des conseils précieux. Je suis maintenant en première année !",
    rating: 5,
    initial: 'Y',
    color: 'from-teal-400 to-emerald-500',
  },
  {
    name: 'Amina',
    parcours: 'Bac SVT → ISPITS Rabat',
    text: "Je voulais travailler dans la santé mais je ne connaissais pas l'ISPITS. Grâce à OrientExpress, j'ai découvert cette formation publique et les conditions d'admission. Le formulaire était super simple à remplir et j'ai été contactée le lendemain par un conseiller !",
    rating: 5,
    initial: 'A',
    color: 'from-emerald-400 to-green-500',
  },
]

const faqs = [
  {
    question: 'Quels sont les établissements couverts par OrientExpress ?',
    answer:
      "Nous couvrons les principaux établissements de la région Rabat-Salé-Kénitra : EMI (Rabat), ENSA (Kénitra), ENCG (Témara), ENSAM (Meknès), ISPITS (Rabat) et EST (Salé). Nous pouvons aussi t'orienter vers d'autres établissements sur demande.",
  },
  {
    question: 'Comment sont sauvegardées mes données ?',
    answer:
      "Tes données sont sauvegardées automatiquement dans notre base de données sécurisée (SQLite). Tes informations personnelles sont protégées et ne sont partagées qu'avec ton consentement. Tu peux demander la suppression de tes données à tout moment en nous contactant sur WhatsApp.",
  },
  {
    question: 'Le service est-il gratuit ?',
    answer:
      "Oui, le service d'orientation est entièrement gratuit pour les étudiants. Nous sommes rémunérés par les établissements partenaires. Tu ne paies rien pour bénéficier de notre accompagnement.",
  },
  {
    question: 'Combien de temps pour être contacté par un conseiller ?',
    answer:
      "Après avoir rempli le formulaire, un conseiller te contacte sous 24 à 48 heures. Si tu as besoin d'une réponse plus rapide, tu peux nous écrire directement sur WhatsApp à tout moment.",
  },
  {
    question: 'Quelles sont les conditions d\'admission à l\'EMI ?',
    answer:
      "L'EMI recrute via le Concours National Commun (CNC) après 2 ans de Classes Préparatoires (MPSI, PCSI, TSI). C'est l'une des écoles les plus sélectives du Maroc. Un score élevé au CNC est nécessaire pour intégrer les filières les plus demandées comme le Génie Informatique.",
  },
  {
    question: 'Comment accéder à l\'ENSA Kénitra avec un Bac ?',
    answer:
      "L'ENSA Kénitra propose un accès direct après Bac S/SM via un concours d'entrée spécifique, ainsi qu'un accès après Classes Préparatoires via le CNC. Les frais d'inscription sont très abordables (~3 000 MAD/an) car c'est un établissement public.",
  },
  {
    question: 'Puis-je changer d\'établissement après inscription ?',
    answer:
      "Absolument ! L'inscription sur OrientExpress n'est pas un engagement. Tu peux changer d'avis à tout moment. Contacte simplement ton conseiller par WhatsApp pour explorer d'autres options dans la région.",
  },
]

export default function TestimonialsAndFAQ() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ils ont trouvé leur voie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des étudiants de la région <strong>Rabat-Salé-Kénitra</strong> qui
              ont réussi leur orientation grâce à notre accompagnement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-teal-200 mb-4" />
                  <p className="text-gray-600 leading-relaxed flex-1 text-sm sm:text-base">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.parcours}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-600"
          >
            {[
              'Région Rabat-Salé-Kénitra',
              'Établissements publics',
              'Données sauvegardées',
              'Service 100% gratuit',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que tu dois savoir sur l&apos;orientation dans la région.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-gray-900 py-5 hover:no-underline hover:text-teal-600 transition-colors">
                    <span className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-teal-500 shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA after FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-2">
              Tu as d&apos;autres questions ?
            </h3>
            <p className="text-teal-100 mb-6">
              Nos conseillers connaissent parfaitement les établissements de la
              région et peuvent répondre à toutes tes questions.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document.querySelector('#orientation')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-teal-700 hover:bg-teal-50 shadow-lg font-semibold"
            >
              Démarrer mon inscription
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
