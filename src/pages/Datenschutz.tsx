import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
        <ArrowLeft size={16} /> Zurueck zur Startseite
      </Link>
      <div className="glass rounded-3xl p-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Datenschutzerklarung</h1>
          <p className="text-white/40 text-sm">Zuletzt aktualisiert: Juni 2025</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">1. Verantwortlicher</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            VividAI ist verantwortlich fuer die Verarbeitung Ihrer personenbezogenen Daten gemaess Art. 4 Nr. 7 DSGVO.
            Kontakt: privacy@vividai.app
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">2. Erhobene Daten</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Wir erheben folgende Daten bei der Nutzung unseres Dienstes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/50 text-sm">
            <li>E-Mail-Adresse und Name (bei der Registrierung)</li>
            <li>Google-Konto-Daten (bei Anmeldung uber Google OAuth)</li>
            <li>Nutzungsdaten und generierte Inhalte</li>
            <li>IP-Adresse und technische Geratedaten</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">3. Rechtsgrundlage</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfullung)
            sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">4. Google OAuth</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Bei der Anmeldung uber Google werden Daten an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
            ubermittelt. Google verarbeitet diese Daten gemaess der Google-Datenschutzrichtlinie (policies.google.com/privacy).
            Es besteht ein angemessenes Datenschutzniveau gemaess Art. 45 DSGVO (EU-US Data Privacy Framework).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">5. Ihre Rechte (DSGVO)</h2>
          <ul className="list-disc list-inside space-y-1 text-white/50 text-sm">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Loschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschrankung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenubertragebarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-white/50 text-sm">
            Zur Ausubung Ihrer Rechte wenden Sie sich an: privacy@vividai.app
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">6. Beschwerderecht</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutzbehorde zu beschweren.
            Die zustandige Aufsichtsbehorde richtet sich nach Ihrem Wohnsitzland innerhalb der EU.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">7. Cookies</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Wir verwenden ausschliesslich technisch notwendige Cookies fuer den Betrieb des Dienstes.
            Marketing-Cookies oder Tracking-Tools von Drittanbietern werden nicht eingesetzt.
          </p>
        </section>
      </div>
    </main>
  )
}
