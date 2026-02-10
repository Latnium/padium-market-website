# Padmium Website

Marketing website for Padmium - Enhancing Stablecoin Liquidity.

## Getting Started

## Environment Setup

This website uses **Sanity** for content. You must provide the Sanity project ID and dataset via environment variables.

### Local development

1. Create a local env file (git-ignored):

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` (required)
- `NEXT_PUBLIC_SANITY_DATASET` (optional, default: `production`)

You can find the **project ID** in [sanity.io/manage](https://www.sanity.io/manage) (select your project). The **dataset** is usually `production` unless you created another dataset.

If `NEXT_PUBLIC_SANITY_PROJECT_ID` is missing/empty, the app will throw a clear error on startup to prevent harder-to-debug runtime failures.

### Production (Vercel)

Set the same variables in **Vercel → Project → Settings → Environment Variables**:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (optional; defaults to `production`)

Recommended:

- Set both for **Production** and **Preview** environments.
- If you also run `vercel dev`, you may set them for **Development** as well (or continue using `.env.local`).

Do not commit real values in `.env.example`. Use `.env.local` locally and Vercel environment variables for deployed environments.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
