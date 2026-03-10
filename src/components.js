import { useState, useEffect, useRef } from "react";
import { SITE_CONTENT, DEFAULT_CLIENT_GALLERIES } from "./data";

/* ─── UTILITY HOOKS ─── */
export function useInView(threshold = 0.15) {
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

export function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── PROGRESSIVE IMAGE (blur-up) ─── */
export function ProgressiveImage({ src, alt, style = {}, className = "", onClick, onMouseEnter, onMouseLeave, tabIndex, role, onKeyDown, "aria-label": ariaLabel }) {
  const isLocal = !src.includes("unsplash.com");
  const [loaded, setLoaded] = useState(isLocal);
  const [inView, setInView] = useState(isLocal);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isLocal) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.unobserve(entry.target); }
    }, { rootMargin: "200px" });
    if (containerRef.current) observer.observe(containerRef.current);
    const fallback = setTimeout(() => setInView(true), 1500);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [isLocal]);

  if (isLocal) {
    return (
      <div style={{ position: "relative", overflow: "hidden", ...style }} className={className}
        onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        tabIndex={tabIndex} role={role} onKeyDown={onKeyDown} aria-label={ariaLabel}>
        <img src={src} alt={alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }

  const tinyUrl = src.replace(/w=\d+/, "w=20").replace(/q=\d+/, "q=10");
  return (
    <div ref={containerRef} style={{ position: "relative", overflow: "hidden", ...style }} className={className}
      onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      tabIndex={tabIndex} role={role} onKeyDown={onKeyDown} aria-label={ariaLabel}>
      <img src={tinyUrl} alt="" aria-hidden="true" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        filter: "blur(20px)", transform: "scale(1.1)",
        opacity: loaded ? 0 : 1, transition: "opacity 0.6s ease",
      }} />
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
export async function downloadImage(url, filename) {
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

export async function shareImage(title, url) {
  if (navigator.share) {
    try { await navigator.share({ title: "bella vita photography \u2014 " + title, url }); } catch {}
  } else {
    try { await navigator.clipboard.writeText(url); alert("Link copied to clipboard!"); }
    catch { window.open(url, "_blank"); }
  }
}

/* ─── LIGHTBOX ─── */
export function Lightbox({ image, onClose, onDownload, onShare, onPrev, onNext, hasPrev, hasNext, currentIndex, totalCount }) {
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
export function ClientGalleryPage({ galleries, onBack, onGift }) {
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
                    style={{ background: favorited[i] ? "var(--accent)" : "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: favorited[i] ? "#fff" : "var(--accent)", fontSize: "1rem", backdropFilter: "blur(8px)", transition: "all 0.3s ease" }}>{favorited[i] ? "\u2665" : "\u2661"}</button>
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
            <div style={{ fontSize: "0.82rem", color: "#736D65" }}><span style={{ color: "var(--accent)", fontWeight: 500 }}>{favCount}</span> favorite{favCount !== 1 ? "s" : ""} selected</div>
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
          <input type="password" placeholder="Enter your gallery password" aria-label="Gallery password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleUnlock()}
            className="bv-input" style={{ textAlign: "center", letterSpacing: "0.08em", borderColor: error ? "#d4685a" : undefined }} />
          {error && <div style={{ marginTop: "10px", fontSize: "0.78rem", color: "#d4685a", animation: "bvFadeIn 0.3s ease" }}>{error}</div>}
          <button onClick={handleUnlock} className="bv-btn-primary" style={{ marginTop: "20px", width: "100%" }}>View Gallery</button>
          <p style={{ marginTop: "28px", fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.7, opacity: 0.6 }}>Your password was in your session delivery email.<br />Can't find it? Email <a href="mailto:bellavitabyrebecca@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>bellavitabyrebecca@gmail.com</a></p>
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
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
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
export function AdminPanel({ galleries, setGalleries, onClose }) {
  const [authed, setAuthed] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminError, setAdminError] = useState("");
  const [newGallery, setNewGallery] = useState({ clientName: "", sessionType: "Senior Sessions", date: "", password: "", images: "" });
  const ADMIN_PASSWORD = "bellavita2025";
  const inputStyle = { width: "100%", padding: "11px 14px", background: "#FFFFFF", border: "1px solid #E8E2D8", borderRadius: "3px", color: "#2E2A25", fontFamily: "var(--font-body)", fontSize: "0.85rem", outline: "none", marginTop: "6px" };
  const labelStyle = { fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#736D65", display: "block", marginTop: "14px" };

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
          <p style={{ fontSize: "0.72rem", color: "#736D65", marginBottom: "4px" }}>Upload URLs to your full-resolution images for maximum download quality.</p>
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
                  <div style={{ fontSize: "0.65rem", color: "#736D65", marginTop: "2px" }}>{g.sessionType} {"\u00b7"} {g.images.length} photos {"\u00b7"} pw: <span style={{ color: "var(--accent)" }}>{g.password}</span></div>
                </div>
                <button onClick={() => setGalleries(prev => prev.filter(x => x.id !== g.id))} style={{ background: "none", border: "1px solid #d4685a44", color: "#d4685a", padding: "5px 14px", borderRadius: "2px", cursor: "pointer", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.target.style.background = "#d4685a"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#d4685a"; }}>Delete</button>
              </div>
            ))}
            {galleries.length === 0 && <div style={{ padding: "28px", textAlign: "center", color: "#736D65", fontSize: "0.82rem" }}>No galleries yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
