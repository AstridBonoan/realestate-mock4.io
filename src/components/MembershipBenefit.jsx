import {
  Network,
  Handshake,
  Compass,
  Users,
  TrendingUp,
} from 'lucide-react'

const icons = {
  network: Network,
  collaborate: Handshake,
  discover: Compass,
  participate: Users,
  grow: TrendingUp,
}

export default function MembershipBenefit({ benefit, index }) {
  const Icon = icons[benefit.id] || Network

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-softgray/40 bg-offwhite p-6 sm:p-8 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-float hover:border-forest/20">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-offwhite transition-transform duration-400 group-hover:scale-105">
          <Icon size={26} aria-hidden="true" />
        </span>
        <span className="font-display text-4xl font-bold text-cream group-hover:text-tan transition-colors">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-ink uppercase tracking-tight">
        {benefit.title}
      </h3>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">{benefit.description}</p>
    </article>
  )
}
