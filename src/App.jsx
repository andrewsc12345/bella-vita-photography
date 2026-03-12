import { useState, useEffect, useRef } from "react";
import { SITE_CONTENT, PORTFOLIO, TESTIMONIALS, SERVICES, FAQS, GOOGLE_REVIEWS, PRODUCTS, DEFAULT_CLIENT_GALLERIES } from "./data";
import { useInView, AnimatedSection, ProgressiveImage, downloadImage, shareImage, Lightbox, ClientGalleryPage, AdminPanel } from "./components";
import STYLES from "./styles";

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
  const [giftAmount, setGiftAmount] = useState("50");
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


  const categories = ["All", "Seniors", "Families", "Milestones & Minis", "Weddings"];
  const filtered = activeFilter === "All" ? PORTFOLIO.filter(p => !p.category) : PORTFOLIO.filter(p => p.category === activeFilter);
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
        "Her email: bellavitabyrebecca@gmail.com\n\n" +
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
        "Her email: bellavitabyrebecca@gmail.com" + (hintForm.senderName ? " \u2014 tell her " + hintForm.senderName + " sent you!" : "") + "\n\n" +
        "Trust me on this one. \u{1F60A}\n\n" +
        hintForm.senderName
      );
    }

    window.open("mailto:" + hintForm.recipientEmail + "?subject=" + subject + "&body=" + body + "&bcc=bellavitabyrebecca@gmail.com", "_blank");
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
      "To book your session or browse products, contact Rebecca at bellavitabyrebecca@gmail.com or visit bellavitabyrebecca.com\n\n" +
      "With love,\n" + giftForm.senderName + "\n\n\u2014 bella vita photography \u2727 Est. 2009"
    );
    window.open("mailto:" + giftForm.recipientEmail + "?subject=" + subject + "&body=" + body + "&bcc=bellavitabyrebecca@gmail.com", "_blank");

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
        <style>{STYLES}</style>

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation" className="bv-nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrollY > 50 ? "rgba(252,250,246,0.95)" : "transparent", backdropFilter: scrollY > 50 ? "blur(16px)" : "none", borderBottom: scrollY > 50 ? "1px solid var(--border-light)" : "1px solid transparent", transition: "all 0.4s ease" }}>
        <div onClick={() => scrollTo("hero")} style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, letterSpacing: "0.04em", cursor: "pointer", color: "var(--text)" }}><span style={{ color: "var(--accent)" }}>b</span>ella <span style={{ color: "var(--accent)" }}>v</span>ita</div>
        <div className="bv-desktop-nav" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
            <span key={item} className={"bv-nav-link" + (activeSection === item.toLowerCase() ? " bv-active" : "")} onClick={() => scrollTo(item.toLowerCase())} style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400 }}>{item}</span>
          ))}
          <a href="/blog.html" className="bv-nav-link" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, textDecoration: "none" }}>Blog</a>
          <span className="bv-nav-link" onClick={() => setCurrentView("client-gallery")} style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 400 }}>Client Gallery</span>
        </div>
        <button className="bv-mobile-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.4rem", cursor: "pointer", display: "none" }}>{menuOpen ? "\u2715" : "\u2630"}</button>
      </nav>

      {menuOpen && <div className="mobile-menu">
        {["Portfolio", "About", "Services", "Products", "FAQ", "Contact"].map(item => (
          <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--text)", cursor: "pointer" }}>{item}</span>
        ))}
        <a href="/blog.html" onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--text)", cursor: "pointer", textDecoration: "none" }}>Blog</a>
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
      <main>
      <section id="hero" className="bv-hero-section" style={{ minHeight: "85vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        {/* Top: Brand name + tagline */}
        <div className="bv-hero-top" style={{ textAlign: "center", paddingTop: "120px", paddingBottom: "36px", position: "relative", zIndex: 2 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 400,
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


        {/* Below banner: headline + description */}
        <div className="bv-hero-bottom" style={{ textAlign: "center", padding: "32px 24px 20px", position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 400,
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
      <section id="portfolio" className="bv-section bv-portfolio-section" style={{ padding: "36px 48px 64px", maxWidth: "1400px", margin: "0 auto" }}>
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
          {filtered.map((img, i) => {
            const card = (
              <div className="bv-gallery-card-wrap" style={{ aspectRatio: img.category ? "4/5" : "3/2" }}>
                <div className="bv-gallery-img" onClick={() => setLightboxImage(img)} style={{ width: "100%", height: "100%", cursor: "zoom-in" }} tabIndex={0} role="button" aria-label={"View " + img.title} onKeyDown={e => e.key === "Enter" && setLightboxImage(img)}>
                  <img src={img.src} alt={img.title + " \u2013 bella vita photography Michigan"} loading={i === 0 ? "eager" : "lazy"} decoding="async" fetchpriority={i === 0 ? "high" : undefined} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div className="bv-overlay" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 16px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)", pointerEvents: "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "#fff", fontWeight: 400 }}>{img.title}</div>
                </div>
                <div className="bv-img-actions">
                  <button onClick={(e) => { e.stopPropagation(); downloadImage(img.full || img.src, "bella-vita-" + img.title.toLowerCase().replace(/\s+/g, "-") + ".jpg"); }} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.82rem", color: "#2E2A25", backdropFilter: "blur(8px)" }}>{"\u2193"}</button>
                  <button onClick={(e) => { e.stopPropagation(); shareImage(img.title, img.full || img.src); }} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", color: "#2E2A25", backdropFilter: "blur(8px)" }}>{"\u2197"}</button>
                </div>
              </div>
            );
            return i < 3 ? <div key={img.id}>{card}</div> : <AnimatedSection key={img.id} delay={(i - 3) * 0.06}>{card}</AnimatedSection>;
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bv-section" style={{ padding: "56px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "72px", alignItems: "center" }} className="bv-about-grid">
          <AnimatedSection><ProgressiveImage className="bv-profile-photo" src="/rebecca-profile.jpg" alt="Rebecca Henson, natural light photographer Michigan" style={{ width: "100%", maxWidth: "440px", aspectRatio: "3/4", borderRadius: "3px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }} /></AnimatedSection>
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
        <div className="bv-section bv-quote-section" style={{ padding: "48px 48px", textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontStyle: "italic", fontWeight: 400, color: "var(--text)", lineHeight: 1.6 }}>"{SITE_CONTENT.quote}"</div>
            <div style={{ marginTop: "24px", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>{SITE_CONTENT.quoteAttribution}</div>
          </div>
        </div>
      </AnimatedSection>

      {/* THE PROCESS */}
      <section className="bv-section" style={{ padding: "56px 48px", background: "var(--bg-warm)" }}>
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
      <section id="services" className="bv-section" style={{ padding: "56px 48px", maxWidth: "1200px", margin: "0 auto" }}>
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
        <div className="bv-section" style={{ padding: "28px 48px", background: "var(--bg-warm)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
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
      <section id="products" className="bv-section" style={{ padding: "56px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.productsTagline }</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "14px" }}>{ SITE_CONTENT.productsTitle }</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>Your images deserve to be showcased.</p>
            <p style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 400, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>LINKS TO ORDER...COMING SOON!! Until then, please contact me to place all orders.</p>
          </div>
        </AnimatedSection>
        <div className="bv-grid-products" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
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
      <section className="bv-section" style={{ padding: "44px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <AnimatedSection>
            <div className="bv-gift-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>The Perfect Gift</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 400, marginBottom: "18px", lineHeight: 1.3 }}>Give the Gift of <em style={{ fontStyle: "italic", color: "var(--accent)" }}>bella</em></h2>
                <p style={{ color: "var(--text-light)", fontSize: "0.88rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "8px" }}>Gift certificates can be used for any session, product, or combination of both {"\u2014"} from a full senior experience to a gorgeous piece of artwork for your home.</p>
                <p style={{ color: "var(--muted)", fontSize: "0.78rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "20px" }}>Available in any amount. Never expires. Your recipient(s) will receive a personalized bella digital gift certificate straight to their inbox.</p>
                <div className="bv-gift-amounts" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
                  {["50", "100", "150", "Custom"].map(amt => (
                    <button key={amt} onClick={() => setGiftAmount(amt)} style={{ padding: "6px 14px", borderRadius: "3px", cursor: "pointer", background: giftAmount === amt ? "var(--accent)" : "var(--card-bg)", color: giftAmount === amt ? "#fff" : "var(--text-light)", border: "1px solid " + (giftAmount === amt ? "var(--accent)" : "var(--border)"), fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{amt === "Custom" ? "Custom" : "$" + amt}</button>
                  ))}
                </div>
                <div className="bv-gift-buttons" style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
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
          <div className="bv-modal-inner" onClick={e => e.stopPropagation()} style={{
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
                    <input className="bv-input" type="text" placeholder="e.g. $50, $100, $150" value={giftForm.giftCertAmount} onChange={e => setGiftForm({ ...giftForm, giftCertAmount: e.target.value })} />
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
          <div className="bv-modal-inner" onClick={e => e.stopPropagation()} style={{
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
      <section className="bv-section" style={{ padding: "56px 48px" }}>
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
      <section className="bv-section" style={{ padding: "44px 48px", background: "var(--bg-warm)" }}>
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
      <section id="faq" className="bv-section" style={{ padding: "56px 48px" }}>
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
          <AnimatedSection delay={0.3}><div style={{ textAlign: "center", marginTop: "40px" }}><p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300 }}>Something else? <a href="mailto:bellavitabyrebecca@gmail.com" style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-light)" }}>Email me</a></p></div></AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bv-section" style={{ padding: "56px 48px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{ SITE_CONTENT.contactTagline }</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "16px" }}>{ SITE_CONTENT.contactTitle }</h2>
              <p style={{ color: "var(--text-light)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>{SITE_CONTENT.contactDescription}</p>
              <p style={{ marginTop: "10px" }}><a href="mailto:bellavitabyrebecca@gmail.com" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", borderBottom: "1px solid var(--accent-light)" }}>bellavitabyrebecca@gmail.com</a></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bv-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <label htmlFor="contact-name" style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.name ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Name</label>
                <input id="contact-name" className="bv-input" placeholder="Your full name" value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); if (formErrors.name) setFormErrors(prev => ({ ...prev, name: undefined })); }} style={{ borderColor: formErrors.name ? "#c9544d" : undefined }} />
                {formErrors.name && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.name}</div>}
              </div>
              <div>
                <label htmlFor="contact-email" style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.email ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Email</label>
                <input id="contact-email" className="bv-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => { setFormData({ ...formData, email: e.target.value }); if (formErrors.email) setFormErrors(prev => ({ ...prev, email: undefined })); }} style={{ borderColor: formErrors.email ? "#c9544d" : undefined }} />
                {formErrors.email && <div style={{ fontSize: "0.68rem", color: "#c9544d", marginTop: "5px", animation: "bvSlideIn 0.3s ease" }}>{formErrors.email}</div>}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label id="session-type-label" style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "8px" }}>Session Type</label>
              <div className="bv-contact-session-btns" role="group" aria-labelledby="session-type-label" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Senior Session", "Family Session", "Milestone Session", "Wedding", "Gift Certificate", "Other"].map(type => (
                  <button key={type} aria-pressed={formData.type === type} onClick={() => setFormData({ ...formData, type })} style={{ padding: "7px 18px", borderRadius: "3px", cursor: "pointer", background: formData.type === type ? "var(--accent)" : "var(--card-bg)", color: formData.type === type ? "#fff" : "var(--text-light)", border: "1px solid " + (formData.type === type ? "var(--accent)" : "var(--border)"), fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}>{type}</button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="contact-message" style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: formErrors.message ? "#c9544d" : "var(--muted)", display: "block", marginBottom: "6px", transition: "color 0.3s ease" }}>Your Story</label>
              <textarea id="contact-message" className="bv-input" placeholder="Tell me about you..." rows={5} value={formData.message} onChange={e => { setFormData({ ...formData, message: e.target.value }); if (formErrors.message) setFormErrors(prev => ({ ...prev, message: undefined })); }} style={{ resize: "vertical", minHeight: "110px", borderColor: formErrors.message ? "#c9544d" : undefined }} />
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
        <div className="bv-section" style={{ padding: "36px 48px", textAlign: "center" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Follow Along</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 400, marginBottom: "12px" }}>See the <em style={{ fontStyle: "italic", color: "var(--accent)" }}>behind the scenes</em></h3>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 300, maxWidth: "380px", margin: "0 auto 22px", lineHeight: 1.7 }}>Session sneak peeks, bloopers, and the occasional bella pet cameo.</p>
          <a href="https://www.instagram.com/bellavitabyrebecca/" target="_blank" rel="noopener noreferrer" className="bv-btn-outline" style={{ textDecoration: "none" }}>@bellavitabyrebecca</a>
        </div>
      </AnimatedSection>

      </main>

      {/* FOOTER */}
      <footer style={{ padding: "40px 48px 24px", borderTop: "1px solid var(--border-light)", background: "var(--bg-warm)" }}>
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
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={e => e.currentTarget.style.color = "#5A554E"}>{item}</div>
              ))}
              <a href="/blog.html" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300, transition: "color 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={e => e.currentTarget.style.color = "#5A554E"}>Blog</a>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Sessions</div>
              {["Senior Sessions", "Family Sessions", "Milestones & Minis", "Weddings"].map(item => (
                <div key={item} style={{ fontSize: "0.82rem", color: "var(--text-light)", padding: "4px 0", fontWeight: 300 }}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 400 }}>Connect</div>
              <a href="https://www.instagram.com/bellavitabyrebecca/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Instagram</a>
              <a href="https://www.facebook.com/bellavitaphotography2" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>Facebook</a>
              <a href="mailto:bellavitabyrebecca@gmail.com" style={{ display: "block", fontSize: "0.82rem", color: "var(--text-light)", textDecoration: "none", padding: "4px 0", fontWeight: 300 }}>bellavitabyrebecca@gmail.com</a>
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
            fontSize: "1.1rem", boxShadow: "0 4px 16px rgba(172,65,95,0.3)",
            animation: "bvFadeIn 0.35s ease", transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(172,65,95,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(172,65,95,0.3)"; }}
        >{"\u2191"}</button>
      )}
    </div>
  );
}
