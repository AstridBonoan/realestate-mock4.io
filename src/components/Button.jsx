import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest text-offwhite hover:bg-emerald shadow-soft',
  secondary:
    'bg-transparent text-ink border border-charcoal/20 hover:border-forest hover:text-forest',
  light:
    'bg-offwhite text-ink hover:bg-cream',
  outlineLight:
    'bg-transparent text-offwhite border border-offwhite/40 hover:bg-offwhite/10',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
