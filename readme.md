# Lum-Plum — Designer Portfolio

A multidisciplinary designer portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. 

Designed to present work across **Product Design**, **UI/UX Architecture**, **Design Systems**, and **Visual Identity** with fluid micro-interactions, responsive editorial layouts, and dual theme support.

---

## ✨ Features & Pages

- **Home (`/`)**: Ambient showcase canvas with an autoplay crossfade carousel, typographic word-blur reveal, live availability status pill, and direct CTAs.
- **About (`/about`)**: Personal design manifesto, floating specialization pills (*Product Design*, *Design Systems*, *UI/UX Strategy*), narrative biography, and social links.
- **Selected Work (`/projects`)**: Curated table archive of digital products, platforms, and brand systems with status badges and categories.
- **Case Studies (`/projects/[slug]`)**: Deep-dive project narratives with problem framing, architecture breakdowns, pull quotes, measurable impact milestones, and future roadmaps:
  - `Luminous` — Product & Visual Design (*Ambient interaction architecture & WCAG 2.1 AA tokens*)
  - `Nova` — Product Design & SaaS Architecture (*Asynchronous workspace design & cognitive overhead reduction*)
  - `Osaka` — Brand Identity & Design Systems (*Japanese spatial minimalism translated to omnichannel commerce*)
  - `Atlas` — Creative Direction & Editorial Experience (*Pacing, restraint, and responsive monograph layout*)
  - `Prism` — UI/UX Design & Multi-Platform System (*Progressive disclosure for personal finance widgets*)
- **Writing & Thoughts (`/blog`)**: Curated design essays, responsive grid with infinite pagination ("Load More"), and an integrated newsletter subscription block with modal confirmation.
- **Article Details (`/blog/[slug]`)**: Clean reading environment with persistent cover showcase, social sharing triggers, pull quotes, and sub-headings.
- **Contact (`/contact`)**: Project inquiry form featuring budget tier scoping, direct studio contact columns, and interactive success states.
- **Dual Theme Support**:
  - **Dark Mode**: `#141414` background with `#fafafa` typography.
  - **Light Mode**: `#fdfdfc` background with `#1e1e28` typography.
  - Persistent state stored in `localStorage` with zero flash-of-unstyled-theme.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Linting:** ESLint 9

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9+ (or higher)
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/RayqRohit/Lum-Plum.git
cd Lum-Plum

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the local development server (runs at http://localhost:3000)
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Run ESLint check
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
lum-plum/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home page
│   │   ├── about/page.tsx         # About page
│   │   ├── projects/
│   │   │   ├── page.tsx           # Selected Work archive
│   │   │   └── [slug]/page.tsx    # Project case study detail page
│   │   ├── blog/
│   │   │   ├── page.tsx           # Blog feed & newsletter
│   │   │   └── [slug]/page.tsx    # Blog article detail page
│   │   ├── contact/page.tsx       # Contact page
│   │   ├── layout.tsx             # Root layout with theme provider
│   │   └── globals.css            # Global styles, fonts, and keyframes
│   ├── components/                # Shared UI components (ThemeToggle, WordBlur)
│   ├── context/                   # React context (ThemeContext)
│   ├── data/
│   │   ├── projectsData.ts        # Comprehensive case studies data
│   │   └── blogData.ts            # Essays and article data
│   └── lib/
│       └── motion.ts              # Framer motion presets & transition curves
├── public/                        # Static assets (images, fonts)
├── DESIGNER_PORTFOLIO_CONTENT.md  # Complete content plan & design positioning spec
└── package.json
```

---

## 📄 Content Management

All project case studies and blog posts are statically typed and managed via:
- [`src/data/projectsData.ts`](src/data/projectsData.ts)
- [`src/data/blogData.ts`](src/data/blogData.ts)

A complete record of the positioning framework and website copy is documented in [`DESIGNER_PORTFOLIO_CONTENT.md`](DESIGNER_PORTFOLIO_CONTENT.md).
