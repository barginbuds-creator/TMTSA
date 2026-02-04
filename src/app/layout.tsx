import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google"; // High-end Geometric Sans
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope", // Replaces Inter for Body
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", // Replaces Space Grotesk for Headings
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | The Maintenance Team Cape Town',
    default: 'The Maintenance Team | Waterproofing & Painting Specialists',
  },
  description: "Cape Town's No.1 specialists for waterproofing, painting, and structural repairs. Serving Durbanville, Blouberg, and greater Cape Town.",
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://tmtsa.vercel.app/',
    siteName: 'The Maintenance Team',
    images: [
      {
        url: '/images/tmt-og-image.png', // Ensure this image exists or use a default
        width: 1200,
        height: 630,
        alt: 'The Maintenance Team - Cape Town Property Specialists',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${outfit.variable} antialiased`}
      >
        <SchemaMarkup />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
