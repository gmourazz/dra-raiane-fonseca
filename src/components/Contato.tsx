import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, AtSign, Navigation } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'
const MAPS_LINK = 'https://www.google.com/maps/place/OSTRACOR+-+Dra.+Raiane+Fonseca/@-22.5285777,-41.955744,15z'

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" style={{ background: 'var(--cream)', padding: '112px 0' }}>
      <div className="container" ref={ref}>

        {/* ==================== HEADER ==================== */}
        <div style={{ marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}
          >Onde me encontrar</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 20 }}
          >Local de Atendimento e Contatos</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.78 }}
          >
            Atendimento presencial em Rio das Ostras, RJ e online para todo o Brasil.
          </motion.p>
        </div>

        <div style={{ display: 'flex', gap: 28, alignItems: 'stretch', flexWrap: 'wrap' }}>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.75 }}
            style={{
              flex: 1,
              minWidth: 320,
              background: 'white',
              borderRadius: 28,
              boxShadow: '0 4px 40px rgba(0,0,0,0.07)',
              padding: '44px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {/* Address block */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', paddingBottom: 24, borderBottom: '1px solid rgba(53,92,101,0.08)', marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(98,17,50,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <MapPin size={18} color="var(--burgundy)" />
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--burgundy)', marginBottom: 5 }}>Consultório</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14.5, color: 'var(--gray)', lineHeight: 1.75 }}>
                  Rua Santa Catarina nº 219, Sala 104<br />
                  Extensão do Bosque · <strong style={{ color: 'var(--teal)' }}>OSTRACOR</strong><br />
                  Rio das Ostras, RJ
                </p>
              </div>
            </div>

            {/* Contact rows — vertical list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 32 }}>
              {[
                { icon: Phone, color: 'var(--teal)', bg: 'rgba(53,92,101,0.08)', label: 'WhatsApp', value: '(22) 99849-1818', href: WA },
                { icon: Mail, color: 'var(--olive)', bg: 'rgba(106,127,88,0.09)', label: 'E-mail', value: 'raianefonseca.cardio@gmail.com', href: 'mailto:raianefonseca.cardio@gmail.com' },
                { icon: AtSign, color: 'var(--burgundy)', bg: 'rgba(98,17,50,0.08)', label: 'Instagram', value: '@raianefonseca_', href: 'https://www.instagram.com/raianefonseca_' },
              ].map((c, i) => {
                const Icon = c.icon
                return (
                  <a key={i} href={c.href} target={c.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{
                      display: 'flex', gap: 14, alignItems: 'center',
                      textDecoration: 'none', padding: '11px 14px', borderRadius: 14,
                      transition: 'background 0.18s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(53,92,101,0.04)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color={c.color} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c.color, marginBottom: 2 }}>{c.label}</p>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, color: 'var(--gray)' }}>{c.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 'auto' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon size={16} />
                Agendar Consulta
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: 'transparent', color: 'var(--teal)',
                  border: '1.5px solid var(--teal)',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '12px 20px', borderRadius: 50, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }}
              >
                <Navigation size={13} />
                Como chegar
              </a>
            </div>
          </motion.div>

          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.75 }}
            style={{
              flexShrink: 0,
              width: 320,
              background: 'white',
              borderRadius: 28,
              boxShadow: '0 4px 40px rgba(0,0,0,0.07)',
              padding: '28px 28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {/* Label inside card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(98,17,50,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={15} color="var(--burgundy)" />
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--burgundy)', marginBottom: 1 }}>Localização</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'var(--gray)', opacity: 0.7 }}>Rio das Ostras, RJ</p>
              </div>
            </div>

            {/* Map square */}
            <div style={{
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(53,92,101,0.13)',
              flex: 1,
              minHeight: 260,
            }}>
              <iframe
                title="Localização OSTRACOR"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.0!2d-41.955744!3d-22.528577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b3b68f3da677%3A0x876570a7a3f11af6!2sOSTRACOR%20-%20Dra.%20Raiane%20Fonseca!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', minHeight: 260 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open maps link */}
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
                color: 'var(--teal)', textDecoration: 'none', letterSpacing: '0.06em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Navigation size={12} />
              Abrir no Google Maps
            </a>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contato .container > div:last-child { flex-direction: column !important; align-items: stretch !important; }
          #contato .container > div:last-child > div:last-child { align-items: center !important; }
        }
      `}</style>
    </section>
  )
}
