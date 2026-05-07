import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Zap,
} from 'lucide-react'
import { brand } from '../data/siteData'

const headlineLines = [
  'Design that builds trust',
  'Branding that feels premium',
]

const wordColors = [
  'text-white',
  'text-amber-300',
  'text-cyan-300',
  'text-emerald-300',
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: 'easeOut' },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const wa = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Hello Kedarnath Advertising & Graphics, I would like to discuss my website, creative, or advertising requirement.'
  )}`

  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_30%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(2,6,23,0.98)_45%,rgba(15,23,42,1)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div
        aria-hidden="true"
        className="absolute left-[-7rem] top-[-6rem] -z-10 h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-[10rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-18">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Basmath • Hingoli • Maharashtra
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            variants={containerVariants}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {headlineLines.map((line, lineIndex) => (
              <span key={line} className="block">
                {line.split(' ').map((word, wordIndex) => {
                  const colorClass =
                    wordColors[(lineIndex * 2 + wordIndex) % wordColors.length]

                  return (
                    <motion.span
                      key={`${lineIndex}-${word}-${wordIndex}`}
                      variants={wordVariants}
                      className={`mr-3 inline-block ${colorClass}`}
                    >
                      {word}
                    </motion.span>
                  )
                })}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.18 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
          >
            {brand.name} creates social media management, performance marketing creatives, content, festival design, and political campaign visuals for local businesses and public-facing teams.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.24 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={wa}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              <MessageCircle size={17} />
              WhatsApp
              <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>

            <a
              href={`tel:${brand.phone.replace(/\D/g, '')}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <PhoneCall size={17} />
              Call Now
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              View Portfolio
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            className="mt-9 grid gap-3 sm:grid-cols-3"
          >
            {[
              'Fast responses and clean delivery',
              'Creative work for social, print, and political campaigns',
              'Reliable local studio with premium polish',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-300 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.34 }}
            className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              <BadgeCheck size={15} />
              Trusted delivery
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Sparkles size={15} className="text-amber-300" />
              Premium design systems
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Zap size={15} className="text-cyan-300" />
              Fast campaign turnaround
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
            className="premium-border glass relative w-full max-w-xl overflow-hidden rounded-[2rem] p-4 shadow-glow sm:p-6"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/72 p-5 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-amber-400/12 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Studio identity
                  </p>
                  <h2 className="mt-2 max-w-sm text-2xl font-semibold text-white sm:text-3xl">
                    Creative precision with local trust.
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-amber-300 backdrop-blur-md">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
                <StatCard label="Location" value="Basmath / Vasmat" />
                <StatCard label="Focus" value="Advertising + Graphics" />
                <StatCard label="Support" value="Business + Political" />
                <StatCard label="Contact" value={brand.phone} />
              </div>

              <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-4">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55 backdrop-blur-md">
                    Premium output
                  </div>

                  <div className="absolute right-5 top-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-100 backdrop-blur-md">
                    <span className="inline-flex items-center gap-1">
                      <BadgeCheck size={14} />
                      Trusted delivery
                    </span>
                  </div>

                  <div className="absolute inset-x-6 top-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                    {[
                      'Social Media Creative',
                      'Political Campaign Design',
                      'Printing Assets',
                      'Festival Visuals',
                    ].map((tag) => (
                      <MiniTag key={tag}>{tag}</MiniTag>
                    ))}
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md" />
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/15" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
      <p className="mt-2 text-sm font-medium text-white sm:text-base">{value}</p>
    </div>
  )
}

function MiniTag({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm">
      {children}
    </div>
  )
}