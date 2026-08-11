import { Link } from 'react-router-dom'
import { COMPANY } from '../data/company'

/**
 * Aurea mark: an architectural “A” built from three connected nodes —
 * structure + relationships in one symbol.
 */
function Mark({ className = '', title = true }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{COMPANY.name}</title> : null}
      {/* Outer geometric A */}
      <path
        d="M20 4.5 L34.5 34.5 H28.2 L20 15.2 L11.8 34.5 H5.5 L20 4.5 Z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M20 7.2 L32.2 34 H28.6 L20 14.8 L11.4 34 H7.8 L20 7.2 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Network crossbar — three connected people/nodes */}
      <line
        x1="13.5"
        y1="25.5"
        x2="26.5"
        y2="25.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="13.5" cy="25.5" r="2.35" fill="currentColor" />
      <circle cx="20" cy="25.5" r="2.35" fill="currentColor" />
      <circle cx="26.5" cy="25.5" r="2.35" fill="currentColor" />
      {/* Apex node */}
      <circle cx="20" cy="8.2" r="2.1" fill="currentColor" />
    </svg>
  )
}

export default function Logo({
  to = '/',
  variant = 'dark',
  showWordmark = true,
  className = '',
}) {
  const tone = variant === 'light' ? 'text-offwhite' : 'text-forest'
  const wordTone = variant === 'light' ? 'text-offwhite' : 'text-ink'
  const subTone = variant === 'light' ? 'text-softgray' : 'text-muted'

  const content = (
    <>
      <span className={`inline-flex shrink-0 ${tone}`}>
        <Mark className="h-10 w-10" title={!showWordmark} />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.15rem] font-semibold tracking-[-0.02em] ${wordTone}`}
          >
            Aurea
          </span>
          <span
            className={`mt-1 font-body text-[10px] font-semibold uppercase tracking-[0.28em] ${subTone}`}
          >
            Network
          </span>
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center gap-3 ${className}`}
        aria-label={COMPANY.name}
      >
        {content}
      </Link>
    )
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label={COMPANY.name}>
      {content}
    </div>
  )
}

export { Mark as LogoMark }
