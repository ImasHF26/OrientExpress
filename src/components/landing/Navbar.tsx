'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Orientation', href: '#consultation' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F3A]/97 backdrop-blur-xl shadow-lg border-b border-white/10'
            : 'bg-[#0B1F3A]/97 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 group"
            >
              <img
                src="/logo-capfuture.png"
                alt={SITE_CONFIG.name}
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="font-bold text-white text-lg sm:text-xl tracking-tight font-sans">
                CAP FUTURE <span className="text-[#E8871A]">MAROC</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#consultation')}
                className="ml-3 bg-[#E8871A] text-white font-semibold text-[13px] px-[22px] py-[10px] rounded-full hover:bg-[#F5A03C] shadow-[0_4px_20px_rgba(232,135,26,0.3)] transition-all duration-200"
              >
                Consultation gratuite →
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B1F3A] pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full py-4 text-lg font-medium text-white/70 hover:text-white border-b border-white/5 text-center transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo('#consultation')}
                className="mt-6 w-full bg-[#E8871A] text-white font-semibold text-base py-4 rounded-full hover:bg-[#F5A03C] shadow-[0_4px_20px_rgba(232,135,26,0.3)]"
              >
                Consultation gratuite →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
