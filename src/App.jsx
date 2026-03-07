import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════════
   EDITABLE CONTENT — Rebecca, change any text below!
   To edit: Go to GitHub → src/App.jsx → pencil icon → find this section
   → change text → click "Commit changes". Site updates automatically.
   ═══════════════════════════════════════════════════════════════════════ */
const SITE_CONTENT = {
  /* HERO SECTION */
  tagline: "Photography \u00b7 Est. 2009 \u00b7 Michigan",
  headline: "Your story is",
  headlineAccent: "worth telling",
  heroDescription: "I'm Rebecca, a Michigan mom and natural light photographer, specializing in family and high school senior sessions. I am passionate about photography and absolutely love capturing special moments for my clients.",
  heroButton: "Capture Your Moment",

  /* ABOUT SECTION */
  aboutTagline: "Meet Rebecca",
  aboutTitle: "It's All About Connection",
  aboutBio: "I started bella vita photography back in 2009 with a camera, a marketing degree from Davenport University, and a heart full of love for freezing beautiful moments in time. Over fifteen years later, I still get butterflies before every single session.",
  aboutBio2: "I'm a natural light, on location photographer. There's something magical about Michigan seasons \u2014 the way the flowers bloom in the spring and the trees change colors in the fall. I'm not a fan of winter (like at all), but I even get excited about those outdoor sessions in the snow!",
  aboutStats: [
    { number: "500+", label: "Sessions" },
    { number: "15+", label: "Years" },
    { number: "5.0", label: "Google" },
  ],

  /* PORTFOLIO SECTION */
  portfolioTagline: "",
  portfolioTitle: "My Portfolio",
  portfolioDescription: "Most sessions start with someone saying, \"I hate myself in pictures\" and ending with \"OMG...I love these.\"",

  /* SERVICES SECTION */
  servicesTagline: "What I Offer",
  servicesTitle: "Collections",

  /* AVAILABILITY BANNER */
  availabilityLabel: "\u2727 Now Booking",
  availabilityTitle: "Class of 2027 Seniors",
  availabilitySlots: [
    { label: "Senior Slots", count: "4", sub: "remaining" },
    { label: "Family Slots", count: "6", sub: "remaining" },
    { label: "Mini Sessions", count: "Oct 19", sub: "next date" },
  ],

  /* PRODUCTS SECTION */
  productsTagline: "Beyond the Gallery",
  productsTitle: "Products",

  /* GIFT CERTIFICATES */
  giftTitle: "Give the Gift of",
  giftTitleAccent: "bella",
  giftDescription: "Your recipient(s) will receive a personalized bella digital gift certificate straight to their inbox.",

  /* TESTIMONIALS */
  testimonialsTagline: "Kind Words",
  testimonialsTitle: "What Clients Say",

  /* FAQ */
  faqTagline: "Common Questions",
  faqTitle: "Frequently Asked Questions",

  /* CONTACT */
  contactTagline: "Let's Connect",
  contactTitle: "I Can't Wait to Meet You",
  contactDescription: "Tell me your story. I read every message personally and reply within 24 hours.",

  /* QUOTE */
  quote: "Every session is designed around your style, your personality, your story.",
  quoteAttribution: "\u2014 Rebecca, Est. 2009",

  /* PROCESS STEPS */
  processSteps: [
    { step: "01", title: "Let's Chat", icon: "\u2709", desc: "Fill out the contact form or email me. I'll reply within 24 hours with availability and ideas. No pressure \u2014 just a conversation." },
    { step: "02", title: "The Session", icon: "\u2600", desc: "We'll choose a beautiful location, you show up and be yourselves. I'll guide you through it and capture every real moment." },
    { step: "03", title: "Your Gallery", icon: "\u2727", desc: "Within 2\u20133 weeks you'll receive a private online gallery and print release. You can download and share - all from the comfort of your own home. (Products such as canvas gallery wraps, acrylic and metals, even prints are also available...just reach out)." },
  ],

  /* INSTAGRAM */
  instagramHandle: "@bellavitaphotography2",
  instagramUrl: "https://www.instagram.com/bellavitaphotography2/",
  facebookUrl: "https://www.facebook.com/bellavitaphotography2",

  /* FOOTER */
  footerTagline: "Natural light portrait photography for seniors and families in Michigan. Est. 2009.",
  email: "bellavitaphoto@rocketmail.com",

  /* PAYMENT METHODS — Rebecca, update these with your own links/handles! */
  payments: {
    venmo: { handle: "@Rebecca-BellaVita", url: "https://venmo.com/Rebecca-BellaVita" },
    paypal: { handle: "bellavitaphoto@rocketmail.com", url: "https://paypal.me/bellavitaphoto" },
    zelle: { handle: "bellavitaphoto@rocketmail.com" },
  },
};

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
  { category: "Senior Sessions", icon: "\u2727", collections: [
    { name: "Senior Mini Session", price: "$350", desc: "45 minutes. 1 location. 15 digital images \u2014 fast, fun, and affordable." },
    { name: "Senior Full Session", price: "$600", desc: "The ultimate senior experience \u2014 2 hours. 1 location. 25+ digital images. $20 product credit." },
    { name: "Senior Split Session", price: "$700", desc: "Same full session split across two dates \u2014 perfect for seasonal variety or a second look.\n2 sessions. 2 dates. 50+ digital images. $30 product credit." },
    { name: "Senior DUO Session", price: "$700", desc: "Grab your best friend! Two seniors, one epic session. Individual and duo shots included.\n2 hours. 1 location. 25+ digital images each. $20 product credit each." },
  ]},
  { category: "Family Sessions", icon: "\u2727", collections: [
    { name: "Family Mini Session", price: "$175", desc: "Perfect for holiday cards, announcements or just because your kiddos are growing too fast!\n30 minutes. 1 location. 10 digital images." },
    { name: "Family Full Session", price: "$300", desc: "Bring the family and let's have some fun!\n1 hour. 1 location. 25+ digital images. $20 product credit." },
    { name: "Milestone Sessions", price: "$300", desc: "Maternity, engagements, birthdays - life's biggest chapters.\n1 hour. 1 location. 25+ digital images. $20 product credit." },
  ]},
  { category: "Weddings", icon: "\u2727", collections: [
    { name: "Silver", price: "$1200", desc: "6 hours of coverage on your wedding day." },
    { name: "Gold", price: "$2500", desc: "engagement session. 8 hours of coverage on your wedding day. $50 product credit." },
    { name: "Platinum", price: "$3500", desc: "engagement session. full day coverage on your wedding day. second photographer. $100 product credit." },
  ]},
];

const FAQS = [
  { q: "How far in advance should I book?", a: "As soon as you know what season you would like, please reach out to get on the schedule. For senior portraits, 3\u20136 months ahead is ideal. Family sessions usually book 1\u20133 months out. Mini sessions sell out within DAYS of advertising a special (due to limited spots). Follow on Facebook and Instagram @bellavitaphotography2 or join my email list for first dibs!" },
  { q: "How many outfit changes can I bring?", a: "Depending on the session you choose...Senior's should bring up to 3 outfit changes. For families, one coordination look usually works. If you are booking a family full, a backup for the kiddos is always a good idea. Feel free to send me option choices if you are looking for some input. You will receive a detailed style guide with tips once you have booked your session!" },
  { q: "What happens if it rains?", a: "Welcome to Michigan! I\u2019ll text you 24 hours before and we\u2019ll reschedule \u2014 no extra charge. A little overcast? Chef\u2019s kiss for photos." },
  { q: "Where do sessions take place?", a: "Depending on the season and your vibe...I've got lots of ideas for locations. I have shot at dozens of locations in Southeast Michigan and beyond and I am always up for new places if you have a specific location in mind!" },
  { q: "When will I receive my photos?", a: "I will send you a link to your private gallery, along with a print release within 2\u20133 weeks. You can view, download and share the link with family and friends. This will allow parents, grandparents and family members to download their favorites as well and even order products if they chose." },
];

