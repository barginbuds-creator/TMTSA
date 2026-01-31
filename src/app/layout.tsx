import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Maintenance Team | Waterproofing & Painting Specialists",
  description: "Cape Town's No.1 specialists for waterproofing, painting, and structural repairs. Serving Durbanville, Blouberg, and greater Cape Town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-tmt-dark text-white`}
      >
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
