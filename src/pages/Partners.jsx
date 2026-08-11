import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import PartnerCard from '../components/PartnerCard'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { partnerCategories } from '../data/content'

export default function Partners() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-charcoal/80 to-forest/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24 md:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-softgray">Partnerships</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-offwhite leading-[1.02]">
            Let&apos;s Build Together.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-softgray leading-relaxed">
            Great opportunities often begin with the right relationship.
          </p>
          <Button to="/contact" variant="light" className="mt-8">
            Start A Conversation
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Categories"
            title="Partnership paths in the network."
            description="Explore how property owners, investors, developers, and business partners can grow with Aurea Network."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {partnerCategories.map((partner, i) => (
            <ScrollReveal key={partner.id} delay={i * 70}>
              <PartnerCard partner={partner} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="pb-16 md:pb-24">
        <ScrollReveal>
          <CTASection
            title="Start A Conversation"
            description="Tell us about your property, project, or partnership idea—we're listening."
            primaryLabel="Start A Conversation"
            primaryTo="/contact"
            secondaryLabel="Join As A Member"
            secondaryTo="/join"
          />
        </ScrollReveal>
      </div>
    </>
  )
}
