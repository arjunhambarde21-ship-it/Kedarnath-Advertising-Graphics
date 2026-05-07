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
  'Branding that stays unforgettable',
]

const wordColors = [
  'text-white',
  'text-amber-300',
  'text-cyan-300',
  'text-emerald-300',
  'text-slate-100',
]

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
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_28%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(2,6,23,0.96)_45%,rgba(15,23,42,1)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        aria-hidden="true"
        className="absolute left-[-8rem] top-[-6rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-9rem] top-[12rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/65 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Basmath • Hingoli • Maharashtra
          </motion.div>

          <AnimatedHeadline
            lines={headlineLines}
            reduceMotion={reduceMotion}
          />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
          >
            {brand.name} creates social media management, performance marketing creatives, content, festival design, and political campaign visuals for local businesses and public-facing teams.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={wa}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.25)] transition hover:-translate-y-0.5 hover:bg-amber-200"
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
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.34 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {[
              'Fast responses and clean delivery',
              'Creative work for social, print, and political campaigns',
              'Reliable local studio with premium polish',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm text-slate-300 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400"
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

        <div className="relative flex items-center justify-center">
          <motion.div
            aria-hidden="true"
            className="absolute inset-10 rounded-[2rem] bg-amber-300/10 blur-3xl"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
            className="premium-border glass relative w-full max-w-xl overflow-hidden rounded-[2rem] p-4 shadow-glow sm:p-6"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/72 p-5 sm:p-7">
              <motion.div
                aria-hidden="true"
                className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl"
                animate={reduceMotion ? undefined : { x: [0, 10, 0], y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"
                animate={reduceMotion ? undefined : { x: [0, -10, 0], y: [0, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
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

                <motion.div
                  whileHover={reduceMotion ? undefined : { rotate: 8, scale: 1.03 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-amber-300 backdrop-blur-md"
                >
                  <Sparkles size={22} />
                </motion.div>
              </div>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                <StatCard label="Location" value="Basmath / Vasmat" />
                <StatCard label="Focus" value="Advertising + Graphics" />
                <StatCard label="Support" value="Business + Political" />
                <StatCard label="Contact" value={brand.phone} />
              </div>

              <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-4">
                <div className="relative h-60 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-6 top-6 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55 backdrop-blur-md"
                    animate={reduceMotion ? undefined : { opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Premium output
                  </motion.div>

                  <motion.div
                    aria-hidden="true"
                    className="absolute right-5 top-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-100 backdrop-blur-md"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <BadgeCheck size={14} />
                      Trusted delivery
                    </span>
                  </motion.div>

                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-x-6 top-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={reduceMotion ? undefined : { opacity: [0.35, 0.8, 0.35] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                    {[
                      'Social Media Creative',
                      'Political Campaign Design',
                      'Printing Assets',
                      'Festival Visuals',
                    ].map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                      >
                        <MiniTag>{tag}</MiniTag>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
                    animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/15"
                    animate={reduceMotion ? undefined : { rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedHeadline({ lines, reduceMotion }) {
  return (
    <motion.h1
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {lines.map((line, lineIndex) => (
        <span key={line} className="block">
          <AnimatedLine
            text={line}
            lineIndex={lineIndex}
            reduceMotion={reduceMotion}
          />
        </span>
      ))}
    </motion.h1>
  )
}

function AnimatedLine({ text, lineIndex, reduceMotion }) {
  const words = text.split(' ')

  return (
    <span className="inline-flex flex-wrap items-baseline">
      {words.map((word, wordIndex) => (
        <AnimatedWord
          key={`${lineIndex}-${word}-${wordIndex}`}
          word={word}
          lineIndex={lineIndex}
          wordIndex={wordIndex}
          reduceMotion={reduceMotion}
        />
      ))}
    </span>
  )
}

function AnimatedWord({ word, lineIndex, wordIndex, reduceMotion }) {
  const letters = Array.from(word)
  const colorClass =
    wordColors[(lineIndex * 2 + wordIndex) % wordColors.length]

  const baseDelay = 0.12 + lineIndex * 0.18 + wordIndex * 0.08

  return (
    <span className={`relative mr-3 inline-flex ${colorClass}`}>
      <span className="sr-only">{word} </span>
      <span aria-hidden="true" className="inline-flex">
        {letters.map((letter, letterIndex) => (
          <motion.span
            key={`${word}-${letterIndex}`}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 14, filter: 'blur(6px)' }
            }
            animate={
              reduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: baseDelay + letterIndex * 0.022,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </span>
  )
}

function StatCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-white sm:text-base">
        {value}
      </p>
    </motion.div>
  )
}

function MiniTag({ children }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  )
}