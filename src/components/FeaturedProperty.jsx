import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Button from './Button'

export default function FeaturedProperty({ property, reverse = false }) {
  return (
    <article className="group grid overflow-hidden rounded-[2rem] bg-charcoal text-offwhite lg:grid-cols-2">
      <div className={`relative min-h-[280px] sm:min-h-[360px] ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={property.image}
          alt={property.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent lg:hidden" />
      </div>
      <div
        className={`flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 ${
          reverse ? 'lg:order-1' : ''
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tan">
          Featured · {property.type}
        </span>
        <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-offwhite leading-tight">
          {property.name}
        </h3>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-softgray">
          <MapPin size={14} aria-hidden="true" />
          {property.location}
        </p>
        <p className="mt-5 text-base leading-relaxed text-softgray max-w-md">
          {property.shortDescription}
        </p>
        <p className="mt-6 font-display text-2xl font-semibold text-offwhite">{property.price}</p>
        <div className="mt-8">
          <Button to={`/opportunities/${property.id}`} variant="light" className="gap-2">
            {property.cta}
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </article>
  )
}
