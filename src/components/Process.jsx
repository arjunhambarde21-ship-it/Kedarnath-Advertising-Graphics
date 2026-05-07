import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How we work"
          description="Simple steps that keep things professional."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-[#12132F] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E1A69] text-white">
                    <Icon size={18} />
                  </div>
                  <div className="text-3xl font-bold text-white/10">0{index + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}