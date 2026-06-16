import { motion } from 'framer-motion'
import { ChevronDown, Heart, Award, Clock, Activity } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import heroFoto from '../assets/home-inicial.jpeg'
import heroSecundaria from '../assets/home-secundaria.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const stats = [
  { icon: Award, value: '5.0★', label: 'Avaliação Google' },
  { icon: Heart, value: '137+', label: 'Pacientes avaliaram' },
  { icon: Clock, value: '1h', label: 'Por consulta' },
]

const pills = ['Cardiologia', 'Ecocardiografia', 'Medicina do Estilo de Vida']

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '55%', height: '120%',
        background: 'linear-gradient(145deg, rgba(53,92,101,0.06) 0%, rgba(106,127,88,0.04) 100%)',
        borderRadius: '40% 0 0 40%',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '8%', left: '2%',
        width: 320, height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(98,17,50,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div className="container hero-container" style={{
        position: 'relative', zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 80,
        width: '100%',
      }}>

        {/* ==================== TEXTO ==================== */}
        <div style={{ minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--olive)', marginBottom: 20,
            }}
          >
            CRM 52.110051-3
          </motion.p>

          {/* Headline principal — nome em destaque */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="hero-name-wrap"
          >
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(3.4rem, 7vw, 6.2rem)',
              color: 'var(--teal)',
              lineHeight: 1.0,
              marginBottom: 6,
            }}>Raiane</h1>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 'clamp(3.4rem, 7vw, 6.2rem)',
              color: 'var(--burgundy)',
              lineHeight: 1.0,
            }}>Fonseca.</h1>
          </motion.div>

          {/* Especialidades como pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="hero-pills"
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '24px 0 28px' }}
          >
            {pills.map(pill => (
              <span key={pill} style={{
                background: 'rgba(53,92,101,0.08)',
                border: '1px solid rgba(53,92,101,0.18)',
                borderRadius: 50,
                padding: '5px 14px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--teal)',
              }}>{pill}</span>
            ))}
          </motion.div>

          {/* Credencial local */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.5 }}
            className="hero-credencial"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13, fontWeight: 500,
              color: 'var(--gray)',
              marginBottom: 18,
            }}
          >
            Referência em atendimento Cardiológico de qualidade em{' '}
            <strong style={{ color: 'var(--teal)' }}>Rio das Ostras, RJ</strong> · e Online
          </motion.p>

          {/* Subtítulo centrado no paciente */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="hero-subtitle"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15, fontWeight: 500, color: 'var(--gray)',
              lineHeight: 1.8, maxWidth: 440, marginBottom: 36,
            }}
          >
            Ajudo pessoas a recuperarem energia e construírem uma vida mais saudável.
          </motion.p>


          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.6 }}
            className="hero-ctas"
          style={{ display: 'flex', gap: 12, flexWrap: 'nowrap' }}
          >
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={17} />
              Agendar Consulta
            </a>
            <a href="#planos" className="btn-outline-teal">Conhecer o Programa</a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="hero-stats"
            style={{
              display: 'flex', gap: 0, marginTop: 48,
              borderTop: '1px solid rgba(53,92,101,0.15)',
              paddingTop: 28,
            }}
          >
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.label} style={{
                  flex: 1, textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(53,92,101,0.12)' : 'none',
                  padding: '0 16px',
                }}>
                  <Icon size={18} color="var(--teal)" style={{ margin: '0 auto 6px' }} />
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800, fontSize: 20,
                    color: 'var(--burgundy)', lineHeight: 1, marginBottom: 4,
                  }}>{s.value}</p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10, color: 'var(--gray-light)', letterSpacing: '0.07em',
                  }}>{s.label}</p>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* ==================== FOTO ==================== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="hero-photo-col"
          style={{ position: 'relative', minWidth: 0 }}
        >
          <div style={{
            position: 'absolute', top: 24, right: -16,
            width: '90%', height: '92%',
            background: 'var(--teal)', borderRadius: 32, opacity: 0.08, zIndex: 0,
          }} />
          <div style={{
            position: 'absolute', bottom: -16, left: -16,
            width: '60%', height: '50%',
            background: 'var(--burgundy)', borderRadius: 24, opacity: 0.06, zIndex: 0,
          }} />

          <div className="hero-photo-wrap" style={{
            position: 'relative', zIndex: 1,
            borderRadius: 28, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(53,92,101,0.18)',
          }}>
            <img
              src={heroFoto}
              alt="Dra. Raiane Fonseca"
              className="hero-main-img"
              style={{ width: '100%', height: 540, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '32px 28px 24px',
              background: 'linear-gradient(to top, rgba(53,92,101,0.9) 0%, transparent 100%)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic', fontSize: 20,
                color: 'rgba(255,255,255,0.92)',
              }}>
                "Não espere adoecer para cuidar da sua saúde."
              </p>
            </div>
          </div>

          {/* Mini foto secundária flutuante */}
          <motion.div
            className="hero-badge"
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 32, right: -28, zIndex: 2,
              width: 88, height: 88,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid white',
              boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
            }}
          >
            <img src={heroSecundaria} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </motion.div>

          {/* Badge: avaliação */}
          <motion.div
            className="hero-badge"
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: -16, left: -20, zIndex: 2,
              background: 'white', borderRadius: 16, padding: '12px 18px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.1)',
              display: 'flex', gap: 8, alignItems: 'center',
              border: '1px solid rgba(53,92,101,0.12)',
            }}
          >
            <Award size={18} color="var(--teal)" />
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13, color: 'var(--burgundy)' }}>5.0 Google</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'var(--gray-light)', letterSpacing: '0.06em' }}>AVALIAÇÃO</p>
            </div>
          </motion.div>

          {/* Badge: meia maratonista */}
          <motion.div
            className="hero-badge"
            animate={{ y: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: -14, right: -14, zIndex: 2,
              background: 'var(--burgundy)', borderRadius: 14, padding: '10px 16px',
              boxShadow: '0 6px 20px rgba(98,17,50,0.35)',
              display: 'flex', gap: 8, alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Activity size={14} color="white" />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, color: 'white' }}>Meia Maratonista</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(79,79,79,0.45)' }}>
          Scroll
        </p>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} color="rgba(79,79,79,0.4)" />
        </motion.div>
      </motion.div>

      <style>{`
        #hero { padding: 0 !important; }
        #hero .hero-container { grid-template-columns: 1fr 1fr; gap: 64px; padding-top: 100px; padding-bottom: 80px; }
        #hero .hero-ctas a { padding: 13px 22px !important; font-size: 11px !important; white-space: nowrap; }
        @media (max-width: 900px) {
          #hero { padding: 0 !important; }
          #hero .hero-container {
            display: flex !important;
            flex-direction: row !important;
            gap: 16px !important;
            padding-top: 90px !important;
            padding-bottom: 48px !important;
            align-items: center !important;
          }
          #hero .hero-container > div:first-child { flex: 1 !important; min-width: 0 !important; }
          #hero .hero-photo-col {
            flex: 1 !important;
            min-width: 0 !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-photo-wrap { display: block !important; }
          .hero-main-img { width: 100% !important; height: 380px !important; object-position: top center !important; }
          #hero .hero-badge { display: none !important; }
          #hero .hero-photo-col > div:nth-child(1),
          #hero .hero-photo-col > div:nth-child(2) { display: none !important; }
          #hero h1 { font-size: clamp(1.6rem, 5vw, 3.2rem) !important; line-height: 1.05 !important; }
          #hero .hero-name-wrap { display: flex !important; align-items: baseline; gap: 4px; flex-wrap: wrap; }
          #hero .hero-pills { margin: 8px 0 10px !important; gap: 4px !important; flex-wrap: wrap !important; }
          #hero .hero-pills span { font-size: 7px !important; padding: 3px 6px !important; }
          #hero .hero-credencial { font-size: 10px !important; margin-bottom: 8px !important; }
          #hero .hero-subtitle { font-size: 11px !important; margin-bottom: 12px !important; }
          #hero .hero-ctas { flex-wrap: wrap !important; gap: 6px !important; }
          #hero .hero-ctas a { font-size: 9px !important; padding: 8px 10px !important; }
          #hero .hero-stats { margin-top: 16px !important; padding-top: 14px !important; }
          #hero .hero-stats > div { padding: 0 6px !important; }
          #hero .hero-stats p:first-of-type { font-size: 14px !important; }
          #hero .hero-stats p:last-of-type { font-size: 7px !important; }
        }
        @media (max-width: 480px) {
          .hero-main-img { height: 300px !important; }
          #hero h1 { font-size: clamp(1.3rem, 6vw, 2rem) !important; }
        }
      `}</style>
    </section>
  )
}
