import { AtSign, MapPin } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA_LINK = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const navLinks = [
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#jornada', label: 'Serviços' },
  { href: '#exames', label: 'Exames' },
  { href: '#planos', label: 'Planos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer>
      {/* Footer main */}
      <div style={{ background: '#3a0a1e', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
            {/* Brand column */}
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'white', marginBottom: 4 }}>
                Dra. Raiane Fonseca
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18 }}>
                Cardiologia · Ecocardiografia · Medicina do Estilo de Vida
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <MapPin size={13} color="rgba(255,255,255,0.35)" style={{ marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                  Rua Santa Catarina, 219 · Sala 104 · Rio das Ostras, RJ<br />
                  CRM 52.110051-3 · RQE 39.703 · RQE 51.268
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Navegação</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 16px' }}>
                {navLinks.map(l => (
                  <a key={l.href} href={l.href}
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Contato</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white' }}>
                    <WhatsAppIcon size={16} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>WhatsApp</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>(22) 99849-1818</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/raianefonseca_" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.15)' }}>
                    <AtSign size={16} color="rgba(255,255,255,0.7)" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Instagram</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>@raianefonseca_</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        <style>{`
          @media (max-width: 768px) {
            footer > div:last-child .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </footer>
  )
}
