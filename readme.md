# Lum-Plum

## Overview

Lum-Plum is a personal portfolio website built with Next.js. It includes a home page, an about page, a projects section, a blog and a contact page, with light and dark themes.

## Key Features

- Home, About, Projects, Blog and Contact pages
- Project and blog detail pages generated from local data files
- Blog list with a "Load More" button
- Light and dark theme toggle, saved in the browser
- Page and element animations with Framer Motion
- Responsive layout

> **Note:** The contact form is a front-end UI only. It does not send messages to a backend or email service.

## Technologies Used

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/)
- ESLint

## Installation & Setup

**Prerequisite:** Node.js 20.9 or later

```bash
git clone https://github.com/RayqRohit/Lum-Plum.git
cd Lum-Plum
npm install
```

## Environment Variables

None required.

## How to Run the Project

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm start

# Lint
npm run lint
```

## Project Structure

```
src/
├── app/          # Routes: home, about, blog, projects, contact
├── components/   # Shared UI components
├── context/      # Theme provider
├── data/         # Blog posts and project content
└── lib/          # Animation helpers
public/           # Images and fonts
```

Blog content lives in `src/data/blogData.ts` and project content in `src/data/projectsData.ts`.