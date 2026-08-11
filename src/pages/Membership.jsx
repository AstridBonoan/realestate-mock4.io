import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import MembershipBenefit from '../components/MembershipBenefit'
import MembershipTimeline from '../components/MembershipTimeline'
import TeamMember from '../components/TeamMember'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { membershipBenefits, membershipSteps } from '../data/content'
import { team } from '../data/team'

const BANNER_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80'

export default function Membership() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest">
                Membership
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.02] text-balance">
                Find Your Place In The Network.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
                Membership connects you with people, ideas, relationships, and opportunities within
                our growing real estate community.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/join">Apply For Membership</Button>
                <Button to="#team" variant="secondary">
                  Meet The Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a79c027c8?auto=format&fit=crop&w=1400&q=80"
                  alt="Members collaborating in a modern interior space"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-8 sm:w-56 rounded-2xl bg-offwhite/95 backdrop-blur border border-cream p-4 shadow-float">
                <p className="text-xs uppercase tracking-[0.16em] text-forest font-semibold">
                  Community
                </p>
                <p className="mt-1 font-display font-semibold text-ink">People create opportunity.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-cream/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Benefits"
              title="Why Join?"
              description="Membership is designed for connection, collaboration, and long-term growth."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((benefit, i) => (
              <ScrollReveal key={benefit.id} delay={i * 60} className={i === 4 ? 'lg:col-start-2' : ''}>
                <MembershipBenefit benefit={benefit} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            title="How Membership Works"
            description="A clear path from application to lasting participation."
          />
        </ScrollReveal>
        <div className="mt-14">
          <ScrollReveal>
            <MembershipTimeline steps={membershipSteps} />
          </ScrollReveal>
        </div>
      </section>

      <section id="team" className="bg-charcoal py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              light
              eyebrow="Team"
              title="Meet The People Behind The Organization."
              description="Placeholder profiles—names and details are easy to replace."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 70}>
                <TeamMember member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <ScrollReveal>
          <CTASection
            title="Would You Like To Become A Member?"
            description="Join a growing community of people building relationships and exploring opportunities through real estate."
            primaryLabel="Join Now"
            primaryTo="/join"
            image={BANNER_IMAGE}
          />
        </ScrollReveal>
      </div>
    </>
  )
}
