import Button from './Button'
import FloatingCard from './FloatingCard'
import { IMG } from '../data/images'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 min-h-[calc(100svh-5rem)]">
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
            Aurea Network · Mockup Design #4
          </p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.65rem] font-semibold leading-[1.08] text-ink text-balance">
            Real Estate Is Built On Relationships.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            We&apos;re building a growing network of members and partners connected by real estate
            opportunities, collaboration, and long-term growth.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/join">Become A Member</Button>
            <Button to="/opportunities" variant="secondary">
              Explore Opportunities
            </Button>
          </div>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-full">
          <div className="absolute inset-4 sm:inset-6 lg:inset-y-8 lg:right-10 lg:left-4 overflow-hidden rounded-[2rem] shadow-float">
            <img
              src={IMG.hero}
              alt="Modern architectural residence representing premium real estate"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>

          <FloatingCard
            title="Membership"
            subtitle="Community"
            animation="float-a"
            className="absolute left-6 top-10 sm:left-10 sm:top-16 z-10"
          />
          <FloatingCard
            title="Partnerships"
            subtitle="Collaborate"
            animation="float-b"
            className="absolute right-8 top-28 sm:right-14 sm:top-36 z-10"
          />
          <FloatingCard
            title="Investments"
            subtitle="Growth"
            animation="float-c"
            className="absolute left-8 bottom-28 sm:left-14 sm:bottom-36 z-10"
          />
          <FloatingCard
            title="Rentals"
            subtitle="Living"
            animation="float-d"
            className="absolute right-10 bottom-14 sm:right-16 sm:bottom-20 z-10"
          />
        </div>
      </div>
    </section>
  )
}
