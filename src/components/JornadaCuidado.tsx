import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Activity, Stethoscope, CheckCircle2 } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import fotoJornada from '../assets/foto-raiane-jornada.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const services = [
  {
    icon: Heart, title: 'Avaliação Cardiovascular Completa', color: 'var(--teal)',
    description: 'Um olhar profundo sobre sua saúde para identificar riscos, corrigir rotas e construir um plano claro para o seu futuro.',
    items: ['Consulta detalhada', 'Avaliação do estilo de vida', 'Exames direcionados', 'Plano personalizado'],
  },
  {
    icon: Activity, title: 'Acompanhamento e Transformação', color: 'var(--burgundy)',
    description: 'Para quem quer construir saúde de forma consistente. Cada hábito é acompanhado com dados reais de adesão, semana a semana.',
    items: ['Mudança de hábitos', 'Estratégia personalizada', 'Monitoramento de adesão', 'Seguimento contínuo'],
  },
  {
    icon: Stethoscope, title: 'Avaliação Pré-Operatória', subtitle: 'Risco Cirúrgico', color: 'var(--olive)',
    description: 'Mais do que liberar uma cirurgia, este é um momento de avaliar riscos, otimizar sua saúde e garantir mais segurança.',
    items: ['Avaliação clínica detalhada', 'Identificação de riscos cardiovasculares', 'Condutas para maior segurança'],
  },
]

export default function JornadaCuidado() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="jornada" style={{ background: 'var(--cream-dark)', padding: '112px 0', overflow: 'hidden' }}>
      <div
        className="container"
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 72, alignItems: 'start' }}
      >
        {/* Left: doctor photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          style={{ position: 'relative', top: 0 }}
        >
          {/* Decorative shape behind */}
          <div style={{
            position: 'absolute', top: 28, left: -20,
            width: '80%', height: '88%',
            background: 'var(--teal)', opacity: 0.07,
            borderRadius: 28, zIndex: 0,
          }} />

          <div style={{
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(53,92,101,0.18)',
            position: 'relative', zIndex: 1,
          }}>
            <img
              src={fotoJornada}
              alt="Dra. Raiane Fonseca"
              style={{ width: '100%', height: 640, objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '48px 28px 28px',
              background: 'linear-gradient(to top, rgba(53,92,101,0.88) 0%, transparent 100%)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic', fontSize: 20,
                color: 'rgba(255,255,255,0.9)',
              }}>"Cuidar vai além dos exames."</p>
            </div>
          </div>

        </motion.div>

        {/* Right: title + cards */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}
          >Serviços</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: 'var(--burgundy)', lineHeight: 1.1, marginBottom: 40 }}
          >
            Jornada de Cuidado<br />Cardiovascular
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.14, duration: 0.65 }}
                  whileHover={{ x: 4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                  style={{
                    background: 'white',
                    borderRadius: 20,
                    padding: '24px 24px',
                    display: 'flex', gap: 18, alignItems: 'flex-start',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    borderLeft: `3px solid ${s.color}`,
                    cursor: 'default',
                    transition: 'box-shadow 0.25s',
                  }}
                >
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: `${s.color === 'var(--teal)' ? 'rgba(53,92,101,0.1)' : s.color === 'var(--burgundy)' ? 'rgba(98,17,50,0.08)' : 'rgba(106,127,88,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={s.color} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: s.color, marginBottom: s.subtitle ? 2 : 8, lineHeight: 1.3 }}>{s.title}</h3>
                    {s.subtitle && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'var(--gray-light)', marginBottom: 8 }}>{s.subtitle}</p>}
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12.5, color: 'var(--gray)', lineHeight: 1.7, marginBottom: 10 }}>{s.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.items.map(item => (
                        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: s.color }}>
                          <CheckCircle2 size={12} color={s.color} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ marginTop: 32 }}
          >
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={17} />
              Agendar Consulta Particular
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #jornada .container { grid-template-columns: 1fr !important; gap: 48px !important; }
          #jornada .container > div:first-child img { height: 420px !important; }
        }
      `}</style>
    </section>
  )
}
