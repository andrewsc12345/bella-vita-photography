# bella vita photography — Astro Migration

## What This Is

This project migrates bellavitabyrebecca.com from a Create React App (client-side rendered) to Astro (static HTML + React). The goal: fix the SEO problem where Google sees "You need to enable JavaScript" instead of your actual content.

## What Changed (and What Didn't)

**Changed:**
- Framework wrapper: CRA → Astro (generates static HTML that Google can read)
- Main page now outputs ALL content as static HTML for search engines
- Full schema markup: LocalBusiness, Photographer, FAQ (enables rich results in Google)
- 6 new location landing pages targeting "[service] + [city]" searches
- Auto-generated sitemap including all pages + blog posts
- Updated robots.txt

**Didn't change:**
- The React app itself — 100% of the interactive features are preserved
- All 13 blog posts (still static HTML in /public/)
- All images, billing page, thanks page
- Contact form (still Formspree)
- Google Analytics tracking
- Search Console verification tag

## Project Structure

```
bella-vita-astro/
├── astro.config.mjs              ← Astro config (React + sitemap plugins)
├── package.json                   ← Dependencies
├── public/                        ← Static assets (copied directly to build output)
│   ├── *.JPG, *.jpg               ← All portfolio images (100+)
│   ├── blog.html                  ← Blog listing page
│   ├── blog-*.html                ← 13 blog posts
│   ├── billing.html               ← Billing/payment page
│   ├── thanks.html                ← Thank you page
│   ├── favicon.ico, logo.png      ← Branding assets
│   ├── og-preview.png             ← Social sharing image
│   ├── rebecca-profile.jpg        ← About photo
│   └── robots.txt                 ← Updated for Astro sitemap
├── src/
│   ├── components/app/            ← YOUR EXISTING REACT APP (unchanged)
│   │   ├── App.jsx                ← Main React component
│   │   ├── App.css                ← Styles
│   │   ├── components.js          ← Helper components (lightbox, gallery, etc.)
│   │   ├── data.js                ← All content data
│   │   ├── styles.js              ← CSS-in-JS styles
│   │   └── BellaVitaApp.jsx       ← Thin wrapper for Astro integration
│   ├── layouts/
│   │   └── PageLayout.astro       ← Shared layout for location pages
│   └── pages/
│       ├── index.astro                              ← MAIN PAGE (SEO + React app)
│       ├── senior-portraits-howell-mi.astro          ← Location page
│       ├── senior-portraits-brighton-mi.astro        ← Location page
│       ├── senior-portraits-hartland-mi.astro        ← Location page
│       ├── senior-portraits-fenton-mi.astro          ← Location page
│       ├── family-photographer-brighton-mi.astro     ← Location page
│       └── family-photographer-livingston-county-mi.astro ← Location page
└── README.md
```

## How the SEO Fix Works

**Before (CRA):**
Google crawls → sees `<noscript>You need to enable JavaScript</noscript>` → waits for second-pass JS rendering → maybe sees content, maybe doesn't → poor indexing

**After (Astro):**
Google crawls → sees full static HTML with all text content, schema markup, FAQs, pricing, testimonials, internal links to location pages → immediately indexes everything → React loads on top for interactivity

The main page (`index.astro`) has two layers:
1. The React app loads via `client:only="react"` — all interactivity preserved
2. Below it, a `#seo-content` div contains every word of text from the site as semantic HTML
3. Once React mounts, the static content hides via CSS (`app-loaded` class)

Google reads layer 2 on first crawl. Users see layer 1. Both win.

---

## Setup & Deployment

### Step 1: Install Dependencies

```bash
cd bella-vita-astro
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Open http://localhost:4321 and verify:
- Main page loads with full React interactivity
- Portfolio filters work
- Lightbox opens
- Contact form works
- Gift certificate modals work
- Location pages render at /senior-portraits-howell-mi/ etc.
- Blog links go to blog pages

### Step 3: Build

```bash
npm run build
```

This creates a `dist/` folder with:
- Static HTML for every page
- The React app bundled as JS
- Auto-generated sitemap at `dist/sitemap-index.xml`
- All images and static assets copied from /public/

### Step 4: Verify the Build

```bash
npm run preview
```

**Critical check:** View the page source of the main page. You should see:
- Full `<head>` with meta tags and schema markup
- The `#seo-content` div with all text content
- NO "You need to enable JavaScript" message

### Step 5: Deploy to Cloudflare Pages

