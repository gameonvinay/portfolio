# Senior Frontend Developer Portfolio - Design Plan

> A tech-futuristic portfolio emphasizing technical depth, craftsmanship, and interactive excellence.

---

## Table of Contents

1. [Design System](#design-system)
2. [Site Architecture](#site-architecture)
3. [Section Specifications](#section-specifications)
4. [Technical Stack & Implementation](#technical-stack--implementation)
5. [Performance Targets](#performance-targets)
6. [File Structure](#file-structure)

---

## Design System

### Color Palette

```
Primary Colors:
┌─────────────────────────────────────────┐
│ Electric Blue:    #00F5FF               │
│ Neon Purple:      #A855F7              │
│ Deep Navy:        #0B0C15              │
│ Dark Gray:        #12141D              │
└─────────────────────────────────────────┘

Accent Colors:
┌─────────────────────────────────────────┐
│ Cyan Glow:        #67E8F9             │
│ Violet Accent:    #C084FC            │
│ Success Green:    #10B981              │
│ Warning Orange:   #FB923C              │
└─────────────────────────────────────────┘

Neutral Scale:
┌─────────────────────────────────────────┐
│ Surface Dark:     #0F1016             │
│ Surface Card:     #181A25             │
│ Border Subtle:    #272934             │
│ Text Primary:     #E2E4EF            │
│ Text Secondary:   #9CA3AF              │
└─────────────────────────────────────────┘
```

### Typography Stack

```css
/* Headings - Technical & Bold */
font-family: 'Geist Variable', system-ui, sans-serif;

/* Body - Readability First */
font-family: 'JetBrains Mono', 'Fira Code', monospace;

/* Monospace Accents */
code, terminal-text:
  font-family: 'JetBrains Mono', monospace;
```

### Spacing Scale (8px Grid)

```css
--space-1:   0.25rem;   /* 4px */
--space-2:   0.5rem;    /* 8px */
--space-3:   1rem;      /* 16px */
--space-4:   1.5rem;    /* 24px */
--space-5:   2rem;      /* 32px */
--space-6:   3rem;      /* 48px */
--space-7:   4rem;      /* 64px */
--space-8:   6rem;      /* 96px */
```

### Effects & Motion

```css
/* Glow Effects */
.glow-primary {
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2);
}

/* Glass Morphism */
.glass-panel {
  background: rgba(24, 26, 37, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Smooth Transitions */
.transition-smooth {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease,
              box-shadow 0.3s ease;
}
```

---

## Site Architecture

```
┌─────────────────────────────────────────┐
│                    HEADER                │
│  [Logo] [About] [Work] [Writing] [Contact] │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│              HERO SECTION                 │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │   Glitch    │  │ Typing Effect:   │  │
│  │   Name      │  │ "Senior Frontend │  │
│  │             │  │ Developer"       │  │
│  └─────────────┘  └──────────────────┘  │
│         ↓                              ↓  │
│  [Primary CTA]   [Secondary CTA]        │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│           SKILLS & EXPERTISE              │
│  ┌──────┬──────┬──────┬──────┐          │
│  │ Radar│ Marquee│ Bars │ Chart│         │
│  │ Chart│       │      │      │         │
│  └──────┴──────┴──────┴──────┘          │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│           PROJECTS PORTFOLIO              │
│  ┌─────────┬─────────┬─────────┐        │
│  │ Project │ Project │ Project │        │
│  │ Card    │ Card    │ Card    │        │
│  │ (3D Tilt)│(3D Tilt)│(3D Tilt)│       │
│  └─────────┴─────────┴─────────┘        │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│          EXPERIENCE TIMELINE              │
│  Timeline with scroll-triggered           │
│  accordion expansion                      │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│         WRITING + BLOG SPOTLIGHT          │
│  Featured article with hover reveal       │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│           CONTACT SECTION                 │
│  Email reveal animation                   │
│  Newsletter subscription                  │
└─────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────┐
│              FOOTER                       │
│  Social links | Legal | Sitemap           │
└─────────────────────────────────────────┘
```

---

## Section Specifications

### Hero Section

**Layout:**
- Left: Glitch-effect name + typing animation
- Right: Dual CTA buttons with hover glow
- Background: Subtle particle system (canvas)

**Key Elements:**
```jsx
<Hero>
  <GlitchText text="Your Name" />
  <TypingEffect text="Senior Frontend Developer">
    <CTAGroup>
      <Button variant="primary">View Work</Button>
      <Button variant="secondary">Contact Me</Button>
    </CTAGroup>
  </TypingEffect>
  <ParticleBackground />
</Hero>
```

**Animations:**
- Name glitch: Random character shifts every 2-4s
- Typing effect: Cursor blink, backspace correction
- Particles: Slow drift with mouse parallax

---

### Skills & Expertise

**Components:**
1. **Radar Chart** - Visual proficiency distribution
2. **Tech Marquee** - Infinite scrolling tech stack
3. **Proficiency Bars** - Interactive hover details
4. **Code Snippet Display** - Live terminal simulation

**Data Structure:**
```json
{
  "skills": {
    "frontend": ["React", "TypeScript", "Next.js", "Tailwind"],
    "backend": ["Node.js", "GraphQL", "PostgreSQL"],
    "tools": ["Vite", "Storybook", "Docker"]
  },
  "proficiency": {
    "React": 95,
    "TypeScript": 90,
    "Next.js": 85
  }
}
```

---

### Projects Portfolio

**Card Structure:**
```jsx
<ProjectCard>
  <CoverImage with="hover-reveal" />
  <Title>Project Name</Title>
  <TechStack tags={["React", "Three.js"]} />
  <ChallengeSolution>
    <Challenge>"Built a 3D data viz from scratch..."</Challenge>
    <Solution>"Implemented WebGL rendering with..."</Solution>
  </ChallengeSolution>
  <CodeSnippetOverlay language="javascript" />
</ProjectCard>
```

**Features:**
- 3D tilt effect on hover (CSS perspective)
- Code snippet appears on card hover
- Challenge → Solution narrative format

---

### Experience Timeline

**Vertical Timeline Design:**
```css
.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, 
    transparent,
    #A855F7 50%,
    #00F5FF);
}

.timeline-item {
  position: relative;
  width: 45%;
  padding-left: 2rem;
}
```

**Scroll-Triggered Activation:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});
```

---

### Writing + Blog Spotlight

**Featured Article Card:**
```jsx
<ArticleSpotlight>
  <CoverImage with="gradient-overlay" />
  <Metadata>
    <Category>Technical</Category>
    <ReadTime>8 min read</ReadTime>
  </Metadata>
  <Title>"Understanding React Server Components"</Title>
  <Excerpt>"A deep dive into the architecture..."</Excerpt>
  <HoverReveal>
    <Button>Read Article →</Button>
  </HoverReveal>
</ArticleSpotlight>
```

---

### Contact Section

**Email Reveal Animation:**
```css
.contact-email {
  opacity: 0;
  transform: translateY(10px);
}

.contact-email.active {
  animation: reveal 0.6s ease forwards;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Newsletter Form:**
```jsx
<NewsletterForm>
  <Input type="email" placeholder="Enter your email..." />
  <Button>Subscribe</Button>
</NewsletterForm>
```

---

## Technical Stack & Implementation

### Core Technologies

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | React | 19.2.4 |
| UI Library | Tailwind CSS + shadcn/ui | v4.2.2 |
| Animation | Framer Motion | ^11.0.0 |
| Icons | Lucide React | ^1.7.0 |
| Radix UI | Primitives | 1.4.3 |
| Build Tool | Vite | ^8.0.1 |

### Required Dependencies

```json
{
  "dependencies": {
    "@fontsource-variable/geist": "^5.2.8",
    "@tailwindcss/vite": "^4.2.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.0.0",
    "lucide-react": "^1.7.0",
    "radix-ui": "^1.4.3",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "shadcn": "^4.1.1",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/node": "^25.5.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "postcss": "^8.5.8",
    "tailwindcss": "^4.2.2",
    "vite": "^8.0.1"
  }
}
```

### Install Missing Packages

```bash
npm install framer-motion@^11.0.0
```

### Animation Strategy

**Framer Motion for Complex Animations:**
```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <motion.div style={{ y }}>
      {/* Content */}
    </motion.div>
  );
};
```

**CSS-First for Simple Effects:**
```css
/* GPU-accelerated transforms */
.animate-hover {
  transform: translateZ(0); /* Force GPU layer */
  will-change: transform;
}

/* Intersection Observer for scroll animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Performance Optimizations

```javascript
// Image optimization with lazy loading
const ProjectCard = memo(({ project }) => (
  <article className="project-card">
    <img 
      src={project.image}
      alt={project.title}
      loading="lazy"
      decoding="async"
    />
  </article>
));

// Framer Motion optimized animations
const AnimatedCard = motion(Card);

<AnimatedCard
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
/>;

// Debounced scroll listener for particle system
useEffect(() => {
  const handleScroll = debounce(() => {
    particles.updateParallax(window.scrollY);
  }, 16); // ~60fps throttle
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTI (Time to Interactive) | < 3.5s |
| Bundle Size (JS) | < 150KB gzipped |

---

## File Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hero-bg.svg
│       ├── particles.png
│       └── projects/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Container.tsx
│   │   ├── hero/
│   │   │   ├── GlitchText.tsx
│   │   │   ├── TypingEffect.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   └── Hero.tsx
│   │   ├── skills/
│   │   │   ├── RadarChart.tsx
│   │   │   ├── TechMarquee.tsx
│   │   │   ├── ProficiencyBars.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── CodeSnippetOverlay.tsx
│   │   │   └── ProjectsGrid.tsx
│   │   ├── experience/
│   │   │   ├── TimelineItem.tsx
│   │   │   └── ExperienceTimeline.tsx
│   │   ├── writing/
│   │   │   ├── ArticleSpotlight.tsx
│   │   │   └── WritingSection.tsx
│   │   └── contact/
│   │       ├── EmailReveal.tsx
│   │       └── NewsletterForm.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useParticleSystem.ts
│   │   └── useTypingEffect.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.config.js
│   ├── data/
│   │   ├── skills.json
│   │   ├── projects.json
│   │   └── experience.json
│   └── App.jsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## Implementation Roadmap

### Phase 1: Foundation (Days 1-2)
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Configure Geist font in globals.css
- [ ] Create base design system tokens
- [ ] Build common components (Button, Card, Container) using shadcn/ui

### Phase 2: Core Sections (Days 3-5)
- [ ] Hero section with glitch effects + typing animation
- [ ] Skills visualization components (Radar Chart, Marquee)
- [ ] Projects portfolio grid with 3D tilt cards
- [ ] Experience timeline with scroll animations

### Phase 3: Advanced Features (Days 6-7)
- [ ] Particle background system (canvas-based)
- [ ] Scroll animations using Intersection Observer + Framer Motion
- [ ] Newsletter subscription form
- [ ] Mobile responsiveness testing

### Phase 4: Polish & Optimization (Day 8+)
- [ ] Performance audits and fixes
- [ ] Accessibility improvements (ARIA labels, keyboard nav)
- [ ] SEO meta tags and sitemap
- [ ] Final review and deployment prep

---

## Notes for Content Creation

1. **Projects**: Create placeholder cards with generic tech stack; replace with actual work later
2. **Experience**: Use template structure; fill in real data when ready
3. **Writing**: Design for 1-2 featured articles; expand as needed
4. **Skills**: Populate with your actual expertise; proficiency levels can be estimated

---

*Generated: 2026-03-28 | Updated: React 19 + Tailwind v4 + Framer Motion*
