import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return (
    <section id="process" className="section-anchor py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear, reliable process that keeps work smooth and professional."
          description="Simple delivery steps make the studio easy to trust for clients who need strong communication and timely execution."
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="w-[82%] shrink-0 sm:w-auto"
              >
                <div className="premium-border h-full rounded-[1.4rem] border border-white/10 bg-white/5 p-4 shadow-glow sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                      <Icon size={18} />
                    </div>
                    <div className="text-3xl font-semibold text-white/10 sm:text-4xl">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
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