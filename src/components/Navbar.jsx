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
        className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4 bg-inherit"
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
          className="relative z-50 lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-softgray/70 bg-offwhite text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Backdrop — tap outside to close without navigating */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`fixed inset-0 z-40 bg-ink/35 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      <div
        id="mobile-menu"
        className={`lg:hidden relative z-50 border-t border-softgray/50 bg-offwhite transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? 'max-h-[min(70dvh,32rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-h-[min(70dvh,32rem)] overflow-y-auto overscroll-contain px-4 pb-8 pt-4">
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
    </header>
  )
}
