import { ArrowUpRight } from 'lucide-react'

const icons = {
  'property-owners': '01',
  investors: '02',
  developers: '03',
  'business-partners': '04',
}

export default function PartnerCard({ partner }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-softgray/40 bg-gradient-to-br from-offwhite to-cream/80 p-7 sm:p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-float hover:border-forest/25">
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl font-bold text-tan">{icons[partner.id]}</span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-offwhite">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-8 font-display text-2xl font-bold text-ink">{partner.title}</h3>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted flex-1">
        {partner.description}
      </p>
    </article>
  )
}
