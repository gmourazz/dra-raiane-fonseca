import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Moon, Apple, Wind } from 'lucide-react'

const dicas = [
  {
    num: '01', icon: Dumbbell, color: '#355c65',
    title: 'Exercício e Coração',
    text: '30 minutos de atividade moderada por dia já fazem diferença real. Caminhada, natação e ciclismo protegem as artérias, regulam a pressão e fortalecem o músculo cardíaco.',
    destaque: '35% menos risco de infarto com atividade regular',
  },
  {
    num: '02', icon: Moon, color: '#621132',
    title: 'Sono e Saúde Cardiovascular',
    text: 'A privação de sono eleva o cortisol, inflama as artérias e sobrecarrega o coração. Dormir bem não é luxo: é parte essencial do tratamento cardiovascular.',
    destaque: 'Menos de 6h por noite aumenta o risco de hipertensão',
  },
  {
    num: '03', icon: Apple, color: '#6a7f58',
    title: 'Alimentação Anti-inflamatória',
    text: 'Frutas, vegetais, azeite de oliva e peixes gordurosos reduzem a inflamação nas artérias. Evitar ultraprocessados é uma das estratégias mais eficazes para o coração.',
    destaque: 'Ômega-3 e antioxidantes são aliados das artérias',
  },
  {
    num: '04', icon: Wind, color: '#355c65',
    title: 'Estresse e Risco Cardíaco',
    text: 'Estresse crônico aumenta a pressão, acelera o coração e favorece a formação de placas nas artérias. Técnicas de respiração e pausas conscientes são parte do tratamento.',
    destaque: 'Cortisol elevado inflama e adoece o sistema vascular',
  },
]

export default function Dicas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dicas" className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>

        {/* ==================== HEADER ==================== */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 12 }}
        >Saúde em Foco</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
          className="section-title" style={{ marginTop: 0 }}
        >Dicas de Saúde Cardiovascular</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.78, maxWidth: 520, margin: '0 auto 64px' }}
        >
          Pequenos hábitos diários fazem a maior diferença
          na saúde do coração ao longo dos anos.
        </motion.p>

        {/* ==================== GRID ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {dicas.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 44 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '40px 44px 40px 44px',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.055)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Número decorativo de fundo — elemento visual dominante */}
                <span style={{
                  position: 'absolute', right: -10, top: -20,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 180, fontWeight: 700, lineHeight: 1,
                  color: d.color, opacity: 0.08,
                  userSelect: 'none', pointerEvents: 'none',
                }}>{d.num}</span>

                {/* Topo: número visível + ícone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 64, fontWeight: 700, lineHeight: 1,
                    color: d.color, letterSpacing: '-2px',
                  }}>{d.num}</span>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `${d.color}12`,
                    border: `1.5px solid ${d.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={d.color} />
                  </div>
                </div>

                {/* Título */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24, fontWeight: 600, lineHeight: 1.2,
                  color: '#1a1a1a', marginBottom: 12,
                }}>{d.title}</h3>

                {/* Texto */}
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13.5, color: 'var(--gray)',
                  lineHeight: 1.78, marginBottom: 20,
                }}>{d.text}</p>

                {/* Destaque colorido */}
                <div style={{
                  borderLeft: `3px solid ${d.color}`,
                  paddingLeft: 14,
                  marginTop: 'auto',
                }}>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12, fontWeight: 600,
                    color: d.color, lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}>{d.destaque}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #dicas .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
