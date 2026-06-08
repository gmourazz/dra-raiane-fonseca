import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Apple, Moon, Wind, Users, Heart } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import metodofoto from '../assets/pq-escolher-a-dra-raiane.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const pilares = [
  {
    icon: Dumbbell, title: 'Movimento', color: '#355c65',
    text: 'Atividade física regular, prescrita para o seu nível e objetivos. Porque mover o corpo muda tudo, inclusive o coração.',
  },
  {
    icon: Apple, title: 'Alimentação', color: '#6a7f58',
    text: 'Estratégias que cabem na sua rotina, sem extremismos, sem fórmulas prontas. Com resultado real e duradouro.',
  },
  {
    icon: Moon, title: 'Sono', color: '#355c65',
    text: 'O pilar mais ignorado da saúde. Avaliamos a qualidade do seu descanso e trabalhamos para restaurá-lo.',
  },
  {
    icon: Wind, title: 'Gestão do Estresse', color: '#621132',
    text: 'Estresse crônico inflama e adoece. Ferramentas práticas para recuperar o equilíbrio e sair do modo sobrevivência.',
  },
  {
    icon: Users, title: 'Conexões', color: '#6a7f58',
    text: 'Vínculos afetivos protegem o coração. Saúde se constrói também em comunidade, pertencimento e propósito.',
  },
  {
    icon: Heart, title: 'Saúde Cardiovascular', color: '#621132',
    text: 'Monitoramento ativo do coração com exames de precisão, conduta baseada em evidências e acompanhamento contínuo.',
  },
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
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 20 }}
            >
              O Método
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.78, maxWidth: 420 }}
            >
              Uma abordagem que trata o ser humano inteiro, não apenas o exame.
              Seis pilares que se integram para construir saúde real, de dentro para fora.
            </motion.p>
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
                src={metodofoto}
                alt="Dra. Raiane Fonseca — O Método"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ==================== PILARES ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 56 }}>
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
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: p.color, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#4f4f4f', lineHeight: 1.7 }}>{p.text}</p>
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
          #metodo .container > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #metodo .container > div:first-child > div:last-child { display: none !important; }
        }
        @media (max-width: 960px) { #metodo .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr)!important; } }
        @media (max-width: 600px) { #metodo .container > div:nth-child(2) { grid-template-columns: 1fr!important; } }
      `}</style>
    </section>
  )
}
