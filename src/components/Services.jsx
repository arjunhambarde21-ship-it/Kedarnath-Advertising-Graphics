import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteData'

export default function Services() {
  const [activeId, setActiveId] = useState(services?.[0]?.id || '')

  useEffect(() => {
    if (!services?.length) return
    setActiveId((current) => current || services[0].id)
  }, [])

  const active = services.find((service) => service.id === activeId) || services[0]

  return (
    <section id="services" className="section-anchor py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Five focused studio services built for real business outcomes."
          description="The studio works across social, print, performance, festival, and political communication with one consistent premium standard."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            const activeCard = activeId === service.id

            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <button
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={`group h-full w-full rounded-[1.4rem] border bg-white/5 p-4 text-left shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] sm:p-5 ${
                    activeCard ? 'border-amber-300/35' : 'border-white/10'
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                  >
                    {Icon ? <Icon size={18} /> : null}
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {service.short}
                  </p>

                  <div className="mt-4 space-y-2">
                    {service.bullets?.slice(0, 2).map((bullet) => (
                      <div key={bullet} className="text-xs text-slate-400">
                        • {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition group-hover:translate-x-1">
                    View details
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8" delay={0.08}>
          <motion.div
            key={active?.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="premium-border glass grid gap-6 rounded-[1.6rem] border border-white/10 p-5 shadow-glow lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Selected service
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                {active.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {active.short}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Focus:</span>{' '}
                  Premium creative execution for local businesses, brands, and campaigns.
                </p>

                <p className="mt-2">
                  <span className="font-semibold text-white">Deliverables:</span>{' '}
                  Social creatives, branding assets, campaign graphics, and production-ready visual systems.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {active.bullets?.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}