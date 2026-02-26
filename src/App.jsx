import { useState, useEffect, useRef } from "react";

/* ─── PORTFOLIO DATA ─── */
/* REPLACE these URLs with your real photos. For max quality, use full-resolution URLs
   from your image host (Cloudinary, SmugMug, etc.) without width/quality limits.
   "src" = display size, "full" = download/lightbox size */
const PORTFOLIO = [
  { id: 1, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90", full: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2400&q=95", title: "Sunday Afternoon", category: "Families", aspect: "landscape" },
  { id: 2, src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=1200&q=90", full: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=2400&q=95", title: "Chapter One", category: "Seniors", aspect: "portrait" },
  { id: 3, src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=90", full: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=2400&q=95", title: "Golden Together", category: "Families", aspect: "landscape" },
  { id: 4, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90", full: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2400&q=95", title: "Unwritten", category: "Seniors", aspect: "portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=90", full: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=2400&q=95", title: "Our Whole World", category: "Families", aspect: "landscape" },
  { id: 6, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90", full: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2400&q=95", title: "Fearless", category: "Seniors", aspect: "portrait" },
  { id: 7, src: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200&q=90", full: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=2400&q=95", title: "Little Hands", category: "Families", aspect: "portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=90", full: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=2400&q=95", title: "Main Character", category: "Seniors", aspect: "portrait" },
  { id: 9, src: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=90", full: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2400&q=95", title: "Rooted", category: "Families", aspect: "landscape" },
];

const TESTIMONIALS = [
  { name: "The Martinez Family", text: "Rebecca is the kind of person who remembers your kids\u2019 names, asks about your dog, and somehow captures your family in a way that makes you think \u2018oh wow, we actually look like THAT.\u2019 Our Kensington session last fall is framed all over our house now. Obsessed.", event: "Annual Family Session \u00b7 Brighton" },
  { name: "Jennifer, Mom of Emma (\u201925)", text: "My daughter told me she\u2019d hate the whole thing. She ended up not wanting to leave. Rebecca played her favorite music, hyped her up the whole time, and made her feel like a literal supermodel. Every single photo from Island Lake is a keeper.", event: "Senior Portrait Session \u00b7 Lakeland HS" },
  { name: "The Thompsons", text: "We\u2019ve been going back to Rebecca every year since 2017. She\u2019s basically part of our family at this point. Her natural light style makes every session feel effortless, and the photos somehow keep getting better every single year.", event: "Family Sessions \u00b7 Howell" },
];

const SERVICES = [
  { name: "Senior Portraits", description: "90 minutes chasing golden hour at up to two hand-picked locations. Bring up to 3 outfits. Each session is designed around YOUR style and personality. Includes 50+ edited images, your own private gallery, and social media crops.", price: "Starting at $450", icon: "\u2727" },
  { name: "Family Sessions", description: "An hour on location at your favorite spot using nothing but gorgeous natural light. I\u2019ll get your crew laughing, playing, and just being yourselves. Includes wardrobe help, 40+ edited images, and a private gallery.", price: "Starting at $375", icon: "\u2662" },
  { name: "Mini Sessions", description: "25-minute seasonal sessions perfect for fall photos, holiday cards, or just because your kids are cute. I pick the location, you show up looking amazing. 15+ edited images. Fair warning: these book out ridiculously fast.", price: "Starting at $195", icon: "\u25cb" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "For senior portraits, 3\u20136 months ahead is ideal. Family sessions usually book 1\u20133 months out. Mini sessions sell out within DAYS. Get on my email list for first dibs." },
  { q: "How many outfit changes can I bring?", a: "Seniors get up to 3 outfit changes! I send a detailed style guide with tips on colors and textures. I\u2019m also happy to FaceTime and help you pick. For families, one coordinated look usually works best." },
  { q: "What happens if it rains?", a: "Welcome to Michigan! I\u2019ll text you 24 hours before and we\u2019ll reschedule \u2014 no extra charge. A little overcast? Chef\u2019s kiss for photos." },
  { q: "Where do sessions take place?", a: "Kensington Metropark, Island Lake, downtown Brighton and Milford, Maybury State Park. But some of my favorites have been in backyards and living rooms." },
  { q: "When will I receive my photos?", a: "Your private gallery will be ready within 2\u20133 weeks. You can view, download, and mark favorites. Print orders ship within 7\u201310 business days." },
  { q: "I\u2019m awkward in front of cameras. Help?", a: "You and 90% of my clients! I crack jokes, play music, and tell you to just hang out with your people. By the end, clients always say \u2018wait, that was actually fun?\u2019" },
];

const GOOGLE_REVIEWS = [
  { name: "Sarah M.", stars: 5, text: "If you\u2019re on the fence \u2014 just book her. My daughter came home glowing. The photos are unreal.", date: "2 months ago" },
  { name: "The Nguyen Family", stars: 5, text: "Tried two other photographers before Rebecca. Night and day difference. Her natural light style is SO much better than a studio.", date: "3 months ago" },
  { name: "Amanda K.", stars: 5, text: "The whole experience is incredible start to finish. She sends a style guide, texts about outfits, remembers every detail.", date: "1 month ago" },
  { name: "David & Lisa T.", stars: 5, text: "She photographed our family of 7 including a toddler who refused to sit still and a teenager who refused to smile. Amazing shots of BOTH.", date: "4 months ago" },
];

const PRINT_PRODUCTS = [
  { name: "Fine Art Prints", description: "Museum-quality, archival paper that won\u2019t fade.", icon: "\u25a1", price: "From $35" },
  { name: "Canvas Wraps", description: "Rich, textured, ready to hang. Every client who orders one orders a second.", icon: "\u25c7", price: "From $175" },
  { name: "Heirloom Albums", description: "Lay-flat, leather-bound, thick luxurious pages. I design each one by hand.", icon: "\u25cb", price: "From $450" },
  { name: "Grad Announcements", description: "Custom-designed with your senior\u2019s best portraits. Premium cardstock.", icon: "\u2727", price: "From $125" },
];

const DEFAULT_CLIENT_GALLERIES = [
  {
    id: "g1", clientName: "Emma Richardson \u2013 Lakeland HS \u201926", sessionType: "Senior Portraits", date: "2025-10-15", password: "emma2026",
    coverImage: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=85",
    images: [
      { src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=1200&q=90", full: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=2400&q=95", title: "Golden Hour" },
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90", full: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2400&q=95", title: "Sunlit" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90", full: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2400&q=95", title: "Confident" },
      { src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=90", full: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=2400&q=95", title: "Dreamer" },
      { src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=1200&q=90", full: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=2400&q=95", title: "Wildflower" },
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=90", full: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2400&q=95", title: "Downtown" },
    ]
  },
  {
    id: "g2", clientName: "The Martinez Family", sessionType: "Family Session", date: "2025-09-28", password: "martinez2025",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",
    images: [
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90", full: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2400&q=95", title: "All Together" },
      { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=90", full: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=2400&q=95", title: "Golden Light" },
      { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=90", full: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=2400&q=95", title: "Our World" },
      { src: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=90", full: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2400&q=95", title: "Rooted" },
      { src: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200&q=90", full: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=2400&q=95", title: "Tiny Hands" },
    ]
  },
  {
    id: "g3", clientName: "Jake Thompson", sessionType: "Senior Portraits", date: "2025-11-02", password: "jake2026",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=85",
    images: [
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=90", full: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2400&q=95", title: "Urban Cool" },
      { src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=90", full: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=2400&q=95", title: "Natural" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90", full: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2400&q=95", title: "Light Study" },
    ]
  }
];

/* ─── UTILITY HOOKS ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── PROGRESSIVE IMAGE (blur-up) ─── */
function ProgressiveImage({ src, alt, style = {}, className = "", onClick, onMouseEnter, onMouseLeave, tabIndex, role, onKeyDown, "aria-label": ariaLabel }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const tinyUrl = src.replace(/w=\d+/, "w=20").replace(/q=\d+/, "q=10");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.unobserve(entry.target); }
    }, { rootMargin: "200px" });
    if (containerRef.current) observer.observe(containerRef.current);
    // Fallback: if observer hasn't fired in 1.5s, load anyway (iframe/preview environments)
    const fallback = setTimeout(() => setInView(true), 1500);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", overflow: "hidden", ...style }} className={className}
      onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      tabIndex={tabIndex} role={role} onKeyDown={onKeyDown} aria-label={ariaLabel}>
      {/* Blurred tiny placeholder - always visible */}
      <img src={tinyUrl} alt="" aria-hidden="true" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        filter: "blur(20px)", transform: "scale(1.1)",
        opacity: loaded ? 0 : 1, transition: "opacity 0.6s ease",
      }} />
      {/* Full image - loads when in viewport */}
      {inView && (
        <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          opacity: loaded ? 1 : 0, transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
        }} />
      )}
    </div>
  );
}

