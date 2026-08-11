import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../data/company'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-offwhite/92 backdrop-blur-md shadow-soft border-b border-softgray/50'
          : 'bg-offwhite/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4"
        aria-label="Primary"
      >
        <Link to="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-offwhite font-body font-semibold text-sm tracking-wide">
            A
          </span>
          <span className="font-body font-semibold text-[15px] tracking-[0.02em] text-ink">
            {COMPANY.name}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-forest bg-cream'
                      : 'text-muted hover:text-ink hover:bg-cream/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/join" className="!py-3 !px-5">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-softgray/70 bg-offwhite text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-softgray/50 bg-offwhite px-4 pb-8 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3.5 text-base font-medium ${
                      isActive ? 'bg-cream text-forest' : 'text-charcoal hover:bg-cream/70'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button to="/join" className="w-full">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
