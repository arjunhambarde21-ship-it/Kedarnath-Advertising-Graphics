import { brand, navItems } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B1A]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto_auto]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E1A69] text-white font-bold">K</div>
              <div>
                <p className="font-semibold text-white">{brand.name}</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Creative Studio</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/50">
              Premium creative support for businesses & political communication in Basmath.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Links</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/50">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <div className="mt-3 space-y-1 text-sm text-white/50">
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}