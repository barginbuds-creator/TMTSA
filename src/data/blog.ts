export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string; // HTML content
  keywords: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-waterproofing-secrets-cape-town-homes",
    title: "5 Waterproofing Secrets for Cape Town Homes 🏠☔",
    excerpt: "Don't wait for the first storm! Learn expert waterproofing tips for Cape Town homes to prevent damp and leaks before winter hits.",
    coverImage: "/images/bento-industrial.png",
    coverImageAlt: "Waterproofing inspection on a Cape Town roof",
    date: "2026-02-04",
    author: "The Maintenance Team",
    readTime: "6 min read",
    category: "Waterproofing",
    keywords: ["waterproofing cape town", "roof leaks", "damp proofing", "winter prep", "home maintenance"],
    content: `
      <h2>The Pain: Winter is Coming</h2>
      <p>There is nothing worse than spotting a spreading damp patch on your ceiling just as the first heavy cold front hits the Cape. For homeowners in the Atlantic Seaboard, the combination of salt spray and driving rain can turn minor hairline cracks into major leaks overnight.</p>
      
      <h3>Why You Can't Ignore It</h3>
      <p>Ignoring these early signs doesn't just ruin your paintwork; it compromises the structural integrity of your property. In our experience, waiting until the middle of a wet July to fix a roof is a recipe for disaster. Emergency repairs are often costlier and harder to execute when the weather is working against us.</p>
      
      <p><strong>The Solution:</strong> To effectively waterproof your Cape Town home, you must inspect and clear all gutters, seal roof flashings, treat rising damp immediately, and apply a high-quality UV-resistant liquid rubber or membrane to flat roofs. Preventative maintenance now saves thousands in repairs later.</p>

      <hr class="my-8 border-neutral-800" />

      <h2>1. Inspect Your Roof Flashings and Ridges</h2>
      <p>The harsh sun in the Northern Suburbs often degrades waterproofing membranes over the summer. We often find that the "lap joints" (where roofing sheets overlap) and flashings around chimneys are the first points of failure.</p>
      <p>If these seals dry out and crack, water will find a way in. We recommend a full roof inspection annually.</p>
      <div class="bg-neutral-900 border-l-4 border-tmt-orange p-4 my-6">
        <p class="font-bold text-white m-0">Pro Tip:</p>
        <p class="text-neutral-300 m-0">If you have a flat concrete roof, check for "ponding" (pools of water that don't drain). Standing water is the enemy of waterproofing membranes.</p>
      </div>

      <h2>2. Clear Gutters and Downpipes</h2>
      <p>It sounds simple, but blocked gutters are the #1 cause of water ingress we see in leafy areas like the Southern Suburbs (Constantia and Bishopscourt). When leaves block the flow, water backs up and flows under your roof tiles or into the eaves.</p>
      <p>On a recent job in Newlands, we found that a simple clogged downpipe had caused water to overflow into the wall cavity, necessitating extensive Painting & Roofing repairs inside the master bedroom.</p>
      <ul>
        <li>Remove all leaves and debris.</li>
        <li>Flush with a hose to ensure flow.</li>
        <li>Check for sagging gutters that hold water.</li>
      </ul>

      <h2>3. Treat Rising Damp Immediately</h2>
      <p>Cape Town's high water table, especially in the City Bowl (Oranjezicht and Higgovale), puts older homes at risk of rising damp. This occurs when ground water rises up through the masonry of your walls.</p>
      <p>If you notice bubbling paint low down on your walls or a salty white powder (efflorescence), you need professional intervention. Painting over it will not work; the moisture needs to be blocked at the source.</p>

      <h2>4. Check Exterior Walls for Hairline Cracks</h2>
      <p>The "Cape Doctor" (our famous South-Easter wind) drives rain horizontally. This means even tiny cracks in your exterior plaster can let in significant amounts of moisture.</p>
      <p>We use specialized flexible exterior paints and waterproofing compounds that expand and contract with the temperature, ensuring the seal holds even during the fluctuating temperatures of the Winelands.</p>

      <h2>5. Don't Neglect Balconies and Patios</h2>
      <p>Balconies are high-risk areas. If the grouting between tiles fails, water seeps into the concrete slab below. This causes "concrete cancer" (rusting reinforcement) which is a severe structural issue.</p>
      <p>If you see rust stains on the ceiling below a balcony, contact us immediately for Structural Repairs.</p>

      <hr class="my-8 border-neutral-800" />

      <h2>Conclusion</h2>
      <p>Waterproofing is not a luxury in the Western Cape; it is a necessity. By taking action now, before the winter storms hit, you protect your asset and ensure a dry, warm home.</p>
      <p>We have solved damp and leak problems for hundreds of clients across Cape Town, from fixing flat roofs in Camps Bay to solving rising damp in Durbanville.</p>

      <div class="mt-10 p-8 bg-tmt-orange/10 rounded-2xl border border-tmt-orange/20 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Ready to winter-proof your home?</h3>
        <p class="mb-6 text-neutral-300">Don't wait for the leak. Book your free comprehensive site assessment today.</p>
        <a href="/contact" class="inline-block bg-tmt-orange text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors">
          Get a Free Quote
        </a>
      </div>
    `
  }
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);
