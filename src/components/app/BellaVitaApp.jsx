/**
 * BellaVitaApp.jsx — Wrapper that loads the existing React app inside Astro.
 *
 * This is loaded with client:only="react" so it ONLY runs in the browser.
 * Astro renders the SEO content as static HTML; this component provides interactivity.
 */
import PhotographyWebsite from './App.jsx';
import { PORTFOLIO } from './data.jsx';

// Exact files uploaded by the user on 2026-08-25.
// Do not substitute, edit, recolor, crop, retouch, regenerate, or otherwise alter them.
const EXACT_NEW_SENIOR_PHOTOS = [
  {
    id: 129,
    src: '/Media Day JV Lakeland High School White Lake.jpg',
    full: '/Media Day JV Lakeland High School White Lake.jpg',
    title: 'Lakeland JV Pom',
    category: 'Seniors',
    aspect: 'landscape',
  },
  {
    id: 130,
    src: '/Media Day Varsity Lakeland High School White Lake.jpg',
    full: '/Media Day Varsity Lakeland High School White Lake.jpg',
    title: 'Lakeland Varsity Pom Team',
    category: 'Seniors',
    aspect: 'landscape',
  },
  {
    id: 131,
    src: '/Senior Session Howell Barn.jpg',
    full: '/Senior Session Howell Barn.jpg',
    title: 'Golden Hour Barn',
    category: 'Seniors',
    aspect: 'landscape',
  },
  {
    id: 132,
    src: '/Senior Session Howell Sunflower.jpg',
    full: '/Senior Session Howell Sunflower.jpg',
    title: 'Sunflower Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 133,
    src: '/Senior Session Howell Sunflowers.jpg',
    full: '/Senior Session Howell Sunflowers.jpg',
    title: 'Sunflower Field',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 134,
    src: '/Senior Session Howell.jpg',
    full: '/Senior Session Howell.jpg',
    title: 'Golden Hour Senior',
    category: 'Seniors',
    aspect: 'portrait',
  },
];

if (!PORTFOLIO.some((item) => item.id === 129)) {
  const firstSeniorIndex = PORTFOLIO.findIndex((item) => item.category === 'Seniors');
  const insertAt = firstSeniorIndex >= 0 ? firstSeniorIndex : PORTFOLIO.length;
  PORTFOLIO.splice(insertAt, 0, ...EXACT_NEW_SENIOR_PHOTOS);
}

export default function BellaVitaApp() {
  return <PhotographyWebsite />;
}
