# Lum-Plum

A responsive portfolio and case-study website for a multidisciplinary designer, built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

Lum-Plum showcases digital products, design systems, and creative case studies. Projects and blog posts are rendered through dynamic slug routes, with a persistent light/dark theme and Framer Motion animations.

## Key Features

- **Responsive layout** for mobile, tablet, and desktop
- **Case studies and blog** rendered via Next.js App Router `[slug]` routes
- **Light/dark theme** (`#fdfdfc` / `#141414`) persisted in `localStorage`
- **Framer Motion animations**: page transitions, crossfade hero carousel, animated indicator pills, and text reveals
- **Interactive components**: project archive, newsletter subscription modal, and contact inquiry form

## Technologies Used

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/)
- [ESLint](https://eslint.org/) 9

## Installation & Setup

**Prerequisite:** [Node.js](https://nodejs.org/) 20.9.0 or higher

```bash
git clone https://github.com/RayqRohit/Lum-Plum.git
cd Lum-Plum
npm install
```

No environment variables are required.

## Usage

```bash
npm run dev        # Start the dev server at http://localhost:3000
npm run build      # Create a production build
npm start          # Serve the production build
npm run lint       # Run ESLint
npx tsc --noEmit   # Run TypeScript type check
```

## Project Structure

```
lum-plum/
├── public/             # Static assets (images, web fonts)
├── src/
│   ├── app/            # App Router pages and layout
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog feed and [slug] post routes
│   │   ├── contact/    # Contact page
│   │   └── projects/   # Project list and [slug] case study routes
│   ├── components/     # Reusable UI components (ThemeToggle, WordBlur)
│   ├── context/        # ThemeContext provider
│   ├── data/           # Typed data sources (projectsData, blogData)
│   └── lib/            # Motion presets and utility helpers
├── package.json
└── tsconfig.json
