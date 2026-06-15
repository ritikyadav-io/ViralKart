export const SHOPIFY_STORE_URL = import.meta.env.VITE_SHOPIFY_STORE_URL || 'northlaneindia.myshopify.com';
export const STORE_NAME = import.meta.env.VITE_STORE_NAME || 'ViralKart';

function getProductMetadataByProduct(category, title, images, idNum) {
  const titleLower = title.toLowerCase();
  const cleanTitle = title.replace(/["']/g, ''); // strip quotes
  const firstWord = cleanTitle.split(' ')[0] || 'Product';
  
  // 1. Toothbrush Sterilizer / Sanitizer / UV Holder
  if (titleLower.includes('toothbrush') || titleLower.includes('sterilizer') || titleLower.includes('sanitize')) {
    return {
      benefits: [
        { title: '99.9% Germ Kill', desc: 'Medical-grade UV-C light sterilizes toothbrushes, destroying bacteria DNA in minutes.', icon: '⚡' },
        { title: 'Auto Toothpaste Dispenser', desc: 'Vacuum squeeze pump delivers the perfect amount of toothpaste without waste or mess.', icon: '🧴' },
        { title: 'Wall Mount Install', desc: 'No drilling required. Heavy-duty adhesive mount grips tiles, mirrors, and walls instantly.', icon: '🧱' },
        { title: 'Fits All Brushes', desc: 'Designed to fit electric toothbrush heads, manual adult brushes, and kids\' brushes.', icon: '🪥' }
      ],
      howItWorks: [
        { step: '1', title: 'Mount on Wall', desc: 'Clean the target wall, peel the adhesive backing, stick to the surface, and wait 12 hours.' },
        { step: '2', title: 'Place Brushes & Dispenser', desc: 'Hang up to 4 toothbrushes in the slots and insert your favorite toothpaste tube at the top.' },
        { step: '3', title: 'Auto Sterilize', desc: 'Close the cover. The smart sensor activates the UV-C sterilizer automatically for 4 minutes.' }
      ],
      features: [
        { label: 'Waterproof Body', icon: '💧' },
        { label: 'USB Rechargeability', icon: '🔋' },
        { label: 'Auto-Off Timer', icon: '⏱️' },
        { label: 'Smart Motion Sensor', icon: '👁️' }
      ],
      reviews: [
        { name: 'Rohit Sharma', rating: 5, date: 'June 10, 2026', text: 'Super useful sterilizer! Easy to install and works perfectly. The toothpaste dispenser squeezes out exactly what is needed.', verified: true },
        { name: 'Neha Patel', rating: 5, date: 'June 08, 2026', text: 'Very good quality toothbrush holder. My bathroom is now organized. The adhesive tape is very strong, it hasn\'t budged at all.', verified: true },
        { name: 'Ankit Mehta', rating: 4.8, date: 'June 02, 2026', text: `Worth every penny. UV sterilization is a must-have in bathrooms! Fast delivery by ${STORE_NAME} too.`, verified: true }
      ]
    };
  }
  
  // 2. Soap Dispenser / Liquid Dispenser
  if (titleLower.includes('soap') || titleLower.includes('dispenser') || titleLower.includes('shampoo')) {
    return {
      benefits: [
        { title: 'Hands-Free & Hygienic', desc: 'Dispenses soap easily at the press of a button or automatically with a clean hand motion.', icon: '🖐️' },
        { title: 'Declutter Countertops', desc: 'Wall-mounted design keeps sink ledges clean and free from slimy soap residues.', icon: '🧱' },
        { title: 'Versatile Fluid Storage', desc: 'Perfect for handwash, shampoo, conditioner, shower gel, lotion, or sanitizer.', icon: '🧴' },
        { title: 'Premium ABS Build', desc: 'Heat-resistant, anti-corrosive, durable ABS body that prevents bacterial buildup.', icon: '🛡️' }
      ],
      howItWorks: [
        { step: '1', title: 'Clean & Mount', desc: 'Clean the target wall surface. Apply the high-strength adhesive plate or mounting screws.' },
        { step: '2', title: 'Fill Soap Reservoir', desc: 'Pour hand soap, shower gel, or shampoo into the clear reservoir chamber.' },
        { step: '3', title: 'One-Touch Dispensation', desc: 'Press the front button or trigger the sensor to dispense the perfect portion of soap.' }
      ],
      features: [
        { label: 'Waterproof Seal', icon: '💧' },
        { label: 'Clear Reservoir', icon: '👁️' },
        { label: 'ABS Eco Plastic', icon: '♻️' },
        { label: 'Portion Control', icon: '🧴' }
      ],
      reviews: [
        { name: 'Vijay Kapoor', rating: 5, date: 'June 11, 2026', text: 'Very premium dispenser! We mounted it in our shower for shampoo and body wash. Squeezes out beautifully without dripping.', verified: true },
        { name: 'Pooja Iyer', rating: 5, date: 'June 07, 2026', text: 'Extremely convenient. The button is soft to press and dispenses a perfect amount. Wall mount fits firmly.', verified: true },
        { name: 'Rahul Yadav', rating: 4.7, date: 'June 01, 2026', text: 'Great space saver for bathroom sink. Clean white look. Easy to refill.', verified: true }
      ]
    };
  }

  // 3. Massage / Pain Relief / Massager
  if (titleLower.includes('massage') || titleLower.includes('massager') || titleLower.includes('reliever') || titleLower.includes('therapy')) {
    return {
      benefits: [
        { title: 'Instant Pain Relief', desc: 'Relieves muscle cramps, soreness, and pain with targeted wave massage therapy.', icon: '💆' },
        { title: 'Wireless & Portable', desc: 'Built-in rechargeable battery lets you enjoy muscle relief anywhere, anytime.', icon: '🔋' },
        { title: 'Adjustable Speeds', desc: 'Multiple intensity modes customize therapy to your specific recovery needs.', icon: '⚙️' },
        { title: 'Boosts Circulation', desc: 'Stimulates local blood flow for faster muscle rejuvenation and stress relief.', icon: '🩸' }
      ],
      howItWorks: [
        { step: '1', title: 'Place & Position', desc: 'Apply the massager pad or roller comfortably on the target sore muscle area.' },
        { step: '2', title: 'Set Mode & Speed', desc: 'Turn on the power button and adjust intensity or heating modes to your preference.' },
        { step: '3', title: 'Relax & Recover', desc: 'Lean back and let the massager run. Relieves tension in just 15 minutes.' }
      ],
      features: [
        { label: 'Multi-Intensity', icon: '⚡' },
        { label: 'Rechargeable Battery', icon: '🔋' },
        { label: 'Auto Shutoff Timer', icon: '⏱️' },
        { label: 'Ergonomic Support', icon: '✨' }
      ],
      reviews: [
        { name: 'Karan Johar', rating: 5, date: 'June 12, 2026', text: 'Excellent pain reliever! Bought this for my leg cramps and the massage is very relaxing. Completely wireless.', verified: true },
        { name: 'Sunita Rao', rating: 5, date: 'June 09, 2026', text: 'Saves so much pain and stiffness after a long workday. Easy to recharge, charge lasts long.', verified: true },
        { name: 'Manoj Bajpayee', rating: 4.8, date: 'June 04, 2026', text: 'Very effective massager. Intensity controls are helpful for varying pain levels. 100% recommended.', verified: true }
      ]
    };
  }

  // 4. Drain Strainer / Hair Catcher / Drain Cleaner
  if (titleLower.includes('drain') || titleLower.includes('strainer') || titleLower.includes('hair catcher')) {
    return {
      benefits: [
        { title: 'Anti-Clogging Guard', desc: 'Traps hair, food scraps, and debris before they slide down and clog your drains.', icon: '🚰' },
        { title: 'Rapid Water Flow', desc: 'Specially spaced drainage holes allow water to flow freely while catching waste.', icon: '💧' },
        { title: 'Premium Rustproof Build', desc: 'Constructed from durable silicone or rust-resistant metal for long-term wet use.', icon: '🛡️' },
        { title: 'Easy Waste Disposal', desc: 'Soft flexible center or rim lets you flip it inside out to clean in seconds.', icon: '🧼' }
      ],
      howItWorks: [
        { step: '1', title: 'Place over Drain', desc: 'Set the strainer flat inside your bathroom shower drain or kitchen sink drain.' },
        { step: '2', title: 'Automatic Filtering', desc: 'Run water normally. Debris and hair are automatically filtered and trapped.' },
        { step: '3', title: 'Lift & Empty Bin', desc: 'Every few days, lift the strainer, discard the collected hair/debris, and rinse.' }
      ],
      features: [
        { label: 'Anti-Slip Gripper', icon: '👣' },
        { label: 'Fast Draining Base', icon: '💦' },
        { label: 'Flexible Silicone', icon: '📐' },
        { label: 'Odor Prevention', icon: '🌬️' }
      ],
      reviews: [
        { name: 'Sonal Gupta', rating: 5, date: 'June 10, 2026', text: 'Perfect strainer! It catches all hair in my bathroom drain. Water flows through fast, and it is very easy to wipe clean.', verified: true },
        { name: 'Divya Nanda', rating: 5, date: 'June 06, 2026', text: 'Using it in my kitchen sink. Traps even small food crumbs. Saved us from calling plumbers repeatedly.', verified: true },
        { name: 'Sameer Varma', rating: 4.6, date: 'May 28, 2026', text: 'Quality is very good. Fits standard drains perfectly. Happy with the purchase.', verified: true }
      ]
    };
  }

  // 5. Scrubber / Cleaning Brush / Mop / Duster
  if (titleLower.includes('scrub') || titleLower.includes('clean') || titleLower.includes('brush') || titleLower.includes('mop') || titleLower.includes('duster')) {
    return {
      benefits: [
        { title: 'Deep Cleaning Power', desc: 'Ultra-stiff bristles or motor actions lift stubborn stains and dirt with ease.', icon: '🧹' },
        { title: 'No Hand Strain', desc: 'Ergonomic handle protects your fingers from scraping against rough surfaces.', icon: '✊' },
        { title: 'Reach Narrow Spots', desc: 'Specially angled head easily penetrates tight grout lines, window tracks, and corners.', icon: '📐' },
        { title: 'Saves Time & Effort', desc: 'Cleans large bathroom, kitchen, or window areas in half the time of regular rags.', icon: '⏱️' }
      ],
      howItWorks: [
        { step: '1', title: 'Prep Dirty Surface', desc: 'Spray water or your preferred cleaning solution onto the tile joints or grimy tracks.' },
        { step: '2', title: 'Scrub the Dirt', desc: 'Press the brush bristles into the gap/surface and scrub back and forth with light pressure.' },
        { step: '3', title: 'Rinse & Hang Dry', desc: 'Rinse away the dirty residue and hang the brush up using its convenient hanging loop.' }
      ],
      features: [
        { label: 'Stiff V-Bristles', icon: '📐' },
        { label: 'Ergonomic Handle', icon: '🖐️' },
        { label: 'Easy Hanging Hole', icon: '🕳️' },
        { label: 'Durable Polymer', icon: '🛡️' }
      ],
      reviews: [
        { name: 'Rajesh Kumar', rating: 5, date: 'June 11, 2026', text: `Brilliant brush! Cleaned all the tough black scale in my bathroom tiles. Bristles are very strong and don't bend.`, verified: true },
        { name: 'Kirti Lal', rating: 5, date: 'June 08, 2026', text: `Window track cleaning was a nightmare before this brush. Fits right into the sliding rail and sweeps dirt out instantly.`, verified: true },
        { name: 'Amit Gupte', rating: 4.7, date: 'June 02, 2026', text: `Very comfortable to hold. Long brush head covers a lot of grout line in one stroke. Very satisfied.`, verified: true }
      ]
    };
  }

  // 6. Sink Organizer / Kitchen Organizer / Dish Rack
  if (titleLower.includes('sink') || titleLower.includes('kitchen') || titleLower.includes('rack') || titleLower.includes('organizer')) {
    return {
      benefits: [
        { title: 'Dry Countertops', desc: 'Auto-draining base routes dripping water straight back into the sink basin.', icon: '🚰' },
        { title: 'Odor-Free Sponges', desc: 'Ventilated hollow slots allow sponge pads to air-dry rapidly, preventing musty smells.', icon: '🌬️' },
        { title: 'Dedicated Towel Rail', desc: 'Integrated hanging bar dries wet dishcloths neatly and sanitarily.', icon: '🧣' },
        { title: 'Durable Matte Finish', desc: 'Constructed from heavy-duty carbon steel with a premium rustproof powder coating.', icon: '⛓️' }
      ],
      howItWorks: [
        { step: '1', title: 'Place by Faucet', desc: 'Find a flat space right beside your kitchen sink with the drain lip facing the basin.' },
        { step: '2', title: 'Organize Sponges', desc: 'Set your dish soaps, wire sponges, and cleaning sponges inside their allocated slots.' },
        { step: '3', title: 'Drape Towels', desc: 'Hang wet wiping cloths on the rail. Excess moisture drops cleanly into the sink.' }
      ],
      features: [
        { label: 'Anti-Rust Frame', icon: '🛡️' },
        { label: 'Hollow Draining Lip', icon: '🚰' },
        { label: 'Non-Slip rubber pads', icon: '👣' },
        { label: 'Heavy Load Limit', icon: '🧱' }
      ],
      reviews: [
        { name: 'Tanvi Dave', rating: 5, date: 'June 12, 2026', text: 'So happy to get this kitchen organizer! Keeps all sponges off the wet granite. Counter looks dry and neat.', verified: true },
        { name: 'Sandeep Malhotra', rating: 5, date: 'June 09, 2026', text: 'Material build is very thick steel. It does not wobble even with heavy dishwash liquid bottles.', verified: true },
        { name: 'Ritu Sen', rating: 4.8, date: 'May 31, 2026', text: 'Saves a lot of space next to the tap. Dish cloth dries fast on the hanger. Recommended!', verified: true }
      ]
    };
  }

  // 7. General Custom Rebranding & Fallback for any product X
  const indianNames = [
    ['Arjun Mehta', 'Meera Nair', 'Prakash Patel'],
    ['Vikram Shah', 'Shalini Verma', 'Deepak Joshi'],
    ['Sanjay Gupta', 'Aisha Sen', 'Harish Kumar'],
    ['Karan Malhotra', 'Preeti Sharma', 'Rohan Das'],
    ['Kabir Kapoor', 'Aditi Rao', 'Vivek Singh']
  ];
  const namesGroup = indianNames[idNum % indianNames.length];
  
  return {
    benefits: [
      { title: `Smart ${firstWord} Fix`, desc: `The innovative layout of this ${firstWord} solves your annoying daily household problems.`, icon: '✨' },
      { title: 'Premium Material Build', desc: 'Crafted from heavy-duty, drop-proof polymer or reinforced metal for daily wear.', icon: '🛡️' },
      { title: 'Compact & Space-Saving', desc: 'Organizes clutter neatly, freeing up countertops, cabinets, or shelves.', icon: '📐' },
      { title: '100% Cash on Delivery', desc: 'Risk-free shopping. Pay cash directly at your door when the package arrives.', icon: '💰' }
    ],
    howItWorks: [
      { step: '1', title: `Prepare ${firstWord}`, desc: `Unpack the ${cleanTitle} carefully and wipe it with a clean cloth before setting up.` },
      { step: '2', title: 'Place in Position', desc: 'Mount on tiles using the sticky pad, or place on a flat shelf or sink ledger.' },
      { step: '3', title: 'Begin Using Daily', desc: `Enjoy a cleaner, more efficient household with your new ${firstWord} helper!` }
    ],
    features: [
      { label: 'Impact Proof', icon: '🛡️' },
      { label: 'Modern Fit', icon: '✨' },
      { label: 'Rinse-to-Clean', icon: '🧼' },
      { label: 'Safe Non-Toxic', icon: '♻️' }
    ],
    reviews: [
      { name: namesGroup[0], rating: 5, date: 'June 12, 2026', text: `Excellent utility product! Very useful in our home. High-quality construction.`, verified: true },
      { name: namesGroup[1], rating: 5, date: 'June 08, 2026', text: `Super practical. Solves the issue perfectly. Keeps everything clean and organized.`, verified: true },
      { name: namesGroup[2], rating: 4.6, date: 'June 01, 2026', text: `Satisfied with the product. True to description. Delivery was very fast by ${STORE_NAME}.`, verified: true }
    ]
  };
}

export function mapPublicShopifyProduct(p) {
  const firstVariant = p.variants?.[0];
  const variantId = firstVariant ? String(firstVariant.id) : null;
  const price = firstVariant ? Math.round(parseFloat(firstVariant.price)) : 0;
  let comparePrice = firstVariant && firstVariant.compare_at_price 
    ? Math.round(parseFloat(firstVariant.compare_at_price)) 
    : Math.round(price * 1.7);
  
  if (comparePrice <= price) {
    comparePrice = Math.round(price * 1.7);
  }

  const images = p.images?.map(img => img.src) || [];
  if (images.length === 0) {
    images.push('https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&auto=format&fit=crop&q=80');
  }

  // Smart classifier mapping real products to our ViralKart category menu slugs
  let category = 'best-sellers';
  const titleLower = p.title.toLowerCase();
  const typeLower = (p.product_type || '').toLowerCase();
  
  if (titleLower.includes('toilet') || titleLower.includes('bathroom') || titleLower.includes('shower') || titleLower.includes('soap') || titleLower.includes('shampoo') || titleLower.includes('dispenser') || typeLower.includes('bathroom')) {
    category = 'bathroom-essentials';
  } else if (titleLower.includes('clean') || titleLower.includes('brush') || titleLower.includes('active oxygen') || titleLower.includes('scrub') || titleLower.includes('vacuum') || titleLower.includes('mop') || titleLower.includes('duster') || titleLower.includes('dust') || titleLower.includes('eraser') || titleLower.includes('remover') || typeLower.includes('clean')) {
    category = 'cleaning-solutions';
  } else if (titleLower.includes('sink') || titleLower.includes('kitchen') || titleLower.includes('dish') || titleLower.includes('cook') || titleLower.includes('rack') || typeLower.includes('kitchen') || titleLower.includes('hanger') || titleLower.includes('organizer') || titleLower.includes('hook') || titleLower.includes('holder') || titleLower.includes('box') || typeLower.includes('organization')) {
    category = 'home-organization';
  } else if (titleLower.includes('massager') || titleLower.includes('watch') || titleLower.includes('blocks') || titleLower.includes('tablet') || titleLower.includes('toy') || titleLower.includes('leash') || titleLower.includes('gloves') || titleLower.includes('car') || titleLower.includes('injector')) {
    category = 'repair-utility';
  }

  // Restrict reviews count stably between 40 and 98 using stable product ID math
  const idNum = parseInt(p.id) || 0;
  const reviewsCount = 40 + (idNum % 59); 
  const rating = (4.6 + ((idNum % 5) / 10)).toFixed(1);
  const soldCount = `${400 + (idNum % 600)}+ Sold`;

  const meta = getProductMetadataByProduct(category, p.title, images, idNum);

  return {
    id: String(p.id),
    variantId: variantId,
    slug: p.handle,
    title: p.title,
    category: category,
    price: price,
    comparePrice: comparePrice,
    rating: parseFloat(rating),
    reviewsCount: reviewsCount,
    badge: 'BEST SELLER',
    soldCount: soldCount,
    stockCount: 3 + (idNum % 10),
    tagline: p.body_html ? p.body_html.replace(/<[^>]*>/g, '').split('.')[0] + '.' : 'Premium quality solution for your home.',
    images: images,
    videoUrl: null,
    descriptionHtml: p.body_html || null,
    whyNeed: [
      'Traditional products fail to solve these specific annoying daily household problems.',
      'Cheap build alternatives break easily and end up costing you more.',
      'Cluttered and unorganized corners look untidy and are unhygienic.'
    ],
    solution: {
      headline: `Introducing The ${STORE_NAME} ${p.title.split(' ')[0]}`,
      description: p.body_html ? p.body_html.replace(/<[^>]*>/g, '').slice(0, 180) + '...' : 'Premium home essentials designed to make your daily routine simpler, cleaner, and more organized.',
      chips: ['Premium Quality', 'Smart Design', 'Easy Installation', 'Durable Build']
    },
    benefits: meta.benefits,
    howItWorks: meta.howItWorks,
    features: meta.features,
    reviews: meta.reviews,
    faqs: [
      { question: 'Is Cash on Delivery available for this product?', answer: 'Yes! Cash on Delivery is available across India with no extra charges.' },
      { question: 'What is the delivery timeline?', answer: 'Dispatched within 24 hours. Delivered in 2-5 business days across India.' }
    ],
    shipping: 'Dispatched within 24 hours. Delivered in 2-5 business days across India. Tracking link sent via SMS.',
    returns: '7-day easy return and exchange policy. Return shipping is free for damaged or defective items.',
    frequentlyBoughtTogether: null
  };
}

export async function fetchShopifyData() {
  const url = `https://${SHOPIFY_STORE_URL}/products.json?limit=250`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Shopify API responded with status ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.products || data.products.length === 0) return null;

    // Filter out products where ALL variants are out of stock (available !== false)
    const activeProducts = data.products.filter(p => {
      if (!p.variants || p.variants.length === 0) return false;
      return p.variants.some(v => v.available !== false);
    });

    if (activeProducts.length === 0) return null;

    // Map all active products
    const products = activeProducts.map(p => mapPublicShopifyProduct(p));
    
    // Define requested collections in strict order and name format
    const orderedSlugs = [
      'viral',
      'home-organization',
      'bathroom-essentials',
      'cleaning-solutions',
      'repair-utility',
      'best-sellers'
    ];
    const categoryNames = {
      'viral': 'Viral',
      'home-organization': 'Home',
      'bathroom-essentials': 'Bathroom',
      'cleaning-solutions': 'Cleaning',
      'repair-utility': 'Repair',
      'best-sellers': 'Bestseller'
    };
    const categoryIcons = {
      'viral': '🔥',
      'home-organization': '🗄️',
      'bathroom-essentials': '🚿',
      'cleaning-solutions': '🧹',
      'repair-utility': '🔧',
      'best-sellers': '⭐'
    };
    
    const collections = orderedSlugs.map(cat => {
      let imgUrl;
      if (cat === 'viral') {
        imgUrl = products.find(p => p.price >= 199 && p.price <= 399)?.images[0] ||
                 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80';
      } else {
        imgUrl = products.find(p => p.category === cat)?.images[0] || 
                 products.find(p => p.category === 'best-sellers')?.images[0] || 
                 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=500&auto=format&fit=crop&q=80';
      }
      return {
        id: cat,
        name: categoryNames[cat],
        icon: categoryIcons[cat],
        slug: cat,
        image: imgUrl
      };
    });

    return { products, collections };
  } catch (error) {
    console.error('Error in fetchShopifyData:', error);
    return null;
  }
}
