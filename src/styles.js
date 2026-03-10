/* bella vita photography styles */
const STYLES = `
:root { –bg:#FCFAF6;–bg-warm:#F7F3ED;–card-bg:#FFFFFF;–text:#2E2A25;–text-light:#5A554E;–muted:#736D65;–accent:#AC415F;–accent-light:#C4567A;–accent-hover:#8C3049;–border:#E8E2D8;–border-light:#F0ECE4;–font-display:‘Playfair Display’,Georgia,serif;–font-body:‘Outfit’,system-ui,sans-serif; }
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}::selection{background:#AC415F33;color:var(–text)}
@keyframes bvFadeIn{from{opacity:0}to{opacity:1}}
@keyframes bvScaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
@keyframes bvSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes bvMenuSlide{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}
@keyframes bvCountUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes bvPulse{0%,100%{opacity:1}50%{opacity:0.5}}
@keyframes bvShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}

```
    /* Skip to content (a11y) */
    .bv-skip-link{position:absolute;top:-100px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:12px 24px;border-radius:0 0 6px 6px;z-index:99999;font-size:0.75rem;text-decoration:none;transition:top 0.3s ease}.bv-skip-link:focus{top:0}

    /* Scroll progress bar */
    .bv-scroll-progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:99999;transition:width 0.1s linear;pointer-events:none}

    /* Focus visible ring */
    *:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:2px}
    button:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
    input:focus-visible,textarea:focus-visible,select:focus-visible{outline:none;border-color:var(--accent)!important;box-shadow:0 0 0 3px rgba(172,65,95,0.15)}

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
    .bv-btn-primary{display:inline-block;padding:14px 40px;background:var(--accent);color:#fff;font-family:var(--font-body);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;border:none;border-radius:3px;transition:all 0.35s ease;font-weight:400;-webkit-tap-highlight-color:transparent}.bv-btn-primary:hover{background:var(--accent-hover);transform:translateY(-1px);box-shadow:0 4px 16px rgba(172,65,95,0.25)}.bv-btn-primary:active{transform:scale(0.97)}
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
      .bv-gift-grid{grid-template-columns:1fr!important;gap:24px!important}
      .bv-avail-banner{flex-direction:column!important;text-align:center}
      .bv-gallery-card{grid-template-columns:80px 1fr!important}
      .bv-gallery-card .bv-gallery-arrow{display:none!important}
      .bv-admin-grid{grid-template-columns:1fr!important}
      .bv-section{padding-left:16px!important;padding-right:16px!important}
      .bv-nav{padding-left:16px!important;padding-right:16px!important}
      .bv-grid-portfolio{grid-template-columns:1fr!important}
      .bv-grid-services{grid-template-columns:1fr!important}
      .bv-grid-products{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))!important;gap:10px!important}
      .bv-grid-reviews{grid-template-columns:1fr 1fr!important}
      .bv-grid-testimonials{grid-template-columns:1fr!important;gap:16px!important}
      .bv-testimonials-scroll{display:grid!important;overflow-x:visible!important}.bv-testimonials-scroll>div{min-width:auto!important;scroll-snap-align:none!important;flex-shrink:initial!important}
      .bv-process-grid{grid-template-columns:1fr!important;gap:28px!important}
      .bv-process-line{display:none!important}
      .bv-footer-grid{grid-template-columns:1fr 1fr!important;gap:24px!important}
      .bv-service-card{padding:24px 18px!important}
      .bv-hero-section{min-height:auto!important}
      .bv-hero-top{padding-top:100px!important;padding-bottom:16px!important}
      .bv-hero-bottom{padding:20px 16px 36px!important}
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
      .bv-gift-buttons{flex-direction:column!important;width:100%!important}
      .bv-gift-buttons button{width:100%!important}
      .bv-gift-amounts{justify-content:center!important}
      .bv-filter-row{gap:2px!important}
      .bv-filter-btn{padding:6px 10px!important;font-size:0.6rem!important;letter-spacing:0.12em!important}
      .bv-portfolio-section{padding-top:60px!important;padding-bottom:60px!important}
      .bv-section-spacing{padding-top:48px!important;padding-bottom:48px!important}
      .bv-quote-section{padding-top:48px!important;padding-bottom:48px!important}
      .bv-modal-inner{padding:28px 20px!important}
      .bv-btn-primary{padding:12px 28px!important;font-size:0.68rem!important}
      .bv-btn-outline{padding:12px 28px!important;font-size:0.68rem!important}
      .bv-profile-photo{max-width:260px!important;margin:0 auto!important;aspect-ratio:1/1!important}
      .bv-about-text h2{font-size:1.6rem!important}
    }
    @media(max-width:480px){
      .bv-grid-reviews{grid-template-columns:1fr!important}
      .bv-hero-top{padding-top:88px!important;padding-bottom:12px!important}
      .bv-footer-grid{grid-template-columns:1fr!important}
      .bv-grid-products{grid-template-columns:1fr 1fr!important}
      .bv-contact-session-btns{gap:6px!important}
      .bv-contact-session-btns button{padding:6px 12px!important;font-size:0.6rem!important}
      .bv-profile-photo{max-width:220px!important}
    }
    @media(min-width:769px){.bv-mobile-btn{display:none!important}}
    @media(max-width:479px){.bv-gallery-header{flex-wrap:wrap!important;gap:6px!important;justify-content:center!important;padding-top:12px!important;padding-bottom:12px!important}.bv-gallery-grid-wrap{padding-bottom:80px!important}.bv-favbar-actions{flex-direction:column!important;gap:8px!important;width:100%}.bv-favbar-actions button{width:100%}}
```

`;
export default STYLES;
