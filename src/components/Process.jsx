import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return (
    <section id="process" className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear, reliable process that keeps work smooth and professional."
          description="Simple delivery steps make the studio easy to trust for clients who need strong communication and timely execution."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="premium-border h-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glow">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                      <Icon size={20} />
                    </div>
                    <div className="text-4xl font-semibold text-white/10">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
