<div align="center">

# Gojo Portfolio . Sanvi (Gojo)

**A genz-coded, cyberpunk-flavoured developer portfolio with a working arcade.**
Built with Next.js 15, Tailwind, Framer Motion, and a generous amount of Diet Coke.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-a3e635?style=for-the-badge)](LICENSE)

[**Live Demo**](https://gojo.codes) · [**Fork & Customize**](#-make-it-yours) · [**Report Bug**](https://github.com/Sanvideep/Gojo-Portfolio/issues)

</div>

---

## Why fork this

Most dev portfolios are a hero, a project grid, and a contact form. This one is **a whole vibe**:

- **3D parallax floating scene** that tracks your cursor across the hero
- **Live cyberpunk HUD** with real-time clock + animated REC pill
- **Aurora gradient + glitch effect** on the headline
- **CRT scanlines + vignette** + custom blob-tracking cursor
- **Three working games** (Sudoku 4x4, Diet Coke Run canvas arcade, Konami Decode) at `/games`
- **Animated typed terminal** simulating a daily routine log
- **Sticky marquee** with custom keyword scroll
- **Glassmorphism cards** with hover-glow gradients everywhere
- **Sport / anime / books / music** modules so portfolios stop being lifeless
- **Pixel-perfect responsive** and prerendered static. 56 kB page bundle.

It is the portfolio you would actually want to recruiters to see.

---

## Tech stack

| Layer | Tools |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) + custom CSS |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) + CSS keyframes |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Bricolage Grotesque, Space Grotesk, JetBrains Mono (via `next/font`) |
| Deploy | [Vercel](https://vercel.com/) |

---

## Quick start

```bash
# 1. Clone
git clone https://github.com/Sanvideep/Gojo-Portfolio.git
cd Gojo-Portfolio

# 2. Install
npm install

# 3. Run dev server
npm run dev

# 4. Open
open http://localhost:3000
```

> **Tip:** if your shell exports `NODE_ENV=production`, prefix install with
> `NODE_ENV=development npm install` so devDependencies actually install.

### Build for production

```bash
npm run build && npm start
```

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # root, fonts, metadata
│  ├─ page.tsx              # main page assembly
│  ├─ globals.css           # tailwind + CRT + glitch + grid bg
│  └─ games/
│     └─ page.tsx           # /games arcade page
└─ components/
   ├─ Nav.tsx               # sticky blur-on-scroll nav
   ├─ Hero.tsx              # aurora headline + portrait + identity JSON
   ├─ FloatingScene.tsx     # 3D parallax floating items
   ├─ Marquee.tsx           # endless ticker
   ├─ About.tsx             # origin story + stats
   ├─ Raechal.tsx           # featured project / current build
   ├─ Experience.tsx        # vertical timeline
   ├─ Stack.tsx             # 8 tech-stack groups
   ├─ Projects.tsx          # 8 project cards
   ├─ Terminal.tsx          # animated CRT terminal log
   ├─ Anime.tsx             # stan list / books / music
   ├─ Sports.tsx            # cricket + F1 image cards
   ├─ Contact.tsx           # social + email
   ├─ Footer.tsx            # © line
   ├─ CursorDot.tsx         # custom cursor
   └─ games/
      ├─ Sudoku.tsx         # 4x4 sudoku (no deps)
      ├─ CokeRun.tsx        # canvas arcade
      └─ Konami.tsx         # konami code unlock
```

---

## Make it yours

Fork the repo, then edit these data blocks. No framework gymnastics, just plain TypeScript arrays.

### 1. Identity + headline
[`src/components/Hero.tsx`](src/components/Hero.tsx). name, alias, role chips, JSON identity card

### 2. Bio + stats
[`src/components/About.tsx`](src/components/About.tsx). three paragraphs + 8 stat cells

### 3. Tech stack groups
[`src/components/Stack.tsx`](src/components/Stack.tsx). `groups` array. Add or remove categories.

### 4. Projects
[`src/components/Projects.tsx`](src/components/Projects.tsx). `projects` array with `title`, `tag`, `href`, `desc`, `stack`, `accent` gradient.

### 5. Experience timeline
[`src/components/Experience.tsx`](src/components/Experience.tsx). `jobs` array with bullets and tone color.

### 6. Floating scene
[`src/components/FloatingScene.tsx`](src/components/FloatingScene.tsx). `items` array. Mix emojis or `/your-image.png` paths. Tweak `top`, `left`, `depth`, `glow`.

### 7. Anime / books / music
[`src/components/Anime.tsx`](src/components/Anime.tsx). `stanList`, `watching`, `reads`, `music`.

### 8. Sports
[`src/components/Sports.tsx`](src/components/Sports.tsx). drop in your own team and athlete images in `/public`.

### 9. Contact links
[`src/components/Contact.tsx`](src/components/Contact.tsx). `links` array.

### 10. Metadata + domain
[`src/app/layout.tsx`](src/app/layout.tsx). title, description, `metadataBase` URL.

### Theme colors
[`tailwind.config.ts`](tailwind.config.ts). `neon.violet / pink / cyan / lime` tokens. Change once, propagates everywhere.

---

## Games included

The `/games` route ships three small games. Each is one self-contained component, zero external game-engine dependencies.

| Game | File | What |
|---|---|---|
| Sudoku 4x4 | [`Sudoku.tsx`](src/components/games/Sudoku.tsx) | 3 valid puzzles, real-time row/col/box validation, neon-pink invalid glow, on-screen + keyboard input |
| Diet Coke Run | [`CokeRun.tsx`](src/components/games/CokeRun.tsx) | HTML5 canvas arcade. Catch cans, dodge deadlines. localStorage best score. Mobile touch controls. |
| Konami Decode | [`Konami.tsx`](src/components/games/Konami.tsx) | ↑↑↓↓←→←→BA. On-screen pad for mobile. Aurora unlock screen. |

Drop them on any page. They self-contain UI + state + keyboard handlers.

---

## Performance

- Static prerendered routes. **No SSR cost.**
- `/` page: **56 kB**, **159 kB First Load JS**
- `/games` page: **8 kB**, **110 kB First Load JS**
- All animations GPU-friendly (transforms + opacity only)
- Images served via `next/image` with proper `sizes` attribute
- Custom cursor disabled on `< 768px` viewports

---

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sanvideep/Gojo-Portfolio)

Or manually:

```bash
npm i -g vercel
vercel --prod
```

Vercel auto-detects Next.js. No config needed.

---

## Customization tips

- **Replace the cursor dot** in [`CursorDot.tsx`](src/components/CursorDot.tsx). change colour or shape.
- **Swap fonts** in [`layout.tsx`](src/app/layout.tsx). uses `next/font/google`. Try `Space_Mono`, `Geist`, `Inter`.
- **Tone down animations** by lowering `depth` in `FloatingScene.tsx` items, or removing the `glitch` class on the headline.
- **Add a /resume.pdf** route by dropping a PDF into `public/` and linking it from `Nav.tsx`.
- **Swap RCB / F1 images** with your own in `public/`. They are referenced as `/your-image.jpg` from `Sports.tsx`.

---

## Roadmap (free to claim)

If you fork and ship one of these, open a PR:

- [ ] MDX blog at `/writing`
- [ ] Spotify now-playing live widget (replace static music chips)
- [ ] GitHub contribution heatmap on `/about`
- [ ] Playwright visual regression on the landing page
- [ ] Theme toggle (dark only currently, day mode could slap)
- [ ] More games: snake, 2048, terminal-style typing trainer

---

## License

MIT. Steal the structure. Replace the data. Make it your own.
**One ask:** if you fork it and ship it, please drop the link in your README so I can see what you built. Tag [@sanvi_deep](https://instagram.com/sanvi_deep) too.

---

## Credits

- **Design + build:** [Sanvi Deep](https://www.linkedin.com/in/sanvi-deep) (aka Gojo)
- **Featured project:** [Raechal AI](https://www.raechal.ai)
- **Inspirations:** [gojumon.carrd.co](https://gojumon.carrd.co) for the fan-portfolio energy, every cyberpunk dashboard ever made, and [@gojo_satoru](https://en.wikipedia.org/wiki/Satoru_Gojo) for the alias.

---

<div align="center">

**Built with Diet Coke + Claude. Deployed on Vercel. Powered by spite for boring portfolios.**

[`raechal.ai`](https://www.raechal.ai) · [`linkedin`](https://www.linkedin.com/in/sanvi-deep) · [`github`](https://github.com/Sanvideep) · [`instagram`](https://instagram.com/sanvi_deep)

⭐ **Star the repo if it slapped.**

</div>
