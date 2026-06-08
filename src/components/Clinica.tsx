import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react'
import featuredImg from '../assets/consultorio/consultorio-01.jpeg'
import c02 from '../assets/consultorio/consultorio-02.jpeg'
import c03 from '../assets/consultorio/consultorio-03.jpeg'
import c04 from '../assets/consultorio/consultorio-04.jpeg'
import c05 from '../assets/consultorio/consultorio-05.jpeg'
import c06 from '../assets/consultorio/consultorio-06.jpeg'
import c07 from '../assets/consultorio/consultorio-07.jpeg'
import c08 from '../assets/consultorio/consultorio-08.jpeg'

const gallery = [c02, c03, c04, c05, c06, c07, c08]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 280 : -280, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -280 : 280, opacity: 0 }),
}

export default function Clinica() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [slide, setSlide]       = useState(0)
  const [dir, setDir]           = useState(1)
  const [paused, setPaused]     = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const len = gallery.length

  // Auto-play carousel
  useEffect(() => {
    if (paused || lightbox !== null) return
    const t = setInterval(() => {
      setDir(1)
      setSlide(s => (s + 1) % len)
    }, 3500)
    return () => clearInterval(t)
  }, [paused, lightbox, len])

  // Fechar lightbox com Escape
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % len : null)
      if (e.key === 'ArrowLeft')  setLightbox(i => i !== null ? (i - 1 + len) % len : null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, len])

  const goTo = (next: number, direction: number) => {
    setDir(direction)
    setSlide((next + len) % len)
  }

  const openLightbox = (visibleIndex: number) => {
    const galleryIdx = (slide + visibleIndex) % len
    setLightbox(galleryIdx)
  }

  const visibleImages = [0, 1, 2].map(o => gallery[(slide + o) % len])

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

          {/* Foto destaque */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 16, right: -12, width: '88%', height: '90%', background: 'var(--teal)', opacity: 0.06, borderRadius: 24, zIndex: 0 }} />
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 48px rgba(53,92,101,0.16)', position: 'relative', zIndex: 1 }}>
              <img
                src={featuredImg}
                alt="Consultório Dra. Raiane Fonseca"
                style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ==================== GALERIA CAROUSEL ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div style={{ overflow: 'hidden', borderRadius: 16 }}>
              <AnimatePresence custom={dir} mode="wait">
                <motion.div
                  key={slide}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                  className="clinica-gallery-grid"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}
                >
                  {visibleImages.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => openLightbox(i)}
                      style={{
                        borderRadius: 14, overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        cursor: 'zoom-in', position: 'relative',
                      }}
                      className="clinica-thumb"
                    >
                      <img
                        src={src}
                        alt="Consultório"
                        style={{ width: '100%', height: 200, objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.35s' }}
                        className="clinica-thumb-img"
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Seta esquerda */}
            <button
              onClick={() => goTo(slide - 1, -1)}
              style={{
                position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: '50%',
                background: 'white', border: '1px solid rgba(53,92,101,0.2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)', transition: 'all 0.2s', zIndex: 2,
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal)'; b.style.borderColor = 'var(--teal)' }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'white'; b.style.borderColor = 'rgba(53,92,101,0.2)' }}
            >
              <ChevronLeft size={18} color="var(--teal)" />
            </button>

            {/* Seta direita */}
            <button
              onClick={() => goTo(slide + 1, 1)}
              style={{
                position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: '50%',
                background: 'white', border: '1px solid rgba(53,92,101,0.2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)', transition: 'all 0.2s', zIndex: 2,
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal)'; b.style.borderColor = 'var(--teal)' }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'white'; b.style.borderColor = 'rgba(53,92,101,0.2)' }}
            >
              <ChevronRight size={18} color="var(--teal)" />
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            {[...Array(len)].map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > slide ? 1 : -1)}
                style={{
                  width: i === slide ? 24 : 8, height: 8,
                  borderRadius: 4, border: 'none', cursor: 'pointer',
                  background: i === slide ? 'var(--teal)' : 'rgba(53,92,101,0.25)',
                  transition: 'all 0.3s', padding: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ==================== LIGHTBOX ==================== */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Imagem ampliada */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: 900, width: '100%' }}
            >
              <img
                src={gallery[lightbox]}
                alt="Consultório ampliado"
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 16, display: 'block' }}
              />

              {/* Contador */}
              <div style={{
                position: 'absolute', bottom: -36, left: '50%', transform: 'translateX(-50%)',
                fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
              }}>
                {lightbox + 1} / {len}
              </div>
            </motion.div>

            {/* Botão fechar */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'fixed', top: 20, right: 20,
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
              <X size={18} color="white" />
            </button>

            {/* Seta anterior */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i - 1 + len) % len : null) }}
              style={{
                position: 'fixed', left: 20, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
              <ChevronLeft size={22} color="white" />
            </button>

            {/* Seta próxima */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i + 1) % len : null) }}
              style={{
                position: 'fixed', right: 20, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
              <ChevronRight size={22} color="white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .clinica-thumb-img:hover { transform: scale(1.05); }
        @media (max-width: 900px) {
          #clinica .container > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #clinica .container > div:first-child > div:last-child { display: none !important; }
        }
        @media (max-width: 600px) {
          .clinica-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .clinica-gallery-grid > div:last-child { display: none !important; }
        }
        @media (max-width: 400px) {
          .clinica-gallery-grid { grid-template-columns: 1fr !important; }
          .clinica-gallery-grid > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </section>
  )
}
