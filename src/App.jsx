import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Flywheel from './components/Flywheel.jsx'
import ParaQuien from './components/ParaQuien.jsx'
import Clients from './components/Clients.jsx'
import Founders from './components/Founders.jsx'
import DiagnosticoRapido from './components/DiagnosticoRapido.jsx'
import FAQ from './components/FAQ.jsx' // <-- IMPORTAR AQUÍ
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
    return (
        <div id="top">
            <div className="bg-grid"></div>
            <div className="bg-vignette"></div>

            <Nav />

            <main className="max-w-6xl mx-auto px-6 md:px-10">
                <Hero />
                <Flywheel />
                <ParaQuien />
                <DiagnosticoRapido />
                <Clients />
                <Founders />
                <FAQ /> {/* <-- AGREGAR AQUÍ (Justo antes de Booking) */}
                <Booking />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}