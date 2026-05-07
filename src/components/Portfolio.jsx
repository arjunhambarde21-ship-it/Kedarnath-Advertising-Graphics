import { useEffect, useMemo, useRef, useState } from 'react'
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
  const cardRef = useRef(null)
  const intervalRef = useRef(null)
  const touchDeviceRef = useRef(false)
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const images = item.images?.length
    ? item.images
    : item.image
      ? [item.image]
      : []

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    const update = () => {
      touchDeviceRef.current = mq.matches
    }

    update()

    if (mq.addEventListener) {
      mq.addEventListener('change', update)
      return () => mq.removeEventListener('change', update)
    }

    mq.addListener(update)
    return () => mq.removeListener(update)
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.45,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startSlideshow = () => {
    if (images.length <= 1 || intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 1800)
  }

  useEffect(() => {
    if (!touchDeviceRef.current) return undefined

    if (isVisible && images.length > 1) {
      startSlideshow()
    } else {
      stopSlideshow()
    }

    return () => stopSlideshow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, images.length])

  useEffect(() => {
    return () => stopSlideshow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseEnter = () => {
    if (touchDeviceRef.current) return
    startSlideshow()
  }

  const handleMouseLeave = () => {
    stopSlideshow()
    setIndex(0)
  }

  const handleMouseMove = (e) => {
    if (reduceMotion) return
    if (touchDeviceRef.current) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = (y / rect.height - 0.5) * -6
    const rotateY = (x / rect.width - 0.5) * 6

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTransform = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  const currentImage = images[index] || ''

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onClick}
      className="group w-full text-left"
      aria-label={item.title}
    >
      <div className="premium-border overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-glow transition duration-300">
        <div
          className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={(e) => {
            handleMouseLeave()
            resetTransform(e)
          }}
          onMouseMove={handleMouseMove}
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              draggable="false"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-800" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
            {item.type}
          </div>

          {images.length > 1 ? (
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[11px] font-medium text-white/75 backdrop-blur-sm">
              {index + 1}/{images.length}
            </div>
          ) : null}

          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/85 backdrop-blur-sm">
              <span className="truncate">{item.tag || item.type}</span>
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
  const touchEndXRef = useRef(0)

  const items = useMemo(
    () => (tab === 'political' ? politicalPortfolio : commercialPortfolio),
    [tab]
  )

  useEffect(() => {
    if (!activeItem) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null)
      if (event.key === 'ArrowRight' && activeItem.images?.length > 1) {
        setActiveImg((prev) => (prev + 1) % activeItem.images.length)
      }
      if (event.key === 'ArrowLeft' && activeItem.images?.length > 1) {
        setActiveImg((prev) =>
          prev === 0 ? activeItem.images.length - 1 : prev - 1
        )
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeItem])

  useEffect(() => {
    setActiveImg(0)
  }, [activeItem])

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!activeItem?.images?.length) return

    const diff = touchStartXRef.current - touchEndXRef.current

    if (diff > 50) {
      setActiveImg((prev) => (prev + 1) % activeItem.images.length)
    } else if (diff < -50) {
      setActiveImg((prev) =>
        prev === 0 ? activeItem.images.length - 1 : prev - 1
      )
    }
  }

  const activeImages = activeItem?.images?.length
    ? activeItem.images
    : activeItem?.image
      ? [activeItem.image]
      : []

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
                className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 sm:py-2.5 ${
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
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
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
              className="fixed inset-0 z-[60] bg-slate-950/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
            >
              <div className="flex h-full items-end justify-center p-0 sm:items-center sm:p-4">
                <motion.div
                  initial={{ scale: 0.98, y: 18, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.98, y: 18, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-none border border-white/10 bg-slate-950 sm:h-[92dvh] sm:max-h-[92dvh] sm:rounded-[2rem] shadow-glow"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid h-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                    <div
                      className="relative h-[42dvh] overflow-hidden bg-slate-900 sm:h-[44dvh] lg:h-full lg:min-h-0"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {activeImages.length ? (
                        <img
                          src={activeImages[activeImg] || activeImages[0]}
                          alt={activeItem.title}
                          className="h-full w-full object-cover object-top"
                          draggable="false"
                          loading="eager"
                        />
                      ) : (
                        <div className="h-full w-full bg-slate-800" />
                      )}

                      {activeImages.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImg((prev) =>
                                prev === 0
                                  ? activeImages.length - 1
                                  : prev - 1
                              )
                            }
                            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white backdrop-blur-sm transition hover:bg-slate-950/90 sm:left-4"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              setActiveImg((prev) => (prev + 1) % activeImages.length)
                            }
                            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white backdrop-blur-sm transition hover:bg-slate-950/90 sm:right-4"
                            aria-label="Next image"
                          >
                            <ChevronRight size={18} />
                          </button>

                          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur-sm">
                            {activeImages.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setActiveImg(i)}
                                className={`h-2.5 rounded-full transition-all ${
                                  activeImg === i
                                    ? 'w-6 bg-amber-300'
                                    : 'w-2.5 bg-white/35'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      ) : null}

                      <button
                        type="button"
                        onClick={() => setActiveItem(null)}
                        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white backdrop-blur-sm transition hover:bg-slate-950/90 sm:right-4 sm:top-4"
                        aria-label="Close preview"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                            Portfolio preview
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                            {activeItem.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                          {activeItem.type}
                        </span>
                        {activeItem.tag ? (
                          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                            {activeItem.tag}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-6 space-y-4">
                        <InfoRow label="Context" value={activeItem.context || activeItem.summary} />
                        {(activeItem.result || activeItem.summary) ? (
                          <InfoRow
                            label="Outcome"
                            value={activeItem.result || activeItem.summary}
                          />
                        ) : null}
                      </div>

                      {activeImages.length > 1 ? (
                        <div className="mt-6">
                          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/40">
                            Gallery
                          </p>
                          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {activeImages.map((img, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setActiveImg(i)}
                                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border transition sm:h-24 sm:w-24 ${
                                  activeImg === i
                                    ? 'border-amber-400'
                                    : 'border-white/10'
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`${activeItem.title} ${i + 1}`}
                                  className="h-full w-full object-cover object-top"
                                  draggable="false"
                                  loading="lazy"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImg((prev) =>
                              prev === 0 ? activeImages.length - 1 : prev - 1
                            )
                          }
                          disabled={activeImages.length <= 1}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <ChevronLeft size={16} />
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImg((prev) => (prev + 1) % activeImages.length)
                          }
                          disabled={activeImages.length <= 1}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Next
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
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