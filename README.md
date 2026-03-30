# GivraTech

Data & AI consulting website — built with Next.js 14, TailwindCSS, and TypeScript.

---

## 1. What is this project

GivraTech is a full-stack marketing and demo website for a data & AI consulting firm. It includes:

- Marketing pages: Home, Services, About, Contact
- Interactive data demos: RFM Segmentation, Geolocation, Logistics Optimization, Retention, AI Transformer
- API route for AI-powered website analysis (requires Anthropic API key)
- Fully responsive, dark/neon design

---

## 2. How to install dependencies

```bash
npm install
```

---

## 3. How to run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 4. How to build for production

```bash
npm run build
```

This generates an optimized Next.js build in `.next/`.

---

## 5. How to deploy to Cloudflare Pages

### Option A — Via Cloudflare Dashboard (recommended)

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create a project → Connect to Git
3. Select your repository
4. Set build settings:
   - Framework preset: Next.js
   - Build command: `npx @cloudflare/next-on-pages`
   - Output directory: `.vercel/output/static`
   - Node.js version: 18
5. Add environment variables (see section 6)
6. Click Deploy

### Option B — Via CLI (Wrangler)

```bash
npm install -D @cloudflare/next-on-pages wrangler
npm run pages:build
npx wrangler pages deploy .vercel/output/static --project-name givratech
```

---

## 6. Environment variables

Create a `.env.local` file at the root:

```
ANTHROPIC_API_KEY=your_api_key_here
```

In Cloudflare Pages: Settings → Environment Variables → Production.

The AI Transformer demo will not work without this key. All other demos use mock data only.

---

## 7. Project structure

```
src/
├── app/
│   ├── page.tsx                          # Home
│   ├── services/page.tsx                 # Services
│   ├── about/page.tsx                    # About
│   ├── contact/page.tsx                  # Contact
│   ├── demos/page.tsx                    # Interactive demos
│   ├── api/transform-website/route.ts    # AI API (edge runtime)
│   ├── layout.tsx                        # Root layout + metadata
│   └── globals.css                       # Global styles + CSS variables
├── components/
│   ├── home/                             # Hero, Services, HowWeWork, etc.
│   ├── layout/                           # Navbar, Footer
│   └── demos/                            # DemoRFM, DemoGeo, DemoLogistics, etc.
├── data/                                 # Mock data + content definitions
└── types/                                # TypeScript interfaces
public/
└── og-image.png                          # Social media preview (1200x630)
```

---

## 8. Migration notes from Vercel (GiaTech)

- Brand: All "GiaTech" references replaced with "GivraTech"
- Language: All visible content translated from Spanish to English
- Routes: /servicios → /services, /nosotros → /about, /contacto → /contact
- API route: Added `export const runtime = 'edge'` for Cloudflare Pages compatibility
- BASE_URL: Set to https://givratech.pages.dev — update this to your final domain
- Added wrangler.toml and Cloudflare scripts to package.json
- No Vercel-specific config existed (no vercel.json)

---

## 9. Pre-deploy checklist

- [ ] Set ANTHROPIC_API_KEY in Cloudflare Pages environment variables
- [ ] Update BASE_URL in src/app/layout.tsx to your final domain
- [ ] Push code to GitHub
- [ ] Cloudflare Pages build command: npx @cloudflare/next-on-pages
- [ ] Cloudflare Pages output directory: .vercel/output/static
- [ ] Test locally with npm run dev before deploying
- [ ] Verify AI Transformer demo works with a valid API key
