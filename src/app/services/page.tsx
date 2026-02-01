"use client";

import { PageHero } from "@/components/ui/PageHero";
import { cn } from "@/lib/utils";
import { ArrowRight, Droplets, Hammer, Home, Paintbrush, Phone, Wrench } from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        title: "Waterproofing",
        description: "Expert waterproofing solutions for flat roofs, balconies, and showers to protect your property from water damage.",
        features: ["Torch-on Systems", "Lateral Damp Treatment", "Balcony Sealing"],
        image: "/images/promotions/waterproofing.jpg"
    },
    {
        title: "Paint & Roof",
        description: "Comprehensive painting and roofing repairs ensuring longevity and aesthetic appeal for your home.",
        features: ["Interior & Exterior", "Roof Painting & Repair", "Protective Coatings"],
        image: "/images/promotions/interior-painting.jpg"
    },
    {
        title: "Plumbing",
        description: "Professional plumbing services for maintenance, repairs, and clear-outs.",
        features: ["Leak Detection", "Maintenance", "Renovation Plumbing"],
        image: null // Icon fallback
    },
    {
        title: "Renovations",
        description: "Complete bathroom and kitchen renovations, handling everything from demolition to the final finish.",
        features: ["Kitchens & Bathrooms", "Property Improvements", "Tiling"],
        image: "/images/promotions/bathroom-renovation.jpg"
    },
    {
        title: "Structural Repairs",
        description: "Specialized repair of structural cracks and spalling to restore the integrity of your building.",
        features: ["Crack Injection", "Spalling Repair", "Structural Assessments"],
        image: "/images/promotions/structural-repairs.jpg"
    },
    {
        title: "Paving & Cleaning",
        description: "Deep cleaning and paving restoration to bring your exterior surfaces back to life.",
        features: ["Roof Cleaning", "Paving Restoration", "Wall Washing"],
        image: "/images/promotions/paving-experts.jpg"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            {/* 1. Unique Page Hero */}
            <PageHero
                title={<span>Elite <span className="text-tmt-orange">Services</span></span>}
                subtitle="Comprehensive property maintenance specialists. From waterproofing to full-scale renovations, we handle it all."
                imageSrc="/images/hero-services-gold.png"
                imageAlt="White Marble Architect Table with Gold Tools"
            />

            {/* 2. Services Grid */}
            <section className="pb-32 px-4 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group border border-neutral-200 bg-white hover:border-black transition-all duration-500 relative overflow-hidden flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="h-64 overflow-hidden relative bg-neutral-100">
                                {service.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-tmt-dark">
                                        <Wrench className="w-20 h-20 text-white/20" />
                                    </div>
                                )}

                                {/* Gold Overlay on Hover */}
                                <div className="absolute inset-0 bg-tmt-orange/0 group-hover:bg-tmt-orange/10 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="font-heading font-bold text-2xl text-black mb-4 uppercase tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="font-sans text-neutral-600 mb-8 leading-relaxed flex-1">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 pt-6 border-t border-neutral-100">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm font-bold text-neutral-800 uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-tmt-orange rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* Contact Card */}
                    <div className="group border border-black bg-tmt-dark p-8 flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[500px]">
                        {/* ... content ... */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <h3 className="font-heading font-black text-3xl text-white mb-6 uppercase tracking-tight relative z-10">
                            Ready to <span className="text-tmt-orange">Start?</span>
                        </h3>
                        <div className="space-y-4 mb-8 font-sans text-neutral-300 relative z-10">
                            <p>076 630 0879</p>
                            <p className="text-sm">themaintenanceteam.oncall@gmail.com</p>
                            <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-tmt-orange mt-4">
                                <span>@The_Maintenance_Team</span>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-tmt-orange text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 relative z-10"
                        >
                            Book Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
