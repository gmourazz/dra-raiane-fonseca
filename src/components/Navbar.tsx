import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import logoHorizontal from '../assets/logo-horizontal.jpeg'

const WA = 'https://wa.me/5522998491818?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20da%20dra.%20Raiane.%20%F0%9F%AB%80'

const links = [
  { label: 'Início',     href: '#hero',      id: 'hero'      },
  { label: 'Sobre',      href: '#sobre',     id: 'sobre'     },
  { label: 'Serviços',   href: '#jornada',   id: 'jornada'   },
  { label: 'Check-ups',  href: '#checkups',  id: 'checkups'  },
  { label: 'Clínica',    href: '#clinica',   id: 'clinica'   },
  { label: 'Planos',     href: '#planos',    id: 'planos'    },
  { label: 'Contato',    href: '#contato',   id: 'contato'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(250,249,246,0.97)' : 'rgba(250,249,246,0.78)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={logoHorizontal}
              alt="Dra. Raiane Fonseca"
              style={{ height: 46, objectFit: 'contain', maxWidth: 230 }}
            />
          </a>

          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
            {links.map(l => {
              const isActive = active === l.id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: isActive ? 700 : 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: isActive ? 'var(--teal)' : 'var(--gray)',
                    padding: '6px 12px',
                    borderRadius: 6,
                    position: 'relative',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--teal)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--gray)' }}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute', bottom: -2, left: 12, right: 12,
                        height: 2, borderRadius: 2,
                        background: 'var(--teal)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              )
            })}
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#25d366', color: 'white',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '9px 20px', borderRadius: '50px',
                transition: 'all 0.2s', marginLeft: 8, textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1da851'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <WhatsAppIcon size={14} />
              Agendar
            </a>
          </nav>

          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', display: 'none' }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', background: 'rgba(250,249,246,0.98)', borderTop: '1px solid rgba(53,92,101,0.1)' }}
            >
              <div style={{ padding: '20px 40px 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {links.map(l => (
                  <a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: active === l.id ? 700 : 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: active === l.id ? 'var(--teal)' : 'var(--gray)',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(53,92,101,0.07)',
                      textDecoration: 'none',
                    }}
                  >{l.label}</a>
                ))}
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ justifyContent: 'center', marginTop: 12 }}>
                  <WhatsAppIcon size={16} />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; align-items: center; }
        }
      `}</style>
    </>
  )
}
