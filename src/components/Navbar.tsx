import { NavLink, Link } from 'react-router-dom'
import { Sparkles, LogIn } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/create', label: 'Create' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/templates', label: 'Templates' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5">
      <Link to="/" className="flex items-center gap-2 font-bold text-lg">
        <Sparkles size={20} className="text-violet-400" />
        VividAI
      </Link>
      <nav className="flex items-center gap-1">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-violet-600/20 text-violet-300'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Link
        to="/login"
        className="flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 text-sm font-medium text-violet-300 transition-all hover:bg-violet-600/20"
      >
        <LogIn size={14} />
        Sign in
      </Link>
    </header>
  )
}
