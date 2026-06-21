import { FileText, Mail, Globe, Phone, AlertCircle } from 'lucide-react'

export default function Impressum() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 ring-1 ring-violet-500/30">
            <FileText size={22} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>
            <p className="mt-1 text-sm text-white/40">Angaben gemäß § 5 TMG</p>
          </div>
        </div>

        <div className="space-y-6">

          {/* Anbieter */}
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
              01 — Anbieter
            </span>
            <div className="space-y-1 text-sm text-white/70">
              <p className="text-base font-semibold text-white">VividAI</p>
              <p>Musterstraße 12</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
              02 — Kontakt
            </span>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-violet-400 shrink-0" />
                <a href="mailto:kontakt@vividai.app" className="hover:text-violet-400 transition-colors">
                  kontakt@vividai.app
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-violet-400 shrink-0" />
                <span>+49 30 00000000</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={15} className="text-violet-400 shrink-0" />
                <a href="https://vividai.app" className="hover:text-violet-400 transition-colors">
                  https://vividai.app
                </a>
              </div>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
              03 — Verantwortlich für den Inhalt
            </span>
            <p className="text-sm text-white/70">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </p>
            <p className="mt-2 text-sm text-white/70">
              VividAI, Musterstraße 12, 10115 Berlin
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
              04 — Haftungsausschluss
            </span>
            <div className="space-y-4 text-sm text-white/70 leading-relaxed">
              <div>
                <p className="font-semibold text-white/90 mb-1">Haftung für Inhalte</p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                  oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white/90 mb-1">Haftung für Links</p>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich.
                </p>
              </div>
            </div>
          </section>

          {/* Urheberrecht */}
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
              05 — Urheberrecht
            </span>
            <p className="text-sm text-white/70 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* Hinweis KI-generierte Inhalte */}
          <section className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-400 mb-1">Hinweis zu KI-generierten Inhalten</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  VividAI ist eine Plattform zur KI-gestützten Videogenerierung. Die auf der Plattform erzeugten
                  Videos und Inhalte werden durch künstliche Intelligenz erstellt. Nutzer sind selbst
                  verantwortlich für die rechtmäßige Verwendung der generierten Inhalte.
                </p>
              </div>
            </div>
          </section>

        </div>

        <p className="mt-10 text-center text-xs text-white/20">Stand: Juni 2025</p>
      </div>
    </main>
  )
}
