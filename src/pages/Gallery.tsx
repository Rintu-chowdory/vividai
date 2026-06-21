import { useState } from 'react'
import { Play, Download, Heart } from 'lucide-react'

const filters = ['All', 'Cinematic', 'Anime', 'Realistic', '3D Render']

const videos = [
  { id: 1, title: 'Neon City Flyover', style: 'Cinematic', duration: '0:32', likes: 142, gradient: 'from-violet-600 to-blue-500' },
  { id: 2, title: 'Sakura Garden', style: 'Anime', duration: '1:00', likes: 89, gradient: 'from-pink-500 to-rose-400' },
  { id: 3, title: 'Mountain Sunrise', style: 'Realistic', duration: '0:45', likes: 214, gradient: 'from-orange-500 to-amber-400' },
  { id: 4, title: 'Space Station', style: '3D Render', duration: '2:00', likes: 376, gradient: 'from-blue-600 to-cyan-400' },
  { id: 5, title: 'Ocean Storm', style: 'Cinematic', duration: '1:15', likes: 98, gradient: 'from-teal-600 to-blue-500' },
  { id: 6, title: 'Cyber Forest', style: 'Anime', duration: '0:30', likes: 167, gradient: 'from-green-500 to-emerald-400' },
  { id: 7, title: 'Desert Wind', style: 'Realistic', duration: '0:50', likes: 55, gradient: 'from-yellow-600 to-orange-500' },
  { id: 8, title: 'Crystal Cave', style: '3D Render', duration: '1:30', likes: 290, gradient: 'from-purple-600 to-pink-500' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? videos : videos.filter((v) => v.style === active)

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="mt-2 text-white/50">Your generated videos</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl glass px-2 py-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
                active === f ? 'bg-violet-600 text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filtered.map((video) => (
          <div key={video.id} className="glass glass-hover group cursor-pointer overflow-hidden rounded-2xl">
            {/* Thumbnail */}
            <div className={`relative h-44 bg-gradient-to-br ${video.gradient}`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                  <Play size={20} className="text-white" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-1.5 py-0.5 text-xs text-white/80">
                {video.duration}
              </div>
              <div className="absolute left-2 top-2 rounded-md bg-black/50 px-2 py-0.5 text-xs text-white/60">
                {video.style}
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="mb-3 text-sm font-medium">{video.title}</div>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-rose-400">
                  <Heart size={13} />
                  {video.likes}
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/50 transition-colors hover:text-white">
                  <Download size={12} />
                  Export
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
