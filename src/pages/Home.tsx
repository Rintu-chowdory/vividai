import { Link } from "react-router-dom"
import { Sparkles, Film, Clock, TrendingUp, Play, Plus, Zap, Globe, Shield, Star } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { label: "Videos Created", value: "2,847", icon: Film },
  { label: "Hours Saved", value: "1,203", icon: Clock },
  { label: "Trending", value: "+34%", icon: TrendingUp },
]

const recentVideos = [
  {
    id: 1, title: "Product Launch Teaser", duration: "0:32", status: "ready",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  },
  {
    id: 2, title: "Social Media Ad Pack", duration: "1:15", status: "ready",
    img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80",
  },
  {
    id: 3, title: "Explainer Animation", duration: "2:40", status: "processing",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
  },
  {
    id: 4, title: "Brand Story", duration: "3:00", status: "ready",
    img: "https://images.unsplash.com/photo-1492138786289-d35ea832da43?w=400&q=80",
  },
]

const heroWords = ["stunning", "cinematic", "viral", "professional"]

const features = [
  {
    icon: Zap,
    title: "Instant Generation",
    desc: "Type a prompt, get a broadcast-ready video in seconds. No timeline, no keyframes.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Globe,
    title: "80+ Languages",
    desc: "Auto-translate voiceover and subtitles into any language. Go global without a studio.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Brand-Safe AI",
    desc: "Every frame trained on licensed footage. No copyright surprises, ever.",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Star,
    title: "Hollywood Quality",
    desc: "Cinema-grade color grading and sound design baked in automatically.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
]

const samplePrompts = [
  "A lone astronaut floating above Earth at golden hour, cinematic 4K",
  "Luxury sports car cutting through neon-lit city streets at midnight",
  "Product launch reveal with dramatic light beams and particle effects",
]

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-pulse">
      <div className="h-36 bg-white/5" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-3/4 rounded bg-white/10" />
        <div className="h-2 w-1/3 rounded bg-white/5" />
      </div>
    </div>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [activePrompt, setActivePrompt] = useState(0)

  useScrollReveal()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setActivePrompt((i) => (i + 1) % samplePrompts.length), 3000)
    return () => clearInterval(interval)
  }, [])

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
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <main className="relative mx-auto max-w-7xl px-6 py-16">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 backdrop-blur-sm">
            <Sparkles size={14} />
            AI-Powered Video Generation · Now in Beta
          </div>

          <h1 className="mb-5 text-6xl font-extrabold tracking-tight leading-tight">
            Create{" "}
            <span className="gradient-text">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            {" "}videos
            <br />
            <span className="text-white/60 font-semibold text-5xl">with a single prompt</span>
          </h1>

          <p className="mx-auto mb-10 max-w-lg text-lg text-white/45 leading-relaxed">
            Transform your ideas into broadcast-ready video content in seconds.
            No editing skills. No studio. Just results.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Link
              to="/create"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
            >
              <Plus size={16} />
              Start Creating — Free
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 rounded-xl glass glass-hover px-7 py-3.5 text-sm font-semibold text-white/70"
            >
              <Play size={16} />
              See Examples
            </Link>
          </div>

          {/* Prompt showcase */}
          <div className="mx-auto max-w-2xl glass rounded-2xl p-1 border border-white/10">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4">
              <Sparkles size={16} className="text-violet-400 shrink-0" />
              <span
                key={activePrompt}
                className="text-sm text-white/60 text-left truncate transition-all duration-700"
                style={{ animation: "fadeUp 0.5s ease forwards" }}
              >
                {samplePrompts[activePrompt]}
              </span>
              <span className="ml-auto shrink-0 rounded-lg bg-violet-600/80 px-3 py-1.5 text-xs font-semibold text-white cursor-pointer hover:bg-violet-500 transition-colors">
                Generate →
              </span>
            </div>
            <div className="flex justify-center gap-1.5 py-2">
              {samplePrompts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePrompt(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activePrompt ? "w-6 bg-violet-400" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── STATS ────────────────────────────────────────── */}
        <div className="mb-20 grid grid-cols-3 gap-4">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div
              key={label}
              className="fade-up glass glass-hover glow-violet rounded-2xl p-6 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20">
                <Icon size={18} className="text-violet-400" />
              </div>
              <div className="text-4xl font-extrabold mb-1">{value}</div>
              <div className="text-sm text-white/40">{label}</div>
            </div>
          ))}
        </div>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 text-center fade-up">
            <h2 className="text-3xl font-bold mb-2">Why teams choose VividAI</h2>
            <p className="text-white/40 text-sm">Everything you need to go from idea to publish in under a minute.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc, color, border, iconColor }, i) => (
              <div
                key={title}
                className={`fade-up glass glass-hover rounded-2xl p-6 border ${border} bg-gradient-to-br ${color}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/20`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <h3 className="text-base font-semibold mb-1.5">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RECENT VIDEOS ────────────────────────────────── */}
        <div>
          <div className="mb-6 flex items-center justify-between fade-up">
            <div>
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <p className="text-xs text-white/35 mt-0.5">Your latest AI-generated videos</p>
            </div>
            <Link to="/gallery" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {!loaded
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : recentVideos.map((video, i) => (
                  <div
                    key={video.id}
                    className="fade-up glass glass-hover group cursor-pointer overflow-hidden rounded-2xl"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="relative h-40 overflow-hidden bg-black">
                      <img
                        src={video.img}
                        alt={video.title}
                        className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
                          <Play size={18} className="text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <div className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium ${video.status === "ready" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"}`}>
                          <div className={`h-1.5 w-1.5 rounded-full ${video.status === "ready" ? "bg-green-400" : "bg-amber-400"}`} />
                          {video.status}
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-xs text-white/80 font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-medium leading-snug">{video.title}</div>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* ── CTA BANNER ───────────────────────────────────── */}
        <div className="mt-20 fade-up">
          <div className="glass rounded-3xl p-10 text-center border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-blue-600/5 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-3 relative">Ready to go viral?</h2>
            <p className="text-white/45 mb-7 text-sm relative">Join 2,800+ creators already making AI video at scale.</p>
            <Link
              to="/create"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-0.5 relative"
            >
              <Sparkles size={16} />
              Create your first video
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
