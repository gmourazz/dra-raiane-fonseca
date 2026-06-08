# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at http://localhost:5173
npm run build     # tsc -b && vite build
npm run lint      # eslint
npm run preview   # preview the production build
```

No test suite exists in this project.

## Architecture

Single-page landing site for Dra. Raiane Fonseca (cardiologist). No routing, no state management, no API calls.

**`src/App.tsx`** is the entire page — it renders all sections sequentially in fixed order:
`Navbar → Hero → SobreMim → MissaoVisaoValores → FormacaoAcademica → PorQueEscolher → JornadaCuidado → PlanosAcompanhamento → ExamesComplementares → Depoimentos → FAQ → Contato → Footer → FloatingWhatsApp → BackToTop`

Each section maps to one `src/components/*.tsx` file. Sections are linked by anchor `id` attributes (`#hero`, `#sobre`, `#jornada`, `#exames`, `#planos`, `#contato`, `#depoimentos`). The Navbar uses `IntersectionObserver` to highlight the active section.

## Styling

**No Tailwind.** Styling is done via:
- CSS custom properties defined in `src/index.css` (`:root`)
- Global utility classes in `src/index.css` (`.container`, `.section-title`, `.tile-bg`, `.btn-whatsapp`, `.btn-teal`, `.btn-outline-teal`, `.check-list`)
- Inline `style` props on every element — this is the dominant pattern across all components
- Per-component responsive overrides via `<style>` tags inside the JSX, targeting section `id` selectors

### Color palette (`src/index.css`)
```
--burgundy:   #621132   (CTAs, strong highlights, footer)
--teal:       #355c65   (primary headings, nav active, main accents)
--olive:      #6a7f58   (subtitles, secondary labels)
--cream:      #faf9f6   (page background)
--cream-dark: #f0ede6   (alternate section background)
--gray:       #4f4f4f   (body text)
--gray-light: #8a8a8a   (captions, metadata)
```

### Typography
- **Cormorant Garamond** (serif) — `h1`, `h2`, `h3`, display numbers, italic quotes
- **Montserrat** (sans-serif) — all body text, labels, buttons, captions

## Animations

All scroll-triggered animations use `framer-motion`'s `useInView` with `{ once: true, margin: '-80px' }`. The standard pattern:

```tsx
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-80px' })

// attach ref to the section container, then:
<motion.div initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} />
```

Staggered children use a `custom` index with a `variants` object (see `fadeUp` in `SobreMim.tsx`). Floating badges use `animate={{ y: [-5, 5, -5] }}` with `repeat: Infinity`.

## WhatsApp Link

The same WA link appears as a constant in almost every component. When the phone number or message changes, update it in each file:
```
https://wa.me/5522998491818?text=...
```

## Images

Static images live in `public/img/`. Referenced as `/img/filename.jpeg` in `src` attributes. Current images: `home.jpeg` (Hero), `secao2.jpeg` (SobreMim). Future athlete photo should be added as `/img/atleta.jpeg` and swapped into `SobreMim.tsx:71`.

## Key Content Details

- **CRM**: 52.110051-3 · **RQE Cardiologia**: 39.703 · **RQE Ecocardiografia**: 51.268
- **Address**: Rua Santa Catarina, 219 · Sala 104 · Rio das Ostras, RJ
- **Instagram**: @raianefonseca_
- Reviews in `Depoimentos.tsx` are hardcoded (12 total, paginated 3 per page, auto-advancing every 5s, pauses on hover)
