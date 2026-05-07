import { brand, navItems } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-amber-200">
                K
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {brand.name}
                </p>
                <p className="text-xs uppercase tracking-[0.26em] text-white/35">
                  Creative • Printing • Advertising
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Premium creative support for local businesses and political communication in Basmath, Hingoli district, Maharashtra.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick links</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p className="max-w-xs">{brand.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/6 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Built for speed, trust, and future admin-panel integration.</p>
        </div>
      </div>
    </footer>
  )
}
