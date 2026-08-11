import { Link } from 'react-router-dom'
import { ArrowUpRight, Users, Building2, Home as HomeIcon, Handshake } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import FeaturedProperty from '../components/FeaturedProperty'
import PropertyCard from '../components/PropertyCard'
import TestimonialCard from '../components/TestimonialCard'
import StatsSection from '../components/StatsSection'
import ScrollReveal from '../components/ScrollReveal'
import { COMPANY } from '../data/company'
import { whatWeDo, testimonials } from '../data/content'
import { properties } from '../data/properties'
import { IMG } from '../data/images'

const icons = [Users, Building2, HomeIcon, Handshake]

export default function Home() {
  const featured = properties.filter((p) => p.featured).slice(0, 1)
  const homeCards = properties.filter((p) => !p.featured).slice(0, 2)

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest">
                Introduction
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.02]">
                More Than Property.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
                Real estate creates opportunities—but people create the relationships that make
                those opportunities possible.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img
                  src={IMG.intro}
                  alt="Editorial interior space representing community and place"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-2xl bg-forest px-5 py-4 text-offwhite shadow-float max-w-[220px]">
                <p className="font-display text-sm font-semibold leading-snug">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-10">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-emerald px-6 py-14 sm:px-12 sm:py-16 md:px-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite leading-tight">
                Join A Growing Real Estate Network.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-softgray leading-relaxed">
                Membership connects you with people, ideas, and opportunities—creating a professional
                community built for collaboration and long-term growth.
              </p>
              <Button to="/join" variant="light" className="mt-8">
                Join Now
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Purpose"
            title="Mission & Vision"
            description="Two commitments that guide how we grow the network."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={80}>
            <article className="relative overflow-hidden rounded-[2rem] min-h-[320px] p-8 sm:p-10 text-offwhite">
              <img
                src={IMG.mission}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-forest/85 to-charcoal/80" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-softgray">Our Mission</p>
                <p className="mt-6 text-xl sm:text-2xl leading-relaxed font-medium text-balance">
                  {COMPANY.mission}
                </p>
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <article className="relative overflow-hidden rounded-[2rem] min-h-[320px] p-8 sm:p-10 text-offwhite">
              <img
                src={IMG.vision}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-ink/80 to-forest/75" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-softgray">Our Vision</p>
                <p className="mt-6 text-xl sm:text-2xl leading-relaxed font-medium text-balance">
                  {COMPANY.vision}
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do"
              title="One Network. Multiple Opportunities."
              description="Membership, real estate, rentals, and partnerships—connected in one growing platform."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whatWeDo.map((item, i) => {
              const Icon = icons[i]
              return (
                <ScrollReveal key={item.number} delay={i * 70}>
                  <Link
                    to={item.path}
                    className="group flex h-full flex-col rounded-[1.75rem] border border-softgray/50 bg-offwhite p-6 sm:p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-float hover:border-forest/25"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-tan">{item.number}</span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-offwhite">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{item.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                      Learn more
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
            <SectionHeading
              eyebrow="Featured"
              title="Explore Opportunities"
              description="A selection of investments and rentals connected to the network."
            />
            <Button to="/opportunities" variant="secondary" className="shrink-0 self-start sm:self-auto">
              Explore All
            </Button>
          </div>
        </ScrollReveal>
        <div className="space-y-6">
          {featured.map((property) => (
            <ScrollReveal key={property.id}>
              <FeaturedProperty property={property} />
            </ScrollReveal>
          ))}
          <div className="grid gap-6 md:grid-cols-2">
            {homeCards.map((property, i) => (
              <ScrollReveal key={property.id} delay={i * 80}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-10">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] relative">
            <img
              src={IMG.partnerCta}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-charcoal/85 to-forest/70" />
            <div className="relative px-6 py-14 sm:px-12 sm:py-16 md:px-16 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite leading-tight">
                Have A Property Or Opportunity?
              </h2>
              <p className="mt-5 text-softgray leading-relaxed">
                We&apos;re interested in hearing from property owners, investors, developers, and
                organizations looking to build relationships.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/partners" variant="light">
                  Become A Partner
                </Button>
                <Button to="/contact" variant="outlineLight">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Social Proof"
            title="Built Around People."
            description="Placeholder testimonials for the mockup—easy to replace with real member voices."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-16">
          <ScrollReveal>
            <StatsSection
              stats={[
                { value: 240, suffix: '+', label: 'Members' },
                { value: 58, suffix: '', label: 'Partners' },
                { value: 36, suffix: '', label: 'Opportunities' },
                { value: 12, suffix: '', label: 'Cities' },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <div className="pb-16 md:pb-24">
        <ScrollReveal>
          <CTASection
            title="Your Next Opportunity Could Start With A Conversation."
            description="Become a member, explore opportunities, or connect with our team."
            primaryLabel="Join Now"
            primaryTo="/join"
            secondaryLabel="Contact Us"
            secondaryTo="/contact"
            image={IMG.finalCta}
          />
        </ScrollReveal>
      </div>
    </>
  )
}
