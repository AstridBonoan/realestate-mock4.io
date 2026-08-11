const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'investments', label: 'Investments' },
  { id: 'rentals', label: 'Rentals' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="group"
      aria-label="Filter opportunities"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter.id
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
              isActive
                ? 'bg-forest text-offwhite shadow-soft'
                : 'bg-cream text-charcoal hover:bg-softgray/50'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

export { FILTERS }
