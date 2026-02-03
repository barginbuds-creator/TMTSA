import { TARGET_AREAS } from "@/data/areas";
import { PageHero } from "@/components/ui/PageHero";

import { CheckCircle2, Home, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Helper to normalize slugs (e.g. "Bantry Bay" -> "bantry-bay")
const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');
const fromSlug = (slug: string) => {
    // Find the area name from the data to ensure correct casing
    const allAreas = TARGET_AREAS.flatMap(r => r.areas);
    return allAreas.find(a => toSlug(a) === slug) || slug.replace(/-/g, ' '); // Fallback to Title Case approx if needed
};

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const areaName = fromSlug(slug);

    return {
        title: `Builders & Renovators in ${areaName} | The Maintenance Team`,
        description: `Looking for a builder in ${areaName}? TMT provides premium waterproofing, painting, and construction services in ${areaName}. Get a free quote today.`,
    };
}

export function generateStaticParams() {
    return TARGET_AREAS.flatMap(region => region.areas.map(area => ({
        slug: toSlug(area),
    })));
}

export default async function AreaPage({ params }: Props) {
    const { slug } = await params;
    const areaName = fromSlug(slug);

    // Find the region for context
    const regionData = TARGET_AREAS.find(r => r.areas.some(a => toSlug(a) === slug));

    if (!regionData) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title={<span>Services in <span className="text-tmt-orange">{areaName}</span></span>}
                subtitle={`Your trusted local partners for property maintenance and renovation in ${areaName} and the greater ${regionData.region}.`}
                imageSrc="/images/hero-services-gold.png" // We could use specific images if available
                imageAlt={`Construction services in ${areaName}`}
                size="default"
            />

            {/* SEO Content Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <span className="text-tmt-orange font-bold tracking-widest uppercase text-sm mb-2 block">Local Experts</span>
                        <h2 className="font-heading text-4xl font-bold text-zinc-900 mb-6">
                            Premier Building & Renovation Services in <span className="text-tmt-orange">{areaName}</span>
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            Are you looking for a reliable <strong>builder near me</strong> in {areaName}?
                            The Maintenance Team (TMT) specializes in high-end residential and commercial property solutions tailored for the {regionData.region} environment.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Whether you need specialized waterproofing for winter protection, a complete home renovation, or structural repairs, our team is already active in {areaName} and ready to assist.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-zinc-50 p-8 border border-zinc-100 rounded-sm">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <Home className="text-tmt-orange w-6 h-6" />
                                Residential Services
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Complete Home Renovations in {areaName}</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Interior & Exterior Painting Experts</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Waterproofing & Roof Repairs</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-zinc-50 p-8 border border-zinc-100 rounded-sm">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-tmt-orange w-6 h-6" />
                                Why Choose TMT?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Local references available in {regionData.region}</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Fully insured and NHBRC registered</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-600">
                                    <CheckCircle2 className="w-5 h-5 text-tmt-orange shrink-0 mt-0.5" />
                                    <span>Premium materials for long-lasting results</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-zinc-900 text-white p-12 text-center rounded-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="relative z-10">
                            <h3 className="font-heading text-3xl font-bold mb-4">Start Your Project in {areaName}</h3>
                            <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                                Don&apos;t settle for average. Choose the team that understands the value of your property.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-tmt-orange text-zinc-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
                                >
                                    Get a Free Quote
                                </Link>
                                <a
                                    href="tel:0766300879"
                                    className="bg-transparent border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-zinc-900 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    076 630 0879
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
