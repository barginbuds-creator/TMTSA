"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Droplets, Hammer, Home, Paintbrush, Phone, Wrench } from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        title: "Waterproofing",
        description: "Expert waterproofing solutions for flat roofs, balconies, and showers to protect your property from water damage.",
        icon: <Droplets className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        features: ["Torch-on Systems", "Lateral Damp Treatment", "Balcony Sealing"]
    },
    {
        title: "Painting & Roofing",
        description: "Comprehensive painting and roofing repairs ensuring longevity and aesthetic appeal for your home.",
        icon: <Paintbrush className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        features: ["Interior & Exterior", "Roof Painting & Repair", "Protective Coatings"]
    },
    {
        title: "Plumbing",
        description: "Professional plumbing services for maintenance, repairs, and clear-outs.",
        icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        features: ["Leak Detection", "Maintenance", "Renovation Plumbing"]
    },
    {
        title: "Renovations",
        description: "Complete bathroom and kitchen renovations, handling everything from demolition to the final finish.",
        icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        features: ["Kitchens & Bathrooms", "Property Improvements", "Structural Repairs"]
    },
    {
        title: "High Pressure Cleaning",
        description: "Deep cleaning for roofs, paving, and walls to restore your property's original look.",
        icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        features: ["Roof Cleaning", "Paving Restoration", "Wall Washing"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            {/* 1. Header */}
            <section className="pt-32 pb-16 px-4 container mx-auto text-center">
                <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 tracking-tight uppercase">
                    Elite <span className="text-tmt-orange">Services</span>
                </h1>
                <p className="font-sans text-tmt-grey text-lg max-w-2xl mx-auto leading-relaxed">
                    Comprehensive property maintenance specialists. From waterproofing to full-scale renovations, we handle it all.
                </p>
            </section>

            {/* 2. Services Grid */}
            <section className="pb-32 px-4 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group border border-neutral-200 bg-white p-8 hover:border-black transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Gold Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-tmt-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="mb-8 w-16 h-16 bg-tmt-dark flex items-center justify-center rounded-sm shadow-xl shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>

                            <h3 className="font-heading font-bold text-2xl text-black mb-4 uppercase tracking-wide">
                                {service.title}
                            </h3>

                            <p className="font-sans text-neutral-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm font-bold text-neutral-800 uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 bg-tmt-orange rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Card */}
                    <div className="group border border-black bg-tmt-dark p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
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
