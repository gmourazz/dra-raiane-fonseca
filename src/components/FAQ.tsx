import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import duvidsFoto from '../assets/duvidas-raiane.jpeg'

const faqs = [
  { q: 'Dra. Raiane atende plano de saúde?', a: <>Todos os meus atendimentos são <strong>particulares</strong>, pois acredito que uma abordagem integral, cuidadosa e sem pressa é fundamental para criar uma linha de cuidado, o que não é compatível com consultas rápidas de convênio.</> },
  { q: 'Quanto tempo dura a consulta?', a: <>Dedico cerca de <strong>1 hora</strong> para cada consulta, proporcionando um espaço seguro e acolhedor para um <strong>atendimento sem pressa</strong> e em estado de presença.</> },
  { q: 'A consulta dá direito ao retorno?', a: <>Ofereço <strong>planos de acompanhamento individualizado</strong> com acesso direto a mim. No caso de consultas avulsas, a reavaliação é feita de forma remota (WhatsApp) após a realização dos exames propostos, em até 45 dias após a primeira consulta.</> },
  { q: 'Como funciona a consulta para Risco Cirúrgico?', a: <>Realizo uma triagem via <em>WhatsApp</em> para saber qual é o procedimento proposto. Com o resultado dos exames, agendamos uma consulta presencial. Realizo o eletrocardiograma e emito o laudo com as devidas <strong>orientações para uma cirurgia segura</strong>.</> },
  { q: 'Você atende pacientes de outras cidades?', a: <>Sim! Atendo <strong>presencialmente em Rio das Ostras, RJ</strong> e também realizo <strong>consultas online</strong> para pacientes de qualquer cidade. O acompanhamento remoto funciona muito bem para quem já tem exames recentes e busca orientação contínua.</> },
  { q: 'O acompanhamento pode ser online?', a: <>Sim. O <strong>Programa de Acompanhamento Cardiometabólico</strong> pode ser conduzido de forma remota ou híbrida, com consultas por videochamada, análise de exames e suporte via WhatsApp. A distância não impede um cuidado próximo e personalizado.</> },
  { q: 'Quem mais se beneficia do programa?', a: <>O programa é ideal para pessoas que querem <strong>construir saúde antes da doença aparecer</strong>, não apenas tratar sintomas. É especialmente indicado para quem tem histórico familiar de doenças cardiovasculares, está acima do peso, com pressão ou colesterol alterados, ou simplesmente quer envelhecer com autonomia e energia.</> },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" style={{ background: '#f0ede6', padding: '112px 0', overflow: 'hidden' }}>
      <div
        className="container"
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72, alignItems: 'start' }}
      >

        {/* ==================== FOTO ==================== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', top: 8 }}
        >
          <div style={{
            position: 'absolute', bottom: 20, left: -16,
            width: '85%', height: '80%',
            background: 'var(--teal)', opacity: 0.07,
            borderRadius: 28, zIndex: 0,
          }} />
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 56px rgba(53,92,101,0.16)', position: 'relative', zIndex: 1 }}>
            <img
              src={duvidsFoto}
              alt="Dra. Raiane Fonseca — Dúvidas"
              style={{ width: '100%', height: 540, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '36px 24px 20px',
              background: 'linear-gradient(to top, rgba(53,92,101,0.88) 0%, transparent 100%)',
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.9)' }}>
                "Tire suas dúvidas antes de marcar."
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==================== ACCORDION ==================== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 40 }}
          >Dúvidas<br />Frequentes</motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                style={{
                  background: 'white', borderRadius: 16, overflow: 'hidden',
                  boxShadow: open === i ? '0 4px 20px rgba(53,92,101,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: open === i ? '1px solid rgba(53,92,101,0.25)' : '1px solid transparent',
                  transition: 'box-shadow 0.25s, border-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: open === i ? '#355c65' : '#2c2c2c', transition: 'color 0.2s' }}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={19} color={open === i ? '#355c65' : '#8a8a8a'} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 22px 20px' }}>
                        <div style={{ height: 1, background: 'rgba(53,92,101,0.12)', marginBottom: 14 }} />
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#4f4f4f', lineHeight: 1.78 }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #faq .container { grid-template-columns: 1fr !important; gap: 40px !important; }
          #faq .container > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}
