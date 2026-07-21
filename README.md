# Moh Bhargava - Portfolio

A Next.js portfolio for Moh Bhargava: AI/ML builder, BITS Pilani student, photographer, and powerlifting team captain.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Optional local Ask Moh AI

The site works without a model: the assistant answers from verified portfolio notes. To make it answer through Ollama on your laptop, install Ollama, then run:

```bash
ollama pull llama3.2
ollama serve
```

The default local endpoint is `http://127.0.0.1:11434`. Copy `.env.example` to `.env.local` only if you want to use a different model or endpoint. Never commit `.env.local`.

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Push `main` to [GitHub](https://github.com/mohbhargava04/AI-Portfolio).
2. Sign in to [Vercel](https://vercel.com) with GitHub and select **Add New → Project**.
3. Import `mohbhargava04/AI-Portfolio`. Vercel detects Next.js automatically; leave the build settings at their defaults.
4. Add `NEXT_PUBLIC_SITE_URL` in **Settings → Environment Variables**. After the first deployment, set it to the production URL, for example `https://your-portfolio.vercel.app` or your custom domain.
5. Deploy. Every later push to `main` becomes production; a non-main branch or pull request gets a preview URL.

No API keys are needed for the current portfolio. Ask Moh AI uses local Ollama when `OLLAMA_BASE_URL` is configured; otherwise it answers from verified portfolio notes immediately. A public Vercel deployment cannot call Ollama running only on your laptop—only set `OLLAMA_BASE_URL` in Vercel if it points at a trusted remote model endpoint.

## Content updates

- Core profile, internship work, projects, and leadership: `src/data/portfolio.ts`
- Field Notes / blog entries: `src/data/field-notes.ts`
- Blog images: add optimised images under `public/` and replace the temporary visual blocks in the Field Notes components.

## Stack

Next.js, React, TypeScript, GSAP, Lenis, and CSS-led motion.
