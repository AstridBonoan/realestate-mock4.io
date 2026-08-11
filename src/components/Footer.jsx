import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../data/company'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.55c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.46V23h-4V8.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

const social = [
  { Icon: LinkedInIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: FacebookIcon, label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-softgray/50 bg-charcoal text-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-offwhite font-body font-semibold text-sm">
                A
              </span>
              <span className="font-body font-semibold text-[15px] tracking-[0.02em]">
                {COMPANY.name}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-softgray max-w-xs">
              {COMPANY.mission}
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-softgray transition hover:bg-forest hover:text-offwhite"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-softgray">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-softgray transition hover:text-offwhite"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-softgray">
              Join
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/membership" className="text-sm text-softgray hover:text-offwhite">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-softgray hover:text-offwhite">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm text-softgray hover:text-offwhite">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-softgray">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-softgray">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-offwhite">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-offwhite">
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-softgray/80">
            © {new Date().getFullYear()} {COMPANY.name}. Mockup Design #4 — placeholder content.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-softgray/80">
            <a href="#privacy" className="hover:text-offwhite">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-offwhite">
              Terms
            </a>
            <a href="#disclaimer" className="hover:text-offwhite">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
