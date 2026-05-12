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
    { name: "The Bronze", price: "Micro Wedding Collections", desc: "More and more couples are skipping the big wedding and just getting married — courthouse steps, a backyard with their parents, even a cupcake shop with their best friend as the witness. These collections capture those intimate, no-fuss celebrations with the same quality and care as a full wedding — just scaled to fit the moment." },
    { name: "The Signing", price: "$150", desc: "Micro wedding. Quick, beautiful, done. Your marriage deserves at least this.\n20 minutes. The ceremony, the signing, the first kiss. One location. 15+ digital images." },
    { name: "The Moment", price: "$300", desc: "Micro wedding. The ceremony plus portraits \u2014 the sweet spot for most couples.\nEverything in The Signing plus couple\u2019s portraits and group photos with anyone present (up to 10 people). 30+ digital images." },
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

export const DEFAULT_CLIENT_GALLERIES = [];



































