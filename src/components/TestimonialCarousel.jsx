import { useState, useEffect, useRef } from 'react'

const ChevronLeft = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m15 18-6-6 6-6" />
    </svg>
)

const ChevronRight = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
    </svg>
)

const AUTOPLAY_MS = 7000

export default function TestimonialCarousel({ items }) {
    const [idx, setIdx] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const wrapperRef = useRef(null)

    const total = items.length
    const goTo = (i) => setIdx(((i % total) + total) % total)
    const next = () => goTo(idx + 1)
    const prev = () => goTo(idx - 1)

    useEffect(() => {
        if (isPaused || total <= 1) return
        const t = setInterval(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS)
        return () => clearInterval(t)
    }, [isPaused, total])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
        if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    }

    if (total === 0) return null

    const t = items[idx]

    return (
        <div
            ref={wrapperRef}
            className="max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonios de clientes"
        >
            {/* Card activa — re-mounteada via key={idx} para replay del fadeIn */}
            <article
                key={idx}
                className="panel p-8 md:p-10 reveal"
                style={{ '--accent': t.accent }}
                aria-live="polite"
            >
                <div className="quote-block mb-7">
                    <div className="flex justify-start gap-1 mb-3" aria-label="5 estrellas">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span
                                key={i}
                                style={{ color: t.accent, opacity: 0.8 }}
                                className="text-[14px] leading-none"
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <p className="font-mono text-[10px] text-white/35 uppercase tracking-[0.28em] mb-3">
                        [ Testimonio · {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} ]
                    </p>
                    <p className="text-[17px] md:text-[19px] text-white/85 italic font-light leading-relaxed">
                        "{t.quote}"
                    </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                    <div className="client-avatar">IMG</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-semibold text-white tracking-tight">{t.name}</p>
                        <p className="font-mono text-[10px] text-white/45 uppercase tracking-[0.22em] mt-1">{t.role}</p>
                    </div>
                </div>
            </article>

            {/* Controles */}
            <div className="flex items-center justify-between mt-8">
                <button className="carousel-btn" onClick={prev} aria-label="Testimonio anterior">
                    {ChevronLeft}
                </button>

                <div className="carousel-dots" role="tablist" aria-label="Seleccionar testimonio">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot ${i === idx ? 'is-active' : ''}`}
                            onClick={() => goTo(i)}
                            role="tab"
                            aria-selected={i === idx}
                            aria-label={`Ir al testimonio ${i + 1}`}
                            style={i === idx ? { background: items[idx].accent, boxShadow: `0 0 10px ${items[idx].accent}99` } : undefined}
                        />
                    ))}
                </div>

                <button className="carousel-btn" onClick={next} aria-label="Siguiente testimonio">
                    {ChevronRight}
                </button>
            </div>
        </div>
    )
}
