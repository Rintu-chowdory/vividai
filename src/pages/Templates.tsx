import { useState } from 'react'
import { Play, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const categories = ['All', 'Marketing', 'Social', 'Education', 'Entertainment']

const templates = [
  {
    id: 1,
    title: 'Product Launch',
    category: 'Marketing',
    description: 'Cinematic reveal with dramatic lighting and brand overlays.',
    gradient: 'from-violet-600 to-blue-500',
    duration: '30s',
    prompt: 'A dramatic product reveal with cinematic lighting, slow motion, dark background',
  },
  {
    id: 2,
    title: 'Instagram Reel',
    category: 'Social',
    description: 'Punchy vertical video built for engagement and shares.',
    gradient: 'from-pink-600 to-orange-500',
    duration: '15s',
    prompt: 'Vibrant, fast-paced vertical video with bold colors and dynamic transitions',
  },
  {
    id: 3,
    title: 'Explainer Video',
    category: 'Education',
    description: 'Clean animated walkthrough of any concept or product.',
    gradient: 'from-blue-600 to-cyan-500',
    duration: '2min',
    prompt: 'Clean whiteboard-style animation explaining a concept step by step',
  },
  {
    id: 4,
    title: 'Trailer',
    category: 'Entertainment',
    description: 'Epic cinematic trailer with sweeping score and fast cuts.',
    gradient: 'from-red-600 to-orange-600',
    duration: '1min',
    prompt: 'Epic movie trailer style with dramatic music, fast cuts, and cinematic shots',
  },
  {
    id: 5,
    title: 'Testimonial',
    category: 'Marketing',
    description: 'Clean professional testimonial with polished transitions.',
    gradient: 'from-green-600 to-teal-500',
    duration: '60s',
    prompt: 'Professional clean testimonial video with soft lighting and warm tones',
  },
  {
    id: 6,
    title: 'TikTok Ad',
    category: 'Social',
    description: 'Native-feeling ad that blends into the feed.',
    gradient: 'from-cyan-500 to-blue-600',
    duration: '15s',
    prompt: 'Trendy vertical video with text overlays, upbeat energy, native TikTok feel',
  },
]

export default function Templates() {
  const [active, setActive] = useState('All')
  const navigate = useNavigate()

  const filtered = active === 'All' ? templates : templates.filter((t) => t.category === active)

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Templates</h1>
        <p className="mt-2 text-white/50">Start fast with a pre-built template.</p>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex items-center gap-2 rounded-xl glass w-fit px-2 py-1.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
              active === c ? 'bg-violet-600 text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {filtered.map((t) => (
          <div key={t.id} className="glass glass-hover group overflow-hidden rounded-2xl">
            {/* Preview */}
            <div className={`relative h-40 bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
              <Play size={28} className="text-white/40 transition-all duration-200 group-hover:scale-110 group-hover:text-white/80" fill="currentColor" />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-1.5 py-0.5 text-xs text-white/70">
                {t.duration}
              </div>
              <div className="absolute left-2 top-2 rounded-md bg-black/50 px-2 py-0.5 text-xs text-white/60">
                {t.category}
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="mb-1.5 text-base font-semibold">{t.title}</div>
              <p className="mb-4 text-sm text-white/50">{t.description}</p>
              <button
                onClick={() => navigate('/create')}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600/20 border border-violet-500/30 py-2.5 text-sm font-medium text-violet-300 transition-all duration-200 hover:bg-violet-600 hover:text-white"
              >
                <Zap size={14} />
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
