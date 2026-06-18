export const SHOPIFY_STORE_URL = import.meta.env.VITE_SHOPIFY_STORE_URL || 'northlaneindia.myshopify.com';
export const STORE_NAME = import.meta.env.VITE_STORE_NAME || 'ViralKart';

function getProductMetadataByProduct(category, title, images, idNum) {
  const t = title.toLowerCase();
  const cleanTitle = title.replace(/["']/g, ''); // strip quotes
  const firstWord = cleanTitle.split(' ')[0] || 'Product';
  
  let benefits = [];
  let howItWorks = [];
  let features = [];
  let reviews = [];

  // Group 1: Rose Flower Gift
  if (t.includes('rose') || t.includes('flower') || t.includes('plated')) {
    benefits = [
      { title: 'Elegant 24K Plated Gold', desc: 'Crafted with premium gold foil plating, creating a stunning, everlasting lustrous finish.', icon: '🌹' },
      { title: 'Includes "Love" Stand', desc: 'Comes with a beautiful transparent stand featuring "Love" lettering to display the rose proudly.', icon: '💝' },
      { title: 'Premium Gift Packaging', desc: 'Arrives in an elegant luxury gift box with a matching carry bag, ready for gifting.', icon: '🎁' },
      { title: 'Everlasting Love Token', desc: 'Unlike real flowers, this rose never fades or wilts, symbolizing eternal love and affection.', icon: '💖' }
    ];
    howItWorks = [
      { step: '1', title: 'Unbox the Rose', desc: 'Carefully open the luxury gift box and take out the gold-plated rose and love stand.' },
      { step: '2', title: 'Mount on Stand', desc: 'Place the stem of the rose into the slot on the transparent "Love" base stand.' },
      { step: '3', title: 'Display with Pride', desc: 'Set the assembled rose on a bedside table, dressing table, or living room shelf.' }
    ];
    features = [
      { label: '24K Gold Plated', icon: '✨' },
      { label: 'Love Base Stand', icon: '💝' },
      { label: 'Luxury Gift Box', icon: '🎁' },
      { label: 'No Maintenance', icon: '🛡️' }
    ];
    reviews = [
      { name: 'Amit Sen', rating: 5, date: 'June 12, 2026', text: 'Gifted this to my wife on our anniversary. She absolutely loved it! The packaging looks extremely premium and the stand holds it well.', verified: true },
      { name: 'Ritu Sharma', rating: 5, date: 'June 08, 2026', text: 'Very beautiful rose. The gold shine is elegant, and the box is very nice. Great value for gifting.', verified: true },
      { name: 'Karan Malhotra', rating: 4.8, date: 'May 30, 2026', text: 'Excellent product. The gift bag made it so easy to present. Quality is top-notch.', verified: true }
    ];
  }
  // Group 2: Jewellery Box
  else if (t.includes('jewellery box') || t.includes('peach leather')) {
    benefits = [
      { title: 'Premium PU Leather', desc: 'Stunning peach-colored leather exterior is water-resistant, durable, and easy to clean.', icon: '👜' },
      { title: 'Velvet Scratch Guard', desc: 'Lined with soft bead velvet fabric that protects precious gems and gold from scratches.', icon: '🛡️' },
      { title: 'Smart Grid Organization', desc: 'Features ring rolls, earring studs cards, and necklace hooks with storage pockets.', icon: '🗄️' },
      { title: 'Compact & Travel Friendly', desc: 'Lightweight, portable design with zip closure fits easily in handbags or suitcases.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Organize Jewellery', desc: 'Arrange rings in the slots, hang necklaces on hooks, and place studs in the card board.' },
      { step: '2', title: 'Secure Closure', desc: 'Zip the box securely to ensure no earrings or rings fall out during transit.' },
      { step: '3', title: 'Slip in Bag', desc: 'Pack it in your luggage or store it on your dressing table for easy daily access.' }
    ];
    features = [
      { label: 'PU Leather Cover', icon: '✨' },
      { label: 'Soft Velvet Lining', icon: '🛡️' },
      { label: 'Secure Zipper', icon: '🔒' },
      { label: 'Portable Grid', icon: '📐' }
    ];
    reviews = [
      { name: 'Shreya Mehta', rating: 5, date: 'June 12, 2026', text: 'Super cute box! Fits all my daily wear jewellery. The velvet lining is soft and the peach color looks very elegant.', verified: true },
      { name: 'Sunita Patel', rating: 4.8, date: 'June 08, 2026', text: 'Perfect for gifting. The leather quality is high-grade. Very handy for travel and keeps chains tangle-free.', verified: true },
      { name: 'Preeti Sharma', rating: 5, date: 'June 01, 2026', text: 'Excellent size. The slots are well divided. I bought 2 for gifting my friends.', verified: true }
    ];
  }
  // Group 3: Shoe Polishing Brush
  else if (t.includes('shoe polishing') || t.includes('shoe brush')) {
    benefits = [
      { title: 'Automatic Polish Dispenser', desc: 'Press top button to release polish directly into the bristles, preventing messy hands.', icon: '🧴' },
      { title: 'Dual-Action Bristles', desc: 'Soft yet firm bristles clean dirt without scratching premium leather or canvas.', icon: '🧼' },
      { title: 'Ergonomic Grip', desc: 'Contoured handle body fits naturally in your hand for effortless scrubbing action.', icon: '✊' },
      { title: 'Hanging Loop Storage', desc: 'Built-in loop lets you hang the brush for quick air-drying, avoiding clutter.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Fill Polish Liquid', desc: 'Open the top cap of the brush and pour in your favorite shoe cleaning or polish liquid.' },
      { step: '2', title: 'Press and Scrub', desc: 'Press the soft top button to release liquid and scrub shoes in circular motions.' },
      { step: '3', title: 'Wipe & Hang', desc: 'Wipe off remaining foam with a microfiber cloth and hang the brush to dry.' }
    ];
    features = [
      { label: 'Polish Dispenser', icon: '🧴' },
      { label: 'Comfort Handle', icon: '🖐️' },
      { label: 'Soft Nylon Bristles', icon: '🧹' },
      { label: 'Wall Hang Loop', icon: '📐' }
    ];
    reviews = [
      { name: 'Karan Dev', rating: 5, date: 'June 10, 2026', text: 'Very useful brush. I put liquid polish in it and it makes polishing my school shoes so quick. No messy hands.', verified: true },
      { name: 'Rahul Varma', rating: 4.7, date: 'June 08, 2026', text: 'Sturdy build. The liquid dispensing works without leaking. Clean work. Bristles are durable.', verified: true }
    ];
  }
  // Group 4: Magic Copybook
  else if (t.includes('practice copybook') || t.includes('magic practice')) {
    benefits = [
      { title: 'Grooved Writing Guides', desc: 'Three-dimensional grooved pages help kids trace letters and numbers correctly.', icon: '📝' },
      { title: 'Magic Fading Ink', desc: 'Special pen ink disappears automatically within 10-15 minutes after writing.', icon: '🪄' },
      { title: '4 Subjects Pack', desc: 'Includes four essential books: Alphabet, Numbers, Math, and Fun Drawing.', icon: '📚' },
      { title: 'Full Refill Accessory Set', desc: 'Comes with a pen holder grip, pen case, and 10 magic ink refills for endless play.', icon: '✏️' }
    ];
    howItWorks = [
      { step: '1', title: 'Set Up Magic Pen', desc: 'Insert one magic fading ink refill into the pen body and attach the grip accessory.' },
      { step: '2', title: 'Trace Grooved Guide', desc: 'Let the child trace along the grooved letters and numbers inside the books.' },
      { step: '3', title: 'Watch Ink Disappear', desc: 'Wait 10 minutes. The writing will fade away completely, leaving pages fresh to reuse.' }
    ];
    features = [
      { label: 'Grooved Guide Pages', icon: '📝' },
      { label: 'Magic Fading Ink', icon: '💡' },
      { label: '4 Books Set', icon: '📚' },
      { label: '10 Pen Refills', icon: '✏️' }
    ];
    reviews = [
      { name: 'Pooja Gupta', rating: 5, date: 'June 10, 2026', text: 'Highly recommended for toddlers! The ink fades away within 10 minutes, making the books completely reusable. Saved us buying multiple notebooks.', verified: true },
      { name: 'Sanjay Joshi', rating: 5, date: 'June 08, 2026', text: 'My son enjoys writing on the grooves. It really helped improve his handwriting holding posture.', verified: true },
      { name: 'Meera Nair', rating: 4.9, date: 'June 01, 2026', text: 'Excellent concept. The silicone pen grip teaches children the correct way to hold a pen.', verified: true }
    ];
  }
  // Group 5: Jap Counter / Jaap Mala
  else if (t.includes('jaap') || t.includes('mala') || t.includes('counter')) {
    benefits = [
      { title: 'Digital Jaap Tracking', desc: 'Counts prayers accurately from 1 to 99,999 with simple push beads.', icon: '📿' },
      { title: 'Bright LCD Screen', desc: 'Displays counts clearly in all light conditions. Reset button resets to zero.', icon: '💡' },
      { title: 'Silent Beaded Rolling', desc: 'Rolls beads smoothly without making clicking sounds, ideal for quiet prayer.', icon: '🔇' },
      { title: 'Portable Design', desc: 'Fits comfortably in the palm of your hand, bag, or pocket. Loop safety strap.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Slide Beads', desc: 'Grip counter. Roll the bead down with your thumb for every chant or prayer.' },
      { step: '2', title: 'Monitor Counts', desc: 'Look at the LCD display to check progress. Counts are saved in memory.' },
      { step: '3', title: 'Reset to Zero', desc: 'Press the small reset pin button when jaap cycle is complete to start fresh.' }
    ];
    features = [
      { label: 'LCD Counter', icon: '💡' },
      { label: 'Smooth Beads', icon: '📿' },
      { label: 'Quiet Spring', icon: '🔇' },
      { label: 'Lock Switch', icon: '🔒' }
    ];
    reviews = [
      { name: 'Rajesh Varma', rating: 5, date: 'June 12, 2026', text: 'Very smooth beads and the display is bright. Highly useful for daily chanting. Count stays saved.', verified: true },
      { name: 'Sunita Mehta', rating: 4.8, date: 'June 08, 2026', text: 'Nice product. Compact and lightweight. Makes jaap tracking very easy and silent.', verified: true }
    ];
  }
  // Group 6: Vacuum Sealer Machine (Big)
  else if (t.includes('vacuum sealer machine') || t.includes('vacuum packing')) {
    benefits = [
      { title: 'Automatic Vacuum Sealing', desc: 'Powerful motor extracts air in 8-12 seconds to lock in freshness up to 5x longer.', icon: '🌬️' },
      { title: 'Dual Dry & Moist Modes', desc: 'Custom modes ensure optimal preservation for dry grains, fresh fruits, or juicy meats.', icon: '🥩' },
      { title: 'Airtight Leak Protection', desc: 'Heavy-duty 3mm heat seal wire prevents leaks and protects food from freezer burn.', icon: '🔒' },
      { title: 'Save Fridge Space', desc: 'Vacuum-packed bags stack flat, decluttering your refrigerator and freezer space.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Place Food in Bag', desc: 'Put vegetables, meats, or grains inside the special vacuum sealer bag.' },
      { step: '2', title: 'Insert in Chamber', desc: 'Place the open edge of the bag flat into the vacuum slot channel and close the cover.' },
      { step: '3', title: 'Press Vacuum Seal', desc: 'Press the "Vac Seal" button. The machine automatically extracts air, seals, and stops.' }
    ];
    features = [
      { label: '10s Quick Vac', icon: '⚡' },
      { label: 'Dry/Moist Settings', icon: '⚙️' },
      { label: 'Heat Seal Only', icon: '🔥' },
      { label: 'Safety Overheat Lock', icon: '🛡️' }
    ];
    reviews = [
      { name: 'Sanjay Gupta', rating: 5, date: 'June 12, 2026', text: 'Automatic vacuum sealer is very powerful. Keeps raw paneer and vegetables fresh in the fridge for very long.', verified: true },
      { name: 'Aisha Sen', rating: 4.8, date: 'June 08, 2026', text: 'Excellent machine for food preservation. I use it to pack dry fruits and frozen paneer. Airtight seal is very strong.', verified: true }
    ];
  }
  // Group 7: Mini Sealing Machine
  else if (t.includes('mini sealing') || t.includes('bag sealer')) {
    benefits = [
      { title: 'Airtight Snack Preservation', desc: 'Locks in freshness by sealing plastic bags instantly, preventing food from getting soggy.', icon: '🍿' },
      { title: '2-in-1 Sealer & Cutter', desc: 'Features a heating wire to seal bags and a built-in safety blade to slide them open.', icon: '✂️' },
      { title: 'USB Rechargeable', desc: 'Long battery life with a built-in rechargeable battery. Charge once, use for weeks.', icon: '🔋' },
      { title: 'Magnetic Fridge Mount', desc: 'Magnetic base sticks directly to your refrigerator so it is always within reach.', icon: '🧲' }
    ];
    howItWorks = [
      { step: '1', title: 'Preheat Device', desc: 'Press and hold the power button for 3 seconds to warm up the sealing wire.' },
      { step: '2', title: 'Slide to Seal', desc: 'Place bag edge in the sealer, press down gently, and slide slowly across to seal airtight.' },
      { step: '3', title: 'Open with Cutter', desc: 'Slide the hidden blade on the reverse side to slice open packets cleanly.' }
    ];
    features = [
      { label: 'Toggle Safety Switch', icon: '🔒' },
      { label: 'Pocket Size', icon: '📐' },
      { label: 'USB Charging', icon: '🔋' },
      { label: 'Magnetic Base', icon: '🧲' }
    ];
    reviews = [
      { name: 'Amit Kumar', rating: 5, date: 'June 12, 2026', text: 'Seals packets perfectly! Very handy for chips and dry fruits. Stored on my fridge door.', verified: true },
      { name: 'Shreya Sen', rating: 4.7, date: 'June 09, 2026', text: 'Works very well on thin plastic bags. USB charging is very convenient.', verified: true }
    ];
  }
  // Group 8: Shoe Heated Dryer
  else if ((t.includes('dryer') || t.includes('shoe dry')) && !t.includes('makeup') && !t.includes('cosmetic') && !t.includes('brush')) {
    benefits = [
      { title: 'Warm Air Desiccation', desc: 'Circulates warm air to dry wet slippers, socks, shoes, or gloves quickly.', icon: '💨' },
      { title: 'Odour Elimination', desc: 'Removes damp moisture that breeds smelly bacteria and mold inside footwear.', icon: '🌬️' },
      { title: 'Space-Saving Foldable', desc: 'Arms fold flat at 90 degrees for compact storage in shoe racks or suitcases.', icon: '📐' },
      { title: 'Safe Constant Heat', desc: 'Maintains a safe, warm temperature that dries materials without shrinking leather or mesh.', icon: '🔥' }
    ];
    howItWorks = [
      { step: '1', title: 'Unfold Dryer', desc: 'Extend the dryer brackets to a 90-degree angle and plug into power.' },
      { step: '2', title: 'Place Footwear', desc: 'Place wet shoes, boots, socks, or slippers over the drying air vents.' },
      { step: '3', title: 'Turn On Heat', desc: 'Activate the heater. Warm air will dry your footwear completely in 1-2 hours.' }
    ];
    features = [
      { label: 'PTC Heater', icon: '🔥' },
      { label: 'Foldable Arms', icon: '📐' },
      { label: 'Silent Vents', icon: '🔇' },
      { label: 'Safety Overheat Protection', icon: '🛡️' }
    ];
    reviews = [
      { name: 'Vijay Dev', rating: 5, date: 'June 11, 2026', text: 'Super useful during monsoons. Dries soaked sports shoes in about 2 hours. Very quiet.', verified: true },
      { name: 'Kiran G.', rating: 4.8, date: 'June 07, 2026', text: 'Dries slippers and socks fast. Foldable design fits right in my drawer.', verified: true }
    ];
  }
  // Group 9: Toothbrush Sterilizer / Sanitizer / UV Holder
  else if (t.includes('toothbrush') || t.includes('sterilizer') || t.includes('sanitize')) {
    benefits = [
      { title: '99.9% Germ Kill', desc: 'Medical-grade UV-C light sterilizes toothbrushes, destroying bacteria DNA in minutes.', icon: '⚡' },
      { title: 'Auto Toothpaste Dispenser', desc: 'Vacuum squeeze pump delivers the perfect amount of toothpaste without waste or mess.', icon: '🧴' },
      { title: 'Wall Mount Install', desc: 'No drilling required. Heavy-duty adhesive mount grips tiles, mirrors, and walls instantly.', icon: '🧱' },
      { title: 'Fits All Brushes', desc: 'Designed to fit electric toothbrush heads, manual adult brushes, and kids\' brushes.', icon: '🪥' }
    ];
    howItWorks = [
      { step: '1', title: 'Mount on Wall', desc: 'Clean the target wall, peel the adhesive backing, stick to the surface, and wait 12 hours.' },
      { step: '2', title: 'Place Brushes & Dispenser', desc: 'Hang up to 4 toothbrushes in the slots and insert your favorite toothpaste tube at the top.' },
      { step: '3', title: 'Auto Sterilize', desc: 'Close the cover. The smart sensor activates the UV-C sterilizer automatically for 4 minutes.' }
    ];
    features = [
      { label: 'Waterproof Body', icon: '💧' },
      { label: 'USB Rechargeability', icon: '🔋' },
      { label: 'Auto-Off Timer', icon: '⏱️' },
      { label: 'Smart Motion Sensor', icon: '👁️' }
    ];
    reviews = [
      { name: 'Rohit Sharma', rating: 5, date: 'June 10, 2026', text: 'Super useful sterilizer! Easy to install and works perfectly. The toothpaste dispenser squeezes out exactly what is needed.', verified: true },
      { name: 'Neha Patel', rating: 5, date: 'June 08, 2026', text: 'Very good quality toothbrush holder. My bathroom is now organized. The adhesive tape is very strong, it hasn\'t budged at all.', verified: true }
    ];
  }
  // Group 10: Soap Dispenser / Liquid Dispenser / Gel Dispenser
  else if (t.includes('soap') || t.includes('dispenser') || t.includes('shampoo')) {
    benefits = [
      { title: 'Hands-Free & Hygienic', desc: 'Dispenses soap easily at the press of a button or automatically with a clean hand motion.', icon: '🖐️' },
      { title: 'Declutter Countertops', desc: 'Wall-mounted design keeps sink ledges clean and free from slimy soap residues.', icon: '🧱' },
      { title: 'Versatile Fluid Storage', desc: 'Perfect for handwash, shampoo, conditioner, shower gel, lotion, or sanitizer.', icon: '🧴' },
      { title: 'Premium ABS Build', desc: 'Heat-resistant, anti-corrosive, durable ABS body that prevents bacterial buildup.', icon: '🛡️' }
    ];
    howItWorks = [
      { step: '1', title: 'Clean & Mount', desc: 'Clean the target wall surface. Apply the high-strength adhesive plate or mounting screws.' },
      { step: '2', title: 'Fill Soap Reservoir', desc: 'Pour hand soap, shower gel, or shampoo into the clear reservoir chamber.' },
      { step: '3', title: 'One-Touch Dispensation', desc: 'Press the front button or trigger the sensor to dispense the perfect portion of soap.' }
    ];
    features = [
      { label: 'Waterproof Seal', icon: '💧' },
      { label: 'Clear Window', icon: '👁️' },
      { label: 'ABS Eco Plastic', icon: '♻️' },
      { label: 'Portion Control', icon: '🧴' }
    ];
    reviews = [
      { name: 'Vijay Kapoor', rating: 5, date: 'June 11, 2026', text: 'Very premium dispenser! We mounted it in our shower for shampoo and body wash. Squeezes out beautifully without dripping.', verified: true },
      { name: 'Pooja Iyer', rating: 5, date: 'June 07, 2026', text: 'Extremely convenient. The button is soft to press and dispenses a perfect amount. Wall mount fits firmly.', verified: true }
    ];
  }
  // Group 11: Toilet/Drain Cleaning Agents
  else if (t.includes('toilet cleaning') || t.includes('drain cleaner') || t.includes('active oxygen')) {
    benefits = [
      { title: 'Dissolves Tough Stains', desc: 'Foaming active formula cuts through yellow scale, grime, hair clogs, and soap residue.', icon: '🧪' },
      { title: 'Rapid Unclogging action', desc: 'Breaks down grease, fat, and paper clogs in kitchen sinks and pipes in minutes.', icon: '🚰' },
      { title: 'Odor Neutralizer', desc: 'Destroys smelly odor-causing bacteria at the source, leaving a fresh clean scent.', icon: '🌬️' },
      { title: 'Septic & Pipe Safe', desc: 'Non-corrosive formula cleans thoroughly without damaging metal pipes or plastic piping.', icon: '🛡️' }
    ];
    howItWorks = [
      { step: '1', title: 'Pour Agent', desc: 'Pour 50-100g of the cleaning powder or liquid directly into the toilet or clogged drain pipe.' },
      { step: '2', title: 'Foaming Reaction', desc: 'Let the chemical foam sit and dissolve scale or clogs for 20-30 minutes.' },
      { step: '3', title: 'Rinse / Flush', desc: 'Flush the toilet bowl, or run warm water down the sink drain to clear out remaining sludge.' }
    ];
    features = [
      { label: 'Active Oxygen Foam', icon: '🧪' },
      { label: 'Quick Clog Melt', icon: '⚡' },
      { label: 'Pipe Safe', icon: '🛡️' },
      { label: 'Fresh Citrus Scent', icon: '🌬️' }
    ];
    reviews = [
      { name: 'Sonal Gupta', rating: 5, date: 'June 10, 2026', text: 'Cleared my kitchen sink clog in just 20 minutes! The foaming action is very powerful. Saved me plumber charges.', verified: true },
      { name: 'Divya Nanda', rating: 5, date: 'June 06, 2026', text: 'Using it in my toilet bowl for tough yellow water rings. Just pour, wait and flush. Easy to use.', verified: true }
    ];
  }
  // Group 12: Rust Remover Spray
  else if (t.includes('rust remover') || t.includes('lubricant spray')) {
    benefits = [
      { title: 'Loosens Rusted Joints', desc: 'Fast-penetrating formula dissolves rust to release stuck nuts, bolts, and valves instantly.', icon: '⚙️' },
      { title: 'Stops Squeaks Instantly', desc: 'Lubricates metal hinges, doors, sliding tracks, and chains for smooth operation.', icon: '🔊' },
      { title: 'Anti-Rust Protection', desc: 'Leaves a durable protective oil barrier that prevents moisture and stops rust re-occurring.', icon: '🛡️' },
      { title: 'Removes Grease & Tar', desc: 'Quickly cleans stubborn grime, grease, adhesive marks, and carbon build-up.', icon: '🧼' }
    ];
    howItWorks = [
      { step: '1', title: 'Shake Can', desc: 'Shake the spray bottle well and attach the extension nozzle straw for precise targeting.' },
      { step: '2', title: 'Spray and Wait', desc: 'Spray directly on the rusted bolt or squeaking hinge. Let it penetrate for 2 minutes.' },
      { step: '3', title: 'Wipe Clean', desc: 'Tug or turn the screw to loosen, and wipe excess lubricant off with a dry rag.' }
    ];
    features = [
      { label: 'Fast Rust Melt', icon: '⚡' },
      { label: 'High Penetration', icon: '🧪' },
      { label: 'Anti-Moisture Oil', icon: '🛡️' },
      { label: 'Detachable Straw', icon: '📏' }
    ];
    reviews = [
      { name: 'Prakash Patel', rating: 5, date: 'June 12, 2026', text: 'Used it on my rusted balcony door hinges. Squeaking noise stopped immediately! Loosened tight nuts very easily.', verified: true },
      { name: 'Shalini Verma', rating: 4.8, date: 'June 08, 2026', text: 'Great value pack. Cleans rust off tools and cycle chains very well. Good lubricant spray.', verified: true }
    ];
  }
  // Group 13: Vacuum Suction Hook (Pack of 3)
  else if (t.includes('suction hook') || t.includes('vacuum hook')) {
    benefits = [
      { title: 'Heavy-Duty 5kg Hold', desc: 'Advanced vacuum suction technology grips glossy tile and glass walls firmly.', icon: '⚓' },
      { title: 'Zero Drilling Install', desc: 'Apply instantly without screws, glue, or wall damage. Perfect for renters.', icon: '🧱' },
      { title: '100% Waterproof & Reusable', desc: 'Suction holds in hot, humid bathrooms. Peel, clean, and re-apply anywhere.', icon: '💧' },
      { title: 'Multi-Surface Versatility', desc: 'Perfect organizer hook for towels in bathrooms, cooking pans in kitchen, or keys.', icon: '🔑' }
    ];
    howItWorks = [
      { step: '1', title: 'Clean & Dry Wall', desc: 'Thoroughly wipe the target tile or glass surface. Ensure there is no dust or moisture.' },
      { step: '2', title: 'Press Suction Cup', desc: 'Press the suction cup firmly against the wall to push out all internal air.' },
      { step: '3', title: 'Twist to Lock', desc: 'Turn the hook cap clockwise until it clicks or locks tightly to secure the vacuum seal.' }
    ];
    features = [
      { label: 'Twist Vacuum Lock', icon: '🔒' },
      { label: 'Reusable Suction', icon: '♻️' },
      { label: 'Waterproof ABS', icon: '💧' },
      { label: 'Heavy-Duty 5kg Limit', icon: '🧱' }
    ];
    reviews = [
      { name: 'Karan Malhotra', rating: 5, date: 'June 10, 2026', text: 'Best suction hooks I have used! Holds heavy wet towels in the bathroom easily. No drilling required.', verified: true },
      { name: 'Aisha Sen', rating: 4.8, date: 'June 08, 2026', text: 'Holds frying pans in the kitchen cupboard doors. Clean installation, no damage to tiles.', verified: true }
    ];
  }
  // Group 14: Helping Balance Handle / Hand Grab Bar
  else if (t.includes('helping handle') || t.includes('grab bar') || t.includes('handrail')) {
    benefits = [
      { title: 'Prevent Bathroom Slips', desc: 'High-strength suction grab bar provides crucial balance support for seniors and kids.', icon: '🛡️' },
      { title: 'Dual Locking Latches', desc: 'Flip down the safety switches to create an airtight, heavy-duty suction seal instantly.', icon: '🔒' },
      { title: 'Non-Drill Portable Mount', desc: 'Zero wall drilling required. Re-position or pack it in suitcases for travel easily.', icon: '🎒' },
      { title: 'Non-Slip Safety Grip', desc: 'Contoured rubber grip handle ensures your hands won\'t slip, even when wet.', icon: '🖐️' }
    ];
    howItWorks = [
      { step: '1', title: 'Position on Tiles', desc: 'Press both rubber suction pads flat against a clean, non-porous tiled bathroom wall.' },
      { step: '2', title: 'Lock Safety Latches', desc: 'Flip down the dual plastic tabs on top of the handle to lock the suction seal.' },
      { step: '3', title: 'Test Grip Hold', desc: 'Pull the handle firmly to check secure fit before relying on it for body balance.' }
    ];
    features = [
      { label: 'Dual Safety Latches', icon: '🔒' },
      { label: 'Non-Slip Grip', icon: '🖐️' },
      { label: 'Heavy Suction Pads', icon: '🧱' },
      { label: 'Portable Design', icon: '🎒' }
    ];
    reviews = [
      { name: 'Vivek Singh', rating: 5, date: 'June 12, 2026', text: 'Installed this in my grandparents\' bathroom. The suction is extremely strong and holds their weight safely. Highly recommend for elder safety.', verified: true },
      { name: 'Aditi Rao', rating: 4.8, date: 'June 08, 2026', text: 'Very easy to install. Just clean tiles, press and lock. Very sturdy grip on smooth bathroom tiles.', verified: true }
    ];
  }
  // Group 15: LED Digital Watch for Kids
  else if (t.includes('watch') || (t.includes('led') && t.includes('digital'))) {
    benefits = [
      { title: 'Bright LED Display', desc: 'Large, glowing digital display is easy for kids to read in both daylight and dark.', icon: '⌚' },
      { title: 'Soft Silicone Strap', desc: 'Hypoallergenic, flexible silicone strap that is soft on children\'s skin and wrists.', icon: '🧸' },
      { title: 'Shock & Water Resistant', desc: 'Built-in protective casing that handles daily kids\' play, splashes, and drops.', icon: '🛡️' },
      { title: 'Single Button Control', desc: 'Simple interface makes it easy for kids to check time and adjust settings.', icon: '⚙️' }
    ];
    howItWorks = [
      { step: '1', title: 'Strap Wrist', desc: 'Wrap the flexible silicone band comfortably around the child\'s wrist.' },
      { step: '2', title: 'Press to View', desc: 'Tap the button once to light up the display and see the time instantly.' },
      { step: '3', title: 'Hold to Set', desc: 'Hold down the button for 3 seconds to enter setting mode and adjust hours/minutes.' }
    ];
    features = [
      { label: 'Bright LED screen', icon: '💡' },
      { label: 'Anti-Slip Buckle', icon: '🔒' },
      { label: 'Lightweight', icon: '⚖️' },
      { label: 'Kid-safe Silicone', icon: '🧸' }
    ];
    reviews = [
      { name: 'Rohit Kumar', rating: 5, date: 'June 10, 2026', text: 'Bought it for my nephew, he loves the LED light-up display. Strap material is soft and safe.', verified: true },
      { name: 'Neha Patel', rating: 4.8, date: 'June 05, 2026', text: 'Very clear display. Water splashes from hand washing do not affect it.', verified: true }
    ];
  }
  // Group 16: Building Blocks for Kids
  else if (t.includes('blocks')) {
    benefits = [
      { title: 'Stimulate Brain Growth', desc: 'Encourages creative thinking, spatial imagination, and fine motor skills in kids.', icon: '🧠' },
      { title: 'Kid-Safe ABS Plastic', desc: 'Made from certified non-toxic, BPA-free plastic with smooth rounded edges.', icon: '♻️' },
      { title: 'Interlocking Design', desc: 'Blocks fit together snugly, allowing children to build towers, cars, and models easily.', icon: '🧱' },
      { title: 'Free Storage Container', desc: 'Comes with a sturdy box/bag to clean up and store block pieces after playtime.', icon: '📦' }
    ];
    howItWorks = [
      { step: '1', title: 'Spread Play Mat', desc: 'Pour out the interlocking building blocks onto a clean play area or floor mat.' },
      { step: '2', title: 'Build and Design', desc: 'Let your child connect blocks to create houses, towers, vehicles, and animal shapes.' },
      { step: '3', title: 'Clean Up Storage', desc: 'Collect block pieces and pack them back into the storage box to keep the room tidy.' }
    ];
    features = [
      { label: 'Non-Toxic ABS', icon: '♻️' },
      { label: 'Rounded Edges', icon: '🛡️' },
      { label: 'Interlocking Fit', icon: '🧱' },
      { label: 'Bright Colors', icon: '🎨' }
    ];
    reviews = [
      { name: 'Neha Roy', rating: 5, date: 'June 08, 2026', text: 'Kids are obsessed with building houses and cars with this set. Blocks fit together snugly and are very sturdy.', verified: true },
      { name: 'Pooja Gupta', rating: 4.8, date: 'June 04, 2026', text: 'Good quality non-toxic plastic. Very safe for toddlers and keeps them engaged for hours.', verified: true }
    ];
  }
  // Group 17: Anti Lost Wrist Link
  else if (t.includes('anti lost') || t.includes('wrist link') || t.includes('safety harness')) {
    benefits = [
      { title: 'Toddler Safety in Crowds', desc: 'Keeps your child close and safe in crowded markets, airports, malls, and streets.', icon: '🚶' },
      { title: 'Cut-Resistant Steel Core', desc: 'Built-in thick steel cable covered in durable PU plastic cannot be cut or broken.', icon: '🛡️' },
      { title: 'Secure Key Lock Buckle', desc: 'Feature a secure lock on the child\'s side wristband. Only parent holds the key.', icon: '🔒' },
      { title: 'Breathable Wrist Pads', desc: 'Lined with soft, breathable cotton padding to prevent rubbing and sweating.', icon: '🧤' }
    ];
    howItWorks = [
      { step: '1', title: 'Wear Adult Strap', desc: 'Wrap the larger wristband comfortably around the parent\'s wrist and secure velcro.' },
      { step: '2', title: 'Wear Child Strap', desc: 'Wrap child\'s side wristband, lock the plastic buckle, and lock it with parent\'s key.' },
      { step: '3', title: 'Walk Safely', desc: 'Let the child walk up to 1.5 meters away while keeping them safely tethered to you.' }
    ];
    features = [
      { label: 'Steel Core Cable', icon: '🛡️' },
      { label: 'Key Lock Buckle', icon: '🔒' },
      { label: 'Soft Cotton Pad', icon: '🧤' },
      { label: '1.5m Stretch PU', icon: '📏' }
    ];
    reviews = [
      { name: 'Meera Nair', rating: 5, date: 'June 12, 2026', text: 'Very useful for shopping malls and crowded markets. My toddler can walk freely but stays close and safe. The lock & key feature is genius.', verified: true },
      { name: 'Prakash Patel', rating: 4.9, date: 'June 08, 2026', text: 'Very high quality strap. Breathable cotton material doesn\'t make child sweat. Secure metal wire.', verified: true }
    ];
  }
  // Group 18: LCD Writing Tablet / Light-Up Tablet
  else if (t.includes('writing tablet') || t.includes('lcd writing')) {
    benefits = [
      { title: 'Paperless Eco Drawing', desc: 'Saves thousands of paper pages and crayons. No more wall stains or messy floors.', icon: '📝' },
      { title: 'Eye Protection Screen', desc: 'Advanced pressure-sensitive LCD panel is glare-free, radiation-free, and safe for eyes.', icon: '👁️' },
      { title: 'One-Click Erase Button', desc: 'Clear the entire screen in under a second with a simple tap of the home button.', icon: '🗑️' },
      { title: 'Lock Switch Memory', desc: 'Flip the rear lock switch to protect your child\'s doodles and drawings from erasure.', icon: '🔒' }
    ];
    howItWorks = [
      { step: '1', title: 'Draw with Stylus', desc: 'Use the included plastic stylus to write, draw, or scribble on the screen.' },
      { step: '2', title: 'Lock Drawing', desc: 'Flip the lock toggle switch on the back of the tablet to save the writing from being deleted.' },
      { step: '3', title: 'Erase Screen', desc: 'Unlock the switch and press the front trash button to clear the board and start fresh.' }
    ];
    features = [
      { label: 'One-Touch Delete', icon: '🗑️' },
      { label: 'Screen Lock Switch', icon: '🔒' },
      { label: 'Pressure Stylus', icon: '✏️' },
      { label: 'Eye Safe Screen', icon: '👁️' }
    ];
    reviews = [
      { name: 'Rekha Shah', rating: 5, date: 'June 12, 2026', text: 'Saves so much paper! My daughter draws on it all day. The lock switch on the back is very useful.', verified: true },
      { name: 'Harish Patel', rating: 4.8, date: 'June 01, 2026', text: 'Very lightweight and durable. Great for kids to practice writing and drawing during travel.', verified: true }
    ];
  }
  // Group 19: Pet Leash (500cm)
  else if (t.includes('leash') || t.includes('dog & cat strap')) {
    benefits = [
      { title: '5-Meter Tape Length', desc: 'Sturdy 500cm nylon tape gives your dog or cat plenty of room to roam safely.', icon: '🐕' },
      { title: 'One-Hand Brake & Lock', desc: 'Press button down to brake, slide forward to lock tape at exact desired length.', icon: '🔒' },
      { title: 'Tangle-Free Exit', desc: 'Designed with a smooth guide mouth that retracts tape without twisting or jam.', icon: '🌀' },
      { title: 'Ergonomic Grip Handle', desc: 'Rubber-coated comfort grip prevents hand fatigue and slippage during active runs.', icon: '🖐️' }
    ];
    howItWorks = [
      { step: '1', title: 'Clip Collar Hook', desc: 'Attach the heavy-duty metal swivel snap hook to your dog\'s collar or harness.' },
      { step: '2', title: 'Adjust Tape Length', desc: 'Hold handle. Let the dog walk, letting tape extend, and press the brake to hold.' },
      { step: '3', title: 'Lock Retraction', desc: 'Slide lock switch forward to secure leash length, keeping pet at a safe distance.' }
    ];
    features = [
      { label: '5m Nylon Tape', icon: '📏' },
      { label: 'Comfort Grip', icon: '🖐️' },
      { label: 'Tangle-Free Guide', icon: '🌀' },
      { label: 'Swivel Steel Hook', icon: '⚓' }
    ];
    reviews = [
      { name: 'Vicky Kapoor', rating: 5, date: 'June 12, 2026', text: 'Leash retracts very smoothly. The brake button holds immediately. 5m length is perfect for park walks.', verified: true },
      { name: 'Sanjay Gupta', rating: 4.8, date: 'June 08, 2026', text: 'Strong grip. Holds my active lab puppy safely. Sturdy nylon tape that doesn\'t snap.', verified: true }
    ];
  }
  // Group 20: Body Massagers & Menstrual Heating Pads
  else if ((t.includes('massage') || t.includes('massager') || t.includes('cramp') || t.includes('heating pad') || t.includes('menstrual')) && !t.includes('pet') && !t.includes('cat') && !t.includes('dog')) {
    benefits = [
      { title: 'Instant Muscle Relief', desc: 'Uses targeted EMS pulses or deep rotary kneading to soothe sore muscles, back and leg pain.', icon: '💆' },
      { title: 'Graphene Fast Heat', desc: 'Heats up in 3-5 seconds to soothe period cramps, lower back stiffness, or belly pain.', icon: '🔥' },
      { title: 'Multiple Modes & Levels', desc: 'Customize recovery with adjustable massage modes and temperature heat levels.', icon: '⚙️' },
      { title: 'Wireless Rechargeable', desc: 'Equipped with a long-lasting rechargeable battery. Enjoy cordless massage anywhere.', icon: '🔋' }
    ];
    howItWorks = [
      { step: '1', title: 'Position Massager', desc: 'Wrap the heating belt around your waist, or place the EMS massager pad under feet or muscles.' },
      { step: '2', title: 'Set Heat & Speed', desc: 'Turn on the power button, choose your desired massage mode and heat temperature level.' },
      { step: '3', title: 'Relax & Recover', desc: 'Sit back or lie down comfortably. The massager relieves cramps and tension in 15 minutes.' }
    ];
    features = [
      { label: 'Fast Heat Tech', icon: '🔥' },
      { label: 'EMS Pulse Modes', icon: '⚡' },
      { label: 'Wireless Design', icon: '🔋' },
      { label: 'Auto Shutoff Timer', icon: '⏱️' }
    ];
    reviews = [
      { name: 'Priya Sharma', rating: 5, date: 'June 10, 2026', text: 'Life saver during my periods! The heating pad warms up instantly and the vibration massage is very soothing.', verified: true },
      { name: 'Karan Johar', rating: 5, date: 'June 12, 2026', text: 'EMS foot massager has helped relieve my calf muscle pain. Very relaxing after a long day of standing.', verified: true },
      { name: 'Manoj Bajpayee', rating: 4.8, date: 'June 04, 2026', text: 'Very high-quality body massager with multiple attachments. Relieves shoulder pain instantly.', verified: true }
    ];
  }
  // Group 21: Tanning Skin Remover / Bath Scrubber
  else if (t.includes('tanning dead') || t.includes('scrubber') || t.includes('dead skin')) {
    benefits = [
      { title: 'Deep Exfoliation', desc: 'Gently scrubs away dead skin cells, tanning, dirt, and impurities from skin pores.', icon: '🧼' },
      { title: 'Soft Silicone Bristles', desc: 'Flexible, high-density silicone bristles are gentle on skin while deep cleaning.', icon: '🖐️' },
      { title: 'Tan Removal Action', desc: 'Stimulates blood circulation to restore natural skin glow and clear out tan lines.', icon: '✨' },
      { title: 'Hanging Loop Storage', desc: 'Dries quickly, preventing bacterial accumulation. Hygienic and long-lasting.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Wet Skin & Brush', desc: 'Apply warm water and your favorite body wash to your skin and the scrubber surface.' },
      { step: '2', title: 'Scrub in Circles', desc: 'Gently scrub your arms, legs, back, and feet in circular motions to lather and exfoliate.' },
      { step: '3', title: 'Rinse and Dry', desc: 'Rinse off foam, pat dry your skin, and hang the silicone scrubber by its loop to dry.' }
    ];
    features = [
      { label: 'Exfoliation Pad', icon: '🧼' },
      { label: 'Soft Silicone', icon: '🧸' },
      { label: 'Tan Remover', icon: '✨' },
      { label: 'Drying Loop', icon: '📐' }
    ];
    reviews = [
      { name: 'Tanvi Dave', rating: 5, date: 'June 12, 2026', text: 'Best scrubber for shower! The bristles are soft and clean the skin thoroughly without scratches. Exfoliates very well.', verified: true },
      { name: 'Ritu Sen', rating: 4.8, date: 'May 31, 2026', text: 'Removed tanning on my arms after a few uses. Very comfortable to use and easy to dry. Hygienic material.', verified: true }
    ];
  }
  // Group 22: Pet Knot Toy Ball
  else if (t.includes('knot ball') || t.includes('playing rubber')) {
    benefits = [
      { title: 'Elastic Durable Rubber', desc: 'Made from premium, non-toxic food-grade rubber that withstands heavy dog chewing.', icon: '🛡️' },
      { title: 'Teeth & Gum Cleaner', desc: 'Interwoven rubber strands rub against teeth to remove plaque and massage gums.', icon: '🪥' },
      { title: 'Bright Multicolor Look', desc: 'Highly visible colors keep dogs and cats excited and engaged in fetching games.', icon: '🎨' },
      { title: 'Reduces Anxiety & Boredom', desc: 'Gives active pets a safe outlet for chewing, reducing destructive furniture bites.', icon: '🏠' }
    ];
    howItWorks = [
      { step: '1', title: 'Toss for Play', desc: 'Toss the colorful rubber knot ball across the room or lawn for your pet to chase.' },
      { step: '2', title: 'Let Them Chew', desc: 'Let your dog chew on the elastic rubber loops. Helps soothe teething puppies.', icon: '🐕' },
      { step: '3', title: 'Rinse with Water', desc: 'Rinse with soap and water to wash away dirt and pet saliva after outdoor play.' }
    ];
    features = [
      { label: 'Non-Toxic Rubber', icon: '♻️' },
      { label: 'Gum Massage', icon: '🦷' },
      { label: 'High Elasticity', icon: '⚡' },
      { label: 'Multicolor Pattern', icon: '🎨' }
    ];
    reviews = [
      { name: 'Harish Patel', rating: 5, date: 'June 12, 2026', text: 'My puppy loves this knot ball! He chews on it all day and it has not broken. Very strong rubber material.', verified: true },
      { name: 'Shalini Verma', rating: 4.9, date: 'June 08, 2026', text: 'Great toy for energetic dogs. Keeps them busy chewing safely. Easy to clean under water.', verified: true }
    ];
  }
  // Group 23: Steamer Iron
  else if (t.includes('steamer iron') || t.includes('travel steamer')) {
    benefits = [
      { title: 'Handheld Steam Action', desc: 'Continuous hot steam removes tough wrinkles from linen, cotton, and silk shirts.', icon: '💨' },
      { title: '30s Fast Heating', desc: 'Heats up to maximum temperature in just 30 seconds. Perfect for quick morning prep.', icon: '⏱️' },
      { title: 'Vertical/Horizontal Ironing', desc: 'Allows you to steam hanging clothes vertically or iron flat horizontally on table.', icon: '👔' },
      { title: 'Compact Travel Size', desc: 'Lightweight folding design fits comfortably in suitcases and backpacks.', icon: '📐' }
    ];
    howItWorks = [
      { step: '1', title: 'Fill Water Tank', desc: 'Pour clean water into the detachable tank and secure the rubber stopper.' },
      { step: '2', title: 'Plug & Wait', desc: 'Connect to power. Wait 30 seconds for the indicator light to show it is ready.' },
      { step: '3', title: 'Press for Steam', desc: 'Glide over fabrics while holding the steam trigger button. Wrinkles disappear.' }
    ];
    features = [
      { label: 'Soleplate Heat', icon: '🔥' },
      { label: 'Detachable Tank', icon: '💧' },
      { label: 'Folding Handle', icon: '📐' },
      { label: 'Overheat Safety Shutoff', icon: '🛡️' }
    ];
    reviews = [
      { name: 'Kiran S.', rating: 5, date: 'June 12, 2026', text: 'Perfect travel companion. Heats up fast and gets wrinkles out of linen clothes easily.', verified: true },
      { name: 'Arjun Mehta', rating: 4.7, date: 'June 08, 2026', text: 'Very convenient to use. Holds enough water to steam 2 shirts fully. Excellent results.', verified: true }
    ];
  }
  // Group 24: Device Crevice Cleaners & Multi-Purpose Brushes (crevice/electronic/air duster/makeup brush)
  else if (t.includes('crevice cleaning') || t.includes('cleaning kit') || t.includes('makeup brush cleaning') || t.includes('makeup brush cleaner') || t.includes('rotary cleaning') || t.includes('air duster') || t.includes('cleaner brush')) {
    benefits = [
      { title: 'Reach Angled Corners', desc: 'Specially designed bristles and tips fit grout lines, sliding window tracks, and crevices.', icon: '📐' },
      { title: 'High-Torque Cleaning', desc: 'Rotary motorized actions or high-velocity air blows wash grime, wax, and dust effortlessly.', icon: '⚡' },
      { title: 'Multi-Surface Detailing', desc: 'Ideal for bathrooms, kitchen stovetops, cosmetics brush hygiene, and laptops/devices.', icon: '✨' },
      { title: 'Rechargeable & Portable', desc: 'USB cordless design allows you to clean keyboards, window tracks, or bathroom sinks easily.', icon: '🔋' }
    ];
    howItWorks = [
      { step: '1', title: 'Attach Brush Head', desc: 'Choose the correct crevice tool, rotary brush, electronic sponge, or fill duster.' },
      { step: '2', title: 'Power and Scrub', desc: 'Turn on power (for electric tools) or scrub firmly along grout tracks and keyboard gaps.' },
      { step: '3', title: 'Wipe and Clean', desc: 'Blow away dust, rinse makeup brush fibers, or wipe away tiles residue with a cloth.' }
    ];
    features = [
      { label: 'Crevice Bristles', icon: '📐' },
      { label: 'Electric Rotary / Blow', icon: '⚡' },
      { label: 'Rechargeable USB', icon: '🔋' },
      { label: 'Multi-Utility Heads', icon: '📦' }
    ];
    reviews = [
      { name: 'Rajesh Kumar', rating: 5, date: 'June 11, 2026', text: 'Cleaned all the black scale in my bathroom tiles easily. The rotary action makes it effortless.', verified: true },
      { name: 'Sneha Patel', rating: 5, date: 'June 08, 2026', text: 'My makeup brushes are clean and dry in 2 minutes! Spin dryer is extremely useful.', verified: true },
      { name: 'Deepak Joshi', rating: 4.7, date: 'June 02, 2026', text: 'Air duster is very powerful for cleaning PC cabinet dust and keyboard keys.', verified: true }
    ];
  }
  // Group 25: Mites/Dust Suction Cleaner
  else if (t.includes('mites remover') || t.includes('dust suction')) {
    benefits = [
      { title: 'Deep Mite Extraction', desc: 'High-frequency vibration pads beat out hidden dust mites, pet dander, and allergens.', icon: '👾' },
      { title: 'Powerful Suction Force', desc: 'Industrial-strength motor extracts deeply embedded particles from pillows, mattresses.', icon: '🌀' },
      { title: 'Double HEPA Filtration', desc: 'High-efficiency filter locks in microscopic allergens, releasing fresh allergen-free air.', icon: '🛡️' },
      { title: 'Wireless Rechargeable', desc: 'Cordless, lightweight body lets you clean beds, sofas, curtains, and car seats easily.', icon: '🔋' }
    ];
    howItWorks = [
      { step: '1', title: 'Power On Device', desc: 'Ensure the dust collector is empty and turn on the wireless switch.' },
      { step: '2', title: 'Glide Over Bedding', desc: 'Press the flat base against the mattress or sofa. Glide slowly across the fabric.' },
      { step: '3', title: 'Empty HEPA Cup', desc: 'Twist open the dust cup and wash the filter screen under running tap water.' }
    ];
    features = [
      { label: 'Mite Beating Pads', icon: '⚡' },
      { label: 'HEPA Filter Cup', icon: '🛡️' },
      { label: 'Wireless Power', icon: '🔋' },
      { label: 'Wide Suction Mouth', icon: '📐' }
    ];
    reviews = [
      { name: 'Shalini Verma', rating: 5, date: 'June 12, 2026', text: 'Shocked to see how much dust it extracted from our clean mattress! Perfect for dust allergy patients. Very easy to clean.', verified: true },
      { name: 'Vikram Shah', rating: 4.8, date: 'June 06, 2026', text: 'Lightweight cordless design. Perfect for cleaning sofa cushions and pillows. Suction is very powerful.', verified: true }
    ];
  }
  // Group 26: Mosquito Killer Lamp / Bug Zapper
  else if (t.includes('mosquito') || t.includes('bug zapper') || t.includes('insect killer')) {
    benefits = [
      { title: 'Eco-Friendly UV Trap', desc: 'Uses a photocatalytic UV light source to attract mosquitoes without chemicals or smoke.', icon: '🦟' },
      { title: 'Quiet Suction Fan', desc: 'Powerful internal vortex fan sucks mosquitoes down silently into the collector box.', icon: '🔇' },
      { title: 'USB Powered & Portable', desc: 'Plug into any power bank, laptop, or wall charger. Ideal for camping or bedroom.', icon: '🔋' },
      { title: 'Safe Safety Grid', desc: 'Built-in protective outer grid protects fingers and curious pets from electric grids.', icon: '🛡️' }
    ];
    howItWorks = [
      { step: '1', title: 'Plug & Power', desc: 'Connect the bug zapper to a USB power source and turn on the light switch.' },
      { step: '2', title: 'Trap Mosquitoes', desc: 'Place in a dark room. Mosquitoes are attracted to the UV light and zapped or sucked in.' },
      { step: '3', title: 'Empty Collector', desc: 'Twist the bottom cover to remove and empty the collected insects into the bin.' }
    ];
    features = [
      { label: 'Photocatalytic Light', icon: '💡' },
      { label: 'Quiet Cyclone Fan', icon: '🌀' },
      { label: 'Detachable Box', icon: '🧼' },
      { label: 'Chemical-Free', icon: '♻️' }
    ];
    reviews = [
      { name: 'Ankit Mehta', rating: 5, date: 'June 10, 2026', text: 'Quiet fan, catches lots of mosquitoes at night. Safe to keep in kids room as there is no chemical smell.', verified: true },
      { name: 'Meera Nair', rating: 4.7, date: 'June 05, 2026', text: 'Very effective zapper. USB power means I can run it using a powerbank while sitting in the balcony.', verified: true }
    ];
  }
  // Group 27: Interactive Cat Toy Ball
  else if (t.includes('cat toy ball') || t.includes('self-rotating electric ball')) {
    benefits = [
      { title: '360° Smart Rotation', desc: 'Rolls automatically on floors, changing directions when hitting furniture or obstacles.', icon: '⚽' },
      { title: 'Engaging LED Light', desc: 'Built-in soft LED red light excites cats and triggers their natural hunting instinct.', icon: '🔴' },
      { title: 'USB Rechargeable', desc: 'Equipped with a rechargeable battery. Charge for 1 hour to enjoy hours of play.', icon: '🔋' },
      { title: 'Durable Pet-Safe Shell', desc: 'Made from high-strength, non-toxic ABS plastic that withstands pet scratching and biting.', icon: '🛡️' }
    ];
    howItWorks = [
      { step: '1', title: 'Power On Ball', desc: 'Press the power button once. The LED light will glow and the ball will start rolling.' },
      { step: '2', title: 'Place on Floor', desc: 'Set the ball down on a flat tile, marble, or wooden floor. Watch your cat play.' },
      { step: '3', title: 'Auto Standby', desc: 'The ball goes into power-saving standby mode automatically after 40 minutes of play.' }
    ];
    features = [
      { label: '360° Self-Rotation', icon: '⚽' },
      { label: 'Red LED Light', icon: '🔴' },
      { label: 'Obstacle Sensor', icon: '👁️' },
      { label: 'USB Rechargeable', icon: '🔋' }
    ];
    reviews = [
      { name: 'Neha Roy', rating: 5, date: 'June 08, 2026', text: 'My kitten is absolutely obsessed with this rolling ball! It avoids furniture automatically and rolls for a long time.', verified: true },
      { name: 'Sunita Patel', rating: 4.8, date: 'June 05, 2026', text: 'Very quiet motor. The LED light keeps the cat engaged. Great purchase for lazy house cats.', verified: true }
    ];
  }
  // Group 28: Pet / Cat Massager (Electric)
  else if (t.includes('cat massager') || t.includes('pet, cat massager')) {
    benefits = [
      { title: 'Rotary Grooming Nodes', desc: 'Features 4 rotary massage claws with 76 soft silicone nodes to relax pets.', icon: '🐈' },
      { title: 'Reduces Pet Anxiety', desc: 'Calms anxious cats and dogs by mimicking soothing licking/grooming sensations.', icon: '💆' },
      { title: 'IPX7 Waterproof body', desc: '100% waterproof. Can be used on dry fur or inside showers to scrub away shampoo.', icon: '💧' },
      { title: 'Wireless Rechargeable', desc: 'Cordless charging dock makes massager easy to hold, with no dangling wires.', icon: '🔋' }
    ];
    howItWorks = [
      { step: '1', title: 'Select Speed Mode', desc: 'Turn on the massager and choose either slow or fast rotary speed rotation.' },
      { step: '2', title: 'Gently Massage Pet', desc: 'Place the silicone claws gently on your cat/dog\'s neck, head, or back.' },
      { step: '3', title: 'Clean Claws', desc: 'Detach the soft silicone heads and wash under running tap water to remove loose hair.' }
    ];
    features = [
      { label: 'Rotary Claws', icon: '🐈' },
      { label: '76 Silicone Nodes', icon: '🧸' },
      { label: 'IPX7 Waterproof', icon: '💧' },
      { label: 'USB Charging Dock', icon: '🔋' }
    ];
    reviews = [
      { name: 'Aisha Sen', rating: 5, date: 'June 12, 2026', text: 'My cat purrs like crazy whenever I use this massager on her head! The silicone tips are soft and don\'t pull hair.', verified: true },
      { name: 'Sunita Mehta', rating: 4.8, date: 'June 08, 2026', text: 'Very relaxing for pets. My dog also enjoys his back massage. Sturdy build. Easy to clean under water.', verified: true }
    ];
  }
  // Group 29: Stainless Steel Foldable Clothes Hangers
  else if (t.includes('foldable hangers') || t.includes('clothes hanging')) {
    benefits = [
      { title: 'Saves 80% Closet Space', desc: 'Hang up to 5 trousers or shirts on a single multi-layer clothes hanger frame.', icon: '👔' },
      { title: 'Heavy-Duty Steel', desc: 'Constructed from thick, rustproof stainless steel that won\'t bend under winter coats.', icon: '🛡️' },
      { title: 'Non-Slip Rubber Tips', desc: 'Each hanger arm features non-slip rubber caps to prevent fabrics from sliding off.', icon: '🔒' },
      { title: '360° Swivel Hooks', desc: 'Double swivel hook design lets you hang it vertically (space-saving) or horizontally.', icon: '🌀' }
    ];
    howItWorks = [
      { step: '1', title: 'Place Clothes on Rods', desc: 'Slide trousers, skirts, or shirts onto the five individual steel hanger rods.' },
      { step: '2', title: 'Switch to Vertical Mode', desc: 'Release one hook from your closet rod, letting the hanger frame swing down vertically.' },
      { step: '3', title: 'Organize Closet Space', desc: 'Stack clothes neatly, freeing up massive wardrobe storage space in seconds.' }
    ];
    features = [
      { label: '5-in-1 Space Saver', icon: '👔' },
      { label: 'Stainless Steel', icon: '🛡️' },
      { label: '360° Swivel Hook', icon: '🌀' },
      { label: 'Non-Slip Caps', icon: '🔒' }
    ];
    reviews = [
      { name: 'Tanvi Dave', rating: 5, date: 'June 12, 2026', text: 'Organized my messy wardrobe completely! I can hang 5 trousers in the space of one. Sturdy steel hooks.', verified: true },
      { name: 'Ritu Sen', rating: 4.8, date: 'May 31, 2026', text: 'Very useful product. Clothes do not slide off due to the rubber caps. Space-saving wardrobe organizer.', verified: true }
    ];
  }
  // Group 30: Pet Grooming Gloves
  else if (t.includes('removal gloves') || t.includes('grooming glove')) {
    benefits = [
      { title: '180+ Silicone Grooming Tips', desc: 'Durable silicone tips sweep away loose undercoat fur without scratching pet skin.', icon: '🧤' },
      { title: 'Relaxing Skin Massage', desc: 'Stroke pet body to stimulate natural skin oils, leaving their coat shiny and healthy.', icon: '💆' },
      { title: 'Easy Hair Sheet Peel', desc: 'Collected pet fur sticks to the silicone face, allowing you to peel it off in a sheet.', icon: '✨' },
      { title: 'Velcro Wrist Strap', desc: 'Breathable mesh glove has an adjustable velcro wrist strap that fits all hand sizes.', icon: '🔒' }
    ];
    howItWorks = [
      { step: '1', title: 'Wear Glove & Strap', desc: 'Slip your hand into the glove and tighten the velcro strap around your wrist.' },
      { step: '2', title: 'Stroke Pet Body', desc: 'Gently stroke your cat or dog in the direction of hair growth to pick up loose fur.' },
      { step: '3', title: 'Peel Collected Hair', desc: 'Once the glove is covered in fur, peel the hair sheet cleanly off the silicone face.' }
    ];
    features = [
      { label: '180+ Silicone Tips', icon: '🧤' },
      { label: 'Velcro Wristband', icon: '🔒' },
      { label: 'Breathable Mesh', icon: '🌬️' },
      { label: 'Tan & Gray Colors', icon: '🎨' }
    ];
    reviews = [
      { name: 'Aarti V.', rating: 5, date: 'June 12, 2026', text: 'Cat loves being pet with these gloves. Loose hair sticks to the glove and peels off easily in one sheet.', verified: true },
      { name: 'Pooja Iyer', rating: 4.9, date: 'June 08, 2026', text: 'Cleans undercoat hair very well. Safe and comfortable grooming. No more floating fur around the sofa.', verified: true }
    ];
  }
  // Group 31: Car Utility & Repair
  else if (t.includes('scratch') || t.includes('wax') || t.includes('door protection') || t.includes('injector') || t.includes('fuel')) {
    benefits = [
      { title: 'Restore Paint & Engine', desc: 'Erase paint scratches, remove carbon deposits, or protect car door edges from chips.', icon: '🚗' },
      { title: 'Simple DIY Application', desc: 'Easy at-home use saves you expensive mechanic and paint workshop garage bills.', icon: '🔧' },
      { title: 'Long-Lasting Protection', desc: 'Leaves a durable protective wax coat, clean fuel cycle, or thick carbon fiber guard.', icon: '🛡️' },
      { title: 'Premium Material Quality', desc: 'High-purity wax compounds, premium detergents, or thick waterproof adhesive strips.', icon: '✨' }
    ];
    howItWorks = [
      { step: '1', title: 'Clean the Surface / Tank', desc: 'Clean car door edge, wipe scratch area, or ensure fuel level is near empty.' },
      { step: '2', title: 'Apply / Rub / Pour', desc: 'Rub scratch wax with sponge in circles, stick strip on door edge, or pour injector in tank.' },
      { step: '3', title: 'Shine & Protect', desc: 'Wipe off wax to reveal glossy paint, or run vehicle engine to flush fuel cycle.' }
    ];
    features = [
      { label: 'Universal Fit / Use', icon: '🚗' },
      { label: 'High Durability', icon: '🛡️' },
      { label: 'Paint & Motor Safe', icon: '✨' },
      { label: 'Quick Restore', icon: '⚡' }
    ];
    reviews = [
      { name: 'Vivek Singh', rating: 5, date: 'June 12, 2026', text: 'Excellent product! Removed all the light swirls and nail scratch marks around my door handles easily. Very satisfied.', verified: true },
      { name: 'Rahul Y.', rating: 4.8, date: 'June 08, 2026', text: 'The adhesive on the door edge protection strip is extremely strong. Clean look. Saved my door paint.', verified: true },
      { name: 'Sameer Varma', rating: 4.7, date: 'June 01, 2026', text: 'Fuel injector cleaner smoothed out the engine idling on my bike. Noticeable increase in mileage.', verified: true }
    ];
  }
  // Group 32: Neck Face Firming Beauty Device
  else if (t.includes('neck face') || t.includes('wrinkle removal') || t.includes('skin lift device') || t.includes('beauty device')) {
    benefits = [
      { title: 'Double Chin Reducer', desc: 'High frequency micro-vibrations lift and tighten loose skin, reducing double chin look.', icon: '💆' },
      { title: 'LED Light Therapy', desc: '3 light modes (Red, Blue, Green) boost collagen, calm acne, and smooth wrinkles.', icon: '💡' },
      { title: 'Deep Absorption', desc: 'Slight thermal heating improves serum and facial cream absorption into skin layers.', icon: '🧴' },
      { title: 'Ergonomic Dolphin Tail', desc: 'Contoured head fits perfectly along the curves of your neck and jawline.', icon: '🐬' }
    ];
    howItWorks = [
      { step: '1', title: 'Prep Skin', desc: 'Apply face serum, gel, or facial cream onto clean neck and face skin.' },
      { step: '2', title: 'Select LED Mode', desc: 'Turn on device, select LED light therapy mode, and adjust vibration speed.' },
      { step: '3', title: 'Massage Upwards', desc: 'Glide the dolphin tail head gently in an upward direction from neck collar to jaw.' }
    ];
    features = [
      { label: '3 LED Modes', icon: '💡' },
      { label: 'Microcurrent', icon: '⚡' },
      { label: 'Rechargeable USB', icon: '🔋' },
      { label: '45°C Thermal Warmth', icon: '🔥' }
    ];
    reviews = [
      { name: 'Nidhi P.', rating: 5, date: 'June 12, 2026', text: 'Noticeable reduction in double chin puffiness after 2 weeks of daily serum massage. Neck feels tighter.', verified: true },
      { name: 'Meera Nair', rating: 4.8, date: 'June 08, 2026', text: 'Very relaxing massage. The warm setting feels like a professional facial treatment at home.', verified: true }
    ];
  }
  // Group 33: General Fallback
  else {
    const indianNames = [
      ['Arjun Mehta', 'Meera Nair', 'Prakash Patel'],
      ['Vikram Shah', 'Shalini Verma', 'Deepak Joshi'],
      ['Sanjay Gupta', 'Aisha Sen', 'Harish Kumar'],
      ['Karan Malhotra', 'Preeti Sharma', 'Rohan Das'],
      ['Kabir Kapoor', 'Aditi Rao', 'Vivek Singh']
    ];
    const namesGroup = indianNames[idNum % indianNames.length];
    benefits = [
      { title: `Smart ${firstWord} Fix`, desc: `The innovative layout of this ${firstWord} solves your annoying daily household problems.`, icon: '✨' },
      { title: 'Premium Material Build', desc: 'Crafted from heavy-duty, drop-proof polymer or reinforced metal for daily wear.', icon: '🛡️' },
      { title: 'Compact & Space-Saving', desc: 'Organizes clutter neatly, freeing up countertops, cabinets, or shelves.', icon: '📐' },
      { title: '100% Cash on Delivery', desc: 'Risk-free shopping. Pay cash directly at your door when the package arrives.', icon: '💰' }
    ];
    howItWorks = [
      { step: '1', title: `Prepare ${firstWord}`, desc: `Unpack the ${cleanTitle} carefully and wipe it with a clean cloth before setting up.` },
      { step: '2', title: 'Place in Position', desc: 'Mount on tiles using the sticky pad, or place on a flat shelf or sink ledger.' },
      { step: '3', title: 'Begin Using Daily', desc: `Enjoy a cleaner, more efficient household with your new ${firstWord} helper!` }
    ];
    features = [
      { label: 'Impact Proof', icon: '🛡️' },
      { label: 'Modern Fit', icon: '✨' },
      { label: 'Rinse-to-Clean', icon: '🧼' },
      { label: 'Safe Non-Toxic', icon: '♻️' }
    ];
    reviews = [
      { name: namesGroup[0], rating: 5, date: 'June 12, 2026', text: `Excellent utility product! Very useful in our home. High-quality construction.`, verified: true },
      { name: namesGroup[1], rating: 5, date: 'June 08, 2026', text: `Super practical. Solves the issue perfectly. Keeps everything clean and organized.`, verified: true },
      { name: namesGroup[2], rating: 4.6, date: 'June 01, 2026', text: `Satisfied with the product. True to description. Delivery was very fast by ${STORE_NAME}.`, verified: true }
    ];
  }

  return { benefits, howItWorks, features, reviews };
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
