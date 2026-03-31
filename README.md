# Preethi S Portfolio (AI Showcase)

## 🚀 Project Overview

This is a modern single-page portfolio website built with React, TypeScript, Vite, Tailwind CSS and Radix UI. The site showcases:
- Hero section with animated background and typewriter intro.
- About, Skills, Projects, Education, Achievements, Contact and Footer sections.
- Smooth navigation and responsive layout.
- UI components built with Radix primitives and custom design tokens.

## 🧩 Tech Stack

- React 18
- TypeScript
- Vite (bundler/dev server)
- Tailwind CSS + Tailwind animation utilities
- Framer Motion (animations)
- Radix UI packages for accessible primitives
- React Router DOM for routing
- React Query for state/data management
- Recharts for charting in skill/achievements (if used)
- Sonner and custom toaster UI for notifications
- Zod + React Hook Form for form validation (dependencies present)

## 🗂️ Repository Structure

- `src/`
  - `main.tsx` app entry
  - `App.tsx` global providers, router, toasters
  - `pages/` `Index.tsx`, `NotFound.tsx`
  - `components/` page sections + shared utilities
    - `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Education.tsx`, `Achievements.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx`, etc.
    - `FloatingParticles.tsx` ambient visual effect
    - `SectionDivider.tsx` section separators
  - `components/ui/` design system components (button, card, tooltip, dialog, etc.)
  - `hooks/` custom hooks (mobile detection, toasts)
  - `lib/utils.ts` helper utilities

## 📦 Install and Run

1. Clone repository
   ```bash
   git clone https://github.com/Preethi2206/preethi-s-ai-showcase-3d8825df.git
   cd preethi-s-ai-showcase-3d8825df
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start dev server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build
   ```
5. Preview production build
   ```bash
   npm run preview
   ```

## 🧪 Testing

- `vitest` is included as a dependency
- Example tests located in `src/test/`

## 🛠️ Features

- Responsive layout for mobile, tablet, desktop
- Animated hero section with typewriter and floating orbs
- Section-based portfolio summary
- Fixed navigation with smooth scrolling
- Accessible controls and keyboard interactions via Radix components
- Theming support through CSS variables and Tailwind config
- Catch-all route with 404 page

## ♻️ Customization

- Update content in `src/components` section files
- Adjust theme tokens in `tailwind.config.ts`
- Use `src/components/ui/*` for re-usable design system components

## 🔧 Deployment

- Deploy to static hosts (Netlify, Vercel, GitHub Pages) from production `dist`

## 📑 Contribution

- Fork and create feature branches
- Add tests and update documentation
- Submit PR with clear descriptions

---

### 📌 Notes

- This README was generated from evaluating the repository structure and existing source files.
- For future updates, keep section components, utilities, and design system in sync with documentation.

