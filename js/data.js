/* ==========================================================================
   LARA NIKOLAU — content & placeholder imagery data
   All images are royalty-free stock photography used ONLY as stand-ins
   for Lara's own work, matching the mood/tone of her portfolio, to be
   replaced with real photographs later.
   ========================================================================== */

function img(id, w) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 1600}&q=80`;
}

const CATEGORIES = [
  { slug: 'portraits', label: 'Portraits' },
  { slug: 'weddings', label: 'Weddings' },
  { slug: 'events', label: 'Events' },
  { slug: 'fashion', label: 'Fashion' },
  { slug: 'commercial', label: 'Commercial' },
  { slug: 'travel', label: 'Travel' },
  { slug: 'editorial', label: 'Editorial' },
];

/* Home page category showcase (curated subset) */
const HOME_CATEGORIES = [
  { slug: 'weddings', label: 'Weddings', image: img('1587614382346-4ec70e388b28', 1200) },
  { slug: 'portraits', label: 'Portraits', image: img('1519741497674-611481863552', 1200) },
  { slug: 'fashion', label: 'Fashion', image: img('1524504388940-b1c1722653e1', 900) },
  { slug: 'editorial', label: 'Editorial', image: img('1520250497591-112f2f40a3f4', 900) },
  { slug: 'travel', label: 'Travel', image: img('1465101162946-4377e57745c3', 900) },
];

/* Full art-directed portfolio gallery */
const PORTFOLIO = [
  // Portraits
  { category: 'portraits', title: 'Quiet Light', img: img('1519741497674-611481863552') },
  { category: 'portraits', title: 'Golden Hour', img: img('1554080353-a576cf803bda') },
  { category: 'portraits', title: 'Still', img: img('1544005313-94ddf0286df2') },
  { category: 'portraits', title: 'Unposed', img: img('1600180758890-6b94519a8ba6') },
  { category: 'portraits', title: 'In Passing', img: img('1517245386807-bb43f82c33c4') },
  { category: 'portraits', title: 'Soft Focus', img: img('1506929562872-bb421503ef21') },
  { category: 'portraits', title: 'Between Words', img: img('1522673607200-164d1b6ce486') },
  { category: 'portraits', title: 'Held', img: img('1508214751196-bcfd4ca60f91') },
  { category: 'portraits', title: 'Afternoon', img: img('1548142813-c348350df52b') },
  { category: 'portraits', title: 'Threshold', img: img('1533105079780-92b9be482077') },
  { category: 'portraits', title: 'Nearer', img: img('1516727003284-a96541e51e9c') },

  // Weddings
  { category: 'weddings', title: 'The Vow', img: img('1517841905240-472988babdf9') },
  { category: 'weddings', title: 'First Dance', img: img('1529626455594-4ff0802cfb7e') },
  { category: 'weddings', title: 'After the Ceremony', img: img('1518895949257-7621c3c786d7') },
  { category: 'weddings', title: 'Two Rings', img: img('1552374196-c4e7ffc6e126') },
  { category: 'weddings', title: 'Coastal Union', img: img('1600585154340-be6161a56a0c') },
  { category: 'weddings', title: 'Ever After', img: img('1587614382346-4ec70e388b28') },

  // Events
  { category: 'events', title: 'The Gathering', img: img('1509783236416-c9ad59bae472') },
  { category: 'events', title: 'Champagne Hour', img: img('1511795409834-ef04bbd61622') },
  { category: 'events', title: 'Celebration', img: img('1543269865-cbf427effbad') },

  // Fashion
  { category: 'fashion', title: 'Ombres', img: img('1487412720507-e7ab37603c6f') },
  { category: 'fashion', title: 'Structure', img: img('1524504388940-b1c1722653e1') },
  { category: 'fashion', title: 'Muse', img: img('1496345875659-11f7dd282d1d') },
  { category: 'fashion', title: 'Silhouette', img: img('1483985988355-763728e1935b') },
  { category: 'fashion', title: 'Line & Form', img: img('1490750967868-88aa4486c946') },
  { category: 'fashion', title: 'Atelier', img: img('1519834785169-98be25ec3f84') },
  { category: 'fashion', title: 'Poise', img: img('1522075469751-3a6694fb2f61') },
  { category: 'fashion', title: 'Draped', img: img('1517649763962-0c623066013b') },

  // Commercial
  { category: 'commercial', title: 'The Brand Story', img: img('1556905055-8f358a7a47b2') },
  { category: 'commercial', title: 'Studio Work', img: img('1573497019940-1c28c88b4f3e') },
  { category: 'commercial', title: 'Interiors', img: img('1600607687939-ce8a6c25118c') },

  // Travel
  { category: 'travel', title: 'Northern Light', img: img('1465101162946-4377e57745c3') },
  { category: 'travel', title: 'Wandering', img: img('1493246507139-91e8fad9978e') },
  { category: 'travel', title: 'Into the Pines', img: img('1441974231531-c6227db76b6e') },
  { category: 'travel', title: 'Altitude', img: img('1500530855697-b586d89ba3ee') },
  { category: 'travel', title: 'Desert Road', img: img('1524250502761-1ac6f2e30d43') },
  { category: 'travel', title: 'Far Shore', img: img('1469334031218-e382a71b716b') },
  { category: 'travel', title: 'Elsewhere', img: img('1475503572774-15a45e5d60b9') },
  { category: 'travel', title: 'Open Country', img: img('1441984904996-e0b6ba687e04') },
  { category: 'travel', title: 'Low Tide', img: img('1445205170230-053b83016050') },
  { category: 'travel', title: 'Terrain', img: img('1495385794356-15371f348c31') },
  { category: 'travel', title: 'Passing Through', img: img('1507525428034-b723cf961d3e') },
  { category: 'travel', title: 'Horizon Line', img: img('1470071459604-3b5ec3a7fe05') },
  { category: 'travel', title: 'Wide Open', img: img('1502085671122-2d218cd434e6') },

  // Editorial
  { category: 'editorial', title: 'Chiaroscuro', img: img('1520250497591-112f2f40a3f4') },
  { category: 'editorial', title: 'Reverie', img: img('1494790108377-be9c29b29330') },
];

/* Featured projects */
const PROJECTS = [
  {
    slug: 'ombres-et-lumiere',
    title: 'Ombres et Lumière',
    category: 'Fashion Editorial',
    location: 'Paris, France',
    date: 'March 2025',
    cover: img('1524504388940-b1c1722653e1', 2000),
    description: 'A study of contrast and restraint — tailored silhouettes photographed in the pale winter light of the 8th arrondissement.',
    body: 'An exploration of shadow, structure, and stillness. Shot over two days in a quiet Parisian studio and along the Seine at first light, this series leans into negative space and tonal restraint — letting the garments, and the women wearing them, hold the frame.',
    gallery: [
      img('1524504388940-b1c1722653e1', 1600),
      img('1496345875659-11f7dd282d1d', 1600),
      img('1483985988355-763728e1935b', 1600),
      img('1519834785169-98be25ec3f84', 1600),
      img('1522075469751-3a6694fb2f61', 1600),
    ],
  },
  {
    slug: 'bound-by-the-sea',
    title: 'Bound by the Sea',
    category: 'Destination Wedding',
    location: 'Amalfi Coast, Italy',
    date: 'September 2025',
    cover: img('1600585154340-be6161a56a0c', 2000),
    description: 'A three-day celebration along the cliffs of Positano — sun-bleached stone, salt air, and an unhurried kind of romance.',
    body: 'This wedding unfolded slowly, the way the best ones do — a quiet morning of preparation, vows exchanged as the light turned gold, and a celebration that spilled long into the night. The brief was simple: stay honest, stay close, let the coastline do the rest.',
    gallery: [
      img('1600585154340-be6161a56a0c', 1600),
      img('1517841905240-472988babdf9', 1600),
      img('1529626455594-4ff0802cfb7e', 1600),
      img('1552374196-c4e7ffc6e126', 1600),
      img('1587614382346-4ec70e388b28', 1600),
    ],
  },
  {
    slug: 'wanderer',
    title: 'Wanderer',
    category: 'Travel Editorial',
    location: 'Vík, Iceland',
    date: 'November 2024',
    cover: img('1465101162946-4377e57745c3', 2000),
    description: 'A personal series shot across five days on Iceland\u2019s south coast, chasing weather and low winter light.',
    body: 'Sometimes a project begins with no brief at all — just a camera, a rented car, and the intention to notice things. Wanderer is a personal collection made in the black sand and glacial light of southern Iceland, about scale, solitude, and the discipline of waiting for the right moment.',
    gallery: [
      img('1465101162946-4377e57745c3', 1600),
      img('1500530855697-b586d89ba3ee', 1600),
      img('1441984904996-e0b6ba687e04', 1600),
      img('1495385794356-15371f348c31', 1600),
      img('1502085671122-2d218cd434e6', 1600),
    ],
  },
];

/* Testimonials */
const TESTIMONIALS = [
  {
    quote: 'Lara has a rare gift for making you forget the camera is there. The images from our wedding feel less like photographs and more like memories that were always ours.',
    name: 'Isabelle & Marco',
    role: 'Amalfi Coast Wedding',
  },
  {
    quote: 'Working with Lara on our campaign was effortless. She arrived with a clear point of view and delivered images with more restraint and elegance than we imagined.',
    name: 'Noor Al-Sayed',
    role: 'Creative Director, Maison Adele',
  },
  {
    quote: 'Every portrait she\u2019s taken of me over the years feels like the truest version of who I was at that moment. That is a rare kind of talent.',
    name: 'Claire Whitfield',
    role: 'Portrait Client',
  },
  {
    quote: 'Quiet, precise, and completely unobtrusive on set. The final gallery needed almost no direction from us \u2014 she simply understood the brand.',
    name: 'Thomas Berger',
    role: 'Founder, Berger & Hale',
  },
];

/* Services */
const SERVICES = [
  {
    title: 'Portrait Photography',
    slug: 'portrait',
    image: img('1517245386807-bb43f82c33c4', 1400),
    description: 'Intimate, editorial portrait sessions designed to capture presence rather than performance — in the studio, at home, or somewhere with better light.',
    includes: ['60–90 minute private session', 'Wardrobe & location guidance', 'Professionally retouched final gallery', 'Online private viewing & print options'],
    price: 'From €650',
  },
  {
    title: 'Wedding Photography',
    slug: 'wedding',
    image: img('1518895949257-7621c3c786d7', 1400),
    description: 'Documentary-led wedding coverage with an editorial eye — built around presence, patience, and the unrepeatable details of your day.',
    includes: ['Full or partial day coverage', 'Second photographer available', 'Engagement session', 'Complete edited gallery within 6 weeks'],
    price: 'From €3,200',
  },
  {
    title: 'Event Photography',
    slug: 'event',
    image: img('1543269865-cbf427effbad', 1400),
    description: 'Considered, unobtrusive coverage of gatherings, launches, and celebrations — for clients who want their event remembered, not staged.',
    includes: ['On-site coverage, 3+ hours', 'Candid & environmental portraits', 'Same-week preview selects', 'Full retouched gallery'],
    price: 'From €900',
  },
  {
    title: 'Brand & Commercial Photography',
    slug: 'commercial',
    image: img('1556905055-8f358a7a47b2', 1400),
    description: 'Considered visual identity work for studios, hospitality, and independent brands who want photography that feels less like stock and more like a point of view.',
    includes: ['Creative direction & shot list', 'Half or full-day studio/location shoot', 'Usage licensing for web & print', 'Curated final asset library'],
    price: 'Custom quote',
  },
  {
    title: 'Fashion Photography',
    slug: 'fashion',
    image: img('1524504388940-b1c1722653e1', 1400),
    description: 'Editorial fashion imagery for designers, stylists, and publications — built around mood, movement, and considered art direction.',
    includes: ['Full pre-production & moodboard', 'Studio or location shoot day', 'Collaboration with stylists & MUAs', 'Retouched editorial-ready selects'],
    price: 'Custom quote',
  },
  {
    title: 'Corporate Photography',
    slug: 'corporate',
    image: img('1600607687939-ce8a6c25118c', 1400),
    description: 'Executive portraits and workplace stories for teams who want to look like themselves — polished, but never stiff.',
    includes: ['On-location or studio sessions', 'Individual & team portraits', 'Fast-turnaround headshot sets', 'Consistent visual style across teams'],
    price: 'From €1,100',
  },
];
