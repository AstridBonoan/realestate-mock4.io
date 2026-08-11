import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { COMPANY } from '../data/company'
import { aboutTimeline } from '../data/content'

const values = [
  {
    title: 'Relationships First',
    description: 'We prioritize people and trust over transactions.',
  },
  {
    title: 'Transparent Opportunity',
    description: 'Clarity and honesty guide how we share opportunities.',
  },
  {
    title: 'Long-Term Thinking',
    description: 'We build for durable growth, not short-term noise.',
  },
  {
    title: 'Shared Progress',
    description: 'Members and partners grow stronger when collaboration is intentional.',
  },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493809842364-78817add758f?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-forest/80 to-charcoal/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24 md:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-softgray">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-offwhite leading-[1.02]">
            Building Something Bigger.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-softgray leading-relaxed">
            Aurea Network is a modern real estate community designed around membership,
            partnerships, and meaningful opportunity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <SectionHeading
              eyebrow="Who We Are"
              title="A professional community with a shared future."
              description="Placeholder content — customize this story to match your organization’s founding narrative."
            />
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                We believe real estate is most powerful when it connects people who want to grow
                together. Aurea Network brings members, partners, and opportunities into one
                relationship-driven platform.
              </p>
              <p>
                From membership gatherings to curated investments and rentals, our approach is
                simple: build trust, share opportunity, and grow with intention.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <article className="rounded-[2rem] bg-cream/70 border border-softgray/40 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">Mission</h2>
              <p className="mt-4 text-muted leading-relaxed">{COMPANY.mission}</p>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <article className="rounded-[2rem] bg-forest text-offwhite p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold">Vision</h2>
              <p className="mt-4 text-softgray leading-relaxed">{COMPANY.vision}</p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Relationships that unlock opportunity."
              description="We connect people first, then open pathways into properties, partnerships, and shared growth."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 70}>
                <article className="rounded-[1.5rem] bg-offwhite border border-softgray/40 p-6 h-full">
                  <h3 className="font-display text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Timeline"
            title="Our Values In Motion"
            description="A visual journey from the beginning to the future we are building."
          />
        </ScrollReveal>
        <ol className="mt-14 relative space-y-8 before:absolute before:left-[1.15rem] before:top-3 before:bottom-3 before:w-px before:bg-softgray md:before:left-1/2">
          {aboutTimeline.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <li
                className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div className={`${i % 2 === 1 ? 'md:order-2 md:text-left' : 'md:text-right'}`}>
                  <div
                    className={`inline-flex rounded-[1.5rem] bg-offwhite border border-softgray/50 p-6 sm:p-7 shadow-soft max-w-md ${
                      i % 2 === 0 ? 'md:ml-auto' : ''
                    }`}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                        {item.title}
                      </p>
                      <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-6 h-5 w-5 rounded-full bg-forest border-4 border-offwhite shadow-soft"
                  aria-hidden="true"
                />
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`} />
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </section>

      <div className="pb-16 md:pb-24">
        <CTASection
          title="Be Part Of What Comes Next."
          description="Join the network or start a conversation with our team."
          primaryLabel="Join Now"
          primaryTo="/join"
          secondaryLabel="Contact Us"
          secondaryTo="/contact"
        />
      </div>
    </>
  )
}
