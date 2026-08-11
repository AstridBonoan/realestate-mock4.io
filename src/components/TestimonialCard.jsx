export default function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-[1.75rem] border border-softgray/40 bg-offwhite p-6 sm:p-8 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tan">
        Placeholder testimonial
      </p>
      <p className="mt-4 flex-1 text-base sm:text-lg leading-relaxed text-charcoal text-balance">
        “{testimonial.quote}”
      </p>
      <footer className="mt-8 border-t border-softgray/50 pt-5">
        <cite className="not-italic">
          <span className="block font-display font-semibold text-ink">{testimonial.name}</span>
          <span className="mt-1 block text-sm text-muted">
            {testimonial.role} · {testimonial.organization}
          </span>
        </cite>
      </footer>
    </blockquote>
  )
}
