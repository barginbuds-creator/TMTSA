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
    slug: "why-waterproofing-fails-cape-town",
    title: "Why Waterproofing Fails in Cape Town: The Winter Truth",
    excerpt: "Cape Town's unique climate destroys standard waterproofing. Learn why thermal shock is the enemy and how torch-on systems provide the only lasting defense.",
    coverImage: "/images/projects/becott/becott-5.jpg", // Using a real project image
    coverImageAlt: "Torch-on waterproofing application on a flat concrete roof in Cape Town",
    date: "2024-05-15",
    author: "The Maintenance Team",
    readTime: "5 min read",
    category: "Waterproofing",
    keywords: ["waterproofing cape town", "torch on waterproofing", "roof leaks cape town", "winter waterproofing"],
    content: `
      <h2>The Cape Town Climate Challenge</h2>
      <p>Cape Town is beautiful, but it's brutal on buildings. We experience a phenomenon known as <strong>extreme thermal shock</strong>. In summer, your roof surface can reach 60°C. In winter, it drops to 5°C with heavy rains. This constant expansion and contraction causes standard acrylic sealants to crack and peel within 12-24 months.</p>
      
      <h3>Why "Hardware Store" Paint Isn't Enough</h3>
      <p>Many homeowners try to fix leaks with a bucket of "rubberized" paint from the hardware store. While good for minor touch-ups, these products lack the <strong>membrane stability</strong> needed for structural joints. Without a reinforced membrane, the paint simply snaps when the building moves.</p>

      <h3>The Torch-On Solution</h3>
      <p>For flat concrete roofs and balconies, <strong>4mm Heat-Fused Torch-On</strong> is the industry standard for a reason:</p>
      <ul>
        <li><strong>Thickness:</strong> It is 10x thicker than paint.</li>
        <li><strong>Flexibility:</strong> The bitumen modifies allow it to stretch without tearing.</li>
        <li><strong>UV Stability:</strong> The silver aluminum coating reflects sun, keeping the substrate cool.</li>
      </ul>

      <blockquote>
        "Waterproofing is 90% preparation and 10% application. If you trap moisture under the new layer, it will bubble and fail in the first summer heat."
      </blockquote>

      <h3>Our Process at TMT</h3>
      <p>We don't just cover cracks. We open them, dry them, prime them, and then apply the system. This methodology allows us to offer our <a href="/services/waterproofing-cape-town" class="text-tmt-orange hover:underline font-bold">10-Year Water-Tight Guarantee</a>.</p>
    `
  },
  {
    slug: "spalling-concrete-cancer-explained",
    title: "Spalling Explained: The 'Concrete Cancer' Eating Your Building",
    excerpt: "Cracks in your pillars? Rust stains? You might have spalling. Discover the signs of concrete cancer and why painting over it is dangerous.",
    coverImage: "/images/projects/becott/becott-3.jpg",
    coverImageAlt: "Spalling repairs on a structural column showing exposed rebar treatment",
    date: "2024-05-10",
    author: "TMT Structural Engineers",
    readTime: "7 min read",
    category: "Structural Repairs",
    keywords: ["spalling repair", "concrete cancer", "structural repairs cape town", "rusting rebar"],
    content: `
      <h2>What is Spalling?</h2>
      <p>Spalling, often called "concrete cancer," occurs when the steel reinforcing bars (rebar) inside your concrete walls or slabs begin to rust. As steel rusts, it expands up to 7 times its original size. This incredible internal pressure pushes the concrete outwards, causing it to crack and fall off (spall).</p>
      
      <h3>The Coastal Curse</h3>
      <p>In areas like Blouberg, Sea Point, and Camps Bay, the air is filled with chlorides (salt). Ideally, clean concrete protects the steel. But over time, carbonation lowers the concrete's pH, allowing moisture and salt to reach the steel. Once corrosion starts, it accelerates.</p>

      <h3>Warning Signs to Look For</h3>
      <ul>
        <li><strong>Rust Stains:</strong> Brown streaks running down your walls.</li>
        <li><strong>Hollow Sounds:</strong> Tapping the wall produces a hollow "drum" sound.</li>
        <li><strong>Bulging Concrete:</strong> Visibly pushed-out sections of plaster.</li>
      </ul>

      <h3>How We Fix It (The Right Way)</h3>
      <p>Never just plaster over spalling! The rust will continue to eat the steel until the structure fails. <a href="/services/structural-repairs-blouberg" class="text-tmt-orange hover:underline font-bold">Our Structural Repair process</a> involves:</p>
      <ol>
        <li>Exposing the steel fully.</li>
        <li>Sandblasting the rust away.</li>
        <li>Coating steel with a Zinc-Rich Primer.</li>
        <li>Applying an epoxy bonding agent.</li>
        <li>Reinstating with high-strength structural mortar.</li>
      </ol>
    `
  },
  {
    slug: "airless-spray-roof-painting-benefits",
    title: "Airless Spray vs. Rolling: The Future of Roof Painting",
    excerpt: "Why we switched to 100% airless spraying for roofs. Better adhesion, uniform thickness, and a factory-like finish that lasts longer.",
    coverImage: "/images/projects/becott/becott-4.jpg",
    coverImageAlt: "Freshly painted charcoal roof using airless spray technology",
    date: "2024-04-22",
    author: "The Maintenance Team",
    readTime: "4 min read",
    category: "Painting",
    keywords: ["roof painting cape town", "airless spray painting", "roof restoration", "tmt painting"],
    content: `
      <h2>The Old Way vs. The Bold Way</h2>
      <p>Traditionally, roofs were painted with wool rollers. The problem? Rollers often bridge over the tiny pores in cement tiles, leaving air gaps where coating failures start. They also leave texture marks and varying thickness.</p>
      
      <h3>The Science of Airless Spraying</h3>
      <p>Airless spraying atomizes paint at 3000 PSI. This high velocity forces the coating deep into the substrate profile, creating a <strong class="text-white">mechanical bond</strong> that rollers can't achieve. The result is a film that is thicker, smoother, and more uniform.</p>

      <h3>Benefits for Homeowners</h3>
      <ul>
        <li><strong>Speed:</strong> We can coat an average home in a single day, minimizing disruption.</li>
        <li><strong>Aesthetics:</strong> A showroom "factory finish" look that dramatically boosts curb appeal.</li>
        <li><strong>Longevity:</strong> No brush marks means no weak points for dirt to accumulate.</li>
      </ul>

      <h3>Preparation is Key</h3>
      <p>Before we pull the trigger, every roof undergoes a 250-bar high-pressure clean and a fungicidal wash. Paint applied to dirt will peel in weeks. Paint applied to a clinically clean surface by TMT lasts for over 10 years. Check out our <a href="/services/roof-painting-durbanville" class="text-tmt-orange hover:underline font-bold">Roof Painting Services</a> to learn more.</p>
    `
  }
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);
