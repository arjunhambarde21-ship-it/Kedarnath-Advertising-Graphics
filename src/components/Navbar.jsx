import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { brand, navItems } from '../data/siteData'
import logo from '../assets/brandLogo/kedarnath-brand-logo2.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => open && setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0B1A]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img src={logo} alt={brand.name} className="h-full w-full object-contain p-1" />
          </div>
          <span className="text-lg font-semibold text-white">{brand.short}</span>
        </a>

        <nav className="hidden gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            className="hidden items-center gap-2 rounded-full bg-[#FCE300] px-4 py-2 text-sm font-semibold text-[#1E1A69] transition hover:scale-105 sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0A0B1A]/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#FCE300] px-4 py-3 text-sm font-semibold text-[#1E1A69]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}