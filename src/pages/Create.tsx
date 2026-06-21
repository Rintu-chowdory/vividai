import { useState } from 'react'
import { Sparkles, Film, Wand2, ChevronDown } from 'lucide-react'

const styles = ['Cinematic', 'Anime', 'Realistic', '3D Render', 'Sketch', 'Neon']
const durations = ['15s', '30s', '60s', '2min', '5min']
const ratios = ['16:9', '9:16', '1:1', '4:3']

export default function Create() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Cinematic')
  const [duration, setDuration] = useState('30s')
  const [ratio, setRatio] = useState('16:9')
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setGenerating(true)
    setTimeout(() => setGenerating(false), 3000)
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Video</h1>
        <p className="mt-2 text-white/50">Describe your vision and let AI bring it to life.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Prompt panel */}
        <div className="col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <label className="mb-3 block text-sm font-medium text-white/70">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A cinematic shot of a futuristic city at dusk, neon lights reflecting off wet streets, slow drone pull-back..."
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-violet-500/50 focus:bg-white/8"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-white/30">{prompt.length} / 500</span>
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || generating}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {generating ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Generating…
                  </>
                ) : (
                  <>
                    <Wand2 size={15} />
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generating state */}
          {generating && (
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20">
                <Film size={28} className="animate-pulse text-violet-400" />
              </div>
              <div className="text-lg font-semibold">Generating your video…</div>
              <div className="mt-2 text-sm text-white/40">This usually takes 20–40 seconds</div>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/3 animate-pulse rounded-full bg-violet-600" />
              </div>
            </div>
          )}
        </div>

        {/* Settings panel */}
        <div className="space-y-4">
          {/* Style */}
          <div className="glass rounded-2xl p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/70">
              <Sparkles size={14} />
              Style
            </div>
            <div className="grid grid-cols-2 gap-2">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 ${
                    style === s
                      ? 'bg-violet-600 text-white'
                      : 'border border-white/10 bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="glass rounded-2xl p-5">
            <div className="mb-3 text-sm font-medium text-white/70">Duration</div>
            <div className="flex flex-wrap gap-2">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
                    duration === d
                      ? 'bg-violet-600 text-white'
                      : 'border border-white/10 bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="glass rounded-2xl p-5">
            <div className="mb-3 text-sm font-medium text-white/70">Aspect Ratio</div>
            <div className="flex flex-wrap gap-2">
              {ratios.map((r) => (
                <button
                  key={r}
                  onClick={() => setRatio(r)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
                    ratio === r
                      ? 'bg-violet-600 text-white'
                      : 'border border-white/10 bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
