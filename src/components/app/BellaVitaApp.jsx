/**
 * BellaVitaApp.jsx — Wrapper that loads the existing React app inside Astro.
 *
 * This is loaded with client:only="react" so it ONLY runs in the browser.
 * Astro renders the SEO content as static HTML; this component provides interactivity.
 */
import PhotographyWebsite from './App.jsx';
import { PORTFOLIO } from './data.jsx';

// Exact senior photos uploaded by the user.
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
  {
    id: 135,
    src: '/Senior Session Brighton Flowers.jpg',
    full: '/Senior Session Brighton Flowers.jpg',
    title: 'Brighton Flower Field',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 136,
    src: '/Senior Session Fenton.jpg',
    full: '/Senior Session Fenton.jpg',
    title: 'Fenton Senior Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 137,
    src: '/Senior Session Hartland.jpg',
    full: '/Senior Session Hartland.jpg',
    title: 'Hartland Flower Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 138,
    src: '/Senior Session Holly.jpg',
    full: '/Senior Session Holly.jpg',
    title: 'Holly Senior Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 139,
    src: '/Senior Session Howell swing.jpg',
    full: '/Senior Session Howell swing.jpg',
    title: 'Howell Swing Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 140,
    src: '/Senior Session Milford Central Park.jpg',
    full: '/Senior Session Milford Central Park.jpg',
    title: 'Milford Central Park',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 141,
    src: '/Senior Session Milford Flower Field.jpg',
    full: '/Senior Session Milford Flower Field.jpg',
    title: 'Milford Flower Field',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 142,
    src: '/Senior Session Milford gate.jpg',
    full: '/Senior Session Milford gate.jpg',
    title: 'Milford Garden Gate',
    category: 'Seniors',
    aspect: 'portrait',
  },
  {
    id: 143,
    src: '/Senior Session White Lake flower.jpg',
    full: '/Senior Session White Lake flower.jpg',
    title: 'White Lake Flower Portrait',
    category: 'Seniors',
    aspect: 'portrait',
  },
];

const missingSeniorPhotos = EXACT_NEW_SENIOR_PHOTOS.filter(
  (photo) => !PORTFOLIO.some((item) => item.id === photo.id)
);

if (missingSeniorPhotos.length > 0) {
  const firstSeniorIndex = PORTFOLIO.findIndex((item) => item.category === 'Seniors');
  const insertAt = firstSeniorIndex >= 0 ? firstSeniorIndex : PORTFOLIO.length;
  PORTFOLIO.splice(insertAt, 0, ...missingSeniorPhotos);
}

export default function BellaVitaApp() {
  return <PhotographyWebsite />;
}
