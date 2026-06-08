import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, BarChart2, Activity, Scan, Brain, Weight, CheckCircle2, MessageCircle } from 'lucide-react'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const exames = [
  {
    icon: Heart, title: 'Eletrocardiograma', color: 'var(--teal)',
    items: [<>Exame que <strong>registra a atividade elétrica do coração</strong>, sendo uma ferramenta diagnóstica rápida, indolor e não invasiva.</>],
  },
  {
    icon: BarChart2, title: 'MAPA 24hrs', color: 'var(--burgundy)',
    items: [<>Avalia o comportamento da pressão arterial ao longo do dia e da noite, trazendo mais precisão para o diagnóstico.</>, <>Pode ser realizado no consultório ou <strong>em domicílio</strong>.</>],
  },
  {
    icon: Activity, title: 'Holter', color: 'var(--olive)',
    items: [<>Monitora o ritmo do coração continuamente, ajudando a identificar arritmias e palpitações.</>, <>Monitoramento por <strong>24 horas</strong>, <strong>3 dias</strong> e <strong>7 dias</strong>.</>],
  },
  {
    icon: Scan, title: 'Ecocardiograma com Doppler', color: 'var(--teal)',
    items: [<>Avalia a <strong>estrutura e o funcionamento do coração</strong> (ultrassom cardíaco).</>, <>Função cardíaca · Válvulas · Estrutura do coração</>],
  },
  {
    icon: Brain, title: 'Doppler de Carótidas e Vertebrais', color: 'var(--burgundy)',
    items: [<>Identifica <strong>placas de gordura nas artérias</strong> que levam sangue ao cérebro.</>, <>Avalia o <strong>risco de AVC</strong> de forma antecipada.</>],
  },
  {
    icon: Weight, title: 'Bioimpedância', color: 'var(--olive)',
    items: [<>Avalia a <strong>composição corporal</strong>: gordura, massa muscular, água e massa óssea.</>, <>Auxilia em estratégias eficazes para saúde metabólica.</>],
  },
]

const colorMap: Record<string, string> = {
  'var(--teal)': 'rgba(53,92,101,0.1)',
  'var(--burgundy)': 'rgba(98,17,50,0.08)',
  'var(--olive)': 'rgba(106,127,88,0.09)',
}

export default function ExamesComplementares() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="exames" style={{ background: 'var(--cream)', padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}
        >Diagnóstico</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
          className="section-title" style={{ marginTop: 0 }}
        >Exames Complementares</motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {exames.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: '0 14px 36px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '26px 22px',
                  display: 'flex', flexDirection: 'column', gap: 14,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  borderTop: `3px solid ${e.color}`,
                  cursor: 'default',
                  transition: 'box-shadow 0.25s',
                }}
              >
                <div style={{
                  height: 64, borderRadius: 12,
                  background: colorMap[e.color],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={28} color={e.color} />
                </div>

                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: e.color }}>{e.title}</h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  {e.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'var(--gray)', lineHeight: 1.6 }}>
                      <CheckCircle2 size={13} color={e.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    background: 'transparent', color: e.color,
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '9px 16px', borderRadius: 50, border: `1.5px solid ${e.color}`,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e2 => { e2.currentTarget.style.background = e.color; e2.currentTarget.style.color = 'white' }}
                  onMouseLeave={e2 => { e2.currentTarget.style.background = 'transparent'; e2.currentTarget.style.color = e.color }}
                >
                  <MessageCircle size={12} />
                  Agendar Agora
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #exames .container > div:last-child { grid-template-columns: repeat(2,1fr)!important; } }
        @media (max-width: 600px) { #exames .container > div:last-child { grid-template-columns: 1fr!important; } }
      `}</style>
    </section>
  )
}
