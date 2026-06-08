import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, ShieldCheck, TrendingUp, Settings, BookOpen, Clock, MessageCircle } from 'lucide-react'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const reasons = [
  { icon: Eye, title: 'Um cuidado que olha além dos exames', text: 'Aqui, você não é reduzido a números. Seu corpo, sua mente, sua rotina e suas emoções são considerados de forma integrada.', color: '#355c65' },
  { icon: ShieldCheck, title: 'Foco em prevenir antes que o problema apareça', text: 'O objetivo não é apenas tratar doenças, mas evitar que elas se instalem. Um olhar estratégico para proteger o seu coração no longo prazo.', color: '#621132' },
  { icon: TrendingUp, title: 'Acompanhamento que gera constância', text: 'Mais do que orientações pontuais, você recebe direção contínua para construir hábitos que realmente se sustentam na vida real.', color: '#6a7f58' },
  { icon: Settings, title: 'Plano personalizado para a sua realidade', text: 'Cada conduta é pensada para encaixar na sua rotina — sem radicalismos, sem fórmulas prontas.', color: '#355c65' },
  { icon: BookOpen, title: 'Formação sólida, com aplicação prática', text: 'Base científica aliada a uma abordagem humana e aplicável, que transforma conhecimento em resultado na vida do paciente.', color: '#621132' },
  { icon: Clock, title: 'Consultas sem pressa, com escuta de qualidade', text: 'Cada consulta tem tempo dedicado para ouvir você de verdade. Nada de atendimento apressado ou respostas prontas.', color: '#6a7f58' },
]

export default function PorQueEscolher() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title"
        >
          Por que escolher a Dra. Raiane?
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 56,
        }}>
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '28px',
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  borderBottom: `3px solid ${r.color}`,
                  cursor: 'default',
                  transition: 'box-shadow 0.25s',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${r.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={r.color} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: r.color, marginBottom: 8, lineHeight: 1.3 }}>{r.title}</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#4f4f4f', lineHeight: 1.7 }}>{r.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle size={18} />
            Agendar Consulta Particular
          </a>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 960px) { .tile-bg .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr)!important; } }
        @media (max-width: 600px) { .tile-bg .container > div:nth-child(2) { grid-template-columns: 1fr!important; } }
      `}</style>
    </section>
  )
}
