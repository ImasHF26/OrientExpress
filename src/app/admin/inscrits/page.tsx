'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Users,
  Search,
  Filter,
  Download,
  Upload,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Clock,
  Trash2,
  RefreshCw,
  LogOut,
  BarChart3,
  X,
  FileSpreadsheet,
  Loader2,
  Check,
} from 'lucide-react'

type Student = {
  id: string
  nom: string
  telephone: string
  ville: string
  niveau: string
  filiere: string
  contacted: boolean
  notes: string | null
  createdAt: string
}

export default function AdminInscritsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterNiveau, setFilterNiveau] = useState('ALL')
  const [filterContacted, setFilterContacted] = useState('ALL')

  // Modal Import Excel state
  const [showImportModal, setShowImportModal] = useState(false)
  const [importFile, setImportFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState<string | null>(null)
  const [importError, setImportError] = useState<string | null>(null)

  const router = useRouter()

  const fetchStudents = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/inscription')
      const data = await res.json()
      if (data.success) {
        setStudents(data.data)
      }
    } catch (e) {
      console.error('Erreur chargement inscrits:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
    router.refresh()
  }

  const toggleContacted = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch('/api/inscription', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, contacted: !currentStatus }),
      })
      if (res.ok) {
        setStudents((prev) =>
          prev.map((s) => (s.id === id ? { ...s, contacted: !currentStatus } : s))
        )
      }
    } catch (e) {
      console.error('Erreur mise à jour statut:', e)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette candidature ?')) return
    try {
      const res = await fetch(`/api/inscription?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setStudents((prev) => prev.filter((s) => s.id !== id))
      }
    } catch (e) {
      console.error('Erreur suppression:', e)
    }
  }

  const handleImportExcel = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!importFile) return
    setImporting(true)
    setImportResult(null)
    setImportError(null)

    const formData = new FormData()
    formData.append('file', importFile)

    try {
      const res = await fetch('/api/import', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erreur lors de l\'importation.')
      }

      setImportResult(data.message)
      setImportFile(null)
      fetchStudents()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setImportError(err.message)
      } else {
        setImportError('Erreur d\'importation.')
      }
    } finally {
      setImporting(false)
    }
  }

  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.telephone.includes(search) ||
      s.ville.toLowerCase().includes(search.toLowerCase())

    const matchNiveau = filterNiveau === 'ALL' || s.niveau === filterNiveau
    const matchContact =
      filterContacted === 'ALL' ||
      (filterContacted === 'CONTACTED' && s.contacted) ||
      (filterContacted === 'PENDING' && !s.contacted)

    return matchSearch && matchNiveau && matchContact
  })

  return (
    <div className="min-h-screen bg-[#071527] text-white p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-bold text-white text-xl font-sans">
                CAP FUTURE <span className="text-[#E8871A]">MAROC</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E8871A]/20 text-[#E8871A] font-bold">
                Admin Panel
              </span>
            </div>
            <h1 className="text-2xl font-bold font-display text-white">Gestion des Inscrits & Candidatures</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/stats"
              className="py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-[#E8871A]" /> Stats & CTA
            </Link>
            <Link
              href="/admin/inscrits"
              className="py-2.5 px-4 bg-[#E8871A] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Inscrits ({students.length})
            </Link>
            <button
              onClick={handleLogout}
              className="py-2.5 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-xl border border-red-500/20 transition-all flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" /> Déconnexion
            </button>
          </div>
        </div>

        {/* Action Toolbar: Search, Filters & Import/Export */}
        <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher par nom, téléphone, ville..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-xs text-white outline-none focus:border-[#E8871A] transition-all"
              />
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs">
                <Filter className="w-3.5 h-3.5 text-[#E8871A]" />
                <select
                  value={filterNiveau}
                  onChange={(e) => setFilterNiveau(e.target.value)}
                  className="bg-transparent text-white outline-none cursor-pointer"
                >
                  <option value="ALL" className="bg-[#0D2340]">Tous les niveaux</option>
                  <option value="Bac" className="bg-[#0D2340]">Bac</option>
                  <option value="Bac+2 OFPPT" className="bg-[#0D2340]">Bac+2</option>
                  <option value="Licence Fondamentale" className="bg-[#0D2340]">Licence</option>
                  <option value="Bac+4" className="bg-[#0D2340]">Bac+4</option>
                </select>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs">
                <select
                  value={filterContacted}
                  onChange={(e) => setFilterContacted(e.target.value)}
                  className="bg-transparent text-white outline-none cursor-pointer"
                >
                  <option value="ALL" className="bg-[#0D2340]">Tous les statuts</option>
                  <option value="PENDING" className="bg-[#0D2340]">⏳ En attente</option>
                  <option value="CONTACTED" className="bg-[#0D2340]">✅ Contactés</option>
                </select>
              </div>
            </div>

            {/* Export & Import Action Buttons */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <a
                href="/api/export?secret=capfuture2026"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Exporter Excel (.xlsx)
              </a>

              <button
                onClick={() => setShowImportModal(true)}
                className="py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Upload className="w-4 h-4" /> Importer Excel (.xlsx)
              </button>

              <button
                onClick={fetchStudents}
                disabled={loading}
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all"
                title="Actualiser la liste"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Table of Candidates */}
        <div className="bg-[#0D2340] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              📋 Candidats ({filteredStudents.length} affichés / {students.length} au total)
            </h2>
          </div>

          {filteredStudents.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-white/80">
                <thead className="bg-white/5 text-white/50 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Statut</th>
                    <th className="p-3">Nom & Prénom</th>
                    <th className="p-3">Téléphone (WhatsApp)</th>
                    <th className="p-3">Ville</th>
                    <th className="p-3">Niveau & Filière</th>
                    <th className="p-3">Date d&apos;inscription</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3">
                        <button
                          onClick={() => toggleContacted(s.id, s.contacted)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                            s.contacted
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {s.contacted ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" /> Contacté
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3" /> En attente
                            </>
                          )}
                        </button>
                      </td>
                      <td className="p-3 font-bold text-white text-sm">{s.nom}</td>
                      <td className="p-3">
                        <a
                          href={`https://wa.me/${s.telephone.replace(/\D/g, '')}?text=${encodeURIComponent(`Bonjour ${s.nom}, je suis conseiller chez CAP FUTURE MAROC concernant votre demande d'orientation.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20"
                        >
                          <PhoneCall className="w-3.5 h-3.5" /> {s.telephone}
                        </a>
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 text-white/80 font-medium">
                          <MapPin className="w-3 h-3 text-[#E8871A]" /> {s.ville || 'Maroc'}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="font-bold text-white">{s.niveau}</span>
                        {s.filiere && (
                          <span className="text-white/40 block text-[11px] mt-0.5">{s.filiere}</span>
                        )}
                      </td>
                      <td className="p-3 text-white/40 text-[11px]">
                        {new Date(s.createdAt).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDelete(s.id)}
                          className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                          title="Supprimer la candidature"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-xs text-white/40 italic py-8 text-center">
              Aucun candidat ne correspond à votre recherche.
            </p>
          )}
        </div>
      </div>

      {/* Modal Importation Excel (.xlsx) */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0D2340] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 relative">
            <button
              onClick={() => setShowImportModal(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Importer des Inscrits Excel</h3>
                <p className="text-xs text-white/50">Fichier `.xlsx` avec colonnes Nom, Téléphone, Ville, Niveau</p>
              </div>
            </div>

            <form onSubmit={handleImportExcel} className="space-y-4">
              <div className="border-2 border-dashed border-white/20 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors bg-white/5">
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="excel_file_input"
                />
                <label htmlFor="excel_file_input" className="cursor-pointer block space-y-2">
                  <Upload className="w-8 h-8 text-blue-400 mx-auto" />
                  <span className="text-xs font-semibold text-white block">
                    {importFile ? importFile.name : 'Cliquez pour sélectionner un fichier Excel (.xlsx)'}
                  </span>
                  <span className="text-[11px] text-white/40 block">Taille maximale : 10 Mo</span>
                </label>
              </div>

              {importResult && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{importResult}</span>
                </div>
              )}

              {importError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  {importError}
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowImportModal(false)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-semibold text-xs rounded-xl border border-white/10"
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  disabled={!importFile || importing}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {importing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Importation...
                    </>
                  ) : (
                    'Lancer l\'importation'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
