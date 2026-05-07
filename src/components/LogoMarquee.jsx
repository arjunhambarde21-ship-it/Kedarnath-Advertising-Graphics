import { useMemo } from 'react'
import SectionHeading from './SectionHeading'
import { logoMarks } from '../data/siteData'

export default function LogoMarquee() {
  const loop = useMemo(() => [...logoMarks, ...logoMarks], [])

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted by"
          title="Clients & Partners"
          description="Logos we’ve worked with."
          align="center"
        />

        <div className="marquee-mask relative mt-10 overflow-hidden">
          {/* Inline keyframes so no external CSS change is required */}
          <style>
            {`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
                will-change: transform;
                transform: translateZ(0); /* hardware acceleration */
              }
            `}
          </style>

          <div className="flex w-max gap-8 animate-marquee">
            {loop.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex h-24 w-36 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#12132F] p-4 transition hover:border-[#FCE300]/30"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  draggable="false"
                  loading={index < 8 ? 'eager' : 'lazy'} // eagerly load first few
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}