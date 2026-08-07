# 🎬 VividAI — AI Video Generation

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Create stunning AI-generated videos from a single text prompt. No editing skills. No studio. Just results.

## ✨ Features

- **AI Video Generation** — Type a prompt, pick a style, get a video
- **6 Styles** — Cinematic, Anime, Realistic, 3D Render, Sketch, Neon
- **Gallery** — Community showcase with search, filters, and likes
- **Templates** — Pre-built templates for quick starts
- **Pricing** — Free, Pro (€19/mo), and Studio (€79/mo) plans with testimonials & FAQ
- **German Legal Pages** — Full DSGVO/Impressum compliance
- **Responsive Design** — Mobile hamburger menu, adaptive layouts
- **Dark Theme** — Animated gradient background with floating orbs
- **Error Boundaries** — Graceful crash recovery
- **SEO Ready** — Meta tags, Open Graph, per-page document titles
- **Smart Images** — Lazy loading with skeleton placeholders and error fallbacks

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

## 📦 Tech Stack

- **React 18** + **TypeScript 5**
- **Vite 5** with `@vitejs/plugin-react`
- **Tailwind CSS 3.4** with custom violet theme
- **React Router 6** (BrowserRouter)
- **lucide-react** for icons
- **Vercel** for deployment

## 📁 Project Structure

```
src/
├── App.tsx                    # Routes + layout
├── main.tsx                   # Entry point
├── index.css                  # Tailwind + custom animations
├── components/
│   ├── Navbar.tsx             # Sticky nav with mobile menu
│   ├── ErrorBoundary.tsx      # Crash recovery
│   ├── ScrollToTop.tsx        # Route change scroll reset
│   └── SmartImage.tsx         # Lazy images with fallbacks
├── hooks/
│   └── useDocumentTitle.ts    # Per-page SEO titles
└── pages/
    ├── Home.tsx               # Hero, features, stats, recent projects
    ├── Create.tsx             # Prompt editor with style/duration/ratio
    ├── Gallery.tsx            # Masonry grid with search & filters
    ├── Templates.tsx           # Template gallery
    ├── Pricing.tsx            # Plans, testimonials, FAQ
    ├── Login.tsx              # Google OAuth UI
    ├── Datenschutz.tsx         # DSGVO privacy policy (German)
    ├── Impressum.tsx          # Legal notice (German)
    └── NotFound.tsx           # 404 page
```

## 🌐 Deployment

Deployed on **Vercel** with SPA rewrites configured in `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 📄 License

MIT
