import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google"; // High-end Geometric Sans
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
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
  title: "The Maintenance Team | Waterproofing & Painting Specialists",
  description: "Cape Town's No.1 specialists for waterproofing, painting, and structural repairs. Serving Durbanville, Blouberg, and greater Cape Town.",
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
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
