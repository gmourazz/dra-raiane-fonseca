import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Activity, Stethoscope, CheckCircle2 } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const checkups = [
  {
    icon: Heart, color: '#355c65', bg: 'rgba(53,92,101,0.08)',
    title: 'Check-up Cardiovascular',
    subtitle: 'Prevenção primária',
    desc: 'Avaliação cardíaca completa para identificar riscos antes que se tornem problemas.',
    items: [
      'Consulta clínica detalhada',
      'Eletrocardiograma (ECG)',
      'Ecocardiograma',
      'Avaliação de risco cardiovascular',
      'Plano preventivo personalizado',
    ],
    highlight: false,
  },
  {
    icon: Activity, color: '#621132', bg: 'rgba(98,17,50,0.08)',
    title: 'Check-up Cardiometabólico',
    subtitle: 'Avaliação integrada',
    desc: 'Abordagem completa que integra saúde cardíaca, metabolismo e estilo de vida em um único protocolo.',
    items: [
      'Tudo do Check-up Cardiovascular',
      'Avaliação metabólica completa',
      'Análise detalhada do estilo de vida',
      'Composição corporal',
      'Protocolo de acompanhamento',
    ],
    highlight: true,
  },
  {
    icon: Stethoscope, color: '#6a7f58', bg: 'rgba(106,127,88,0.08)',
    title: 'Avaliação Pré-operatória',
    subtitle: 'Risco cirúrgico',
    desc: 'Mais do que liberar uma cirurgia: garantir segurança e cuidado real antes do procedimento.',
    items: [
      'Triagem clínica completa',
      'Eletrocardiograma',
      'Análise de exames direcionados',
      'Condutas para maior segurança',
      'Laudo com orientações detalhadas',
    ],
    highlight: false,
  },
]

export default function Checkups() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="checkups" className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 12 }}
        >Prevenção</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
          className="section-title" style={{ marginTop: 0 }}
        >Avaliações e Check-ups</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.78, maxWidth: 560, margin: '0 auto 56px' }}
        >
          Cuidar do coração é um investimento em qualidade de vida.
          Escolha a avaliação certa para o seu momento.
        </motion.p>

        {/* ==================== CARDS ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 56 }}>
          {checkups.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.12, duration: 0.65 }}
                style={{
                  background: 'white', borderRadius: 24, padding: '36px 32px',
                  boxShadow: c.highlight ? `0 16px 48px ${c.color}28` : '0 4px 24px rgba(0,0,0,0.06)',
                  border: c.highlight ? `2px solid ${c.color}35` : '2px solid transparent',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {c.highlight && (
                  <div style={{
                    position: 'absolute', top: 20, right: 20,
                    background: c.color, color: 'white',
                    fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '5px 12px', borderRadius: 50,
                  }}>Mais Completo</div>
                )}

                <div style={{ width: 52, height: 52, borderRadius: 14, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={24} color={c.color} />
                </div>

                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.color, marginBottom: 6 }}>{c.subtitle}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#2c2c2c', lineHeight: 1.2, marginBottom: 14 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#6b6b6b', lineHeight: 1.7, marginBottom: 20 }}>{c.desc}</p>

                <div style={{ height: 1, background: `${c.color}20`, marginBottom: 20 }} />

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {c.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckCircle2 size={14} color={c.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#4f4f4f', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* ==================== CTA ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon size={17} />
            Agendar meu check-up
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #checkups .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
