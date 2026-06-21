import { Link } from 'react-router-dom'
import { Check, Zap, Crown, Sparkles, Star, Quote } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '€0',
    period: '/month',
    description: 'Try it out. No credit card needed.',
    cta: 'Get started',
    ctaLink: '/create',
    highlight: false,
    features: [
      '5 videos per month',
      'Up to 30 seconds per video',
      '720p resolution',
      'Standard styles',
      'Community gallery access',
    ],
    missing: [
      'Priority rendering',
      'Commercial license',
      'Custom branding',
    ],
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '€19',
    period: '/month',
    description: 'For creators who ship content daily.',
    cta: 'Start free trial',
    ctaLink: '/login',
    highlight: true,
    badge: 'Most popular',
    features: [
      '100 videos per month',
      'Up to 5 minutes per video',
      '1080p resolution',
      'All styles including Cinematic & 3D',
      'Priority rendering queue',
      'Commercial license',
      'Download in MP4 & WebM',
    ],
    missing: [
      'Custom branding',
    ],
  },
  {
    name: 'Studio',
    icon: Crown,
    price: '€79',
    period: '/month',
    description: 'For agencies and teams who need it all.',
    cta: 'Contact us',
    ctaLink: 'mailto:kontakt@vividai.app',
    highlight: false,
    features: [
      'Unlimited videos',
      'Up to 15 minutes per video',
      '4K resolution',
      'All styles + early access to new ones',
      'Fastest rendering queue',
      'Commercial license',
      'Custom branding & watermark removal',
      'Team workspace (up to 10 seats)',
      'Priority support',
    ],
    missing: [],
  },
]

const testimonials = [
  {
    quote: "I went from spending 3 hours on a product video to generating one in under 5 minutes. The cinematic style is genuinely stunning — clients think I hired a production crew.",
    author: "Sophie M.",
    role: "Freelance Creative Director",
    plan: "Pro",
    stars: 5,
    avatar: "SM",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    quote: "Our agency cranks out content for 12 clients a month. VividAI Studio paid for itself in the first week — we cut our video production cost by 80%.",
    author: "James K.",
    role: "Founder, Pixelwave Agency",
    plan: "Studio",
    stars: 5,
    avatar: "JK",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote: "Started on Free just to try it. Upgraded to Pro the same day. The 3D render style is unlike anything I've seen from other AI tools.",
    author: "Lena R.",
    role: "Content Creator, 280k followers",
    plan: "Pro",
    stars: 5,
    avatar: "LR",
    color: "from-pink-500 to-rose-500",
  },
  {
    quote: "We use VividAI for all our social media campaigns. The team workspace feature keeps everyone aligned and the turnaround is insane.",
    author: "Marcus T.",
    role: "Head of Marketing, Novatech",
    plan: "Studio",
    stars: 5,
    avatar: "MT",
    color: "from-amber-500 to-orange-500",
  },
  {
    quote: "The free plan alone is better than tools I've paid €50/month for. Upgraded to Pro after day one.",
    author: "Aria D.",
    role: "Indie Game Developer",
    plan: "Pro",
    stars: 5,
    avatar: "AD",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote: "Commercial license included in Pro was the deal-clincher. I can actually sell the videos I create — that's rare in this space.",
    author: "Tom B.",
    role: "Video Marketer",
    plan: "Pro",
    stars: 5,
    avatar: "TB",
    color: "from-violet-400 to-indigo-500",
  },
]

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes — no contracts, no lock-ins. Cancel from your account settings and you keep access until the end of your billing period.',
  },
  {
    q: 'What counts as one video?',
    a: 'Each generation counts as one video, regardless of length. Regenerations and failed attempts do not count against your quota.',
  },
  {
    q: 'Do unused videos roll over?',
    a: 'Monthly quotas reset on your billing date and do not roll over. Studio plan users have unlimited generations so this doesn\'t apply.',
  },
  {
    q: 'Is there a free trial for Pro?',
    a: 'Yes — Pro comes with a 7-day free trial. No credit card required to start.',
  },
]

export default function Pricing() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Simple,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              transparent
            </span>{' '}
            pricing
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
            Start free. Upgrade when you need more. No surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? 'border-violet-500/50 bg-violet-600/10 shadow-lg shadow-violet-500/10'
                    : 'border-white/8 bg-white/5'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-bold text-white">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    plan.highlight ? 'bg-violet-600/30 ring-1 ring-violet-500/40' : 'bg-white/8 ring-1 ring-white/10'
                  }`}>
                    <Icon size={18} className={plan.highlight ? 'text-violet-400' : 'text-white/60'} />
                  </div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="mt-1 text-sm text-white/40">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.period}</span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-violet-400" />
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/25 line-through">
                      <Check size={14} className="mt-0.5 shrink-0 opacity-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.ctaLink.startsWith('mailto') ? (
                  <a
                    href={plan.ctaLink}
                    className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                      plan.highlight
                        ? 'bg-violet-600 text-white hover:bg-violet-500'
                        : 'border border-white/10 text-white/70 hover:border-violet-500/40 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    to={plan.ctaLink}
                    className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                      plan.highlight
                        ? 'bg-violet-600 text-white hover:bg-violet-500'
                        : 'border border-white/10 text-white/70 hover:border-violet-500/40 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold">Loved by creators worldwide</h2>
            <p className="mt-3 text-sm text-white/40">Don't take our word for it.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="flex flex-col rounded-2xl border border-white/8 bg-white/5 p-6 transition-all hover:border-white/12 hover:bg-white/8"
              >
                {/* Quote icon */}
                <Quote size={20} className="mb-4 text-violet-400/50" />

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="flex-1 text-sm leading-relaxed text-white/70">"{t.quote}"</p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-400">
                    {t.plan}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold">Frequently asked questions</h2>
          <div className="mx-auto max-w-2xl divide-y divide-white/8">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <p className="font-semibold text-white">{faq.q}</p>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl border border-violet-500/20 bg-violet-600/10 p-10 text-center">
          <h3 className="text-2xl font-bold">Not sure which plan fits?</h3>
          <p className="mt-2 text-sm text-white/50">Start free — no card needed. Upgrade when it clicks.</p>
          <Link
            to="/create"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
          >
            <Sparkles size={15} />
            Try VividAI free
          </Link>
        </div>

      </div>
    </main>
  )
}
