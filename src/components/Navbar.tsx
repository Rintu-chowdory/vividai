import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { LogIn, Clapperboard, Menu, X } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/create", label: "Create" },
  { to: "/gallery", label: "Gallery" },
  { to: "/film", label: "Film" },
  { to: "/templates", label: "Templates" },
  { to: "/pricing", label: "Pricing" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 py-0 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-3 px-5 mt-3 rounded-2xl border border-white/8 bg-black/30 backdrop-blur-2xl shadow-xl shadow-black/20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/20 ring-1 ring-violet-500/40 group-hover:ring-violet-500/70 transition-all">
              <Clapperboard size={15} className="text-violet-400" />
            </div>
            <span className="font-extrabold text-base tracking-tight">
              Vivid<span className="text-violet-400">AI</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80 hover:bg-white/5"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-violet-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            <LogIn size={13} />
            Sign in
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center rounded-xl p-2 text-white/70 hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/8 bg-black/40 backdrop-blur-2xl p-3 space-y-1 animate-[fadeUp_0.2s_ease]">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-600/20 text-white"
                      : "text-white/45 hover:text-white/80 hover:bg-white/5"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white mt-2"
            >
              <LogIn size={13} />
              Sign in
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
