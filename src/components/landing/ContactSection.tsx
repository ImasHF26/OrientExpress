'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

const formatWhatsAppNumber = (num: string) => {
  const core = num.startsWith('212') ? num.slice(3) : num
  if (core.length === 9) {
    return `+212 ${core.slice(0, 1)} ${core.slice(1, 3)} ${core.slice(3, 5)} ${core.slice(5, 7)} ${core.slice(7, 9)}`
  }
  return `+212 ${core}`
}

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: formatWhatsAppNumber(SITE_CONFIG.whatsappNumber),
    action: 'Démarrer une discussion',
    href: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite prendre rendez-vous pour mon orientation.')}`,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-600 group-hover:text-green-700',
    hoverShadow: 'hover:shadow-green-500/10',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: SITE_CONFIG.phoneNumber,
    action: 'Nous appeler directement',
    href: `tel:${SITE_CONFIG.phoneNumber}`,
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-600 group-hover:text-blue-700',
    hoverShadow: 'hover:shadow-blue-500/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    action: 'Nous envoyer un e-mail',
    href: `mailto:${SITE_CONFIG.email}`,
    color: 'from-indigo-600 to-violet-700',
    textColor: 'text-indigo-600 group-hover:text-indigo-700',
    hoverShadow: 'hover:shadow-indigo-500/10',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/60 text-blue-800 text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Parle à un conseiller
          </h2>
          <p className="text-lg text-gray-650 max-w-xl mx-auto">
            Prends rendez-vous avec un conseiller et bénéficie d’un accompagnement personnalisé pour réussir ton orientation et ton admission.
          </p>
        </motion.div>

        {/* 3-Column Premium Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl ${info.hoverShadow} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-6`}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-2">
                {info.label}
              </h3>
              <p className="text-lg font-bold text-gray-900 mb-4 break-all">
                {info.value}
              </p>
              <span className={`text-sm font-bold transition-colors mt-auto flex items-center gap-1 ${info.textColor}`}>
                {info.action} &rarr;
              </span>
            </motion.a>
          ))}
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-12 text-sm text-gray-500 bg-white border border-gray-100 rounded-full px-6 py-2.5 max-w-xs mx-auto shadow-sm"
        >
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-gray-600">{SITE_CONFIG.hours}</span>
        </motion.div>
      </div>
    </section>
  )
}
