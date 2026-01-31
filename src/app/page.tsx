import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FAQ } from "@/components/ui/FAQ";
import { ReviewsTicker } from "@/components/ui/ReviewsTicker";
import { Droplets, Home, Paintbrush, ShieldCheck, Star, Wrench } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-tmt-orange selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <DynamicHero />

      {/* 2. SERVICES SECTION (Bento Grid) */}
      <section className="py-24 px-4 container mx-auto" id="services">
        <div className="mb-16 text-center">
          <h2 className="text-tmt-orange font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900">
            Industrial Specificity. <br />
            <span className="text-zinc-500">Residential Care.</span>
          </h3>
        </div>

        <BentoGrid className="max-w-6xl mx-auto h-auto md:h-[600px] auto-rows-[minmax(0,1fr)]">
          {/* Large Tile: Waterproofing */}
          <BentoCard
            className="md:col-span-2 md:row-span-2 relative bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100"
            title="Advanced Waterproofing"
            description="From lateral damp treatments to torch-on roofing systems. We use industrial-grade sealants to protect your home from the Cape storms."
            cta="See Solutions"
            href="/services/waterproofing"
            icon={<Droplets className="w-12 h-12 text-tmt-orange" />}
            header={
              <div className="absolute inset-0 grayscale opacity-10 mix-blend-multiply" style={{ backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover' }} />
            }
          />

          {/* Medium Tile: Painting */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100"
            title="Premium Painting"
            description="Interior & Exterior coatings with a 10-year guarantee."
            icon={<Paintbrush className="w-8 h-8 text-tmt-orange" />}
            href="/services/painting"
            header={
              <div className="absolute inset-0 bg-zinc-50" />
            }
          />

          {/* Small Tile: Cleaning */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100"
            title="High-Pressure Cleaning"
            description="Restore your roof and paving to brand new."
            icon={<Wrench className="w-8 h-8 text-tmt-orange" />}
            href="/services/cleaning"
            header={
              <div className="absolute inset-0 bg-zinc-50" />
            }
          />
        </BentoGrid>
      </section>

      {/* 3. PROJECT SPOTLIGHT (Before/After) */}
      <section className="py-24 bg-zinc-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 border border-tmt-orange/30 rounded-full px-4 py-1 text-tmt-orange text-xs font-bold uppercase tracking-widest mb-6 bg-white shadow-sm">
                <Star className="w-3 h-3 fill-current" /> Project Spotlight
              </div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Becott Heights <br />Restoration
              </h3>
              <div className="space-y-6 text-zinc-600 font-sans text-lg">
                <p>
                  <strong className="text-zinc-900">Scope of Work:</strong> Leaking balconies were causing significant structural damage, including deep cracks and spalling concrete.
                </p>
                <p>
                  <strong className="text-zinc-900">The Solution:</strong> A comprehensive waterproofing overhaul and structural repair. We treated the damage at the source and applied a fresh, weather-resistant coating.
                </p>
                <p className="italic text-sm text-zinc-500">
                  "Another large project almost completed. Trusted by 90% of all leading property agencies throughout the Western Cape."
                </p>
                <div className="flex items-center gap-2 text-zinc-900 font-bold mt-8">
                  <ShieldCheck className="w-6 h-6 text-tmt-orange" />
                  Work In Progress (Winter Prep)
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <BeforeAfterSlider
                beforeImage="/images/projects/becott/becott-1.jpg"
                afterImage="/images/projects/becott/becott-2.jpg"
                className="shadow-2xl shadow-zinc-900/10 border-[4px] border-white"
              />
              <p className="text-xs text-center text-zinc-400 mt-2 uppercase tracking-widest">Slide to compare Before / During</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REVIEWS TICKER */}
      <section className="py-12 bg-tmt-orange">
        <h2 className="sr-only">Client Reviews</h2>
        <ReviewsTicker />
      </section>

      {/* 5. FAQ SECTION */}
      <FAQ />

    </main>
  );
}
