import { ContentPage } from "@/components/templates/ContentPage";
import { SITE_DATA } from "@/lib/siteData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate paths for all regions and their suburbs
export async function generateStaticParams() {
    const paths = [];
    for (const region of SITE_DATA.areas) {
        for (const suburb of region.locations) {
            paths.push({
                slug: region.slug,
                suburb: suburb.toLowerCase().replace(/\s+/g, '-'), // URL-safe slug
            });
        }
    }
    return paths;
}

type Props = {
    params: Promise<{ slug: string; suburb: string }>;
};

function getSuburbName(slug: string) {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, suburb } = await params;
    const region = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!region) return { title: "Area Not Found" };

    const suburbName = getSuburbName(suburb);

    return {
        title: `Waterproofing & Painting in ${suburbName} | The Maintenance Team`,
        description: `Expert waterproofing, roofing, and painting services in ${suburbName}, ${region.title}. Get a free quote from Cape Town's trusted specialists.`,
    };
}

export default async function SuburbPage({ params }: Props) {
    const { slug, suburb } = await params;
    const region = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!region) {
        notFound();
    }

    // Find the specific suburb name from the list to ensure correct capitalization if possible, 
    // or fallback to formatting the slug.
    const suburbNameFormatted = getSuburbName(suburb);
    const suburbNameOriginal = region.locations.find(l => l.toLowerCase().replace(/\s+/g, '-') === suburb) || suburbNameFormatted;

    const introText = `Living in ${suburbNameOriginal} offers a unique lifestyle, but the local climate can take a toll on your property. ${region.introText} We provide specialized maintenance solutions tailored for homes in ${suburbNameOriginal}.`;

    return (
        <ContentPage
            title={`Property Maintenance in ${suburbNameOriginal}`}
            subtitle={`Expert Waterproofing, Painting & Renovations for ${suburbNameOriginal} Residents`}
            heroImage={region.heroImage}
            introText={introText}
            benefits={[
                `Servicing ${suburbNameOriginal}`,
                ...region.benefits
            ]}
            ctaText={`Get a Quote in ${suburbNameOriginal}`}
            serviceArea={{
                locations: region.locations
            }}
        />
    );
}
