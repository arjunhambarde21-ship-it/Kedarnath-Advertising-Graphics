import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { aboutPoints, brand } from '../data/siteData'

export default function About() {
  return (
    <section id="about" className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow sm:p-8">
            <SectionHeading
              eyebrow="About"
              title={`A serious creative studio based in ${brand.location}.`}
              description="Kedarnath Advertising & Graphics helps local businesses, political teams, and growing brands communicate with clarity, confidence, and visual strength."
            />

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-white/35">
                Studio promise
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Clean hierarchy, premium polish, and communication that still feels practical in the real world of banners, posters, mobile screens, and public-facing campaign work.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="premium-border h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200"
                >
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
              The studio is built for practical business communication: fast turnaround, trustworthy presentation, and creative work that looks strong on mobile, in print, and in public-facing campaign environments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
