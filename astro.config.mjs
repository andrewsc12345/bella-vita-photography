import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bellavitabyrebecca.com',
  integrations: [
    react(),
    sitemap({
      customPages: [
        'https://bellavitabyrebecca.com/blog.html',
        'https://bellavitabyrebecca.com/blog-senior-photos.html',
        'https://bellavitabyrebecca.com/blog-what-to-wear.html',
        'https://bellavitabyrebecca.com/blog-prepare-family.html',
        'https://bellavitabyrebecca.com/blog-when-to-book.html',
        'https://bellavitabyrebecca.com/blog-indoor-vs-outdoor.html',
        'https://bellavitabyrebecca.com/blog-best-time-family-photos.html',
        'https://bellavitabyrebecca.com/blog-senior-athletes.html',
        'https://bellavitabyrebecca.com/blog-choose-photographer.html',
        'https://bellavitabyrebecca.com/blog-mini-sessions.html',
        'https://bellavitabyrebecca.com/blog-fall-color-guide.html',
        'https://bellavitabyrebecca.com/blog-after-your-session.html',
        'https://bellavitabyrebecca.com/blog-gift-guide.html',
        'https://bellavitabyrebecca.com/blog-micro-weddings.html',
      ],
    }),
  ],
  output: 'static',
});
