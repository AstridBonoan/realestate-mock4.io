import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest text-offwhite hover:bg-emerald',
  secondary:
    'bg-transparent text-ink border border-charcoal/25 hover:border-forest hover:text-forest',
  light:
    'bg-offwhite text-ink hover:bg-cream',
  outlineLight:
    'bg-transparent text-offwhite border border-offwhite/45 hover:bg-offwhite/10',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[13px] font-semibold tracking-[0.04em] uppercase transition-all duration-250 active:scale-[0.99] ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...props}>
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
