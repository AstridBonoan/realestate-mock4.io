import { useEffect, useRef, useState } from 'react'

function useCountUp(end, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined
    let start = null
    let frame

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, end, duration])

  return value
}

function StatItem({ value, suffix = '', label, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-4xl md:text-5xl font-bold text-ink">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted uppercase tracking-[0.16em]">{label}</p>
    </div>
  )
}

export default function StatsSection({ stats }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 rounded-[2rem] bg-cream/70 border border-softgray/40 px-6 py-10 md:px-12"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} active={active} />
      ))}
    </div>
  )
}
