import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Star, Leaf } from 'lucide-react'

const cards = [
  { icon: Target, title: 'Missão', color: 'var(--teal)', bg: 'rgba(53,92,101,0.06)', border: 'var(--teal)', text: 'Transformar vidas através do cuidado em saúde, despertando consciência e guiando cada pessoa a assumir o protagonismo da própria vida.' },
  { icon: Star, title: 'Visão', color: 'var(--burgundy)', bg: 'rgba(98,17,50,0.06)', border: 'var(--burgundy)', text: 'Ser referência em cuidado humanizado, unindo ciência, escuta e estilo de vida para promover saúde de forma verdadeira e duradoura.' },
  { icon: Leaf, title: 'Valores', color: 'var(--olive)', bg: 'rgba(106,127,88,0.08)', border: 'var(--olive)', items: ['Verdade', 'Liberdade', 'Justiça', 'Organização', 'Pontualidade'] },
]

export default function MissaoVisaoValores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ background: 'var(--cream)', padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="section-title"
        >Nossa Essência</motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
                style={{
                  background: c.bg,
                  borderRadius: 24,
                  padding: '40px 32px',
                  borderTop: `3px solid ${c.border}`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.25s',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                }}>
                  <Icon size={22} color={c.color} />
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic', fontSize: 32, fontWeight: 500,
                  color: c.color, marginBottom: 14,
                }}>{c.title}</h3>
                {c.text && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'var(--gray)', lineHeight: 1.78 }}>{c.text}</p>
                )}
                {c.items && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {c.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){section .container>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
