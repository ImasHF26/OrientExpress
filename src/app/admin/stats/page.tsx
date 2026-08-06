'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  Users,
  MousePointerClick,
  TrendingUp,
  ArrowLeft,
  RefreshCw,
  PhoneCall,
  MapPin,
  GraduationCap,
  Clock,
} from 'lucide-react'

type StatsData = {
  totalClicks: number
  totalStudents: number
  conversionRate: string
  clicksBySection: { section: string; count: number }[]
  clicksByCta: { ctaId: string; label: string; count: number }[]
  recentClicks: { id: string; ctaId: string; label: string; section: string; createdAt: string }[]
}

type Student = {
  id: string
  nom: string
  telephone: string
  ville: string
  niveau: string
  filiere: string
  createdAt: string
}

export default function AdminStatsPage() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const [resStats, resStudents] = await Promise.all([
        fetch('/api/analytics/cta'),
        fetch('/api/inscription'),
      ])
      const dataStats = await resStats.json()
      const dataStudents = await resStudents.json()

      if (dataStats.success) setStats(dataStats.stats)
      if (dataStudents.success) setStudents(dataStudents.data)
    } catch (e) {
      console.error('Erreur de chargement des stats:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-[#071527] text-white p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#E8871A] hover:underline mb-2 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Retour à la landing page
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white flex items-center gap-2">
              <BarChart3 className="w-7 h-7 text-[#E8871A]" /> Tableau de Bord Analytics & Leads
            </h1>
            <p className="text-xs text-white/50">
              Statistiques d&apos;engagement des CTA et suivi des candidatures Meta Ads
            </p>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Actualiser
          </button>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white/50 uppercase">Formulaires Soumis (Leads)</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {stats?.totalStudents ?? 0}
            </div>
            <p className="text-xs text-emerald-400 font-medium">Candidats qualifiés enregistrés</p>
          </div>

          <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white/50 uppercase">Total Clics CTA</span>
              <div className="w-10 h-10 rounded-xl bg-[#E8871A]/20 text-[#E8871A] flex items-center justify-center">
                <MousePointerClick className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {stats?.totalClicks ?? 0}
            </div>
            <p className="text-xs text-[#E8871A] font-medium">Interactions sur les boutons</p>
          </div>

          <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white/50 uppercase">Taux de Conversion (Lead/CTA)</span>
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {stats?.conversionRate ?? '0.0%'}
            </div>
            <p className="text-xs text-blue-400 font-medium">Ratio Formulaires / Clics CTA</p>
          </div>
        </div>

        {/* Detailed Charts & Lists */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Clics par CTA */}
          <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              🔥 Top Boutons CTA les plus cliqués
            </h2>
            {stats?.clicksByCta && stats.clicksByCta.length > 0 ? (
              <div className="space-y-3">
                {stats.clicksByCta.map((item) => (
                  <div
                    key={item.ctaId}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{item.label}</div>
                      <div className="text-white/40 text-[11px]">ID: {item.ctaId}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E8871A]/20 text-[#E8871A] font-bold text-xs">
                      {item.count} clics
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-white/40 italic py-6 text-center">Aucune donnée de clic enregistrée pour le moment.</p>
            )}
          </div>

          {/* Clics par Section */}
          <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              📍 Clics par Section de la Page
            </h2>
            {stats?.clicksBySection && stats.clicksBySection.length > 0 ? (
              <div className="space-y-3">
                {stats.clicksBySection.map((item) => (
                  <div
                    key={item.section}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs"
                  >
                    <span className="font-semibold text-white">{item.section}</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">
                      {item.count} clics
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-white/40 italic py-6 text-center">Aucun clic de section disponible.</p>
            )}
          </div>
        </div>

        {/* Dernières candidatures */}
        <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            🎓 Dernières Candidatures d&apos;Étudiants Recueillies ({students.length})
          </h2>

          {students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-white/80">
                <thead className="bg-white/5 text-white/50 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Téléphone</th>
                    <th className="p-3">Ville</th>
                    <th className="p-3">Niveau & Filière</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {students.slice(0, 15).map((s) => (
                    <tr key={s.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-bold text-white">{s.nom}</td>
                      <td className="p-3">
                        <a
                          href={`https://wa.me/${s.telephone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-medium hover:underline flex items-center gap-1"
                        >
                          <PhoneCall className="w-3 h-3" /> {s.telephone}
                        </a>
                      </td>
                      <td className="p-3 flex items-center gap-1 text-white/70">
                        <MapPin className="w-3 h-3 text-[#E8871A]" /> {s.ville}
                      </td>
                      <td className="p-3">
                        <span className="font-semibold text-white">{s.niveau}</span>
                        {s.filiere && <span className="text-white/40 block text-[11px]">{s.filiere}</span>}
                      </td>
                      <td className="p-3 text-white/40 text-[11px]">
                        {new Date(s.createdAt).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-xs text-white/40 italic py-6 text-center">
              Aucune candidature reçue pour l&apos;instant. Testez le formulaire depuis la page principale !
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
