import { PageHero } from "@/components/ui/PageHero";
import { getServiceBySlug, SERVICE_LOCATIONS } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Force static generation for these paths
export async function generateStaticParams() {
    return SERVICE_LOCATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | The Maintenance Team`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.service,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "The Maintenance Team",
            "image": "https://tmtsa-website.vercel.app/images/logo.png", // Correct logo path
            "telephone": "+27766300879",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": service.location,
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": service.location
        },
        "description": service.description
    };

    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Unique Page Hero */}
            <PageHero
                title={<span>{service.service} <span className="text-tmt-orange">Services</span></span>}
                subtitle={service.title}
                imageSrc="/images/hero-services-gold.png" // Fallback or could be dynamic if added to data
                imageAlt={service.service}
            />

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div
                    className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide prose-p:text-neutral-600 prose-li:text-neutral-600 prose-strong:text-black prose-img:rounded-sm prose-img:shadow-xl prose-img:border prose-img:border-black/5 max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                />

                <div className="mt-16 border-t border-neutral-100 pt-12 text-center">
                    <h3 className="font-heading font-bold text-3xl mb-6 uppercase">Ready to Start?</h3>
                    <p className="text-neutral-500 mb-8 max-w-xl mx-auto">Contact us today for a free consultation and quote for your {service.service} project.</p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-tmt-dark text-white font-bold uppercase tracking-widest hover:bg-tmt-orange hover:text-white transition-colors duration-300">
                        Get a Quote
                    </a>
                </div>
            </section>
        </main>
    );
}
