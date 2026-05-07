import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/siteData'
import { BadgeCheck } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Designed to build trust before the first message is even sent."
          description="Every part of the interface and content is built to present the studio as dependable, local, and polished at a premium-agency level."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="premium-border flex h-full items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glow">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
                  <BadgeCheck size={18} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
