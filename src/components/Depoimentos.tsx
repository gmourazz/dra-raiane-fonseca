import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'
import fotoComputador from '../assets/foto-com-computador-raiane.jpeg'

const GOOGLE = 'https://www.google.com/maps/place/Raiane+Fonseca+Silva+Herdy/@-22.5285777,-41.955744,15z/data=!4m16!1m9!3m8!1s0x97b3b68f3da677:0x876570a7a3f11af6!2sRaiane+Fonseca+Silva+Herdy!8m2!3d-22.5285777!4d-41.955744!9m1!1b1!16s%2Fg%2F11vyylkvp0'

const reviews = [
  { name: 'Erick Ribeiro', time: 'Ontem', initials: 'ER', color: '#355c65', text: 'Dra Raiane, uma super profissional atenciosa, pontual, dedicada na recuperação do seu cliente. Já sou atendido por ela há 1 ano e estou muito satisfeito.' },
  { name: 'Victor Ferrão', time: 'Há 7 semanas', initials: 'VF', color: '#621132', text: 'Há muito tempo que não me sentia tão bem atendido e acolhido em uma consulta médica. Uma profissional que ouve o seu paciente sem pressa e com muita empatia.' },
  { name: 'Rodrigo C. Da Silva Braga', time: 'Há 12 semanas', initials: 'RB', color: '#6a7f58', text: 'Minha consulta foi excepcional, a Dra é humana! Uma profissional de excelência. Sou muito grato pelo atendimento. Grande médica!! Grande ser humano!!!' },
  { name: 'Ana Cristina Segundo', time: 'Há 9 semanas', initials: 'AS', color: '#355c65', text: 'Ambiente harmonizado e acolhedor! Profissional com uma escuta de qualidade, atenciosa e bastante criteriosa. Confiante que vou ficar bem.' },
  { name: 'Iracilda Granja', time: 'Há 4 semanas', initials: 'IG', color: '#621132', text: 'Fiquei bastante confiante em todas as orientações, exames e procedimentos durante a consulta. Muito simpática. Obrigada, dra.Raiane!' },
  { name: 'Hellen Alves', time: 'Há 2 dias', initials: 'HA', color: '#6a7f58', text: 'Adorei fazer o exame de holter com Dra Raiane, equipamento moderno, prático e incômodo praticamente nenhum... RECOMENDO!!!' },
  { name: 'Camilla Tavares', time: 'Há 3 semanas', initials: 'CT', color: '#355c65', text: 'Dra Raiane é incrível! Fui super bem atendida, ela explica tudo com detalhes e paciência. A consulta durou quase 1 hora, a primeira vez que saí de uma consulta sentindo que fui ouvida de verdade.' },
  { name: 'Fernanda Lima', time: 'Há 5 semanas', initials: 'FL', color: '#621132', text: 'Profissional excepcional. Fiz ecocardiograma e ela explicou resultado com muito cuidado. Já indiquei para toda a família. Espaço aconchegante e atendimento humanizado.' },
  { name: 'Paulo Henrique Santos', time: 'Há 6 semanas', initials: 'PH', color: '#6a7f58', text: 'Realizei minha avaliação pré-operatória com a Dra Raiane. Muito competente e atenciosa. Me deixou completamente tranquilo para o procedimento. Recomendo de olhos fechados.' },
  { name: 'Marcia Oliveira', time: 'Há 2 meses', initials: 'MO', color: '#355c65', text: 'Excelente médica! Fez MAPA 24h e acompanha minha pressão com muito cuidado. A diferença que o tratamento fez na minha qualidade de vida é enorme. Muito grata!' },
  { name: 'José Carlos Mendes', time: 'Há 2 meses', initials: 'JM', color: '#621132', text: 'Médica dedicada e muito competente. Acompanhamento cardiovascular de qualidade, sempre disponível para tirar dúvidas. Melhor cardiologista que já tive.' },
  { name: 'Renata Borges', time: 'Há 3 meses', initials: 'RB', color: '#6a7f58', text: 'Atendimento impecável! A Dra Raiane é extremamente competente e humana. Saí da consulta com um plano de saúde personalizado e minha ansiedade sobre o coração foi completamente zerada.' },
]

const PERPAGE = 3
const TOTAL_PAGES = Math.ceil(reviews.length / PERPAGE)

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 320 : -320, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -320 : 320, opacity: 0 }),
}

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Depoimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setDir(1)
      setPage(p => (p + 1) % TOTAL_PAGES)
    }, 5000)
    return () => clearInterval(t)
  }, [paused])

  const goTo = (next: number) => {
    const clamped = (next + TOTAL_PAGES) % TOTAL_PAGES
    setDir(clamped > page ? 1 : -1)
    setPage(clamped)
  }

  const visibleReviews = reviews.slice(page * PERPAGE, page * PERPAGE + PERPAGE)

  return (
    <section
      id="depoimentos"
      ref={ref}
      style={{ background: '#1d3c46', padding: '112px 0', overflow: 'hidden' }}
    >
      <div className="container">
        {/* ==================== HEADER COM FOTO ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.45)' }}>
              <img
                src={fotoComputador}
                alt="Dra. Raiane Fonseca"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Avaliações reais</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: 'white', lineHeight: 1.1, marginBottom: 14 }}>
              O que dizem os pacientes
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 20, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
              Como foi a experiência do nosso encontro para você?
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f4a100" color="#f4a100" />)}
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 18, color: 'white', marginLeft: 6 }}>5.0</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>· 137 avaliações no Google</span>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          style={{ position: 'relative', marginTop: 52 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{ overflow: 'hidden' }}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={page}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                  {visibleReviews.map((r, i) => (
                    <div key={r.name + i} style={{
                      background: 'white', borderRadius: 20, padding: '28px 24px',
                      display: 'flex', flexDirection: 'column', gap: 16,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{
                            width: 44, height: 44, borderRadius: '50%',
                            background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: 'white' }}>{r.initials}</span>
                          </div>
                          <div>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#2c2c2c', lineHeight: 1.2 }}>{r.name}</p>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#8a8a8a', marginTop: 2 }}>{r.time}</p>
                          </div>
                        </div>
                        <GoogleG />
                      </div>

                      <div style={{ display: 'flex', gap: 3 }}>
                        {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#f4a100" color="#f4a100" />)}
                      </div>

                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#4f4f4f', lineHeight: 1.75, flex: 1 }}>
                        "{r.text}"
                      </p>

                      <a href={GOOGLE} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: '#4285F4', textDecoration: 'none', letterSpacing: '0.04em' }}
                        onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        <ExternalLink size={11} />
                        Ver no Google
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => goTo(page - 1)}
            style={{
              position: 'absolute', left: -56, top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)')}
          >
            <ChevronLeft size={20} color="white" />
          </button>
          <button
            onClick={() => goTo(page + 1)}
            style={{
              position: 'absolute', right: -56, top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)')}
          >
            <ChevronRight size={20} color="white" />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {[...Array(TOTAL_PAGES)].map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === page ? 28 : 8, height: 8,
                borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === page ? 'white' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Google CTA */}
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href={GOOGLE} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.1)', color: 'white',
              border: '1px solid rgba(255,255,255,0.25)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <GoogleG />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #depoimentos .container > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #depoimentos .container > div:first-child > div:first-child { display: none !important; }
        }
        @media (max-width: 960px) {
          #depoimentos .container > div:nth-child(2) > div > div > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #depoimentos .container > div:nth-child(2) > button { display: none !important; }
        }
      `}</style>
    </section>
  )
}
