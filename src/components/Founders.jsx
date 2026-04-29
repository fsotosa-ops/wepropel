/**
 * Founders / Nosotros section.
 * Logos solo en el alliance lockup. Career chips por founder = trust signals.
 * Joint credential pill arriba refuerza Guide SB7.
 */

const FOUNDERS = [
    {
        photo: '/sumadots-founder.webp',
        name: 'Pipe Soto',
        role: 'Founder & Tech Strategist',
        company: 'Sumadots · Founder',
        credentials: ['ex-Microsoft', 'ex-JLL', '+100M usuarios escalados'],
        accent: '#a78bfa',
        accentTextClass: 'text-purple-300/85',
        quote: 'Tras escalar soluciones para más de 100 millones de usuarios, diseño la arquitectura técnica que elimina tu techo de crecimiento.',
    },
    {
        photo: '/groddies-founder.webp',
        name: 'Ed Spohr',
        role: 'Strategic Associate',
        company: 'Growth Buddies · Founder',
        credentials: ['Miami × LatAm', 'Strategy & Adoption', 'Transformación Operativa'],
        accent: '#60a5fa',
        accentTextClass: 'text-blue-300/85',
        quote: 'Como asociado experto en negocio, me encargo de que la potencia técnica de Sumadots se traduzca en adopción y retorno real.',
    },
]

export default function Founders() {
    return (
        <section id="founders" className="pb-32 md:pb-40 max-w-5xl mx-auto scroll-mt-24">
            <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
                {/* Alliance lockup */}
                <div className="alliance-lockup mb-6">
                    <img src="/groddiesLogo.png" alt="Growth Buddies" />
                    <span className="x-divider">×</span>
                    <img src="/suma-icon.svg" alt="Sumadots" />
                </div>

                {/* Approach line — del ICP-GSI sección 3 */}
                <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.22em] mb-7">
                    Más que fábrica de software · Socios estratégicos en ROI Social
                </p>

                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
                    Dos founders. <span className="text-white/55">Una alianza.</span>
                </h3>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                    <span className="text-white">Growth Social Impact</span> nace de la unión entre{' '}
                    <span className="font-mono text-purple-300 text-[15px]">SUMADOTS</span> y{' '}
                    <span className="font-mono text-blue-300 text-[15px]">GROWTH BUDDIES</span> — dos empresas con un objetivo común: escalar impacto con rigor de ingeniería y disciplina de growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {FOUNDERS.map((f) => (
                    <article key={f.name} className="panel p-8" style={{ '--accent': f.accent }}>
                        <div className="flex items-start gap-5 mb-6">
                            <div className="founder-photo">
                                <img src={f.photo} alt={`${f.name} — ${f.company}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-xl font-bold text-white tracking-tight">{f.name}</h4>
                                <p className={`font-mono text-[11px] uppercase tracking-[0.22em] mt-1.5 ${f.accentTextClass}`}>
                                    {f.role}
                                </p>
                                <p className="font-mono text-[10px] text-white/55 uppercase tracking-[0.22em] mt-2">
                                    {f.company}
                                </p>
                            </div>
                        </div>

                        {/* Career chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {f.credentials.map((c) => (
                                <span key={c} className="credential-chip">{c}</span>
                            ))}
                        </div>

                        <div className="quote-block">
                            <p className="font-mono text-[10px] text-white/35 uppercase tracking-[0.28em] mb-3">[ Testimonial ]</p>
                            <p className="text-[16px] text-white/80 italic font-light leading-relaxed">
                                "{f.quote}"
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
