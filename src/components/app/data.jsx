/* Data and content for bella vita photography */
/* ═══════════════════════════════════════════════════════════════════════
   EDITABLE CONTENT — Rebecca, change any text below!
   To edit: Go to GitHub → src/App.jsx → pencil icon → find this section
   → change text → click "Commit changes". Site updates automatically.
   ═══════════════════════════════════════════════════════════════════════ */
export const SITE_CONTENT = {
  /* HERO SECTION */
  tagline: "Photography \u00b7 Est. 2009 \u00b7 Michigan",
  headline: "Your story is",
  headlineAccent: "worth telling",
  headlineKicker: "Senior and Family Photographer in Livingston County, Michigan",
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
  instagramHandle: "@bellavitabyrebecca",
  instagramUrl: "https://www.instagram.com/bellavitabyrebecca/",
  facebookUrl: "https://www.facebook.com/bellavitaphotography2",

  /* FOOTER */
  footerTagline: "Natural light portrait photography for seniors and families in Michigan. Est. 2009.",
  email: "bellavitabyrebecca@gmail.com",

  /* PAYMENT METHODS — Rebecca, update these with your own links/handles! */
  payments: {
    venmo: { handle: "@Rebecca-BellaVita", url: "https://venmo.com/Rebecca-BellaVita" },
    paypal: { handle: "bellavitabyrebecca@gmail.com", url: "https://paypal.me/bellavitabyrebecca" },
    zelle: { handle: "bellavitabyrebecca@gmail.com" },
  },
};

/* ─── PORTFOLIO DATA ─── */
/* REPLACE these URLs with your real photos. For max quality, use full-resolution URLs
   from your image host (Cloudinary, SmugMug, etc.) without width/quality limits.
   "src" = display size, "full" = download/lightbox size */
export const PORTFOLIO = [
  { id: 1, src: "/Senior1.JPG", full: "/Senior1.JPG", title: "Senior Portrait", aspect: "landscape" },
  { id: 2, src: "/Family1.JPG", full: "/Family1.JPG", title: "Family Session", aspect: "landscape" },
  { id: 6, src: "/Wedding1.JPG", full: "/Wedding1.JPG", title: "Wedding Day", aspect: "landscape" },
  { id: 9, src: "/M00.JPG", full: "/M00.JPG", title: "Maternity Glow", aspect: "landscape" },
  { id: 8, src: "/F21.JPG", full: "/F21.JPG", title: "Beach Family", aspect: "landscape" },
  { id: 4, src: "/Newborn1.JPG", full: "/Newborn1.JPG", title: "Newborn", aspect: "landscape" },
  { id: 5, src: "/Engagement1.JPG", full: "/Engagement1.JPG", title: "The Proposal", aspect: "landscape" },
  { id: 7, src: "/Mini.jpg", full: "/Mini.jpg", title: "Mommy & Me", aspect: "landscape" },
  { id: 3, src: "/Maternity1.JPG", full: "/Maternity1.JPG", title: "Gender Reveal", aspect: "landscape" },
  { id: 125, src: "/IMG_13.jpg", full: "/IMG_13.jpg", title: "Beach Golden Hour", category: "Seniors", aspect: "portrait" },
  { id: 126, src: "/IMG_6520.jpg", full: "/IMG_6520.jpg", title: "Wildflower Field", category: "Seniors", aspect: "landscape" },
  { id: 127, src: "/IMG_6730.jpg", full: "/IMG_6730.jpg", title: "Sunset Portrait", category: "Seniors", aspect: "portrait" },
  { id: 100, src: "/0.JPG", full: "/0.JPG", title: "Autumn Creek", category: "Seniors", aspect: "portrait" },
  { id: 101, src: "/1.JPG", full: "/1.JPG", title: "Colorful", category: "Seniors", aspect: "landscape" },
  { id: 102, src: "/2.JPG", full: "/2.JPG", title: "Natural Beauty", category: "Seniors", aspect: "landscape" },
  { id: 103, src: "/3.JPG", full: "/3.JPG", title: "Game Day", category: "Seniors", aspect: "landscape" },
  { id: 104, src: "/4.JPG", full: "/4.JPG", title: "Snow Day", category: "Seniors", aspect: "portrait" },
  { id: 105, src: "/5.JPG", full: "/5.JPG", title: "Guitar Girl", category: "Seniors", aspect: "landscape" },
  { id: 106, src: "/6.JPG", full: "/6.JPG", title: "Fall Walk", category: "Seniors", aspect: "landscape" },
  { id: 107, src: "/7.JPG", full: "/7.JPG", title: "Rainy Day Duo", category: "Seniors", aspect: "landscape" },
  { id: 108, src: "/8.jpg", full: "/8.jpg", title: "Close Up", category: "Seniors", aspect: "landscape" },
  { id: 109, src: "/9.JPG", full: "/9.JPG", title: "Downtown", category: "Seniors", aspect: "portrait" },
  { id: 110, src: "/10.JPG", full: "/10.JPG", title: "Red Barn", category: "Seniors", aspect: "landscape" },
  { id: 111, src: "/11.JPG", full: "/11.JPG", title: "Skater", category: "Seniors", aspect: "landscape" },
  { id: 112, src: "/12.JPG", full: "/12.JPG", title: "Summer Vibes", category: "Seniors", aspect: "portrait" },
  { id: 113, src: "/13.jpg", full: "/13.jpg", title: "By the Fountain", category: "Seniors", aspect: "landscape" },
  { id: 114, src: "/14.JPG", full: "/14.JPG", title: "On the Steps", category: "Seniors", aspect: "portrait" },
  { id: 115, src: "/15.JPG", full: "/15.JPG", title: "Blue Sky", category: "Seniors", aspect: "landscape" },
  { id: 116, src: "/16.JPG", full: "/16.JPG", title: "En Pointe", category: "Seniors", aspect: "portrait" },
  { id: 117, src: "/17.JPG", full: "/17.JPG", title: "Varsity", category: "Seniors", aspect: "landscape" },
  { id: 118, src: "/18.jpg", full: "/18.jpg", title: "Letterman", category: "Seniors", aspect: "landscape" },
  { id: 119, src: "/19.JPG", full: "/19.JPG", title: "Fall Leaves", category: "Seniors", aspect: "landscape" },
  { id: 120, src: "/20.JPG", full: "/20.JPG", title: "Storefront", category: "Seniors", aspect: "portrait" },
  { id: 121, src: "/21.JPG", full: "/21.JPG", title: "SRT", category: "Seniors", aspect: "landscape" },
  { id: 122, src: "/22.jpg", full: "/22.jpg", title: "Sunflower", category: "Seniors", aspect: "portrait" },
  { id: 123, src: "/23.JPG", full: "/23.JPG", title: "Volleyball", category: "Seniors", aspect: "landscape" },
  { id: 124, src: "/24.JPG", full: "/24.JPG", title: "Reflection", category: "Seniors", aspect: "portrait" },
  { id: 200, src: "/f1.JPG", full: "/f1.JPG", title: "Barn Family", category: "Families", aspect: "landscape" },
  { id: 201, src: "/f2.JPG", full: "/f2.JPG", title: "Sisters", category: "Families", aspect: "landscape" },
  { id: 202, src: "/f3.JPG", full: "/f3.JPG", title: "Stripes & Smiles", category: "Families", aspect: "landscape" },
  { id: 203, src: "/f4.JPG", full: "/f4.JPG", title: "Tall Grass", category: "Families", aspect: "landscape" },
  { id: 204, src: "/f5.JPG", full: "/f5.JPG", title: "Hand in Hand", category: "Families", aspect: "landscape" },
  { id: 205, src: "/f6.JPG", full: "/f6.JPG", title: "Siblings", category: "Families", aspect: "landscape" },
  { id: 206, src: "/f7.JPG", full: "/f7.JPG", title: "Pine Trees", category: "Families", aspect: "landscape" },
  { id: 207, src: "/f8.JPG", full: "/f8.JPG", title: "Mommy & Son", category: "Families", aspect: "portrait" },
  { id: 208, src: "/f9.JPG", full: "/f9.JPG", title: "Little Ones", category: "Families", aspect: "landscape" },
  { id: 209, src: "/f10.JPG", full: "/f10.JPG", title: "Walking Together", category: "Families", aspect: "landscape" },
  { id: 210, src: "/f11.JPG", full: "/f11.JPG", title: "Autumn Family", category: "Families", aspect: "landscape" },
  { id: 211, src: "/f12.JPG", full: "/f12.JPG", title: "Fall Laughs", category: "Families", aspect: "landscape" },
  { id: 212, src: "/f13.JPG", full: "/f13.JPG", title: "Front Porch", category: "Families", aspect: "landscape" },
  { id: 213, src: "/f14.JPG", full: "/f14.JPG", title: "Upside Down", category: "Families", aspect: "landscape" },
  { id: 214, src: "/f15.JPG", full: "/f15.JPG", title: "Holiday Cuties", category: "Families", aspect: "landscape" },
  { id: 215, src: "/f16.JPG", full: "/f16.JPG", title: "First Steps", category: "Families", aspect: "landscape" },
  { id: 216, src: "/f17.JPG", full: "/f17.JPG", title: "Daddy's Girl", category: "Families", aspect: "landscape" },
  { id: 217, src: "/f18.JPG", full: "/f18.JPG", title: "Summer Family", category: "Families", aspect: "landscape" },
  { id: 218, src: "/f19.JPG", full: "/f19.JPG", title: "Looking Up", category: "Families", aspect: "landscape" },
  { id: 219, src: "/f20.JPG", full: "/f20.JPG", title: "The Whole Crew", category: "Families", aspect: "landscape" },
  { id: 220, src: "/F21.JPG", full: "/F21.JPG", title: "Beach Family", category: "Families", aspect: "landscape" },
  { id: 298, src: "/M00.JPG", full: "/M00.JPG", title: "Maternity Glow", category: "Milestones & Minis", aspect: "landscape" },
  { id: 299, src: "/M0.jpg", full: "/M0.jpg", title: "Mommy & Me", category: "Milestones & Minis", aspect: "landscape" },
  { id: 300, src: "/M1.JPG", full: "/M1.JPG", title: "Cake Smash", category: "Milestones & Minis", aspect: "landscape" },
  { id: 301, src: "/M2.JPG", full: "/M2.JPG", title: "Gender Reveal", category: "Milestones & Minis", aspect: "landscape" },
  { id: 303, src: "/M3.JPG", full: "/M3.JPG", title: "Fall Mini", category: "Milestones & Minis", aspect: "landscape" },
  { id: 304, src: "/M4.JPG", full: "/M4.JPG", title: "Newborn", category: "Milestones & Minis", aspect: "landscape" },
  { id: 305, src: "/M5.JPG", full: "/M5.JPG", title: "Little Boy", category: "Milestones & Minis", aspect: "landscape" },
  { id: 306, src: "/M6.JPG", full: "/M6.JPG", title: "Winter Maternity", category: "Milestones & Minis", aspect: "portrait" },
  { id: 307, src: "/M7.JPG", full: "/M7.JPG", title: "Holiday Mini", category: "Milestones & Minis", aspect: "landscape" },
  { id: 308, src: "/M8.JPG", full: "/M8.JPG", title: "Nose to Nose", category: "Milestones & Minis", aspect: "landscape" },
  { id: 309, src: "/M9.JPG", full: "/M9.JPG", title: "Back to School", category: "Milestones & Minis", aspect: "landscape" },
  { id: 310, src: "/M10.JPG", full: "/M10.JPG", title: "Sisters", category: "Milestones & Minis", aspect: "landscape" },
  { id: 311, src: "/M11.JPG", full: "/M11.JPG", title: "Engagement Pup", category: "Milestones & Minis", aspect: "landscape" },
  { id: 312, src: "/M12.JPG", full: "/M12.JPG", title: "In Love", category: "Milestones & Minis", aspect: "landscape" },
  { id: 313, src: "/M13.JPG", full: "/M13.JPG", title: "Breaking News", category: "Milestones & Minis", aspect: "landscape" },
  { id: 314, src: "/M14.jpg", full: "/M14.jpg", title: "Baby Aviator", category: "Milestones & Minis", aspect: "landscape" },
  { id: 315, src: "/M15.JPG", full: "/M15.JPG", title: "Merry Christmas", category: "Milestones & Minis", aspect: "landscape" },
  { id: 316, src: "/M16.JPG", full: "/M16.JPG", title: "Holiday Trio", category: "Milestones & Minis", aspect: "landscape" },
  { id: 317, src: "/M17.jpg", full: "/M17.jpg", title: "Little Adventurers", category: "Milestones & Minis", aspect: "landscape" },
  { id: 318, src: "/M18.JPG", full: "/M18.JPG", title: "Fall Kiss", category: "Milestones & Minis", aspect: "landscape" },
  { id: 319, src: "/M19.JPG", full: "/M19.JPG", title: "Little Diva", category: "Milestones & Minis", aspect: "landscape" },
  { id: 320, src: "/M20.JPG", full: "/M20.JPG", title: "Lilac Love", category: "Milestones & Minis", aspect: "landscape" },
  { id: 400, src: "/W0.JPG", full: "/W0.JPG", title: "Classic Getaway", category: "Weddings", aspect: "landscape" },
  { id: 401, src: "/W1.JPG", full: "/W1.JPG", title: "First Look", category: "Weddings", aspect: "landscape" },
  { id: 402, src: "/W2.JPG", full: "/W2.JPG", title: "Wedding Party", category: "Weddings", aspect: "landscape" },
  { id: 403, src: "/W3.JPG", full: "/W3.JPG", title: "Full Crew", category: "Weddings", aspect: "landscape" },
  { id: 404, src: "/W4.JPG", full: "/W4.JPG", title: "The Dress", category: "Weddings", aspect: "landscape" },
  { id: 405, src: "/W5.JPG", full: "/W5.JPG", title: "Down the Aisle", category: "Weddings", aspect: "landscape" },
  { id: 406, src: "/W6.jpg", full: "/W6.jpg", title: "Golden Couple", category: "Weddings", aspect: "landscape" },
  { id: 407, src: "/W7.JPG", full: "/W7.JPG", title: "Bride & Bouquet", category: "Weddings", aspect: "landscape" },
  { id: 408, src: "/W8.JPG", full: "/W8.JPG", title: "Getting Ready", category: "Weddings", aspect: "landscape" },
  { id: 409, src: "/W9.JPG", full: "/W9.JPG", title: "On the Dock", category: "Weddings", aspect: "landscape" },
  { id: 410, src: "/W10.JPG", full: "/W10.JPG", title: "Golf Cart Exit", category: "Weddings", aspect: "landscape" },
  { id: 411, src: "/W11.JPG", full: "/W11.JPG", title: "The Rings", category: "Weddings", aspect: "landscape" },
  { id: 412, src: "/W12.JPG", full: "/W12.JPG", title: "Fire Truck", category: "Weddings", aspect: "landscape" },
  { id: 413, src: "/W13.JPG", full: "/W13.JPG", title: "Firefighter Bride", category: "Weddings", aspect: "landscape" },
  { id: 414, src: "/W14.JPG", full: "/W14.JPG", title: "Boots & Dresses", category: "Weddings", aspect: "landscape" },
  { id: 415, src: "/W15.JPG", full: "/W15.JPG", title: "In His Hands", category: "Weddings", aspect: "landscape" },
  { id: 416, src: "/W16.JPG", full: "/W16.JPG", title: "Red Barn First Look", category: "Weddings", aspect: "landscape" },
  { id: 417, src: "/W17.JPG", full: "/W17.JPG", title: "String Lights", category: "Weddings", aspect: "landscape" },
  { id: 418, src: "/W18.JPG", full: "/W18.JPG", title: "The Ceremony", category: "Weddings", aspect: "landscape" },
  { id: 419, src: "/W19.JPG", full: "/W19.JPG", title: "Under the Veil", category: "Weddings", aspect: "landscape" },
];

