import { NavLink } from 'react-router-dom'
import { Sparkles, Film, LayoutGrid, BookOpen, User } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: Sparkles },
  { to: '/create', label: 'Create', icon: Film },
  { to: '/gallery', label: 'Gallery', icon: LayoutGrid },
  { to: '/templates', label: 'Templates', icon: BookOpen },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-lg font-semibold">
            Vivid<span className="gradient-text">AI</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-1 rounded-xl glass px-2 py-1.5">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-violet-600 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <Icon size={15} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Avatar */}
        <button className="flex h-9 w-9 items-center justify-center rounded-full glass glass-hover">
          <User size={16} className="text-white/70" />
        </button>
      </div>
    </nav>
  )
}
