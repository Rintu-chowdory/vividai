import { NavLink, Link } from "react-router-dom"
import { Sparkles, LogIn, Clapperboard } from "lucide-react"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/create", label: "Create" },
  { to: "/gallery", label: "Gallery" },
  { to: "/templates", label: "Templates" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-0">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-3 px-5 mt-3 rounded-2xl border border-white/8 bg-black/30 backdrop-blur-2xl shadow-xl shadow-black/20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/20 ring-1 ring-violet-500/40 group-hover:ring-violet-500/70 transition-all">
              <Clapperboard size={15} className="text-violet-400" />
            </div>
            <span className="font-extrabold text-base tracking-tight">
              Vivid<span className="text-violet-400">AI</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-0.5">
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

          {/* CTA */}
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            <LogIn size={13} />
            Sign in
          </Link>

        </div>
      </div>
    </header>
  )
}
