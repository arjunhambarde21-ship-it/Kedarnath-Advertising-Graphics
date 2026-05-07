import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import {
  commercialPortfolio,
  portfolioTabs,
  politicalPortfolio,
} from '../data/siteData'

function PortfolioCard({ item, onClick }) {
  const reduceMotion = useReducedMotion()
  const images = item.images?.length ? item.images : []
  const cover = images[0]

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left focus:outline-none"
      aria-label={item.title}
    >
      {/* Subtle stacked slide shadow effect for multiple images */}
      {images.length > 1 && (
        <div className="pointer-events-none absolute -inset-1 -bottom-2 rounded-3xl bg-[#1E1A69]/20 blur-sm" />
      )}
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#12132F] transition hover:-translate-y-1 hover:border-[#FCE300]/30 ${
          images.length > 1 ? 'shadow-[0_12px_30px_rgba(0,0,0,0.4)]' : 'shadow-sm'
        }`}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          {cover ? (
            <img
              src={cover}
              alt={item.title}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              loading="lazy"
              draggable="false"
            />
          ) : (
            <div className="h-full w-full bg-[#1E1A69]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1A]/80 via-transparent to-transparent" />
          {/* Multiple image indicator */}
          {images.length > 1 && (
            <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              1/{images.length}
            </span>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              {item.type}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/60 line-clamp-2">{item.context}</p>
        </div>
      </div>
    </button>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState('political')
  const [activeItem, setActiveItem] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  const items = useMemo(
    () => (tab === 'political' ? politicalPortfolio : commercialPortfolio),
    [tab]
  )

  const activeImages = activeItem?.images?.length ? activeItem.images : []

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our work"
          description="Political campaigns & commercial branding."
        />

        <Reveal className="mt-8">
          <div className="inline-flex rounded-full border border-white/10 bg-[#12132F] p-1">
            {portfolioTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  tab === t.id
                    ? 'bg-[#FCE300] text-[#1E1A69]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <PortfolioCard
                key={item.title}
                item={item}
                onClick={() => {
                  setActiveItem(item)
                  setActiveImg(0)
                }}
              />
            ))}
          </div>
        </Reveal>

        <AnimatePresence>
          {activeItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0B1A]/90 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#12132F]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative h-64 w-full lg:h-auto lg:w-1/2 bg-black/20">
                    {activeImages[activeImg] ? (
                      <img
                        src={activeImages[activeImg]}
                        alt={activeItem.title}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : null}
                    {activeImages.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveImg((p) => (p === 0 ? activeImages.length - 1 : p - 1))
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#0A0B1A]/70 p-2 text-white hover:bg-[#0A0B1A]/90"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={() =>
                            setActiveImg((p) => (p + 1) % activeImages.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#0A0B1A]/70 p-2 text-white hover:bg-[#0A0B1A]/90"
                          aria-label="Next"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => setActiveItem(null)}
                      className="absolute right-3 top-3 rounded-full bg-[#0A0B1A]/70 p-2 text-white hover:bg-[#0A0B1A]/90"
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                    {activeImages.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-[#0A0B1A]/60 px-3 py-1.5 backdrop-blur-sm">
                        {activeImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImg(i)}
                            className={`h-2 rounded-full transition-all ${
                              activeImg === i ? 'w-6 bg-[#FCE300]' : 'w-2 bg-white/40'
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-6 lg:w-1/2">
                    <h3 className="text-2xl font-semibold text-white">{activeItem.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{activeItem.type}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/80">{activeItem.context}</p>
                    {activeImages.length > 1 && (
                      <div className="mt-4 flex gap-2 overflow-x-auto">
                        {activeImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImg(i)}
                            className={`h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                              activeImg === i ? 'border-[#FCE300]' : 'border-white/10'
                            }`}
                          >
                            <img src={img} alt="" className="h-full w-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}