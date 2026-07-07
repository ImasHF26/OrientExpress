'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Replace this with your actual YouTube/Vimeo embed URL
  const videoEmbedUrl = ''

  return (
    <section className="bg-[#0d2340] py-20 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            🎬 Découvrez CAP FUTURE MAROC
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Votre orientation en{' '}
            <span className="text-[#E8871A] italic">45 secondes.</span>
          </h2>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30 group"
        >
          {videoEmbedUrl && isPlaying ? (
            /* === Actual video embed === */
            <iframe
              src={videoEmbedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Présentation CAP FUTURE MAROC"
            />
          ) : (
            /* === Placeholder / Thumbnail === */
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#112548] to-[#0B1F3A] flex flex-col items-center justify-center cursor-pointer"
              onClick={() => {
                if (videoEmbedUrl) setIsPlaying(true)
              }}
            >
              {/* Decorative orbs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-[#E8871A]/8 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] bg-[#E8871A]/5 rounded-full blur-3xl" />
              </div>

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#E8871A] flex items-center justify-center shadow-[0_0_60px_rgba(232,135,26,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(232,135,26,0.4)] transition-all duration-500">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>

                <div className="text-center">
                  <p className="text-white font-semibold text-sm mb-1">
                    {videoEmbedUrl
                      ? 'Cliquez pour lancer la vidéo'
                      : 'Vidéo bientôt disponible'}
                  </p>
                  <p className="text-white/30 text-xs">30 – 45 secondes</p>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute bottom-4 right-4 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg px-3 py-1.5 text-[11px] text-white/40 font-medium">
                🎓 CAP FUTURE MAROC
              </div>
            </div>
          )}
        </motion.div>

        {/* Caption */}
        <p className="text-center text-xs text-white/25 mt-4">
          Découvrez notre approche en quelques secondes.
        </p>
      </div>
    </section>
  )
}
