import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { brand, navItems } from '../data/siteData'
import logo from '../assets/brandLogo/kedarnath-brand-logo2.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_40px_rgba(251,191,36,0.12)]">
            <img
              src={logo}
              alt={brand.name}
              className="h-full w-full object-contain p-1.5"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-5 text-white sm:text-base">
              {brand.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
              Premium creative studio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/4 px-2 py-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
              'Hello Kedarnath Advertising & Graphics, I want to discuss a project.'
            )}`}
            className="hidden items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-300/15 sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/8 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/8 bg-slate-950/96 px-4 py-4 backdrop-blur-2xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/6 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/8"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                'Hello Kedarnath Advertising & Graphics, I want to discuss a project.'
              )}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}