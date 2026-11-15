# Lum-Plum

A modern multidisciplinary designer portfolio and case-study showcase built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Overview

Lum-Plum is a fast, responsive portfolio website designed to showcase digital products, design systems, and creative case studies. It features dynamic routing for projects and articles, a persistent light/dark theme switcher, and smooth interface animations powered by Framer Motion.

## Key Features

- **Responsive Layout**: Fluid experience optimized for mobile, tablet, and desktop viewports.
- **Dynamic Case Studies & Articles**: Project details and blog posts dynamically rendered through Next.js App Router slug routes.
- **Theme Support**: Seamless Dark Mode (`#141414`) and Light Mode (`#fdfdfc`) with preference persistence in `localStorage`.
- **Framer Motion Animations**: Smooth page transitions, crossfade hero carousels, animated indicator pills, and text reveals.
- **Interactive UI Components**: Project archives, newsletter subscription modal, and a scoped contact inquiry form.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Linting**: [ESLint](https://eslint.org/) 9

## Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 20.9.0 or higher) installed on your system.

### Clone and Install

```bash
git clone https://github.com/RayqRohit/Lum-Plum.git
cd Lum-Plum
npm install
```

## Environment Variables

No environment variables are required to run this project.

## How to Run the Project

```bash
# Start the development server (runs at http://localhost:3000)
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Run ESLint
npm run lint

# Build for production
npm run build

# Start the production server
npm start
```

## Project Structure

```
lum-plum/
├── public/                 # Static assets (images, web fonts)
├── src/
│   ├── app/                # Next.js App Router pages and layout
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog feed and [slug] dynamic post routes
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects list and [slug] case study routes
│   │   ├── globals.css     # Global styles and font definitions
│   │   ├── layout.tsx      # Root application layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable UI components (ThemeToggle, WordBlur)
│   ├── context/            # ThemeContext provider
│   ├── data/               # Typed data sources (projectsData, blogData)
│   └── lib/                # Motion presets and utility helpers
├── package.json
└── tsconfig.json
```
