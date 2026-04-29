import { useState } from 'react'

/**
 * Flywheel estilo Hubspot — disco SVG integrado con 3 sectores (pie slices).
 * Hub OKRs en el centro. Perímetro decorativo rota lento (120s).
 * Sector activo (hover/click) ilumina + actualiza panel de detalle debajo.
 */

const CompassIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2" />
        <path d="m9 15 1.6-4.4L15 9l-1.6 4.4z" fill="currentColor" stroke="none" />
    </svg>
)

const NetworkIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="7.4" y1="9" x2="11" y2="16.6" />
        <line x1="16.6" y1="9" x2="13" y2="16.6" />
        <circle cx="6" cy="7" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="18" cy="7" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="12" cy="18" r="2.2" fill="currentColor" stroke="none" />
    </svg>
)

const SproutIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21V12" />
        <path d="M12 12C8 12 4 9 4 5c4 0 8 3 8 7Z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" />
        <path d="M12 12c4 0 8-3 8-7-4 0-8 3-8 7Z" fill="currentColor" fillOpacity="0.55" stroke="currentColor" />
    </svg>
)

const PHASES = [
    {
        phaseId: 'P1',
        idx: '01',
        name: 'Momentum',
        subtitle: 'Coaching y Entrenamiento',
        items: ['Framework propio, agilidad', 'Roadmap a 3 meses', 'Diagnóstico de brecha operativa'],
        accent: '#60a5fa',
        accentRgb: [96, 165, 250],
        icon: CompassIcon,
        // Sector top: arc 210° → 330° (CW). rO=270, rI=190 (annulus delgado)
        sectorPath: 'M 66 165 A 270 270 0 0 1 534 165 L 465 205 A 190 190 0 0 0 135 205 Z',
        labelPos: { top: '12%', left: '50%' },
    },
    {
        phaseId: 'P2',
        idx: '02',
        name: 'Acelera',
        subtitle: 'Construcción Tech Core',
        items: ['Desarrollo en Sprints (2 sem)', 'Inteligencia de Datos y BI', 'Motores de IA personalizados'],
        accent: '#818cf8',
        accentRgb: [129, 140, 248],
        icon: NetworkIcon,
        // Sector right-bottom: arc 330° → 90° CW, midDeg 30°. rO=270, rI=190
        sectorPath: 'M 534 165 A 270 270 0 0 1 300 570 L 300 490 A 190 190 0 0 0 465 205 Z',
        labelPos: { top: '69%', left: '83%' },
    },
    {
        phaseId: 'P3',
        idx: '03',
        name: 'Inyecta',
        subtitle: 'Blueprint para Fondos',
        items: ['Postulación a fondos (GORE, BID)', 'Business Case de impacto', 'Métricas de evidencia (Rigor Tech)'],
        accent: '#a78bfa',
        accentRgb: [167, 139, 250],
        icon: SproutIcon,
        // Sector left-bottom: arc 90° → 210° CW, midDeg 150°. rO=270, rI=190
        sectorPath: 'M 300 570 A 270 270 0 0 1 66 165 L 135 205 A 190 190 0 0 0 300 490 Z',
        labelPos: { top: '69%', left: '17%' },
    },
]

