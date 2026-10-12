# Ifechidere Godson — Portfolio

A responsive, interactive Next.js portfolio with project filtering, dark/light theme, mobile navigation, SEO metadata, Person structured data, sitemap.xml, and robots.txt.

## Before deploying
1. Confirm project details and repository links in `src/data/projects.ts`.
2. Replace the sample contact email in `src/components/Portfolio.tsx` with your real email.
3. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS URL. Do not leave the fallback example.com value.
4. Deploy with Node.js 20 or later.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy on Render
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://YOUR-LIVE-SITE-URL`

## Google indexing
1. Add your live website to https://search.google.com/search-console/
2. Verify ownership.
3. Confirm `/sitemap.xml` loads and submit it in Search Console.
4. Inspect the homepage URL and request indexing.
Google indexing and ranking are not guaranteed.
