# Lum-Plum

A personal portfolio website with a home page, about page, projects, blog and contact page. It supports light and dark themes and has smooth page animations.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

**Requirements:** Node.js 20.9 or later

```bash
# Clone the repository
git clone https://github.com/RayqRohit/Lum-Plum.git
cd Lum-Plum

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Create a production build       |
| `npm start`     | Run the production build        |
| `npm run lint`  | Check the code with ESLint      |

## Project Structure

```
src/
├── app/            # Pages and layout
│   ├── about/
│   ├── blog/       # Blog list and [slug] post pages
│   ├── contact/
│   └── projects/   # Project list and [slug] detail pages
├── components/     # Reusable UI components
├── context/        # Theme (light/dark) provider
├── data/           # Blog posts and project content
└── lib/            # Animation helpers
public/             # Images and fonts
```

## Editing Content

- **Blog posts:** edit `src/data/blogData.ts`
- **Projects:** edit `src/data/projectsData.ts`
- **Images:** add files to `public/images/` and reference them as `/images/your-file.png`

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new): import the repository and deploy. No extra configuration is needed.