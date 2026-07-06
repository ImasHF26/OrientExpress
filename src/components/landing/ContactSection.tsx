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
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    iconColor: 'text-white',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: SITE_CONFIG.phoneNumber,
    action: 'Nous appeler directement',
    href: `tel:${SITE_CONFIG.phoneNumber}`,
    iconBg: 'bg-[#E8871A]',
    iconColor: 'text-white',
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    action: 'Envoyer un e-mail',
    href: `mailto:${SITE_CONFIG.email}`,
    iconBg: 'bg-[#0B1F3A]',
    iconColor: 'text-white',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#E8EEF6] border-t border-[#D4DEE8]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A]">
            Parlez directement
            <br />
            à un{' '}
            <span className="text-[#E8871A]">conseiller expert.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={
                info.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mb-5`}
              >
                <info.icon className={`w-5 h-5 ${info.iconColor}`} />
              </div>
              <h3 className="text-xs text-[#0B1F3A]/35 font-semibold uppercase tracking-wider mb-2">
                {info.label}
              </h3>
              <p className="text-sm font-bold text-[#0B1F3A] mb-4 break-all">
                {info.value}
              </p>
              <span className="text-sm font-bold text-[#E8871A] mt-auto">
                {info.action} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-10 text-sm text-[#0B1F3A]/40"
        >
          <Clock className="w-4 h-4 text-[#E8871A]" />
          <span className="font-semibold">{SITE_CONFIG.hours}</span>
        </motion.div>
      </div>
    </section>
  )
}
