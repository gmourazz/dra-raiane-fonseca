import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import formacaoFoto from '../assets/formacao-academica-raiane.jpeg'

const items = [
  { period: '2011 – 2017', title: 'Graduação em Medicina',          institution: 'UFRJ / Macaé',                                              detail: 'CRM: 52.110051-3', color: '#355c65' },
  { period: '2018 – 2020', title: 'Residência em Clínica Médica',   institution: 'SEMUSA / Macaé',                                             detail: 'RQE: 39702',       color: '#621132' },
  { period: '2020 – 2022', title: 'Residência em Cardiologia',      institution: 'Instituto Nacional de Cardiologia (INC / RJ)',               detail: 'RQE: 39.703',      color: '#6a7f58' },
  { period: '2022 – 2024', title: 'Residência em Ecocardiografia',  institution: 'Instituto Estadual de Cardiologia Aloysio de Castro (IECAC / RJ)', detail: 'RQE: 51.268', color: '#355c65' },
  { period: '2024 – 2025', title: 'Medicina do Estilo de Vida',     institution: 'MEV BRASIL',                                                 detail: 'Formação complementar', color: '#621132' },
]

export default function FormacaoAcademica() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formacao" style={{ background: '#faf9f6', padding: '112px 0', overflow: 'hidden' }}>
      <div
        className="container"
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 72, alignItems: 'stretch' }}
      >

        {/* ==================== TIMELINE ==================== */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}
          >Trajetória</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 600, color: 'var(--burgundy)', lineHeight: 1.1, marginBottom: 44 }}
          >
            Formação Acadêmica
          </motion.h2>

          <div style={{ position: 'relative' }}>
            {/* Linha da timeline */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
              style={{
                position: 'absolute', left: 20, top: 0, bottom: 0,
                width: 2,
                background: 'linear-gradient(to bottom, #355c65, #621132)',
                transformOrigin: 'top',
              }}
            />

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
                style={{ display: 'flex', gap: 28, marginBottom: i < items.length - 1 ? 28 : 0, position: 'relative' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
                  style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: item.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1,
                    boxShadow: `0 4px 14px ${item.color}50`,
                  }}
                >
                  <GraduationCap size={20} color="white" />
                </motion.div>

                <div
                  style={{
                    background: 'white', borderRadius: 16, padding: '18px 22px', flex: 1,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                    borderLeft: `3px solid ${item.color}`,
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
                  }}
                >
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: item.color, marginBottom: 4 }}>{item.period}</p>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: '#2c2c2c', marginBottom: 3 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#6a7f58', marginBottom: 2 }}>{item.institution}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#8a8a8a', fontStyle: 'italic' }}>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================== FOTO ==================== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{
            position: 'absolute', top: 20, right: -16,
            width: '90%', height: '92%',
            background: 'var(--teal)', opacity: 0.07,
            borderRadius: 28, zIndex: 0,
          }} />
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 20px 56px rgba(53,92,101,0.18)',
            position: 'relative', zIndex: 1,
            flex: 1, minHeight: 400,
          }}>
            <img
              src={formacaoFoto}
              alt="Dra. Raiane Fonseca — Formação"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>

          {/* Credenciais flutuantes */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: -20, left: -20, zIndex: 2,
              background: 'white', borderRadius: 16, padding: '16px 20px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
              border: '1px solid rgba(53,92,101,0.1)',
            }}
          >
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 11, color: 'var(--teal)', marginBottom: 6 }}>Credenciais</p>
            {['CRM 52.110051-3', 'RQE 39.703', 'RQE 51.268'].map(c => (
              <p key={c} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'var(--gray-light)', lineHeight: 1.8 }}>{c}</p>
            ))}
          </motion.div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #formacao .container { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
