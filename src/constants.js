/**
 * Constantes compartidas del sitio. Editables por el usuario sin tocar JSX.
 */

export const CONTACT_EMAIL = 'hola@growthsocialimpact.com'

/* URL del Google Calendar Appointment Scheduling */
export const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vHSYQ5JYmIfIhA9NRWldmtt_E1oPA1iNGz-7AYFCQYfQMcBVNvSoQEOzt_t5f2tpXpFxd2TDa?gv=true'

/* WhatsApp — número y prefill (default: Ed Spohr, public en growthbuddies.cl) */
export const WHATSAPP_NUMBER = '56965863160'
export const WHATSAPP_PREFILL = 'Hola Growth Social Impact! Vengo del sitio web y me gustaría agendar un diagnóstico de 30 min. ¿Podemos coordinar?'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export const TRUST_STATS = [
    { num: '+$1M', label: 'USD Recaudados' },
    { num: '+70%', label: 'Aceleración Operativa' },
    { num: '1.5x', label: 'Aumento Ticket Base' },
    { num: '7x', label: 'Aumento Ticket Nuevo' },
]

/* Verticales del ICP-GSI sección 4 */
export const VERTICALES = ['Educación', 'Salud', 'Empleabilidad', 'Microfinanzas']

/**
 * Trigger statements (señales de compra del ICP-GSI sección 4).
 * Cada item: parts = [prefijo, highlight, sufijo]. El highlight se renderiza en blanco.
 */
/**
 * Trigger statements (señales de compra del ICP-GSI sección 4).
 * Rediseñados para pasar el Caveman Test con títulos de "Dolor/Oportunidad".
 */
export const TRIGGERS = [
    {
        id: 'T1',
        title: 'Colapso Operativo',
        accent: '#f87171', /* Red/Warning */
        description: 'Tu equipo (15-50 personas) opera con Google Sheets o herramientas desconectadas que ya llegaron a su límite y frenan la ejecución.'
    },
    {
        id: 'T2',
        title: 'Levantamiento de Fondos',
        accent: '#34d399', /* Green/Capital */
        description: 'Postulas a fondos de +$50K USD (GORE, BID) y necesitas una arquitectura técnica nivel senior para asegurar la adjudicación.'
    },
    {
        id: 'T3',
        title: 'Aceleración Activa',
        accent: '#a78bfa', /* Purple/Ecosystem */
        description: 'Eres fellow de Propel, Ashoka u otra red global y necesitas un partner técnico confiable para ejecutar tu visión.'
    },
]