**Option A: Replace the existing repo (recommended)**

1. Go to your GitHub repo (github.com/andrewsc12345/[repo-name])
2. Delete all existing files (or replace them)
3. Push this entire project to the repo
4. In Cloudflare Dashboard → Workers & Pages → your project → Settings → Build configuration:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Cloudflare will auto-build and deploy

**Option B: Create a new repo**

1. Create a new GitHub repo (e.g., `bella-vita-astro`)
2. Push this project to it
3. In Cloudflare Dashboard → Workers & Pages → Create application → Connect to GitHub
4. Select the new repo
5. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Deploy
7. Update bellavitabyrebecca.com DNS to point to the new Pages project

### Step 6: Google Search Console

After deployment:

1. Go to https://search.google.com/search-console
2. Verify bellavitabyrebecca.com is added (it should be — verification tag is in the HTML)
3. Go to **Sitemaps** → Submit `sitemap-index.xml`
4. Go to **URL Inspection** → Enter `https://bellavitabyrebecca.com/`
5. Click **Request Indexing**
6. Repeat URL Inspection for each location page:
   - `https://bellavitabyrebecca.com/senior-portraits-howell-mi/`
   - `https://bellavitabyrebecca.com/senior-portraits-brighton-mi/`
   - `https://bellavitabyrebecca.com/senior-portraits-hartland-mi/`
   - `https://bellavitabyrebecca.com/senior-portraits-fenton-mi/`
   - `https://bellavitabyrebecca.com/family-photographer-brighton-mi/`
   - `https://bellavitabyrebecca.com/family-photographer-livingston-county-mi/`
7. Check the **Page indexing** report after 3-5 days

---

## Pages Included in the Sitemap

Astro auto-generates these in the sitemap:

| Page | Target Search Term |
|------|-------------------|
| `/` | bella vita photography michigan |
| `/senior-portraits-howell-mi/` | senior portraits howell mi |
| `/senior-portraits-brighton-mi/` | senior portraits brighton michigan |
| `/senior-portraits-hartland-mi/` | senior portraits hartland mi |
| `/senior-portraits-fenton-mi/` | senior portraits fenton mi |
| `/family-photographer-brighton-mi/` | family photographer brighton michigan |
| `/family-photographer-livingston-county-mi/` | family photographer livingston county |
| `/blog.html` | photography blog michigan |
| `/blog-senior-photos.html` | best senior photo locations michigan |
| `/blog-what-to-wear.html` | what to wear senior photos |
| `/blog-prepare-family.html` | prepare family photo session |
| `/blog-when-to-book.html` | when to book senior photos michigan |
| + 9 more blog posts | various long-tail keywords |

---

## Future Improvements (Optional, Not Required for Launch)

These would further improve SEO but are not blocking:

1. **More location pages:** Add pages for Fowlerville, Pinckney, Highland, Milford
2. **Convert blog posts to Astro pages:** Move from static HTML to Astro format for shared nav/footer and automatic sitemap inclusion
3. **Image optimization:** Use Astro's `<Image>` component with `sharp` for automatic WebP conversion and responsive sizing (big page speed win for a photography site)
4. **Descriptive image filenames:** Rename images from `0.JPG`, `f1.JPG` to descriptive names like `senior-portrait-autumn-howell-michigan.jpg` (minor SEO signal)
5. **Blog content strategy:** Continue publishing 1-2 posts/month targeting new long-tail keywords

---

## Troubleshooting

**React app doesn't load:**
- Check browser console for errors
- The imports in `BellaVitaApp.jsx` → `App.jsx` → `data.js` / `components.js` / `styles.js` all use relative paths — make sure all files are in `src/components/app/`
- Try `client:load` instead of `client:only="react"` in `index.astro` if you see hydration issues

**Location pages show unstyled:**
- The PageLayout.astro has all styles inline — they're self-contained and don't depend on any external CSS

**Blog links 404:**
- Blog pages are static HTML in `/public/` — make sure they were copied correctly
- They should be accessible at `/blog.html`, `/blog-senior-photos.html`, etc.

**Sitemap missing pages:**
- Run `npm run build` and check `dist/sitemap-index.xml`
- Blog pages are added via `customPages` in `astro.config.mjs`
- Astro pages are added automatically

**Cloudflare build fails:**
- Make sure **Framework preset** is set to **Astro**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+ (Cloudflare Pages uses 18 by default, which works)
