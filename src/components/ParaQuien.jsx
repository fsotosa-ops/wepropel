import { VERTICALES, TRIGGERS } from '../constants.js'

/**
 * Sección "Para Quién" — derivada del ICP-GSI.md sección 4.
 * Resuelve el "Character" del StoryBrand SB7: el visitante se identifica.
 */
export default function ParaQuien() {
    return (
        <section id="para-quien" className="pb-32 md:pb-40 max-w-5xl mx-auto scroll-mt-24">

            {/* Header de sección */}
            <div className="text-center mb-14 max-w-2xl mx-auto">
                <div className="eyebrow mb-5"><span>Para Quién</span></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
                    ONGs con datos y voluntad,<br />
                    <span className="text-white/55">y sin brazo ejecutor.</span>
                </h2>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                    Trabajamos con organizaciones de alta densidad de impacto en{' '}
                    <span className="text-white">LATAM y Estados Unidos</span> —
                    con nivel de madurez intermedio según el reporte Propel.
                </p>
            </div>

            {/* Verticales — chips inline sin label */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
                {VERTICALES.map((v) => (
                    <span key={v} className="capability-chip">{v}</span>
                ))}
            </div>

            {/* Triggers — columnas borderless con divisor hairline arriba */}
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-8 max-w-4xl mx-auto">
                {TRIGGERS.map((t) => (
                    <div key={t.idx} className="border-t border-white/[0.08] pt-5">
                        <div
                            className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3"
                            style={{ color: t.accent }}
                        >
                            Trigger · {t.idx}
                        </div>
                        <p className="text-[15px] text-white/75 font-light leading-relaxed">
                            {t.parts[0]}
                            <span className="text-white font-medium">{t.parts[1]}</span>
                            {t.parts[2]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
