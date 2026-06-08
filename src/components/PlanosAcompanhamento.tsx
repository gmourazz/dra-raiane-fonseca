import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, ClipboardList, Target, LineChart, TrendingUp } from 'lucide-react'
import planosFoto from '../assets/raiane-planos-de-acompanhamento.jpeg'
import planosFotoDois from '../assets/raiane-planos-de-acompanhamento-dois.jpeg'

const fazemos = [
  'Acompanhamento contínuo da sua saúde',
  'Ajustes personalizados ao longo do tempo',
  'Estratégias práticas para sair do automático',
  'Mudanças possíveis, consistentes e sustentáveis',
  'Redução real do risco de infarto e AVC',
]
const paraQuem = [
  'Histórico familiar de doenças cardiovasculares',
  'Pressão alta, colesterol alto ou sobrepeso',
  'Cansaço frequente, estresse ou falta de energia',
  'Exames "quase alterados" ou já em piora',
  'Quem quer envelhecer com autonomia e clareza',
]

const etapas = [
  { num: 1, icon: ClipboardList, color: '#355c65', title: 'Diagnóstico Profundo', desc: 'Avaliamos sua história completa, exames e estilo de vida com profundidade real.' },
  { num: 2, icon: Target, color: '#621132', title: 'Plano Personalizado', desc: 'Um protocolo feito para você: sua rotina, seus objetivos, sua realidade.' },
  { num: 3, icon: LineChart, color: '#6a7f58', title: 'Monitoramento', desc: 'Acompanhamos sua evolução e ajustamos o plano ao longo de cada etapa.' },
  { num: 4, icon: TrendingUp, color: '#355c65', title: 'Transformação', desc: 'Resultados reais, consistentes e sustentáveis para a sua saúde.' },
]

export default function PlanosAcompanhamento() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="planos" className="tile-bg" style={{ padding: '112px 0' }}>
      <div className="container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6a7f58', marginBottom: 12 }}
        >Acompanhamento</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="section-title" style={{ marginTop: 0 }}
        >Programa de Acompanhamento<br />Cardiometabólico</motion.h2>

        {/* ==================== FLUXO 4 ETAPAS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ position: 'relative', marginBottom: 60 }}
        >
          {/* Linha de conexão decorativa */}
          <div style={{
            position: 'absolute',
            top: 28,
            left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, rgba(53,92,101,0.35), rgba(98,17,50,0.3), rgba(106,127,88,0.3), rgba(53,92,101,0.35))',
            zIndex: 0,
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {etapas.map((e, i) => {
              const Icon = e.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.1, duration: 0.6 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    textAlign: 'center', gap: 14,
                    position: 'relative', zIndex: 1, padding: '0 8px',
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: e.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 20px ${e.color}55`,
                    flexShrink: 0,
                  }}>
                    <Icon size={22} color="white" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: e.color, marginBottom: 6 }}>
                      Etapa {e.num}
                    </p>
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#2c2c2c', marginBottom: 8, lineHeight: 1.3 }}>
                      {e.title}
                    </h4>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11.5, color: '#6b6b6b', lineHeight: 1.65 }}>
                      {e.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

          {/* ==================== COLUNA ESQUERDA ==================== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Foto principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.65 }}
              style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px rgba(53,92,101,0.14)' }}
            >
              <img
                src={planosFoto}
                alt="Programa de acompanhamento"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            {/* O que é */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, padding: '32px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #355c65' }}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 26, color: '#355c65', marginBottom: 14 }}>O que é</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#4f4f4f', lineHeight: 1.8, marginBottom: 10 }}>
                Um <strong style={{ color: '#355c65' }}>acompanhamento contínuo e personalizado</strong> da sua saúde, focado em identificar riscos antes que se tornem doenças.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#4f4f4f', lineHeight: 1.8 }}>
                O objetivo é <strong style={{ color: '#621132' }}>construir saúde com consistência</strong>, ajustar rotas ao longo do caminho e evitar infarto e AVC antes que aconteçam.
              </p>
            </motion.div>

            {/* Para quem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, padding: '32px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #6a7f58' }}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 26, color: '#6a7f58', marginBottom: 18 }}>Para quem é</h3>
              <ul className="check-list">
                {paraQuem.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={15} color="#6a7f58" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ==================== COLUNA DIREITA ==================== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* O que fazemos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.65 }}
              style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', borderLeft: '4px solid #621132', flex: 1 }}
            >
              <img
                src={planosFotoDois}
                alt="Acompanhamento Dra. Raiane"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '28px 32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 26, color: '#621132', marginBottom: 18 }}>O que fazemos juntos</h3>
                <ul className="check-list">
                  {fazemos.map(item => (
                    <li key={item}>
                      <CheckCircle2 size={15} color="#621132" style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #planos .container > div:last-child { grid-template-columns: 1fr !important; }
          #planos .container > div:nth-child(3) > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #planos .container > div:nth-child(3) > div:first-child { display: none !important; }
        }
        @media (max-width: 480px) {
          #planos .container > div:nth-child(3) > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
