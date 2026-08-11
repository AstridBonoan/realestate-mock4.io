import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import FilterBar from '../components/FilterBar'
import FeaturedProperty from '../components/FeaturedProperty'
import PropertyCard from '../components/PropertyCard'
import ScrollReveal from '../components/ScrollReveal'
import { properties } from '../data/properties'

function filterProperties(list, filter) {
  if (filter === 'all') return list
  return list.filter((p) => p.category.includes(filter))
}

export default function Opportunities() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('filter') || 'all'
  const [active, setActive] = useState(initial)

  useEffect(() => {
    const fromUrl = params.get('filter') || 'all'
    setActive(fromUrl)
  }, [params])

  const filtered = useMemo(() => filterProperties(properties, active), [active])

  const handleFilter = (id) => {
    setActive(id)
    if (id === 'all') setParams({})
    else setParams({ filter: id })
  }

  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)
  const rowA = rest.slice(0, 2)
  const midFeatured = featured[1] || featured[0]
  const rowB = rest.slice(2, 5)
  const primaryFeatured = featured[0]

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Opportunities"
            title="Explore What's Possible."
            description="Discover properties, rental opportunities, and real estate opportunities connected to our growing network."
          />
        </ScrollReveal>
        <div className="mt-10">
          <FilterBar active={active} onChange={handleFilter} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-20 md:pb-28">
        {filtered.length === 0 ? (
          <p className="rounded-2xl bg-cream/70 px-6 py-10 text-center text-muted">
            No opportunities match this filter yet. Try another category.
          </p>
        ) : (
          <div className="space-y-6 md:space-y-8">
            {primaryFeatured && (
              <ScrollReveal>
                <FeaturedProperty property={primaryFeatured} />
              </ScrollReveal>
            )}

            {rowA.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {rowA.map((property, i) => (
                  <ScrollReveal key={property.id} delay={i * 70}>
                    <PropertyCard property={property} />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {midFeatured && midFeatured.id !== primaryFeatured?.id && (
              <ScrollReveal>
                <FeaturedProperty property={midFeatured} reverse />
              </ScrollReveal>
            )}

            {!primaryFeatured && rest.length > 0 && (
              <ScrollReveal>
                <FeaturedProperty property={rest[0]} />
              </ScrollReveal>
            )}

            {rowB.length > 0 && (
              <div className="grid gap-6 md:grid-cols-3">
                {rowB.map((property, i) => (
                  <ScrollReveal key={property.id} delay={i * 70}>
                    <PropertyCard property={property} />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Remaining items not covered by magazine layout */}
            {(() => {
              const shown = new Set([
                primaryFeatured?.id,
                midFeatured?.id,
                ...rowA.map((p) => p.id),
                ...rowB.map((p) => p.id),
              ].filter(Boolean))
              if (!primaryFeatured && rest[0]) shown.add(rest[0].id)
              const leftover = filtered.filter((p) => !shown.has(p.id))
              if (!leftover.length) return null
              return (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {leftover.map((property, i) => (
                    <ScrollReveal key={property.id} delay={i * 60}>
                      <PropertyCard property={property} />
                    </ScrollReveal>
                  ))}
                </div>
              )
            })()}
          </div>
        )}

        <p className="mt-12 text-sm text-muted leading-relaxed max-w-3xl">
          <strong className="text-ink">Disclaimer:</strong> Listings are illustrative for this
          mockup. Availability, pricing, and terms may vary.
        </p>
      </section>
    </>
  )
}
