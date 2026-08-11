import { Mail } from 'lucide-react'

export default function TeamMember({ member, className = '' }) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] bg-cream/50 border border-softgray/40 ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-forest">{member.position}</p>
        {member.specialty && (
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{member.specialty}</p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
        <div className="mt-5 flex gap-2">
          <a
            href={member.social.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-offwhite text-forest border border-softgray/50 transition hover:bg-forest hover:text-offwhite"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.55c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.46V23h-4V8.5z" />
            </svg>
          </a>
          <a
            href={`mailto:${member.social.email}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-offwhite text-forest border border-softgray/50 transition hover:bg-forest hover:text-offwhite"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
