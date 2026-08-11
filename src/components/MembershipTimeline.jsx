export default function MembershipTimeline({ steps }) {
  return (
    <div className="relative">
      <div
        className="absolute left-6 top-4 bottom-4 w-px bg-softgray/70 md:left-0 md:right-0 md:top-10 md:bottom-auto md:h-px md:w-full"
        aria-hidden="true"
      />
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step) => (
          <li key={step.step} className="relative flex gap-5 md:flex-col md:pl-0 pl-2">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-offwhite font-display text-sm font-bold shadow-soft">
              {step.step}
            </div>
            <div className="pt-1 md:pt-4">
              <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
