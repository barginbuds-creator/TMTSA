export type ServiceLocation = {
    slug: string;
    service: string;
    location: string;
    title: string;
    description: string;
    content: string; // HTML or Markdown content
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
    {
        slug: "waterproofing-cape-town",
        service: "Waterproofing",
        location: "Cape Town",
        title: "Best Waterproofing Contractors in Cape Town",
        description: "Expert waterproofing for roofs, balconies, and showers in Cape Town. 10-year guarantee.",
        content: "<p>We provide industrial-grade waterproofing...</p>" // Placeholder
    },
    {
        slug: "roof-painting-durbanville",
        service: "Roof Painting",
        location: "Durbanville",
        title: "Roof Painting Specialists Durbanville",
        description: "Restore your roof with our premium coatings in Durbanville.",
        content: "<p>Durbanville's weather requires special care...</p>"
    },
    {
        slug: "structural-repairs-blouberg",
        service: "Structural Repairs",
        location: "Blouberg",
        title: "Structural Repair Experts Blouberg",
        description: "Fixing salt-damage and cracks in Blouberg homes.",
        content: "<p>Sea spray damages concrete...</p>"
    }
];

export const getServiceBySlug = (slug: string) => SERVICE_LOCATIONS.find(s => s.slug === slug);
