import SectionHeading from './SectionHeading'
import { logoMarks } from '../data/siteData'

export default function LogoMarquee() {
  const loop = [...logoMarks, ...logoMarks]

  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client logos"
          title="Trusted by brands and local businesses."
          description="Real client identities showcased in a premium animated presentation."
          align="center"
        />

        <div className="marquee-mask relative mt-14 overflow-hidden">
          <div className="flex w-max animate-marquee gap-5">
            {loop.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative flex min-w-[240px] items-center gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.07]"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-amber-300/5 via-transparent to-cyan-300/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Logo */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-2"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-sm font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/40">
                    Client Brand Identity
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}