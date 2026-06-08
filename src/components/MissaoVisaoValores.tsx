import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Star, Leaf } from 'lucide-react'
import nossaEssencia from '../assets/nossa-esencia-raiane.jpeg'

const cards = [
  { icon: Target, title: 'Missão', color: 'var(--teal)',    bg: 'rgba(53,92,101,0.06)',  border: 'var(--teal)',    text: 'Transformar vidas através do cuidado em saúde, despertando consciência e guiando cada pessoa a assumir o protagonismo da própria vida.' },
  { icon: Star,   title: 'Visão',  color: 'var(--burgundy)', bg: 'rgba(98,17,50,0.06)',   border: 'var(--burgundy)', text: 'Ser referência em cuidado humanizado, unindo ciência, escuta e estilo de vida para promover saúde de forma verdadeira e duradoura.' },
  { icon: Leaf,   title: 'Valores',color: 'var(--olive)',   bg: 'rgba(106,127,88,0.08)', border: 'var(--olive)',   items: ['Verdade', 'Liberdade', 'Justiça', 'Organização', 'Pontualidade'] },
]

export default function MissaoVisaoValores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ background: 'var(--cream)', padding: '112px 0', overflow: 'hidden' }}>
      <div
        className="container"
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 72, alignItems: 'center' }}
      >

        {/* ==================== FOTO ==================== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute', bottom: 24, right: -20,
            width: '80%', height: '85%',
            background: 'var(--burgundy)', opacity: 0.06,
            borderRadius: 28, zIndex: 0,
          }} />
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 20px 56px rgba(53,92,101,0.16)',
            position: 'relative', zIndex: 1,
          }}>
            <img
              src={nossaEssencia}
              alt="Dra. Raiane Fonseca — Nossa Essência"
              style={{ width: '100%', height: 560, objectFit: 'cover', objectPosition: 'top center' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '40px 28px 24px',
              background: 'linear-gradient(to top, rgba(98,17,50,0.85) 0%, transparent 100%)',
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 19, color: 'rgba(255,255,255,0.92)' }}>
                "Sucesso é ter saúde."
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==================== CONTEÚDO ==================== */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--burgundy)', marginBottom: 12 }}
          >Nossa Essência</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 40 }}
          >
            O que guia o meu trabalho
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {cards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.13, duration: 0.6 }}
                  whileHover={{ x: 4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                  style={{
                    background: c.bg,
                    borderRadius: 20, padding: '22px 24px',
                    borderLeft: `3px solid ${c.border}`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    cursor: 'default', transition: 'box-shadow 0.25s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  }}>
                    <Icon size={20} color={c.color} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 24, fontWeight: 500, color: c.color, marginBottom: 8 }}>{c.title}</h3>
                    {c.text && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'var(--gray)', lineHeight: 1.72 }}>{c.text}</p>}
                    {c.items && (
                      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px 16px' }}>
                        {c.items.map(item => (
                          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'var(--gray)' }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section .container[style*="grid-template-columns: 1fr 1.15fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
