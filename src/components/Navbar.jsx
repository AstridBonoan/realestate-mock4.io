import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/company'
import Button from './Button'
import Logo from './Logo'

function scrollToTop(smooth = false) {
  window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    closeMenu()
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const goHome = (event) => {
    closeMenu()
    const atHome = location.pathname === '/' || location.pathname === ''
    if (atHome) {
      event.preventDefault()
      scrollToTop(true)
    }
  }

  const handleNavClick = (path) => (event) => {
    closeMenu()
    const atTarget = location.pathname === path
    if (atTarget) {
      event.preventDefault()
      scrollToTop(true)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-offwhite/95 backdrop-blur-md shadow-soft border-b border-softgray/50'
          : 'bg-offwhite/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4"
        aria-label="Primary"
      >
        <Logo onClick={goHome} />

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={handleNavClick(link.path)}
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
          <Button to="/join" className="!py-3 !px-5" onClick={handleNavClick('/join')}>
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="relative z-[60] lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-softgray/70 bg-offwhite text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Fixed overlay — does not push page content */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto overscroll-contain bg-offwhite shadow-float transition-transform duration-300 ease-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-softgray/50">
            <Logo onClick={goHome} />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-softgray/70 bg-offwhite text-ink"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-4 sm:px-6 pb-10 pt-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={handleNavClick(link.path)}
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
              <Button to="/join" className="w-full" onClick={handleNavClick('/join')}>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
