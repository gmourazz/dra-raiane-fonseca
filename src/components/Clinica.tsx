import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const BASE = 'https://images.pexels.com/photos'
const Q    = '?auto=compress&cs=tinysrgb'

const gallery = [
  { label: 'Recepção',         src: `${BASE}/1170979/pexels-photo-1170979.jpeg${Q}&w=600` },
  { label: 'Sala de Consulta', src: `${BASE}/3786126/pexels-photo-3786126.jpeg${Q}&w=600` },
  { label: 'Equipamentos',     src: `${BASE}/263402/pexels-photo-263402.jpeg${Q}&w=600`   },
  { label: 'Área de Espera',   src: `${BASE}/247786/pexels-photo-247786.jpeg${Q}&w=600`   },
]

export default function Clinica() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="clinica" style={{ background: 'var(--cream-dark)', padding: '112px 0' }}>
      <div className="container" ref={ref}>

        {/* ==================== HEADER ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}
            >Estrutura</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--teal)', lineHeight: 1.1, marginBottom: 20 }}
            >Conheça o Consultório</motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'var(--gray)', lineHeight: 1.78, marginBottom: 28 }}
            >
              Um espaço pensado para acolher com calma e cuidar com profundidade.
              Equipamentos modernos e um ambiente que transmite segurança desde o primeiro momento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
            >
              <MapPin size={15} color="var(--burgundy)" style={{ marginTop: 2, flexShrink: 0 }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'var(--gray-light)', lineHeight: 1.65 }}>
                Rua Santa Catarina, 219 · Sala 104<br />
                Extensão do Bosque · <strong style={{ color: 'var(--teal)' }}>OSTRACOR</strong><br />
                Rio das Ostras, RJ
              </p>
            </motion.div>
          </div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 16, right: -12, width: '88%', height: '90%', background: 'var(--teal)', opacity: 0.06, borderRadius: 24, zIndex: 0 }} />
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 48px rgba(53,92,101,0.16)', position: 'relative', zIndex: 1 }}>
              <img
                src={`${BASE}/4386467/pexels-photo-4386467.jpeg${Q}&w=900`}
                alt="Consultório Dra. Raiane Fonseca"
                style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ==================== GALERIA ==================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
            >
              <img
                src={g.src}
                alt={g.label}
                style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #clinica .container > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #clinica .container > div:first-child > div:last-child { display: none !important; }
          #clinica .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          #clinica .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
