import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const fazemos = [
  'Acompanhamento contínuo da sua saúde',
  'Ajustes personalizados ao longo do tempo',
  'Estratégias práticas para sair do automático',
  'Mudanças possíveis, consistentes e sustentáveis',
  'Redução real do risco de infarto e AVC',
]
const paraQuem = [
  'Histórico familiar de doenças cardiovasculares',
  'Pressão alta, colesterol alto ou sobrepeso',
  'Cansaço frequente, estresse ou falta de energia',
  'Exames "quase alterados" ou já em piora',
  'Quem quer envelhecer com autonomia e clareza',
]

export default function PlanosAcompanhamento() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="planos" className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6a7f58', marginBottom: 12 }}
        >Acompanhamento</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="section-title" style={{ marginTop: 0 }}
        >Planos de Acompanhamento</motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #355c65' }}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 28, color: '#355c65', marginBottom: 16 }}>O que é</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#4f4f4f', lineHeight: 1.8, marginBottom: 12 }}>
                Um <strong style={{ color: '#355c65' }}>acompanhamento contínuo e personalizado</strong> da sua saúde, focado em identificar riscos antes que se tornem doenças.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#4f4f4f', lineHeight: 1.8 }}>
                O objetivo é <strong style={{ color: '#621132' }}>construir saúde com consistência</strong>, ajustar rotas ao longo do caminho e evitar infarto e AVC antes que aconteçam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #6a7f58' }}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 28, color: '#6a7f58', marginBottom: 20 }}>Para quem é</h3>
              <ul className="check-list">
                {paraQuem.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={15} color="#6a7f58" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #621132', flex: 1 }}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 28, color: '#621132', marginBottom: 20 }}>O que fazemos juntos</h3>
              <ul className="check-list">
                {fazemos.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={15} color="#621132" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.65 }}
              style={{
                background: 'linear-gradient(135deg, #355c65, #621132)',
                borderRadius: 20,
                padding: '36px 32px',
                display: 'flex', flexDirection: 'column', gap: 16,
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 24, color: 'rgba(255,255,255,0.95)', lineHeight: 1.4 }}>
                "Sua saúde merece atenção antes que os sintomas apareçam."
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                O plano de acompanhamento é pensado para a sua realidade.<br />Converse comigo pelo WhatsApp para saber mais.
              </p>
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'white', color: '#355c65',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '12px 24px', borderRadius: 50, textDecoration: 'none',
                  alignSelf: 'flex-start', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <MessageCircle size={14} />
                Saiba mais
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #planos .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
