import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { logoMarks } from '../data/siteData'

export default function LogoMarquee() {
  const reduceMotion = useReducedMotion()
  const loop = useMemo(() => [...logoMarks, ...logoMarks], [])

  return (
    <section className="section-anchor py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client logos"
          title="Trusted by brands and local businesses."
          description="Real client identities showcased in a premium animated presentation."
          align="center"
        />

        <div className="marquee-mask relative mt-10 overflow-hidden">
          <motion.div
            className="flex w-max gap-4 sm:gap-5"
            animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 30, repeat: Infinity, ease: 'linear' }
            }
            style={{ willChange: 'transform' }}
          >
            {loop.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative flex w-[240px] shrink-0 items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.07] sm:w-[260px] sm:rounded-[1.8rem] sm:p-5"
              >
                <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-amber-300/5 via-transparent to-cyan-300/5 opacity-0 transition duration-300 group-hover:opacity-100 sm:rounded-[1.8rem]" />

                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl sm:h-16 sm:w-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-2"
                    draggable="false"
                  />
                </div>

                <div className="relative min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/40">
                    Client Brand Identity
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}