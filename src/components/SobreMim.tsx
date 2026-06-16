import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, Target, Medal } from 'lucide-react'
import sobreMimFoto from '../assets/sobre-mim-raiane.jpeg'
import sobreMimDois from '../assets/sobre-mim-dois.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: 'easeOut' as const } }),
}

export default function SobreMim() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" style={{ background: 'var(--cream-dark)', padding: '112px 0', overflow: 'hidden' }}>
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}
        ref={ref}
      >

        {/* ==================== IMAGEM ==================== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute', top: 24, right: -20,
            width: '85%', height: '90%',
            background: 'var(--teal)', opacity: 0.07,
            borderRadius: 28, zIndex: 0,
          }} />

          {/* Foto principal */}
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 20px 56px rgba(53,92,101,0.16)',
            position: 'relative', zIndex: 1,
          }}>
            <img
              src={sobreMimFoto}
              alt="Dra. Raiane Fonseca"
              style={{ width: '100%', height: 520, objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          {/* Segunda foto — miniatura sobreposta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: 'absolute', bottom: -24, left: -24, zIndex: 3,
              width: 148, height: 148,
              borderRadius: 20,
              overflow: 'hidden',
              border: '4px solid white',
              boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
            }}
          >
            <img
              src={sobreMimDois}
              alt="Dra. Raiane Fonseca"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </motion.div>

        </motion.div>

        {/* ==================== TEXTO ==================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--burgundy)', marginBottom: 12 }}
          >Sobre mim</motion.p>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 28 }}
          >
            Saúde que vai além dos exames
          </motion.h2>

          {[
            <>Acredito que sucesso não é apenas conquistar mais. É <strong style={{ color: 'var(--burgundy)' }}>ter saúde para viver o que realmente importa</strong>.</>,
            <>Mais do que tratar doenças, meu trabalho é <strong style={{ color: 'var(--teal)' }}>te ajudar a assumir o protagonismo da sua própria vida</strong>, com consciência, clareza e direção.</>,
          ].map((text, i) => (
            <motion.p
              key={i} custom={i + 2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.82, marginBottom: 14 }}
            >{text}</motion.p>
          ))}

          {/* ==================== BADGES ==================== */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}
          >
            {[
              { icon: Heart,  label: 'Cardiologia',     detail: 'INC · RJ',      color: 'var(--teal)' },
              { icon: Shield, label: 'Ecocardiografia', detail: 'IECAC · RJ',    color: 'var(--burgundy)' },
              { icon: Target, label: 'Estilo de Vida',  detail: 'MEV Brasil',    color: 'var(--olive)' },
              { icon: Medal,  label: 'Médicos Atletas', detail: 'Diretoria',     color: 'var(--burgundy)' },
            ].map(b => {
              const Icon = b.icon
              return (
                <div key={b.label} style={{
                  padding: '10px 18px', background: 'white',
                  borderRadius: 50, border: `1px solid ${b.color}25`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon size={14} color={b.color} />
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, color: b.color, lineHeight: 1.2 }}>{b.label}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'var(--gray-light)' }}>{b.detail}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #sobre .container { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
