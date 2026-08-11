export default function FloatingCard({ title, subtitle, className = '', animation = 'float-a' }) {
  return (
    <div
      className={`rounded-2xl bg-offwhite/95 backdrop-blur-sm px-4 py-3 shadow-float border border-cream/80 ${animation} ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-forest font-semibold">{subtitle}</p>
      <p className="text-sm font-semibold text-ink mt-0.5">{title}</p>
    </div>
  )
}
