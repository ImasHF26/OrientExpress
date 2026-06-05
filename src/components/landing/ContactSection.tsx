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
    action: 'Nous envoyer un e-mail',
    href: `mailto:${SITE_CONFIG.email}`,
    iconBg: 'bg-white/10',
    iconColor: 'text-white',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B1F3A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8871A]/10 border border-[#E8871A]/25 text-[#E8871A] text-xs font-bold tracking-[0.1em] uppercase mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Parle à un conseiller
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto">
            Prends rendez-vous avec un conseiller et bénéficie d&apos;un
            accompagnement personnalisé.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-[#112548] border border-white/10 rounded-2xl hover:border-[#E8871A]/25 hover:shadow-[0_0_30px_rgba(232,135,26,0.06)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${info.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-6`}
              >
                <info.icon className={`w-6 h-6 ${info.iconColor}`} />
              </div>
              <h3 className="text-sm text-white/40 font-semibold uppercase tracking-wider mb-2">
                {info.label}
              </h3>
              <p className="text-lg font-bold text-white mb-4 break-all">
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
          className="flex items-center justify-center gap-2 mt-12 text-sm text-white/40 bg-[#112548] border border-white/10 rounded-full px-6 py-2.5 max-w-xs mx-auto"
        >
          <Clock className="w-4 h-4 text-[#E8871A]" />
          <span className="font-semibold">{SITE_CONFIG.hours}</span>
        </motion.div>
      </div>
    </section>
  )
}
