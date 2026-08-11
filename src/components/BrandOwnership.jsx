const LOGO_SRC = `${import.meta.env.BASE_URL}bc-logo.png`

/**
 * Ownership marks for B&C Software & Web:
 * - soft tiled watermark (screenshots)
 * - fixed bottom-right corner badge
 */
export default function BrandOwnership() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-[-10%] opacity-[0.045] mix-blend-multiply"
          style={{
            backgroundImage: `url(${LOGO_SRC})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '220px auto',
            backgroundPosition: 'center',
            transform: 'rotate(-12deg)',
          }}
        />
      </div>

      <aside
        className="fixed bottom-4 right-4 z-[60] sm:bottom-5 sm:right-5"
        aria-label="Design credit"
      >
        <a
          href="https://github.com/AstridBonoan"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-xl border border-softgray/60 bg-offwhite/95 px-2.5 py-2 shadow-soft backdrop-blur-sm transition hover:border-forest/30 hover:shadow-float focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          title="Design & development by B&C Software & Web"
        >
          <img
            src={LOGO_SRC}
            alt="B&C Software & Web"
            className="h-9 w-auto max-w-[7.5rem] object-contain sm:h-10"
            loading="lazy"
            decoding="async"
          />
          <span className="hidden pr-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:block">
            B&C
          </span>
        </a>
      </aside>
    </>
  )
}
