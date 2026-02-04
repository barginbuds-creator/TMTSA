import { ContentPage } from "@/components/templates/ContentPage";
import { SITE_DATA } from "@/lib/siteData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Needed for SSG
export async function generateStaticParams() {
    return SITE_DATA.areas.map((area) => ({
        slug: area.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

// SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const area = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!area) {
        return {
            title: "Area Not Found",
        };
    }

    return {
        title: `Builders & Renovators in ${area.title} | The Maintenance Team`,
        description: area.introText,
    };
}

export default async function AreaPage({ params }: Props) {
    const { slug } = await params;
    const area = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!area) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": area.title,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "containedInPlace": {
            "@type": "Place",
            "name": "Cape Town"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContentPage
                title={area.title}
                subtitle={area.description}
                heroImage={area.heroImage}
                introText={area.introText}
                benefits={area.benefits}
                ctaText="Get a Local Quote"
                serviceArea={{
                    locations: area.locations
                }}
            />
        </>
    );
}