export const TESTIMONIALS = [
  { name: "The Martinez Family", text: "Rebecca is the kind of person who remembers your kids\u2019 names, asks about your dog, and somehow captures your family in a way that makes you think \u2018oh wow, we actually look like THAT.\u2019 Our Kensington session last fall is framed all over our house now. Obsessed.", event: "Annual Family Session \u00b7 Brighton" },
  { name: "Jennifer, Mom of Emma", text: "My daughter told me she\u2019d hate the whole thing. She ended up not wanting to leave. Rebecca played her favorite music, hyped her up the whole time, and made her feel like a literal supermodel. Every single photo from Island Lake is a keeper.", event: "Senior Portrait Session \u00b7 White Lake" },
  { name: "The Thompsons", text: "We\u2019ve been going back to Rebecca every year since 2017. She\u2019s basically part of our family at this point. Her natural light style makes every session feel effortless, and the photos somehow keep getting better every single year.", event: "Family Sessions \u00b7 Howell" },
];

export const SERVICES = [
  { category: <>
    <span style={{ display: "block" }}>Senior Sessions</span>
    <span style={{
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "0.72rem",
      color: "var(--muted)",
      fontWeight: 300,
      fontStyle: "italic",
      lineHeight: 1.6,
      marginTop: "8px",
    }}>
      (all senior collections include a private online gallery for sharing and download and print release)
    </span>
    <span style={{
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "0.72rem",
      color: "var(--muted)",
      fontWeight: 300,
      fontStyle: "italic",
      lineHeight: 1.6,
      marginTop: "6px",
    }}>
      Specific locations may require a rental fee.
    </span>
  </>, icon: "\u2727", collections: [
    { name: "Senior Mini Session", price: "$350", desc: "45 minutes. 1 location. 15 digital images — fast, fun, and affordable." },
    { name: "Senior Full Session", price: "$600", desc: "The ultimate senior experience \u2014 2 hours. 1 location. 25+ digital images. $20 product credit." },
    { name: "Senior Split Session", price: "$700", desc: "Same full session split across two dates \u2014 perfect for seasonal variety or a second look.\n2 sessions. 2 dates. 50+ digital images. $30 product credit." },
    { name: "Senior DUO Session", price: "$700", desc: "Grab your best friend! Two seniors, one epic session. Individual and duo shots included.\n2 hours. 1 location. 25+ digital images each. $20 product credit each." },
  ]},
  { category: <>
    <span style={{ display: "block" }}>Family Sessions</span>
    <span style={{
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "0.72rem",
      color: "var(--muted)",
      fontWeight: 300,
      fontStyle: "italic",
      lineHeight: 1.6,
      marginTop: "8px",
    }}>
      (all family collections include a private online gallery for sharing and download and print release)
    </span>
    <span style={{
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "0.72rem",
      color: "var(--muted)",
      fontWeight: 300,
      fontStyle: "italic",
      lineHeight: 1.6,
      marginTop: "6px",
    }}>
      Specific locations may require a rental fee.
    </span>
  </>, icon: "\u2727", collections: [
    { name: "Family Mini Session", price: "$175", desc: "Perfect for holiday cards, announcements or just because your kiddos are growing too fast!\n30 minutes. 1 location. 10 digital images." },
    { name: "Family Full Session", price: "$300", desc: "Bring the family and let's have some fun!\n1 hour. 1 location. 25+ digital images. $20 product credit." },
    { name: "Milestone Sessions", price: "$300", desc: "Maternity, engagements, birthdays - life's biggest chapters.\n1 hour. 1 location. 25+ digital images. $20 product credit." },
  ]},
  { category: "Weddings", icon: "\u2727", collections: [
    { name: "Silver", price: "$1200", desc: "6 hours of coverage on your wedding day." },
    { name: "Gold", price: "$2500", desc: "engagement session. 8 hours of coverage on your wedding day. $50 product credit." },
    { name: "Platinum", price: "$3500", desc: "engagement session. full day coverage on your wedding day. second photographer. $100 product credit." },
    { name: "The Bronze", price: "Micro Wedding Collections", desc: "More and more couples are skipping the big wedding and just getting married — courthouse steps, a backyard with their parents, even a cupcake shop with their best friend as the witness. These collections capture those intimate, no-fuss celebrations with the same quality and care as a full wedding — just scaled to fit the moment." },
    { name: "The Signing", price: "$150", desc: "Micro wedding. Quick, beautiful, done. Your marriage deserves at least this.\n20 minutes. The ceremony, the signing, the first kiss. One location. 15+ digital images." },
    { name: "The Moment", price: "Starting at $350", desc: "The ceremony, the signing and portraits of the new couple afterward. 25+ digital images" },
  ]},
];

