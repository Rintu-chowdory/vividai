import { useState } from "react"
import { Play, Download, Heart, Search, Eye, Sparkles } from "lucide-react"

const filters = ["All", "Cinematic", "Anime", "Realistic", "3D Render"]

const videos = [
  {
    id: 1, title: "Neon City Flyover", style: "Cinematic", duration: "0:32", likes: 142, views: 4820,
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    tall: true,
  },
  {
    id: 2, title: "Sakura Garden", style: "Anime", duration: "1:00", likes: 89, views: 2310,
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",
    tall: false,
  },
  {
    id: 3, title: "Mountain Sunrise", style: "Realistic", duration: "0:45", likes: 214, views: 7100,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    tall: false,
  },
  {
    id: 4, title: "Space Station", style: "3D Render", duration: "2:00", likes: 376, views: 12400,
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    tall: true,
  },
  {
    id: 5, title: "Ocean Storm", style: "Cinematic", duration: "1:15", likes: 98, views: 3200,
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80",
    tall: false,
  },
  {
    id: 6, title: "Cyber Forest", style: "Anime", duration: "0:30", likes: 167, views: 5500,
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80",
    tall: false,
  },
  {
    id: 7, title: "Desert Wind", style: "Realistic", duration: "0:50", likes: 55, views: 1800,
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
    tall: false,
  },
  {
    id: 8, title: "Crystal Cave", style: "3D Render", duration: "1:30", likes: 290, views: 9800,
    img: "https://images.unsplash.com/photo-1551244072-5d12893278bc?w=600&q=80",
    tall: true,
  },
]

function formatNum(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)
}

export default function Gallery() {
  const [active, setActive] = useState("All")
  const [search, setSearch] = useState("")
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const filtered = videos.filter((v) => {
    const matchStyle = active === "All" || v.style === active
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase())
    return matchStyle && matchSearch
  })

  const toggleLike = (id: number) =>
    setLiked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <main className="relative mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">Gallery</h1>
            <p className="mt-1 text-sm text-white/40">{filtered.length} videos · community showcase</p>
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search videos…"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-4 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-xl px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
                active === f
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                  : "glass text-white/50 hover:text-white hover:bg-white/8"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-white/30">
            <Sparkles size={32} className="mb-3 opacity-40" />
            <p className="text-sm">No videos match your search</p>
          </div>
        ) : (
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {filtered.map((video) => (
              <div
                key={video.id}
                className="glass glass-hover group mb-4 cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              >
                {/* Thumbnail */}
                <div className={`relative overflow-hidden bg-black ${video.tall ? "h-64" : "h-40"}`}>
                  <img
                    src={video.img}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
                      <Play size={18} className="ml-0.5 text-white" fill="white" />
                    </div>
                  </div>

                  {/* Style badge */}
                  <div className="absolute left-2 top-2 rounded-lg bg-black/50 px-2 py-0.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                    {video.style}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-xs font-medium text-white/80">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="mb-2.5 text-sm font-semibold leading-snug">{video.title}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-white/35">
                      <button
                        onClick={() => toggleLike(video.id)}
                        className={`flex items-center gap-1 transition-colors ${
                          liked.has(video.id) ? "text-rose-400" : "hover:text-rose-400"
                        }`}
                      >
                        <Heart
                          size={12}
                          fill={liked.has(video.id) ? "currentColor" : "none"}
                          className="transition-all"
                        />
                        {formatNum(video.likes + (liked.has(video.id) ? 1 : 0))}
                      </button>
                      <span className="flex items-center gap-1">
                        <Eye size={11} />
                        {formatNum(video.views)}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/50 transition-all hover:border-violet-500/30 hover:text-white">
                      <Download size={11} />
                      Export
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
