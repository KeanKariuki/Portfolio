# Kean Kariuki — Portfolio

Backend engineer in training. Maths & CS @ JKUAT · Full-stack intern @ Gnovation · Incoming backend intern @ Safaricom.

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Tech stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** for styling, with an OKLCH-based design token system in `src/app/globals.css`
- **next/font** for self-hosted Instrument Serif + Work Sans

## Project structure

```
src/app/
  layout.tsx    # root layout, fonts, metadata
  page.tsx      # the single-page portfolio content
  globals.css   # design tokens + Tailwind entry
public/
  hero-ink.jpg  # hero image
```

## Deployment

This is a standard Next.js app — deploy it anywhere that supports Next.js, e.g. [Vercel](https://vercel.com/new), Netlify, or your own Node server:

```bash
npm run build
npm run start
```

## Get in touch

- GitHub: https://github.com/KeanKariuki
- LinkedIn: https://www.linkedin.com/in/kean-kariuki-39586b289/
- Email: keanzy254@gmail.com
