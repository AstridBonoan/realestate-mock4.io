import MembershipForm from '../components/MembershipForm'
import ScrollReveal from '../components/ScrollReveal'

const infoBlocks = [
  {
    title: 'Who You Are',
    description: 'Tell us about your background and professional path.',
  },
  {
    title: 'Your Interests',
    description: 'Share what draws you to real estate and community.',
  },
  {
    title: 'Your Goals',
    description: 'Help us understand what you hope membership unlocks.',
  },
  {
    title: 'Your Connection To Real Estate',
    description: 'Whether you are new or experienced, every path belongs here.',
  },
]

export default function Join() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
        <ScrollReveal>
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest">
              Application
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05]">
              Let&apos;s Get To Know You.
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              We&apos;d like to learn a little about you and what brings you to real estate.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-softgray/50 bg-cream/60 p-5"
                >
                  <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-forest">
                    {block.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-[2rem] border border-softgray/50 bg-offwhite p-6 sm:p-8 md:p-10 shadow-soft">
            <MembershipForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
