import { Link } from "react-router-dom"
import { Sparkles, Film, Clock, TrendingUp, Play, Plus } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Videos Created", value: "2,847", icon: Film },
  { label: "Hours Saved", value: "1,203", icon: Clock },
  { label: "Trending", value: "+34%", icon: TrendingUp },
]

const recentVideos = [
  { id: 1, title: "Product Launch Teaser", duration: "0:32", status: "ready", gradient: "from-violet-600 to-blue-500" },
  { id: 2, title: "Social Media Ad Pack", duration: "1:15", status: "ready", gradient: "from-pink-600 to-violet-600" },
  { id: 3, title: "Explainer Animation", duration: "2:40", status: "processing", gradient: "from-blue-600 to-cyan-500" },
  { id: 4, title: "Brand Story", duration: "3:00", status: "ready", gradient: "from-orange-500 to-pink-600" },
]

const heroWords = ["stunning", "cinematic", "viral", "professional"]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.15 }
    )
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const word = heroWords[wordIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % heroWords.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx])

  return (
    <>
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <main className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <Sparkles size={14} />
            AI-Powered Video Generation
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            Create{" "}
            <span className="gradient-text">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            {" "}videos
            <br />
            with a single prompt
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/50">
            Transform your ideas into cinematic video content in seconds. No editing skills required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/create"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Plus size={16} />
              New Video
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-white/70"
            >
              <Play size={16} />
              View Gallery
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-3 gap-4">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div
              key={label}
              className="fade-up glass glass-hover glow-violet rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20">
                <Icon size={18} className="text-violet-400" />
              </div>
              <div className="text-3xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-white/50">{label}</div>
            </div>
          ))}
        </div>

        {/* Recent Videos */}
        <div>
          <div className="mb-6 flex items-center justify-between fade-up">
            <h2 className="text-xl font-semibold">Recent Projects</h2>
            <Link to="/gallery" className="text-sm text-violet-400 hover:text-violet-300">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {recentVideos.map((video, i) => (
              <div
                key={video.id}
                className="fade-up glass glass-hover group cursor-pointer overflow-hidden rounded-2xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Thumbnail */}
                <div className={`relative h-36 bg-gradient-to-br ${video.gradient} flex items-center justify-center`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <Play size={20} className="text-white" fill="white" />
                  </div>
                  <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-1.5 py-0.5 text-xs text-white/80">
                    {video.duration}
                  </div>
                </div>
                {/* Info */}
                <div className="p-3">
                  <div className="mb-1 text-sm font-medium">{video.title}</div>
                  <div className="flex items-center gap-1.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${video.status === "ready" ? "bg-green-400" : "bg-amber-400"}`} />
                    <span className="text-xs capitalize text-white/40">{video.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
