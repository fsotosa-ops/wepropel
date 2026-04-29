import { useState } from 'react'

/**
 * Diagnóstico Rápido — quiz de 7 preguntas para evaluar fit con el ICP-GSI.
 * Resultado: score % + recomendación de fase (P1/P2/P3) + CTA a Agenda.
 * Inspirado en growthbuddies.cl pero adaptado a ONGs / sector social.
 */

const QUESTIONS = [
    {
        id: 'vertical',
        question: '¿En qué sector opera tu organización?',
        options: [
            { label: 'Educación', score: 2 },
            { label: 'Salud', score: 2 },
            { label: 'Empleabilidad', score: 2 },
            { label: 'Microfinanzas', score: 2 },
            { label: 'Otro sector social', score: 1 },
        ],
    },
    {
        id: 'team',
        question: '¿Cuántas personas trabajan en tu organización?',
        options: [
            { label: 'Menos de 5', score: 0 },
            { label: '5 – 15', score: 1 },
            { label: '15 – 50', score: 2 },
            { label: 'Más de 50', score: 1 },
        ],
    },
    {
        id: 'stack',
        question: '¿Cuál describe mejor tu stack tecnológico actual?',
        options: [
            { label: 'Mayormente Google Sheets / planillas', score: 2 },
            { label: 'Herramientas SaaS dispersas', score: 2 },
            { label: 'Sistema integrado funcional', score: 1 },
            { label: 'Stack maduro con BI o IA', score: 0 },
        ],
    },
    {
        id: 'accelerator',
        question: '¿Sos parte de una aceleradora o red de impacto?',
        options: [
            { label: 'Sí (Propel, Ashoka u otra)', score: 2 },
            { label: 'En proceso de aplicación', score: 1 },
            { label: 'No por ahora', score: 0 },
        ],
    },
    {
        id: 'funds',
        question: '¿Estás preparando postulación a fondos de impacto?',
        options: [
            { label: 'Sí, en los próximos 6 meses', score: 2 },
            { label: 'En 6 a 12 meses', score: 1 },
            { label: 'No por ahora', score: 0 },
        ],
    },
    {
        id: 'metrics',
        question: '¿Cómo medís el impacto de tu programa?',
        options: [
            { label: 'Métricas claras y sistematizadas', score: 1 },
            { label: 'Datos parciales, sin sistema', score: 2 },
            { label: 'Es algo que queremos mejorar', score: 2 },
        ],
    },
    {
        id: 'bottleneck',
        question: '¿Cuál es tu principal cuello de botella?',
        options: [
            { label: 'Operaciones manuales que consumen tiempo', score: 2 },
            { label: 'Falta de evidencia técnica para fondos', score: 2 },
            { label: 'Sin sistema para escalar el impacto', score: 2 },
            { label: 'Equipo sin capacidades técnicas', score: 2 },
        ],
    },
]

const PHASE_DATA = {
    P1: {
        name: 'P1 / Momentum',
        accent: '#60a5fa',
        message: 'Tu organización tiene voluntad y datos. Empezás con coaching y un roadmap de 3 meses que ordena el camino antes de construir.',
    },
    P2: {
        name: 'P2 / Acelera',
        accent: '#818cf8',
        message: 'Estás en momentum operativo. Es el momento de construir el tech core que rompe tu techo de crecimiento — MVP en sprints de 2 semanas.',
    },
    P3: {
        name: 'P3 / Inyecta',
        accent: '#a78bfa',
        message: 'Estás en momento de oro: aceleradora + postulación próxima. P3 te da la justificación técnica nivel ingeniería senior que evaluadores no rechazan.',
    },
}

function computeResult(answers) {
    const total = Object.values(answers).reduce((sum, a) => sum + (a?.score || 0), 0)
    const maxScore = QUESTIONS.length * 2

    let phaseKey
    // Trigger oro: aceleradora + fondos próximos = P3
    if (answers.accelerator?.label.startsWith('Sí') && answers.funds?.label.startsWith('Sí')) {
        phaseKey = 'P3'
    } else if (total >= 11) {
        phaseKey = 'P2'
    } else {
        phaseKey = 'P1'
    }

    return {
        scorePct: Math.round((total / maxScore) * 100),
        ...PHASE_DATA[phaseKey],
    }
}