/* ─── DOWNLOAD & SHARE HELPERS ─── */
async function downloadImage(url, filename) {
  try {
    const r = await fetch(url, { mode: "cors" });
    const b = await r.blob();
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u; a.download = filename || "bella-vita-photo.jpg";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(u);
  } catch { window.open(url, "_blank"); }
}

async function shareImage(title, url) {
  if (navigator.share) {
    try { await navigator.share({ title: "Bella Vita Photography \u2014 " + title, url }); } catch {}
  } else {
    try { await navigator.clipboard.writeText(url); alert("Link copied to clipboard!"); }
    catch { window.open(url, "_blank"); }
  }
}

/* ─── LIGHTBOX ─── */
function Lightbox({ image, onClose, onDownload, onShare, onPrev, onNext, hasPrev, hasNext, currentIndex, totalCount }) {
  const touchStartX = useRef(null);
  useEffect(() => {
    if (!image) return;
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onPrev, onNext, hasPrev, hasNext, image]);
  if (!image) return null;
  const fullUrl = image.full || image.src;
  const arrowBtnStyle = (side) => ({
    position: "absolute", top: "50%", [side]: "16px", transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.85)", border: "none", borderRadius: "50%",
    width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "1.1rem", color: "var(--text)",
    backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease", opacity: 0.7, zIndex: 2,
  });
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0 && onNext && hasNext) onNext();
      if (diff < 0 && onPrev && hasPrev) onPrev();
    }
    touchStartX.current = null;
  };
  return (
    <div onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{
      position: "fixed", inset: 0, zIndex: 9999, background: "rgba(255,255,255,0.96)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "zoom-out", animation: "bvFadeIn 0.35s ease", touchAction: "pan-y",
    }}>
      <img key={fullUrl} src={fullUrl} alt={image.title} style={{
        maxWidth: "85vw", maxHeight: "72vh", objectFit: "contain",
        borderRadius: "2px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        animation: "bvScaleIn 0.4s cubic-bezier(0.22,1,0.36,1)",
      }} />
      {onPrev && hasPrev && (
        <button className="bv-lightbox-arrows" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous photo" style={arrowBtnStyle("left")}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}>{"\u2039"}</button>
      )}
      {onNext && hasNext && (
        <button className="bv-lightbox-arrows" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next photo" style={arrowBtnStyle("right")}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}>{"\u203a"}</button>
      )}
      <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "90%", maxWidth: "400px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text)" }}>{image.title}</div>
        {image.category && <div style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.4, marginTop: "4px", color: "var(--text)" }}>{image.category}</div>}
        {typeof currentIndex === "number" && totalCount > 1 && (
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--muted)", marginTop: "5px" }}>{currentIndex + 1} of {totalCount}</div>
        )}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "12px", flexWrap: "wrap" }}>
          <button onClick={(e) => { e.stopPropagation(); onDownload && onDownload(fullUrl, image.title); }} className="bv-btn-primary" style={{ padding: "8px 18px", fontSize: "0.6rem" }}>{"\u2193"} Download</button>
          <button onClick={(e) => { e.stopPropagation(); onShare && onShare(image.title, fullUrl); }} className="bv-btn-outline" style={{ padding: "8px 18px", fontSize: "0.6rem" }}>Share</button>
        </div>
      </div>
      <div style={{ position: "absolute", top: "16px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        {(onPrev || onNext) && <div className="bv-lightbox-arrows" style={{ fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", opacity: 0.3 }}>{"\u2190"} {"\u2192"} arrow keys</div>}
      </div>
      <button onClick={onClose} aria-label="Close" style={{
        position: "absolute", top: "14px", right: "18px", background: "none", border: "none",
        color: "var(--text)", fontSize: "1.5rem", cursor: "pointer", opacity: 0.35, fontWeight: 300,
        WebkitTapHighlightColor: "transparent", padding: "8px",
      }}>{"\u2715"}</button>
    </div>
  );
}

