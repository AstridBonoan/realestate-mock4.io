import { Link, useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import { COMPANY } from '../data/company'

const quickLinks = [
  { label: 'Membership', inquiry: 'Membership', to: '/contact?type=Membership' },
  { label: 'Investment', inquiry: 'Investment', to: '/contact?type=Investment' },
  { label: 'Rental', inquiry: 'Rental', to: '/contact?type=Rental' },
  { label: 'Partnership', inquiry: 'Partnership', to: '/contact?type=Partnership' },
]

export default function Contact() {
  const [params] = useSearchParams()
  const defaultInquiry = params.get('type') || ''

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 md:py-20">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest">Contact</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.02]">
            Let&apos;s Connect.
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Have a question, opportunity, property, or partnership idea? Start the conversation.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 items-start">
        <ScrollReveal>
          <div className="rounded-[2rem] bg-cream/70 border border-softgray/40 p-7 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Contact Information</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3 text-sm text-muted">
                <Mail className="mt-0.5 shrink-0 text-forest" size={18} aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-forest">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-muted">
                <Phone className="mt-0.5 shrink-0 text-forest" size={18} aria-hidden="true" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-forest">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 shrink-0 text-forest" size={18} aria-hidden="true" />
                <span>{COMPANY.location}</span>
              </li>
              <li className="flex gap-3 text-sm text-muted">
                <Clock className="mt-0.5 shrink-0 text-forest" size={18} aria-hidden="true" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>

            <h3 className="mt-10 font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest">
              Quick Inquiry
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-xl bg-offwhite border border-softgray/50 px-4 py-2.5 text-sm font-medium text-charcoal transition hover:border-forest hover:text-forest"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-[2rem] border border-softgray/50 bg-offwhite p-6 sm:p-8 md:p-10 shadow-soft">
            <ContactForm key={defaultInquiry} defaultInquiry={defaultInquiry} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
