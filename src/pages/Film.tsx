import { useState } from "react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { Film, Download, Volume2, VolumeX, ImageIcon } from "lucide-react"
import SmartImage from "../components/SmartImage"

const storyboard = [
  { img: "/storyboard/scene1_ankunft.png", title: "Szene 1 – Ankunft", desc: "Ein Ort der Hoffnung" },
  { img: "/storyboard/scene2_bewerbung.png", title: "Szene 2 – Bewerbung", desc: "Trotz guter Qualifikationen" },
  { img: "/storyboard/scene3_bus.png", title: "Szene 3 – Alltag", desc: "Im Bus, in der Bahn" },
  { img: "/storyboard/scene4_behoerde.png", title: "Szene 4 – Behörde", desc: "Bürokratie und Sprachbarrieren" },
  { img: "/storyboard/scene5_arztpraxis.png", title: "Szene 5 – Arztpraxis", desc: "Auch im Alltag spürbar" },
  { img: "/storyboard/scene6_schweigen.png", title: "Szene 6 – Schweigen", desc: "Viele Betroffene schweigen" },
  { img: "/storyboard/scene7_vielfalt.png", title: "Szene 7 – Vielfalt", desc: "Gemeinsam für Fairness" },
  { img: "/storyboard/scene8_solidaritaet.png", title: "Szene 8 – Solidarität", desc: "Gleichberechtigung spürbar machen" },
]

export default function FilmPage() {
  useDocumentTitle("Diskriminierung in Deutschland — VividAI Film")
  const [muted, setMuted] = useState(false)
  const [selectedScene, setSelectedScene] = useState<number | null>(null)

  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <main className="relative mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 text-xs font-medium text-violet-300">
            <Film size={12} />
            VividAI Original Film
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Diskriminierung in Deutschland
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/40">
            Ein dokumentarischer Kurzfilm über die Realität von Diskriminierung im Alltag —
            von der Hoffnung bei der Ankunft bis hin zur Solidarität und dem Mut, etwas zu verändern.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
            <span>1:17 min</span>
            <span>·</span>
            <span>1080p Full HD</span>
            <span>·</span>
            <span>8 Szenen</span>
            <span>·</span>
            <span>Deutsche Voiceover</span>
          </div>
        </div>

        {/* Video Player */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40">
          <video
            src="/videos/diskriminierung-deutschland.mp4"
            poster="/storyboard/scene1_ankunft.png"
            controls
            className="w-full"
            muted={muted}
          />
        </div>

        {/* Download button */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href="/videos/diskriminierung-deutschland.mp4"
            download="diskriminierung-deutschland.mp4"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:-translate-y-0.5"
          >
            <Download size={14} />
            Video herunterladen
          </a>
        </div>

        {/* Storyboard Section */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <ImageIcon size={18} className="text-violet-400" />
            <h2 className="text-xl font-bold">Storyboard — 8 Szenen</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {storyboard.map((scene, i) => (
              <div
                key={i}
                onClick={() => setSelectedScene(i)}
                className="glass glass-hover group cursor-pointer overflow-hidden rounded-xl"
              >
                <div className="relative h-32 overflow-hidden bg-black">
                  <SmartImage
                    src={scene.img}
                    alt={scene.title}
                    className="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-xs font-bold text-white">{scene.title}</p>
                    <p className="text-[10px] text-white/50">{scene.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scene Detail Modal */}
        {selectedScene !== null && (
          <div
            onClick={() => setSelectedScene(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >
              <SmartImage
                src={storyboard[selectedScene].img}
                alt={storyboard[selectedScene].title}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{storyboard[selectedScene].title}</h3>
                <p className="text-sm text-white/50">{storyboard[selectedScene].desc}</p>
              </div>
              <button
                onClick={() => setSelectedScene(null)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white/80 backdrop-blur-sm"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Production Notes */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="mb-4 text-lg font-bold">Über den Film</h2>
          <div className="space-y-3 text-sm leading-relaxed text-white/50">
            <p>
              Dieser Kurzfilm wurde mit KI-generierten Bildern erstellt, die mit Ken Burns
              Kamerafahrten (Zoom und Pan) animiert wurden. Jede Szene zeigt einen Aspekt des
              Alltags von Menschen, die in Deutschland Diskriminierung erleben.
            </p>
            <p>
              Die deutsche Voiceover wurde mit Text-to-Speech generiert und mit ambienter
              Hintergrundmusik untermalt. Der Film dauert 76 Sekunden und zeigt acht Szenen —
              von der Ankunft über alltägliche Erfahrungen bis hin zu Solidarität und Mut.
            </p>
            <p className="text-xs text-white/30">
              Technische Details: 1920×1080 (Full HD), H.264, AAC Audio, 25fps.
              Generiert mit FFmpeg und gTTS (Google Text-to-Speech).
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
