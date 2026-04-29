/**
 * Nav site-style: lockup de marca + 4 anchor links + CTA al booking.
 * WhatsApp se accede vía el FloatingWhatsApp (siempre visible).
 */

export default function Nav() {
    return (
        <>
            <nav className="max-w-6xl mx-auto px-6 md:px-10 py-7 flex justify-between items-center">
                <a href="#top" className="flex items-center gap-3" aria-label="Volver al inicio">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md border border-white/10 flex items-center justify-center bg-white/[0.02]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                        </div>
                        <span className="font-extrabold tracking-tight text-[15px] text-white">
                            GROWTH<span className="text-blue-400">BUDDIES</span>
                        </span>
                    </div>
                    <span className="font-mono text-white/20 text-xs px-1">//</span>
                    <span className="font-extrabold tracking-tight text-[15px] text-purple-300">SUMADOTS</span>
                </a>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#servicios" className="nav-link">Servicios</a>
                    <a href="#para-quien" className="nav-link">Para Quién</a>
                    <a href="#clientes" className="nav-link">Clientes</a>
                    <a href="#founders" className="nav-link">Founders</a>
                    <a href="#agenda" className="nav-cta">
                        Iniciar conversación
                        <span className="arrow">→</span>
                    </a>
                </div>
            </nav>
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="hairline"></div>
            </div>
        </>
    )
}
