import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react'
import { brand } from '../data/siteData'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0A0B1A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,26,105,0.4),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white/60">
            <span className="h-2 w-2 rounded-full bg-[#FCE300] shadow-[0_0_12px_rgba(252,227,0,0.8)]" />
            Basmath • Maharashtra
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Creative Studio <br />
            <span className="text-[#FCE300]">for Brands & Campaigns</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            {brand.name} — social media, political designs, and commercial advertising
            with professional polish.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#FCE300] px-6 py-3 font-semibold text-[#1E1A69] transition hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`tel:${brand.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Portfolio
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}