export const FAQS = [
  { q: "How far in advance should I book?", a: "As soon as you know what season you would like, please reach out to get on the schedule. For senior portraits, 3\u20136 months ahead is ideal. Family sessions usually book 1\u20133 months out. Mini sessions sell out within DAYS of advertising a special (due to limited spots). Follow on Facebook and Instagram @bellavitabyrebecca or join my email list for first dibs!" },
  { q: "How many outfit changes can I bring?", a: "Depending on the session you choose...Senior's should bring up to 3 outfit changes. For families, one coordination look usually works. If you are booking a family full, a backup for the kiddos is always a good idea. Feel free to send me option choices if you are looking for some input. You will receive a detailed style guide with tips once you have booked your session!" },
  { q: "What happens if it rains?", a: "Welcome to Michigan! I\u2019ll text you 24 hours before and we\u2019ll reschedule \u2014 no extra charge. A little overcast? Chef\u2019s kiss for photos." },
  { q: "Where do sessions take place?", a: "Depending on the season and your vibe...I've got lots of ideas for locations. I have shot at dozens of locations in Southeast Michigan and beyond and I am always up for new places if you have a specific location in mind!" },
  { q: "When will I receive my photos?", a: "I will send you a link to your private gallery, along with a print release within 2\u20133 weeks. You can view, download and share the link with family and friends. This will allow parents, grandparents and family members to download their favorites as well and even order products if they chose." },
];

export const GOOGLE_REVIEWS = [
  { name: "Sarah M.", stars: 5, text: "If you\u2019re on the fence \u2014 just book her. My daughter came home glowing. The photos are unreal.", date: "2 months ago" },
  { name: "The Nguyen Family", stars: 5, text: "Tried two other photographers before Rebecca. Night and day difference. Her natural light style is SO much better than a studio.", date: "3 months ago" },
  { name: "Amanda K.", stars: 5, text: "The whole experience is incredible start to finish. She sends a style guide, texts about outfits, remembers every detail.", date: "1 month ago" },
  { name: "David & Lisa T.", stars: 5, text: "She photographed our family of 7 including a toddler who refused to sit still and a teenager who refused to smile. Amazing shots of BOTH.", date: "4 months ago" },
];

export const PRODUCTS = [
  { name: "Gallery Wraps", description: "High quality, rich, textured canvas products that are fade resistant and ready to hang.", icon: "\u2727" },
  { name: "Acrylics", description: "Crafted premium plexiglass showcasing vivid and modern design.", icon: "\u2727" },
  { name: "Metals", description: "Sleek and modern aluminum products that are fade and scratch resistant.", icon: "\u2727" },
  { name: "Albums", description: "Personalized photobooks to luxurious Heirloom albums.", icon: "\u2727" },
  { name: "Grad Gear", description: "Announcements, Invites, Banners and Thank you cards featuring your senior's favorite images.", icon: "\u2727" },
  { name: "Other Awesome Goods", description: "", icon: "\u2727" },
];

