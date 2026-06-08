import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import corridaFoto from '../assets/corrida-raiane-1.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

export default function Fechamento() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      id="fechamento"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '72vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Foto de fundo — suba como /img/corrida.jpeg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${corridaFoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundAttachment: 'fixed',
      }} />

      {/* Overlay degradê */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(14,30,37,0.92) 0%, rgba(98,17,50,0.82) 100%)',
      }} />

      {/* Conteúdo */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        maxWidth: 760,
        padding: '100px 40px',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: 24,
          }}
        >
          Comece agora
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.75 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            color: 'white', lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Seu coração estará com você pelo resto da vida.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            height: 2, width: 56,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))',
            margin: '0 auto 28px',
            transformOrigin: 'left',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6, marginBottom: 48,
          }}
        >
          A pergunta é: você está cuidando dele hoje?
        </motion.p>

        <motion.a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="btn-whatsapp"
          style={{ fontSize: 13, padding: '18px 44px' }}
        >
          <MessageCircle size={18} />
          Agendar minha avaliação
        </motion.a>
      </div>
    </section>
  )
}
