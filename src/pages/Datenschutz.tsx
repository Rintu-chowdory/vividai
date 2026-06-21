import { Link } from "react-router-dom"
import { ArrowLeft, Shield } from "lucide-react"

const sections = [
  {
    num: "1",
    title: "Verantwortlicher",
    content: (
      <>
        <p>
          VividAI ist verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) Art. 4 Nr. 7:
        </p>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
          <p className="font-medium text-white/80">VividAI</p>
          <p className="text-white/50 mt-1">E-Mail: privacy@vividai.app</p>
          <p className="text-white/50">Web: vividai-five.vercel.app</p>
        </div>
      </>
    ),
  },
  {
    num: "2",
    title: "Welche Daten wir erheben",
    content: (
      <>
        <p>Je nach genutzter Funktion erheben wir folgende personenbezogene Daten:</p>
        <div className="mt-4 space-y-3">
          {[
            {
              label: "Kontodaten (Registrierung / Login)",
              items: ["Name und E-Mail-Adresse (Google-Konto)", "Profilbild-URL (optional, via Google OAuth)", "Zeitstempel der Anmeldung"],
            },
            {
              label: "Nutzungsdaten (Plattform)",
              items: ["Eingabe-Prompts fuer die KI-Videogenerierung", "Ausgewaehlte Vorlagen und Stiloptionen", "Bewertungen (Likes) in der Galerie", "Dauer und Seitenaufrufe innerhalb der App"],
            },
            {
              label: "Technische Daten",
              items: ["IP-Adresse und ungefaehrer Standort", "Browser-Typ und Betriebssystem", "Geraetyp und Bildschirmaufloesung", "Referrer-URL"],
            },
            {
              label: "Inhalte",
              items: ["KI-generierte Videos und Thumbnails", "Vom Nutzer gespeicherte Projekte und Galerieeintraege"],
            },
          ].map(({ label, items }) => (
            <div key={label} className="rounded-xl border border-white/8 bg-white/4 p-4">
              <p className="text-sm font-medium text-violet-300 mb-2">{label}</p>
              <ul className="space-y-1">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "3",
    title: "Rechtsgrundlagen (Art. 6 DSGVO)",
    content: (
      <div className="space-y-3">
        {[
          ["Art. 6 Abs. 1 lit. b DSGVO", "Vertragsdurchfuehrung — Verarbeitung zur Bereitstellung des Dienstes (Login, Videogenerierung, Galerie, Vorlagen)."],
          ["Art. 6 Abs. 1 lit. f DSGVO", "Berechtigte Interessen — Sicherheit, Missbrauchsverhinderung, technische Optimierung der Plattform."],
          ["Art. 6 Abs. 1 lit. a DSGVO", "Einwilligung — soweit optionale Funktionen wie Marketing-Kommunikation genutzt werden (widerrufbar jederzeit)."],
        ].map(([art, desc]) => (
          <div key={art} className="flex gap-3 rounded-xl border border-white/8 bg-white/4 p-4">
            <span className="shrink-0 rounded-lg bg-violet-600/20 px-2 py-1 text-xs font-mono text-violet-400">{art}</span>
            <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "4",
    title: "Drittdienste und Datenweitergabe",
    content: (
      <div className="space-y-4">
        {[
          {
            name: "Google LLC (OAuth 2.0)",
            purpose: "Authentifizierung und Anmeldung. Bei Login ueber Google werden Name, E-Mail und Profilbild von Google LLC (1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA) uebertragen. Grundlage: EU-US Data Privacy Framework (Art. 45 DSGVO).",
            link: "https://policies.google.com/privacy",
            linkLabel: "Google Datenschutz",
          },
          {
            name: "Unsplash (Bildmaterial)",
            purpose: "In der Galerie und auf der Startseite werden Bilder von Unsplash (Unsplash Inc., Montreal, Kanada) eingebunden. Dabei werden Ihre IP-Adresse und technische Daten an Unsplash uebermittelt.",
            link: "https://unsplash.com/privacy",
            linkLabel: "Unsplash Privacy Policy",
          },
          {
            name: "Vercel Inc. (Hosting)",
            purpose: "VividAI wird auf der Infrastruktur von Vercel Inc. (340 Pine St #402, San Francisco, CA 94104, USA) gehostet. Zugriffslogdaten werden von Vercel nach eigenen Datenschutzrichtlinien verarbeitet.",
            link: "https://vercel.com/legal/privacy-policy",
            linkLabel: "Vercel Privacy Policy",
          },
          {
            name: "KI-Videogenerierung",
            purpose: "Ihre eingegebenen Prompts werden zur KI-gestutzen Videogenerierung an Backend-Dienste weitergegeben. Es erfolgt keine Weitergabe an Dritte zu Werbezwecken.",
          },
        ].map(({ name, purpose, link, linkLabel }) => (
          <div key={name} className="rounded-xl border border-white/8 bg-white/4 p-4 space-y-2">
            <p className="text-sm font-semibold text-white/85">{name}</p>
            <p className="text-sm text-white/50 leading-relaxed">{purpose}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                {linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "5",
    title: "Speicherdauer",
    content: (
      <div className="space-y-2">
        {[
          ["Kontodaten", "Bis zur Kontoloeschung oder auf Antrag des Nutzers."],
          ["Generierte Videos und Projekte", "Bis zur manuellen Loeschung durch den Nutzer oder 24 Monate nach letzter Aktivitaet."],
          ["Technische Protokolldaten (Logs)", "Maximal 90 Tage, danach automatische Loeschung."],
          ["Cookies (Session)", "Ende der Browser-Sitzung (Session-Cookies)."],
        ].map(([cat, desc]) => (
          <div key={cat} className="flex justify-between gap-4 py-2.5 border-b border-white/8 last:border-0">
            <span className="text-sm font-medium text-white/70 shrink-0">{cat}</span>
            <span className="text-sm text-white/45 text-right">{desc}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "6",
    title: "Cookies und lokaler Speicher",
    content: (
      <p>
        VividAI verwendet ausschliesslich technisch notwendige Cookies und den lokalen Browser-Speicher (localStorage)
        fuer den Betrieb des Dienstes (z.&thinsp;B. Session-Verwaltung, Einstellungen wie bevorzugter Videostil).
        Marketing-Cookies, Tracking-Pixel oder Analyse-Tools von Drittanbietern werden nicht eingesetzt.
        Eine Cookie-Einwilligung ist dementsprechend nicht erforderlich (§&thinsp;25 TDDDG).
      </p>
    ),
  },
  {
    num: "7",
    title: "Ihre Rechte als betroffene Person",
    content: (
      <>
        <p className="mb-4">Gemaess DSGVO stehen Ihnen folgende Rechte zu. Zur Ausuebung wenden Sie sich an <span className="text-violet-400">privacy@vividai.app</span>:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["Art. 15", "Auskunftsrecht", "Welche Daten speichern wir ueber Sie?"],
            ["Art. 16", "Berichtigungsrecht", "Korrektur unrichtiger Daten."],
            ["Art. 17", "Recht auf Loeschung", "\"Recht auf Vergessenwerden\"."],
            ["Art. 18", "Einschraenkung", "Verarbeitung voruebergehend stoppen."],
            ["Art. 20", "Datenuebertragbarkeit", "Export Ihrer Daten in maschinenlesbarem Format."],
            ["Art. 21", "Widerspruchsrecht", "Widerspruch gegen bestimmte Verarbeitungen."],
          ].map(([art, title, desc]) => (
            <div key={art} className="rounded-xl border border-white/8 bg-white/4 p-3.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-violet-400 bg-violet-600/15 px-1.5 py-0.5 rounded">{art}</span>
                <span className="text-sm font-medium text-white/80">{title}</span>
              </div>
              <p className="text-xs text-white/45">{desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "8",
    title: "Beschwerderecht",
    content: (
      <p>
        Sie haben das Recht, sich jederzeit bei einer Datenschutz-Aufsichtsbehoerde zu beschweren.
        Die zustaendige Behoerde richtet sich nach Ihrem Wohnsitzland innerhalb der EU/des EWR.
        In Deutschland ist dies in der Regel der Landesbeauftragte fuer Datenschutz Ihres Bundeslandes.
        Eine Liste aller deutschen Aufsichtsbehoerden finden Sie unter{" "}
        <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
          bfdi.bund.de
        </a>.
      </p>
    ),
  },
  {
    num: "9",
    title: "Aenderungen dieser Datenschutzerklaerung",
    content: (
      <p>
        Wir behalten uns vor, diese Datenschutzerklaerung bei Bedarf zu aktualisieren, um sie an geaenderte
        gesetzliche Anforderungen oder neue Funktionen der Plattform anzupassen. Die aktuelle Version ist
        stets auf dieser Seite abrufbar. Bei wesentlichen Aenderungen informieren wir registrierte Nutzer
        per E-Mail.
      </p>
    ),
  },
]

export default function Datenschutz() {
  return (
    <>
      <div className="orb orb-1" style={{ opacity: 0.5 }} />
      <main className="relative mx-auto max-w-3xl px-6 py-12">

        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
          <ArrowLeft size={15} /> Zurueck zur Startseite
        </Link>

        {/* Header */}
        <div className="glass rounded-3xl p-8 mb-6 flex items-start gap-5 border border-violet-500/15">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-600/20 ring-1 ring-violet-500/30">
            <Shield size={22} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold mb-1">Datenschutzerklaerung</h1>
            <p className="text-white/40 text-sm">VividAI &middot; Zuletzt aktualisiert: Juni 2025 &middot; Version 2.0</p>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">
              Diese Erklaerung gilt fuer alle Funktionen von VividAI einschliesslich
              Startseite, KI-Videogenerierung, Galerie, Vorlagen und Google-Anmeldung.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map(({ num, title, content }) => (
            <div key={num} className="glass rounded-2xl p-7 space-y-4">
              <h2 className="flex items-center gap-3 text-base font-bold">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600/20 text-sm font-mono text-violet-400">
                  {num}
                </span>
                <span className="text-violet-200">{title}</span>
              </h2>
              <div className="text-sm text-white/55 leading-relaxed space-y-3">
                {content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 glass rounded-2xl p-6 text-center text-sm text-white/35">
          Fragen zum Datenschutz?{" "}
          <a href="mailto:privacy@vividai.app" className="text-violet-400 hover:underline">
            privacy@vividai.app
          </a>{" "}
          &middot;{" "}
          <Link to="/" className="text-violet-400 hover:underline">
            Zurueck zu VividAI
          </Link>
        </div>
      </main>
    </>
  )
}
