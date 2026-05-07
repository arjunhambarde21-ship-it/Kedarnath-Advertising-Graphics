import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contactMethods, brand } from '../data/siteData'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together"
          description="Reach out for branding, campaigns, or any creative need."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-[#12132F] p-6">
              <h3 className="text-2xl font-semibold text-white">{brand.name}</h3>
              <p className="mt-2 text-sm text-white/60">Premium advertising, branding & political design.</p>
              <div className="mt-6 space-y-4">
                {contactMethods.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0A0B1A] p-4 transition hover:border-[#FCE300]/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E1A69] text-white">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/50">{item.title}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#12132F] p-6">
              <form className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0B1A] px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#FCE300]/50"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Phone</label>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0B1A] px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#FCE300]/50"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Requirement</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project"
                    className="w-full rounded-xl border border-white/10 bg-[#0A0B1A] px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#FCE300]/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#FCE300] py-3 font-semibold text-[#1E1A69] transition hover:scale-[1.02]"
                >
                  Send Enquiry
                </button>
              </form>
              <div className="mt-6 flex gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\D/g, '')}`}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
                >
                  Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}