import { VisualQuoteEngine } from "@/components/VisualQuoteEngine";
import { PageHero } from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Quote Estimator | The Maintenance Team",
    description: "Get an instant visual estimate for your paving or roof restoration. Upload a photo and see the difference.",
};

export default function QuotePage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <PageHero
                title={<span>Smart <span className="text-tmt-orange">Quote</span> Engine</span>}
                subtitle="Instant pricing & AI visualization for your property."
                imageSrc="/images/hero-services-gold.png" // Reusing appropriate hero
                imageAlt="AI Maintenance Technology"
            />

            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto mb-10 text-center">
                    <h2 className="font-heading font-bold text-3xl mb-4">Visualize Your Renovation</h2>
                    <p className="text-neutral-600">
                        Not sure what difference a clean makes? Upload a photo of your dirty driveway or roof,
                        and our AI will show you the potential result instantly, along with an estimated price range.
                    </p>
                </div>

                <VisualQuoteEngine />

                <div className="mt-20 text-center">
                    <p className="text-neutral-400 text-sm">
                        *AI visualizations are for illustrative purposes only. Actual results may vary based on surface condition.
                    </p>
                </div>
            </section>
        </main>
    );
}
