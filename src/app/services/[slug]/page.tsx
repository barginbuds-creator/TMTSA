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
            "image": "https://themaintenanceteamsa.co.za/logo.png", // Placeholder
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
        <main className="min-h-screen bg-tmt-dark text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 z-0 bg-neutral-900"
                    style={{
                        backgroundImage: 'url(/images/hero-poster.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="relative z-20 text-center px-4">
                    <span className="text-tmt-orange font-bold tracking-widest uppercase text-sm mb-4 block">
                        Location: {service.location}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4 uppercase">
                        {service.service}
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div
                    className="prose prose-invert prose-lg prose-orange bg-zinc-900/50 p-8 rounded-xl border border-white/10"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                />

                <div className="mt-12 text-center">
                    <a href="/contact" className="inline-block px-8 py-4 bg-tmt-orange text-white font-bold uppercase hover:bg-orange-600 transition-colors">
                        Get a Quote for {service.service}
                    </a>
                </div>
            </section>
        </main>
    );
}
