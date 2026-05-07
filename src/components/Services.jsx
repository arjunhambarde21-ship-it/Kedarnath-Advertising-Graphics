import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteData'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What we offer"
          description="Five focused services for real business results."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#12132F] p-5 transition hover:-translate-y-1 hover:border-[#FCE300]/30">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{service.short}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}