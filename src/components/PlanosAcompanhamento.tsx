import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardList, Target, LineChart, TrendingUp, Heart, Layers } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import planosFoto from '../assets/raiane-planos-de-acompanhamento.jpeg'
import planosFotoDois from '../assets/raiane-planos-de-acompanhamento-dois.jpeg'


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
          className="planos-steps"
          style={{ position: 'relative', marginBottom: 60 }}
        >
          {/* Linha de conexão decorativa */}
          <div className="planos-connector" style={{
            position: 'absolute',
            top: 28,
            left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, rgba(53,92,101,0.35), rgba(98,17,50,0.3), rgba(106,127,88,0.3), rgba(53,92,101,0.35))',
            zIndex: 0,
          }} />

          <div className="planos-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
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

        {/* ==================== SPLIT: esquerda texto+cards / direita fotos ==================== */}
        <div className="planos-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'flex-start' }}>

          {/* ---- COLUNA ESQUERDA ---- */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.75 }}
          >
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              color: 'var(--teal)',
              marginBottom: 20,
              letterSpacing: '-0.01em',
            }}>
              Sua jornada para uma<br />vida com mais saúde
            </h3>

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 16 }}>
              A saúde não é construída em uma consulta, mas nas escolhas feitas todos os dias.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 16 }}>
              Por isso, criei um acompanhamento contínuo para ajudar você a desenvolver hábitos consistentes, reduzir riscos e construir uma vida com mais energia, autonomia e qualidade de vida.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 17, color: 'var(--burgundy)', lineHeight: 1.5, marginBottom: 28 }}>
              Porque sucesso é ter saúde.
            </p>

            {/* 2×2 feature cards */}
            <div style={{
              background: 'rgba(53,92,101,0.05)',
              borderRadius: 20,
              padding: '28px 24px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px 28px',
            }}>
              {[
                { icon: Heart, color: 'var(--burgundy)', title: 'Jornada Contínua', desc: 'Acompanhamento próximo para transformar orientação em resultado.' },
                { icon: WhatsAppIcon, color: '#25d366', title: 'Suporte Direto', desc: 'Canal de comunicação para dúvidas, ajustes e direcionamento.' },
                { icon: Target, color: 'var(--teal)', title: 'Metas Personalizadas', desc: 'Objetivos adaptados à sua realidade e ao seu momento de vida.' },
                { icon: Layers, color: 'var(--olive)', title: 'Visão Integrada', desc: 'Sono, alimentação, movimento, gestão do estresse e saúde cardiovascular em um único lugar.' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Icon size={18} color={item.color} />
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12.5, color: item.color, lineHeight: 1.2 }}>{item.title}</p>
                    </div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'var(--gray)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* ---- COLUNA DIREITA: colagem com sobreposição ---- */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.35, duration: 0.75 }}
            className="planos-fotos"
            style={{ position: 'relative', height: 620 }}
          >
            {/* Foto 1 — topo esquerda (landscape) */}
            <div className="planos-foto-1" style={{ position: 'absolute', top: 0, left: 0, width: '64%', zIndex: 1,
              borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 36px rgba(53,92,101,0.2)' }}>
              <img src={planosFoto} alt="Dra. Raiane no consultório"
                style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
            </div>

            {/* Foto 2 — baixo direita (portrait), sobrepõe a 1 */}
            <div className="planos-foto-2" style={{ position: 'absolute', bottom: 0, right: 0, width: '62%', zIndex: 2,
              borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 36px rgba(53,92,101,0.22)' }}>
              <img src={planosFotoDois} alt="Dra. Raiane sorrindo"
                style={{ width: '100%', height: 420, objectFit: 'cover', objectPosition: 'center 43%', display: 'block' }} />
            </div>

            {/* Chart Peso — flutua topo direita */}
            <motion.div
              className="planos-chart"
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 16px 48px rgba(53,92,101,0.22)', transition: { duration: 0.2 } }}
              style={{
                position: 'absolute', top: 16, right: -18, zIndex: 4,
                background: 'white', borderRadius: 16, padding: '14px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                width: 220, cursor: 'default',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, color: '#2c2c2c', marginBottom: 2 }}>Peso</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: '#aaa' }}>kg · 6 meses</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.9, duration: 0.4, ease: 'backOut' }}
                  style={{ background: 'rgba(53,92,101,0.09)', borderRadius: 10, padding: '4px 10px', textAlign: 'center' }}
                >
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 14, color: '#355c65', lineHeight: 1.1 }}>−3.2 kg</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, color: '#888' }}>resultado</p>
                </motion.div>
              </div>
              <svg width="188" height="76" viewBox="0 0 188 76" style={{ overflow: 'visible' }}>
                {[0,19,38,57,76].map(y => (
                  <line key={y} x1="0" y1={y} x2="188" y2={y} stroke="#f2f2f2" strokeWidth="1"/>
                ))}
                <text x="0" y="12" fontFamily="Montserrat" fontSize="8" fill="#ccc">99.5</text>
                <text x="0" y="31" fontFamily="Montserrat" fontSize="8" fill="#ccc">98.5</text>
                <text x="0" y="50" fontFamily="Montserrat" fontSize="8" fill="#ccc">97.5</text>
                <text x="0" y="69" fontFamily="Montserrat" fontSize="8" fill="#ccc">96.5</text>
                <motion.path
                  d="M20,18 L38,25 L56,21 L74,34 L92,29 L110,41 L128,36 L146,50 L166,45 L180,56 L180,76 L20,76 Z"
                  fill="rgba(53,92,101,0.08)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                <motion.polyline
                  points="20,18 38,25 56,21 74,34 92,29 110,41 128,36 146,50 166,45 180,56"
                  fill="none" stroke="#355c65" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1.8, ease: 'easeInOut' }}
                />
                {[[20,18],[38,25],[56,21],[74,34],[92,29],[110,41],[128,36],[146,50],[166,45],[180,56]].map(([cx,cy],i) => (
                  <motion.circle key={i} cx={cx} cy={cy} r="3.5" fill="#355c65"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.14, duration: 0.25 }}
                  />
                ))}
                <motion.circle cx={180} cy={56} r="7" fill="none" stroke="#355c65" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: [0, 0.4, 0] } : {}}
                  transition={{ delay: 2.2, duration: 1.6, repeat: Infinity }}
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                {['Nov','Dez','Jan','Fev','Mar','Abr'].map(m => (
                  <span key={m} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, color: '#bbb' }}>{m}</span>
                ))}
              </div>
            </motion.div>

            {/* Chart Glicemia — flutua baixo esquerda */}
            <motion.div
              className="planos-chart"
              animate={{ y: [3, -3, 3] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 16px 48px rgba(106,127,88,0.22)', transition: { duration: 0.2 } }}
              style={{
                position: 'absolute', bottom: 100, left: -18, zIndex: 4,
                background: 'white', borderRadius: 16, padding: '14px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                width: 210, cursor: 'default',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, color: '#2c2c2c', marginBottom: 2 }}>Glicemia</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: '#aaa' }}>mg/dL · 5 meses</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2.1, duration: 0.4, ease: 'backOut' }}
                  style={{ background: 'rgba(106,127,88,0.1)', borderRadius: 10, padding: '4px 10px', textAlign: 'center' }}
                >
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 14, color: '#6a7f58', lineHeight: 1.1 }}>−16 mg/dL</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, color: '#888' }}>resultado</p>
                </motion.div>
              </div>
              <svg width="178" height="76" viewBox="0 0 178 76" style={{ overflow: 'visible' }}>
                {[0,19,38,57,76].map(y => (
                  <line key={y} x1="0" y1={y} x2="178" y2={y} stroke="#f2f2f2" strokeWidth="1"/>
                ))}
                <text x="0" y="12" fontFamily="Montserrat" fontSize="8" fill="#ccc">96</text>
                <text x="0" y="31" fontFamily="Montserrat" fontSize="8" fill="#ccc">92</text>
                <text x="0" y="50" fontFamily="Montserrat" fontSize="8" fill="#ccc">88</text>
                <text x="0" y="69" fontFamily="Montserrat" fontSize="8" fill="#ccc">80</text>
                <motion.path
                  d="M14,10 C38,13 62,18 88,30 C114,43 138,56 162,68 L162,76 L14,76 Z"
                  fill="rgba(106,127,88,0.09)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                <motion.path
                  d="M14,10 C38,13 62,18 88,30 C114,43 138,56 162,68"
                  fill="none" stroke="#6a7f58" strokeWidth="2.4" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1.8, ease: 'easeInOut' }}
                />
                {[[14,10],[50,14],[88,30],[125,48],[162,68]].map(([cx,cy],i) => (
                  <motion.circle key={i} cx={cx} cy={cy} r="3.5" fill="#6a7f58"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.22, duration: 0.3 }}
                  />
                ))}
                <motion.circle cx={162} cy={68} r="7" fill="none" stroke="#6a7f58" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: [0, 0.4, 0] } : {}}
                  transition={{ delay: 2.4, duration: 1.6, repeat: Infinity }}
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                {['Jan','Fev','Mar','Abr','Mai'].map(m => (
                  <span key={m} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, color: '#bbb' }}>{m}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #planos .planos-connector { display: none !important; }
          #planos .planos-steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          #planos .planos-split { grid-template-columns: 1fr !important; gap: 40px !important; }
          #planos .planos-fotos {
            height: auto !important;
            display: flex !important;
            flex-direction: row !important;
            gap: 10px !important;
          }
          #planos .planos-foto-1,
          #planos .planos-foto-2 {
            position: relative !important;
            width: 50% !important;
            top: auto !important; bottom: auto !important;
            left: auto !important; right: auto !important;
          }
          #planos .planos-foto-1 img { height: 260px !important; }
          #planos .planos-foto-2 img { height: 260px !important; object-position: center 43% !important; }
          #planos .planos-chart { display: none !important; }
        }
        @media (max-width: 560px) {
          #planos .planos-steps-grid { grid-template-columns: 1fr !important; }
          #planos .planos-steps { margin-bottom: 36px !important; }
        }
      `}</style>
    </section>
  )
}
