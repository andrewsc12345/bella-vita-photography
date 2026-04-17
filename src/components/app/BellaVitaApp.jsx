/**
 * BellaVitaApp.jsx — Wrapper that loads the existing React app inside Astro.
 * 
 * This is loaded with client:only="react" so it ONLY runs in the browser.
 * Astro renders the SEO content as static HTML; this component provides interactivity.
 */
import PhotographyWebsite from './App.jsx';

export default function BellaVitaApp() {
  return <PhotographyWebsite />;
}
