import TestimonialCarousel from './TestimonialCarousel.jsx'

/**
 * Sección de Clientes & Testimonios.
 *  - Logos de clientes en flex-row borderless arriba.
 *  - Testimonios en carrusel custom (auto-advance 7s, pausa on hover, keyboard nav).
 *
 * Para agregar más clientes: poné el archivo en `public/clients/` y agregalo al array CLIENT_LOGOS.
 */

const CLIENT_LOGOS = [
    { name: 'Focus', src: '/clients/focus-logo-white.png' },
    { name: 'F Summer', src: '/clients/fsummer-logo-white.png' },
    { name: 'América Solidaria', src: '/clients/logo-white-anericasolidaria.svg' },
]

const TESTIMONIALS = [
    {
        accent: '#60a5fa',
        quote: '[ Quote del cliente — copy a definir. Una frase corta que valide el trabajo y mencione un resultado concreto en métricas o impacto. ]',
        name: 'Nombre del Cliente',
        role: 'Rol · Organización',
    },
    {
        accent: '#a78bfa',
        quote: '[ Segundo quote — idealmente complementario al primero, mencionando otra dimensión: rapidez de entrega, calidad técnica, o capacidad de captar fondos. ]',
        name: 'Nombre del Cliente',
        role: 'Rol · Organización',
    },
    {
        accent: '#818cf8',
        quote: '[ Tercer quote — opcional. Útil para mostrar diversidad de casos: fundación, gobierno, sector privado-social, etc. ]',
        name: 'Nombre del Cliente',
        role: 'Rol · Organización',
    },
]

export default function Clients() {
    return (
        <section id="clientes" className="pb-32 md:pb-40 max-w-5xl mx-auto scroll-mt-24">
            <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
                <div className="eyebrow mb-5"><span>Trusted By · Casos de Impacto</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
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
