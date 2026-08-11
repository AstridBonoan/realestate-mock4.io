import { Link, useParams } from 'react-router-dom'
import PropertyDetail from '../components/PropertyDetail'
import Button from '../components/Button'
import { getPropertyById } from '../data/properties'

export default function PropertyDetailPage() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Opportunity Not Found</h1>
        <p className="mt-4 text-muted">This listing may have moved or is unavailable in the mockup.</p>
        <Button to="/opportunities" className="mt-8">
          Back to Opportunities
        </Button>
      </section>
    )
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/opportunities" className="hover:text-forest">
            Opportunities
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{property.name}</span>
        </nav>
      </div>
      <PropertyDetail property={property} />
    </>
  )
}
