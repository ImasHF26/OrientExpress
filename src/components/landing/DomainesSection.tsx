'use client'

import { motion } from 'framer-motion'

const domaines = [
  {
    emoji: '🎓',
    title: 'Masters',
    desc: 'Masters classiques, spécialisés et professionnalisants dans les universités publiques et privées.',
    tags: ['ENCG', 'FSJES', 'FS', 'FST', 'FLSH'],
  },
  {
    emoji: '⚙️',
    title: "Écoles d'Ingénieurs",
    desc: "Grandes écoles d'ingénieurs accessibles après licence, BTS, DUT ou classes préparatoires.",
    tags: ['ENSA', 'ENSAM', 'EMI', 'EHTP', 'INPT'],
  },
  {
    emoji: '📜',
    title: 'Licences Professionnelles',
    desc: 'Licences professionnelles accréditées offrant une insertion directe dans le marché du travail.',
    tags: ['LP', 'EST', 'FST'],
  },
  {
    emoji: '🔧',
    title: 'OFPPT',
    desc: 'Orientation après les diplômes de technicien et technicien spécialisé de l\'OFPPT.',
    tags: ['TS', 'Technicien', 'Qualification'],
  },
  {
    emoji: '📘',
    title: 'BTS',
    desc: 'Poursuite d\'études après le Brevet de Technicien Supérieur en écoles et universités.',
    tags: ['BTS Public', 'BTS Privé'],
  },
  {
    emoji: '🏫',
    title: 'DUT / EST',
    desc: 'Passerelles après le Diplôme Universitaire de Technologie vers les écoles et masters.',
    tags: ['EST', 'DUT', 'Passerelles'],
  },
]

export default function DomainesSection() {
  return (
    <section className="bg-[#E8EEF6] py-24 sm:py-32 border-t border-[#D4DEE8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E8871A] mb-3 block">
            🎯 Nos spécialités
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4">
            Nos domaines{' '}
            <span className="text-[#E8871A] italic">
              d&apos;accompagnement
            </span>
          </h2>
          <p className="text-[15px] text-[#0B1F3A]/45 max-w-xl mx-auto leading-relaxed">
            Quel que soit votre parcours, nous vous accompagnons vers la
            formation la plus adaptée à votre profil.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domaines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Emoji + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8871A]/8 flex items-center justify-center text-xl group-hover:bg-[#E8871A]/12 group-hover:scale-110 transition-all duration-300">
                  {d.emoji}
                </div>
                <h3 className="font-display text-[17px] font-bold text-[#0B1F3A]">
                  {d.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#0B1F3A]/45 leading-relaxed mb-4">
                {d.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-[#E8871A]/70 bg-[#E8871A]/6 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
