import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { Droplets, Home, Paintbrush, ShieldCheck, Star, Wrench } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-tmt-orange selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <DynamicHero />

      {/* 2. SERVICES SECTION (Bento Grid) */}
      <section className="py-24 px-4 container mx-auto" id="services">
        <div className="mb-16 text-center">
          <h2 className="text-tmt-orange font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Industrial Specificity. <br />
            <span className="text-neutral-500">Residential Care.</span>
          </h3>
        </div>

        <BentoGrid className="max-w-6xl mx-auto h-auto md:h-[600px] auto-rows-[minmax(0,1fr)]">
          {/* Large Tile: Waterproofing */}
          <BentoCard
            className="md:col-span-2 md:row-span-2 relative bg-zinc-900"
            title="Advanced Waterproofing"
            description="From lateral damp treatments to torch-on roofing systems. We use industrial-grade sealants to protect your home from the Cape storms."
            cta="See Solutions"
            href="/services/waterproofing"
            icon={<Droplets className="w-12 h-12" />}
            header={
              <div className="absolute inset-0 grayscale opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover' }} />
            }
          />

          {/* Medium Tile: Painting */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-neutral-900"
            title="Premium Painting"
            description="Interior & Exterior coatings with a 10-year guarantee."
            icon={<Paintbrush className="w-8 h-8" />}
            href="/services/painting"
            header={
              <div className="absolute inset-0 bg-neutral-800" />
            }
          />

          {/* Small Tile: Cleaning */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-neutral-900"
            title="High-Pressure Cleaning"
            description="Restore your roof and paving to brand new."
            icon={<Wrench className="w-8 h-8" />}
            href="/services/cleaning"
            header={
              <div className="absolute inset-0 bg-zinc-800" />
            }
          />
        </BentoGrid>
      </section>

      {/* 3. PROJECT SPOTLIGHT (Before/After) */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 border border-tmt-orange/30 rounded-full px-4 py-1 text-tmt-orange text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-current" /> Project Spotlight
              </div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Camps Bay <br />Structural Repair
              </h3>
              <div className="space-y-6 text-neutral-400 font-sans text-lg">
                <p>
                  <strong className="text-white">The Challenge:</strong> Severe salt damage and failing waterproofing led to interior leaks and structural cracks.
                </p>
                <p>
                  <strong className="text-white">The Solution:</strong> We stripped the roof back to concrete, applied a 4mm torch-on system, and sealed all lateral walls with hydrophobic coatings.
                </p>
                <div className="flex items-center gap-2 text-white font-bold mt-8">
                  <ShieldCheck className="w-6 h-6 text-tmt-orange" />
                  10-Year Water-Tight Guarantee
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <BeforeAfterSlider
                beforeImage="/images/roof-dirty.jpg"
                afterImage="/images/roof-clean.jpg"
                className="shadow-2xl shadow-black/50 border border-white/10"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. TRUST / FOOTER PLACEHOLDER */}
      <footer className="py-20 bg-black text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-8">Ready to Restore Value?</h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Get a detailed, itemized quote within 24 hours. No hidden costs.</p>
        {/* WhatsApp Float Placeholder */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2">
            <span className="font-bold hidden md:inline">Chat on WhatsApp</span>
            {/* WhatsApp Icon SVG would go here */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.664-.698c1.025.592 2.072.88 3.327.88 3.18 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-5.77-5.77zm-.52 8.56c-.252.016-.407-.11-.58-.16-.957-.272-1.74-.75-2.292-1.282-.576-.554-1.016-1.306-1.248-2.18-.088-.33.093-.538.307-.655.127-.066.23-.083.33-.11.085-.022.188-.035.297-.04.14-.006.28.02.404.09.136.077.587 1.458.647 1.57.06.113.1.25.04.425-.06.175-.247.388-.37.525-.138.152-.225.21-.08.463.364.636 1.056 1.343 1.84 1.8.256.15.524.234.782.26.257.026.43-.105.584-.257.17-.168.397-.565.552-.525.155.04 1.002.472 1.17.55.17.078.283.116.324.186.04.07.04.407-.13.882-.17.476-.994.664-1.36.68z" /></svg>
          </button>
        </div>
      </footer>
    </main>
  );
}