const GOOGLE_REVIEWS = [
  { name: "Sarah M.", stars: 5, text: "If you\u2019re on the fence \u2014 just book her. My daughter came home glowing. The photos are unreal.", date: "2 months ago" },
  { name: "The Nguyen Family", stars: 5, text: "Tried two other photographers before Rebecca. Night and day difference. Her natural light style is SO much better than a studio.", date: "3 months ago" },
  { name: "Amanda K.", stars: 5, text: "The whole experience is incredible start to finish. She sends a style guide, texts about outfits, remembers every detail.", date: "1 month ago" },
  { name: "David & Lisa T.", stars: 5, text: "She photographed our family of 7 including a toddler who refused to sit still and a teenager who refused to smile. Amazing shots of BOTH.", date: "4 months ago" },
];

const PRODUCTS = [
  { name: "Gallery Wraps", description: "High quality, rich, textured canvas products that are fade resistant and ready to hang.", icon: "\u2727" },
  { name: "Acrylics", description: "Crafted premium plexiglass showcasing vivid and modern design.", icon: "\u2727" },
  { name: "Metals", description: "Sleek and modern aluminum products that are fade and scratch resistant.", icon: "\u2727" },
  { name: "Albums", description: "Personalized photobooks to luxurious Heirloom albums.", icon: "\u2727" },
  { name: "Grad Gear", description: "Announcements, Invites, Banners and Thank you cards featuring your senior's favorite images.", icon: "\u2727" },
  { name: "Other Awesome Goods", description: "", icon: "\u2727" },
];

