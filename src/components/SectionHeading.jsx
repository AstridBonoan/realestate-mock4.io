export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-softgray' : 'text-forest'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.12] text-balance ${
          light ? 'text-offwhite' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-softgray' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
