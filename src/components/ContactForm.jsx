import { useState } from 'react'
import Button from './Button'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  subject: '',
  message: '',
}

const inquiryTypes = [
  'General Inquiry',
  'Membership',
  'Investment',
  'Rental',
  'Partnership',
  'Property Owner',
  'Other',
]

export default function ContactForm({ defaultInquiry = '' }) {
  const [form, setForm] = useState({ ...initial, inquiryType: defaultInquiry })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'First name is required'
    if (!form.lastName.trim()) next.lastName = 'Last name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.inquiryType) next.inquiryType = 'Select an inquiry type'
    if (!form.subject.trim()) next.subject = 'Subject is required'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const fieldClass =
    'w-full rounded-2xl border border-softgray/70 bg-offwhite px-4 py-3.5 text-sm text-ink placeholder:text-muted/60 transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20'
  const labelClass = 'mb-1.5 block text-sm font-medium text-charcoal'

  if (submitted) {
    return (
      <div
        className="rounded-[2rem] border border-forest/20 bg-cream/80 p-8 text-center"
        role="status"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Message Sent</h2>
        <p className="mt-3 text-muted leading-relaxed">
          Thank you for reaching out. Our team will follow up shortly. (Frontend mockup — no backend.)
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => {
            setSubmitted(false)
            setForm({ ...initial, inquiryType: defaultInquiry })
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="contact-firstName"
            value={form.firstName}
            onChange={update('firstName')}
            className={fieldClass}
            autoComplete="given-name"
          />
          {errors.firstName && <p className="mt-1.5 text-xs text-red-700">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="contact-lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="contact-lastName"
            value={form.lastName}
            onChange={update('lastName')}
            className={fieldClass}
            autoComplete="family-name"
          />
          {errors.lastName && <p className="mt-1.5 text-xs text-red-700">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            className={fieldClass}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            className={fieldClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className={labelClass}>
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          value={form.inquiryType}
          onChange={update('inquiryType')}
          className={fieldClass}
        >
          <option value="">Select type</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.inquiryType && <p className="mt-1.5 text-xs text-red-700">{errors.inquiryType}</p>}
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input id="subject" value={form.subject} onChange={update('subject')} className={fieldClass} />
        {errors.subject && <p className="mt-1.5 text-xs text-red-700">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          className={fieldClass}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-700">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  )
}