/* ─── CLIENT GALLERY ─── */
function ClientGalleryPage({ galleries, onBack }) {
  const [passwordInput, setPasswordInput] = useState("");
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [unlockedGallery, setUnlockedGallery] = useState(null);
  const [error, setError] = useState("");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [favorited, setFavorited] = useState({});
  const [downloading, setDownloading] = useState(null);

  useEffect(() => { document.body.style.overflow = lightboxImg ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [lightboxImg]);

  const handleUnlock = () => {
    if (!selectedGallery) return;
    if (passwordInput === selectedGallery.password) { setUnlockedGallery(selectedGallery); setError(""); setPasswordInput(""); }
    else { setError("Incorrect password. Please try again or contact Rebecca."); setTimeout(() => setError(""), 3000); }
  };
  const toggleFavorite = (idx) => setFavorited(prev => ({ ...prev, [idx]: !prev[idx] }));
  const favCount = Object.values(favorited).filter(Boolean).length;

  const handleDownloadSingle = async (url, title, idx) => {
    setDownloading(idx);
    await downloadImage(url, "bella-vita-" + title.toLowerCase().replace(/\s+/g, "-") + ".jpg");
    setDownloading(null);
  };
  const handleDownloadFavorites = async () => {
    const favs = unlockedGallery.images.filter((_, i) => favorited[i]);
    for (const img of favs) {
      await downloadImage(img.full || img.src, "bella-vita-" + img.title.toLowerCase().replace(/\s+/g, "-") + ".jpg");
      await new Promise(r => setTimeout(r, 500));
    }
  };

  /* Unlocked gallery viewer */
  if (unlockedGallery) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}>
        <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)}
          onDownload={(url, t) => downloadImage(url, "bella-vita-" + t.toLowerCase().replace(/\s+/g, "-") + ".jpg")}
          onShare={shareImage}
          onPrev={() => { const idx = unlockedGallery.images.indexOf(lightboxImg); if (idx > 0) setLightboxImg(unlockedGallery.images[idx - 1]); }}
          onNext={() => { const idx = unlockedGallery.images.indexOf(lightboxImg); if (idx < unlockedGallery.images.length - 1) setLightboxImg(unlockedGallery.images[idx + 1]); }}
          hasPrev={unlockedGallery.images.indexOf(lightboxImg) > 0}
          hasNext={unlockedGallery.images.indexOf(lightboxImg) < unlockedGallery.images.length - 1}
          currentIndex={unlockedGallery.images.indexOf(lightboxImg)}
          totalCount={unlockedGallery.images.length}
        />
        <div style={{ position: "sticky", top: 0, zIndex: 100, padding: "18px 48px", background: "rgba(252,250,246,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => { setUnlockedGallery(null); setSelectedGallery(null); setFavorited({}); }} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400 }}>{unlockedGallery.clientName}</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: "2px" }}>{unlockedGallery.sessionType} {"\u00b7"} {new Date(unlockedGallery.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
          </div>
          <div style={{ fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em" }}>{favCount > 0 ? "\u2665 " + favCount + " favorited" : unlockedGallery.images.length + " photos"}</div>
        </div>
        <div style={{ padding: "20px 48px 0", maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>Click any photo to view full size. Use the download button to save individual photos, or favorite your picks and download them all at once.</p>
          <button onClick={async () => { for (const img of unlockedGallery.images) { await downloadImage(img.full || img.src, "bella-vita-" + img.title.toLowerCase().replace(/\s+/g, "-") + ".jpg"); await new Promise(r => setTimeout(r, 500)); } }} className="bv-btn-outline" style={{ marginTop: "14px", padding: "9px 24px", fontSize: "0.65rem" }}>{"\u2193"} Download All Photos</button>
        </div>
        <div style={{ padding: "32px 48px 120px", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {unlockedGallery.images.map((img, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "3px", overflow: "hidden", aspectRatio: "4/5", background: "#f0ece4", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
                <ProgressiveImage src={img.src} alt={img.title} onClick={() => setLightboxImg(img)}
                  style={{ width: "100%", height: "100%", cursor: "zoom-in" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "48px 16px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)", pointerEvents: "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "#fff" }}>{img.title}</div>
                </div>
                <div style={{ position: "absolute", bottom: "12px", right: "12px", display: "flex", gap: "8px" }}>
                  <button onClick={(e) => { e.stopPropagation(); handleDownloadSingle(img.full || img.src, img.title, i); }}
                    style={{ background: "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", color: "#2E2A25", backdropFilter: "blur(8px)", transition: "all 0.3s ease", opacity: downloading === i ? 0.5 : 0.8 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0.8"}>{downloading === i ? "\u23f3" : "\u2193"}</button>
                  <button onClick={(e) => { e.stopPropagation(); shareImage(img.title, img.full || img.src); }}
                    style={{ background: "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "#2E2A25", backdropFilter: "blur(8px)", transition: "all 0.3s ease", opacity: 0.8 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0.8"}>{"\u2197"}</button>
                  <button onClick={(e) => { e.stopPropagation(); toggleFavorite(i); }}
                    style={{ background: favorited[i] ? "#B8926A" : "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: favorited[i] ? "#fff" : "#B8926A", fontSize: "1rem", backdropFilter: "blur(8px)", transition: "all 0.3s ease" }}>{favorited[i] ? "\u2665" : "\u2661"}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {favCount > 0 && (
          <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "16px 48px", background: "rgba(252,250,246,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid #E8E2D8", display: "flex", justifyContent: "space-between", alignItems: "center", animation: "bvFadeIn 0.3s ease", zIndex: 100 }}>
            <div style={{ fontSize: "0.82rem", color: "#9E978D" }}><span style={{ color: "#B8926A", fontWeight: 500 }}>{favCount}</span> favorite{favCount !== 1 ? "s" : ""} selected</div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={handleDownloadFavorites} className="bv-btn-outline" style={{ padding: "10px 24px" }}>{"\u2193"} Download Favorites</button>
              <button onClick={() => { const fl = unlockedGallery.images.filter((_, i) => favorited[i]).map(img => img.title).join(", "); alert("Your favorites have been saved!\n\nSelected: " + fl + "\n\nRebecca will receive your selections and reach out about your album."); }} className="bv-btn-primary" style={{ padding: "10px 24px" }}>Submit Favorites</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* Password entry */
  if (selectedGallery) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px" }}>
        <button onClick={() => { setSelectedGallery(null); setPasswordInput(""); setError(""); }} style={{ position: "absolute", top: "32px", left: "48px", background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back</button>
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <div style={{ width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto 28px", background: "url(" + selectedGallery.coverImage + ") center/cover", border: "3px solid var(--bg)", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }} />
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px" }}>Private Gallery</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, marginBottom: "8px" }}>{selectedGallery.clientName}</h2>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: "36px" }}>{selectedGallery.sessionType} {"\u00b7"} {selectedGallery.images.length} photos</p>
          <input type="password" placeholder="Enter your gallery password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleUnlock()}
            className="bv-input" style={{ textAlign: "center", letterSpacing: "0.08em", borderColor: error ? "#d4685a" : undefined }} />
          {error && <div style={{ marginTop: "10px", fontSize: "0.78rem", color: "#d4685a", animation: "bvFadeIn 0.3s ease" }}>{error}</div>}
          <button onClick={handleUnlock} className="bv-btn-primary" style={{ marginTop: "20px", width: "100%" }}>View Gallery</button>
          <p style={{ marginTop: "28px", fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.7, opacity: 0.6 }}>Your password was in your session delivery email.<br />Can't find it? Email <a href="mailto:rebecca.henson@yahoo.com" style={{ color: "var(--accent)", textDecoration: "none" }}>rebecca.henson@yahoo.com</a></p>
        </div>
      </div>
    );
  }

  /* Gallery listing */
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}>
      <div style={{ padding: "32px 48px" }}><button onClick={onBack} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back to Site</button></div>
      <div style={{ textAlign: "center", padding: "40px 48px 64px" }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px" }}>Password Protected</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, marginBottom: "16px" }}>Client Galleries</h1>
        <p style={{ color: "var(--muted)", fontSize: "0.88rem", fontWeight: 300, maxWidth: "460px", margin: "0 auto", lineHeight: 1.8 }}>Find your session below and enter the password from your delivery email to view, download, and favorite your photos.</p>
      </div>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 48px 100px", display: "grid", gap: "16px" }}>
        {galleries.map(gallery => (
          <div key={gallery.id} onClick={() => setSelectedGallery(gallery)} className="bv-gallery-card"
            style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "24px", alignItems: "center", padding: "20px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "3px", cursor: "pointer", transition: "all 0.35s ease", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#B8926A"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.03)"; }}>
            <div style={{ width: "110px", height: "80px", borderRadius: "2px", overflow: "hidden", backgroundImage: "url(" + gallery.coverImage + ")", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, marginBottom: "4px" }}>{gallery.clientName}</h3>
              <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.08em" }}>{gallery.sessionType} {"\u00b7"} {new Date(gallery.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} {"\u00b7"} {gallery.images.length} photos</div>
            </div>
            <div className="bv-gallery-arrow" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>View {"\u2192"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ADMIN PANEL ─── */
function AdminPanel({ galleries, setGalleries, onClose }) {
  const [authed, setAuthed] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminError, setAdminError] = useState("");
  const [newGallery, setNewGallery] = useState({ clientName: "", sessionType: "Senior Portraits", date: "", password: "", images: "" });
  const ADMIN_PASSWORD = "bellavita2025";
  const inputStyle = { width: "100%", padding: "11px 14px", background: "#FFFFFF", border: "1px solid #E8E2D8", borderRadius: "3px", color: "#2E2A25", fontFamily: "var(--font-body)", fontSize: "0.85rem", outline: "none", marginTop: "6px" };
  const labelStyle = { fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9E978D", display: "block", marginTop: "14px" };

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "32px", left: "48px", background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back</button>
        <div style={{ textAlign: "center", maxWidth: "380px" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px" }}>Admin Access</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, marginBottom: "28px" }}>Gallery Manager</h2>
          <input type="password" placeholder="Admin password" value={adminPw} onChange={e => setAdminPw(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { if (adminPw === ADMIN_PASSWORD) setAuthed(true); else { setAdminError("Incorrect password"); setTimeout(() => setAdminError(""), 2500); } } }}
            style={{ ...inputStyle, textAlign: "center", fontSize: "0.95rem", letterSpacing: "0.08em" }} />
          {adminError && <div style={{ marginTop: "10px", fontSize: "0.78rem", color: "#d4685a" }}>{adminError}</div>}
        </div>
      </div>
    );
  }

  const handleAddGallery = () => {
    if (!newGallery.clientName || !newGallery.password || !newGallery.date) return;
    const imageList = newGallery.images.split("\n").map(s => s.trim()).filter(Boolean).map((url, i) => ({ src: url, full: url, title: "Photo " + (i + 1) }));
    const gallery = { id: "g" + Date.now(), clientName: newGallery.clientName, sessionType: newGallery.sessionType, date: newGallery.date, password: newGallery.password, coverImage: imageList[0]?.src || "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=85", images: imageList.length > 0 ? imageList : [{ src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=1200&q=90", full: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=2400&q=95", title: "Sample" }] };
    setGalleries(prev => [...prev, gallery]);
    setNewGallery({ clientName: "", sessionType: "Senior Portraits", date: "", password: "", images: "" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", padding: "32px 48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back to Site</button>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400 }}>Gallery Manager</div>
        <div style={{ fontSize: "0.65rem", color: "var(--muted)" }}>{galleries.length} galleries</div>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="bv-admin-grid">
        <div style={{ padding: "28px", border: "1px solid #E8E2D8", borderRadius: "3px", background: "#FFFFFF" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, marginBottom: "6px" }}>Create New Gallery</h3>
          <p style={{ fontSize: "0.72rem", color: "#9E978D", marginBottom: "4px" }}>Upload URLs to your full-resolution images for maximum download quality.</p>
          <label style={labelStyle}>Client Name</label>
          <input style={inputStyle} placeholder="e.g. Emma Richardson" value={newGallery.clientName} onChange={e => setNewGallery({ ...newGallery, clientName: e.target.value })} />
          <label style={labelStyle}>Session Type</label>
          <select value={newGallery.sessionType} onChange={e => setNewGallery({ ...newGallery, sessionType: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="Senior Portraits">Senior Portraits</option>
            <option value="Family Session">Family Session</option>
            <option value="Mini Session">Mini Session</option>
          </select>
          <label style={labelStyle}>Session Date</label>
          <input style={inputStyle} type="date" value={newGallery.date} onChange={e => setNewGallery({ ...newGallery, date: e.target.value })} />
          <label style={labelStyle}>Client Password</label>
          <input style={inputStyle} placeholder="Password for the client" value={newGallery.password} onChange={e => setNewGallery({ ...newGallery, password: e.target.value })} />
          <label style={labelStyle}>Image URLs (one per line, full resolution)</label>
          <textarea style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }} placeholder={"https://your-host.com/photo1.jpg\nhttps://your-host.com/photo2.jpg"} value={newGallery.images} onChange={e => setNewGallery({ ...newGallery, images: e.target.value })} />
          <button onClick={handleAddGallery} className="bv-btn-primary" style={{ marginTop: "20px", width: "100%", opacity: (!newGallery.clientName || !newGallery.password || !newGallery.date) ? 0.4 : 1 }}>Create Gallery</button>
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, marginBottom: "20px" }}>Active Galleries</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {galleries.map(g => (
              <div key={g.id} style={{ padding: "14px 18px", border: "1px solid #E8E2D8", borderRadius: "3px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFFFFF" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>{g.clientName}</div>
                  <div style={{ fontSize: "0.65rem", color: "#9E978D", marginTop: "2px" }}>{g.sessionType} {"\u00b7"} {g.images.length} photos {"\u00b7"} pw: <span style={{ color: "#B8926A" }}>{g.password}</span></div>
                </div>
                <button onClick={() => setGalleries(prev => prev.filter(x => x.id !== g.id))} style={{ background: "none", border: "1px solid #d4685a44", color: "#d4685a", padding: "5px 14px", borderRadius: "2px", cursor: "pointer", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.target.style.background = "#d4685a"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#d4685a"; }}>Delete</button>
              </div>
            ))}
            {galleries.length === 0 && <div style={{ padding: "28px", textAlign: "center", color: "#9E978D", fontSize: "0.82rem" }}>No galleries yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN WEBSITE
   ═══════════════════════════════════════════════════════════════ */
export default function PhotographyWebsite() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", type: "Senior Portraits" });
  const [formSent, setFormSent] = useState(false);
  const [currentView, setCurrentView] = useState("main");
  const [clientGalleries, setClientGalleries] = useState(DEFAULT_CLIENT_GALLERIES);
  const [showStyleGuide, setShowStyleGuide] = useState(false);
  const [styleGuideEmail, setStyleGuideEmail] = useState("");
  const [styleGuideSent, setStyleGuideSent] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [giftAmount, setGiftAmount] = useState("450");
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [formErrors, setFormErrors] = useState({});
  const [filterAnimating, setFilterAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => { setTimeout(() => setHeroLoaded(true), 150); }, []);
  useEffect(() => { document.body.style.overflow = (lightboxImage || menuOpen) ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [lightboxImage, menuOpen]);
  useEffect(() => { if (popupDismissed || styleGuideSent) return; const t = setTimeout(() => setShowStyleGuide(true), 15000); return () => clearTimeout(t); }, [popupDismissed, styleGuideSent]);
  useEffect(() => { const h = () => { setScrollY(window.scrollY); const doc = document.documentElement; setScrollProgress((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100); }; window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);

  /* Preload hero image for instant render */
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload"; link.as = "image";
    link.href = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85";
    document.head.appendChild(link);
    return () => { if (link.parentNode) link.parentNode.removeChild(link); };
  }, []);

  /* URL hash tracking - updates browser URL as user scrolls to sections */
  useEffect(() => {
    const sections = ["hero", "portfolio", "about", "services", "products", "faq", "contact"];
    let ticking = false;
    const updateHash = () => {
      ticking = false;
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      const newHash = current === "hero" ? "" : "#" + current;
      if (window.location.hash !== newHash && (newHash || window.location.hash)) {
        window.history.replaceState(null, "", newHash || window.location.pathname);
      }
      setActiveSection(current);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(updateHash); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    // On initial load, scroll to hash if present
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Inject JSON-LD structured data for SEO */
  useEffect(() => {
    if (document.querySelector('script[data-bv-jsonld]')) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-bv-jsonld", "true");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://bella-vita-photography.vercel.app",
      "name": "Bella Vita Photography",
      "description": "Natural light portrait photography for seniors and families in Livingston and Oakland County, Michigan. Owned by Rebecca Henson, est. 2009.",
      "url": "https://bella-vita-photography.vercel.app",
      "telephone": "",
      "email": "rebecca.henson@yahoo.com",
      "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Howell",
        "addressRegion": "MI",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.6073,
        "longitude": -83.9294
      },
      "areaServed": [
        { "@type": "County", "name": "Livingston County, Michigan" },
        { "@type": "County", "name": "Oakland County, Michigan" }
      ],
      "priceRange": "$195 - $450+",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "founder": {
        "@type": "Person",
        "name": "Rebecca Henson",
        "jobTitle": "Photographer & Owner"
      },
      "foundingDate": "2009",
      "sameAs": [
        "https://www.instagram.com/bellavitaphotography2/",
        "https://www.facebook.com/bellavitaphotography2"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Photography Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Senior Portraits", "description": "90-minute on-location senior portrait session with 50+ edited images" }, "price": "450", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Sessions", "description": "60-minute natural light family session with 40+ edited images" }, "price": "375", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini Sessions", "description": "25-minute seasonal mini session with 15+ edited images" }, "price": "195", "priceCurrency": "USD" }
        ]
      }
    });
    document.head.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, []);

  useEffect(() => {
    if (!document.querySelector('link[href*="Playfair+Display"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@200;300;400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const categories = ["All", "Seniors", "Families"];
  const filtered = activeFilter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === activeFilter);
  const scrollTo = (id) => { setMenuOpen(false); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const switchFilter = (cat) => { if (cat === activeFilter) return; setFilterAnimating(true); setTimeout(() => { setActiveFilter(cat); setFilterAnimating(false); }, 300); };
  const handleSubmit = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!emailRegex.test(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.message.trim()) errors.message = "Tell me about your vision";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setFormSent(true); setTimeout(() => setFormSent(false), 4000); setFormData({ name: "", email: "", message: "", type: "Senior Portraits" }); setFormErrors({});
  };
  const handleStyleGuideSubmit = (fromPopup) => { if (!emailRegex.test(styleGuideEmail)) return; setStyleGuideSent(true); setStyleGuideEmail(""); if (fromPopup) { setShowStyleGuide(false); setPopupDismissed(true); } };

  if (currentView === "client-gallery") return <ClientGalleryPage galleries={clientGalleries} onBack={() => setCurrentView("main")} />;
  if (currentView === "admin") return <AdminPanel galleries={clientGalleries} setGalleries={setClientGalleries} onClose={() => setCurrentView("main")} />;

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", fontFamily: "var(--font-body)", overflowX: "hidden" }}>
      {/* Scroll progress bar */}
      <div className="bv-scroll-progress" style={{ width: scrollProgress + "%" }} />
      {/* Skip to content (a11y) */}
      <a href="#portfolio" className="bv-skip-link">Skip to content</a>
      <style>{`
        :root { --bg:#FCFAF6;--bg-warm:#F7F3ED;--card-bg:#FFFFFF;--text:#2E2A25;--text-light:#5A554E;--muted:#9E978D;--accent:#B8926A;--accent-light:#D4B896;--accent-hover:#A07D56;--border:#E8E2D8;--border-light:#F0ECE4;--font-display:'Playfair Display',Georgia,serif;--font-body:'Outfit',system-ui,sans-serif; }
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}::selection{background:#B8926A33;color:var(--text)}
        @keyframes bvFadeIn{from{opacity:0}to{opacity:1}}
        @keyframes bvScaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
        @keyframes bvSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bvMenuSlide{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}
        @keyframes bvCountUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bvPulse{0%,100%{opacity:1}50%{opacity:0.5}}
        @keyframes bvShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}

        /* Skip to content (a11y) */
        .bv-skip-link{position:absolute;top:-100px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:12px 24px;border-radius:0 0 6px 6px;z-index:99999;font-size:0.75rem;text-decoration:none;transition:top 0.3s ease}.bv-skip-link:focus{top:0}

        /* Scroll progress bar */
        .bv-scroll-progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:99999;transition:width 0.1s linear;pointer-events:none}

        /* Focus visible ring */
        *:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:2px}
        button:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
        input:focus-visible,textarea:focus-visible,select:focus-visible{outline:none;border-color:var(--accent)!important;box-shadow:0 0 0 3px rgba(184,146,106,0.15)}

        /* Filter transition */
        .bv-filter-grid{transition:opacity 0.4s ease}.bv-filter-grid.bv-filtering{opacity:0.3;transform:scale(0.99)}

        /* Masonry stagger */
        .bv-masonry-tall{grid-row:span 2}

        /* Service card tilt */
        .bv-service-card{transform-style:preserve-3d;perspective:800px}

        .bv-nav-link{position:relative;cursor:pointer;transition:color 0.3s ease}.bv-nav-link:hover{color:var(--accent)!important}.bv-nav-link::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--accent);transition:width 0.4s cubic-bezier(0.22,1,0.36,1)}.bv-nav-link:hover::after{width:100%}
        .bv-nav-link.bv-active{color:var(--accent)!important}.bv-nav-link.bv-active::after{width:100%}

        .bv-gallery-img{cursor:zoom-in;transition:transform 0.6s cubic-bezier(0.22,1,0.36,1)}.bv-gallery-img:hover{transform:scale(1.04)}
        .bv-gallery-card-wrap{overflow:hidden;position:relative;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:box-shadow 0.4s ease}.bv-gallery-card-wrap:hover{box-shadow:0 4px 20px rgba(0,0,0,0.06)}
        .bv-gallery-card-wrap .bv-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 40%);opacity:0;transition:opacity 0.5s ease;pointer-events:none}.bv-gallery-card-wrap:hover .bv-overlay{opacity:1}
        .bv-gallery-card-wrap .bv-img-actions{position:absolute;bottom:14px;right:14px;display:flex;gap:8px;opacity:0;transform:translateY(8px);transition:all 0.4s ease;z-index:2}.bv-gallery-card-wrap:hover .bv-img-actions{opacity:1;transform:translateY(0)}

        .bv-filter-btn{background:none;border:none;color:var(--muted);font-family:var(--font-body);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;padding:8px 18px;transition:all 0.35s ease;position:relative;font-weight:400}.bv-filter-btn.active,.bv-filter-btn:hover{color:var(--accent)}.bv-filter-btn.active::after{content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:18px;height:1.5px;background:var(--accent);border-radius:1px}
        .bv-input{background:var(--card-bg);border:1px solid var(--border);color:var(--text);font-family:var(--font-body);font-size:16px;padding:13px 16px;width:100%;outline:none;transition:border-color 0.3s ease;font-weight:300;border-radius:3px}.bv-input:focus{border-color:var(--accent)}.bv-input::placeholder{color:var(--muted);opacity:0.6}
        .bv-btn-primary{display:inline-block;padding:14px 40px;background:var(--accent);color:#fff;font-family:var(--font-body);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;border:none;border-radius:3px;transition:all 0.35s ease;font-weight:400;-webkit-tap-highlight-color:transparent}.bv-btn-primary:hover{background:var(--accent-hover);transform:translateY(-1px);box-shadow:0 4px 16px rgba(184,146,106,0.25)}.bv-btn-primary:active{transform:scale(0.97)}
        .bv-btn-outline{display:inline-block;padding:14px 40px;border:1px solid var(--accent);color:var(--accent);background:transparent;font-family:var(--font-body);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;border-radius:3px;transition:all 0.35s ease;font-weight:400;-webkit-tap-highlight-color:transparent}.bv-btn-outline:hover{background:var(--accent);color:#fff}.bv-btn-outline:active{transform:scale(0.97)}
        .bv-service-card{border:1px solid var(--border);padding:40px 36px;border-radius:3px;transition:all 0.4s ease;background:var(--card-bg)}.bv-service-card:hover{border-color:var(--accent-light);box-shadow:0 4px 20px rgba(0,0,0,0.06);transform:translateY(-3px)}

        .mobile-menu{position:fixed;inset:0;background:var(--bg);z-index:9998;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;animation:bvFadeIn 0.3s ease}
        .mobile-menu span{animation:bvSlideIn 0.4s cubic-bezier(0.22,1,0.36,1) both}
        .mobile-menu span:nth-child(1){animation-delay:0.05s}.mobile-menu span:nth-child(2){animation-delay:0.1s}.mobile-menu span:nth-child(3){animation-delay:0.15s}.mobile-menu span:nth-child(4){animation-delay:0.2s}.mobile-menu span:nth-child(5){animation-delay:0.25s}.mobile-menu span:nth-child(6){animation-delay:0.3s}.mobile-menu span:nth-child(7){animation-delay:0.35s}

        .bv-sticky-cta{display:none}

        /* ─── TOUCH DEVICES: always show image actions ─── */
        @media(hover:none){
          .bv-gallery-card-wrap .bv-img-actions{opacity:1!important;transform:translateY(0)!important}
          .bv-gallery-card-wrap .bv-overlay{opacity:1!important}
        }

        /* ─── MOBILE ─── */
        @media(max-width:768px){
          .bv-desktop-nav{display:none!important}
          .bv-mobile-btn{display:block!important}
          .bv-about-grid{grid-template-columns:1fr!important;gap:40px!important}
          .bv-contact-grid{grid-template-columns:1fr!important}
          .bv-gift-grid{grid-template-columns:1fr!important;gap:32px!important}
          .bv-avail-banner{flex-direction:column!important;text-align:center}
          .bv-gallery-card{grid-template-columns:80px 1fr!important}
          .bv-gallery-card .bv-gallery-arrow{display:none!important}
          .bv-admin-grid{grid-template-columns:1fr!important}
          .bv-hero-banner{margin-left:12px!important;margin-right:12px!important}
          .bv-section{padding-left:20px!important;padding-right:20px!important}
          .bv-nav{padding-left:20px!important;padding-right:20px!important}
          .bv-grid-portfolio{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))!important}
          .bv-grid-services{grid-template-columns:1fr!important}
          .bv-grid-products{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))!important}
          .bv-grid-reviews{grid-template-columns:1fr 1fr!important}
          .bv-grid-testimonials{grid-template-columns:1fr!important}
          .bv-testimonials-scroll{display:flex!important;overflow-x:auto;scroll-snap-type:x mandatory;gap:16px;padding-bottom:16px;-webkit-overflow-scrolling:touch}.bv-testimonials-scroll>div{min-width:85vw;scroll-snap-align:start;flex-shrink:0}
          .bv-process-grid{grid-template-columns:1fr!important;gap:32px!important}
          .bv-process-line{display:none!important}
          .bv-footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}
          .bv-service-card{padding:28px 22px!important}
          .bv-hero-top{padding-top:100px!important;padding-bottom:24px!important}
          .bv-hero-bottom{padding:28px 20px 40px!important}
          .bv-sticky-cta{display:flex!important}
          .bv-back-to-top{bottom:76px!important}
          .bv-lightbox-arrows{display:none!important}
        }
        @media(max-width:480px){
          .bv-grid-reviews{grid-template-columns:1fr!important}
          .bv-hero-top{padding-top:88px!important}
          .bv-footer-grid{grid-template-columns:1fr!important}
        }
        @media(min-width:769px){.bv-mobile-btn{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation" className="bv-nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrollY > 50 ? "rgba(252,250,246,0.95)" : "transparent", backdropFilter: scrollY > 50 ? "blur(16px)" : "none", borderBottom: scrollY > 50 ? "1px solid var(--border-light)" : "1px solid transparent", transition: "all 0.4s ease" }}>
        <div onClick={() => scrollTo("hero")} style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, letterSpacing: "0.04em", cursor: "pointer", color: "var(--text)" }}><span style={{ color: "var(--accent)" }}>B</span>ella <span style={{ color: "var(--accent)" }}>V</span>ita</div>
        <div className="bv-desktop-nav" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
            <span key={item} className={"bv-nav-link" + (activeSection === item.toLowerCase() ? " bv-active" : "")} onClick={() => scrollTo(item.toLowerCase())} style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400 }}>{item}</span>
          ))}
          <span className="bv-nav-link" onClick={() => setCurrentView("client-gallery")} style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 400 }}>Client Gallery</span>
        </div>
        <button className="bv-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.4rem", cursor: "pointer", display: "none" }}>{menuOpen ? "\u2715" : "\u2630"}</button>
      </nav>

      {menuOpen && <div className="mobile-menu">
        {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
          <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--text)", cursor: "pointer" }}>{item}</span>
        ))}
        <span onClick={() => { setMenuOpen(false); setCurrentView("client-gallery"); }} style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--accent)", cursor: "pointer" }}>Client Gallery</span>
      </div>}

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)}
        onDownload={(url, t) => downloadImage(url, "bella-vita-" + t.toLowerCase().replace(/\s+/g, "-") + ".jpg")}
        onShare={shareImage}
        onPrev={() => { const idx = filtered.findIndex(p => p.id === lightboxImage?.id); if (idx > 0) setLightboxImage(filtered[idx - 1]); }}
        onNext={() => { const idx = filtered.findIndex(p => p.id === lightboxImage?.id); if (idx < filtered.length - 1) setLightboxImage(filtered[idx + 1]); }}
        hasPrev={filtered.findIndex(p => p.id === lightboxImage?.id) > 0}
        hasNext={filtered.findIndex(p => p.id === lightboxImage?.id) < filtered.length - 1}
        currentIndex={filtered.findIndex(p => p.id === lightboxImage?.id)}
        totalCount={filtered.length}
      />

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        {/* Top: Brand name + tagline */}
        <div className="bv-hero-top" style={{ textAlign: "center", paddingTop: "120px", paddingBottom: "36px", position: "relative", zIndex: 2 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", fontWeight: 400,
            letterSpacing: "0.06em", color: "var(--text)",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.3s",
          }}>
            <span style={{ color: "var(--accent)" }}>B</span>ella <span style={{ color: "var(--accent)" }}>V</span>ita
          </div>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase",
            color: "var(--accent)", marginTop: "10px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}>Photography {"\u00b7"} Est. 2009 {"\u00b7"} Michigan</div>
        </div>

        {/* Banner photo strip */}
        <div className="bv-hero-banner" style={{
          margin: "0 32px", overflow: "hidden", borderRadius: "4px", position: "relative",
          height: "clamp(260px, 42vh, 520px)",
          opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "scale(1)" : "scale(0.98)",
          transition: "all 1.4s cubic-bezier(0.22,1,0.36,1) 0.5s",
          boxShadow: "0 12px 48px rgba(0,0,0,0.10)",
          background: "#e8ddd0",
        }}>
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85"
            alt="Golden hour portrait session in Michigan"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=75"; }}
            style={{
              width: "100%", height: "110%", objectFit: "cover", objectPosition: "center 35%",
              display: "block", filter: "brightness(0.92) saturate(1.05)",
              transform: heroLoaded ? `scale(1) translateY(${Math.min(scrollY * 0.12, 60)}px)` : "scale(1.06)",
              transition: heroLoaded ? "none" : "transform 2.5s cubic-bezier(0.22,1,0.36,1) 0.6s",
              willChange: "transform",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(252,250,246,0.06) 0%, rgba(252,250,246,0.12) 70%, rgba(252,250,246,0.35) 100%)", pointerEvents: "none" }} />
        </div>

        {/* Below banner: headline + description */}
        <div className="bv-hero-bottom" style={{ textAlign: "center", padding: "44px 24px 60px", position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 400,
            lineHeight: 1.08, color: "var(--text)",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.9s",
          }}>Your story is<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>worth telling</em></h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-light)",
            maxWidth: "480px", margin: "24px auto 0", lineHeight: 1.8,
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 1.1s",
          }}>I'm Rebecca {"\u2014"} a Michigan mom, natural light photographer, and believer that the best images happen when you stop posing and start living.</p>
          <div style={{
            marginTop: "32px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 1.3s",
          }}><button className="bv-btn-primary" onClick={() => scrollTo("contact")}>Capture Your Moment</button></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bv-section" style={{ padding: "100px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Recent Favorites</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>My Work</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "440px", margin: "14px auto 0", lineHeight: 1.7 }}>Every one of these sessions started with someone saying "I'm so awkward in front of cameras."</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map(cat => (<button key={cat} className={"bv-filter-btn " + (activeFilter === cat ? "active" : "")} onClick={() => switchFilter(cat)}>{cat}</button>))}
          </div>
        </AnimatedSection>
        <div className={"bv-grid-portfolio bv-filter-grid" + (filterAnimating ? " bv-filtering" : "")} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          {filtered.map((img, i) => (
            <AnimatedSection key={img.id} delay={i * 0.06}>
              <div className="bv-gallery-card-wrap" style={{ aspectRatio: img.aspect === "portrait" ? "3/4" : "4/3" }}>
                <ProgressiveImage className="bv-gallery-img" src={img.src} alt={img.title + " \u2013 " + img.category + " photography Michigan"} onClick={() => setLightboxImage(img)} style={{ width: "100%", height: "100%", cursor: "zoom-in" }} tabIndex={0} role="button" aria-label={"View " + img.title} onKeyDown={e => e.key === "Enter" && setLightboxImage(img)} />
                <div className="bv-overlay" />
                <div className="bv-img-actions">
                  <button onClick={(e) => { e.stopPropagation(); downloadImage(img.full || img.src, "bella-vita-" + img.title.toLowerCase().replace(/\s+/g, "-") + ".jpg"); }} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.82rem", color: "#2E2A25", backdropFilter: "blur(8px)" }}>{"\u2193"}</button>
                  <button onClick={(e) => { e.stopPropagation(); shareImage(img.title, img.full || img.src); }} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", color: "#2E2A25", backdropFilter: "blur(8px)" }}>{"\u2197"}</button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bv-section" style={{ padding: "80px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "72px", alignItems: "center" }} className="bv-about-grid">
          <AnimatedSection><ProgressiveImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=90" alt="Rebecca Henson, natural light photographer Michigan" style={{ width: "100%", maxWidth: "440px", aspectRatio: "3/4", borderRadius: "3px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }} /></AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Hey, I'm Rebecca</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, marginBottom: "28px", lineHeight: 1.2 }}>The face behind <em style={{ fontStyle: "italic", color: "var(--accent)" }}>the camera</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", color: "var(--text-light)", fontSize: "0.92rem", lineHeight: 1.85, fontWeight: 300 }}>
                <p>I started Bella Vita Photography back in 2009 with a camera, a marketing degree from Davenport University, and a heart full of love for freezing beautiful moments in time. Over fifteen years later, I still get butterflies before every single session.</p>
                <p>I'm a natural light, on-location photographer. There's something magical about Michigan light {"\u2014"} the way it spills through the trees at Kensington Metropark, wraps around downtown Milford, or glows across Island Lake.</p>
                <p>Every session is designed around YOU {"\u2014"} your style, your personality, your family's energy. I want you to look at these photos in twenty years and feel everything all over again.</p>
              </div>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>
                <span>Est. 2009</span><span style={{ color: "var(--border)" }}>{"\u00b7"}</span><span>Natural Light</span><span style={{ color: "var(--border)" }}>{"\u00b7"}</span><span>On Location</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUOTE */}
      <AnimatedSection>
        <div className="bv-section" style={{ padding: "80px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontStyle: "italic", fontWeight: 400, color: "var(--text)", lineHeight: 1.6 }}>"Every session is designed around your style, your personality, your story."</div>
            <div style={{ marginTop: "24px", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>{"\u2014"} Rebecca, Est. 2009</div>
          </div>
        </div>
      </AnimatedSection>

      {/* THE PROCESS */}
      <section className="bv-section" style={{ padding: "80px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>How It Works</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>The Process</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "460px", margin: "14px auto 0", lineHeight: 1.7 }}>From first message to final gallery {"\u2014"} here's what to expect.</p>
            </div>
          </AnimatedSection>
          <div className="bv-process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px", position: "relative" }}>
            {/* Connecting line */}
            <div className="bv-process-line" style={{ position: "absolute", top: "32px", left: "16%", right: "16%", height: "1px", background: "var(--border)", zIndex: 0 }} />
            {[
              { step: "01", title: "Let's Chat", icon: "\u2709", desc: "Fill out the contact form or email me. I'll reply within 24 hours with availability, ideas, and your free style guide. No pressure \u2014 just a conversation." },
              { step: "02", title: "The Session", icon: "\u2600", desc: "We pick a gorgeous Michigan location, I bring the good music, and you just show up and be yourselves. I'll guide every pose and capture every real moment." },
              { step: "03", title: "Your Gallery", icon: "\u2727", desc: "Within 2\u20133 weeks you'll receive a private online gallery. Download, favorite, share, and order prints \u2014 all from the comfort of your couch." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--card-bg)", border: "2px solid var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "1.4rem", color: "var(--accent)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>{item.icon}</div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "8px", fontWeight: 400 }}>Step {item.step}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 500, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bv-section" style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>What I Offer</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>The Experience</h2>
          </div>
        </AnimatedSection>
        <div className="bv-grid-services" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bv-service-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}
                onMouseMove={e => { const rect = e.currentTarget.getBoundingClientRect(); const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6; e.currentTarget.style.transform = `translateY(-3px) rotateX(${y}deg) rotateY(${x}deg)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) rotateX(0) rotateY(0)"; }}>
                <div style={{ fontSize: "1.5rem", color: "var(--accent-light)", marginBottom: "18px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "16px" }}>{s.name}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "0.88rem", lineHeight: 1.8, fontWeight: 300, flex: 1 }}>{s.description}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--accent)", fontWeight: 500 }}>{s.price}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* AVAILABILITY */}
      <AnimatedSection>
        <div className="bv-section" style={{ padding: "36px 48px", background: "var(--bg-warm)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
          <div className="bv-avail-banner" style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>{"\u2727"} Now Booking</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 400 }}>Class of 2027 Seniors & Fall Family Sessions</div>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[{ label: "Senior Slots", count: "4", sub: "remaining" }, { label: "Family Slots", count: "6", sub: "remaining" }, { label: "Mini Sessions", count: "Oct 19", sub: "next date" }].map((slot, i) => (
                <div key={i} style={{ textAlign: "center", padding: "10px 18px", border: "1px solid var(--border)", borderRadius: "3px", background: "var(--card-bg)", minWidth: "100px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--accent)", fontWeight: 500 }}>{slot.count}</div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginTop: "2px" }}>{slot.sub}</div>
                  <div style={{ fontSize: "0.55rem", color: "var(--border)", marginTop: "3px" }}>{slot.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PRODUCTS */}
      <section id="products" className="bv-section" style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Heirloom Quality</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>Prints & Albums</h2>
          </div>
        </AnimatedSection>
        <div className="bv-grid-products" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {PRINT_PRODUCTS.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div style={{ padding: "36px 28px", border: "1px solid var(--border)", borderRadius: "3px", textAlign: "center", transition: "all 0.35s ease", background: "var(--card-bg)", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4B896"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "14px", color: "var(--accent-light)" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "10px" }}>{p.name}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "0.82rem", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{p.description}</p>
                <div style={{ marginTop: "14px", fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--accent)", fontWeight: 500 }}>{p.price}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* GIFT CERTIFICATES */}
      <section className="bv-section" style={{ padding: "60px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <div className="bv-gift-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>The Perfect Gift</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 400, marginBottom: "18px", lineHeight: 1.3 }}>Give the Gift of <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Beautiful Memories</em></h2>
                <p style={{ color: "var(--text-light)", fontSize: "0.88rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "20px" }}>Gift certificates come in any amount, never expire, and I'll send a gorgeous digital certificate straight to their inbox.</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "18px" }}>
                  {["195", "375", "450", "Custom"].map(amt => (
                    <button key={amt} onClick={() => setGiftAmount(amt)} style={{ padding: "7px 18px", borderRadius: "3px", cursor: "pointer", background: giftAmount === amt ? "var(--accent)" : "var(--card-bg)", color: giftAmount === amt ? "#fff" : "var(--text-light)", border: "1px solid " + (giftAmount === amt ? "var(--accent)" : "var(--border)"), fontSize: "0.72rem", letterSpacing: "0.1em", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{amt === "Custom" ? "Custom" : "$" + amt}</button>
                  ))}
                </div>
                <button onClick={() => { setFormData(prev => ({ ...prev, type: "Gift Certificate", message: "Gift certificate: $" + (giftAmount === "Custom" ? "Custom amount" : giftAmount) })); scrollTo("contact"); }} className="bv-btn-outline">Inquire</button>
              </div>
              <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "3px", padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "18px" }}>Gift Certificate</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 500, color: "var(--accent)", marginBottom: "6px" }}>{giftAmount === "Custom" ? "Custom" : "$" + giftAmount}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, marginBottom: "14px" }}>Bella Vita Photography</div>
                <div style={{ width: "36px", height: "1px", background: "var(--border)", margin: "0 auto 14px" }} />
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.6 }}>Redeemable for any session or product<br />Never expires</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bv-section" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Kind Words</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>What Clients Say</h2>
            </div>
          </AnimatedSection>
          <div className="bv-grid-testimonials bv-testimonials-scroll" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ padding: "32px", background: "var(--card-bg)", border: "1px solid var(--border-light)", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--accent-light)", lineHeight: 1, marginBottom: "8px" }}>{"\u201c"}</div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", fontWeight: 400, color: "var(--text-light)", marginBottom: "24px" }}>{t.text}</p>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: "4px" }}>{t.event}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bv-section" style={{ padding: "60px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{"\u2b50\u2b50\u2b50\u2b50\u2b50"}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, marginBottom: "6px" }}>5.0 on Google</div>
              <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Livingston & Oakland County</div>
            </div>
          </AnimatedSection>
          <div className="bv-grid-reviews" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {GOOGLE_REVIEWS.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div style={{ padding: "20px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "3px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#fff", fontWeight: 500 }}>{r.name[0]}</div>
                      <div><div style={{ fontSize: "0.82rem", fontWeight: 400 }}>{r.name}</div><div style={{ fontSize: "0.6rem", color: "var(--muted)" }}>{r.date}</div></div>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--accent)" }}>{"\u2605".repeat(r.stars)}</div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{r.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bv-section" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Common Questions</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>Good Questions</h2>
            </div>
          </AnimatedSection>
          {FAQS.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div style={{ borderBottom: "1px solid var(--border-light)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} style={{ width: "100%", padding: "22px 0", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", color: "var(--text)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.08rem", fontWeight: 400, paddingRight: "20px" }}>{faq.q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", fontWeight: 300, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === i ? "280px" : "0", overflow: "hidden", transition: "max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease", opacity: openFaq === i ? 1 : 0 }}>
                  <p style={{ padding: "0 0 22px", color: "var(--text-light)", fontSize: "0.88rem", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.3}><div style={{ textAlign: "center", marginTop: "40px" }}><p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300 }}>Something else? <a href="mailto:rebecca.henson@yahoo.com" style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-light)" }}>Email me</a></p></div></AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bv-section" style={{ padding: "80px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Let's Connect</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "16px" }}>I Can't Wait to Meet You</h2>
              <p style={{ color: "var(--text-light)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>Tell me your story. I read every message personally and reply within 24 hours.</p>
              <p style={{ marginTop: "10px" }}><a href="mailto:rebecca.henson@yahoo.com" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", borderBottom: "1px solid var(--accent-light)" }}>rebecca.henson@yahoo.com</a></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bv-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.name ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Name</label>
                <input className="bv-input" placeholder="Your full name" value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); if (formErrors.name) setFormErrors(prev => ({ ...prev, name: undefined })); }} style={{ borderColor: formErrors.name ? "#c9544d" : undefined }} />
                {formErrors.name && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.name}</div>}
              </div>
              <div>
                <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.email ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Email</label>
                <input className="bv-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => { setFormData({ ...formData, email: e.target.value }); if (formErrors.email) setFormErrors(prev => ({ ...prev, email: undefined })); }} style={{ borderColor: formErrors.email ? "#c9544d" : undefined }} />
                {formErrors.email && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.email}</div>}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "8px" }}>Session Type</label>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Senior Portraits", "Family Session", "Mini Session", "Gift Certificate", "Other"].map(type => (
                  <button key={type} onClick={() => setFormData({ ...formData, type })} style={{ padding: "7px 18px", borderRadius: "3px", cursor: "pointer", background: formData.type === type ? "var(--accent)" : "var(--card-bg)", color: formData.type === type ? "#fff" : "var(--text-light)", border: "1px solid " + (formData.type === type ? "var(--accent)" : "var(--border)"), fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{type}</button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.message ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Your Story</label>
              <textarea className="bv-input" placeholder="Tell me about you! Who's getting photographed?" rows={5} value={formData.message} onChange={e => { setFormData({ ...formData, message: e.target.value }); if (formErrors.message) setFormErrors(prev => ({ ...prev, message: undefined })); }} style={{ resize: "vertical", minHeight: "110px", borderColor: formErrors.message ? "#c9544d" : undefined }} />
              {formErrors.message && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.message}</div>}
            </div>
            <div style={{ marginTop: "36px", textAlign: "center" }}>
              {formSent ? <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--accent)", animation: "bvFadeIn 0.4s ease" }}>Thank you {"\u2014"} I'll be in touch soon {"\u2727"}</div>
              : <button className="bv-btn-primary" onClick={handleSubmit}>Send Message</button>}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STYLE GUIDE BANNER */}
      <AnimatedSection>
        <div className="bv-section" style={{ padding: "48px", textAlign: "center", background: "var(--card-bg)", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Free Download</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, marginBottom: "10px" }}>Senior Portrait Style Guide</h3>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, maxWidth: "440px", margin: "0 auto 20px", lineHeight: 1.7 }}>What to wear, how to prep, and insider tips from 500+ sessions.</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", maxWidth: "420px", margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" value={styleGuideEmail} onChange={e => setStyleGuideEmail(e.target.value)} className="bv-input" style={{ flex: 1, minWidth: "190px" }} />
            <button onClick={() => handleStyleGuideSubmit(false)} className="bv-btn-primary" style={{ background: styleGuideSent ? "#5a9e6f" : undefined, whiteSpace: "nowrap" }}>{styleGuideSent ? "\u2713 Check Your Inbox!" : "Send Me the Guide"}</button>
          </div>
          <p style={{ fontSize: "0.6rem", color: "var(--muted)", marginTop: "10px", opacity: 0.5 }}>No spam ever.</p>
        </div>
      </AnimatedSection>

      {/* POPUP */}
      {showStyleGuide && !styleGuideSent && !popupDismissed && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", animation: "bvFadeIn 0.35s ease", padding: "24px", backdropFilter: "blur(4px)" }} onClick={() => { setShowStyleGuide(false); setPopupDismissed(true); }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "6px", padding: "44px 36px", maxWidth: "420px", width: "100%", textAlign: "center", position: "relative", animation: "bvScaleIn 0.4s cubic-bezier(0.22,1,0.36,1)", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
            <button onClick={() => { setShowStyleGuide(false); setPopupDismissed(true); }} style={{ position: "absolute", top: "14px", right: "18px", background: "none", border: "none", color: "var(--muted)", fontSize: "1.2rem", cursor: "pointer" }} aria-label="Close popup">{"\u2715"}</button>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px" }}>Free Download</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, marginBottom: "10px", lineHeight: 1.3 }}>Senior Portrait <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Style Guide</em></h3>
            <p style={{ color: "var(--text-light)", fontSize: "0.82rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "22px" }}>Outfit ideas, Michigan locations, and pro tips in a gorgeous PDF.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input type="email" placeholder="your@email.com" value={styleGuideEmail} onChange={e => setStyleGuideEmail(e.target.value)} className="bv-input" style={{ flex: 1, minWidth: "170px" }} />
              <button onClick={() => handleStyleGuideSubmit(true)} className="bv-btn-primary" style={{ whiteSpace: "nowrap" }}>Get It Free</button>
            </div>
          </div>
        </div>
      )}

      {/* INSTAGRAM CTA */}
      <AnimatedSection>
        <div className="bv-section" style={{ padding: "52px 48px", textAlign: "center" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Follow Along</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 400, marginBottom: "12px" }}>See the <em style={{ fontStyle: "italic", color: "var(--accent)" }}>behind the scenes</em></h3>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, maxWidth: "380px", margin: "0 auto 22px", lineHeight: 1.7 }}>Session sneak peeks, Michigan golden hour, and the occasional dog cameo.</p>
          <a href="https://www.instagram.com/bellavitaphotography2/" target="_blank" rel="noopener noreferrer" className="bv-btn-outline" style={{ textDecoration: "none" }}>@bellavitaphotography2</a>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer style={{ padding: "52px 48px 28px", borderTop: "1px solid var(--border-light)", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "40px" }} className="bv-footer-grid">
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500, letterSpacing: "0.04em", marginBottom: "12px" }}><span style={{ color: "var(--accent)" }}>B</span>ella <span style={{ color: "var(--accent)" }}>V</span>ita</div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.8, fontWeight: 300, maxWidth: "280px" }}>Natural light portrait photography for seniors and families in Michigan. Est. 2009.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Navigate</div>
              {["Portfolio", "About", "Services", "FAQ", "Contact"].map(item => (
                <div key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ fontSize: "0.82rem", color: "var(--text-light)", cursor: "pointer", padding: "4px 0", fontWeight: 300, transition: "color 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#B8926A"} onMouseLeave={e => e.currentTarget.style.color = "#5A554E"}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Sessions</div>
              {["Senior Portraits", "Family Sessions", "Mini Sessions", "Gift Certificates"].map(item => (
                <div key={item} style={{ fontSize: "0.82rem", color: "var(--text-light)", padding: "4px 0", fontWeight: 300 }}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Connect</div>
              <a href="https://www.instagram.com/bellavitaphotography2/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Instagram</a>
              <a href="https://www.facebook.com/bellavitaphotography2" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Facebook</a>
              <a href="mailto:rebecca.henson@yahoo.com" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>rebecca.henson@yahoo.com</a>
              <div onClick={() => setCurrentView("client-gallery")} style={{ fontSize: "0.82rem", color: "var(--accent)", cursor: "pointer", padding: "4px 0", fontWeight: 300, marginTop: "6px" }}>Client Gallery {"\u2192"}</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em", opacity: 0.6 }}>{"\u00a9"} {new Date().getFullYear()} Bella Vita Photography. All rights reserved.</div>
            <span className="bv-nav-link" onClick={() => setCurrentView("admin")} style={{ fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--border)", cursor: "pointer" }}>Admin</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      {scrollY > 800 && (
        <div className="bv-sticky-cta" style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9989,
          padding: "12px 20px", background: "rgba(252,250,246,0.97)",
          backdropFilter: "blur(16px)", borderTop: "1px solid var(--border-light)",
          display: "none", justifyContent: "space-between", alignItems: "center",
          animation: "bvSlideIn 0.3s ease",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 500 }}>Ready to book?</div>
            <div style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em" }}>Limited fall spots available</div>
          </div>
          <button className="bv-btn-primary" onClick={() => scrollTo("contact")} style={{ padding: "10px 24px", fontSize: "0.65rem", margin: 0 }}>Book Now</button>
        </div>
      )}

      {/* BACK TO TOP */}
      {scrollY > 600 && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
          className="bv-back-to-top" style={{
            position: "fixed", bottom: "28px", right: "28px", zIndex: 9990,
            width: "44px", height: "44px", borderRadius: "50%",
            background: "var(--accent)", color: "#fff", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.1rem", boxShadow: "0 4px 16px rgba(184,146,106,0.3)",
            animation: "bvFadeIn 0.35s ease", transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(184,146,106,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(184,146,106,0.3)"; }}
        >{"\u2191"}</button>
      )}
    </div>
  );
}
