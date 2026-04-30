import TestimonialCarousel from './TestimonialCarousel.jsx'

/**
 * Sección de Clientes & Testimonios.
 * - Logos de clientes en flex-row borderless arriba.
 * - Testimonios en carrusel custom.
 */

const CLIENT_LOGOS = [
    { name: 'Focus', src: '/clients/focus-logo-white.png' },
    { name: 'F Summer', src: '/clients/fsummer-logo-white.png' },
    { name: 'América Solidaria', src: '/clients/logo-white-anericasolidaria.svg' },
]

const TESTIMONIALS = [
    {
        accent: '#a78bfa', /* Violeta claro para resaltar */
        quote: 'S4i ha sido clave en la transformación de nuestros procesos internos, generando aprendizaje para nuestra organización y nuestros stakeholders. Su enfoque permite profesionalizar nuestro trabajo y enfrentar el desafío constante de avanzar en la transformación digital.',
        name: 'Karen Sarabia',
        role: 'Coordinadora de Transformación · América Solidaria Chile',
    },
    {
        accent: '#60a5fa', /* Azul de sistema */
        quote: '[ Espacio para tu próximo caso de éxito. Idealmente de Focus o F Summer, enfocado en cómo la tecnología resolvió un cuello de botella específico. ]',
        name: 'Nombre del Cliente',
        role: 'Rol · Organización',
    }
]

export default function Clients() {
    return (
        <section id="clientes" className="pb-32 md:pb-40 max-w-5xl mx-auto scroll-mt-24 px-4">
            <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
                <div className="eyebrow mb-5"><span>Trusted By · Casos de Impacto</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
                    Organizaciones que <span className="text-white/55">ya escalaron.</span>
                </h3>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                    Equipos de impacto, fundaciones y proyectos público-privados que ya operan sobre nuestro framework.
                </p>
            </div>

            {/* Logos de clientes */}
            <div className="client-logos mb-16">
                {CLIENT_LOGOS.map((c) => (
                    <img
                        key={c.name}
                        src={c.src}
                        alt={c.name}
                        title={c.name}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Carrusel de testimonios */}
            <TestimonialCarousel items={TESTIMONIALS} />
        </section>
    )
}