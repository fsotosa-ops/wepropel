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
    { num: '+100M', label: 'Vidas alcanzadas' },
    { num: '+400', label: 'Organizaciones' },
    { num: '$10M', label: 'Fondos catalizados' },
    { num: '500+', label: 'Líderes sociales' },
]

/* Verticales del ICP-GSI sección 4 */
export const VERTICALES = ['Educación', 'Salud', 'Empleabilidad', 'Microfinanzas']

/**
 * Trigger statements (señales de compra del ICP-GSI sección 4).
 * Cada item: parts = [prefijo, highlight, sufijo]. El highlight se renderiza en blanco.
 */
export const TRIGGERS = [
    {
        idx: '01',
        accent: '#60a5fa',
        parts: ['Eres fellow de ', 'Propel, Ashoka', ' u otra aceleradora de impacto.'],
    },
    {
        idx: '02',
        accent: '#818cf8',
        parts: ['Estás postulando a ', 'fondos +$50K USD', ' y necesitás justificación técnica nivel senior.'],
    },
    {
        idx: '03',
        accent: '#a78bfa',
        parts: ['Tu equipo de ', '15-50 personas', ' opera con Google Sheets que ya llegó a su límite.'],
    },
]
