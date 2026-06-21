import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"

export default function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleGoogle = () => {
    setLoading(true)
    setTimeout(() => { navigate("/") }, 1200)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 ring-1 ring-violet-500/30">
            <Sparkles size={28} className="text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to VividAI</h1>
          <p className="mt-1 text-sm text-white/40">Sign in to start creating</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl disabled:opacity-60"
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            )}
            {loading ? "Signing in..." : "Continue with Google"}
          </button>
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/30">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="space-y-3">
            <input type="email" placeholder="Email address" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500/50 transition-all" />
            <input type="password" placeholder="Password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500/50 transition-all" />
            <button onClick={handleGoogle} className="w-full rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500">Sign in</button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/25">
          By signing in you agree to our Datenschutzerklaerung and Terms of Service.
          See <a href="/datenschutz" className="text-violet-400 hover:underline">Datenschutz</a>
        </p>
      </div>
    </div>
  )
}
