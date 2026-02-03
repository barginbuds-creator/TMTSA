import { LucideIcon, Wrench, Shield, Warehouse, Home, Building2, MapPin, Calculator, CalendarCheck, FileText, Lock } from "lucide-react";

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
};

export type NavItem = {
    title: string;
    href: string;
    description?: string;
    icon?: any; // Using dynamic imports or Lucide names
};

export const SITE_DATA = {
    services: [
        {
            title: "Waterproofing",
            slug: "waterproofing",
            href: "/services/waterproofing",
            description: "Industrial torch-on and injection systems.",
            heroImage: "/images/services/hero-waterproofing.png", // Existing assest
            introText: "Water intrusion is the single biggest threat to your property's structural integrity. At The Maintenance Team, we employ advanced waterproofing systems designed to withstand the Cape's harsh winter rains and summer heat.",
            benefits: ["10-Year Guarantee", "Torch-on Systems", "Lateral Damp Treatment", "Balcony Waterproofing"]
        },
        {
            title: "Painting & Roofing",
            slug: "painting-roofing",
            href: "/services/painting-roofing",
            description: "Airless roof spraying and exterior coating.",
            heroImage: "/images/services/hero-painting.png",
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
            heroImage: "/images/bento-residential-bright.png", // Reusing existing
            introText: "Protecting your family home with premium maintenance solutions. From roof leaks to full renovations.",
            benefits: ["Personalized Service", "Clean Sites", "Trusted Teams", "Long-term Warranties"]
        },
        {
            title: "Body Corporate",
            slug: "body-corporate",
            href: "/solutions/body-corporate",
            description: "Managed maintenance for sectional titles.",
            heroImage: "/images/bento-industrial.png",
            introText: "We partner with Trustees and Managing Agents to deliver reliable, budget-compliant maintenance plans for complexes.",
            benefits: ["Budget Planning", "Maintenance Plans", "Compliance Certificates", "Tenant Coordination"]
        },
        {
            title: "Commercial",
            slug: "commercial",
            href: "/solutions/commercial",
            description: "Industrial and office park solutions.",
            heroImage: "/images/hero-background.png",
            introText: "Keep your business running. We offer commercial waterproofing, painting, and general maintenance with minimal disruption.",
            benefits: ["After-hours Work", "Health & Safety Compliance", "Asset Management", "Industrial Coatings"]
        },
        {
            title: "Estates",
            slug: "estates",
            href: "/solutions/estates",
            description: "HOA compliant maintenance.",
            heroImage: "/images/bento-cleaning-bright.png",
            introText: " specialized services for high-end residential estates. We understand the strict aesthetic and conduct rules of lifestyle estates.",
            benefits: ["HOA Compliance", "Security Cleared Staff", "Uniformed Teams", "Estate Manager Liaison"]
        },
        {
            title: "Industrial",
            slug: "industrial",
            href: "/solutions/industrial",
            description: "Heavy-duty coating and repairs.",
            heroImage: "/images/services/hero-structural.png",
            introText: "Rugged solutions for warehouses and factories. Anti-corrosion coatings, floor sealing, and structural reinforcement.",
            benefits: ["Epoxy Flooring", "Rust Treatment", "Roof Sheeting", "High-Access Operations"]
        },
        {
            title: "Rental Agents",
            slug: "rental-agents",
            href: "/solutions/rental-agents",
            description: "Rapid response for tenant issues.",
            heroImage: "/images/services/hero-plumbing.png",
            introText: "The preferred partner for rental agents. We handle incoming/outgoing inspections and urgent tenant repairs efficiently.",
            benefits: ["48hr Turnaround", "Itemized Quoting", "Before/After Photos", "Key Handling"]
        },
    ],
    areas: [
        { title: "Atlantic Seaboard", slug: "atlantic-seaboard", href: "/areas/atlantic-seaboard" },
        { title: "Southern Suburbs", slug: "southern-suburbs", href: "/areas/southern-suburbs" },
        { title: "Northern Suburbs", slug: "northern-suburbs", href: "/areas/northern-suburbs" },
        { title: "Winelands", slug: "winelands", href: "/areas/winelands" },
        { title: "City Bowl", slug: "city-bowl", href: "/areas/city-bowl" },
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
