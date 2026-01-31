export type ServiceLocation = {
    slug: string;
    service: string;
    location: string;
    title: string;
    description: string;
    content: string; // HTML content
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
    {
        slug: "waterproofing-cape-town",
        service: "Waterproofing",
        location: "Cape Town",
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
    }
];

export const getServiceBySlug = (slug: string) => SERVICE_LOCATIONS.find(s => s.slug === slug);
