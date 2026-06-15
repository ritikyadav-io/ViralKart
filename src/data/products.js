// ViralKart Premium DTC Ecommerce Products Database

export const categories = [
  { id: 'viral', name: 'Viral', icon: '🔥', slug: 'viral', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80' },
  { id: 'organization', name: 'Home', icon: '🗄️', slug: 'home-organization', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&auto=format&fit=crop&q=80' },
  { id: 'bathroom', name: 'Bathroom', icon: '🚿', slug: 'bathroom-essentials', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=80' },
  { id: 'cleaning', name: 'Cleaning', icon: '🧹', slug: 'cleaning-solutions', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=80' },
  { id: 'utility', name: 'Repair', icon: '🔧', slug: 'repair-utility', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&auto=format&fit=crop&q=80' },
  { id: 'best-sellers', name: 'Bestseller', icon: '⭐', slug: 'best-sellers', image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=500&auto=format&fit=crop&q=80' }
];

export const trendingProducts = [
  { id: 't1', name: 'Spin Scrubber', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&auto=format&fit=crop&q=80', price: 1299, comparePrice: 2499, slug: 'spin-scrubber', rating: 4.8 },
  { id: 't2', name: 'Silicone Drain Strainer', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=300&auto=format&fit=crop&q=80', price: 299, comparePrice: 599, slug: 'silicone-drain-strainer', rating: 4.6 },
  { id: 't3', name: 'Soap Dispenser Holder', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&auto=format&fit=crop&q=80', price: 349, comparePrice: 699, slug: 'soap-dispenser-holder', rating: 4.7 },
  { id: 't4', name: 'Over The Sink Rack', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&auto=format&fit=crop&q=80', price: 1499, comparePrice: 2999, slug: 'over-the-sink-rack', rating: 4.9 },
  { id: 't5', name: 'Window Groove Cleaner', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&auto=format&fit=crop&q=80', price: 199, comparePrice: 399, slug: 'window-groove-cleaner', rating: 4.5 },
  { id: 't6', name: 'Portable Lint Remover', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=300&auto=format&fit=crop&q=80', price: 449, comparePrice: 799, slug: 'portable-lint-remover', rating: 4.8 }
];

export const homeFaqs = [
  { question: "Do you offer Cash on Delivery?", answer: "Yes, Cash on Delivery (COD) is available across India for all orders. You can pay in cash when the delivery executive arrives." },
  { question: "How long does delivery take?", answer: "We ship from our regional warehouses. Delivery usually takes 2-5 business days depending on your location. Metro cities typically receive orders in 2-3 days." },
  { question: "What is your return policy?", answer: "We offer a hassle-free 7-day return policy. If you receive a damaged, defective, or incorrect product, contact us on viralkartofficial@gmail.com to initiate a return or replacement." },
  { question: "How do I track my order?", answer: "Once your order is shipped, we will send you a tracking link via SMS, WhatsApp, and email. You can check the real-time shipping status there." },
  { question: "How do I contact support?", answer: "Our customer support team is available 10 AM - 7 PM. You can email us at viralkartofficial@gmail.com or message us on WhatsApp at +91-8824318839." }
];

export const products = [
  {
    id: 'p1',
    slug: 'uv-toothbrush-holder-sterilizer',
    title: 'UV Toothbrush Holder & Sterilizer',
    category: 'bathroom-essentials',
    price: 799,
    comparePrice: 1499,
    rating: 4.8,
    reviewsCount: 325,
    badge: 'BEST SELLER',
    soldCount: '1,000+ Sold',
    stockCount: 5,
    tagline: 'Kills 99.9% bacteria & keeps your family\'s oral hygiene safe automatically.',
    images: [
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=80', // main
      'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&auto=format&fit=crop&q=80', // details
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80'  // gallery 3
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Unhygienic toothbrushes are breeding grounds for millions of harmful bacteria.',
      'Airborne toilet germs settle on open toothbrushes in the bathroom.',
      'Wet brushes invite mold and mildew growth that you brush with daily.',
      'Messy countertops with toothbrushes scattered everywhere look cluttered.'
    ],
    solution: {
      headline: 'Introducing The ViralKart UV Toothbrush Sterilizer',
      description: 'The ultimate smart bathroom accessory. Our wall-mounted sterilizer uses medical-grade UV-C light to destroy 99.9% of bacteria and germs on your toothbrushes in just 4 minutes. It also features a hands-free automatic toothpaste dispenser and holds up to 4 toothbrushes, keeping your family safe and bathroom organized.',
      chips: ['UV-C Sterilization', 'Auto Toothpaste Dispenser', 'Holds 4 Brushes', 'Easy USB Charging']
    },
    benefits: [
      { title: '99.9% Germ Kill', desc: 'Medical-grade UV-C light sterilizes toothbrushes, destroying bacteria DNA in minutes.', icon: '⚡' },
      { title: 'Auto Toothpaste Dispenser', desc: 'Vacuum squeeze pump delivers the perfect amount of toothpaste without waste or mess.', icon: '🧴' },
      { title: 'Wall Mount Install', desc: 'No drilling required. Heavy-duty adhesive mount grips tiles, mirrors, and walls instantly.', icon: '🧱' },
      { title: 'Fits All Brushes', desc: 'Designed to fit electric toothbrush heads, manual adult brushes, and kids\' brushes.', icon: '🪥' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Messy & Unhygienic',
      afterImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Sterilized & Organized',
      resultText: 'Transforms messy bathroom countertops into a neat, sterile, and space-saving hygiene station.'
    },
    howItWorks: [
      { step: '1', title: 'Mount on Wall', desc: 'Clean the wall, peel the adhesive backing, stick to the surface, and wait 12 hours.' },
      { step: '2', title: 'Place Brushes & Dispenser', desc: 'Hang up to 4 toothbrushes in the slots and insert your favorite toothpaste tube at the top.' },
      { step: '3', title: 'Auto Sterilize', desc: 'Close the cover. The smart sensor activates the UV-C sterilizer automatically for 4 minutes.' }
    ],
    features: [
      { label: 'Waterproof Body', icon: '💧' },
      { label: 'USB Rechargeable', icon: '🔋' },
      { label: 'Auto-Off Timer', icon: '⏱️' },
      { label: 'Detachable to Clean', icon: '🧼' },
      { label: 'Smart Motion Sensor', icon: '👁️' },
      { label: 'Long Battery Life', icon: '⚡' }
    ],
    reviews: [
      { name: 'Rohit S.', rating: 5, date: 'June 10, 2026', text: 'Super useful product! Easy to install and works perfectly. The toothpaste dispenser squeezes out exactly what is needed.', verified: true, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
      { name: 'Neha P.', rating: 5, date: 'June 08, 2026', text: 'Very good quality. My bathroom is now organized. The adhesive tape is very strong, it hasn\'t budged at all.', verified: true, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
      { name: 'Ankit M.', rating: 5, date: 'June 02, 2026', text: 'Worth every penny. UV sterilization is a must-have in bathrooms! Fast delivery by ViralKart too.', verified: true, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
      { name: 'Priya K.', rating: 4.5, date: 'May 28, 2026', text: 'Sturdy and space-saving. Highly recommended. Squeezing toothpaste took 2-3 tries first time, but working great since.', verified: true, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "How does it stick to the wall?", answer: "It comes with a strong double-sided self-adhesive sticker pad. Clean the wall, stick the pad, let it cure for 12 hours, then mount the holder." },
      { question: "Is it safe around water?", answer: "Yes, it has an IPX4 waterproof rating, making it splash-proof. However, do not submerge it under running water." },
      { question: "How is it powered?", answer: "It features a built-in rechargeable battery. Simply charge it using the included USB cable. A single full charge lasts up to 30 days." },
      { question: "Does it fit all toothpaste tubes?", answer: "Yes, the top elastic silicone socket is designed to fit standard screw-thread or squeeze toothpaste tubes." }
    ],
    shipping: "Dispatched within 24 hours. Delivered in 2-5 business days across India. Tracking link sent via SMS.",
    returns: "7-day easy return and exchange policy. Return shipping is free for damaged or defective items.",
    frequentlyBoughtTogether: {
      products: ['p1', 'p3', 'p4'],
      totalPrice: 1897,
      savedPrice: 1500
    }
  },
  {
    id: 'p2',
    slug: 'multi-purpose-cleaning-brush',
    title: 'Multi-Purpose Cleaning Brush',
    category: 'cleaning-solutions',
    price: 599,
    comparePrice: 999,
    rating: 4.7,
    reviewsCount: 283,
    badge: 'BEST SELLER',
    soldCount: '800+ Sold',
    stockCount: 8,
    tagline: 'Deep clean tough spots, window grooves, tiles, and corners without breaking a sweat.',
    images: [
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Standard scrubbers cannot reach narrow corners, tile joints, and window gaps.',
      'Dirt and grime accumulate in cracks, breeding bacteria and looking ugly.',
      'Scrubbing with fingers hurts and causes fatigue within minutes.',
      'Cheap brushes break easily and lose their bristles quickly.'
    ],
    solution: {
      headline: 'The Ultimate Crevice & Corner Scrubber',
      description: 'ViralKart Crevice cleaning brush features ultra-stiff v-shaped bristles that easily slice through dirt in bathroom tiles, window tracks, sliding door rails, and stovetop edges. Ergonomic comfort handle ensures you get maximum cleaning pressure without strain.',
      chips: ['Ultra-Stiff Bristles', 'V-Shape Action', 'Comfort Grip Handle', 'Hangable Design']
    },
    benefits: [
      { title: 'Deeps Clean Cracks', desc: 'V-shaped bristles penetrate deep into grout lines, corners, and tight window tracks.', icon: '🧹' },
      { title: 'Tough & Durable', desc: 'Heavy-duty bristles resist bending and retain shape even with hard scrubbing.', icon: '💪' },
      { title: 'Ergonomic Handle', desc: 'Angled handle protects fingers from rubbing against surfaces during deep cleaning.', icon: '✊' },
      { title: 'Multi-Surface Safe', desc: 'Cleans tiles, window frames, sinks, and metal edges without scratching.', icon: '🏠' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Grimy Tile Grout',
      afterImg: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Sparkling Grout Lines',
      resultText: 'Slices through years of dirt, mold, and scale built up in hard-to-clean corner gaps.'
    },
    howItWorks: [
      { step: '1', title: 'Apply Cleaner', desc: 'Spray water or your favorite tile cleaner onto the dirty grout line or window track.' },
      { step: '2', title: 'Scrub in Line', desc: 'Press the V-shaped bristles into the groove and slide back and forth with moderate force.' },
      { step: '3', title: 'Wipe and Clean', desc: 'Wipe away the loosened dirt with a cloth or flush with water for a brand new look.' }
    ],
    features: [
      { label: 'V-Shaped Fit', icon: '📐' },
      { label: 'Comfort PP Handle', icon: '🖐️' },
      { label: 'Hanging Hole', icon: '🕳️' },
      { label: 'Long Brush Head', icon: '📏' },
      { label: 'Rinse-to-Clean', icon: '💦' },
      { label: 'Lightweight', icon: '⚖️' }
    ],
    reviews: [
      { name: 'Karan J.', rating: 5, date: 'June 11, 2026', text: 'This brush makes window tracks and door grooves so easy to clean! Best cleaning tool I bought.', verified: true, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80' },
      { name: 'Sonal G.', rating: 4.5, date: 'June 05, 2026', text: 'Stiff bristles, works well on bathroom tile joints. The handle angle is perfect. Wish the handle was a bit longer but overall satisfied.', verified: true, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "Will the bristles flatten after use?", answer: "No, the bristles are made of high-density nylon that keeps its stiffness and shape even after intense scrubbing." },
      { question: "Can I use it in dry areas?", answer: "Yes, it is great for brushing away dry dust from window grooves, sliding door tracks, and keyboard crevices." }
    ],
    shipping: "Dispatched within 24 hours. Delivered in 2-5 business days.",
    returns: "7-day return policy for unused products.",
    frequentlyBoughtTogether: {
      products: ['p2', 'p3'],
      totalPrice: 1298,
      savedPrice: 700
    }
  },
  {
    id: 'p3',
    slug: 'kitchen-sink-organizer-rack',
    title: 'Kitchen Sink Organizer Rack',
    category: 'home-organization',
    price: 699,
    comparePrice: 1199,
    rating: 4.8,
    reviewsCount: 192,
    badge: 'BEST SELLER',
    soldCount: '650+ Sold',
    stockCount: 4,
    tagline: 'Keep your sponges dry, soap handy, and kitchen counters water-free.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Soggy sponges left in puddles breed bacteria and start smelling awful.',
      'Wet kitchen countertops develop water stains, mold, and damage cabinets.',
      'Cluttered countertops with dish soap and scrubbers looking chaotic.',
      'No place to hang dish towels to dry quickly.'
    ],
    solution: {
      headline: 'The Smart Dry-Sink Organizer',
      description: 'The ViralKart Kitchen Sink Organizer features a dedicated sponge tray with a hollow bottom for rapid draining, a towel hanger rail, and a removable drip tray below. Keep all your wash items organized, dry, and sanitary.',
      chips: ['Auto-Draining Tray', 'Towel Hanger Rail', 'Rust-Proof Steel', 'Removable Drip Tray']
    },
    benefits: [
      { title: 'Fast Drainage', desc: 'Slanted base and grid slits funnel water directly into the sink, keeping tools dry.', icon: '🚰' },
      { title: 'Towel Drying Bar', desc: 'Integrated rack to hang wet dish cloths so they air dry quickly without odor.', icon: '🧣' },
      { title: 'Space Saving', desc: 'Slim layout sits neatly beside the faucet without blocking access to the sink basin.', icon: '📐' },
      { title: 'Premium SUS304 Steel', desc: 'Constructed from premium rust-proof steel with a durable matte-black coating.', icon: '⛓️' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Messy Water Puddles',
      afterImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Organized & Clean',
      resultText: 'Collects all excess soap water, keeping your kitchen sink counter clean and odor-free.'
    },
    howItWorks: [
      { step: '1', title: 'Place by Sink', desc: 'Find a flat area right next to your sink tap or faucet with the draining lip pointing in.' },
      { step: '2', title: 'Organize Items', desc: 'Place dish soap bottles, steel wool, and scouring sponges in their slots.' },
      { step: '3', title: 'Hang Hand Cloth', desc: 'Drape your kitchen cloth over the top bar. Excess water drips directly into the tray.' }
    ],
    features: [
      { label: 'Rustproof Frame', icon: '🛡️' },
      { label: 'Removable Tray', icon: '📥' },
      { label: 'Scratch-Proof Feet', icon: '👣' },
      { label: 'Dedicated Towel Rail', icon: '🧣' },
      { label: 'Ventilated Gaps', icon: '🌬️' },
      { label: 'Sturdy Steel Build', icon: '🧱' }
    ],
    reviews: [
      { name: 'Kirti L.', rating: 5, date: 'June 09, 2026', text: 'Perfect size for my small sink counter. The steel looks premium and is definitely rust-proof. The drip tray is easy to slide out and clean.', verified: true, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80' },
      { name: 'Sameer V.', rating: 4.8, date: 'June 01, 2026', text: 'No more stinky sponges. Highly recommended for keeping the sink area clean. Very solid build quality.', verified: true, photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "Is the steel rust-proof?", answer: "Yes, it is made of premium SUS304 stainless steel with double powder coating to prevent rusting in wet kitchen environments." },
      { question: "What are the dimensions?", answer: "It measures approximately 20cm x 10cm x 12cm. It is designed to sit compactly on the sink ledger." }
    ],
    shipping: "Dispatched within 24 hours. Free shipping for this item.",
    returns: "7-day easy return and refund policy.",
    frequentlyBoughtTogether: {
      products: ['p3', 'p1', 'p4'],
      totalPrice: 1897,
      savedPrice: 1500
    }
  },
  {
    id: 'p4',
    slug: 'wall-mounted-toothpaste-dispenser',
    title: 'Wall Mounted Toothpaste Dispenser',
    category: 'bathroom-essentials',
    price: 399,
    comparePrice: 699,
    rating: 4.7,
    reviewsCount: 183,
    badge: 'BEST SELLER',
    soldCount: '1,200+ Sold',
    stockCount: 12,
    tagline: 'Zero toothpaste waste, zero mess. Perfect hands-free squeeze every time.',
    images: [
      'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Kids squeeze toothpaste everywhere, creating sticky, messy counters.',
      'Struggling to squeeze out the last bit of paste from the tube.',
      'Germs on toothpaste tube caps from multiple fingers touching it.',
      'Unhygienic toothpaste caps left open drying out the paste.'
    ],
    solution: {
      headline: 'The Ultimate Hands-Free Toothpaste Squeezer',
      description: 'Say goodbye to messy toothpaste caps and wasted product. ViralKart Hands-Free Toothpaste Dispenser uses a vacuum squeeze system that dispenses the perfect amount of toothpaste with a single brush press. No electricity required, easily wall-mounted with high-strength adhesive.',
      chips: ['Vacuum Squeeze Pump', 'One-Touch Dispense', 'No-Drill Mount', 'Zero Waste design']
    },
    benefits: [
      { title: 'One-Touch Squeeze', desc: 'Push your brush against the trigger lever to automatically dispense toothpaste.', icon: '🖐️' },
      { title: 'Zero Waste', desc: 'Vacuum pump technology extracts every drop of toothpaste from the tube.', icon: '💰' },
      { title: 'Drill-Free Install', desc: 'Sticky adhesive patch holds the dispenser secure on tiles, mirrors, and paint.', icon: '🧱' },
      { title: 'Safe & Hygienic', desc: 'Keeps brushes and paste sanitary by preventing direct tube contact.', icon: '🛡️' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Messy Squeezed Tubes',
      afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Sleek & Automated',
      resultText: 'Keeps sinks clean by organizing and dispensing toothpaste automatically without mess.'
    },
    howItWorks: [
      { step: '1', title: 'Stick to Wall', desc: 'Clean the surface, stick the adhesive panel, and hang the dispenser.' },
      { step: '2', title: 'Insert Tube', desc: 'Remove the toothpaste cap, insert the nozzle into the silicone ring, and push down.' },
      { step: '3', title: 'Press to Dispense', desc: 'Insert toothbrush and press the lever. Squeeze a few times on first use to exhaust air.' }
    ],
    features: [
      { label: 'Vacuum Pump', icon: '🌀' },
      { label: 'Detachable Body', icon: '🧼' },
      { label: 'Sturdy ABS Plastic', icon: '🛡️' },
      { label: 'No Batteries Needed', icon: '🔌' },
      { label: 'Waterproof Seal', icon: '💦' },
      { label: 'Fits Most Tubes', icon: '🧴' }
    ],
    reviews: [
      { name: 'Amit R.', rating: 5, date: 'June 03, 2026', text: 'My kids love using this! It made brushing fun for them and stopped them from spilling paste on the sink.', verified: true, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "How do you clean it?", answer: "The entire body is easily detachable. Remove it, rinse it under warm water to clear dried paste, and snap it back together." }
    ],
    shipping: "Dispatched within 24 hours. Delivered in 2-5 days.",
    returns: "7-day easy returns policy.",
    frequentlyBoughtTogether: {
      products: ['p4', 'p1'],
      totalPrice: 1198,
      savedPrice: 700
    }
  },
  {
    id: 'p5',
    slug: 'foldable-clothes-drying-rack',
    title: 'Foldable Clothes Drying Rack',
    category: 'home-organization',
    price: 999,
    comparePrice: 1699,
    rating: 4.6,
    reviewsCount: 156,
    badge: 'BEST SELLER',
    soldCount: '450+ Sold',
    stockCount: 3,
    tagline: 'High capacity drying in a compact, foldable design. Perfect for apartments.',
    images: [
      'https://images.unsplash.com/photo-1582730149693-81b27d9674fe?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Bulky dryers or strings block balconies and rooms, spoiling home aesthetics.',
      'Wet clothes hung on doors and chairs create high moisture and musty odors.',
      'Standard stands rust easily and stain expensive white clothes.',
      'Flimsy stands tip over easily when loaded with heavy wet towels.'
    ],
    solution: {
      headline: 'The Ultimate Space-Saving Clothes Dryer',
      description: 'The ViralKart Foldable Clothes Drying Rack is engineered with heavy-duty rust-proof coated steel. Featuring multiple drying levels, flat mesh sections for delicates, and shoe drying hooks, it holds up to 2 full loads of laundry and folds down to just 3 inches wide for easy storage.',
      chips: ['Heavy-Duty Coated Steel', '3-Tier Hanging Capacity', 'Folds Flat to 3"', 'Windproof Hook Locks']
    },
    benefits: [
      { title: 'High Hanging Space', desc: 'Contains 15+ drying rods, flat mesh drying layer, and special shoe hanging slots.', icon: '👕' },
      { title: 'Foldable Flat Storage', desc: 'Folds flat in seconds. Slide it under the bed or behind the washing machine.', icon: '📐' },
      { title: 'Anti-Rust Coating', desc: 'Thick treated carbon-steel rods prevent rust stains on your damp garments.', icon: '🛡️' },
      { title: 'Sturdy & Windproof', desc: 'Stable triangular support structure stays upright even under heavy, uneven weight loads.', icon: '🌬️' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1582730149693-81b27d9674fe?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Clothes Draped Everywhere',
      afterImg: 'https://images.unsplash.com/photo-1582730149693-81b27d9674fe?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Neat & Space-Saving',
      resultText: 'Dries a load of laundry in a single compact area, preserving your home space.'
    },
    howItWorks: [
      { step: '1', title: 'Unfold Stand', desc: 'Release the side locks and spread the frame out until the support pins lock in place.' },
      { step: '2', title: 'Load Laundry', desc: 'Hang shirts, towels, and pants on the bars. Place socks and underwear on the clip tier.' },
      { step: '3', title: 'Fold & Store', desc: 'Once clothes are dry, unlock the side supports, fold it flat, and tuck it away.' }
    ],
    features: [
      { label: 'Rustproof Steel', icon: '🧱' },
      { label: 'Fold-Flat Design', icon: '📐' },
      { label: '20kg Weight Limit', icon: '⚖️' },
      { label: 'Shoe Drying Clips', icon: '👟' },
      { label: 'Non-Slip Rubber feet', icon: '👣' },
      { label: 'Sock Pegs Included', icon: '🧦' }
    ],
    reviews: [
      { name: 'Rita D.', rating: 5, date: 'June 07, 2026', text: 'Very happy with the build. It easily holds heavy wet bedsheets and jeans without bending. Folds away neatly.', verified: true, photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "Is it suitable for outdoor use?", answer: "Yes, it is coated to withstand outdoor sun and wind, but it is recommended to fold and keep inside during rain to maximize its lifetime." }
    ],
    shipping: "Dispatched within 24 hours. Heavy item handling applies (delivered in 3-5 days).",
    returns: "7-day return policy for manufacturing defects.",
    frequentlyBoughtTogether: {
      products: ['p5', 'p6'],
      totalPrice: 1498,
      savedPrice: 1000
    }
  },
  {
    id: 'p6',
    slug: 'pet-hair-remover-brush',
    title: 'Pet Hair Remover Brush',
    category: 'cleaning-solutions',
    price: 499,
    comparePrice: 899,
    rating: 4.8,
    reviewsCount: 142,
    badge: 'BEST SELLER',
    soldCount: '700+ Sold',
    stockCount: 6,
    tagline: 'Remove stubborn pet fur from couches, carpets, and clothes in a single swipe.',
    images: [
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    whyNeed: [
      'Sticky pet hair gets embedded into fabric, making regular vacuuming useless.',
      'Disposable sticky tape rollers run out fast and cost a fortune over time.',
      'Pet dander and fur trigger allergies and look dirty on couches and blankets.',
      'Fur transfer to black clothes makes you look messy when leaving home.'
    ],
    solution: {
      headline: 'The Ultimate Reusable Pet Hair Remover',
      description: 'Ditch the sticky tape. ViralKart Pet Hair Remover Brush uses micro-static charge technology. Simply roll it back and forth on carpets, couches, car seats, or duvet covers, and watch the hair get trapped in the waste chamber. Press the button to empty the chamber instantly.',
      chips: ['Reusable Micro-Fiber', 'No Tape / Refills', 'Self-Cleaning Chamber', 'One-Click Disposal']
    },
    benefits: [
      { title: 'Dynamic Hair Pickup', desc: 'Special micro-fiber roller sweeps up dog, cat, and lint fur instantly.', icon: '🐕' },
      { title: 'Zero Sticky Refills', desc: '100% reusable. No adhesive sheets or batteries to buy ever again.', icon: '💰' },
      { title: 'Easy Push Clean', desc: 'Moving the roller back and forth automatically collects fur in the container.', icon: '🧹' },
      { title: 'One-Click Empty', desc: 'Press the release button to open the chamber and drop fur in the bin.', icon: '🗑️' }
    ],
    beforeAfter: {
      beforeImg: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&auto=format&fit=crop&q=80',
      beforeLabel: 'Fur-Covered Couch',
      afterImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80',
      afterLabel: 'Clean Couch Fabrics',
      resultText: 'Extracts deep fur strands that lint rollers and vacuums leave behind.'
    },
    howItWorks: [
      { step: '1', title: 'Roll Back & Forth', desc: 'Roll the brush rapidly back and forth on the hair-filled fabric surface (do not use in one direction only).' },
      { step: '2', title: 'Hair Self-Cleans', desc: 'The internal micro-brushes sweep the hair off the roller into the back collector bin.' },
      { step: '3', title: 'Press & Empty', desc: 'Press the lid latch to pop open the dust chamber, pull out the lint, and discard.' }
    ],
    features: [
      { label: 'Reusable Roller', icon: '🌀' },
      { label: 'Comfort Grip', icon: '✊' },
      { label: 'ABS Plastic Shell', icon: '🛡️' },
      { label: 'Microstatic Tech', icon: '⚡' },
      { label: 'One-Hand Use', icon: '🤚' },
      { label: 'Washable Rubber', icon: '🧼' }
    ],
    reviews: [
      { name: 'Vijay S.', rating: 5, date: 'June 10, 2026', text: 'I have a golden retriever and my sofa was covered in gold hair. This tool cleared all of it in 2 minutes! Super effective.', verified: true, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80' }
    ],
    faqs: [
      { question: "Does it work on clothes?", answer: "Yes, it works well on thick clothes like sweaters, coats, and jeans. For thin cotton fabrics, hold the cloth tight before rolling." }
    ],
    shipping: "Dispatched within 24 hours. COD available.",
    returns: "7-day return policy.",
    frequentlyBoughtTogether: {
      products: ['p6', 'p2'],
      totalPrice: 1098,
      savedPrice: 500
    }
  }
];

export const beforeAfterHome = [
  { id: 'ba1', title: "Cluttered Countertops?", before: "Messy & disorganized", after: "Clean & organized", result: "Organize Everything In Seconds", image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=500&auto=format&fit=crop&q=80' },
  { id: 'ba2', title: "Dirty & Unhygienic Brushes?", before: "Exposed to toilet germs", after: "99.9% sterile & sanitized", result: "UV Sterilization Keeps You Safe", image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&auto=format&fit=crop&q=80' },
  { id: 'ba3', title: "Messy Sink Area?", before: "Soggy sponge puddles", after: "Neat dry storage rack", result: "Keep Sink Neat & Organized", image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=500&auto=format&fit=crop&q=80' },
  { id: 'ba4', title: "Wet Clothes Everywhere?", before: "Draped over furniture", after: "Compact dry stand space", result: "Dry & Organized In Minutes", image: 'https://images.unsplash.com/photo-1582730149693-81b27d9674fe?w=500&auto=format&fit=crop&q=80' }
];

export const photoReviews = [
  { 
    id: 'r2', 
    name: "Neha Patel", 
    text: "Obsessed with this crevice brush! Cleaned all the tough tile grout joints in my bathroom in 5 mins.", 
    rating: 5, 
    photo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=80",
    productSlug: "window-groove-cleaner"
  },
  { 
    id: 'r3', 
    name: "Ankit Mehta", 
    text: "The sink rack fits all sponges, soap, and keeps them completely dry. Counter feels so spacious.", 
    rating: 5, 
    photo: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&auto=format&fit=crop&q=80",
    productSlug: "over-the-sink-rack"
  },
  { 
    id: 'r4', 
    name: "Priya Kumar", 
    text: "This pet lint remover brush works like magic on my sofa. I have two cats and it cleaned up all the fur.", 
    rating: 4.5, 
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80",
    productSlug: "portable-lint-remover"
  }
];
