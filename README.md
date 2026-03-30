# Tech-Futuristic Portfolio v2.0

> A high-performance, senior-level frontend architect portfolio emphasizing technical depth, craftsmanship, and interactive excellence.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 🌌 Project Vision

This portfolio is designed for a **Senior Frontend Architect**, blending a technical aesthetic with seamless interactivity. It moves away from generic layouts into a "tech-futuristic" experience characterized by neon palettes, glassmorphism, and GPU-accelerated micro-animations.

## 🚀 Key Features

- **Interactive Hero Section**: Glitch-effect typography and dynamic typing animations.
- **3D Portfolio Cards**: Projects presented with 3D tilt effects and challenge/solution narratives.
- **Architecture Visualization**: Custom-built radar charts and skills marquee to showcase expertise.
- **Dynamic Experience Timeline**: Scroll-triggered accordion expansion for a polished career history.
- **Writing & Insights**: Featured articles spotlight with gradient-overlay reveal animations.
- **Optimized Performance**: Built with React 19 and Tailwind v4 for maximum efficiency and minimal bundle size.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Geist Variable](https://vercel.com/font) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## 🎨 Design System

- **Primary Palette**: Electric Blue (#00F5FF), Neon Purple (#A855F7), Deep Navy (#0B0C15)
- **Glassmorphism**: Backdrop blur (12px) with subtle 8% white borders.
- **Grid System**: Strict 8px spacing scale for layout consistency.

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/gameonvinay/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```bash
src/
├── components/          # Categorized UI sections (hero, projects, skills, etc.)
│   ├── common/          # Reusable base primitives (Button, Card, Container)
│   ├── ui/              # shadcn/ui shared components
│   └── ...              # Section-specific components
├── data/                # JSON-based content (experience, projects, skills)
├── hooks/               # Custom hooks for typing, scroll, and particles
├── styles/              # Global CSS and Tailwind configuration
└── App.jsx               # Main application entry point
```

## 🗺 Roadmap

- [x] Phase 1: Foundation & Design System Setup
- [x] Phase 2: Core Section implementation (Hero, Projects, Experience)
- [ ] Phase 3: Canvas-based Particle Background & Newsletter Integration
- [ ] Phase 4: Performance Audits & SEO Optimization

---

Built with ⚡ by [Vinay](https://github.com/gameonvinay)
