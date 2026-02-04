import Script from 'next/script';

export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Maintenance Team",
        "image": "https://tmtsa.vercel.app/images/tmt-logo-dark.png",
        "telephone": "076 630 0879",
        "email": "info@themaintenanceteamsa.co.za",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "Place",
                "name": "Atlantic Seaboard"
            },
            {
                "@type": "Place",
                "name": "Southern Suburbs"
            },
            {
                "@type": "Place",
                "name": "Northern Suburbs"
            },
            {
                "@type": "Place",
                "name": "Winelands"
            },
            {
                "@type": "Place",
                "name": "City Bowl"
            }
        ],
        "url": "https://tmtsa.vercel.app/",
        "sameAs": [
            "https://www.facebook.com/TheMaintenanceTeamSA",
            "https://www.instagram.com/themaintenanceteamsa"
        ]
    };

    return (
        <Script
            id="schema-markup"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
