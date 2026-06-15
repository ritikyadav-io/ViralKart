import React from 'react';
import { STORE_NAME } from '../utils/shopify';

const INFO_PAGES = {
  'about-us': {
    title: 'About ViralKart',
    content: [
      { type: 'p', text: 'ViralKart is a brand by NorthLane India — a modern Indian D2C company focused on bringing smart, practical, and affordable home solutions to every household across India.' },
      { type: 'p', text: 'Founded with the vision to solve everyday home problems, we curate and design products that save time, reduce effort, and make life at home easier. From bathroom organizers to kitchen essentials, every product in our catalog has been carefully selected for quality, design, and real-world utility.' },
      { type: 'heading', text: 'Our Mission' },
      { type: 'p', text: 'To make premium quality home essentials accessible and affordable for every Indian household. We believe a well-organized home leads to a happier, healthier life.' },
      { type: 'heading', text: 'Why Choose ViralKart?' },
      { type: 'list', items: [
        'Curated selection of 100+ practical home products',
        'Direct-to-consumer pricing — no middlemen markup',
        'Cash on Delivery available across India',
        'Free shipping on orders above ₹999',
        '7-day hassle-free return policy',
        'Dedicated WhatsApp support for all orders'
      ]},
      { type: 'heading', text: 'Our Promise' },
      { type: 'p', text: 'Every product we sell goes through a quality check before shipping. We partner with trusted logistics networks like BlueDart, DTDC, and Delhivery to ensure your order reaches you safely within 2-5 business days.' },
      { type: 'p', text: 'Join 10,000+ happy customers who trust ViralKart for their home essentials.' }
    ]
  },
  'contact-us': {
    title: 'Contact Us',
    content: [
      { type: 'p', text: 'We would love to hear from you! Whether you have a question about your order, need product recommendations, or just want to say hello — reach out to us anytime.' },
      { type: 'heading', text: 'Customer Support' },
      { type: 'list', items: [
        '📧 Email: support@viralkart.in',
        '📱 WhatsApp: +91-9876543210 (10 AM - 7 PM IST)',
        '📍 Office: NorthLane India, Sector 62, Noida, UP 201309'
      ]},
      { type: 'heading', text: 'Response Time' },
      { type: 'p', text: 'We typically respond within 2-4 hours during business hours (Monday to Saturday, 10 AM to 7 PM IST). WhatsApp queries are prioritized for fastest response.' },
      { type: 'heading', text: 'For Business Inquiries' },
      { type: 'p', text: 'Interested in bulk orders, partnerships, or collaborations? Please email us at business@viralkart.in with your requirements and we will get back to you within 24 hours.' }
    ]
  },
  'shipping-policy': {
    title: 'Shipping Policy',
    content: [
      { type: 'p', text: 'We aim to dispatch all orders within 24 hours of confirmation (excluding Sundays and public holidays).' },
      { type: 'heading', text: 'Delivery Timeline' },
      { type: 'list', items: [
        'Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata): 2-3 business days',
        'Tier 2 Cities (Jaipur, Lucknow, Ahmedabad, Pune, etc.): 3-4 business days',
        'Rest of India: 4-6 business days',
        'Remote/hilly areas: 5-8 business days'
      ]},
      { type: 'heading', text: 'Shipping Charges' },
      { type: 'list', items: [
        'Orders above ₹999: FREE shipping across India',
        'Orders below ₹999: Flat ₹49 shipping fee',
        'Cash on Delivery: Available at no extra charge'
      ]},
      { type: 'heading', text: 'Order Tracking' },
      { type: 'p', text: 'Once your order is shipped, you will receive a tracking link via SMS, WhatsApp, and email. You can use this link to track your package in real-time. For any shipping queries, message us on WhatsApp.' },
      { type: 'heading', text: 'Logistics Partners' },
      { type: 'p', text: 'We ship through premium logistics partners including BlueDart, DTDC, Delhivery, and Ekart to ensure safe and timely delivery.' }
    ]
  },
  'return-policy': {
    title: 'Return & Refund Policy',
    content: [
      { type: 'p', text: 'Your satisfaction is our priority. If you are not happy with your purchase, we offer a straightforward return and refund process.' },
      { type: 'heading', text: 'Return Window' },
      { type: 'p', text: 'You can initiate a return within 7 days of receiving your order. Products must be unused, in their original packaging, and in the same condition as received.' },
      { type: 'heading', text: 'How to Initiate a Return' },
      { type: 'list', items: [
        'Message us on WhatsApp at +91-9876543210 with your order number',
        'Or email support@viralkart.in with subject line "Return Request - [Order Number]"',
        'Our team will review and approve the request within 24 hours',
        'A reverse pickup will be scheduled at your doorstep'
      ]},
      { type: 'heading', text: 'Refund Process' },
      { type: 'list', items: [
        'Refunds are processed within 3-5 business days after receiving the returned product',
        'Prepaid orders: Refund to original payment method',
        'COD orders: Refund via UPI or bank transfer',
        'Damaged/defective items: Full refund including return shipping'
      ]},
      { type: 'heading', text: 'Non-Returnable Items' },
      { type: 'p', text: 'Items that have been used, washed, altered, or are missing original packaging/tags cannot be returned. Hygiene products (toothbrush holders, personal care items) are non-returnable once opened for safety reasons.' }
    ]
  },
  'track-order': {
    title: 'Track Your Order',
    content: [
      { type: 'p', text: 'Once your order is shipped, you will receive a tracking link via SMS and WhatsApp. Use that link to check the real-time status of your delivery.' },
      { type: 'heading', text: 'How to Track' },
      { type: 'list', items: [
        'Check your SMS or WhatsApp for the tracking link sent after dispatch',
        'Click the link to see live delivery status on the courier partner website',
        'Alternatively, message us on WhatsApp with your order number and we will share the status'
      ]},
      { type: 'heading', text: 'Order Not Received?' },
      { type: 'p', text: 'If your order has not arrived within the expected delivery window, please reach out to us immediately on WhatsApp at +91-9876543210 or email support@viralkart.in. We will investigate and resolve the issue within 24 hours.' },
      { type: 'heading', text: 'Delivery Attempts' },
      { type: 'p', text: 'Our courier partners make up to 3 delivery attempts. If the delivery is unsuccessful, the package will be returned to us and we will contact you to arrange redelivery or a refund.' }
    ]
  },
  'support-center': {
    title: 'Support Center',
    content: [
      { type: 'p', text: 'Welcome to ViralKart Support. We are here to help you with anything related to your orders, products, or account.' },
      { type: 'heading', text: 'Frequently Needed Help' },
      { type: 'list', items: [
        '📦 Where is my order? — Check your SMS/WhatsApp for tracking link, or message us with your order number',
        '🔄 How do I return a product? — Initiate within 7 days via WhatsApp or email',
        '💰 When will I get my refund? — Refunds are processed within 3-5 business days after return pickup',
        '🛒 Can I modify my order? — Contact us within 2 hours of placing the order',
        '📋 Can I get an invoice? — Yes, email us your order number and we will send a GST invoice'
      ]},
      { type: 'heading', text: 'Contact Channels' },
      { type: 'list', items: [
        'WhatsApp (Fastest): +91-9876543210',
        'Email: support@viralkart.in',
        'Hours: Monday to Saturday, 10 AM - 7 PM IST'
      ]},
      { type: 'heading', text: 'Bulk Orders & B2B' },
      { type: 'p', text: 'For wholesale or bulk order inquiries, please contact business@viralkart.in. Minimum order quantity for bulk pricing is 50 units per product.' }
    ]
  },
  'uv-toothbrush-sanitizer-bathroom-hygiene-guide': {
    title: 'Why UV Toothbrush Sanitizers Are a Bathroom Must-Have',
    content: [
      { type: 'p', text: 'Daily brushing is the cornerstone of dental hygiene, but have you ever stopped to think about where your toothbrush lives? Bathrooms are damp, warm environments—the perfect breeding ground for bacteria, mold, and viruses. Every time a toilet is flushed, microscopic particles (called toilet plume) are launched into the air and can settle on open toothbrushes.' },
      { type: 'heading', text: 'The Danger of Exposed Toothbrushes' },
      { type: 'p', text: 'Studies have shown that an uncovered toothbrush can harbor millions of microorganisms, including E. coli, Staphylococci, and Candida. Standard rinsing with tap water does not kill these bacteria; it simply leaves the brush wet, inviting further bacterial growth before you use it again.' },
      { type: 'heading', text: 'How UV-C Light Saves the Day' },
      { type: 'p', text: 'Medical-grade UV-C light (ultraviolet light with a wavelength between 200 and 280 nanometers) works by penetrating the cell walls of bacteria and viruses, destroying their DNA and RNA structures. This makes it impossible for them to replicate or cause infection.' },
      { type: 'list', items: [
        'Kills 99.9% of bacteria and viruses in just 4-5 minutes.',
        'Chemical-free and completely safe for daily use.',
        'Keeps toothbrush bristles dry and clean between uses.',
        'Reduces the risk of oral infections, gum diseases, and bad breath.'
      ]},
      { type: 'heading', text: 'Organization and Squeezing Benefits' },
      { type: 'p', text: 'A premium toothbrush holder also keeps your countertops clean by storing up to 4 toothbrushes wall-mounted and out of the splash zone. Many smart holders come with built-in automatic toothpaste dispensers, which use vacuum pumps to squeeze out the perfect amount of paste, preventing waste and eliminating messy tubes. Upgrade your bathroom hygiene today with a UV toothbrush sanitizer!' }
    ]
  },
  'electric-spin-scrubber-home-cleaning-hacks': {
    title: '5 Cleaning Hacks to Save Hours Using an Electric Spin Scrubber',
    content: [
      { type: 'p', text: 'Cleaning the bathroom or kitchen is often considered one of the most exhausting household chores. Scrubbing grout lines, tile walls, and soap scum by hand requires significant physical effort and can cause back and wrist strain. An electric spin scrubber changes all of that by doing the hard work for you with high-speed rotation.' },
      { type: 'heading', text: 'Hack 1: Blast Grout Lines with a V-Shape Cone Brush' },
      { type: 'p', text: 'Grout lines accumulate black mold, mildew, and dirt over time. Instead of using a manual toothbrush and scrubbing for hours, attach the pointed cone brush. Spray your favorite grout cleaner, let it sit for 5 minutes, and guide the spin scrubber along the lines. The high torque lifts stain particles effortlessly.' },
      { type: 'heading', text: 'Hack 2: Melt Soap Scum on Tub & Glass' },
      { type: 'p', text: 'Shower glass and bathtubs get covered in a tough film of mineral deposits and soap scum. Use the wide flat brush with a mixture of vinegar and dish soap. The rotating action melts away the film, leaving glass streak-free without scratching.' },
      { type: 'heading', text: 'Hack 3: Clean Window Tracks & Sliding Rails' },
      { type: 'p', text: 'Narrow sliding window rails collect thick dust and grime that is nearly impossible to reach. Use the corner brush at a medium speed setting to sweep out corner dirt in seconds.' },
      { type: 'heading', text: 'Hack 4: Sparkle Your Kitchen Stove Grates' },
      { type: 'p', text: 'Baked-on grease on stove grates and kitchen backsplashes is stubborn. Apply a degreaser and use the heavy-duty round dome brush. The rotating bristles lift dried grease in a fraction of the time.' },
      { type: 'heading', text: 'Hack 5: Deep-Clean Car Wheels and Hubcaps' },
      { type: 'p', text: 'Brake dust and road road grime cling to car alloy wheels. The cordless spin scrubber is portable enough to carry outside. Attach the flat brush to clean alloy wheel grooves and tire sidewalls without bending down.' }
    ]
  },
  'how-to-prevent-kitchen-sink-clog-plumbing-tips': {
    title: 'How to Stop Kitchen Sink Clogging Once and For All',
    content: [
      { type: 'p', text: 'A clogged kitchen sink is a major headache that disrupts cooking, dishwashing, and daily kitchen routines. Calling a plumber can be expensive and time-consuming. Fortunately, most kitchen sink blockages are easily preventable with a few simple habits and the right tools.' },
      { type: 'heading', text: 'Why Kitchen Sinks Get Clogged' },
      { type: 'p', text: 'The main culprits behind kitchen drain clogs are food debris (like rice, tea leaves, and vegetable peelings) and fats, oils, or grease (known as FOG). When warm oil is poured down the drain, it cools and solidifies inside the pipes, trapping food scraps and building up a thick obstruction over time.' },
      { type: 'heading', text: '1. Use a Silicone or Stainless Steel Drain Strainer' },
      { type: 'p', text: 'A premium, fine-mesh drain strainer is your first line of defense. It lets water flow through freely while trapping even the smallest food crumbs. Silicone strainers are particularly convenient because you can easily lift them, flip them inside out, and dump the trapped food waste straight into the compost bin.' },
      { type: 'heading', text: '2. Scraping Plates and Garbage Disposal' },
      { type: 'p', text: 'Always scrape all plates, pots, and pans into the garbage bin before rinsing them in the sink. Never dump coffee grounds, pasta, or rice down the drain as they expand in water and create stubborn blockages.' },
      { type: 'heading', text: '3. The Weekly Boiling Water Flush' },
      { type: 'p', text: 'Get into the habit of pouring a kettle of boiling water down the kitchen drain once a week. This melts any accumulated grease clinging to the pipe walls and flushes it out before it solidifies into a clog.' },
      { type: 'heading', text: '4. Natural Baking Soda and Vinegar Clean' },
      { type: 'p', text: 'If your drain is starting to run slowly, pour half a cup of baking soda down it, followed by a cup of white vinegar. Let it fizz for 15 minutes to break down residue, then flush it with hot water. This also eliminates sink odors naturally!' }
    ]
  },
  'blogs': {
    title: 'Our Blogs & Guides',
    content: [
      { type: 'p', text: 'Welcome to our blog section! Here, we share daily guides, clever life hacks, and smart organization tips to help you solve everyday home problems.' },
      { type: 'blog_list', items: [
        {
          title: 'Why UV Toothbrush Sanitizers Are a Bathroom Must-Have',
          slug: 'uv-toothbrush-sanitizer-bathroom-hygiene-guide',
          desc: 'Bathrooms are damp, warm environments that breed bacteria. Learn how UV-C light sanitizers destroy 99.9% of germs on your brush and declutter your sink.',
          date: 'June 15, 2026',
          icon: '🪥'
        },
        {
          title: '5 Cleaning Hacks to Save Hours Using an Electric Spin Scrubber',
          slug: 'electric-spin-scrubber-home-cleaning-hacks',
          desc: 'Electric spin scrubbers save physical effort and back strain. Discover 5 clever hacks to clean grout lines, shower glass, stove grates, and car wheels in minutes.',
          date: 'June 14, 2026',
          icon: '🧹'
        },
        {
          title: 'How to Stop Kitchen Sink Clogging Once and For All',
          slug: 'how-to-prevent-kitchen-sink-clog-plumbing-tips',
          desc: 'Plumbing blockages are expensive and frustrating. Read our practical guide on silicone drain strainers, boiling water flushes, and natural cleaning solutions.',
          date: 'June 13, 2026',
          icon: '🚰'
        }
      ]}
    ]
  }
};

