import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function PropertyCard({ property, className = '' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] bg-cream/40 border border-softgray/40 transition-all duration-500 hover:shadow-float hover:-translate-y-1 ${className}`}
    >
      <Link to={`/opportunities/${property.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-4 top-4 rounded-xl bg-offwhite/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest">
            {property.type}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{property.name}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} aria-hidden="true" />
                {property.location}
              </p>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-offwhite">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
            {property.shortDescription}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-softgray/50 pt-4">
            <p className="font-display text-lg font-semibold text-ink">{property.price}</p>
            <span className="text-sm font-semibold text-forest">{property.cta}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
