# Mahran Hadj Salah — Portfolio Website

> **Software Engineering Student · AI & Full-Stack Developer**  
> *"I build intelligent software products that combine AI, automation, and modern web technologies."*

A modern, high-craft, product-focused personal portfolio website tailored for **Mahran Hadj Salah**. Built with React, Vite, and Tailwind CSS, featuring a dark technical aesthetic, interactive system mockups, and centralized data configuration.

---

## ⚡ Quick Start

### Option 1: One-Click Launch (Windows)
Double-click **`start_all.bat`** in the project folder. It will:
1. Verify Node.js is installed.
2. Auto-install dependencies if needed (`node_modules`).
3. Start the Vite server.
4. Automatically open your browser to `http://localhost:3000`.

### Option 2: Command Line
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production-ready bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🛠️ How to Customize Your Information

All your personal details, project descriptions, live links, and tech stack are centralized in one file:

📁 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

You can easily update:
- **Personal Info**: Name, bio, email, social URLs (GitHub, LinkedIn), status badge.
- **Featured Projects**:
  - `Autoreply` (AI-powered sales automation)
  - `LUX Dental` (Practice management SaaS)
  - `SupportAi` (GraphRAG knowledge engine)
  - GitHub repo links, live demo URLs, impact metrics, and architecture points.
- **What I Do**: 5 core capability pillars.
- **Tech Stack**: AI & agents, backend systems, frontend, data & cloud tools.
- **Education & Experience**: ISIMS (Software Engineering Cycle), milestones, certifications.

---

## 🚀 One-Click Deployment

This portfolio can be deployed in under 2 minutes:

### Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/MahranHadjSalah/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **Import Project**.
3. Select your GitHub repository. Vercel will automatically detect Vite and deploy!

### Netlify
1. Connect your GitHub repository to [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🎨 Visual Design Philosophy

- **Dark & Technical**: Charcoal/black canvas (`#08090d`) with white typography and vibrant emerald (`#10b981`) terminal energy.
- **Product-First Architecture**: Live simulated system demos showing actual agent pipelines and SaaS workflows instead of static claims.
- **Performance**: Instant load times with Vite bundle splitting and zero heavy external libraries.