const DEFAULT_CLIENT_GALLERIES = [
  {
    id: "g1", clientName: "Emma Richardson \u2013 Lakeland HS \u201926", sessionType: "Senior Sessions", date: "2025-10-15", password: "emma2026",
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
    id: "g3", clientName: "Jake Thompson", sessionType: "Senior Sessions", date: "2025-11-02", password: "jake2026",
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
    try { await navigator.share({ title: "bella vita photography \u2014 " + title, url }); } catch {}
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
function ClientGalleryPage({ galleries, onBack, onGift }) {
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
        <div className="bv-gallery-header" style={{ position: "sticky", top: 0, zIndex: 100, padding: "18px 48px", background: "rgba(252,250,246,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => { setUnlockedGallery(null); setSelectedGallery(null); setFavorited({}); }} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400 }}>{unlockedGallery.clientName}</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: "2px" }}>{unlockedGallery.sessionType} {"\u00b7"} {new Date(unlockedGallery.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
          </div>
          <div style={{ fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em" }}>{favCount > 0 ? "\u2665 " + favCount + " favorited" : unlockedGallery.images.length + " photos"}</div>
        </div>
        <div className="bv-gallery-intro" style={{ padding: "20px 48px 0", maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>Click any photo to view full size. Use the download button to save individual photos, or favorite your picks and download them all at once.</p>
          <button onClick={async () => { for (const img of unlockedGallery.images) { await downloadImage(img.full || img.src, "bella-vita-" + img.title.toLowerCase().replace(/\s+/g, "-") + ".jpg"); await new Promise(r => setTimeout(r, 500)); } }} className="bv-btn-outline" style={{ marginTop: "14px", padding: "9px 24px", fontSize: "0.65rem" }}>{"\u2193"} Download All Photos</button>
          <div className="bv-love-callout" style={{ marginTop: "20px", padding: "16px 24px", background: "var(--card-bg)", border: "1px solid var(--border-light)", borderRadius: "3px", maxWidth: "520px", margin: "20px auto 0" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.7, fontWeight: 300 }}>
              <span style={{ color: "var(--accent)", fontWeight: 400 }}>{"\u2727"} Love your photos?</span> Want a canvas for your wall or an album for the coffee table? Know someone who'd love a session of their own? Share a direct link with friends and family {"\u2014"} they can gift you products, book their own session, or just see your gorgeous photos.
            </div>
            <button onClick={() => onGift()} className="bv-btn-outline" style={{ marginTop: "12px", padding: "8px 20px", fontSize: "0.6rem" }}>Gift Certificates & Products {"\u2192"}</button>
          </div>
        </div>
        <div className="bv-gallery-grid-wrap" style={{ padding: "32px 48px 120px", maxWidth: "1400px", margin: "0 auto" }}>
          <div className="bv-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
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
                    style={{ background: favorited[i] ? "#C4567A" : "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: favorited[i] ? "#fff" : "#C4567A", fontSize: "1rem", backdropFilter: "blur(8px)", transition: "all 0.3s ease" }}>{favorited[i] ? "\u2665" : "\u2661"}</button>
                </div>
              </div>
            ))}
          </div>
          {/* Share & Gift Banner */}
          <div className="bv-share-banner" style={{ marginTop: "48px", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px", background: "var(--bg-warm)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, marginBottom: "8px" }}>Share the love {"\u2727"}</div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.7, fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>
              Want these photos on your wall? Send this link to family {"\u2014"} they can gift you a canvas, album, or prints. Or share the gift of a bella vita session with someone you love!
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "16px", flexWrap: "wrap" }}>
              <button onClick={() => {
                const shareText = "Check out my photos from bella vita photography! You can gift me a canvas, album, or prints \u2014 or grab a gift certificate for a session of your own: https://bellavitabyrebecca.com/#products";
                if (navigator.share) { navigator.share({ title: "bella vita photography", text: shareText, url: "https://bellavitabyrebecca.com/#products" }).catch(() => {}); }
                else { navigator.clipboard.writeText(shareText).then(() => alert("Copied! Paste this into a text or message to share with family and friends.")).catch(() => window.open("https://bellavitabyrebecca.com/#products", "_blank")); }
              }} className="bv-btn-outline" style={{ padding: "10px 22px", fontSize: "0.62rem" }}>Copy Share Message</button>
              <button onClick={() => onGift()} className="bv-btn-primary" style={{ padding: "10px 22px", fontSize: "0.62rem" }}>Browse Gifts & Products</button>
            </div>
          </div>
        </div>
        {favCount > 0 && (
          <div className="bv-gallery-favbar" style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "16px 48px", background: "rgba(252,250,246,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid #E8E2D8", display: "flex", justifyContent: "space-between", alignItems: "center", animation: "bvFadeIn 0.3s ease", zIndex: 100 }}>
            <div style={{ fontSize: "0.82rem", color: "#9E978D" }}><span style={{ color: "#C4567A", fontWeight: 500 }}>{favCount}</span> favorite{favCount !== 1 ? "s" : ""} selected</div>
            <div className="bv-favbar-actions" style={{ display: "flex", gap: "12px" }}>
              <button onClick={handleDownloadFavorites} className="bv-btn-outline" style={{ padding: "10px 24px" }}>{"\u2193"} Download Favorites</button>
              <button onClick={() => { const fl = unlockedGallery.images.filter((_, i) => favorited[i]).map(img => img.title).join(", "); alert("Your favorites have been saved!\n\nSelected: " + fl + "\n\nRebecca will receive your selections and reach out about your album.\n\nTip: Friends and family can purchase a canvas, album, or prints of your photos as a gift right from our website! Scroll down to the \"Share the Love\" section to copy a ready-to-send message for them."); }} className="bv-btn-primary" style={{ padding: "10px 24px" }}>Submit Favorites</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* Password entry */
  if (selectedGallery) {
    return (
      <div className="bv-gallery-password" style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px" }}>
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
          <p style={{ marginTop: "28px", fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.7, opacity: 0.6 }}>Your password was in your session delivery email.<br />Can't find it? Email <a href="mailto:bellavitaphoto@rocketmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>bellavitaphoto@rocketmail.com</a></p>
        </div>
      </div>
    );
  }

  /* Gallery listing */
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}>
      <div className="bv-gallery-listing-wrap" style={{ padding: "32px 48px" }}><button onClick={onBack} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{"\u2190"} Back to Site</button></div>
      <div className="bv-gallery-listing-wrap" style={{ textAlign: "center", padding: "40px 48px 64px" }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px" }}>Password Protected</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, marginBottom: "16px" }}>Client Galleries</h1>
        <p style={{ color: "var(--muted)", fontSize: "0.88rem", fontWeight: 300, maxWidth: "460px", margin: "0 auto", lineHeight: 1.8 }}>Find your session below and enter the password from your delivery email to view, download, and favorite your photos.</p>
      </div>
      <div className="bv-gallery-listing-wrap" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 48px 100px", display: "grid", gap: "16px" }}>
        {galleries.map(gallery => (
          <div key={gallery.id} onClick={() => setSelectedGallery(gallery)} className="bv-gallery-card"
            style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "24px", alignItems: "center", padding: "20px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "3px", cursor: "pointer", transition: "all 0.35s ease", boxShadow: "0 1px 8px rgba(0,0,0,0.03)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4567A"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
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
  const [newGallery, setNewGallery] = useState({ clientName: "", sessionType: "Senior Sessions", date: "", password: "", images: "" });
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
    setNewGallery({ clientName: "", sessionType: "Senior Sessions", date: "", password: "", images: "" });
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
            <option value="Senior Sessions">Senior Sessions</option>
            <option value="Family Sessions">Family Sessions</option>
            <option value="Weddings">Weddings</option>
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
                  <div style={{ fontSize: "0.65rem", color: "#9E978D", marginTop: "2px" }}>{g.sessionType} {"\u00b7"} {g.images.length} photos {"\u00b7"} pw: <span style={{ color: "#C4567A" }}>{g.password}</span></div>
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "", type: "Senior Session" });
  const [formSent, setFormSent] = useState(false);
  const [currentView, setCurrentView] = useState("main");
  const [clientGalleries, setClientGalleries] = useState(DEFAULT_CLIENT_GALLERIES);
  const [showStyleGuide, setShowStyleGuide] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [giftAmount, setGiftAmount] = useState("375");
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);
  const [hintForm, setHintForm] = useState({ recipientName: "", recipientEmail: "", senderName: "", scenario: "", occasion: "", forWho: "" });
  const [hintSent, setHintSent] = useState(false);
  const [giftForm, setGiftForm] = useState({ recipientName: "", recipientEmail: "", senderName: "", senderEmail: "", message: "", paymentMethod: "", giftCertAmount: "" });
  const [giftSent, setGiftSent] = useState(false);
  const [giftStep, setGiftStep] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [formErrors, setFormErrors] = useState({});
  const [filterAnimating, setFilterAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => { setTimeout(() => setHeroLoaded(true), 150); }, []);
  useEffect(() => { document.body.style.overflow = (lightboxImage || menuOpen || showGiftModal || showHintModal) ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [lightboxImage, menuOpen, showGiftModal, showHintModal]);
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
      "@id": "https://bellavitabyrebecca.com",
      "name": "bella vita photography",
      "description": "Natural light portrait photography for seniors and families in Livingston and Oakland County, Michigan. Owned by Rebecca Henson, est. 2009.",
      "url": "https://bellavitabyrebecca.com",
      "telephone": "",
      "email": "bellavitaphoto@rocketmail.com",
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
      "priceRange": "$175 - $600+",
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Senior Portraits", "description": "On-location senior portrait session with up to 3 outfit changes and 25+ digital images" }, "price": "600", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Sessions", "description": "Natural light family session on location with 25+ digital images" }, "price": "300", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini Sessions", "description": "Seasonal mini session with 10-15 digital images" }, "price": "175", "priceCurrency": "USD" }
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

  const categories = ["All", "Seniors", "Families", "Milestones & Minis", "Weddings"];
  const filtered = activeFilter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === activeFilter);
  const scrollTo = (id) => { setMenuOpen(false); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const switchFilter = (cat) => { if (cat === activeFilter) return; setFilterAnimating(true); setTimeout(() => { setActiveFilter(cat); setFilterAnimating(false); }, 300); };
  const handleSubmit = async () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!emailRegex.test(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.message.trim()) errors.message = "Tell me about your vision";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    try {
      await fetch("https://formspree.io/f/xzdjbyra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, "session type": formData.type, message: formData.message }),
      });
    } catch {}
    setFormSent(true); setTimeout(() => setFormSent(false), 4000); setFormData({ name: "", email: "", message: "", type: "Senior Session" }); setFormErrors({});
  };
  const handleSendHint = () => {
    if (!hintForm.recipientEmail || !hintForm.senderName || !hintForm.scenario || !hintForm.occasion) return;
    const who = hintForm.forWho || "";
    const occasionLabel = { "Senior Portraits": "senior portraits", "Family Photos": "family photos", "Wedding": "the wedding", "Products / Gift": "a gift certificate", "General": "a photo session" };
    let subject, body;

    if (hintForm.scenario === "hint") {
      const hintMessages = {
        "Senior Portraits": "I've been looking into senior portrait photographers and I found someone AMAZING. Her name is Rebecca with bella vita photography \u2014 she's a natural light photographer here in Michigan and her work is absolutely stunning. I would love love love a session with her as a gift!",
        "Family Photos": "I've been wanting to get family photos done SO badly and I just found the perfect photographer! Her name is Rebecca with bella vita photography \u2014 natural light, on location, and her work is gorgeous. A session with her would be the best gift!",
        "Wedding": "So we've been looking at wedding photographers and we found THE one. Her name is Rebecca with bella vita photography and her work is breathtaking. We would be absolutely over the moon if someone helped us out with our wedding photography!",
        "Products / Gift": "I recently had photos taken by the most amazing photographer \u2014 Rebecca with bella vita photography \u2014 and I've been DYING to get a gallery wrap or album of the images. A gift certificate toward products would seriously make my year! She has beautiful canvas wraps, acrylics, metals, albums, and prints.",
        "General": "I found this amazing photographer named Rebecca with bella vita photography and I can't stop looking at her work. A gift certificate for a session or products would seriously make my entire year!",
      };
      subject = encodeURIComponent("Okay so... I have a little hint for you \u2727");
      body = encodeURIComponent(
        "Hey" + (hintForm.recipientName ? " " + hintForm.recipientName : "") + "!\n\n" +
        "So... this is me not-so-subtly dropping a hint. \u{1F60A}\n\n" +
        (hintMessages[hintForm.occasion] || hintMessages["General"]) + "\n\n" +
        "You can see her work here: bellavitabyrebecca.com\n" +
        "Gift certificates come in any amount, work for sessions AND products (gallery wraps, albums, prints!), and never expire!\n" +
        "Her email: bellavitaphoto@rocketmail.com\n\n" +
        "Just putting that out there... \u{1F60D}\n\n" +
        "Love,\n" + hintForm.senderName
      );
    } else {
      const subjectWho = who || (hintForm.occasion === "General" ? "" : occasionLabel[hintForm.occasion] || "");
      const recMessages = {
        "Senior Portraits": "I HAD to tell you about this photographer I found" + (who ? " \u2014 I immediately thought of " + who + "'s senior photos" : " for senior portraits") + "! Her name is Rebecca with bella vita photography. She does natural light senior portraits here in Michigan and her photos are unreal." + (who ? " " + who + " would look absolutely amazing." : ""),
        "Family Photos": "I found the most wonderful family photographer and I immediately thought of you! Her name is Rebecca with bella vita photography \u2014 natural light, on location, and she makes everyone feel so relaxed. Your family photos would turn out incredible.",
        "Wedding": "I found the most beautiful wedding photographer" + (who ? " and immediately thought of " + who + "'s big day" : "") + "! Her name is Rebecca with bella vita photography. She does natural light photography and her wedding work is stunning.",
        "Products / Gift": "I know someone who just had a session with the most amazing photographer \u2014 Rebecca with bella vita photography. She has the most gorgeous products (canvas gallery wraps, acrylics, metals, albums, prints) and a gift certificate toward any of them would be such a thoughtful gift! They never expire and come in any amount.",
        "General": "I came across this incredible photographer and immediately thought of you! Her name is Rebecca with bella vita photography. She does seniors, families, weddings \u2014 all natural light, on location in Michigan. Gift certificates work for sessions AND products like gallery wraps and albums.",
      };
      subject = encodeURIComponent(subjectWho ? "I found the perfect photographer for " + subjectWho + "! \u2727" : "You HAVE to see this photographer! \u2727");
      body = encodeURIComponent(
        "Hey" + (hintForm.recipientName ? " " + hintForm.recipientName : "") + "!\n\n" +
        (recMessages[hintForm.occasion] || recMessages["General"]) + "\n\n" +
        "Check out her work: bellavitabyrebecca.com\n" +
        "Her email: bellavitaphoto@rocketmail.com" + (hintForm.senderName ? " \u2014 tell her " + hintForm.senderName + " sent you!" : "") + "\n\n" +
        "Trust me on this one. \u{1F60A}\n\n" +
        hintForm.senderName
      );
    }

    window.open("mailto:" + hintForm.recipientEmail + "?subject=" + subject + "&body=" + body + "&bcc=bellavitaphoto@rocketmail.com", "_blank");
    setFormData({
      name: hintForm.senderName,
      email: "",
      type: "Gift Certificate",
      message: (hintForm.scenario === "hint" ? "GIFT HINT SENT" : "REFERRAL SENT") + "\n\nFrom: " + hintForm.senderName + "\nSent to: " + (hintForm.recipientName || "Not specified") + " (" + hintForm.recipientEmail + ")" + (who ? "\nSession for: " + who : "") + "\nType: " + hintForm.occasion
    });
    setHintSent(true);
    setTimeout(() => {
      setHintSent(false); setShowHintModal(false);
      setHintForm({ recipientName: "", recipientEmail: "", senderName: "", scenario: "", occasion: "", forWho: "" });
      scrollTo("contact");
    }, 2500);
  };

  const handleSendGift = () => {
    if (!giftForm.recipientEmail || !giftForm.senderName || !giftForm.senderEmail || !giftForm.paymentMethod) return;
    const amount = giftAmount === "Custom" ? "a custom amount" : "$" + giftAmount;
    const amountNum = giftAmount === "Custom" ? "Custom amount" : "$" + giftAmount;
    const personalMsg = giftForm.message ? "\n\n" + giftForm.message : "";
    const subject = encodeURIComponent("You've Been Gifted a bella vita photography Experience!");
    const body = encodeURIComponent(
      "Hi" + (giftForm.recipientName ? " " + giftForm.recipientName : "") + "!\n\n" +
      "Someone special wants to give you the gift of beautiful memories! " +
      giftForm.senderName + " has gifted you a bella vita photography gift certificate for " + amount + ".\n\n" +
      "This certificate can be used for any photography session (seniors, families, weddings), products (gallery wraps, albums, acrylics, prints), or any combination \u2014 and it never expires!" +
      personalMsg + "\n\n" +
      "To book your session or browse products, contact Rebecca at bellavitaphoto@rocketmail.com or visit bellavitabyrebecca.com\n\n" +
      "With love,\n" + giftForm.senderName + "\n\n\u2014 bella vita photography \u2727 Est. 2009"
    );
    window.open("mailto:" + giftForm.recipientEmail + "?subject=" + subject + "&body=" + body + "&bcc=bellavitaphoto@rocketmail.com", "_blank");

    const payLabel = { venmo: "Venmo", paypal: "PayPal", zelle: "Zelle", later: "Pay Later (contact form)" }[giftForm.paymentMethod] || giftForm.paymentMethod;
    setFormData({
      name: giftForm.senderName,
      email: giftForm.senderEmail,
      type: "Gift Certificate",
      message: "GIFT CERTIFICATE PURCHASE REQUEST\n\nAmount: " + amountNum + "\nPayment Method: " + payLabel + "\nFrom: " + giftForm.senderName + " (" + giftForm.senderEmail + ")\nRecipient: " + (giftForm.recipientName || "Not specified") + "\nRecipient Email: " + giftForm.recipientEmail + (giftForm.message ? "\nPersonal Message: " + giftForm.message : "") + "\n\nRecipient has been notified via email."
    });

    /* Open payment link based on method */
    const pay = SITE_CONTENT.payments;
    if (giftForm.paymentMethod === "venmo" && pay.venmo?.url) {
      const venmoUrl = pay.venmo.url + "?txn=pay&amount=" + (giftAmount !== "Custom" ? giftAmount : "") + "&note=" + encodeURIComponent("bella vita photography gift certificate for " + (giftForm.recipientName || "recipient"));
      setTimeout(() => window.open(venmoUrl, "_blank"), 600);
    } else if (giftForm.paymentMethod === "paypal" && pay.paypal?.url) {
      const paypalUrl = pay.paypal.url + "/" + (giftAmount !== "Custom" ? giftAmount : "");
      setTimeout(() => window.open(paypalUrl, "_blank"), 600);
    }
    /* Zelle and Pay Later just go to the contact form */

    setGiftSent(true);
    setTimeout(() => {
      setGiftSent(false); setShowGiftModal(false); setGiftStep(1);
      setGiftForm({ recipientName: "", recipientEmail: "", senderName: "", senderEmail: "", message: "", paymentMethod: "" });
      scrollTo("contact");
    }, 3000);
  };

  if (currentView === "client-gallery") return <ClientGalleryPage galleries={clientGalleries} onBack={() => setCurrentView("main")} onGift={() => { setCurrentView("main"); setTimeout(() => { const el = document.getElementById("products"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }, 100); }} />;
  if (currentView === "admin") return <AdminPanel galleries={clientGalleries} setGalleries={setClientGalleries} onClose={() => setCurrentView("main")} />;

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", fontFamily: "var(--font-body)", overflowX: "hidden" }}>
      {/* Scroll progress bar */}
      <div className="bv-scroll-progress" style={{ width: scrollProgress + "%" }} />
      {/* Skip to content (a11y) */}
      <a href="#portfolio" className="bv-skip-link">Skip to content</a>
      <style>{`
        :root { --bg:#FCFAF6;--bg-warm:#F7F3ED;--card-bg:#FFFFFF;--text:#2E2A25;--text-light:#5A554E;--muted:#9E978D;--accent:#C4567A;--accent-light:#D988A4;--accent-hover:#A8445F;--border:#E8E2D8;--border-light:#F0ECE4;--font-display:'Playfair Display',Georgia,serif;--font-body:'Outfit',system-ui,sans-serif; }
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}::selection{background:#C4567A33;color:var(--text)}
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
        input:focus-visible,textarea:focus-visible,select:focus-visible{outline:none;border-color:var(--accent)!important;box-shadow:0 0 0 3px rgba(196,86,122,0.15)}

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
        .bv-btn-primary{display:inline-block;padding:14px 40px;background:var(--accent);color:#fff;font-family:var(--font-body);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;border:none;border-radius:3px;transition:all 0.35s ease;font-weight:400;-webkit-tap-highlight-color:transparent}.bv-btn-primary:hover{background:var(--accent-hover);transform:translateY(-1px);box-shadow:0 4px 16px rgba(196,86,122,0.25)}.bv-btn-primary:active{transform:scale(0.97)}
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
          .bv-gallery-header{padding-left:16px!important;padding-right:16px!important}
          .bv-gallery-intro{padding-left:16px!important;padding-right:16px!important}
          .bv-gallery-grid-wrap{padding-left:16px!important;padding-right:16px!important}
          .bv-gallery-grid{grid-template-columns:1fr!important}
          .bv-gallery-favbar{padding-left:16px!important;padding-right:16px!important;flex-direction:column!important;gap:10px!important;text-align:center}
          .bv-gallery-favbar .bv-favbar-actions{justify-content:center!important}
          .bv-gallery-listing-wrap{padding-left:16px!important;padding-right:16px!important}
          .bv-gallery-password{padding:20px!important}
          .bv-share-banner{padding:20px 18px!important}
          .bv-share-banner-btns{flex-direction:column!important;align-items:stretch!important}
          .bv-love-callout{max-width:100%!important}
        }
        @media(max-width:480px){
          .bv-grid-reviews{grid-template-columns:1fr!important}
          .bv-hero-top{padding-top:88px!important}
          .bv-footer-grid{grid-template-columns:1fr!important}
        }
        @media(min-width:769px){.bv-mobile-btn{display:none!important}}
        @media(max-width:479px){.bv-gallery-header{flex-wrap:wrap!important;gap:6px!important;justify-content:center!important;padding-top:12px!important;padding-bottom:12px!important}.bv-gallery-grid-wrap{padding-bottom:80px!important}.bv-favbar-actions{flex-direction:column!important;gap:8px!important;width:100%}.bv-favbar-actions button{width:100%}}
      `}</style>

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation" className="bv-nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrollY > 50 ? "rgba(252,250,246,0.95)" : "transparent", backdropFilter: scrollY > 50 ? "blur(16px)" : "none", borderBottom: scrollY > 50 ? "1px solid var(--border-light)" : "1px solid transparent", transition: "all 0.4s ease" }}>
        <div onClick={() => scrollTo("hero")} style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, letterSpacing: "0.04em", cursor: "pointer", color: "var(--text)" }}><span style={{ color: "var(--accent)" }}>b</span>ella <span style={{ color: "var(--accent)" }}>v</span>ita</div>
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
            <span style={{ color: "var(--accent)" }}>b</span>ella <span style={{ color: "var(--accent)" }}>v</span>ita
          </div>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase",
            color: "var(--accent)", marginTop: "10px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}>{ SITE_CONTENT.tagline }</div>
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
          }}>{SITE_CONTENT.headline}<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>{SITE_CONTENT.headlineAccent}</em></h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-light)",
            maxWidth: "480px", margin: "24px auto 0", lineHeight: 1.8,
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 1.1s",
          }}>{SITE_CONTENT.heroDescription}</p>
          <div style={{
            marginTop: "32px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 1.3s",
          }}><button className="bv-btn-primary" onClick={() => scrollTo("contact")}>{SITE_CONTENT.heroButton}</button></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bv-section" style={{ padding: "100px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.portfolioTagline }</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>{ SITE_CONTENT.portfolioTitle }</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "440px", margin: "14px auto 0", lineHeight: 1.7 }}>{ SITE_CONTENT.portfolioDescription }</p>
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
          <AnimatedSection><ProgressiveImage src="/rebecca-profile.jpg" alt="Rebecca Henson, natural light photographer Michigan" style={{ width: "100%", maxWidth: "440px", aspectRatio: "3/4", borderRadius: "3px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }} /></AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>Hey, I'm Rebecca</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, marginBottom: "28px", lineHeight: 1.2 }}>The face behind <em style={{ fontStyle: "italic", color: "var(--accent)" }}>the camera</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", color: "var(--text-light)", fontSize: "0.92rem", lineHeight: 1.85, fontWeight: 300 }}>
                <p>bella vita was born in 2009 with a camera, a marketing degree and a passion for photography. Over fifteen years later, I still get butterflies before every single session.</p>
                <p>I'm a natural light, on location photographer. There's something magical about Michigan seasons {"\u2014"} the way the flowers bloom in the spring and the trees change colors in the fall. I'm not a fan of winter (like at all), but I even get excited about those outdoor sessions in the snow!</p>
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
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontStyle: "italic", fontWeight: 400, color: "var(--text)", lineHeight: 1.6 }}>"{SITE_CONTENT.quote}"</div>
            <div style={{ marginTop: "24px", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>{SITE_CONTENT.quoteAttribution}</div>
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
            {SITE_CONTENT.processSteps.map((item, i) => (
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
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.servicesTagline }</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>{ SITE_CONTENT.servicesTitle }</h2>
          </div>
        </AnimatedSection>
        <div className="bv-grid-services" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bv-service-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}
                onMouseMove={e => { const rect = e.currentTarget.getBoundingClientRect(); const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6; e.currentTarget.style.transform = `translateY(-3px) rotateX(${y}deg) rotateY(${x}deg)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) rotateX(0) rotateY(0)"; }}>
                <div style={{ fontSize: "1.5rem", color: "var(--accent-light)", marginBottom: "18px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "8px" }}>{s.category}</h3>
                {s.category === "Senior Sessions" && <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 300, fontStyle: "italic", marginBottom: "20px", lineHeight: 1.6 }}>(all senior collections include a private online gallery for sharing and download and print release)</p>}
                {s.category === "Family Sessions" && <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 300, fontStyle: "italic", marginBottom: "20px", lineHeight: 1.6 }}>(all family collections include a private online gallery for sharing and download and print release)</p>}
                <div style={{ flex: 1 }}>
                  {s.collections.map((c, j) => (
                    <div key={j} style={{ marginBottom: j < s.collections.length - 1 ? "16px" : 0, paddingBottom: j < s.collections.length - 1 ? "16px" : 0, borderBottom: j < s.collections.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 500, marginBottom: "6px", color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span>{c.name}</span>{c.price && <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem", fontWeight: 400, color: "var(--accent)" }}>{c.price}</span>}</div>
                      <p style={{ color: "var(--text-light)", fontSize: "0.82rem", lineHeight: 1.7, fontWeight: 300, whiteSpace: "pre-line" }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
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
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>{SITE_CONTENT.availabilityLabel}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 400 }}>{SITE_CONTENT.availabilityTitle}</div>
              <div onClick={() => scrollTo("contact")} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", fontWeight: 400, color: "var(--accent)", marginTop: "8px", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "4px" }}>Inquire about our Senior Rep Program</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PRODUCTS */}
      <section id="products" className="bv-section" style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.productsTagline }</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "14px" }}>{ SITE_CONTENT.productsTitle }</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>Your images deserve to be showcased.</p>
            <p style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 400, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>LINKS TO ORDER...COMING SOON!! Until then, please contact me to place all orders.</p>
          </div>
        </AnimatedSection>
        <div className="bv-grid-products" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
          {PRODUCTS.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div style={{ padding: "28px 22px", border: "1px solid var(--border)", borderRadius: "3px", textAlign: "center", transition: "all 0.35s ease", background: "var(--card-bg)", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#D988A4"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--accent-light)" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 500, marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "0.78rem", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ color: "var(--muted)", fontSize: "0.78rem", fontWeight: 300, marginBottom: "18px" }}>Have questions about specific products, sizes or pricing? Feel free to contact me...I would love to help with your designs!</p>
            <button className="bv-btn-outline" onClick={() => { setFormData(prev => ({ ...prev, type: "Other", message: "I'm interested in ordering products! (gallery wraps, acrylics, metals, albums, prints, etc.)" })); scrollTo("contact"); }}>Inquire About Products</button>
          </div>
        </AnimatedSection>
      </section>

      {/* GIFT CERTIFICATES */}
      <section className="bv-section" style={{ padding: "60px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <AnimatedSection>
            <div className="bv-gift-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>The Perfect Gift</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 400, marginBottom: "18px", lineHeight: 1.3 }}>Give the Gift of <em style={{ fontStyle: "italic", color: "var(--accent)" }}>bella</em></h2>
                <p style={{ color: "var(--text-light)", fontSize: "0.88rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "8px" }}>Gift certificates can be used for any session, product, or combination of both {"\u2014"} from a full senior experience to a gorgeous piece of artwork for your home.</p>
                <p style={{ color: "var(--muted)", fontSize: "0.78rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "20px" }}>Available in any amount. Never expires. Your recipient(s) will receive a personalized bella digital gift certificate straight to their inbox.</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
                  {["175", "375", "500", "Custom"].map(amt => (
                    <button key={amt} onClick={() => setGiftAmount(amt)} style={{ padding: "6px 14px", borderRadius: "3px", cursor: "pointer", background: giftAmount === amt ? "var(--accent)" : "var(--card-bg)", color: giftAmount === amt ? "#fff" : "var(--text-light)", border: "1px solid " + (giftAmount === amt ? "var(--accent)" : "var(--border)"), fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{amt === "Custom" ? "Custom" : "$" + amt}</button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
                  <button onClick={() => { setFormData(prev => ({ ...prev, type: "Gift Certificate", message: "I'm interested in a gift certificate" + (giftAmount === "Custom" ? " (custom amount)" : " ($" + giftAmount + ")") + " for a session or product. Can you send me more details?" })); scrollTo("contact"); }} className="bv-btn-outline">Inquire</button>
                  <button onClick={() => setShowGiftModal(true)} className="bv-btn-primary">Gift a Session or Product</button>
                  <button onClick={() => setShowHintModal(true)} className="bv-btn-outline" style={{ textAlign: "left", lineHeight: 1.6 }}>
                    Drop a Hint
                    <span style={{ display: "block", fontSize: "0.58rem", letterSpacing: "0.05em", textTransform: "none", opacity: 0.65, marginTop: "4px", fontWeight: 300 }}>
                      {"\u2727"} Tell Mom you'd love senior photos<br />
                      {"\u2727"} Remind Grandma her granddaughter's photos would look amazing on her wall<br />
                      {"\u2727"} Help your sister capture her baby's first year or a milestone anniversary
                    </span>
                  </button>
                </div>
              </div>
              <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "3px", padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "18px" }}>Gift Certificate</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 500, color: "var(--accent)", marginBottom: "6px" }}>{giftAmount === "Custom" ? "Custom" : "$" + giftAmount}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, marginBottom: "14px" }}>bella vita photography</div>
                <div style={{ width: "36px", height: "1px", background: "var(--border)", margin: "0 auto 14px" }} />
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.6 }}>Redeemable for any session or product<br />Never expires</div>
                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px" }}>
                  {["Sessions", "Gallery Wraps", "Albums", "Prints", "Acrylics"].map(tag => (
                    <span key={tag} style={{ fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "2px", border: "1px solid var(--border-light)", color: "var(--muted)", background: "var(--bg)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GIFT MESSAGE MODAL */}
      {showGiftModal && (
        <div onClick={() => { setShowGiftModal(false); setGiftStep(1); }} style={{
          position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "bvFadeIn 0.3s ease", padding: "20px",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "var(--bg)", borderRadius: "4px", padding: "40px 36px", maxWidth: "480px", width: "100%",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)", animation: "bvScaleIn 0.35s cubic-bezier(0.22,1,0.36,1)",
            position: "relative", maxHeight: "90vh", overflowY: "auto",
          }}>
            <button onClick={() => { setShowGiftModal(false); setGiftStep(1); }} style={{ position: "absolute", top: "14px", right: "18px", background: "none", border: "none", color: "var(--text)", fontSize: "1.3rem", cursor: "pointer", opacity: 0.35, fontWeight: 300 }}>{"\u2715"}</button>

            {giftSent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{"\u2727"}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--accent)", marginBottom: "10px" }}>Gift Certificate Started!</div>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}>
                  A surprise email is on its way to {giftForm.recipientName || "your recipient"}!
                  {giftForm.paymentMethod === "venmo" && <><br /><br />Opening Venmo so you can send payment...</>}
                  {giftForm.paymentMethod === "paypal" && <><br /><br />Opening PayPal so you can send payment...</>}
                  {giftForm.paymentMethod === "zelle" && <><br /><br />Send your Zelle payment to: <strong style={{ color: "var(--accent)" }}>{SITE_CONTENT.payments.zelle?.handle}</strong></>}
                  {giftForm.paymentMethod === "later" && <><br /><br />Taking you to the contact form so Rebecca can send payment details...</>}
                </p>
              </div>
            ) : giftStep === 1 ? (
              /* ── STEP 1: Gift Details ── */
              <>
                <div style={{ textAlign: "center", marginBottom: "28px" }}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Step 1 of 2</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, marginBottom: "6px" }}>Gift a Session or Product</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }}>Purchase a bella vita gift certificate for someone special. Redeemable for any session, gallery wrap, album, prints, or combination {"\u2014"} they choose!</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Your Name</label>
                    <input className="bv-input" placeholder="Your name" value={giftForm.senderName} onChange={e => setGiftForm({ ...giftForm, senderName: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Your Email <span style={{ opacity: 0.5 }}>(for confirmation)</span></label>
                    <input className="bv-input" type="email" placeholder="your@email.com" value={giftForm.senderEmail} onChange={e => setGiftForm({ ...giftForm, senderEmail: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Recipient's Name</label>
                    <input className="bv-input" placeholder="Who is this gift for?" value={giftForm.recipientName} onChange={e => setGiftForm({ ...giftForm, recipientName: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Recipient's Email</label>
                    <input className="bv-input" type="email" placeholder="their@email.com" value={giftForm.recipientEmail} onChange={e => setGiftForm({ ...giftForm, recipientEmail: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Gift Certificate Amount</label>
                    <input className="bv-input" type="text" placeholder="e.g. $175, $375, $500" value={giftForm.giftCertAmount} onChange={e => setGiftForm({ ...giftForm, giftCertAmount: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Personal Message <span style={{ opacity: 0.5 }}>(optional)</span></label>
                    <textarea className="bv-input" placeholder="Add a personal note... e.g. 'Happy birthday! You deserve to feel beautiful!'" rows={3} value={giftForm.message} onChange={e => setGiftForm({ ...giftForm, message: e.target.value })} style={{ resize: "vertical", minHeight: "80px" }} />
                  </div>
                </div>
                <button onClick={() => setGiftStep(2)} className="bv-btn-primary" style={{ width: "100%", marginTop: "24px", opacity: (!giftForm.recipientEmail || !giftForm.senderName || !giftForm.senderEmail) ? 0.4 : 1 }} disabled={!giftForm.recipientEmail || !giftForm.senderName || !giftForm.senderEmail}>Next: Choose Payment {"\u2192"}</button>
              </>
            ) : (
              /* ── STEP 2: Payment Method ── */
              <>
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Step 2 of 2</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, marginBottom: "6px" }}>Choose Payment Method</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }}>Gift certificate for {giftForm.recipientName || "recipient"} {"\u00b7"} {giftAmount === "Custom" ? "Custom amount" : "$" + giftAmount}</p>
                </div>

                {/* Order summary */}
                <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border-light)", borderRadius: "3px", padding: "16px 20px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 300 }}>Gift certificate</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--accent)", fontWeight: 500 }}>{giftAmount === "Custom" ? "Custom" : "$" + giftAmount}</span>
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "var(--muted)", fontWeight: 300, lineHeight: 1.6 }}>
                    From: {giftForm.senderName} {"\u2192"} To: {giftForm.recipientName || "recipient"}
                  </div>
                </div>

                {/* Payment options */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {[
                    { id: "venmo", label: "Venmo", desc: SITE_CONTENT.payments.venmo?.handle || "", icon: "\u24CB" },
                    { id: "paypal", label: "PayPal", desc: SITE_CONTENT.payments.paypal?.handle || "", icon: "\u24C5" },
                    { id: "zelle", label: "Zelle", desc: SITE_CONTENT.payments.zelle?.handle || "", icon: "\u24CF" },
                    { id: "later", label: "Pay Later", desc: "Rebecca will send payment details via email", icon: "\u2709" },
                  ].map(method => (
                    <button key={method.id} onClick={() => setGiftForm({ ...giftForm, paymentMethod: method.id })}
                      style={{
                        display: "flex", alignItems: "center", gap: "14px", width: "100%",
                        padding: "14px 18px", borderRadius: "3px", cursor: "pointer", textAlign: "left",
                        background: giftForm.paymentMethod === method.id ? "var(--accent)" : "var(--card-bg)",
                        color: giftForm.paymentMethod === method.id ? "#fff" : "var(--text)",
                        border: "1px solid " + (giftForm.paymentMethod === method.id ? "var(--accent)" : "var(--border)"),
                        transition: "all 0.3s ease", fontFamily: "var(--font-body)",
                      }}
                      onMouseEnter={e => { if (giftForm.paymentMethod !== method.id) { e.currentTarget.style.borderColor = "var(--accent-light)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; } }}
                      onMouseLeave={e => { if (giftForm.paymentMethod !== method.id) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; } }}
                    >
                      <span style={{ fontSize: "1.2rem", opacity: giftForm.paymentMethod === method.id ? 1 : 0.5, flexShrink: 0 }}>{method.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.04em" }}>{method.label}</div>
                        <div style={{ fontSize: "0.65rem", opacity: giftForm.paymentMethod === method.id ? 0.8 : 0.5, marginTop: "2px", fontWeight: 300 }}>{method.desc}</div>
                      </div>
                      {giftForm.paymentMethod === method.id && <span style={{ fontSize: "0.9rem" }}>{"\u2713"}</span>}
                    </button>
                  ))}
                </div>

                {/* Zelle instructions when selected */}
                {giftForm.paymentMethod === "zelle" && (
                  <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border-light)", borderRadius: "3px", padding: "14px 18px", marginBottom: "16px", animation: "bvSlideIn 0.3s ease" }}>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-light)", lineHeight: 1.7, fontWeight: 300 }}>
                      <strong style={{ fontWeight: 500, color: "var(--text)" }}>Zelle Instructions:</strong> Open your banking app, select Zelle, and send {giftAmount !== "Custom" ? "$" + giftAmount : "your amount"} to <strong style={{ color: "var(--accent)" }}>{SITE_CONTENT.payments.zelle?.handle}</strong>. Include "{giftForm.recipientName || "gift certificate"}" in the memo.
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setGiftStep(1)} className="bv-btn-outline" style={{ flex: "0 0 auto", padding: "14px 20px" }}>{"\u2190"} Back</button>
                  <button onClick={handleSendGift} className="bv-btn-primary" style={{ flex: 1, opacity: !giftForm.paymentMethod ? 0.4 : 1 }} disabled={!giftForm.paymentMethod}>
                    {giftForm.paymentMethod === "venmo" ? "Send & Open Venmo" : giftForm.paymentMethod === "paypal" ? "Send & Open PayPal" : giftForm.paymentMethod === "zelle" ? "Send Gift Notification" : giftForm.paymentMethod === "later" ? "Send & Pay Later" : "Complete Purchase"} {"\u2727"}
                  </button>
                </div>
                <p style={{ textAlign: "center", marginTop: "14px", fontSize: "0.68rem", color: "var(--muted)", fontWeight: 300, lineHeight: 1.6 }}>
                  {giftForm.paymentMethod === "later" ? "A surprise email will be sent to your recipient. Rebecca will follow up with payment details." : "A surprise email will be sent to your recipient and Rebecca will be notified of your purchase."}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* SEND TO SOMEONE SPECIAL MODAL */}
      {showHintModal && (
        <div onClick={() => setShowHintModal(false)} style={{
          position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "bvFadeIn 0.3s ease", padding: "20px",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "var(--bg)", borderRadius: "4px", padding: "36px 32px", maxWidth: "480px", width: "100%",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)", animation: "bvScaleIn 0.35s cubic-bezier(0.22,1,0.36,1)",
            position: "relative", maxHeight: "90vh", overflowY: "auto",
          }}>
            <button onClick={() => setShowHintModal(false)} style={{ position: "absolute", top: "14px", right: "18px", background: "none", border: "none", color: "var(--text)", fontSize: "1.3rem", cursor: "pointer", opacity: 0.35, fontWeight: 300 }}>{"\u2715"}</button>
            {hintSent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{"\u2661"}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--accent)", marginBottom: "10px" }}>{hintForm.scenario === "hint" ? "Hint Dropped!" : "Recommendation Sent!"}</div>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}>Your email app will open with the message ready to review and send. Rebecca will be notified too!</p>
              </div>
            ) : (
              <>
                <div style={{ textAlign: "center", marginBottom: "22px" }}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Drop a Hint or Recommend Us</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, lineHeight: 1.3 }}>We'll write the email {"\u2014"}<br />you just hit send</h3>
                </div>

                {/* Step 1: Pick scenario */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "8px" }}>I want to...</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <button onClick={() => setHintForm({ ...hintForm, scenario: "hint", occasion: "", forWho: "" })} style={{
                      padding: "12px 16px", borderRadius: "3px", cursor: "pointer", textAlign: "left",
                      background: hintForm.scenario === "hint" ? "var(--accent)" : "var(--card-bg)",
                      color: hintForm.scenario === "hint" ? "#fff" : "var(--text-light)",
                      border: "1px solid " + (hintForm.scenario === "hint" ? "var(--accent)" : "var(--border)"),
                      fontFamily: "var(--font-body)", transition: "all 0.3s ease",
                    }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 400 }}>Drop a hint that I'd love a session {"\u2727"}</div>
                      <div style={{ fontSize: "0.66rem", opacity: 0.7, marginTop: "2px", fontStyle: "italic" }}>{"\"Mom... just saying, I'd love this for my birthday\""}</div>
                    </button>
                    <button onClick={() => setHintForm({ ...hintForm, scenario: "recommend", occasion: "", forWho: "" })} style={{
                      padding: "12px 16px", borderRadius: "3px", cursor: "pointer", textAlign: "left",
                      background: hintForm.scenario === "recommend" ? "var(--accent)" : "var(--card-bg)",
                      color: hintForm.scenario === "recommend" ? "#fff" : "var(--text-light)",
                      border: "1px solid " + (hintForm.scenario === "recommend" ? "var(--accent)" : "var(--border)"),
                      fontFamily: "var(--font-body)", transition: "all 0.3s ease",
                    }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 400 }}>Suggest bella vita for someone else {"\u2661"}</div>
                      <div style={{ fontSize: "0.66rem", opacity: 0.7, marginTop: "2px", fontStyle: "italic" }}>{"\"Mom, you should book Emma's senior photos with her!\""}</div>
                    </button>
                  </div>
                </div>

                {/* Step 2: Occasion */}
                {hintForm.scenario && (
                  <div style={{ animation: "bvSlideIn 0.3s ease" }}>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "8px" }}>What kind of session?</label>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {["Senior Portraits", "Family Photos", "Wedding", "Products / Gift", "General"].map(occ => (
                          <button key={occ} onClick={() => setHintForm({ ...hintForm, occasion: occ })} style={{ padding: "7px 14px", borderRadius: "3px", cursor: "pointer", background: hintForm.occasion === occ ? "var(--accent)" : "var(--card-bg)", color: hintForm.occasion === occ ? "#fff" : "var(--text-light)", border: "1px solid " + (hintForm.occasion === occ ? "var(--accent)" : "var(--border)"), fontSize: "0.66rem", letterSpacing: "0.1em", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{occ === "General" ? "Other" : occ}</button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Contact info */}
                    {hintForm.occasion && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", animation: "bvSlideIn 0.3s ease" }}>
                        <div>
                          <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "5px" }}>Your Name</label>
                          <input className="bv-input" style={{ padding: "11px 14px" }} placeholder="Your name" value={hintForm.senderName} onChange={e => setHintForm({ ...hintForm, senderName: e.target.value })} />
                        </div>
                        <div>
                          <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "5px" }}>
                            {hintForm.scenario === "hint" ? "Who are you sending this to?" : "Who are you emailing?"}
                          </label>
                          <input className="bv-input" style={{ padding: "11px 14px" }} placeholder={hintForm.scenario === "hint" ? "e.g. Mom, Grandma, Dad" : "e.g. Mom, a friend, your sister"} value={hintForm.recipientName} onChange={e => setHintForm({ ...hintForm, recipientName: e.target.value })} />
                        </div>
                        {hintForm.scenario === "recommend" && hintForm.occasion !== "General" && hintForm.occasion !== "Products / Gift" && (
                          <div>
                            <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "5px" }}>
                              {hintForm.occasion === "Senior Portraits" ? "Who's the senior?" : hintForm.occasion === "Wedding" ? "Who's getting married?" : "Who's in the photos?"}
                              {" "}<span style={{ opacity: 0.45, textTransform: "none", letterSpacing: "0.05em" }}>(optional)</span>
                            </label>
                            <input className="bv-input" style={{ padding: "11px 14px" }} placeholder={hintForm.occasion === "Senior Portraits" ? "e.g. Emma (their granddaughter)" : hintForm.occasion === "Wedding" ? "e.g. Sarah & Jake" : "e.g. their family"} value={hintForm.forWho} onChange={e => setHintForm({ ...hintForm, forWho: e.target.value })} />
                          </div>
                        )}
                        <div>
                          <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "5px" }}>Their Email Address</label>
                          <input className="bv-input" style={{ padding: "11px 14px" }} type="email" placeholder="their@email.com" value={hintForm.recipientEmail} onChange={e => setHintForm({ ...hintForm, recipientEmail: e.target.value })} />
                        </div>

                        {/* Message preview */}
                        {hintForm.senderName && hintForm.recipientName && (
                          <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border-light)", borderRadius: "3px", padding: "12px 14px", animation: "bvFadeIn 0.3s ease" }}>
                            <div style={{ fontSize: "0.56rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>{"\u2709"} Email Preview</div>
                            <p style={{ fontSize: "0.75rem", color: "var(--text-light)", lineHeight: 1.65, fontStyle: "italic", fontWeight: 300, margin: 0 }}>
                              {hintForm.scenario === "hint" ? (
                                <>Hey {hintForm.recipientName}! So... this is me not-so-subtly dropping a hint. {hintForm.occasion === "Senior Portraits" ? "I've been looking into senior portrait photographers and I found someone AMAZING..." : hintForm.occasion === "Wedding" ? "We've been looking at wedding photographers and we found THE one..." : hintForm.occasion === "Family Photos" ? "I've been wanting family photos SO badly and I found the perfect photographer..." : hintForm.occasion === "Products / Gift" ? "I found this photographer with the most beautiful gallery wraps and albums..." : "I found this amazing photographer and a session would make my year..."}</>
                              ) : (
                                <>Hey {hintForm.recipientName}! {hintForm.occasion === "Senior Portraits" ? ("I HAD to tell you about this photographer" + (hintForm.forWho ? " for " + hintForm.forWho + "'s senior photos" : " for senior portraits") + ". Her work is unreal...") : hintForm.occasion === "Wedding" ? ("I found the most beautiful wedding photographer" + (hintForm.forWho ? " for " + hintForm.forWho + "'s big day" : "") + "! Her work is stunning...") : hintForm.occasion === "Family Photos" ? "I found the most wonderful family photographer and immediately thought of you..." : hintForm.occasion === "Products / Gift" ? "I know someone who'd love a beautiful gallery wrap or album of their photos..." : "I came across this incredible photographer and thought of you..."}</>
                              )}
                            </p>
                            <div style={{ fontSize: "0.6rem", color: "var(--muted)", marginTop: "6px", opacity: 0.5 }}>+ link to website, contact info & sign-off from {hintForm.senderName}</div>
                          </div>
                        )}

                        <button onClick={handleSendHint} className="bv-btn-primary" style={{ width: "100%", marginTop: "4px", opacity: (!hintForm.recipientEmail || !hintForm.senderName) ? 0.4 : 1 }}>
                          {hintForm.scenario === "hint" ? "Drop My Hint" : "Send Recommendation"} {"\u2661"}
                        </button>
                        <p style={{ textAlign: "center", fontSize: "0.65rem", color: "var(--muted)", fontWeight: 300, lineHeight: 1.5, margin: 0 }}>Opens your email app with the full message ready to review & send.</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* TESTIMONIALS */}
      <section className="bv-section" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.testimonialsTagline }</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>{ SITE_CONTENT.testimonialsTitle }</h2>
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
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.faqTagline }</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}>{ SITE_CONTENT.faqTitle }</h2>
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
          <AnimatedSection delay={0.3}><div style={{ textAlign: "center", marginTop: "40px" }}><p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300 }}>Something else? <a href="mailto:bellavitaphoto@rocketmail.com" style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-light)" }}>Email me</a></p></div></AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bv-section" style={{ padding: "80px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.contactTagline }</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "16px" }}>{ SITE_CONTENT.contactTitle }</h2>
              <p style={{ color: "var(--text-light)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>{SITE_CONTENT.contactDescription}</p>
              <p style={{ marginTop: "10px" }}><a href="mailto:bellavitaphoto@rocketmail.com" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", borderBottom: "1px solid var(--accent-light)" }}>bellavitaphoto@rocketmail.com</a></p>
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
                {["Senior Session", "Family Session", "Milestone Session", "Wedding", "Gift Certificate", "Other"].map(type => (
                  <button key={type} onClick={() => setFormData({ ...formData, type })} style={{ padding: "7px 18px", borderRadius: "3px", cursor: "pointer", background: formData.type === type ? "var(--accent)" : "var(--card-bg)", color: formData.type === type ? "#fff" : "var(--text-light)", border: "1px solid " + (formData.type === type ? "var(--accent)" : "var(--border)"), fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{type}</button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.message ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Your Story</label>
              <textarea className="bv-input" placeholder="Tell me about you..." rows={5} value={formData.message} onChange={e => { setFormData({ ...formData, message: e.target.value }); if (formErrors.message) setFormErrors(prev => ({ ...prev, message: undefined })); }} style={{ resize: "vertical", minHeight: "110px", borderColor: formErrors.message ? "#c9544d" : undefined }} />
              {formErrors.message && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.message}</div>}
            </div>
            <div style={{ marginTop: "36px", textAlign: "center" }}>
              {formSent ? <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--accent)", animation: "bvFadeIn 0.4s ease" }}>Thank you {"\u2014"} I'll be in touch soon {"\u2727"}</div>
              : <button className="bv-btn-primary" onClick={handleSubmit}>Send Message</button>}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <AnimatedSection>
        <div className="bv-section" style={{ padding: "52px 48px", textAlign: "center" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Follow Along</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 400, marginBottom: "12px" }}>See the <em style={{ fontStyle: "italic", color: "var(--accent)" }}>behind the scenes</em></h3>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, maxWidth: "380px", margin: "0 auto 22px", lineHeight: 1.7 }}>Session sneak peeks, bloopers, and the occasional bella pet cameo.</p>
          <a href="https://www.instagram.com/bellavitaphotography2/" target="_blank" rel="noopener noreferrer" className="bv-btn-outline" style={{ textDecoration: "none" }}>@bellavitaphotography2</a>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer style={{ padding: "52px 48px 28px", borderTop: "1px solid var(--border-light)", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "40px" }} className="bv-footer-grid">
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500, letterSpacing: "0.04em", marginBottom: "12px" }}><span style={{ color: "var(--accent)" }}>b</span>ella <span style={{ color: "var(--accent)" }}>v</span>ita</div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.8, fontWeight: 300, maxWidth: "280px" }}>{SITE_CONTENT.footerTagline}</p>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Navigate</div>
              {["Portfolio", "About", "Services", "FAQ", "Contact"].map(item => (
                <div key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ fontSize: "0.82rem", color: "var(--text-light)", cursor: "pointer", padding: "4px 0", fontWeight: 300, transition: "color 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C4567A"} onMouseLeave={e => e.currentTarget.style.color = "#5A554E"}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Sessions</div>
              {["Senior Sessions", "Family Sessions", "Milestones & Minis", "Weddings"].map(item => (
                <div key={item} style={{ fontSize: "0.82rem", color: "var(--text-light)", padding: "4px 0", fontWeight: 300 }}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Connect</div>
              <a href="https://www.instagram.com/bellavitaphotography2/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Instagram</a>
              <a href="https://www.facebook.com/bellavitaphotography2" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Facebook</a>
              <a href="mailto:bellavitaphoto@rocketmail.com" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>bellavitaphoto@rocketmail.com</a>
              <button onClick={() => setCurrentView("client-gallery")} className="bv-btn-outline" style={{ marginTop: "12px", padding: "10px 20px", fontSize: "0.62rem" }}>Client Gallery {"\u2192"}</button>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em", opacity: 0.6 }}>{"\u00a9"} {new Date().getFullYear()} bella vita photography. All rights reserved.</div>
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
            fontSize: "1.1rem", boxShadow: "0 4px 16px rgba(196,86,122,0.3)",
            animation: "bvFadeIn 0.35s ease", transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(196,86,122,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(196,86,122,0.3)"; }}
        >{"\u2191"}</button>
      )}
    </div>
  );
}
