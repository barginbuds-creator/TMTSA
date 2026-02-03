export type ServiceLocation = {
    slug: string;
    service: string;
    location: string;
    title: string;
    description: string;
    content: string; // HTML content
    heroImage?: string;
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
    {
        slug: "waterproofing-cape-town",
        service: "Waterproofing",
        location: "Cape Town",
        heroImage: "/images/services/hero-waterproofing.png",
        title: "Premier Waterproofing Contractors Cape Town | 10-Year Guarantee",
        description: "Stop leaks permanently. TMT specializes in industrial-grade torch-on waterproofing for roofs, balconies, and concrete slabs in Cape Town.",
        content: `
            <h2>The No.1 Solution for Cape Winter Leaks</h2>
            <p>In Cape Town, waterproofing isn't a luxury—it's a necessity. The combination of torrential winter rains and blistering summer heat causes standard sealants to crack and fail. At <strong>The Maintenance Team (TMT)</strong>, we don't just patch leaks; we engineer permanent solutions.</p>
            
            <h3>Our Waterproofing Systems</h3>
            <p>We utilize industrial-grade materials suited for the harsh Western Cape climate:</p>
            <ul>
                <li><strong>Torch-on Membrane (4mm):</strong> The gold standard for flat concrete roofs and balconies. Heat-fused for a seamless, watertight bond.</li>
                <li><strong>Acrylic & Fibre Reinforced:</strong> Ideal for parapet walls, flashings, and tiled ridging. Flexibility meets durability.</li>
                <li><strong>Cementitious Slurries:</strong> Specialized heavy-duty waterproofing for showers, basements, and retaining walls.</li>
            </ul>

            <h3>Why Choose TMT for Waterproofing?</h3>
            <p>Leak detection is an art. Our team uses moisture mapping to identify the root cause of water ingress, ensuring we fix the problem at the source, not just the symptom. Every full waterproofing project comes with a <strong>CERTIFIED 10-YEAR GUARANTEE</strong>.</p>

            <blockquote>
                "Water damage is progressive. A small damp spot today is a structural failure tomorrow. Protect your asset with TMT."
            </blockquote>

            <h3>Areas We cover in Cape Town</h3>
            <p>From the Atlantic Seaboard to the Southern Suburbs, our mobile teams are ready to deploy. We treat every home with the same rigor as an industrial site—clean, efficient, and built to last.</p>
        `
    },
    {
        slug: "roof-painting-durbanville",
        service: "Roof Painting",
        location: "Durbanville",
        heroImage: "/images/services/hero-painting.png",
        title: "Expert Roof Painting & Restoration Durbanville",
        description: "Restore your home's value. High-pressure cleaning and airless spray painting services for tiled and metal roofs in Durbanville.",
        content: `
            <h2>Restore Value to Your Durbanville Home</h2>
            <p>A faded, moss-covered roof doesn't just look bad—it degrades your property's value. Durbanville's leafy environment often leads to heavy fungal and moss buildup on tiled roofs. <strong>The Maintenance Team</strong> restores your roof to showroom condition.</p>
            
            <h3>The TMT Restoration Process</h3>
            <ol>
                <li><strong>High-Pressure Cleaning:</strong> We strip away years of dirt, moss, and flaking paint using industrial 250-bar pressure washers.</li>
                <li><strong>Fungicidal Wash:</strong> We apply a chemical treatment to kill spore roots, preventing regrowth.</li>
                <li><strong>Repair & Seal:</strong> Broken tiles are replaced, and ridge capping is re-pointed to ensure a watertight seal.</li>
                <li><strong>Airless Spray Painting:</strong> We apply premium pure-acrylic roof coatings using airless spray technology for a uniform, factory-finish coat that brushes can't achieve.</li>
            </ol>

            <h3>Thermal Efficiency</h3>
            <p>Modern roof coatings do more than look good. They reflect UV rays, lowering the internal temperature of your home during Durbanville's hot summers. Ask us about our <strong>Heat-Reflective Cool Roof</strong> options.</p>

            <h3>Why Spray Painting?</h3>
            <p>Airless spraying forces paint into the pores of the tiles, creating a stronger bond and a thicker film build than traditional rolling. The result is a finish that lasts 10+ years without peeling.</p>
        `
    },
    {
        slug: "structural-repairs-blouberg",
        service: "Structural Repairs",
        location: "Blouberg",
        heroImage: "/images/services/hero-structural.png",
        title: "Structural Repair & Spalling Experts Blouberg",
        description: "Fixing concrete cancer and cracks caused by sea spray. Specialized structural repairs for Bloubergstrand properties.",
        content: `
            <h2>Combating the 'Concrete Cancer' of the West Coast</h2>
            <p>Bloubergstrand offers beautiful views, but the salt-laden air is brutal on buildings. "Spalling" or concrete cancer occurs when steel reinforcing bars rust and expand, cracking the concrete from the inside out. This is a critical structural failure that requires expert intervention.</p>
            
            <h3>Our Structural Repair Methodology</h3>
            <p>This is not a "plaster over it" job. TMT follows a strict engineering protocol:</p>
            <ul>
                <li><strong>Exposure:</strong> We mechanically remove damaged concrete to expose the corroded rebar.</li>
                <li><strong>Treatment:</strong> Rust is removed, and steel is treated with zinc-rich primers to halt corrosion.</li>
                <li><strong>Bonding:</strong> A chemical bonding agent is applied to ensure adhesion between old and new material.</li>
                <li><strong>Reinstatement:</strong> We use high-strength, non-shrink structural epoxies and mortars to rebuild the integrity of the column or beam.</li>
            </ul>

            <h3>Crack Injection & Stitching</h3>
            <p>For non-structural cracks, we utilize epoxy injection systems that weld the masonry back together, preventing water ingress and further movement.</p>

            <h3>Don't Wait on Cracks</h3>
            <p>In Blouberg's corrosive environment, a small crack allows salt air to reach your rebar quickly. Early intervention saves tens of thousands in future heavy construction costs. Call TMT for a specialized structural assessment.</p>
        `
    },
    // GENERIC SERVICES (For /services main page linking)
    {
        slug: "waterproofing",
        service: "Waterproofing",
        location: "Cape Town",
        heroImage: "/images/services/hero-waterproofing.png",
        title: "Expert Waterproofing Contractors | Torch-on & Lateral Damp",
        description: "Industrial-grade waterproofing solutions. We specialize in torch-on systems for flat roofs and balconies, offering a 10-year guarantee against water ingress.",
        content: `
            <h2>Permanent Waterproofing Solutions</h2>
            <p>Water intrusion is the single biggest threat to your property's structural integrity. At <strong>The Maintenance Team</strong>, we employ advanced waterproofing systems designed to withstand the Cape's harsh winter rains and summer heat.</p>
            
            <h3>Our Systems</h3>
            <ul>
                 <li><strong>Torch-on Membrane:</strong> Heat-fused bitumen layers for flat roofs and concrete slabs. Highly durable and seamless.</li>
                 <li><strong>Cementitious Slurries:</strong> Ideal for rising damp, lateral damp, and basement tanking.</li>
                 <li><strong>Acrylic Reinforced:</strong> Flexible waterproofing for parapets and flashings.</li>
            </ul>

            <img src="/images/services/content-waterproofing.png" alt="Waterproofing Guarantee" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>The TMT 10-Year Guarantee</h3>
            <p>We stand by our workmanship. All full waterproofing installations come with a certified 10-year guarantee, giving you peace of mind that your asset is protected.</p>
        `
    },
    {
        slug: "painting-roofing",
        service: "Paint & Roof",
        location: "Cape Town",
        heroImage: "/images/services/hero-painting.png",
        title: "Interior & Exterior Painting | Roof Restoration",
        description: "Transform your property with our premium painting and roof restoration services. Airless spraying for roofs and expert interior finishing.",
        content: `
            <h2>Professional Painting & Decoration</h2>
            <p>A fresh coat of paint does more than just look good—it protects your home from the elements. We offer comprehensive residential painting services, from detailed interior trim to full exterior re-coating.</p>

            <img src="/images/services/content-painting.png" alt="Interior Painting" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>Roof Restoration Specialists</h3>
            <p>Don't replace your roof if you don't have to. Our restoration process extends the life of your roof by 10-15 years:</p>
            <ol>
                <li>High-pressure cleaning (250 bar) to remove moss and oxidation.</li>
                <li>Fungicidal treatment to prevent regrowth.</li>
                <li>Replacement of broken tiles and re-pointing of ridge caps.</li>
                <li>Application of pure-acrylic roof coating via airless spray for a factory finish.</li>
            </ol>
        `
    },
    {
        slug: "plumbing",
        service: "Plumbing",
        location: "Cape Town",
        heroImage: "/images/services/hero-plumbing.png",
        title: "Residential Maintenance Plumbing & Repairs",
        description: "Reliable plumbing services for leak detection, blocked drains, and geyser maintenance. Fast turnaround times for emergencies.",
        content: `
            <h2>Reliable Maintenance Plumbing</h2>
            <p>From a dripping tap to a burst geyser, our plumbing division handles all general maintenance and emergency repairs. We pride ourselves on quick response times and tidy workmanship.</p>
            
            <h3>Core Services</h3>
            <ul>
                <li><strong>Leak Detection:</strong> Using acoustic and thermal imaging to find hidden leaks.</li>
                <li><strong>Geyser Installation:</strong> Repairs and replacements to SANS 10254 standards.</li>
                <li><strong>Blocked Drains:</strong> Mechanical drain cleaning to restore flow.</li>
                <li><strong>Sanitaryware:</strong> Installation of toilets, basins, and showers for bathroom upgrades.</li>
            </ul>
        `
    },
    {
        slug: "renovations",
        service: "Renovations",
        location: "Cape Town",
        heroImage: "/images/hero-services-gold.png",
        title: "Full-Service Bathroom & Kitchen Renovations",
        description: "Turnkey renovation services. We handle the entire project from demolition to tiling, plumbing, and electrical, delivering showroom-quality results.",
        content: `
            <h2>Turnkey Property Renovations</h2>
            <p>Renovating shouldn't be stressful. TMT offers a complete project management service for bathroom and kitchen makeovers. We coordinate all trades, so you only deal with one point of contact.</p>

            <img src="/images/services/content-renovation.png" alt="Bathroom Renovation" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>Our Renovation Scope</h3>
            <ul>
                <li><strong>Demolition & Carting:</strong> Clean, safe removal of old rubble.</li>
                <li><strong>Plumbing & Electrical:</strong> Re-routing points for new layouts.</li>
                <li><strong>Tiling:</strong> Expert installation of porcelain, ceramic, and natural stone.</li>
                <li><strong>Finishing:</strong> Skimming, painting, and fitting installation.</li>
            </ul>
        `
    },
    {
        slug: "structural-repairs",
        service: "Structural Repairs",
        location: "Cape Town",
        heroImage: "/images/services/hero-structural.png",
        title: "Structural Repair Experts | Spalling & Cracks",
        description: "Specialized repair of structural cracks and concrete spalling. Essential maintenance for coastal properties dealing with salt corrosion.",
        content: `
            <h2>Protecting Structural Integrity</h2>
            <p>Coastal living takes a toll on buildings. 'Concrete cancer' or spalling occurs when reinforcing steel rusts and expands, cracking the concrete. If left untreated, this can compromise the building's safety.</p>

             <img src="/images/services/content-structural.png" alt="Structural Repairs" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>Our Engineering Approach</h3>
            <p>We use high-strength structural epoxies and mortars to reinstate damaged concrete. Our process involves cutting back to clean steel, treating rust, applying bonding agents, and re-casting the section to original strength.</p>
        `
    },
    {
        slug: "paving-cleaning",
        service: "Paving & Cleaning",
        location: "Cape Town",
        heroImage: "/images/services/hero-cleaning.png",
        title: "High-Pressure Cleaning & Paving Restoration",
        description: "Restore your driveway, roof, and walls to new. Industrial high-pressure cleaning that removes years of grime, oil, and moss.",
        content: `
            <h2>Industrial High-Pressure Cleaning</h2>
            <p>First impressions count. Over time, pavers and walls collect grime, oil, and moss that standard hosing won't move. Our industrial machinery restores your exterior surfaces to their original look.</p>

            <img src="/images/services/content-cleaning.png" alt="Paving Experts" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>Services Include</h3>
            <ul>
                <li><strong>Roof Cleaning:</strong> Removing moss and lichen that damages tiles.</li>
                <li><strong>Paving Restoration:</strong> Cleaning and re-grouting pavers to prevent shifting.</li>
                <li><strong>Wall Washing:</strong> Pre-paint preparation and general cleaning.</li>
            </ul>
        `
    }
];

export const getServiceBySlug = (slug: string) => SERVICE_LOCATIONS.find(s => s.slug === slug);
