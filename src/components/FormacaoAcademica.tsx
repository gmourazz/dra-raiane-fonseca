import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'

const items = [
  { period: '2011 – 2017', title: 'Graduação em Medicina', institution: 'UFRJ / Macaé', detail: 'CRM: 52.110051-3', color: '#355c65' },
  { period: '2018 – 2020', title: 'Residência em Clínica Médica', institution: 'SEMUSA / Macaé', detail: 'RQE: 39702', color: '#621132' },
  { period: '2020 – 2022', title: 'Residência em Cardiologia', institution: 'Instituto Nacional de Cardiologia (INC / RJ)', detail: 'RQE: 39.703', color: '#6a7f58' },
  { period: '2022 – 2024', title: 'Residência em Ecocardiografia', institution: 'Instituto Estadual de Cardiologia Aloysio de Castro (IECAC / RJ)', detail: 'RQE: 51.268', color: '#355c65' },
  { period: '2024 – 2025', title: 'Medicina do Estilo de Vida', institution: 'MEV BRASIL', detail: 'Formação complementar', color: '#621132' },
]

export default function FormacaoAcademica() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formacao" style={{ background: '#faf9f6', padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title"
        >
          Formação Acadêmica
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: 20,
              top: 0,
              bottom: 0,
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
              style={{
                display: 'flex',
                gap: 28,
                marginBottom: i < items.length - 1 ? 32 : 0,
                position: 'relative',
              }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
                style={{
                  width: 42, height: 42,
                  borderRadius: '50%',
                  background: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                  boxShadow: `0 4px 14px ${item.color}50`,
                }}
              >
                <GraduationCap size={20} color="white" />
              </motion.div>

              {/* Card */}
              <div style={{
                background: 'white',
                borderRadius: 16,
                padding: '20px 24px',
                flex: 1,
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
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: item.color, marginBottom: 5 }}>{item.period}</p>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 700, color: '#2c2c2c', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#6a7f58', marginBottom: 2 }}>{item.institution}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#8a8a8a', fontStyle: 'italic' }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
