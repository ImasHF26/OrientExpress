'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Lock, KeyRound, Loader2, ArrowLeft, ShieldAlert } from 'lucide-react'

function AdminLoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/admin/stats'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!password) {
      setError('Veuillez saisir votre mot de passe.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Mot de passe incorrect.')
      }

      router.push(from)
      router.refresh()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Une erreur est survenue lors de la connexion.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
          Mot de passe Administrateur
        </label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-sm text-white outline-none focus:border-[#E8871A] transition-all"
          />
          <KeyRound className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#E8871A] hover:bg-[#F5A03C] text-white font-bold text-sm rounded-xl shadow-[0_8px_25px_rgba(232,135,26,0.35)] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Connexion en cours…
          </>
        ) : (
          'Se connecter au tableau de bord'
        )}
      </button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071527] text-white p-6 relative overflow-hidden font-sans">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8871A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#0D2340]/90 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#E8871A] hover:underline mb-4 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Retour au site public
          </Link>
          <div className="w-14 h-14 rounded-2xl bg-[#E8871A]/20 border border-[#E8871A]/40 flex items-center justify-center mx-auto text-[#E8871A]">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold font-display text-white">Espace Administrateur</h1>
          <p className="text-xs text-white/50">
            CAP FUTURE MAROC — Accès réservé aux conseillers
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-6 text-xs text-white/40">Chargement...</div>}>
          <AdminLoginForm />
        </Suspense>

        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] text-white/30">
            Session sécurisée via cookie HTTP-Only · CAP FUTURE MAROC
          </p>
        </div>
      </div>
    </div>
  )
}
