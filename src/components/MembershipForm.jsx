import { useState } from 'react'
import Button from './Button'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  occupation: '',
  experience: '',
  interest: '',
  goals: '',
  referral: '',
  additional: '',
  agree: false,
}

const interests = [
  'Membership & Community',
  'Investments',
  'Rentals',
  'Partnerships',
  'Learning & Networking',
  'Other',
]

export default function MembershipForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'First name is required'
    if (!form.lastName.trim()) next.lastName = 'Last name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    if (!form.city.trim()) next.city = 'City is required'
    if (!form.state.trim()) next.state = 'State is required'
    if (!form.occupation.trim()) next.occupation = 'Occupation is required'
    if (!form.experience.trim()) next.experience = 'Please share your experience'
    if (!form.interest) next.interest = 'Select a primary interest'
    if (!form.goals.trim()) next.goals = 'Please share what you hope to gain'
    if (!form.agree) next.agree = 'Please agree to be contacted'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-forest/20 bg-gradient-to-br from-cream to-offwhite p-8 sm:p-12 text-center shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">Application received</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink">
          You&apos;re In The Process.
        </h2>
        <p className="mt-4 text-muted leading-relaxed max-w-md mx-auto">
          Your application has been received. Our team will review your information and follow up
          with you.
        </p>
        <Button to="/membership" className="mt-8">
          Back to Membership
        </Button>
      </div>
    )
  }

  const fieldClass =
    'w-full rounded-2xl border border-softgray/70 bg-offwhite px-4 py-3.5 text-sm text-ink placeholder:text-muted/60 transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20'
  const labelClass = 'mb-1.5 block text-sm font-medium text-charcoal'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Membership application">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={form.firstName}
            onChange={update('firstName')}
            className={fieldClass}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1.5 text-xs text-red-700">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={form.lastName}
            onChange={update('lastName')}
            className={fieldClass}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <p className="mt-1.5 text-xs text-red-700">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            className={fieldClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-700">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input id="city" name="city" value={form.city} onChange={update('city')} className={fieldClass} />
          {errors.city && <p className="mt-1.5 text-xs text-red-700">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>
            State
          </label>
          <input id="state" name="state" value={form.state} onChange={update('state')} className={fieldClass} />
          {errors.state && <p className="mt-1.5 text-xs text-red-700">{errors.state}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="occupation" className={labelClass}>
          Occupation
        </label>
        <input
          id="occupation"
          name="occupation"
          value={form.occupation}
          onChange={update('occupation')}
          className={fieldClass}
        />
        {errors.occupation && <p className="mt-1.5 text-xs text-red-700">{errors.occupation}</p>}
      </div>

      <div>
        <label htmlFor="experience" className={labelClass}>
          Real Estate Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          value={form.experience}
          onChange={update('experience')}
          className={fieldClass}
        />
        {errors.experience && <p className="mt-1.5 text-xs text-red-700">{errors.experience}</p>}
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>
          Primary Real Estate Interest
        </label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={update('interest')}
          className={fieldClass}
        >
          <option value="">Select an interest</option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.interest && <p className="mt-1.5 text-xs text-red-700">{errors.interest}</p>}
      </div>

      <div>
        <label htmlFor="goals" className={labelClass}>
          What are you hoping to gain from membership?
        </label>
        <textarea
          id="goals"
          name="goals"
          rows={3}
          value={form.goals}
          onChange={update('goals')}
          className={fieldClass}
        />
        {errors.goals && <p className="mt-1.5 text-xs text-red-700">{errors.goals}</p>}
      </div>

      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about us?
        </label>
        <input
          id="referral"
          name="referral"
          value={form.referral}
          onChange={update('referral')}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="additional" className={labelClass}>
          Additional Information
        </label>
        <textarea
          id="additional"
          name="additional"
          rows={3}
          value={form.additional}
          onChange={update('additional')}
          className={fieldClass}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal cursor-pointer">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={update('agree')}
            className="mt-1 h-4 w-4 rounded border-softgray text-forest focus:ring-forest"
          />
          <span>I agree to be contacted regarding my application.</span>
        </label>
        {errors.agree && <p className="mt-1.5 text-xs text-red-700">{errors.agree}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Submit Application
      </Button>
    </form>
  )
}
