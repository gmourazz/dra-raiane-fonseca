import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Apple, Moon, Wind, Users, Sparkles, Ban, Brain } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import corridafoto from '../assets/corrida-raiane-2.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const pilares = [
  { icon: Dumbbell, title: 'Movimento',                  color: '#355c65', text: 'Energia e proteção cardiovascular.' },
  { icon: Apple,    title: 'Alimentação',                color: '#6a7f58', text: 'Hábitos sustentáveis, sem extremismos.' },
  { icon: Moon,     title: 'Sono',                       color: '#355c65', text: 'Descanso que restaura e equilibra.' },
  { icon: Wind,     title: 'Gestão do Estresse',         color: '#621132', text: 'Menos sobrecarga, mais equilíbrio.' },
  { icon: Users,    title: 'Conexões Sociais',           color: '#6a7f58', text: 'Vínculos que fortalecem a saúde.' },
  { icon: Sparkles, title: 'Espiritualidade e Propósito',color: '#6a7f58', text: 'Propósito que sustenta escolhas.' },
  { icon: Ban,      title: 'Tóxicos',                   color: '#621132', text: 'Reduzir exposições nocivas.' },
  { icon: Brain,    title: 'Saúde Mental',              color: '#355c65', text: 'Equilíbrio emocional que sustenta tudo.' },
]

export default function PorQueEscolher() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="metodo" className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>

        {/* ==================== HEADER COM FOTO ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 72 }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}
            >Abordagem</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.2vw, 2.9rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.15, marginBottom: 24 }}
            >
              A medicina que eu pratico
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.78, marginBottom: 16 }}
            >
              Minha abordagem vai além dos exames e dos diagnósticos. Acompanho pessoas que desejam construir saúde com consistência, energia e propósito.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.78, marginBottom: 16 }}
            >
              Minha própria jornada de transformação através do estilo de vida reforçou aquilo que vejo diariamente na prática: pequenas escolhas repetidas ao longo do tempo têm o poder de mudar vidas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              style={{ borderLeft: '3px solid var(--burgundy)', paddingLeft: 18, marginBottom: 24 }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 19, color: 'var(--burgundy)', lineHeight: 1.4 }}>
                Afinal, sucesso é ter saúde.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="metodo-bullets"
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              {[
                'Ouço sua história antes de olhar seus exames.',
                'Construo estratégias para a sua vida real.',
                'Saúde sustentável, sem fórmulas prontas.',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: 15, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, fontWeight: 600, color: 'var(--gray)', lineHeight: 1.5, margin: 0 }}>
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: 16, right: -12,
              width: '88%', height: '90%',
              background: 'var(--burgundy)', opacity: 0.06,
              borderRadius: 24, zIndex: 0,
            }} />
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 48px rgba(53,92,101,0.16)', position: 'relative', zIndex: 1 }}>
              <img
                src={corridafoto}
                alt="Dra. Raiane Fonseca correndo ao pôr do sol"
                style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              {/* Selos */}
              <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
                  background: 'rgba(98,17,50,0.88)', color: 'white',
                  padding: '5px 12px', borderRadius: 20, letterSpacing: '0.04em',
                  backdropFilter: 'blur(4px)',
                }}>@medicos.atletas</span>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
                  background: 'rgba(53,92,101,0.88)', color: 'white',
                  padding: '5px 12px', borderRadius: 20, letterSpacing: '0.04em',
                  backdropFilter: 'blur(4px)',
                }}>Cardiologista · Meia Maratonista</span>
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '40px 28px 28px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic', fontSize: 21,
                  color: 'rgba(255,255,255,0.93)',
                  lineHeight: 1.4,
                }}>
                  "Eu prescrevo um estilo de vida que eu pratico."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================== PILARES ==================== */}
        <div className="metodo-pilares" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 56 }}>
          {pilares.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'white', borderRadius: 20, padding: '28px',
                  display: 'flex', gap: 18, alignItems: 'flex-start',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  borderBottom: `3px solid ${p.color}`,
                  cursor: 'default', transition: 'box-shadow 0.25s',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${p.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={22} color={p.color} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: p.color, marginBottom: 6, lineHeight: 1.3 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#4f4f4f', lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ==================== CTA ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon size={18} />
            Agendar Consulta Particular
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #metodo .container > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          #metodo h2 { font-size: 1.6rem !important; }
          #metodo .metodo-pilares { grid-template-columns: repeat(4, 1fr) !important; gap: 12px !important; }
          #metodo .metodo-pilares > div { padding: 18px 12px !important; flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 10px !important; }
          #metodo .metodo-pilares > div > div:first-child { margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #metodo .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #metodo .container > div:first-child > div:first-child { text-align: center !important; }
          #metodo .metodo-bullets { align-items: center !important; }
          #metodo .metodo-bullets > div { justify-content: center !important; }
          #metodo .metodo-pilares { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          #metodo .metodo-pilares > div { grid-column: span 1 !important; padding: 16px 14px !important; flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 8px !important; }
          #metodo .metodo-pilares > div > div:first-child { margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
