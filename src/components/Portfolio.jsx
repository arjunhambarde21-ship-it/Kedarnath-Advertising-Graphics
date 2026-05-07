import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import {
  commercialPortfolio,
  portfolioTabs,
  politicalPortfolio,
} from '../data/siteData'

function PortfolioCard({ item, onClick }) {
  const images = item.images?.length ? item.images : item.image ? [item.image] : []
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const startSlideshow = () => {
    if (images.length <= 1 || intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 1200)
  }

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIndex(0)
  }

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = (y / rect.height - 0.5) * -10
    const rotateY = (x / rect.width - 0.5) * 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTransform = (e) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  const currentImage = images[index] || ''

  return (
    <button type="button" onClick={onClick} className="group text-left w-full">
      <div className="premium-border overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-glow transition duration-300">
        <div
          className="relative aspect-[3/4] overflow-hidden transition-transform duration-300"
          onMouseEnter={startSlideshow}
          onMouseLeave={(e) => {
            stopSlideshow()
            resetTransform(e)
          }}
          onMouseMove={handleMouseMove}
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
              draggable="false"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-800" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/70">
            {item.type}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
              {item.tag || item.type}
            </div>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
            {item.type}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {item.context || item.summary}
          </p>
          {(item.result || item.summary) && (
            <p className="mt-3 text-sm font-medium text-amber-200">
              {item.result || item.summary}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState('political')
  const [activeItem, setActiveItem] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const touchStartXRef = useRef(0)

  const items = useMemo(
    () => (tab === 'political' ? politicalPortfolio : commercialPortfolio),
    [tab]
  )

  useEffect(() => {
    if (!activeItem) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeItem])

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (!activeItem?.images?.length) return

    const endX = e.changedTouches[0].clientX
    const diff = touchStartXRef.current - endX

    if (diff > 50) {
      setActiveImg((prev) => (prev + 1) % activeItem.images.length)
    } else if (diff < -50) {
      setActiveImg((prev) =>
        prev === 0 ? activeItem.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="portfolio" className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Two portfolio systems: political communication and commercial brand work."
          description="Built to feel organized, credible, and premium—so the studio looks serious in both public campaign and business environments."
        />

        <Reveal className="mt-8">
          <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-2">
            {portfolioTabs.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  tab === item.id
                    ? 'bg-amber-300 text-slate-950'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <PortfolioCard
                  item={item}
                  onClick={() => {
                    setActiveItem(item)
                    setActiveImg(0)
                  }}
                />
              </motion.div>
            ))}
          </div>
        </Reveal>

        <AnimatePresence>
          {activeItem && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/82 px-4 py-6 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.96, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.96, y: 20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-glow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div
                    className="aspect-[3/4] overflow-hidden bg-slate-900"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {activeItem.images?.length ? (
                      <img
                        src={activeItem.images[activeImg] || activeItem.image}
                        alt={activeItem.title}
                        className="h-full w-full object-cover object-top"
                        draggable="false"
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-800" />
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                          Portfolio preview
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {activeItem.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveItem(null)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
                      >
                        Close
                      </button>
                    </div>

                    <div className="mt-6 space-y-4">
                      <InfoRow label="Type" value={activeItem.type} />
                      <InfoRow
                        label="Context"
                        value={activeItem.context || activeItem.summary}
                      />
                      {(activeItem.result || activeItem.summary) && (
                        <InfoRow
                          label="Outcome"
                          value={activeItem.result || activeItem.summary}
                        />
                      )}
                    </div>

                    {activeItem.images?.length > 1 && (
                      <div className="mt-6 grid grid-cols-4 gap-2">
                        {activeItem.images.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveImg(i)}
                            className={`overflow-hidden rounded-xl border transition ${
                              activeImg === i
                                ? 'border-amber-400'
                                : 'border-transparent'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${activeItem.title} ${i + 1}`}
                              className="h-20 w-full object-cover object-top"
                              draggable="false"
                            />
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

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  )
}