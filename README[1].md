
# SPORTYWAY.IN — Next.js Starter (placeholders)

This repository is a ready-to-deploy Next.js starter for SPORTYWAY.IN (placeholders used for images).

## What's included
- `pages/index.jsx` — Storefront (React + Tailwind)
- `public/` — placeholder folders for `products/` and `hero/`
- `data/products.csv` — sample product CSV
- `pages/api/razorpay.js` — example serverless endpoint (placeholder) for Razorpay
- `README.md` — instructions for deployment to Vercel and DNS setup

## Quick start (local)
1. Install dependencies:
   ```
   npm install
   ```
2. Run dev server:
   ```
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import project at https://vercel.com/new.
3. Set environment variables when you add payments (e.g., RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET).
4. Add custom domain `sportyway.in` in Vercel and follow their DNS instructions — usually creating CNAME for `www` to `cname.vercel-dns.com` and an A/ALIAS for root as instructed by Vercel.

## Replace placeholders
- Drop real images into `public/products/` named `jersey-1.jpg`, `jersey-2.jpg`, ...
- Replace `/hero/hero.jpg` with your hero banner.

