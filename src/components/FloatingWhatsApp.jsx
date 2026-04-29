import { WHATSAPP_URL } from '../constants.js'
import WhatsAppIcon from './icons/WhatsAppIcon.jsx'

/**
 * Botón flotante WhatsApp (sticky bottom-right).
 * Aparece tras 1.5s para no competir con la lectura del hero.
 * Verde oficial #25D366. Pulse ring sutil.
 */
export default function FloatingWhatsApp() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Conversa por WhatsApp"
        >
            <WhatsAppIcon size={28} />
        </a>
    )
}
