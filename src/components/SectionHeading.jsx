export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignClasses =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.7)]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
