'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { useState, useRef } from 'react'

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Local video file in public directory
  const videoSrc = '/BAC_2 UPDATED.mp4'

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
            <span className="text-[#E8871A] italic">quelques secondes.</span>
          </h2>
        </motion.div>

        {/* Video container tailored for 9:16 vertical video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative max-w-[360px] sm:max-w-[400px] aspect-[9/16] mx-auto rounded-3xl overflow-hidden border border-white/[0.12] shadow-[0_0_60px_rgba(0,0,0,0.6)] bg-black group"
        >
          {/* Direct HTML5 Autoplay Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls
            className="w-full h-full object-cover rounded-3xl"
          >
            Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
          </video>

          {/* Sound Control Toggle Button */}
          <button
            type="button"
            onClick={toggleSound}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/70 hover:bg-[#E8871A] text-white backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-xl cursor-pointer"
            title={isMuted ? 'Activer le son' : 'Désactiver le son'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#E8871A] group-hover:text-white" />
                <span>Activer le son</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                <span>Son activé</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Caption */}
        <p className="text-center text-xs text-white/30 mt-4">
          Découvrez notre démarche et nos services d&apos;orientation personnalisée.
        </p>
      </div>
    </section>
  )
}


