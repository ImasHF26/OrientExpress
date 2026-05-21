'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 20000)

    const initialTimer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-xl p-4 max-w-[240px] border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Besoin d&apos;aide ?
            </p>
            <p className="text-xs text-gray-500">
              Écris-nous sur WhatsApp pour parler à un conseiller de la région
              Rabat-Salé-Kénitra.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour, je cherche de l\'aide pour mon orientation dans la région Rabat-Salé-Kénitra.')}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>
    </div>
  )
}
