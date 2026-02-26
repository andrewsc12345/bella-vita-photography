import { useState, useEffect, useRef } from "react";

const PORTFOLIO = [
  { id: 1, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", title: "Sunday Afternoon", category: "Families", aspect: "landscape" },
  { id: 2, src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80", title: "Chapter One", category: "Seniors", aspect: "portrait" },
  { id: 3, src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80", title: "Golden Together", category: "Families", aspect: "landscape" },
  { id: 4, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", title: "Unwritten", category: "Seniors", aspect: "portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80", title: "Our Whole World", category: "Families", aspect: "landscape" },
  { id: 6, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", title: "Fearless", category: "Seniors", aspect: "portrait" },
  { id: 7, src: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=800&q=80", title: "Little Hands", category: "Families", aspect: "portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80", title: "Main Character", category: "Seniors", aspect: "portrait" },
  { id: 9, src: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=800&q=80", title: "Rooted", category: "Families", aspect: "landscape" },
];

const TESTIMONIALS = [
  { name: "The Martinez Family", text: "Rebecca is the kind of person who remembers your kids' names, asks about your dog, and somehow captures your family in a way that makes you think 'oh wow, we actually look like THAT.' Our Kensington session last fall is framed all over our house now. Obsessed.", event: "Annual Family Session · Brighton" },
  { name: "Jennifer, Mom of Emma ('25)", text: "My daughter told me she'd hate the whole thing. She ended up not wanting to leave. Rebecca played her favorite music, hyped her up the whole time, and made her feel like a literal supermodel. Every single photo from Island Lake is a keeper. Her Lakeland friends won't stop asking who took them!", event: "Senior Portrait Session · Lakeland HS" },
  { name: "The Thompsons", text: "We've been going back to Rebecca every year since 2017. She's basically part of our family at this point. Her natural light style makes every session feel effortless, and the photos somehow keep getting better every single year. We will never go to anyone else.", event: "Family Sessions · Howell" },
];

const SERVICES = [
  { name: "Senior Portraits", description: "This is the one you'll look back on forever. We'll spend 90 minutes chasing natural light at up to two hand-picked locations across Livingston and Oakland County — golden hour at Kensington Metropark, the brick walls of downtown Milford, wildflower fields at Island Lake. Bring up to 3 outfits (I'll help you pick them). Each session is designed around YOUR style and personality. Includes 50+ edited images, your own private gallery, and social media crops.", price: "Starting at $450" },
  { name: "Family Sessions", description: "I know — getting the whole family together and in a good mood at the same time feels impossible. That's my specialty. We'll spend an hour on location at your favorite spot (or I'll pick one — Maybury State Park and downtown Brighton are stunners) using nothing but gorgeous natural light. I'll get your crew laughing, playing, and just being yourselves. Includes wardrobe coordination help, 40+ edited images, and a private gallery.", price: "Starting at $375" },
  { name: "Mini Sessions", description: "Short, sweet, and honestly kind of addictive. These 25-minute seasonal sessions are perfect for fall family photos, holiday cards, or just because your kids are cute and you need updated pictures. I pick the most gorgeous location, you show up and look amazing. I handle the rest. 15+ edited images, private gallery. Fair warning: these book out ridiculously fast every single time.", price: "Starting at $195" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "For senior portraits, I'd say 3–6 months ahead is ideal — summer and fall are my busiest seasons and I only take a limited number each month so I can give everyone my full attention. Family sessions usually book 1–3 months out. And mini sessions? Those sell out within DAYS of me announcing them. Seriously. Get on my email list if you want first dibs." },
  { q: "How many outfit changes can I bring?", a: "Seniors get up to 3 outfit changes! I send you a detailed style guide ahead of time with tips on colors, textures, and what looks amazing in Michigan's natural light (spoiler: earth tones are always a win). I'm also always happy to FaceTime and help you pick. For family sessions, one coordinated look usually works best — I'll help with that too." },
  { q: "What happens if it rains?", a: "Welcome to Michigan, right? If it's looking rainy, I'll text you 24 hours before your session and we'll reschedule to the next available date — no extra charge, no stress. I obsessively check the weather app so you don't have to. That said, a little overcast? Chef's kiss for photos. The soft light is gorgeous." },
  { q: "Where do sessions take place?", a: "Everywhere! I've got my favorite spots dialed in — Kensington Metropark for golden hour magic, Island Lake for wildflower vibes, downtown Brighton and Milford for that Main Street charm, Maybury State Park for the woodland feel. But honestly, some of my favorite sessions have been in people's backyards and living rooms. I'll help you pick the perfect spot based on the look you want." },
  { q: "When will I receive my photos?", a: "Your private online gallery will be ready within 2–3 weeks. I know waiting is hard (trust me, I'll be dying to show you sneak peeks). You'll get a password-protected link to view everything, download your favorites, and mark the ones you love most. Print orders ship within 7–10 business days after that." },
  { q: "I'm awkward in front of cameras. Help?", a: "Oh my gosh, you and literally 90% of my clients. Here's the secret: I don't ask you to pose and look at the camera the whole time. I ask you questions, crack jokes, play music, and tell you to just hang out with your people. The best photos happen when you forget I'm there. By the end, my clients are always like 'wait, that was actually fun?' Yes. Yes it was." },
];

const GOOGLE_REVIEWS = [
  { name: "Sarah M.", stars: 5, text: "If you're on the fence — just book her. My daughter came home from her senior session glowing and hasn't stopped talking about it. The photos are unreal. Rebecca just GETS teenagers.", date: "2 months ago" },
  { name: "The Nguyen Family", stars: 5, text: "Tried two other photographers before we found Rebecca. Night and day difference. Her natural light, on-location style is SO much better than a studio. She gets you laughing and playing and then somehow those are the best photos you've ever taken. Our Kensington prints are everywhere in our house.", date: "3 months ago" },
  { name: "Amanda K.", stars: 5, text: "The whole experience is incredible, start to finish. She sends you a style guide, texts you about outfits, remembers every detail. And then the gallery drops and your jaw hits the floor. Worth every single penny. BOOK HER.", date: "1 month ago" },
  { name: "David & Lisa T.", stars: 5, text: "She photographed our family of 7 including a toddler who refused to sit still and a teenager who refused to smile. Rebecca got amazing shots of BOTH of them. She is genuinely magic with people.", date: "4 months ago" },
];

const PRINT_PRODUCTS = [
  { name: "Fine Art Prints", description: "The kind of prints that make people stop and stare. Museum-quality, archival paper that won't fade. I've got one of my daughter on my hallway wall and it still makes me smile every single morning.", icon: "🖼️", price: "From $35" },
  { name: "Canvas Gallery Wraps", description: "These are my personal favorite. Rich, textured, ready to hang — they turn a photo into a conversation piece. Every client who orders one orders a second.", icon: "🎨", price: "From $175" },
  { name: "Heirloom Albums", description: "Lay-flat, leather-bound, thick luxurious pages. I design each one by hand. Honestly, when I deliver these, moms cry. Grandmas definitely cry. I also sometimes cry.", icon: "📖", price: "From $450" },
  { name: "Grad Announcements", description: "Custom-designed announcements featuring your senior's best portraits. Your kid worked hard to get here — let's make sure everyone knows it. Premium cardstock, matching envelopes.", icon: "🎓", price: "From $125" },
];

const DEFAULT_CLIENT_GALLERIES = [
  {
    id: "g1", clientName: "Emma Richardson \u2013 Lakeland HS '26", sessionType: "Senior Portraits", date: "2025-10-15", password: "emma2026",
    coverImage: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80", title: "Golden Hour" },
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", title: "Sunlit" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", title: "Confident" },
      { src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80", title: "Dreamer" },
      { src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80", title: "Wildflower" },
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", title: "Downtown" },
    ]
  },
  {
    id: "g2", clientName: "The Martinez Family", sessionType: "Family Session", date: "2025-09-28", password: "martinez2025",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", title: "All Together" },
      { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80", title: "Golden Light" },
      { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80", title: "Our World" },
      { src: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=800&q=80", title: "Rooted" },
      { src: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=800&q=80", title: "Tiny Hands" },
    ]
  },
  {
    id: "g3", clientName: "Jake Thompson", sessionType: "Senior Portraits", date: "2025-11-02", password: "jake2026",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", title: "Urban Cool" },
      { src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80", title: "Natural" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", title: "Light Study" },
    ]
  }
];

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
      opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>{children}</div>
  );
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  if (!image) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "zoom-out", animation: "lbFade 0.4s ease",
    }}>
      <img src={image.src} alt={image.title} style={{
        maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain",
        borderRadius: "2px", animation: "lbScale 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }} />
      <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", textAlign: "center", color: "#fff" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", letterSpacing: "0.05em" }}>{image.title}</div>
        {image.category && <div style={{ fontFamily: "'Karla', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.6, marginTop: "6px" }}>{image.category}</div>}
      </div>
      <button onClick={onClose} aria-label="Close lightbox" style={{
        position: "absolute", top: "24px", right: "28px", background: "none", border: "none",
        color: "#fff", fontSize: "2rem", cursor: "pointer", opacity: 0.7, fontFamily: "'Karla', sans-serif", fontWeight: 300,
      }}>✕</button>
    </div>
  );
}

/* ─── Client Gallery Components ─── */
function ClientGalleryPage({ galleries, onBack }) {
  const [passwordInput, setPasswordInput] = useState("");
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [unlockedGallery, setUnlockedGallery] = useState(null);
  const [error, setError] = useState("");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [favorited, setFavorited] = useState({});

  const handleUnlock = () => {
    if (!selectedGallery) return;
    if (passwordInput === selectedGallery.password) {
      setUnlockedGallery(selectedGallery);
      setError("");
      setPasswordInput("");
    } else {
      setError("Incorrect password. Please try again or contact Rebecca.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const toggleFavorite = (idx) => {
    setFavorited(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const favCount = Object.values(favorited).filter(Boolean).length;

  // Gallery viewer (unlocked)
  if (unlockedGallery) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a08", color: "#e8e4de", fontFamily: "'Karla', sans-serif" }}>
        <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
        <div style={{
          position: "sticky", top: 0, zIndex: 100, padding: "20px 48px",
          background: "rgba(10,10,8,0.95)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e8e4de0a", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button onClick={() => { setUnlockedGallery(null); setSelectedGallery(null); setFavorited({}); }} style={{
            background: "none", border: "none", color: "#c9a96e", cursor: "pointer",
            fontFamily: "'Karla', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            ← Back to Galleries
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 300 }}>
              {unlockedGallery.clientName}
            </div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de55", marginTop: "2px" }}>
              {unlockedGallery.sessionType} · {new Date(unlockedGallery.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>
          </div>
          <div style={{ fontSize: "0.75rem", color: "#c9a96e", letterSpacing: "0.1em" }}>
            {favCount > 0 ? `♥ ${favCount} favorited` : `${unlockedGallery.images.length} photos`}
          </div>
        </div>

        <div style={{ padding: "24px 48px 0", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "#e8e4de55", lineHeight: 1.7, fontWeight: 300 }}>
            Click any photo to view full size. Tap the heart to mark your favorites — I'll use your selections for the final album!
          </p>
        </div>

        <div style={{ padding: "32px 48px 100px", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {unlockedGallery.images.map((img, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "2px", overflow: "hidden", aspectRatio: "4/5" }}>
                <img src={img.src} alt={img.title} onClick={() => setLightboxImg(img)} loading="lazy"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block", cursor: "zoom-in",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease",
                    filter: "brightness(0.95)",
                  }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.03)"; e.target.style.filter = "brightness(1.05)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.95)"; }}
                />
                <button onClick={(e) => { e.stopPropagation(); toggleFavorite(i); }} style={{
                  position: "absolute", bottom: "12px", right: "12px", background: favorited[i] ? "#c9a96e" : "rgba(10,10,8,0.6)",
                  border: favorited[i] ? "1px solid #c9a96e" : "1px solid #e8e4de33", borderRadius: "50%",
                  width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease", backdropFilter: "blur(8px)",
                  color: favorited[i] ? "#0a0a08" : "#e8e4de", fontSize: "1.1rem",
                }}>
                  {favorited[i] ? "♥" : "♡"}
                </button>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 16px 14px",
                  background: "linear-gradient(to top, rgba(10,10,8,0.7), transparent)", pointerEvents: "none",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#e8e4debb" }}>{img.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {favCount > 0 && (
          <div style={{
            position: "fixed", bottom: 0, left: 0, right: 0, padding: "16px 48px",
            background: "rgba(10,10,8,0.95)", backdropFilter: "blur(12px)",
            borderTop: "1px solid #c9a96e33", display: "flex", justifyContent: "space-between", alignItems: "center",
            animation: "lbFade 0.4s ease", zIndex: 100,
          }}>
            <div style={{ fontSize: "0.85rem", color: "#e8e4de99" }}>
              You've selected <span style={{ color: "#c9a96e", fontWeight: 500 }}>{favCount}</span> favorite{favCount !== 1 ? "s" : ""}
            </div>
            <button onClick={() => {
              const favList = unlockedGallery.images.filter((_, i) => favorited[i]).map(img => img.title).join(", ");
              alert(`Your favorites have been saved!\n\nSelected: ${favList}\n\nRebecca will receive your selections and reach out about your album.`);
            }} style={{
              padding: "10px 32px", background: "#c9a96e", color: "#0a0a08", border: "none",
              fontFamily: "'Karla', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer", borderRadius: "2px", transition: "all 0.3s ease",
            }}>
              Submit Favorites
            </button>
          </div>
        )}
      </div>
    );
  }

  // Password entry
  if (selectedGallery) {
    return (
      <div style={{
        minHeight: "100vh", background: "#0a0a08", color: "#e8e4de", fontFamily: "'Karla', sans-serif",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px",
      }}>
        <button onClick={() => { setSelectedGallery(null); setPasswordInput(""); setError(""); }} style={{
          position: "absolute", top: "32px", left: "48px", background: "none", border: "none",
          color: "#c9a96e", cursor: "pointer", fontFamily: "'Karla', sans-serif", fontSize: "0.8rem",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}>← Back</button>
        <div style={{ textAlign: "center", maxWidth: "420px" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto 32px",
            background: `url(${selectedGallery.coverImage}) center/cover`, border: "2px solid #c9a96e33",
          }} />
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "12px" }}>Private Gallery</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, marginBottom: "8px" }}>{selectedGallery.clientName}</h2>
          <p style={{ fontSize: "0.8rem", color: "#e8e4de44", marginBottom: "40px" }}>
            {selectedGallery.sessionType} · {selectedGallery.images.length} photos
          </p>
          <input type="password" placeholder="Enter your gallery password" value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleUnlock()}
            style={{
              width: "100%", padding: "16px 20px", background: "#e8e4de08",
              border: error ? "1px solid #e05555" : "1px solid #e8e4de15", borderRadius: "2px",
              color: "#e8e4de", fontFamily: "'Karla', sans-serif", fontSize: "0.95rem",
              outline: "none", textAlign: "center", letterSpacing: "0.1em", transition: "border-color 0.3s ease",
            }} />
          {error && <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "#e05555", animation: "lbFade 0.3s ease" }}>{error}</div>}
          <button onClick={handleUnlock} style={{
            marginTop: "24px", padding: "14px 48px", border: "1px solid #c9a96e", color: "#c9a96e",
            background: "transparent", fontFamily: "'Karla', sans-serif", fontSize: "0.8rem",
            letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.4s ease", borderRadius: "2px",
          }}
            onMouseEnter={e => { e.target.style.background = "#c9a96e"; e.target.style.color = "#0a0a08"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c9a96e"; }}
          >View Gallery</button>
          <p style={{ marginTop: "32px", fontSize: "0.75rem", color: "#e8e4de33", lineHeight: 1.7 }}>
            Your password was included in your session delivery email.<br />
            Can't find it? Email <a href="mailto:rebecca.henson@yahoo.com" style={{ color: "#c9a96e55", textDecoration: "none" }}>rebecca.henson@yahoo.com</a>
          </p>
        </div>
      </div>
    );
  }

  // Gallery listing
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a08", color: "#e8e4de", fontFamily: "'Karla', sans-serif" }}>
      <div style={{ padding: "32px 48px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#c9a96e", cursor: "pointer",
          fontFamily: "'Karla', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
        }}>← Back to Site</button>
      </div>
      <div style={{ textAlign: "center", padding: "40px 48px 64px" }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Password Protected</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "16px" }}>Client Galleries</h1>
        <p style={{ color: "#e8e4de66", fontSize: "0.9rem", fontWeight: 300, maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
          Welcome! Find your session below and enter the password provided in your delivery email to view and favorite your photos.
        </p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px 100px", display: "grid", gap: "24px" }}>
        {galleries.map(gallery => (
          <div key={gallery.id} onClick={() => setSelectedGallery(gallery)}
            className="gallery-list-card"
            style={{
              display: "grid", gridTemplateColumns: "120px 1fr auto", gap: "28px", alignItems: "center",
              padding: "24px", border: "1px solid #e8e4de0a", borderRadius: "2px", cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a96e33"; e.currentTarget.style.background = "#e8e4de04"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e4de0a"; e.currentTarget.style.background = "transparent"; }}
          >
            <div style={{
              width: "120px", height: "90px", borderRadius: "2px", overflow: "hidden",
              backgroundImage: `url(${gallery.coverImage})`, backgroundSize: "cover", backgroundPosition: "center",
              filter: "brightness(0.85) saturate(0.9)",
            }} />
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, marginBottom: "6px" }}>{gallery.clientName}</h3>
              <div style={{ fontSize: "0.75rem", color: "#e8e4de55", letterSpacing: "0.1em" }}>
                {gallery.sessionType} · {new Date(gallery.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {gallery.images.length} photos
              </div>
            </div>
            <div className="gallery-list-arrow" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a96e88" }}>
              🔒 Enter →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Admin Panel ─── */
function AdminPanel({ galleries, setGalleries, onClose }) {
  const [authed, setAuthed] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminError, setAdminError] = useState("");
  const [newGallery, setNewGallery] = useState({ clientName: "", sessionType: "Senior Portraits", date: "", password: "", images: "" });
  const ADMIN_PASSWORD = "bellavita2025";

  const inputStyle = {
    width: "100%", padding: "12px 16px", background: "#e8e4de08", border: "1px solid #e8e4de15",
    borderRadius: "2px", color: "#e8e4de", fontFamily: "'Karla', sans-serif", fontSize: "0.85rem",
    outline: "none", marginTop: "6px",
  };
  const labelStyle = { fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de44", display: "block", marginTop: "16px" };

  if (!authed) {
    return (
      <div style={{
        minHeight: "100vh", background: "#0a0a08", color: "#e8e4de", fontFamily: "'Karla', sans-serif",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "32px", left: "48px", background: "none", border: "none",
          color: "#c9a96e", cursor: "pointer", fontFamily: "'Karla', sans-serif", fontSize: "0.8rem",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}>← Back</button>
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Admin Access</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, marginBottom: "32px" }}>Gallery Manager</h2>
          <input type="password" placeholder="Admin password" value={adminPw}
            onChange={e => setAdminPw(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                if (adminPw === ADMIN_PASSWORD) setAuthed(true);
                else { setAdminError("Incorrect password"); setTimeout(() => setAdminError(""), 2500); }
              }
            }}
            style={{
              width: "100%", padding: "14px 20px", background: "#e8e4de08", border: "1px solid #e8e4de15",
              borderRadius: "2px", color: "#e8e4de", fontFamily: "'Karla', sans-serif", fontSize: "0.95rem",
              outline: "none", textAlign: "center", letterSpacing: "0.1em",
            }}
          />
          {adminError && <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "#e05555" }}>{adminError}</div>}
          <p style={{ marginTop: "20px", fontSize: "0.7rem", color: "#e8e4de33" }}>Contact site admin for access credentials.</p>
        </div>
      </div>
    );
  }

  const handleAddGallery = () => {
    if (!newGallery.clientName || !newGallery.password || !newGallery.date) return;
    const imageList = newGallery.images.split("\n").map(s => s.trim()).filter(Boolean).map((url, i) => ({ src: url, title: `Photo ${i + 1}` }));
    const gallery = {
      id: "g" + Date.now(), clientName: newGallery.clientName, sessionType: newGallery.sessionType,
      date: newGallery.date, password: newGallery.password,
      coverImage: imageList[0]?.src || "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80",
      images: imageList.length > 0 ? imageList : [{ src: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80", title: "Sample" }],
    };
    setGalleries(prev => [...prev, gallery]);
    setNewGallery({ clientName: "", sessionType: "Senior Portraits", date: "", password: "", images: "" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a08", color: "#e8e4de", fontFamily: "'Karla', sans-serif", padding: "32px 48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: "#c9a96e", cursor: "pointer",
          fontFamily: "'Karla', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
        }}>← Back to Site</button>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}>Gallery Manager</div>
        <div style={{ fontSize: "0.7rem", color: "#c9a96e66" }}>{galleries.length} galleries</div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
        <div style={{ padding: "32px", border: "1px solid #c9a96e22", borderRadius: "2px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, marginBottom: "8px" }}>Create New Gallery</h3>
          <p style={{ fontSize: "0.75rem", color: "#e8e4de44", marginBottom: "8px" }}>Set up a password-protected gallery for a client session.</p>

          <label style={labelStyle}>Client Name</label>
          <input style={inputStyle} placeholder="e.g. Emma Richardson" value={newGallery.clientName}
            onChange={e => setNewGallery({ ...newGallery, clientName: e.target.value })} />

          <label style={labelStyle}>Session Type</label>
          <select value={newGallery.sessionType} onChange={e => setNewGallery({ ...newGallery, sessionType: e.target.value })}
            style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="Senior Portraits">Senior Portraits</option>
            <option value="Family Session">Family Session</option>
            <option value="Mini Session">Mini Session</option>
          </select>

          <label style={labelStyle}>Session Date</label>
          <input style={inputStyle} type="date" value={newGallery.date}
            onChange={e => setNewGallery({ ...newGallery, date: e.target.value })} />

          <label style={labelStyle}>Client Password</label>
          <input style={inputStyle} placeholder="Password for the client" value={newGallery.password}
            onChange={e => setNewGallery({ ...newGallery, password: e.target.value })} />

          <label style={labelStyle}>Image URLs (one per line)</label>
          <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical", fontFamily: "'Karla', sans-serif" }}
            placeholder={"https://example.com/photo1.jpg\nhttps://example.com/photo2.jpg"}
            value={newGallery.images} onChange={e => setNewGallery({ ...newGallery, images: e.target.value })} />

          <button onClick={handleAddGallery} style={{
            marginTop: "24px", padding: "12px 32px", background: "#c9a96e", color: "#0a0a08",
            border: "none", fontFamily: "'Karla', sans-serif", fontSize: "0.75rem",
            letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px",
            opacity: (!newGallery.clientName || !newGallery.password || !newGallery.date) ? 0.4 : 1,
            transition: "opacity 0.3s ease",
          }}>Create Gallery</button>
        </div>

        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, marginBottom: "24px" }}>Active Galleries</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {galleries.map(g => (
              <div key={g.id} style={{
                padding: "16px 20px", border: "1px solid #e8e4de0a", borderRadius: "2px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>{g.clientName}</div>
                  <div style={{ fontSize: "0.7rem", color: "#e8e4de44", marginTop: "2px" }}>
                    {g.sessionType} · {g.images.length} photos · pw: <span style={{ color: "#c9a96e66" }}>{g.password}</span>
                  </div>
                </div>
                <button onClick={() => setGalleries(prev => prev.filter(x => x.id !== g.id))} style={{
                  background: "none", border: "1px solid #e0555533", color: "#e05555", padding: "6px 14px",
                  borderRadius: "2px", cursor: "pointer", fontSize: "0.7rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", fontFamily: "'Karla', sans-serif", transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { e.target.style.background = "#e05555"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#e05555"; }}
                >Delete</button>
              </div>
            ))}
            {galleries.length === 0 && (
              <div style={{ padding: "32px", textAlign: "center", color: "#e8e4de33", fontSize: "0.85rem" }}>No galleries yet. Create one to get started!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
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

  useEffect(() => { setTimeout(() => setHeroLoaded(true), 200); }, []);

  // Lead magnet popup — only show once per session, and not if already submitted
  useEffect(() => {
    if (popupDismissed || styleGuideSent) return;
    const t = setTimeout(() => setShowStyleGuide(true), 15000);
    return () => clearTimeout(t);
  }, [popupDismissed, styleGuideSent]);

  // Scroll tracking for nav background opacity
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Seniors", "Families"];
  const filtered = activeFilter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === activeFilter);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (!formData.name) return alert("Please enter your name.");
    if (!emailRegex.test(formData.email)) return alert("Please enter a valid email address.");
    if (!formData.message) return alert("Please tell me about your vision.");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", email: "", message: "", type: "Senior Portraits" });
  };

  const handleStyleGuideSubmit = (fromPopup) => {
    if (!emailRegex.test(styleGuideEmail)) return;
    setStyleGuideSent(true);
    setStyleGuideEmail("");
    if (fromPopup) { setShowStyleGuide(false); setPopupDismissed(true); }
  };

  if (currentView === "client-gallery") return <ClientGalleryPage galleries={clientGalleries} onBack={() => setCurrentView("main")} />;
  if (currentView === "admin") return <AdminPanel galleries={clientGalleries} setGalleries={setClientGalleries} onClose={() => setCurrentView("main")} />;

  return (
    <div style={{ background: "#0a0a08", color: "#e8e4de", minHeight: "100vh", fontFamily: "'Karla', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #c9a96e44; color: #fff; }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lbScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); } 50% { transform: translate(-10%, 5%); }
          70% { transform: translate(8%, -5%); } 90% { transform: translate(-3%, 10%); }
        }
        .grain-overlay {
          position: fixed; inset: -50%; width: 200%; height: 200%; z-index: 1; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.03; animation: grain 8s steps(10) infinite;
        }
        .nav-link { position: relative; cursor: pointer; }
        .nav-link::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1px; background: #c9a96e; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-link:hover::after { width: 100%; }
        .gallery-img { cursor: zoom-in; transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease; filter: grayscale(20%) brightness(0.95); }
        .gallery-img:hover { transform: scale(1.03); filter: grayscale(0%) brightness(1.05); }
        .gallery-card { overflow: hidden; position: relative; }
        .gallery-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,8,0.6) 0%, transparent 50%); opacity: 0; transition: opacity 0.5s ease; pointer-events: none; }
        .gallery-card:hover::after { opacity: 1; }
        .filter-btn { background: none; border: none; color: #e8e4de88; font-family: 'Karla', sans-serif; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; padding: 8px 16px; transition: all 0.4s ease; position: relative; }
        .filter-btn.active, .filter-btn:hover { color: #c9a96e; }
        .filter-btn.active::after { content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: #c9a96e; }
        .input-field { background: transparent; border: none; border-bottom: 1px solid #e8e4de22; color: #e8e4de; font-family: 'Karla', sans-serif; font-size: 0.95rem; padding: 14px 0; width: 100%; outline: none; transition: border-color 0.3s ease; font-weight: 300; }
        .input-field:focus { border-color: #c9a96e; }
        .input-field::placeholder { color: #e8e4de33; }
        .service-card { border: 1px solid #e8e4de11; padding: 40px; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, #c9a96e, #e8d5b0); transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .service-card:hover { border-color: #c9a96e33; background: #e8e4de05; }
        .service-card:hover::before { width: 100%; }
        .cta-btn { display: inline-block; padding: 16px 48px; border: 1px solid #c9a96e; color: #c9a96e; font-family: 'Karla', sans-serif; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; background: transparent; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
        .cta-btn::before { content: ''; position: absolute; inset: 0; background: #c9a96e; transform: scaleX(0); transform-origin: right; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .cta-btn:hover { color: #0a0a08; }
        .cta-btn:hover::before { transform: scaleX(1); transform-origin: left; }
        .cta-btn span { position: relative; z-index: 1; }
        .mobile-menu { position: fixed; inset: 0; background: #0a0a08; z-index: 9998; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-btn { display: block !important; } .about-grid { grid-template-columns: 1fr !important; } .contact-grid { grid-template-columns: 1fr !important; } .gift-grid { grid-template-columns: 1fr !important; } .avail-banner { flex-direction: column !important; text-align: center; } .gallery-list-card { grid-template-columns: 80px 1fr !important; } .gallery-list-card .gallery-list-arrow { display: none !important; } }
        @media (min-width: 769px) { .mobile-btn { display: none !important; } }
      `}</style>

      <div className="grain-overlay" />

      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990,
        padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center",
        background: `rgba(10,10,8,${Math.min(0.98, 0.7 + scrollY / 500)})`,
        backdropFilter: "blur(12px)", transition: "background 0.3s ease",
        borderBottom: scrollY > 100 ? "1px solid #e8e4de08" : "1px solid transparent",
      }}>
        <div onClick={() => scrollTo("hero")} style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300,
          letterSpacing: "0.08em", cursor: "pointer", color: "#e8e4de",
        }}>
          <span style={{ color: "#c9a96e" }}>B</span>ella <span style={{ color: "#c9a96e" }}>V</span>ita
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
            <span key={item} className="nav-link" onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
              style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8e4de99", fontWeight: 400 }}>
              {item}
            </span>
          ))}
          <span className="nav-link" onClick={() => setCurrentView("client-gallery")}
            style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e99", fontWeight: 400 }}>
            Client Gallery
          </span>
        </div>
        <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", color: "#e8e4de", fontSize: "1.5rem", cursor: "pointer", display: "none",
        }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
            <span key={item} onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#e8e4de", cursor: "pointer", letterSpacing: "0.05em" }}>
              {item}
            </span>
          ))}
          <span onClick={() => { setMenuOpen(false); setCurrentView("client-gallery"); }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#c9a96e", cursor: "pointer", letterSpacing: "0.05em" }}>
            Client Gallery
          </span>
        </div>
      )}

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Hero */}
      <section id="hero" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1476234251651-f353f9217b8e?w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.3) contrast(1.1) saturate(0.8)",
          transform: heroLoaded ? "scale(1)" : "scale(1.1)", transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1), filter 2s ease",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,8,0.4) 60%, rgba(10,10,8,0.85) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px" }}>
          <div style={{
            fontFamily: "'Karla', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "28px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}>Capturing Life's Beautiful Moments · Est. 2009 · Michigan</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em", color: "#e8e4de",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
          }}>Your story is<br /><em style={{ fontWeight: 300, color: "#c9a96e" }}>worth telling</em></h1>
          <p style={{
            fontFamily: "'Karla', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#e8e4de88", maxWidth: "460px", margin: "32px auto 0", lineHeight: 1.8,
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
          }}>I'm Rebecca — a Michigan mom, natural light photographer, and believer that the best images happen when you stop posing and start living. Since 2009, I've been capturing families and seniors on location across Livingston and Oakland counties, one beautiful moment at a time.</p>
          <div style={{ marginTop: "48px", opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.1s" }}>
            <button className="cta-btn" onClick={() => scrollTo("contact")}><span>Capture Your Moment</span></button>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: heroLoaded ? 0.4 : 0, transition: "opacity 1s ease 1.5s" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #e8e4de, transparent)" }} />
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Recent Favorites</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.02em" }}>My Work</h2>
            <p style={{ color: "#e8e4de44", fontSize: "0.85rem", fontWeight: 300, maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.7 }}>
              Every single one of these sessions started with someone saying "I'm so awkward in front of cameras." Look at them now.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "56px", flexWrap: "wrap" }}>
            {categories.map(cat => (<button key={cat} className={`filter-btn ${activeFilter === cat ? "active" : ""}`} onClick={() => setActiveFilter(cat)}>{cat}</button>))}
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {filtered.map((img, i) => (
            <AnimatedSection key={img.id} delay={i * 0.08}>
              <div className="gallery-card" onClick={() => setLightboxImage(img)} onKeyDown={e => e.key === "Enter" && setLightboxImage(img)} tabIndex={0} role="button" aria-label={`View ${img.title} – ${img.category}`} style={{ borderRadius: "2px", aspectRatio: img.aspect === "portrait" ? "3/4" : "4/3" }}>
                <img className="gallery-img" src={img.src} alt={`${img.title} – ${img.category} photography in Livingston County Michigan`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 48px", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "40%", height: "1px", background: "linear-gradient(to right, transparent, #c9a96e22)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
          <AnimatedSection>
            <div style={{ position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" alt="Rebecca Henson – Senior and Family Photographer in Brighton Michigan" loading="lazy" style={{ width: "100%", maxWidth: "420px", aspectRatio: "3/4", objectFit: "cover", filter: "brightness(0.95) saturate(0.9)", borderRadius: "2px" }} />
              <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "120px", height: "120px", border: "1px solid #c9a96e33", borderRadius: "2px" }} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Hey, I'm Rebecca</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, marginBottom: "32px", lineHeight: 1.2 }}>
                The face behind <em style={{ color: "#c9a96e" }}>the camera</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#e8e4de99", fontSize: "0.95rem", lineHeight: 1.9, fontWeight: 300 }}>
                <p>I started Bella Vita Photography back in 2009 with a camera, a marketing degree from Davenport University, and a heart full of love for freezing beautiful moments in time. What began as photographing my own kids turned into a passion I've poured my whole soul into for over fifteen years — and I still get butterflies before every single session.</p>
                <p>I'm a natural light, on-location photographer, which means I chase golden hour like it's my job (because it literally is). There's something magical about Michigan light — the way it spills through the trees at Kensington Metropark, wraps around the brick walls of downtown Milford, or glows across the wildflower fields at Island Lake. No studio can recreate that.</p>
                <p>My approach is simple: every session is designed around YOU — your style, your personality, your family's energy. I don't do cookie-cutter. I get to know you first, then I create something that feels like <em>your</em> story, not anyone else's. Whether it's your senior year or your family's annual tradition, I want you to look at these photos in twenty years and feel everything all over again.</p>
                <p>Proud Lakeland High School mom. Currently booking Class of 2027 seniors and family sessions across Brighton, Howell, Hartland, Milford, South Lyon, Novi, Northville, and everywhere in between.</p>
              </div>
              <div style={{ marginTop: "40px", display: "flex", gap: "32px", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e88" }}>
                <span>Est. 2009</span><span style={{ color: "#e8e4de22" }}>|</span><span>Natural Light</span><span style={{ color: "#e8e4de22" }}>|</span><span>On Location</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Image Break */}
      <AnimatedSection>
        <div style={{ margin: "60px 0", padding: "0 48px" }}>
          <div style={{ width: "100%", height: "50vh", overflow: "hidden", borderRadius: "2px", backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,8,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontStyle: "italic", fontWeight: 300, color: "#e8e4de", textAlign: "center", maxWidth: "600px", lineHeight: 1.6, padding: "0 24px" }}>
                "Every session is designed around your style, your personality, your story. I don't do cookie-cutter — I capture the real, beautiful moments that make your family yours."<br /><span style={{ fontSize: "0.7em", color: "#c9a96e88", fontStyle: "normal", letterSpacing: "0.15em", textTransform: "uppercase" }}>— Rebecca, Est. 2009</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <section id="services" style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>What I Offer</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>The Experience</h2>
            <p style={{ color: "#e8e4de55", fontSize: "0.85rem", fontWeight: 300, maxWidth: "500px", margin: "16px auto 0", lineHeight: 1.7 }}>
              On location. Natural light. Designed around you. Every session starts with getting to know your style and personality so the photos feel authentically, beautifully yours.
            </p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {SERVICES.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="service-card" style={{ borderRadius: "2px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "20px" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 400, marginBottom: "20px" }}>{service.name}</h3>
                <p style={{ color: "#e8e4de77", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, flex: 1 }}>{service.description}</p>
                <div style={{ marginTop: "28px", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#c9a96e" }}>{service.price}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Availability Banner */}
      <AnimatedSection>
        <div style={{ margin: "0", padding: "40px 48px", background: "linear-gradient(135deg, #1a1508 0%, #0d0d0b 100%)", borderTop: "1px solid #c9a96e22", borderBottom: "1px solid #c9a96e22" }}>
          <div className="avail-banner" style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "8px" }}>✦ Now Booking</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, color: "#e8e4de" }}>Class of 2027 Senior Portraits & Fall Family Sessions</div>
            </div>
            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              {[
                { label: "Fall Senior Slots", count: "4", sub: "remaining" },
                { label: "Fall Family Slots", count: "6", sub: "remaining" },
                { label: "Mini Sessions", count: "Oct 19", sub: "next date" },
              ].map((slot, i) => (
                <div key={i} style={{ textAlign: "center", padding: "12px 20px", border: "1px solid #c9a96e22", borderRadius: "2px", minWidth: "110px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#c9a96e", fontWeight: 400 }}>{slot.count}</div>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8e4de55", marginTop: "2px" }}>{slot.sub}</div>
                  <div style={{ fontSize: "0.6rem", color: "#e8e4de33", marginTop: "4px" }}>{slot.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Print Products & Albums */}
      <section id="products" style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>The Stuff You'll Actually Keep</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>Prints & Albums</h2>
            <p style={{ color: "#e8e4de55", fontSize: "0.9rem", fontWeight: 300, maxWidth: "520px", margin: "16px auto 0", lineHeight: 1.7 }}>
              I'll be real with you — your phone will eventually die. Clouds get hacked. But a canvas on your wall or an album on your coffee table? That's forever. These are the products I'm proudest to offer.
            </p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {PRINT_PRODUCTS.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                padding: "36px 28px", border: "1px solid #e8e4de0a", borderRadius: "2px", textAlign: "center",
                transition: "all 0.4s ease", cursor: "default", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a96e33"; e.currentTarget.style.background = "#e8e4de04"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e4de0a"; e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{product.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "12px" }}>{product.name}</h3>
                <p style={{ color: "#e8e4de66", fontSize: "0.82rem", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{product.description}</p>
                <div style={{ marginTop: "16px", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#c9a96e" }}>{product.price}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Gift Certificates */}
      <section id="gifts" style={{ padding: "80px 48px", background: "#0d0d0b" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <div className="gift-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Grandparents Love These</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, marginBottom: "20px", lineHeight: 1.3 }}>
                  Give the Gift of <em style={{ color: "#c9a96e" }}>Beautiful Memories</em>
                </h2>
                <p style={{ color: "#e8e4de77", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "24px" }}>
                  The best gift I've ever received was a photo session someone gave me when my kids were little. I want to be that gift for your family. Gift certificates come in any amount, never expire, and I'll send a gorgeous digital certificate straight to their inbox. Perfect for Mother's Day, birthdays, graduation, or Christmas.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
                  {["195", "375", "450", "Custom"].map(amt => (
                    <button key={amt} onClick={() => setGiftAmount(amt)} style={{
                      padding: "8px 20px", borderRadius: "2px", cursor: "pointer",
                      background: giftAmount === amt ? "#c9a96e" : "transparent",
                      color: giftAmount === amt ? "#0a0a08" : "#e8e4de66",
                      border: `1px solid ${giftAmount === amt ? "#c9a96e" : "#e8e4de22"}`,
                      fontSize: "0.75rem", letterSpacing: "0.1em", fontFamily: "'Karla', sans-serif",
                      transition: "all 0.3s ease",
                    }}>{amt === "Custom" ? "Custom" : `$${amt}`}</button>
                  ))}
                </div>
                <button onClick={() => {
                  setFormData(prev => ({ ...prev, type: "Gift Certificate", message: `Gift certificate request: $${giftAmount === "Custom" ? "Custom amount" : giftAmount}` }));
                  scrollTo("contact");
                }} style={{
                  padding: "12px 36px", border: "1px solid #c9a96e", color: "#c9a96e",
                  background: "transparent", fontFamily: "'Karla', sans-serif", fontSize: "0.75rem",
                  letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer",
                  transition: "all 0.4s ease", borderRadius: "2px",
                }}
                  onMouseEnter={e => { e.target.style.background = "#c9a96e"; e.target.style.color = "#0a0a08"; }}
                  onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c9a96e"; }}
                >
                  {giftAmount === "Custom" ? "Inquire About Custom Gift" : "Inquire About Gift Certificate"}
                </button>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #1a1508, #0d0d0b)", border: "1px solid #c9a96e22",
                borderRadius: "2px", padding: "40px 32px", textAlign: "center",
              }}>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e88", marginBottom: "20px" }}>Gift Certificate</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: "#c9a96e", marginBottom: "8px" }}>
                  {giftAmount === "Custom" ? "Custom Amount" : `$${giftAmount}`}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 300, color: "#e8e4de", marginBottom: "16px" }}>Bella Vita Photography</div>
                <div style={{ width: "40px", height: "1px", background: "#c9a96e44", margin: "0 auto 16px" }} />
                <div style={{ fontSize: "0.75rem", color: "#e8e4de44", lineHeight: 1.6 }}>
                  Redeemable for any session or product<br />Never expires · Transferable
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section id="kind-words" style={{ padding: "100px 48px", background: "#0d0d0b" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Okay I'm Blushing</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>Kind Words</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{ padding: "8px 0", borderTop: "1px solid #c9a96e22" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", color: "#c9a96e33", lineHeight: 1, marginBottom: "8px" }}>"</div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", lineHeight: 1.8, fontStyle: "italic", fontWeight: 300, color: "#e8e4debb", marginBottom: "28px" }}>{t.text}</p>
                  <div style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a96e" }}>{t.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#e8e4de44", marginTop: "4px" }}>{t.event}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "1.4rem" }}>⭐⭐⭐⭐⭐</span>
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, marginBottom: "8px" }}>5.0 on Google</div>
              <div style={{ fontSize: "0.75rem", color: "#e8e4de44", letterSpacing: "0.1em" }}>Capturing life's beautiful moments since 2009 · Livingston & Oakland County</div>
            </div>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {GOOGLE_REVIEWS.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div style={{
                  padding: "24px", background: "#e8e4de04", border: "1px solid #e8e4de0a", borderRadius: "2px",
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "50%", background: "#c9a96e22",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#c9a96e",
                      }}>{review.name[0]}</div>
                      <div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 400 }}>{review.name}</div>
                        <div style={{ fontSize: "0.65rem", color: "#e8e4de33" }}>{review.date}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#c9a96e" }}>{"★".repeat(review.stars)}</div>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#e8e4de88", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{review.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 48px", background: "#0d0d0b" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>You're Probably Wondering</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>Good Questions</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div style={{ borderBottom: "1px solid #e8e4de0a" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} style={{
                    width: "100%", padding: "24px 0", background: "none", border: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", textAlign: "left", color: "#e8e4de",
                  }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 400, paddingRight: "20px" }}>{faq.q}</span>
                    <span style={{
                      color: "#c9a96e", fontSize: "1.3rem", fontWeight: 300, flexShrink: 0,
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? "300px" : "0", overflow: "hidden",
                    transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                    opacity: openFaq === i ? 1 : 0,
                  }}>
                    <p style={{ padding: "0 0 24px", color: "#e8e4de77", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <p style={{ color: "#e8e4de44", fontSize: "0.85rem", fontWeight: 300 }}>
                Something else on your mind? <a href="mailto:rebecca.henson@yahoo.com" style={{ color: "#c9a96e", textDecoration: "none", borderBottom: "1px solid #c9a96e33" }}>Shoot me an email</a> — I love hearing from you and I answer everything personally.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>Say Hi</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "20px" }}>I Can't Wait to Meet You</h2>
              <p style={{ color: "#e8e4de77", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}>
                Whether you're a Lakeland Eagle, a Brighton Bulldog, a Novi Wildcat, or a family anywhere across Livingston and Oakland counties — tell me your story. I read every single message personally and I'll get back to you within 24 hours (usually way faster, because I'm excited like that).
              </p>
              <p style={{ color: "#c9a96e", fontSize: "0.95rem", marginTop: "12px", fontWeight: 400 }}>
                <a href="mailto:rebecca.henson@yahoo.com" style={{ color: "#c9a96e", textDecoration: "none", borderBottom: "1px solid #c9a96e44", paddingBottom: "2px" }}>rebecca.henson@yahoo.com</a>
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de55", display: "block", marginBottom: "4px" }}>Name</label>
                <input className="input-field" placeholder="Your full name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de55", display: "block", marginBottom: "4px" }}>Email</label>
                <input className="input-field" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>
            <div style={{ marginTop: "32px" }}>
              <label style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de55", display: "block", marginBottom: "4px" }}>Session Type</label>
              <div style={{ display: "flex", gap: "16px", marginTop: "12px", flexWrap: "wrap" }}>
                {["Senior Portraits", "Family Session", "Mini Session", "Gift Certificate", "Other"].map(type => (
                  <button key={type} onClick={() => setFormData({ ...formData, type })} style={{
                    padding: "8px 20px", borderRadius: "2px", cursor: "pointer",
                    background: formData.type === type ? "#c9a96e" : "transparent",
                    color: formData.type === type ? "#0a0a08" : "#e8e4de77",
                    border: `1px solid ${formData.type === type ? "#c9a96e" : "#e8e4de22"}`,
                    fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
                    fontFamily: "'Karla', sans-serif", transition: "all 0.3s ease",
                  }}>{type}</button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "32px" }}>
              <label style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4de55", display: "block", marginBottom: "4px" }}>Your Story</label>
              <textarea className="input-field" placeholder="Tell me about you! Who's getting photographed? What's the occasion? Any ideas on locations or timing? Or just say hi — I love chatting about this stuff..."
                rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ resize: "vertical", minHeight: "120px", fontFamily: "'Karla', sans-serif" }} />
            </div>
            <div style={{ marginTop: "48px", textAlign: "center" }}>
              {formSent ? (
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#c9a96e", animation: "lbFade 0.5s ease" }}>Thank you — I'll be in touch soon ✦</div>
              ) : (
                <button className="cta-btn" onClick={handleSubmit}><span>Send Message</span></button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Free Style Guide Banner */}
      <AnimatedSection>
        <div style={{
          margin: "0", padding: "48px", textAlign: "center",
          background: "linear-gradient(135deg, #1a1508 0%, #12110a 50%, #0d0d0b 100%)",
          borderTop: "1px solid #c9a96e11",
        }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "12px" }}>Free Download</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, marginBottom: "12px" }}>
            The Ultimate Senior Portrait Style Guide
          </h3>
          <p style={{ color: "#e8e4de55", fontSize: "0.85rem", fontWeight: 300, maxWidth: "480px", margin: "0 auto 24px", lineHeight: 1.7 }}>
            What to wear, how to prep, best times to shoot in Michigan, and insider tips from 500+ sessions. Get it free — just enter your email.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", maxWidth: "440px", margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" value={styleGuideEmail}
              onChange={e => setStyleGuideEmail(e.target.value)}
              style={{
                flex: 1, minWidth: "200px", padding: "12px 16px", background: "#e8e4de08",
                border: "1px solid #e8e4de15", borderRadius: "2px", color: "#e8e4de",
                fontFamily: "'Karla', sans-serif", fontSize: "0.85rem", outline: "none",
              }} />
            <button onClick={() => handleStyleGuideSubmit(false)} style={{
              padding: "12px 24px", background: styleGuideSent ? "#2a6a3a" : "#c9a96e", color: styleGuideSent ? "#fff" : "#0a0a08",
              border: "none", fontFamily: "'Karla', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: "2px", transition: "all 0.3s ease", whiteSpace: "nowrap",
            }}>
              {styleGuideSent ? "✓ Check Your Inbox!" : "Send Me the Guide"}
            </button>
          </div>
          <p style={{ fontSize: "0.65rem", color: "#e8e4de22", marginTop: "12px" }}>No spam, ever. Just gorgeous photo tips and early access to mini sessions.</p>
        </div>
      </AnimatedSection>

      {/* Lead Magnet Popup */}
      {showStyleGuide && !styleGuideSent && !popupDismissed && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.75)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "lbFade 0.4s ease", padding: "24px",
        }} onClick={() => { setShowStyleGuide(false); setPopupDismissed(true); }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "#13120e", border: "1px solid #c9a96e33", borderRadius: "4px",
            padding: "48px 40px", maxWidth: "440px", width: "100%", textAlign: "center",
            position: "relative", animation: "lbScale 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            <button onClick={() => { setShowStyleGuide(false); setPopupDismissed(true); }} style={{
              position: "absolute", top: "16px", right: "20px", background: "none", border: "none",
              color: "#e8e4de44", fontSize: "1.3rem", cursor: "pointer",
            }} aria-label="Close popup">✕</button>
            <div style={{ fontSize: "2rem", marginBottom: "16px" }}>📸</div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "12px" }}>Free for a Limited Time</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, marginBottom: "12px", lineHeight: 1.3 }}>
              Get the Senior Portrait <em style={{ color: "#c9a96e" }}>Style Guide</em>
            </h3>
            <p style={{ color: "#e8e4de66", fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "24px" }}>
              Outfit ideas, Michigan location picks, what to expect, and pro tips from 500+ sessions — all in a gorgeous PDF.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input type="email" placeholder="your@email.com" value={styleGuideEmail}
                onChange={e => setStyleGuideEmail(e.target.value)}
                style={{
                  flex: 1, minWidth: "180px", padding: "12px 14px", background: "#e8e4de08",
                  border: "1px solid #e8e4de15", borderRadius: "2px", color: "#e8e4de",
                  fontFamily: "'Karla', sans-serif", fontSize: "0.85rem", outline: "none",
                }} />
              <button onClick={() => handleStyleGuideSubmit(true)} style={{
                padding: "12px 20px", background: "#c9a96e", color: "#0a0a08",
                border: "none", fontFamily: "'Karla', sans-serif", fontSize: "0.72rem",
                letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
                borderRadius: "2px", whiteSpace: "nowrap",
              }}>Get It Free</button>
            </div>
            <p style={{ fontSize: "0.6rem", color: "#e8e4de22", marginTop: "12px" }}>Unsubscribe anytime. Your data stays private.</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ padding: "60px 48px 40px", borderTop: "1px solid #e8e4de0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, letterSpacing: "0.08em", marginBottom: "8px" }}>
              <span style={{ color: "#c9a96e" }}>B</span>ella <span style={{ color: "#c9a96e" }}>V</span>ita
            </div>
            <div style={{ fontSize: "0.7rem", color: "#e8e4de44", letterSpacing: "0.1em" }}>Capturing Life's Beautiful Moments · Est. 2009 · Michigan</div>
          </div>
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <a href="https://www.instagram.com/bellavitaphotography2/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8e4de55", cursor: "pointer", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.facebook.com/bellavitaphotography2" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8e4de55", cursor: "pointer", textDecoration: "none" }}>Facebook</a>
            <a href="mailto:rebecca.henson@yahoo.com" className="nav-link" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8e4de55", cursor: "pointer", textDecoration: "none" }}>Email</a>
            <span className="nav-link" onClick={() => setCurrentView("admin")} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8e4de22", cursor: "pointer" }}>Admin</span>
          </div>
          <div style={{ fontSize: "0.65rem", color: "#e8e4de22", letterSpacing: "0.1em", width: "100%", textAlign: "center", marginTop: "24px" }}>
            © {new Date().getFullYear()} Bella Vita Photography. All rights reserved. Every image tells a story.
          </div>
        </div>
      </footer>
    </div>
  );
}
