import Button from './Button'

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  image,
  dark = false,
  className = '',
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] mx-4 sm:mx-6 lg:mx-10 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
      )}
      <div
        className={`absolute inset-0 ${
          dark || image
            ? 'bg-gradient-to-br from-ink/90 via-forest/80 to-charcoal/85'
            : 'bg-gradient-to-br from-forest to-emerald'
        }`}
      />
      <div className="relative px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite text-balance leading-[1.05]">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base md:text-lg text-softgray max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          {primaryLabel && primaryTo && (
            <Button to={primaryTo} variant="light">
              {primaryLabel}
            </Button>
          )}
          {secondaryLabel && secondaryTo && (
            <Button to={secondaryTo} variant="outlineLight">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
