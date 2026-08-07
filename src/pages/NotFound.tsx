import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('404 — VividAI')
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="orb orb-1" />
      <div className="orb orb-3" />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-extrabold gradient-text">404</h1>
        <p className="mt-4 text-lg text-white/50">This page doesn't exist. Let's get you back.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/30"
        >
          <Home size={16} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