export const DEFAULT_CLIENT_GALLERIES = [
  {
    "id": "presley",
    "clientName": "Presley",
    "password": "presley",
    "sessionType": "Senior Portraits",
    "date": "2026-05-12",
    "coverImage": "/clients/presley/IMG_6488.jpg",
    "images": [
      {
        "src": "/clients/presley/IMG_6488.jpg",
        "full": "/clients/presley/IMG_6488.jpg",
        "title": "Presley 01"
      },
      {
        "src": "/clients/presley/IMG_6521.jpg",
        "full": "/clients/presley/IMG_6521.jpg",
        "title": "Presley 02"
      },
      {
        "src": "/clients/presley/IMG_6526.jpg",
        "full": "/clients/presley/IMG_6526.jpg",
        "title": "Presley 03"
      },
      {
        "src": "/clients/presley/IMG_6528.jpg",
        "full": "/clients/presley/IMG_6528.jpg",
        "title": "Presley 04"
      },
      {
        "src": "/clients/presley/IMG_6535.jpg",
        "full": "/clients/presley/IMG_6535.jpg",
        "title": "Presley 05"
      },
      {
        "src": "/clients/presley/IMG_6539.jpg",
        "full": "/clients/presley/IMG_6539.jpg",
        "title": "Presley 06"
      },
      {
        "src": "/clients/presley/IMG_6540.jpg",
        "full": "/clients/presley/IMG_6540.jpg",
        "title": "Presley 07"
      },
      {
        "src": "/clients/presley/IMG_6542.jpg",
        "full": "/clients/presley/IMG_6542.jpg",
        "title": "Presley 08"
      },
      {
        "src": "/clients/presley/IMG_6547.jpg",
        "full": "/clients/presley/IMG_6547.jpg",
        "title": "Presley 09"
      },
      {
        "src": "/clients/presley/IMG_6548.jpg",
        "full": "/clients/presley/IMG_6548.jpg",
        "title": "Presley 10"
      },
      {
        "src": "/clients/presley/IMG_6551.jpg",
        "full": "/clients/presley/IMG_6551.jpg",
        "title": "Presley 11"
      },
      {
        "src": "/clients/presley/IMG_6555.jpg",
        "full": "/clients/presley/IMG_6555.jpg",
        "title": "Presley 12"
      },
      {
        "src": "/clients/presley/IMG_6557.jpg",
        "full": "/clients/presley/IMG_6557.jpg",
        "title": "Presley 13"
      },
      {
        "src": "/clients/presley/IMG_6569.jpg",
        "full": "/clients/presley/IMG_6569.jpg",
        "title": "Presley 14"
      },
      {
        "src": "/clients/presley/IMG_6570.jpg",
        "full": "/clients/presley/IMG_6570.jpg",
        "title": "Presley 15"
      },
      {
        "src": "/clients/presley/IMG_6572.jpg",
        "full": "/clients/presley/IMG_6572.jpg",
        "title": "Presley 16"
      },
      {
        "src": "/clients/presley/IMG_6584.jpg",
        "full": "/clients/presley/IMG_6584.jpg",
        "title": "Presley 17"
      },
      {
        "src": "/clients/presley/IMG_6600.jpg",
        "full": "/clients/presley/IMG_6600.jpg",
        "title": "Presley 18"
      },
      {
        "src": "/clients/presley/IMG_6603.jpg",
        "full": "/clients/presley/IMG_6603.jpg",
        "title": "Presley 19"
      },
      {
        "src": "/clients/presley/IMG_6609.jpg",
        "full": "/clients/presley/IMG_6609.jpg",
        "title": "Presley 20"
      },
      {
        "src": "/clients/presley/IMG_6620.jpg",
        "full": "/clients/presley/IMG_6620.jpg",
        "title": "Presley 21"
      },
      {
        "src": "/clients/presley/IMG_6621.jpg",
        "full": "/clients/presley/IMG_6621.jpg",
        "title": "Presley 22"
      },
      {
        "src": "/clients/presley/IMG_6665.jpg",
        "full": "/clients/presley/IMG_6665.jpg",
        "title": "Presley 23"
      },
      {
        "src": "/clients/presley/IMG_6672.jpg",
        "full": "/clients/presley/IMG_6672.jpg",
        "title": "Presley 24"
      },
      {
        "src": "/clients/presley/IMG_6680.jpg",
        "full": "/clients/presley/IMG_6680.jpg",
        "title": "Presley 25"
      },
      {
        "src": "/clients/presley/IMG_6681.jpg",
        "full": "/clients/presley/IMG_6681.jpg",
        "title": "Presley 26"
      },
      {
        "src": "/clients/presley/IMG_6700.jpg",
        "full": "/clients/presley/IMG_6700.jpg",
        "title": "Presley 27"
      },
      {
        "src": "/clients/presley/IMG_6705.jpg",
        "full": "/clients/presley/IMG_6705.jpg",
        "title": "Presley 28"
      },
      {
        "src": "/clients/presley/IMG_6725.jpg",
        "full": "/clients/presley/IMG_6725.jpg",
        "title": "Presley 29"
      },
      {
        "src": "/clients/presley/IMG_6726.jpg",
        "full": "/clients/presley/IMG_6726.jpg",
        "title": "Presley 30"
      },
      {
        "src": "/clients/presley/IMG_6730.jpg",
        "full": "/clients/presley/IMG_6730.jpg",
        "title": "Presley 31"
      },
      {
        "src": "/clients/presley/IMG_6735.jpg",
        "full": "/clients/presley/IMG_6735.jpg",
        "title": "Presley 32"
      },
      {
        "src": "/clients/presley/IMG_6738.jpg",
        "full": "/clients/presley/IMG_6738.jpg",
        "title": "Presley 33"
      },
      {
        "src": "/clients/presley/IMG_6741.jpg",
        "full": "/clients/presley/IMG_6741.jpg",
        "title": "Presley 34"
      },
      {
        "src": "/clients/presley/IMG_6747.jpg",
        "full": "/clients/presley/IMG_6747.jpg",
        "title": "Presley 35"
      },
      {
        "src": "/clients/presley/IMG_6749.jpg",
        "full": "/clients/presley/IMG_6749.jpg",
        "title": "Presley 36"
      },
      {
        "src": "/clients/presley/IMG_6755.jpg",
        "full": "/clients/presley/IMG_6755.jpg",
        "title": "Presley 37"
      },
      {
        "src": "/clients/presley/IMG_6760.jpg",
        "full": "/clients/presley/IMG_6760.jpg",
        "title": "Presley 38"
      },
      {
        "src": "/clients/presley/IMG_6765.jpg",
        "full": "/clients/presley/IMG_6765.jpg",
        "title": "Presley 39"
      },
      {
        "src": "/clients/presley/IMG_6773.jpg",
        "full": "/clients/presley/IMG_6773.jpg",
        "title": "Presley 40"
      },
      {
        "src": "/clients/presley/IMG_6778.jpg",
        "full": "/clients/presley/IMG_6778.jpg",
        "title": "Presley 41"
      },
      {
        "src": "/clients/presley/IMG_6783.jpg",
        "full": "/clients/presley/IMG_6783.jpg",
        "title": "Presley 42"
      }
    ]
  },
  {
    "id": "aidan-b",
    "clientName": "Aidan B",
    "password": "aidan26",
    "sessionType": "Senior Portraits",
    "date": "2026-06-10",
    "coverImage": "/clients/aidan-b/IMG_7040.jpg",
    "images": [
      {
        "src": "/clients/aidan-b/IMG_7040.jpg",
        "full": "/clients/aidan-b/IMG_7040.jpg",
        "title": "Aidan B 01"
      },
      {
        "src": "/clients/aidan-b/IMG_7041.jpg",
        "full": "/clients/aidan-b/IMG_7041.jpg",
        "title": "Aidan B 02"
      },
      {
        "src": "/clients/aidan-b/IMG_7063.jpg",
        "full": "/clients/aidan-b/IMG_7063.jpg",
        "title": "Aidan B 03"
      },
      {
        "src": "/clients/aidan-b/IMG_7070.jpg",
        "full": "/clients/aidan-b/IMG_7070.jpg",
        "title": "Aidan B 04"
      },
      {
        "src": "/clients/aidan-b/IMG_7074.jpg",
        "full": "/clients/aidan-b/IMG_7074.jpg",
        "title": "Aidan B 05"
      },
      {
        "src": "/clients/aidan-b/IMG_7090.jpg",
        "full": "/clients/aidan-b/IMG_7090.jpg",
        "title": "Aidan B 06"
      },
      {
        "src": "/clients/aidan-b/IMG_7092.jpg",
        "full": "/clients/aidan-b/IMG_7092.jpg",
        "title": "Aidan B 07"
      },
      {
        "src": "/clients/aidan-b/IMG_7095.jpg",
        "full": "/clients/aidan-b/IMG_7095.jpg",
        "title": "Aidan B 08"
      },
      {
        "src": "/clients/aidan-b/IMG_7096.jpg",
        "full": "/clients/aidan-b/IMG_7096.jpg",
        "title": "Aidan B 09"
      },
      {
        "src": "/clients/aidan-b/IMG_7101.jpg",
        "full": "/clients/aidan-b/IMG_7101.jpg",
        "title": "Aidan B 10"
      },
      {
        "src": "/clients/aidan-b/IMG_7106.jpg",
        "full": "/clients/aidan-b/IMG_7106.jpg",
        "title": "Aidan B 11"
      },
      {
        "src": "/clients/aidan-b/IMG_7108.jpg",
        "full": "/clients/aidan-b/IMG_7108.jpg",
        "title": "Aidan B 12"
      },
      {
        "src": "/clients/aidan-b/IMG_7122.jpg",
        "full": "/clients/aidan-b/IMG_7122.jpg",
        "title": "Aidan B 13"
      },
      {
        "src": "/clients/aidan-b/IMG_7124.jpg",
        "full": "/clients/aidan-b/IMG_7124.jpg",
        "title": "Aidan B 14"
      },
      {
        "src": "/clients/aidan-b/IMG_7126.jpg",
        "full": "/clients/aidan-b/IMG_7126.jpg",
        "title": "Aidan B 15"
      },
      {
        "src": "/clients/aidan-b/IMG_7127.jpg",
        "full": "/clients/aidan-b/IMG_7127.jpg",
        "title": "Aidan B 16"
      },
      {
        "src": "/clients/aidan-b/IMG_7133.jpg",
        "full": "/clients/aidan-b/IMG_7133.jpg",
        "title": "Aidan B 17"
      },
      {
        "src": "/clients/aidan-b/IMG_7134.jpg",
        "full": "/clients/aidan-b/IMG_7134.jpg",
        "title": "Aidan B 18"
      },
      {
        "src": "/clients/aidan-b/IMG_7135 (1).jpg",
        "full": "/clients/aidan-b/IMG_7135 (1).jpg",
        "title": "Aidan B 19"
      },
      {
        "src": "/clients/aidan-b/IMG_7135.jpg",
        "full": "/clients/aidan-b/IMG_7135.jpg",
        "title": "Aidan B 20"
      }
    ]
  },
  {
    "id": "bellab",
    "clientName": "BellaB",
    "password": "bella26",
    "sessionType": "Senior Portraits",
    "date": "2026-06-12",
    "coverImage": "/clients/bellab/IMG_6794.jpg",
    "images": [
      {
        "src": "/clients/bellab/IMG_6794.jpg",
        "full": "/clients/bellab/IMG_6794.jpg",
        "title": "BellaB 01"
      },
      {
        "src": "/clients/bellab/IMG_6804.jpg",
        "full": "/clients/bellab/IMG_6804.jpg",
        "title": "BellaB 02"
      },
      {
        "src": "/clients/bellab/IMG_6819.jpg",
        "full": "/clients/bellab/IMG_6819.jpg",
        "title": "BellaB 03"
      },
      {
        "src": "/clients/bellab/IMG_6834.jpg",
        "full": "/clients/bellab/IMG_6834.jpg",
        "title": "BellaB 04"
      },
      {
        "src": "/clients/bellab/IMG_6839.jpg",
        "full": "/clients/bellab/IMG_6839.jpg",
        "title": "BellaB 05"
      },
      {
        "src": "/clients/bellab/IMG_6848.jpg",
        "full": "/clients/bellab/IMG_6848.jpg",
        "title": "BellaB 06"
      },
      {
        "src": "/clients/bellab/IMG_6862.jpg",
        "full": "/clients/bellab/IMG_6862.jpg",
        "title": "BellaB 07"
      },
      {
        "src": "/clients/bellab/IMG_6891.jpg",
        "full": "/clients/bellab/IMG_6891.jpg",
        "title": "BellaB 08"
      },
      {
        "src": "/clients/bellab/IMG_6892.jpg",
        "full": "/clients/bellab/IMG_6892.jpg",
        "title": "BellaB 09"
      },
      {
        "src": "/clients/bellab/IMG_6904.jpg",
        "full": "/clients/bellab/IMG_6904.jpg",
        "title": "BellaB 10"
      },
      {
        "src": "/clients/bellab/IMG_6920.jpg",
        "full": "/clients/bellab/IMG_6920.jpg",
        "title": "BellaB 11"
      },
      {
        "src": "/clients/bellab/IMG_6927.jpg",
        "full": "/clients/bellab/IMG_6927.jpg",
        "title": "BellaB 12"
      },
      {
        "src": "/clients/bellab/IMG_6942.jpg",
        "full": "/clients/bellab/IMG_6942.jpg",
        "title": "BellaB 13"
      },
      {
        "src": "/clients/bellab/IMG_6944.jpg",
        "full": "/clients/bellab/IMG_6944.jpg",
        "title": "BellaB 14"
      },
      {
        "src": "/clients/bellab/IMG_6965.jpg",
        "full": "/clients/bellab/IMG_6965.jpg",
        "title": "BellaB 15"
      },
      {
        "src": "/clients/bellab/IMG_6994.jpg",
        "full": "/clients/bellab/IMG_6994.jpg",
        "title": "BellaB 16"
      },
      {
        "src": "/clients/bellab/IMG_7006.jpg",
        "full": "/clients/bellab/IMG_7006.jpg",
        "title": "BellaB 17"
      },
      {
        "src": "/clients/bellab/IMG_7016 (1).jpg",
        "full": "/clients/bellab/IMG_7016 (1).jpg",
        "title": "BellaB 18"
      },
      {
        "src": "/clients/bellab/IMG_7016.jpg",
        "full": "/clients/bellab/IMG_7016.jpg",
        "title": "BellaB 19"
      }
    ]
  },
  {
    "id": "diya-grad-party",
    "clientName": "Diya Grad Party",
    "password": "diya",
    "sessionType": "Other",
    "date": "2026-06-20",
    "coverImage": "/clients/diya-grad-party/IMG_7190.JPG",
    "images": [
      {
        "src": "/clients/diya-grad-party/IMG_7190.JPG",
        "full": "/clients/diya-grad-party/IMG_7190.JPG",
        "title": "Diya Grad Party 01"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7192.JPG",
        "full": "/clients/diya-grad-party/IMG_7192.JPG",
        "title": "Diya Grad Party 02"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7193.JPG",
        "full": "/clients/diya-grad-party/IMG_7193.JPG",
        "title": "Diya Grad Party 03"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7194.JPG",
        "full": "/clients/diya-grad-party/IMG_7194.JPG",
        "title": "Diya Grad Party 04"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7195.JPG",
        "full": "/clients/diya-grad-party/IMG_7195.JPG",
        "title": "Diya Grad Party 05"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7196.JPG",
        "full": "/clients/diya-grad-party/IMG_7196.JPG",
        "title": "Diya Grad Party 06"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7198.JPG",
        "full": "/clients/diya-grad-party/IMG_7198.JPG",
        "title": "Diya Grad Party 07"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7199.JPG",
        "full": "/clients/diya-grad-party/IMG_7199.JPG",
        "title": "Diya Grad Party 08"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7200.JPG",
        "full": "/clients/diya-grad-party/IMG_7200.JPG",
        "title": "Diya Grad Party 09"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7201.JPG",
        "full": "/clients/diya-grad-party/IMG_7201.JPG",
        "title": "Diya Grad Party 10"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7202.JPG",
        "full": "/clients/diya-grad-party/IMG_7202.JPG",
        "title": "Diya Grad Party 11"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7205.JPG",
        "full": "/clients/diya-grad-party/IMG_7205.JPG",
        "title": "Diya Grad Party 12"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7206.JPG",
        "full": "/clients/diya-grad-party/IMG_7206.JPG",
        "title": "Diya Grad Party 13"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7209.JPG",
        "full": "/clients/diya-grad-party/IMG_7209.JPG",
        "title": "Diya Grad Party 14"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7210.JPG",
        "full": "/clients/diya-grad-party/IMG_7210.JPG",
        "title": "Diya Grad Party 15"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7213.JPG",
        "full": "/clients/diya-grad-party/IMG_7213.JPG",
        "title": "Diya Grad Party 16"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7214.JPG",
        "full": "/clients/diya-grad-party/IMG_7214.JPG",
        "title": "Diya Grad Party 17"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7215.JPG",
        "full": "/clients/diya-grad-party/IMG_7215.JPG",
        "title": "Diya Grad Party 18"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7216.JPG",
        "full": "/clients/diya-grad-party/IMG_7216.JPG",
        "title": "Diya Grad Party 19"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7217.JPG",
        "full": "/clients/diya-grad-party/IMG_7217.JPG",
        "title": "Diya Grad Party 20"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7218.JPG",
        "full": "/clients/diya-grad-party/IMG_7218.JPG",
        "title": "Diya Grad Party 21"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7219.JPG",
        "full": "/clients/diya-grad-party/IMG_7219.JPG",
        "title": "Diya Grad Party 22"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7220.JPG",
        "full": "/clients/diya-grad-party/IMG_7220.JPG",
        "title": "Diya Grad Party 23"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7221.JPG",
        "full": "/clients/diya-grad-party/IMG_7221.JPG",
        "title": "Diya Grad Party 24"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7222.JPG",
        "full": "/clients/diya-grad-party/IMG_7222.JPG",
        "title": "Diya Grad Party 25"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7224.JPG",
        "full": "/clients/diya-grad-party/IMG_7224.JPG",
        "title": "Diya Grad Party 26"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7225.JPG",
        "full": "/clients/diya-grad-party/IMG_7225.JPG",
        "title": "Diya Grad Party 27"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7227.JPG",
        "full": "/clients/diya-grad-party/IMG_7227.JPG",
        "title": "Diya Grad Party 28"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7229.JPG",
        "full": "/clients/diya-grad-party/IMG_7229.JPG",
        "title": "Diya Grad Party 29"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7230.JPG",
        "full": "/clients/diya-grad-party/IMG_7230.JPG",
        "title": "Diya Grad Party 30"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7232.JPG",
        "full": "/clients/diya-grad-party/IMG_7232.JPG",
        "title": "Diya Grad Party 31"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7233.JPG",
        "full": "/clients/diya-grad-party/IMG_7233.JPG",
        "title": "Diya Grad Party 32"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7234.JPG",
        "full": "/clients/diya-grad-party/IMG_7234.JPG",
        "title": "Diya Grad Party 33"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7235.JPG",
        "full": "/clients/diya-grad-party/IMG_7235.JPG",
        "title": "Diya Grad Party 34"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7236.JPG",
        "full": "/clients/diya-grad-party/IMG_7236.JPG",
        "title": "Diya Grad Party 35"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7237.JPG",
        "full": "/clients/diya-grad-party/IMG_7237.JPG",
        "title": "Diya Grad Party 36"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7238.JPG",
        "full": "/clients/diya-grad-party/IMG_7238.JPG",
        "title": "Diya Grad Party 37"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7239.JPG",
        "full": "/clients/diya-grad-party/IMG_7239.JPG",
        "title": "Diya Grad Party 38"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7240.JPG",
        "full": "/clients/diya-grad-party/IMG_7240.JPG",
        "title": "Diya Grad Party 39"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7242.JPG",
        "full": "/clients/diya-grad-party/IMG_7242.JPG",
        "title": "Diya Grad Party 40"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7243.JPG",
        "full": "/clients/diya-grad-party/IMG_7243.JPG",
        "title": "Diya Grad Party 41"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7244.JPG",
        "full": "/clients/diya-grad-party/IMG_7244.JPG",
        "title": "Diya Grad Party 42"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7245.JPG",
        "full": "/clients/diya-grad-party/IMG_7245.JPG",
        "title": "Diya Grad Party 43"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7246.JPG",
        "full": "/clients/diya-grad-party/IMG_7246.JPG",
        "title": "Diya Grad Party 44"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7247.JPG",
        "full": "/clients/diya-grad-party/IMG_7247.JPG",
        "title": "Diya Grad Party 45"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7248.JPG",
        "full": "/clients/diya-grad-party/IMG_7248.JPG",
        "title": "Diya Grad Party 46"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7250.JPG",
        "full": "/clients/diya-grad-party/IMG_7250.JPG",
        "title": "Diya Grad Party 47"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7254.JPG",
        "full": "/clients/diya-grad-party/IMG_7254.JPG",
        "title": "Diya Grad Party 48"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7255.JPG",
        "full": "/clients/diya-grad-party/IMG_7255.JPG",
        "title": "Diya Grad Party 49"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7257.JPG",
        "full": "/clients/diya-grad-party/IMG_7257.JPG",
        "title": "Diya Grad Party 50"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7258.JPG",
        "full": "/clients/diya-grad-party/IMG_7258.JPG",
        "title": "Diya Grad Party 51"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7260.JPG",
        "full": "/clients/diya-grad-party/IMG_7260.JPG",
        "title": "Diya Grad Party 52"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7265.JPG",
        "full": "/clients/diya-grad-party/IMG_7265.JPG",
        "title": "Diya Grad Party 53"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7266.JPG",
        "full": "/clients/diya-grad-party/IMG_7266.JPG",
        "title": "Diya Grad Party 54"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7269.JPG",
        "full": "/clients/diya-grad-party/IMG_7269.JPG",
        "title": "Diya Grad Party 55"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7271.JPG",
        "full": "/clients/diya-grad-party/IMG_7271.JPG",
        "title": "Diya Grad Party 56"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7272.JPG",
        "full": "/clients/diya-grad-party/IMG_7272.JPG",
        "title": "Diya Grad Party 57"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7273.JPG",
        "full": "/clients/diya-grad-party/IMG_7273.JPG",
        "title": "Diya Grad Party 58"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7274.JPG",
        "full": "/clients/diya-grad-party/IMG_7274.JPG",
        "title": "Diya Grad Party 59"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7275.JPG",
        "full": "/clients/diya-grad-party/IMG_7275.JPG",
        "title": "Diya Grad Party 60"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7276.JPG",
        "full": "/clients/diya-grad-party/IMG_7276.JPG",
        "title": "Diya Grad Party 61"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7278.JPG",
        "full": "/clients/diya-grad-party/IMG_7278.JPG",
        "title": "Diya Grad Party 62"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7283.JPG",
        "full": "/clients/diya-grad-party/IMG_7283.JPG",
        "title": "Diya Grad Party 63"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7284.JPG",
        "full": "/clients/diya-grad-party/IMG_7284.JPG",
        "title": "Diya Grad Party 64"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7288.JPG",
        "full": "/clients/diya-grad-party/IMG_7288.JPG",
        "title": "Diya Grad Party 65"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7290.JPG",
        "full": "/clients/diya-grad-party/IMG_7290.JPG",
        "title": "Diya Grad Party 66"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7291.JPG",
        "full": "/clients/diya-grad-party/IMG_7291.JPG",
        "title": "Diya Grad Party 67"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7292.JPG",
        "full": "/clients/diya-grad-party/IMG_7292.JPG",
        "title": "Diya Grad Party 68"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7293.JPG",
        "full": "/clients/diya-grad-party/IMG_7293.JPG",
        "title": "Diya Grad Party 69"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7296.JPG",
        "full": "/clients/diya-grad-party/IMG_7296.JPG",
        "title": "Diya Grad Party 70"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7297.JPG",
        "full": "/clients/diya-grad-party/IMG_7297.JPG",
        "title": "Diya Grad Party 71"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7299.JPG",
        "full": "/clients/diya-grad-party/IMG_7299.JPG",
        "title": "Diya Grad Party 72"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7300.JPG",
        "full": "/clients/diya-grad-party/IMG_7300.JPG",
        "title": "Diya Grad Party 73"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7301.JPG",
        "full": "/clients/diya-grad-party/IMG_7301.JPG",
        "title": "Diya Grad Party 74"
      },
      {
        "src": "/clients/diya-grad-party/IMG_7303.JPG",
        "full": "/clients/diya-grad-party/IMG_7303.JPG",
        "title": "Diya Grad Party 75"
      }
    ]
  },
  {
    "id": "casper-family",
    "clientName": "Casper Family",
    "password": "casper2026",
    "sessionType": "Family Session",
    "date": "2026-08-10",
    "coverImage": "/clients/casper-family/IMG_7400.JPG",
    "images": [
      {
        "src": "/clients/casper-family/IMG_7400.JPG",
        "full": "/clients/casper-family/IMG_7400.JPG",
        "title": "Casper Family 01"
      },
      {
        "src": "/clients/casper-family/IMG_7401.jpg",
        "full": "/clients/casper-family/IMG_7401.jpg",
        "title": "Casper Family 02"
      },
      {
        "src": "/clients/casper-family/IMG_7403.jpg",
        "full": "/clients/casper-family/IMG_7403.jpg",
        "title": "Casper Family 03"
      },
      {
        "src": "/clients/casper-family/IMG_7454 (2).jpg",
        "full": "/clients/casper-family/IMG_7454 (2).jpg",
        "title": "Casper Family 04"
      },
      {
        "src": "/clients/casper-family/IMG_7454.jpg",
        "full": "/clients/casper-family/IMG_7454.jpg",
        "title": "Casper Family 05"
      },
      {
        "src": "/clients/casper-family/IMG_7463 (2).jpg",
        "full": "/clients/casper-family/IMG_7463 (2).jpg",
        "title": "Casper Family 06"
      },
      {
        "src": "/clients/casper-family/IMG_7463.jpg",
        "full": "/clients/casper-family/IMG_7463.jpg",
        "title": "Casper Family 07"
      },
      {
        "src": "/clients/casper-family/IMG_7464.jpg",
        "full": "/clients/casper-family/IMG_7464.jpg",
        "title": "Casper Family 08"
      },
      {
        "src": "/clients/casper-family/IMG_7471.JPG",
        "full": "/clients/casper-family/IMG_7471.JPG",
        "title": "Casper Family 09"
      },
      {
        "src": "/clients/casper-family/IMG_7473.jpg",
        "full": "/clients/casper-family/IMG_7473.jpg",
        "title": "Casper Family 10"
      },
      {
        "src": "/clients/casper-family/IMG_7477.jpg",
        "full": "/clients/casper-family/IMG_7477.jpg",
        "title": "Casper Family 11"
      },
      {
        "src": "/clients/casper-family/IMG_7479.jpg",
        "full": "/clients/casper-family/IMG_7479.jpg",
        "title": "Casper Family 12"
      },
      {
        "src": "/clients/casper-family/IMG_7484.jpg",
        "full": "/clients/casper-family/IMG_7484.jpg",
        "title": "Casper Family 13"
      },
      {
        "src": "/clients/casper-family/IMG_7497.jpg",
        "full": "/clients/casper-family/IMG_7497.jpg",
        "title": "Casper Family 14"
      },
      {
        "src": "/clients/casper-family/IMG_7517 (2).jpg",
        "full": "/clients/casper-family/IMG_7517 (2).jpg",
        "title": "Casper Family 15"
      },
      {
        "src": "/clients/casper-family/IMG_7517.jpg",
        "full": "/clients/casper-family/IMG_7517.jpg",
        "title": "Casper Family 16"
      },
      {
        "src": "/clients/casper-family/IMG_7521.jpg",
        "full": "/clients/casper-family/IMG_7521.jpg",
        "title": "Casper Family 17"
      },
      {
        "src": "/clients/casper-family/IMG_7547.jpg",
        "full": "/clients/casper-family/IMG_7547.jpg",
        "title": "Casper Family 18"
      },
      {
        "src": "/clients/casper-family/IMG_7548.jpg",
        "full": "/clients/casper-family/IMG_7548.jpg",
        "title": "Casper Family 19"
      },
      {
        "src": "/clients/casper-family/IMG_7551.jpg",
        "full": "/clients/casper-family/IMG_7551.jpg",
        "title": "Casper Family 20"
      },
      {
        "src": "/clients/casper-family/IMG_7557.jpg",
        "full": "/clients/casper-family/IMG_7557.jpg",
        "title": "Casper Family 21"
      },
      {
        "src": "/clients/casper-family/IMG_7569.jpg",
        "full": "/clients/casper-family/IMG_7569.jpg",
        "title": "Casper Family 22"
      },
      {
        "src": "/clients/casper-family/IMG_7579.jpg",
        "full": "/clients/casper-family/IMG_7579.jpg",
        "title": "Casper Family 23"
      },
      {
        "src": "/clients/casper-family/IMG_7580.jpg",
        "full": "/clients/casper-family/IMG_7580.jpg",
        "title": "Casper Family 24"
      },
      {
        "src": "/clients/casper-family/IMG_7586.jpg",
        "full": "/clients/casper-family/IMG_7586.jpg",
        "title": "Casper Family 25"
      },
      {
        "src": "/clients/casper-family/IMG_7593.jpg",
        "full": "/clients/casper-family/IMG_7593.jpg",
        "title": "Casper Family 26"
      },
      {
        "src": "/clients/casper-family/IMG_7607 (2).jpg",
        "full": "/clients/casper-family/IMG_7607 (2).jpg",
        "title": "Casper Family 27"
      },
      {
        "src": "/clients/casper-family/IMG_7607.jpg",
        "full": "/clients/casper-family/IMG_7607.jpg",
        "title": "Casper Family 28"
      },
      {
        "src": "/clients/casper-family/IMG_7608.jpg",
        "full": "/clients/casper-family/IMG_7608.jpg",
        "title": "Casper Family 29"
      },
      {
        "src": "/clients/casper-family/IMG_7609.jpg",
        "full": "/clients/casper-family/IMG_7609.jpg",
        "title": "Casper Family 30"
      }
    ]
  },
  {
    "id": "media-day-lhs-varisty-pom",
    "clientName": "Media Day LHS Varisty POM",
    "password": "lhsvarsity26",
    "sessionType": "Other",
    "date": "2026-08-20",
    "coverImage": "/clients/media-day-lhs-varisty-pom/BANNER ADRIANNA.jpg",
    "images": [
      {
        "src": "/clients/media-day-lhs-varisty-pom/BANNER ADRIANNA.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/BANNER ADRIANNA.jpg",
        "title": "Media Day LHS Varisty POM 01"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/BANNER CAM.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/BANNER CAM.jpg",
        "title": "Media Day LHS Varisty POM 02"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/BANNER GABBY.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/BANNER GABBY.jpg",
        "title": "Media Day LHS Varisty POM 03"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/BANNER PRESLEY.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/BANNER PRESLEY.jpg",
        "title": "Media Day LHS Varisty POM 04"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/BANNER VALENTINA.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/BANNER VALENTINA.jpg",
        "title": "Media Day LHS Varisty POM 05"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7669.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7669.jpg",
        "title": "Media Day LHS Varisty POM 06"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7708.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7708.jpg",
        "title": "Media Day LHS Varisty POM 07"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7724.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7724.jpg",
        "title": "Media Day LHS Varisty POM 08"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7732.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7732.jpg",
        "title": "Media Day LHS Varisty POM 09"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7733.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7733.jpg",
        "title": "Media Day LHS Varisty POM 10"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7740.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7740.jpg",
        "title": "Media Day LHS Varisty POM 11"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7741.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7741.jpg",
        "title": "Media Day LHS Varisty POM 12"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7743.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7743.jpg",
        "title": "Media Day LHS Varisty POM 13"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7753.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7753.jpg",
        "title": "Media Day LHS Varisty POM 14"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7756.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7756.jpg",
        "title": "Media Day LHS Varisty POM 15"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7767.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7767.jpg",
        "title": "Media Day LHS Varisty POM 16"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7770.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7770.jpg",
        "title": "Media Day LHS Varisty POM 17"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7777.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7777.jpg",
        "title": "Media Day LHS Varisty POM 18"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7778.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7778.jpg",
        "title": "Media Day LHS Varisty POM 19"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7785.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7785.jpg",
        "title": "Media Day LHS Varisty POM 20"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7786.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7786.jpg",
        "title": "Media Day LHS Varisty POM 21"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7788.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7788.jpg",
        "title": "Media Day LHS Varisty POM 22"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7801 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7801 (1).jpg",
        "title": "Media Day LHS Varisty POM 23"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7801.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7801.jpg",
        "title": "Media Day LHS Varisty POM 24"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7805.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7805.jpg",
        "title": "Media Day LHS Varisty POM 25"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7818.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7818.jpg",
        "title": "Media Day LHS Varisty POM 26"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7821.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7821.jpg",
        "title": "Media Day LHS Varisty POM 27"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7831.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7831.jpg",
        "title": "Media Day LHS Varisty POM 28"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7832 (2).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7832 (2).jpg",
        "title": "Media Day LHS Varisty POM 29"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7832.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7832.jpg",
        "title": "Media Day LHS Varisty POM 30"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7840.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7840.jpg",
        "title": "Media Day LHS Varisty POM 31"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7868 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7868 (1).jpg",
        "title": "Media Day LHS Varisty POM 32"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7868.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7868.jpg",
        "title": "Media Day LHS Varisty POM 33"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7872.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7872.jpg",
        "title": "Media Day LHS Varisty POM 34"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7878.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7878.jpg",
        "title": "Media Day LHS Varisty POM 35"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7898.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7898.jpg",
        "title": "Media Day LHS Varisty POM 36"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7903.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7903.jpg",
        "title": "Media Day LHS Varisty POM 37"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7915.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7915.jpg",
        "title": "Media Day LHS Varisty POM 38"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7916.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7916.jpg",
        "title": "Media Day LHS Varisty POM 39"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7919.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7919.jpg",
        "title": "Media Day LHS Varisty POM 40"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7931.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7931.jpg",
        "title": "Media Day LHS Varisty POM 41"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7932.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7932.jpg",
        "title": "Media Day LHS Varisty POM 42"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7937.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7937.jpg",
        "title": "Media Day LHS Varisty POM 43"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7943 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7943 (1).jpg",
        "title": "Media Day LHS Varisty POM 44"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7943.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7943.jpg",
        "title": "Media Day LHS Varisty POM 45"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7946.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7946.jpg",
        "title": "Media Day LHS Varisty POM 46"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7948.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7948.jpg",
        "title": "Media Day LHS Varisty POM 47"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7956.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7956.jpg",
        "title": "Media Day LHS Varisty POM 48"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7958.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7958.jpg",
        "title": "Media Day LHS Varisty POM 49"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7963.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7963.jpg",
        "title": "Media Day LHS Varisty POM 50"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7971 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7971 (1).jpg",
        "title": "Media Day LHS Varisty POM 51"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_7971.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_7971.jpg",
        "title": "Media Day LHS Varisty POM 52"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8053.JPG",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8053.JPG",
        "title": "Media Day LHS Varisty POM 53"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8056.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8056.jpg",
        "title": "Media Day LHS Varisty POM 54"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8074.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8074.jpg",
        "title": "Media Day LHS Varisty POM 55"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8083.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8083.jpg",
        "title": "Media Day LHS Varisty POM 56"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8085.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8085.jpg",
        "title": "Media Day LHS Varisty POM 57"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8091.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8091.jpg",
        "title": "Media Day LHS Varisty POM 58"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8099.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8099.jpg",
        "title": "Media Day LHS Varisty POM 59"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8113.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8113.jpg",
        "title": "Media Day LHS Varisty POM 60"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8118.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8118.jpg",
        "title": "Media Day LHS Varisty POM 61"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8140.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8140.jpg",
        "title": "Media Day LHS Varisty POM 62"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8146.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8146.jpg",
        "title": "Media Day LHS Varisty POM 63"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8149 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8149 (1).jpg",
        "title": "Media Day LHS Varisty POM 64"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8149.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8149.jpg",
        "title": "Media Day LHS Varisty POM 65"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8154.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8154.jpg",
        "title": "Media Day LHS Varisty POM 66"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8165.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8165.jpg",
        "title": "Media Day LHS Varisty POM 67"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8169.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8169.jpg",
        "title": "Media Day LHS Varisty POM 68"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8172.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8172.jpg",
        "title": "Media Day LHS Varisty POM 69"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8182.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8182.jpg",
        "title": "Media Day LHS Varisty POM 70"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8185.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8185.jpg",
        "title": "Media Day LHS Varisty POM 71"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8188.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8188.jpg",
        "title": "Media Day LHS Varisty POM 72"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8191.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8191.jpg",
        "title": "Media Day LHS Varisty POM 73"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8194.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8194.jpg",
        "title": "Media Day LHS Varisty POM 74"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8199.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8199.jpg",
        "title": "Media Day LHS Varisty POM 75"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8201.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8201.jpg",
        "title": "Media Day LHS Varisty POM 76"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8209.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8209.jpg",
        "title": "Media Day LHS Varisty POM 77"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8214.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8214.jpg",
        "title": "Media Day LHS Varisty POM 78"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8218.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8218.jpg",
        "title": "Media Day LHS Varisty POM 79"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8220.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8220.jpg",
        "title": "Media Day LHS Varisty POM 80"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8232.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8232.jpg",
        "title": "Media Day LHS Varisty POM 81"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8245.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8245.jpg",
        "title": "Media Day LHS Varisty POM 82"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8249.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8249.jpg",
        "title": "Media Day LHS Varisty POM 83"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8265.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8265.jpg",
        "title": "Media Day LHS Varisty POM 84"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8270.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8270.jpg",
        "title": "Media Day LHS Varisty POM 85"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8274.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8274.jpg",
        "title": "Media Day LHS Varisty POM 86"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8275.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8275.jpg",
        "title": "Media Day LHS Varisty POM 87"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8286.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8286.jpg",
        "title": "Media Day LHS Varisty POM 88"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8297.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8297.jpg",
        "title": "Media Day LHS Varisty POM 89"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8298.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8298.jpg",
        "title": "Media Day LHS Varisty POM 90"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8305.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8305.jpg",
        "title": "Media Day LHS Varisty POM 91"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8308.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8308.jpg",
        "title": "Media Day LHS Varisty POM 92"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8310.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8310.jpg",
        "title": "Media Day LHS Varisty POM 93"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8312.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8312.jpg",
        "title": "Media Day LHS Varisty POM 94"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8315.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8315.jpg",
        "title": "Media Day LHS Varisty POM 95"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8316.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8316.jpg",
        "title": "Media Day LHS Varisty POM 96"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8322.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8322.jpg",
        "title": "Media Day LHS Varisty POM 97"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8325.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8325.jpg",
        "title": "Media Day LHS Varisty POM 98"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8337.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8337.jpg",
        "title": "Media Day LHS Varisty POM 99"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8338.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8338.jpg",
        "title": "Media Day LHS Varisty POM 100"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8358.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8358.jpg",
        "title": "Media Day LHS Varisty POM 101"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8361.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8361.jpg",
        "title": "Media Day LHS Varisty POM 102"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8367.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8367.jpg",
        "title": "Media Day LHS Varisty POM 103"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8370.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8370.jpg",
        "title": "Media Day LHS Varisty POM 104"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8374.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8374.jpg",
        "title": "Media Day LHS Varisty POM 105"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8382.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8382.jpg",
        "title": "Media Day LHS Varisty POM 106"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8387.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8387.jpg",
        "title": "Media Day LHS Varisty POM 107"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8390.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8390.jpg",
        "title": "Media Day LHS Varisty POM 108"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8395.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8395.jpg",
        "title": "Media Day LHS Varisty POM 109"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8396.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8396.jpg",
        "title": "Media Day LHS Varisty POM 110"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8404.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8404.jpg",
        "title": "Media Day LHS Varisty POM 111"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8408.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8408.jpg",
        "title": "Media Day LHS Varisty POM 112"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8416.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8416.jpg",
        "title": "Media Day LHS Varisty POM 113"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8420.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8420.jpg",
        "title": "Media Day LHS Varisty POM 114"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8434.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8434.jpg",
        "title": "Media Day LHS Varisty POM 115"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8438.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8438.jpg",
        "title": "Media Day LHS Varisty POM 116"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8441.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8441.jpg",
        "title": "Media Day LHS Varisty POM 117"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8444.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8444.jpg",
        "title": "Media Day LHS Varisty POM 118"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8449.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8449.jpg",
        "title": "Media Day LHS Varisty POM 119"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8455 (1).jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8455 (1).jpg",
        "title": "Media Day LHS Varisty POM 120"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8455.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8455.jpg",
        "title": "Media Day LHS Varisty POM 121"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8463.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8463.jpg",
        "title": "Media Day LHS Varisty POM 122"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8470.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8470.jpg",
        "title": "Media Day LHS Varisty POM 123"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8476.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8476.jpg",
        "title": "Media Day LHS Varisty POM 124"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8478.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8478.jpg",
        "title": "Media Day LHS Varisty POM 125"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8485.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8485.jpg",
        "title": "Media Day LHS Varisty POM 126"
      },
      {
        "src": "/clients/media-day-lhs-varisty-pom/IMG_8490.jpg",
        "full": "/clients/media-day-lhs-varisty-pom/IMG_8490.jpg",
        "title": "Media Day LHS Varisty POM 127"
      }
    ]
  },
  {
    "id": "media-day-lhs-jv",
    "clientName": "Media Day LHS JV",
    "password": "jvteam26",
    "sessionType": "Other",
    "date": "2026-08-20",
    "coverImage": "/clients/media-day-lhs-jv/IMG_8500 (1).jpg",
    "images": [
      {
        "src": "/clients/media-day-lhs-jv/IMG_8500 (1).jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8500 (1).jpg",
        "title": "Media Day LHS JV 01"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8500.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8500.jpg",
        "title": "Media Day LHS JV 02"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8504.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8504.jpg",
        "title": "Media Day LHS JV 03"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8515.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8515.jpg",
        "title": "Media Day LHS JV 04"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8521.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8521.jpg",
        "title": "Media Day LHS JV 05"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8532.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8532.jpg",
        "title": "Media Day LHS JV 06"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8538.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8538.jpg",
        "title": "Media Day LHS JV 07"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8544 (1).jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8544 (1).jpg",
        "title": "Media Day LHS JV 08"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8544.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8544.jpg",
        "title": "Media Day LHS JV 09"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8548.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8548.jpg",
        "title": "Media Day LHS JV 10"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8551.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8551.jpg",
        "title": "Media Day LHS JV 11"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8557.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8557.jpg",
        "title": "Media Day LHS JV 12"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8561.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8561.jpg",
        "title": "Media Day LHS JV 13"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8567.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8567.jpg",
        "title": "Media Day LHS JV 14"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8574.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8574.jpg",
        "title": "Media Day LHS JV 15"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8586.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8586.jpg",
        "title": "Media Day LHS JV 16"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8590.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8590.jpg",
        "title": "Media Day LHS JV 17"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8597.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8597.jpg",
        "title": "Media Day LHS JV 18"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8605.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8605.jpg",
        "title": "Media Day LHS JV 19"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8609.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8609.jpg",
        "title": "Media Day LHS JV 20"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8614.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8614.jpg",
        "title": "Media Day LHS JV 21"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8619.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8619.jpg",
        "title": "Media Day LHS JV 22"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8623.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8623.jpg",
        "title": "Media Day LHS JV 23"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8633.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8633.jpg",
        "title": "Media Day LHS JV 24"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8637.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8637.jpg",
        "title": "Media Day LHS JV 25"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8646.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8646.jpg",
        "title": "Media Day LHS JV 26"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8648.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8648.jpg",
        "title": "Media Day LHS JV 27"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8650.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8650.jpg",
        "title": "Media Day LHS JV 28"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8659.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8659.jpg",
        "title": "Media Day LHS JV 29"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8668.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8668.jpg",
        "title": "Media Day LHS JV 30"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8677.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8677.jpg",
        "title": "Media Day LHS JV 31"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8678.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8678.jpg",
        "title": "Media Day LHS JV 32"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8681.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8681.jpg",
        "title": "Media Day LHS JV 33"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8684.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8684.jpg",
        "title": "Media Day LHS JV 34"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8691.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8691.jpg",
        "title": "Media Day LHS JV 35"
      },
      {
        "src": "/clients/media-day-lhs-jv/IMG_8693.jpg",
        "full": "/clients/media-day-lhs-jv/IMG_8693.jpg",
        "title": "Media Day LHS JV 36"
      }
    ]
  },
  {
    "id": "valentina-session-1",
    "clientName": "Valentina Session 1",
    "password": "tina26",
    "sessionType": "Senior Portraits",
    "date": "2026-08-22",
    "coverImage": "/clients/valentina-session-1/IMG_8703.jpg",
    "images": [
      {
        "src": "/clients/valentina-session-1/IMG_8703.jpg",
        "full": "/clients/valentina-session-1/IMG_8703.jpg",
        "title": "Valentina Session 1 01"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8719.jpg",
        "full": "/clients/valentina-session-1/IMG_8719.jpg",
        "title": "Valentina Session 1 02"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8726.jpg",
        "full": "/clients/valentina-session-1/IMG_8726.jpg",
        "title": "Valentina Session 1 03"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8739.jpg",
        "full": "/clients/valentina-session-1/IMG_8739.jpg",
        "title": "Valentina Session 1 04"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8757.jpg",
        "full": "/clients/valentina-session-1/IMG_8757.jpg",
        "title": "Valentina Session 1 05"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8758.jpg",
        "full": "/clients/valentina-session-1/IMG_8758.jpg",
        "title": "Valentina Session 1 06"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8769.jpg",
        "full": "/clients/valentina-session-1/IMG_8769.jpg",
        "title": "Valentina Session 1 07"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8772.jpg",
        "full": "/clients/valentina-session-1/IMG_8772.jpg",
        "title": "Valentina Session 1 08"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8776.jpg",
        "full": "/clients/valentina-session-1/IMG_8776.jpg",
        "title": "Valentina Session 1 09"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8787 (1).jpg",
        "full": "/clients/valentina-session-1/IMG_8787 (1).jpg",
        "title": "Valentina Session 1 10"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8787.jpg",
        "full": "/clients/valentina-session-1/IMG_8787.jpg",
        "title": "Valentina Session 1 11"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8790.jpg",
        "full": "/clients/valentina-session-1/IMG_8790.jpg",
        "title": "Valentina Session 1 12"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8795.jpg",
        "full": "/clients/valentina-session-1/IMG_8795.jpg",
        "title": "Valentina Session 1 13"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8808.jpg",
        "full": "/clients/valentina-session-1/IMG_8808.jpg",
        "title": "Valentina Session 1 14"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8813.jpg",
        "full": "/clients/valentina-session-1/IMG_8813.jpg",
        "title": "Valentina Session 1 15"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8822 (2).jpg",
        "full": "/clients/valentina-session-1/IMG_8822 (2).jpg",
        "title": "Valentina Session 1 16"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8822.jpg",
        "full": "/clients/valentina-session-1/IMG_8822.jpg",
        "title": "Valentina Session 1 17"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8838.jpg",
        "full": "/clients/valentina-session-1/IMG_8838.jpg",
        "title": "Valentina Session 1 18"
      },
      {
        "src": "/clients/valentina-session-1/IMG_8844.jpg",
        "full": "/clients/valentina-session-1/IMG_8844.jpg",
        "title": "Valentina Session 1 19"
      },
      {
        "src": "/clients/valentina-session-1/sneak1.jpg",
        "full": "/clients/valentina-session-1/sneak1.jpg",
        "title": "Valentina Session 1 20"
      },
      {
        "src": "/clients/valentina-session-1/sneak2.jpg",
        "full": "/clients/valentina-session-1/sneak2.jpg",
        "title": "Valentina Session 1 21"
      },
      {
        "src": "/clients/valentina-session-1/sneak3.jpg",
        "full": "/clients/valentina-session-1/sneak3.jpg",
        "title": "Valentina Session 1 22"
      },
      {
        "src": "/clients/valentina-session-1/sneak4.jpg",
        "full": "/clients/valentina-session-1/sneak4.jpg",
        "title": "Valentina Session 1 23"
      }
    ]
  },
  {
    "id": "jack-h",
    "clientName": "Jack H",
    "password": "jackham27",
    "sessionType": "Senior Portraits",
    "date": "2026-08-23",
    "coverImage": "/clients/jack-h/IMG_8560.jpg",
    "images": [
      {
        "src": "/clients/jack-h/IMG_8560.jpg",
        "full": "/clients/jack-h/IMG_8560.jpg",
        "title": "Jack H 01"
      },
      {
        "src": "/clients/jack-h/IMG_8565 (1).jpg",
        "full": "/clients/jack-h/IMG_8565 (1).jpg",
        "title": "Jack H 02"
      },
      {
        "src": "/clients/jack-h/IMG_8565.jpg",
        "full": "/clients/jack-h/IMG_8565.jpg",
        "title": "Jack H 03"
      },
      {
        "src": "/clients/jack-h/IMG_8566 (1).jpg",
        "full": "/clients/jack-h/IMG_8566 (1).jpg",
        "title": "Jack H 04"
      },
      {
        "src": "/clients/jack-h/IMG_8566.jpg",
        "full": "/clients/jack-h/IMG_8566.jpg",
        "title": "Jack H 05"
      },
      {
        "src": "/clients/jack-h/IMG_8576.jpg",
        "full": "/clients/jack-h/IMG_8576.jpg",
        "title": "Jack H 06"
      },
      {
        "src": "/clients/jack-h/IMG_8587.jpg",
        "full": "/clients/jack-h/IMG_8587.jpg",
        "title": "Jack H 07"
      },
      {
        "src": "/clients/jack-h/IMG_8593 (1).jpg",
        "full": "/clients/jack-h/IMG_8593 (1).jpg",
        "title": "Jack H 08"
      },
      {
        "src": "/clients/jack-h/IMG_8593.jpg",
        "full": "/clients/jack-h/IMG_8593.jpg",
        "title": "Jack H 09"
      },
      {
        "src": "/clients/jack-h/IMG_8595.jpg",
        "full": "/clients/jack-h/IMG_8595.jpg",
        "title": "Jack H 10"
      },
      {
        "src": "/clients/jack-h/IMG_8605.jpg",
        "full": "/clients/jack-h/IMG_8605.jpg",
        "title": "Jack H 11"
      },
      {
        "src": "/clients/jack-h/IMG_8609.jpg",
        "full": "/clients/jack-h/IMG_8609.jpg",
        "title": "Jack H 12"
      },
      {
        "src": "/clients/jack-h/IMG_8612.jpg",
        "full": "/clients/jack-h/IMG_8612.jpg",
        "title": "Jack H 13"
      },
      {
        "src": "/clients/jack-h/IMG_8626.jpg",
        "full": "/clients/jack-h/IMG_8626.jpg",
        "title": "Jack H 14"
      },
      {
        "src": "/clients/jack-h/IMG_8630.jpg",
        "full": "/clients/jack-h/IMG_8630.jpg",
        "title": "Jack H 15"
      },
      {
        "src": "/clients/jack-h/IMG_8632.jpg",
        "full": "/clients/jack-h/IMG_8632.jpg",
        "title": "Jack H 16"
      },
      {
        "src": "/clients/jack-h/IMG_8644.jpg",
        "full": "/clients/jack-h/IMG_8644.jpg",
        "title": "Jack H 17"
      },
      {
        "src": "/clients/jack-h/IMG_8657.jpg",
        "full": "/clients/jack-h/IMG_8657.jpg",
        "title": "Jack H 18"
      },
      {
        "src": "/clients/jack-h/IMG_8658.jpg",
        "full": "/clients/jack-h/IMG_8658.jpg",
        "title": "Jack H 19"
      },
      {
        "src": "/clients/jack-h/IMG_8668 (2).jpg",
        "full": "/clients/jack-h/IMG_8668 (2).jpg",
        "title": "Jack H 20"
      },
      {
        "src": "/clients/jack-h/IMG_8668.jpg",
        "full": "/clients/jack-h/IMG_8668.jpg",
        "title": "Jack H 21"
      },
      {
        "src": "/clients/jack-h/IMG_8676.jpg",
        "full": "/clients/jack-h/IMG_8676.jpg",
        "title": "Jack H 22"
      },
      {
        "src": "/clients/jack-h/IMG_8684.jpg",
        "full": "/clients/jack-h/IMG_8684.jpg",
        "title": "Jack H 23"
      },
      {
        "src": "/clients/jack-h/IMG_8902.jpg",
        "full": "/clients/jack-h/IMG_8902.jpg",
        "title": "Jack H 24"
      }
    ]
  }
];
