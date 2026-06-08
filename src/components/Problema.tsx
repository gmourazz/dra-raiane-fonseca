import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, Activity, TrendingUp, Zap, Moon, AlertCircle } from 'lucide-react'
import corridaSeis from '../assets/corrida-raiane-6.jpeg'

const sintomas = [
  { icon: Scale,       label: 'Ganho de peso',     desc: 'mesmo sem mudar os hábitos' },
  { icon: Activity,    label: 'Pressão subindo',    desc: 'e os exames piorando aos poucos' },
  { icon: TrendingUp,  label: 'Colesterol alto',    desc: 'sem saber por onde começar' },
  { icon: Zap,         label: 'Falta de energia',   desc: 'cansaço que não passa com descanso' },
  { icon: Moon,        label: 'Sono ruim',          desc: 'acordando sem disposição' },
  { icon: AlertCircle, label: 'Estresse crônico',   desc: 'e o coração pagando o preço' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' as const } }),
}

export default function Problema() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problema" ref={ref} style={{ background: '#0e1e25', padding: '112px 0', overflow: 'hidden' }}>
      <div className="container">

        {/* ==================== HEADER COM FOTO ==================== */}
        <div className="problema-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 72 }}>

          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>Por que agir agora?</p>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'white', lineHeight: 1.2,
            }}>
              Você não precisa esperar a doença aparecer
              para cuidar da sua saúde.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.85, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: 16, right: -12,
              width: '88%', height: '90%',
              background: 'rgba(0,146,214,0.1)',
              borderRadius: 24, zIndex: 0,
            }} />
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1 }}>
              <img
                src={corridaSeis}
                alt="Dra. Raiane Fonseca em corrida"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ==================== SINTOMAS ==================== */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16, marginBottom: 64,
        }}>
          {sintomas.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                custom={i + 1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '24px 24px',
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(53,92,101,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#7ab8c4" />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700, fontSize: 13,
                    color: 'rgba(255,255,255,0.9)', marginBottom: 4,
                  }}>{s.label}</p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12, color: 'rgba(255,255,255,0.38)',
                    lineHeight: 1.5,
                  }}>{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ==================== PIVOT ==================== */}
        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 56, textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 16, lineHeight: 1.5,
          }}>
            Muitas pessoas chegam até mim quando os sinais já são visíveis.
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'white', lineHeight: 1.2, marginBottom: 40,
          }}>
            Meu trabalho é agir <em style={{ color: '#7ab8c4' }}>antes</em> disso acontecer.
          </p>

          <a
            href="#planos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: 'white',
              border: '1px solid rgba(255,255,255,0.25)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
          >
            Conhecer o Programa
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #problema .problema-header { grid-template-columns: 1fr !important; gap: 40px !important; }
          #problema .problema-header > div:last-child { display: none !important; }
          #problema .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #problema .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
