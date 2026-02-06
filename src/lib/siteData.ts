import { LucideIcon, Calculator, CalendarCheck, FileText, Lock } from "lucide-react";

export type PageData = {
    title: string;
    description: string;
    heroImage: string;
    slug: string;
    introText: string;
    benefits: string[];
    serviceArea?: {
        image: string;
        locations: string[];
    };
    // Optional overrides for specific suburbs
    suburbDetails?: Record<string, {
        introText?: string;
        heroImage?: string;
        benefits?: string[];
    }>;
};

export type NavItem = {
    title: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
};

export const SITE_DATA = {
    services: [
        {
            title: "Waterproofing",
            slug: "waterproofing",
            href: "/services/waterproofing",
            description: "Industrial torch-on and injection systems.",
            heroImage: "/images/areas/city-bowl-hero.png", // Existing assest
            introText: "Water intrusion is the single biggest threat to your property's structural integrity. At The Maintenance Team, we employ advanced waterproofing systems designed to withstand the Cape's harsh winter rains and summer heat.",
            benefits: ["10-Year Guarantee", "Torch-on Systems", "Lateral Damp Treatment", "Balcony Waterproofing"]
        },
        {
            title: "Painting & Roofing",
            slug: "painting-roofing",
            href: "/services/painting-roofing",
            description: "Airless roof spraying and exterior coating.",
            heroImage: "/images/areas/winelands-hero.png",
            introText: "Restore your home's value. High-pressure cleaning and airless spray painting services for tiled and metal roofs.",
            benefits: ["Airless Spray Technology", "Fungicidal Wash", "broken tile replacement", "10-15 Year Lifespan"]
        },
        {
            title: "Plumbing",
            slug: "plumbing",
            href: "/services/plumbing",
            description: "Leak detection, geysers, and maintenance.",
            heroImage: "/images/services/hero-plumbing.png",
            introText: "Reliable plumbing services for leak detection, blocked drains, and geyser maintenance. Fast turnaround times for emergencies.",
            benefits: ["24/7 Emergency Support", "Leak Detection", "Geyser Installation", "Blocked Drains"]
        },
        {
            title: "Renovations",
            slug: "renovations",
            href: "/services/renovations",
            description: "Turnkey bathroom and kitchen makeovers.",
            heroImage: "/images/hero-services-gold.png",
            introText: "Turnkey renovation services. We handle the entire project from demolition to tiling, plumbing, and electrical, delivering showroom-quality results.",
            benefits: ["Project Management", "Bathroom & Kitchen", "Tiling & Flooring", "Electrical & Plumbing"]
        },
        {
            title: "Structural Repairs",
            slug: "structural-repairs",
            href: "/services/structural-repairs",
            description: "Spalling and concrete restoration.",
            heroImage: "/images/services/hero-structural.png",
            introText: "Fixing concrete cancer and cracks caused by sea spray. Specialized structural repairs for coastal properties.",
            benefits: ["Spalling Repair", "Rebar Treatment", "Structural Engineer Sign-off", "Crack Injection"]
        },
        {
            title: "Paving Cleaning",
            slug: "paving-cleaning",
            href: "/services/paving-cleaning",
            description: "High-pressure clean and seal.",
            heroImage: "/images/bento-cleaning-bright.png",
            introText: "Restore your home's curb appeal. Expert high-pressure paving cleaning, weed removal, and sealing services.",
            benefits: ["Weed Removal", "Oil Stain Treatment", "Sanding & Sealing", "Estate Compliant"]
        },
    ],
    solutions: [
        {
            title: "Residential",
            slug: "residential",
            href: "/solutions/residential",
            description: "Home maintenance for private owners.",
            heroImage: "/images/solutions/residential-hero.png",
            introText: "Protecting your family home with premium maintenance solutions. From roof leaks to full renovations.",
            benefits: ["Personalized Service", "Clean Sites", "Trusted Teams", "Long-term Warranties"]
        },
        {
            title: "Body Corporate",
            slug: "body-corporate",
            href: "/solutions/body-corporate",
            description: "Managed maintenance for sectional titles.",
            heroImage: "/images/solutions/body-corporate-hero.png",
            introText: "We partner with Trustees and Managing Agents to deliver reliable, budget-compliant maintenance plans for complexes.",
            benefits: ["Budget Planning", "Maintenance Plans", "Compliance Certificates", "Tenant Coordination"]
        },
        {
            title: "Commercial",
            slug: "commercial",
            href: "/solutions/commercial",
            description: "Industrial and office park solutions.",
            heroImage: "/images/solutions/commercial-hero.png",
            introText: "Keep your business running. We offer commercial waterproofing, painting, and general maintenance with minimal disruption.",
            benefits: ["After-hours Work", "Health & Safety Compliance", "Asset Management", "Industrial Coatings"]
        },
        {
            title: "Estates",
            slug: "estates",
            href: "/solutions/estates",
            description: "HOA compliant maintenance.",
            heroImage: "/images/solutions/estates-hero.png",
            introText: " specialized services for high-end residential estates. We understand the strict aesthetic and conduct rules of lifestyle estates.",
            benefits: ["HOA Compliance", "Security Cleared Staff", "Uniformed Teams", "Estate Manager Liaison"]
        },
        {
            title: "Industrial",
            slug: "industrial",
            href: "/solutions/industrial",
            description: "Heavy-duty coating and repairs.",
            heroImage: "/images/solutions/industrial-hero.png",
            introText: "Rugged solutions for warehouses and factories. Anti-corrosion coatings, floor sealing, and structural reinforcement.",
            benefits: ["Epoxy Flooring", "Rust Treatment", "Roof Sheeting", "High-Access Operations"]
        },
        {
            title: "Rental Agents",
            slug: "rental-agents",
            href: "/solutions/rental-agents",
            description: "Rapid response for tenant issues.",
            heroImage: "/images/solutions/rental-agents-hero.png",
            introText: "The preferred partner for rental agents. We handle incoming/outgoing inspections and urgent tenant repairs efficiently.",
            benefits: ["48hr Turnaround", "Itemized Quoting", "Before/After Photos", "Key Handling"]
        },
    ],
    areas: [
        {
            title: "Atlantic Seaboard",
            slug: "atlantic-seaboard",
            href: "/areas/atlantic-seaboard",
            description: "Premium coastal property protection.",
            heroImage: "/images/areas/atlantic-seaboard-hero.png", // Coastal-relevant
            introText: "Serving Cape Town's premier coastal suburbs. We understand the unique challenges of marine environments, from salt-laden winds to driving rain.",
            benefits: ["Specialized Anti-Corrosion", "High-End Finishes", "Strict Noise Regulations", "Discrete Operations"],
            locations: ["Clifton", "Bantry Bay", "Camps Bay", "Fresnaye", "Llandudno", "Sea Point", "Green Point"],
            suburbDetails: {
                "camps-bay": {
                    introText: "Camps Bay properties face unique challenges from the Atlantic Seaboard's salt-laden air and strong driving winds. Our specialized waterproofing and painting solutions are designed to protect luxury villas against coastal corrosion and moisture intrusion.",
                    benefits: ["Salt Spray Protection", "Premium Finishes", "Seasonal Maintenance", "Discrete & Secure Teams"]
                },
                "clifton": {
                    introText: "Perched on the granite cliffs, Clifton bungalows require specialized structural and moisture protection. We offer discreet, high-end maintenance services that respect the privacy of this exclusive enclave.",
                    benefits: ["Cliffside Waterproofing", "Marine Grade Coatings", "Privacy Focused", "Bungalow Renovations"]
                }
            }
        },
        {
            title: "Southern Suburbs",
            slug: "southern-suburbs",
            href: "/areas/southern-suburbs",
            description: "Estate & Heritage Home Maintenance.",
            heroImage: "/images/areas/southern-suburbs-hero.png",
            introText: "From Constantia to Newlands, we provide specialized care for established family homes and heritage properties.",
            benefits: ["Heritage Restoration", "Roof Cleaning & Painting", "Garden Cottage Renovations", "Estate Compliant"],
            locations: ["Constantia", "Bishopscourt", "Newlands", "Claremont", "Rondebosch", "Wynberg", "Tokai"]
        },
        {
            title: "Northern Suburbs",
            slug: "northern-suburbs",
            href: "/areas/northern-suburbs",
            description: "Luxury Estate Maintenance.",
            heroImage: "/images/areas/northern-suburbs-hero.png",
            introText: "Comprehensive construction and maintenance services for the rapidly growing Northern Suburbs and lifestyle estates.",
            benefits: ["New Build Snagging", "Roof Painting", "Paving Cleaning", "Complex Maintenance"],
            locations: ["Durbanville", "Bellville", "Plattekloof", "Welgemoed", "Brackenfell"],
            suburbDetails: {
                "bellville": {
                    introText: "As a bustling hub in the Northern Suburbs, Bellville homes and businesses require durable, long-lasting maintenance. From roof painting in Loevenstein to waterproofing in Boston, we provide cost-effective solutions for family homes and commercial properties.",
                    benefits: ["Cost-Effective", "Roof Painting", "Commercial & Residential", "Durable Coatings"]
                }
            }
        },
        {
            title: "Winelands",
            slug: "winelands",
            href: "/areas/winelands",
            description: "High-Value Property Care.",
            heroImage: "/images/hero-services-gold.png",
            introText: "Serving the prestigious estates of Paarl, Franschhoek, and Stellenbosch with premium maintenance solutions.",
            benefits: ["Val de Vie Accredited", "Farm Maintenance", "Hospitality Renovations", "Long-distance Teams"],
            locations: ["Paarl", "Stellenbosch", "Franschhoek", "Val de Vie", "Pearl Valley"]
        },
        {
            title: "City Bowl",
            slug: "city-bowl",
            href: "/areas/city-bowl",
            description: "Urban Property Solutions.",
            heroImage: "/images/hero-background.png",
            introText: "Fast, efficient updates for City Bowl apartments and heritage offices. We handle the logistics of CBD work.",
            benefits: ["Apartment Renovations", "Body Corporate Work", "Interior Design Support", "Access Control"],
            locations: ["Vredehoek", "Oranjezicht", "Tamboerskloof", "Gardens", "Higgovale"]
        },
    ],
    legal: [
        { title: "Privacy Policy", href: "/privacy", icon: Lock },
        { title: "Terms of Service", href: "/terms", icon: FileText },
    ],
    tools: [
        { title: "AI Quote Engine", href: "/quote", icon: Calculator, description: "Get an instant visual estimate." },
        { title: "Book Online", href: "/contact", icon: CalendarCheck, description: "Schedule a site assessment." },
    ]
};