export default function DiagnosticoRapido() {
    const [step, setStep] = useState('intro')
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState({})

    const handleAnswer = (option) => {
        const newAnswers = { ...answers, [QUESTIONS[currentQ].id]: option }
        setAnswers(newAnswers)
        if (currentQ < QUESTIONS.length - 1) {
            setCurrentQ(currentQ + 1)
        } else {
            setStep('result')
        }
    }

    const handleBack = () => {
        if (currentQ > 0) setCurrentQ(currentQ - 1)
    }

    const handleRestart = () => {
        setStep('intro')
        setCurrentQ(0)
        setAnswers({})
    }

    const progress = step === 'quiz' ? ((currentQ + 1) / QUESTIONS.length) * 100 : 0

    return (
        <section id="diagnostico" className="pb-32 md:pb-40 max-w-3xl mx-auto scroll-mt-24">

            <div className="text-center mb-10 max-w-2xl mx-auto">
                <div className="eyebrow mb-5"><span>Diagnóstico Rápido</span></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
                    ¿Encajamos? <span className="text-white/55">2 minutos lo confirman.</span>
                </h2>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                    7 preguntas. Te decimos qué fase de nuestro sistema te conviene empezar.
                </p>
            </div>

            <div className="diagnostico-card">

                {step === 'intro' && (
                    <div className="text-center py-12 px-6">
                        <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.28em] mb-5">
                            7 preguntas · 2 minutos · Sin email
                        </p>
                        <p className="text-[15px] text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
                            Te clasificamos según nuestro ICP y te decimos exactamente por dónde empezar.
                        </p>
                        <button onClick={() => setStep('quiz')} className="cta-primary">
                            Empezar diagnóstico
                        </button>
                    </div>
                )}

                {step === 'quiz' && (
                    <div className="py-6">
                        <div className="flex items-center justify-between px-6 mb-4">
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.28em]">
                                Pregunta {currentQ + 1} de {QUESTIONS.length}
                            </span>
                            <button
                                onClick={handleRestart}
                                className="font-mono text-[10px] text-white/35 hover:text-white/70 uppercase tracking-[0.22em] transition"
                            >
                                Cerrar ✕
                            </button>
                        </div>

                        <div className="diagnostico-progress mx-6">
                            <div
                                className="diagnostico-progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div key={currentQ} className="px-6 pt-7 pb-6 reveal">
                            <h3 className="text-xl md:text-[24px] font-semibold text-white tracking-tight leading-tight mb-6">
                                {QUESTIONS[currentQ].question}
                            </h3>
                            <div className="space-y-2">
                                {QUESTIONS[currentQ].options.map((opt) => (
                                    <button
                                        key={opt.label}
                                        onClick={() => handleAnswer(opt)}
                                        className="diagnostico-option"
                                    >
                                        <span>{opt.label}</span>
                                        <span className="diagnostico-option-arrow">→</span>
                                    </button>
                                ))}
                            </div>

                            {currentQ > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="mt-6 font-mono text-[10px] text-white/40 hover:text-white/75 uppercase tracking-[0.22em] transition"
                                >
                                    ← Pregunta anterior
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {step === 'result' && (() => {
                    const r = computeResult(answers)
                    return (
                        <div className="py-12 px-6 text-center reveal">
                            <span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.28em]">[ Resultado ]</span>

                            <div className="my-7">
                                <div className="font-mono text-[52px] md:text-[64px] font-bold text-white leading-none mb-2 tracking-tight">
                                    {r.scorePct}%
                                </div>
                                <div className="font-mono text-[10px] text-white/45 uppercase tracking-[0.22em]">
                                    Match con nuestro ICP
                                </div>
                            </div>

                            <div className="diagnostico-recommendation" style={{ '--accent': r.accent }}>
                                <span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.28em] mb-2 block">
                                    Te recomendamos empezar por
                                </span>
                                <h4 className="font-mono text-2xl md:text-[28px] font-bold uppercase tracking-tight mb-3" style={{ color: r.accent }}>
                                    {r.name}
                                </h4>
                                <p className="text-[14px] text-white/75 font-light leading-relaxed max-w-md mx-auto">
                                    {r.message}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">
                                <a href="#agenda" className="cta-primary">Agendar conversación</a>
                                <button onClick={handleRestart} className="cta-secondary">
                                    Reintentar
                                </button>
                            </div>
                        </div>
                    )
                })()}

            </div>
        </section>
    )
}
