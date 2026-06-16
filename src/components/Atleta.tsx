import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import corridaDois from '../assets/corrida-raiane-2.jpeg'
import corridaTres from '../assets/corrida-raiane-3.jpeg'
import corridaQuatro from '../assets/corrida-raiane-4.jpeg'
import corridaCinco from '../assets/corrida-raiane-5.jpeg'

const stats = [
  { value: '2', label: 'Meias maratonas concluídas' },
  { value: '2h03', label: 'Melhor marca na meia maratona' },
  { value: 'Semanal', label: 'Treinos contínuos' },
  { value: 'Diretoria', label: '@medicos.atletas' },
]

const galeria = [corridaDois, corridaQuatro, corridaCinco]

export default function Atleta() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="atleta"
      ref={ref}
      style={{ background: '#0e1e25', padding: '112px 0', overflow: 'hidden' }}
    >
      <div className="container">

        {/* ==================== LABEL ==================== */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 56,
            textAlign: 'center',
          }}
        >
          Médica Atleta
        </motion.p>

        {/* ==================== LAYOUT PRINCIPAL ==================== */}
        <div
          className="atleta-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 72, alignItems: 'center', marginBottom: 56 }}
        >

          {/* Foto principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: 20, left: -16,
              width: '78%', height: '86%',
              background: 'rgba(0,146,214,0.1)',
              borderRadius: 28, zIndex: 0,
            }} />
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
              position: 'relative', zIndex: 1,
            }}>
              <img
                src={corridaTres}
                alt="Dra. Raiane Fonseca correndo na praia"
                style={{ width: '100%', height: 540, objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.75 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 600,
                color: 'white',
                lineHeight: 1.12,
                marginBottom: 24,
              }}
            >
              A medicina que<br />
              <em style={{ color: '#0092d6' }}>eu mesma pratico</em>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                height: 2, width: 48,
                background: 'linear-gradient(90deg, #0092d6, rgba(0,146,214,0.2))',
                marginBottom: 24,
                transformOrigin: 'left',
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24, duration: 0.65 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13.5, color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.85, marginBottom: 48,
                maxWidth: 440,
              }}
            >
              Perdi 30 kg e aprendi na pele o que é transformação real.
              Hoje sou meia maratonista e diretora da @medicos.atletas,
              porque acredito que o médico precisa viver o que prescreve.
              Quando falo em mudança de estilo de vida, falo por experiência própria.
            </motion.p>

            {/* ==================== STATS ==================== */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.32 + i * 0.09, duration: 0.6 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '22px 20px',
                    borderTop: '2px solid rgba(0,146,214,0.35)',
                  }}
                >
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>{s.value}</p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10.5,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.5,
                    letterSpacing: '0.02em',
                  }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== STRIP DE FOTOS ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {galeria.map((foto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.52 + i * 0.1, duration: 0.7 }}
              style={{
                borderRadius: 16, overflow: 'hidden',
                boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
              }}
            >
              <img
                src={foto}
                alt={`Dra. Raiane em corrida — foto ${i + 1}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #atleta .atleta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #atleta .atleta-grid > div:first-child img { height: 380px !important; }
          #atleta .container > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #atleta .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
