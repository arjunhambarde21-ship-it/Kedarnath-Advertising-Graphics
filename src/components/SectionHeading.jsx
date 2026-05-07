// SectionHeading.jsx
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'mx-auto items-center text-center' : 'items-start'}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FCE300]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-white/60">{description}</p>}
    </div>
  )
}