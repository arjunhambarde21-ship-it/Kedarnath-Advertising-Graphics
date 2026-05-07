import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contactMethods, brand } from '../data/siteData'

export default function Contact() {
  return (
    <section id="contact" className="section-anchor py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build powerful creative communication for your brand."
          description="Reach out for branding, political campaigns, social media management, performance marketing, printing, and creative support."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="premium-border rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow lg:p-8">
              <h3 className="text-2xl font-semibold text-white">
                {brand.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Premium advertising, branding, political campaign design, and social media creative solutions based in Basmath (Vasmat), Maharashtra.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                <p className="font-medium text-white">Quick response flow</p>
                <p className="mt-2 leading-6">
                  Best suited for business owners and campaign teams who need clarity, quick turnaround, and a premium presentation style.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {contactMethods.map((item) => {
                  const Icon = item.icon
                  const external = item.href.startsWith('http')

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={external ? '_blank' : '_self'}
                      rel={external ? 'noreferrer noopener' : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition duration-300 hover:border-amber-300/30 hover:bg-slate-900/80"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-amber-200">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                          {item.title}
                        </p>
                        <p className="mt-2 truncate text-sm font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="premium-border rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow lg:p-8">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-amber-300/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your mobile number"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-amber-300/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Project Requirement
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell us about your project"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-amber-300/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:bg-amber-200"
                >
                  Send Enquiry
                </button>
              </form>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white transition duration-300 hover:border-emerald-400/40 hover:bg-white/5"
                >
                  WhatsApp
                </a>

                <a
                  href={`tel:${brand.phone.replace(/\D/g, '')}`}
                  className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white transition duration-300 hover:border-amber-400/40 hover:bg-white/5"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
