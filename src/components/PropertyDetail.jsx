import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Button from './Button'

export default function PropertyDetail({ property }) {
  const [active, setActive] = useState(0)
  const images = property.gallery?.length ? property.gallery : [property.image]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="overflow-hidden rounded-[2rem] aspect-[16/11] bg-cream">
            <img
              src={images[active]}
              alt={`${property.name} — image ${active + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={active === i}
                  className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                    active === i ? 'border-forest' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="inline-flex rounded-xl bg-cream px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest">
            {property.type}
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
            {property.name}
          </h1>
          <p className="mt-3 flex items-center gap-1.5 text-muted">
            <MapPin size={16} aria-hidden="true" />
            {property.location}
          </p>
          <p className="mt-6 font-display text-3xl font-bold text-forest">{property.price}</p>
          <p className="mt-1 text-sm text-muted">
            {property.priceLabel} · {property.availability}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">{property.description}</p>

          <div className="mt-8 rounded-[1.5rem] border border-softgray/50 bg-cream/50 p-5">
            <h2 className="font-display text-lg font-semibold text-ink">Property Details</h2>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {Object.entries(property.details).map(([key, value]) => (
                <div key={key}>
                  <dt className="uppercase tracking-wider text-xs text-muted">{key}</dt>
                  <dd className="mt-1 font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-lg font-semibold text-ink">Features</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl bg-offwhite border border-softgray/40 px-3 py-2.5 text-sm text-charcoal"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-forest px-6 py-8 text-offwhite">
            <h2 className="font-display text-2xl font-bold">Interested?</h2>
            <p className="mt-2 text-sm text-softgray">
              Start a conversation with our team about this opportunity.
            </p>
            <Button to="/contact" variant="light" className="mt-5">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <aside className="mt-12 rounded-2xl border border-tan/40 bg-cream/60 px-5 py-4 text-sm text-muted leading-relaxed">
        <strong className="text-ink">Disclaimer:</strong> Property information on this site is
        illustrative for the mockup. Actual opportunities, availability, pricing, and terms may
        vary and should be verified directly with Aurea Network.
      </aside>
    </div>
  )
}