const InfoPage = ({ pageSlug, onNavigate }) => {
  const rawPage = INFO_PAGES[pageSlug];

  const replacePlaceholders = (text) => {
    if (typeof text !== 'string') return text;
    return text
      .replaceAll('ViralKart', STORE_NAME)
      .replaceAll('support@viralkart.in', 'viralkartofficial@gmail.com')
      .replaceAll('business@viralkart.in', 'viralkartofficial@gmail.com')
      .replaceAll('+91-9876543210', '+91-8824318839')
      .replaceAll('NorthLane India, Sector 62, Noida, UP 201309', 'Delhi');
  };

  const page = rawPage ? {
    title: replacePlaceholders(rawPage.title),
    content: rawPage.content.map(block => {
      if (block.type === 'p' || block.type === 'heading') {
        return { ...block, text: replacePlaceholders(block.text) };
      }
      if (block.type === 'list') {
        return { ...block, items: block.items.map(item => replacePlaceholders(item)) };
      }
      if (block.type === 'blog_list') {
        return {
          ...block,
          items: block.items.map(item => ({
            ...item,
            title: replacePlaceholders(item.title),
            desc: replacePlaceholders(item.desc)
          }))
        };
      }
      return block;
    })
  } : null;

  if (!page) {
    return (
      <div style={{ padding: '40px 16px', textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <span style={{ fontSize: '36px' }}>📄</span>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>Page Not Found</h2>
        <p style={{ fontSize: '13px', color: '#64748B' }}>The page you're looking for doesn't exist.</p>
        <button
          onClick={() => onNavigate('home')}
          className="btn btn-primary"
          style={{ marginTop: '8px' }}
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', minHeight: '50vh' }}>
      <div className="container" style={{ padding: '24px 16px 60px 16px', maxWidth: '720px', margin: '0 auto' }}>
        
        <h1 style={{ fontSize: '22px', fontWeight: '900', color: '#0F172A', marginBottom: '20px', lineHeight: 1.3 }}>
          {page.title}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {page.content.map((block, idx) => {
            if (block.type === 'p') {
              return (
                <p key={idx} style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h3 key={idx} style={{
                  fontSize: '15px', fontWeight: '800', color: '#0F172A',
                  margin: '8px 0 0 0',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <span style={{ width: '4px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #2563EB, #7C3AED)', display: 'inline-block', flexShrink: 0 }} />
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={idx} style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {block.items.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '13px', color: '#1E293B', fontWeight: '600', lineHeight: 1.5,
                      background: '#F0F9FF', border: '1px solid #DBEAFE',
                      borderRadius: '8px', padding: '10px 12px',
                      display: 'flex', alignItems: 'flex-start', gap: '8px'
                    }}>
                      <span style={{ color: '#2563EB', fontWeight: '900', fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'blog_list') {
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
                  {block.items.map((blog, i) => (
                    <div 
                      key={i} 
                      onClick={() => onNavigate('info', blog.slug)}
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start'
                      }}
                      className="blog-card-hover"
                    >
                      <span style={{ fontSize: '28px', background: 'white', padding: '8px', borderRadius: '10px', border: '1px solid #E2E8F0', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px' }}>
                        {blog.icon}
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '700' }}>
                          {blog.date}
                        </span>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                          {blog.title}
                        </h4>
                        <p style={{ fontSize: '12px', color: '#475569', margin: 0, lineHeight: 1.4 }}>
                          {blog.desc}
                        </p>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--accent)', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          Read Article →
                        </span>
                      </div>
                    </div>
                  ))}
                  <style>{`
                    .blog-card-hover {
                      transition: all 0.2s ease !important;
                    }
                    .blog-card-hover:hover {
                      border-color: var(--accent) !important;
                      transform: translateY(-2px) !important;
                      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08) !important;
                    }
                  `}</style>
                </div>
              );
            }
            return null;
          })}
        </div>

      </div>
    </div>
  );
};

export default InfoPage;
