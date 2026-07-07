'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

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
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A]">
            Parlez directement
            <br />
            à un{' '}
            <span className="text-[#E8871A] italic">conseiller.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite réserver une consultation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-5">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xs text-[#0B1F3A]/35 font-semibold uppercase tracking-wider mb-2">
              📱 WhatsApp
            </h3>
            <p className="text-sm font-bold text-[#0B1F3A] mb-4">
              {SITE_CONFIG.phoneNumber}
            </p>
            <span className="text-sm font-bold text-[#E8871A] mt-auto">
              Démarrer une discussion →
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${SITE_CONFIG.phoneNumber}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8871A] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-5">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xs text-[#0B1F3A]/35 font-semibold uppercase tracking-wider mb-2">
              📞 Téléphone
            </h3>
            <p className="text-sm font-bold text-[#0B1F3A] mb-4">
              {SITE_CONFIG.phoneNumber}
            </p>
            <span className="text-sm font-bold text-[#E8871A] mt-auto">
              Nous appeler →
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${SITE_CONFIG.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-5">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xs text-[#0B1F3A]/35 font-semibold uppercase tracking-wider mb-2">
              📧 E-mail
            </h3>
            <p className="text-sm font-bold text-[#0B1F3A] mb-4 break-all">
              {SITE_CONFIG.email}
            </p>
            <span className="text-sm font-bold text-[#E8871A] mt-auto">
              Nous envoyer un e-mail →
            </span>
          </motion.a>
        </div>

        {/* Hours + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-[#0B1F3A]/40"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E8871A]" />
            <span>
              <strong className="text-[#0B1F3A]/60">🕘 Horaires :</strong>{' '}
              Lundi – Samedi · 09h00 – 18h00
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E8871A]" />
            <span>
              <strong className="text-[#0B1F3A]/60">📍 Maroc :</strong>{' '}
              Toutes les régions du Royaume
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
