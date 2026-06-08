import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Dra. Raiane atende plano de saúde?', a: <>Todos os meus atendimentos são <strong>particulares</strong>, pois acredito que uma abordagem integral, cuidadosa e sem pressa é fundamental para criar uma linha de cuidado, o que não é compatível com consultas rápidas de convênio.</> },
  { q: 'Quanto tempo dura a consulta?', a: <>Dedico cerca de <strong>1 hora</strong> para cada consulta, proporcionando um espaço seguro e acolhedor para um <strong>atendimento sem pressa</strong> e em estado de presença.</> },
  { q: 'A consulta dá direito ao retorno?', a: <>Ofereço <strong>planos de acompanhamento individualizado</strong> com acesso direto a mim. No caso de consultas avulsas, a reavaliação é feita de forma remota (WhatsApp) após a realização dos exames propostos, em até 45 dias após a primeira consulta.</> },
  { q: 'Como funciona a consulta para Risco Cirúrgico?', a: <>Realizo uma triagem via <em>WhatsApp</em> para saber qual é o procedimento proposto. Com o resultado dos exames, agendamos uma consulta presencial. Realizo o eletrocardiograma e emito o laudo com as devidas <strong>orientações para uma cirurgia segura</strong>.</> },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" style={{ background: '#f0ede6', padding: '112px 0' }}>
      <div className="container" ref={ref} style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title"
        >Dúvidas Frequentes</motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              style={{
                background: 'white',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: open === i ? '0 4px 20px rgba(53,92,101,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                border: open === i ? '1px solid rgba(53,92,101,0.25)' : '1px solid transparent',
                transition: 'box-shadow 0.25s, border-color 0.25s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
                }}
              >
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, fontSize: 15,
                  color: open === i ? '#355c65' : '#2c2c2c',
                  transition: 'color 0.2s',
                }}>{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} color={open === i ? '#355c65' : '#8a8a8a'} />
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
                    <div style={{ padding: '0 24px 24px' }}>
                      <div style={{ height: 1, background: 'rgba(53,92,101,0.12)', marginBottom: 16 }} />
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#4f4f4f', lineHeight: 1.78 }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