export default function Flywheel() {
    const [activePhase, setActivePhase] = useState(0)
    const active = PHASES[activePhase]

    return (
        <section id="servicios" className="pt-12 pb-24 md:pb-32 scroll-mt-24">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <div className="eyebrow mb-5"><span>Servicios</span></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
                    Tres servicios. <span className="text-white/55">Un sistema.</span>
                </h2>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                    Un ciclo de inercia que se retroalimenta. El eje central son los OKRs de tu organización.
                </p>
            </div>

            <div
                className="flywheel-disk-wrapper"
                style={{ '--hub-accent': active.accent }}
            >
                <svg
                    viewBox="0 0 600 600"
                    className="flywheel-disk-svg"
                    aria-hidden="true"
                >
                    <defs>
                        {PHASES.map((p, i) => {
                            const [r, g, b] = p.accentRgb
                            return (
                                <radialGradient key={`grad-${i}`} id={`sec-grad-${i}`} cx="50%" cy="50%" r="60%">
                                    <stop offset="40%" stopColor={`rgba(${r},${g},${b},0.04)`} />
                                    <stop offset="100%" stopColor={`rgba(${r},${g},${b},0.20)`} />
                                </radialGradient>
                            )
                        })}
                        {PHASES.map((p, i) => {
                            const [r, g, b] = p.accentRgb
                            return (
                                <radialGradient key={`grad-active-${i}`} id={`sec-grad-active-${i}`} cx="50%" cy="50%" r="60%">
                                    <stop offset="40%" stopColor={`rgba(${r},${g},${b},0.10)`} />
                                    <stop offset="100%" stopColor={`rgba(${r},${g},${b},0.40)`} />
                                </radialGradient>
                            )
                        })}
                        <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" />
                        </filter>
                    </defs>

                    {/* Sectores */}
                    {PHASES.map((p, i) => (
                        <path
                            key={`sec-${i}`}
                            d={p.sectorPath}
                            fill={`url(#sec-grad-${activePhase === i ? `active-${i}` : i})`}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="1"
                            className="flywheel-sector"
                            onMouseEnter={() => setActivePhase(i)}
                            onClick={() => setActivePhase(i)}
                            style={{ cursor: 'pointer', transition: 'fill 380ms ease' }}
                        />
                    ))}

                    {/* Outer ring + inner hub ring (hairlines) */}
                    <circle cx="300" cy="300" r="270" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <circle cx="300" cy="300" r="190" fill="none" stroke={active.accent} strokeWidth="1" strokeOpacity="0.35" style={{ transition: 'stroke 480ms ease' }} />

                    {/* Satélite orbital (rota 120s) */}
                    <g className="flywheel-satellite">
                        <circle cx="300" cy="25" r="3.5" fill={active.accent} filter="url(#dot-glow)" style={{ transition: 'fill 480ms ease' }} />
                        <circle cx="300" cy="25" r="1.5" fill={active.accent} style={{ transition: 'fill 480ms ease' }} />
                    </g>
                </svg>

                {/* Sector labels (HTML overlay) */}
                {PHASES.map((p, i) => (
                    <button
                        key={`label-${i}`}
                        className={`sector-label ${activePhase === i ? 'is-active' : ''}`}
                        style={{
                            top: p.labelPos.top,
                            left: p.labelPos.left,
                            '--sec-accent': p.accent,
                        }}
                        onMouseEnter={() => setActivePhase(i)}
                        onClick={() => setActivePhase(i)}
                        aria-label={`Servicio ${p.phaseId}: ${p.name}`}
                    >
                        <div className="sector-icon">{p.icon}</div>
                        <span className="sector-idx">{p.phaseId} · {p.idx}/03</span>
                        <span className="sector-name">{p.name}</span>
                    </button>
                ))}

                {/* Hub center (overlay HTML) */}
                <div className="hub-center-disk">
                    <span className="font-mono text-[9px] text-blue-300/85 uppercase tracking-[0.3em] mb-2">[ Eje Central ]</span>
                    <h3 className="text-[36px] md:text-[40px] font-extrabold text-white tracking-tight leading-none mb-2">OKRs</h3>
                    <div className="w-8 h-px bg-white/20 mb-2"></div>
                    <span className="text-[12px] text-white/75 font-medium">Estrella Polar</span>
                </div>
            </div>

            {/* Panel de detalle de la fase activa */}
            <div className="flywheel-detail" key={activePhase}>
                <div
                    className="font-mono text-[11px] uppercase tracking-[0.28em] mb-4"
                    style={{ color: active.accent }}
                >
                    {active.phaseId} · {active.idx}/03 · {active.name}
                </div>
                <h4 className="text-2xl md:text-[28px] font-semibold text-white tracking-tight mb-6">
                    {active.subtitle}
                </h4>
                <ul className="flywheel-detail-bullets">
                    {active.items.map((item) => (
                        <li key={item}>
                            <span className="font-mono mt-[2px]" style={{ color: active.accent }}>—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footnote — Acelera flexibilidad */}
            <div className="text-center mt-10 max-w-md mx-auto">
                <p className="font-mono text-[11px] text-white/45 italic leading-relaxed">
                    <span className="text-indigo-300 not-italic font-medium tracking-[0.22em] uppercase">↳ Acelera</span>
                    <span className="mx-2 text-white/20">·</span>
                    Flexibilidad: Stack definido o activos customizados.
                </p>
            </div>
        </section>
    )
}
