import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FAQ } from "@/components/ui/FAQ";
import { ReviewsTicker } from "@/components/ui/ReviewsTicker";
import { Droplets, Paintbrush, ShieldCheck, Star, Wrench } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <DynamicHero />

      {/* 2. SERVICES SECTION (Bento Grid) */}
      <section className="py-32 px-4 container mx-auto" id="services">
        <div className="mb-20 text-center">
          <h2 className="text-black font-bold tracking-[0.2em] uppercase mb-6 text-xs bg-neutral-100 inline-block px-4 py-2 rounded-full border border-neutral-200">
            Our Expertise
          </h2>
          <h3 className="font-heading text-5xl md:text-6xl font-black text-black tracking-tight leading-none">
            Industrial Power. <br />
            <span className="text-neutral-400 font-light">Residential Grace.</span>
          </h3>
        </div>

        <BentoGrid className="max-w-7xl mx-auto h-auto md:h-[600px] auto-rows-[minmax(0,1fr)]">
          {/* Large Tile: Waterproofing */}
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            title="Waterproofing"
            description="Lateral damp & roofing systems using industrial-grade sealants."
            cta="View Solutions"
            href="/services/waterproofing"
            icon={<Droplets className="w-10 h-10 text-white" />}
            header={
              <div className="absolute inset-0 grayscale contrast-125 brightness-75" style={{ backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover' }} />
            }
          />

          {/* Medium Tile: Painting */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-black"
            title="Painting"
            description="Premium interior & exterior coatings."
            icon={<Paintbrush className="w-8 h-8 text-neutral-400" />}
            href="/services/painting"
            header={
              <div className="absolute inset-0 bg-neutral-900" />
            }
          />

          {/* Small Tile: Cleaning */}
          <BentoCard
            className="md:col-span-1 md:row-span-1"
            title="Cleaning"
            description="High-pressure roof & paving restoration."
            icon={<Wrench className="w-8 h-8 text-neutral-400" />}
            href="/services/cleaning"
            header={
              <div className="absolute inset-0 bg-neutral-800" />
            }
          />
        </BentoGrid>
      </section>

      {/* 3. PROJECT SPOTLIGHT (Before/After) */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">

            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-2 border-black pl-4">
                Project Spotlight
              </div>
              <h3 className="font-heading text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.9]">
                Becott <br /><span className="text-neutral-400 font-light">Heights.</span>
              </h3>
              <div className="space-y-8 text-neutral-600 font-sans text-xl leading-relaxed">
                <p>
                  <strong className="text-black block mb-2 text-sm uppercase tracking-wide">The Challenge</strong>
                  Leaking balconies causing structural decay and spalling concrete.
                </p>
                <p>
                  <strong className="text-black block mb-2 text-sm uppercase tracking-wide">The Solution</strong>
                  Comprehensive waterproofing overhaul with industrial-grade finish.
                </p>

                <div className="flex items-center gap-3 text-black font-bold mt-12 pt-12 border-t border-neutral-200">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="uppercase tracking-widest text-sm">Certificate Issued</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <BeforeAfterSlider
                beforeImage="/images/projects/becott/becott-1.jpg"
                afterImage="/images/projects/becott/becott-2.jpg"
                className="shadow-2xl shadow-black/20 border-0"
              />
              <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-[0.3em]">Drag to Compare</p>
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
