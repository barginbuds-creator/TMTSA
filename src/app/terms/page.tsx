import { PageHero } from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | The Maintenance Team",
    description: "Terms and conditions for using our services.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Terms of Service"
                subtitle="Guidelines for our professional relationship."
                imageSrc="/images/hero-background.png"
                imageAlt="Terms"
                size="compact"
            />
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-zinc max-w-none">
                    <p className="lead">By engaging The Maintenance Team (TMT) for services, or by using this website, you agree to the following terms and conditions.</p>

                    <h3>1. Quotes and Estimates</h3>
                    <p>All quotes are valid for 14 days from the date of issue. While we strive for accuracy, the final cost may vary if unforeseen structural issues are discovered during the course of work. Any additional costs will be communicated and approved before proceeding.</p>

                    <h3>2. Payments</h3>
                    <p>A deposit of 50% is required to secure a booking date. The balance is due upon completion of the work. For larger projects, progress payments may be agreed upon in writing.</p>

                    <h3>3. Warranties</h3>
                    <p>We stand by our workmanship. Specific warranties (e.g., 10-Year Waterproofing Guarantee) will be issued in writing upon receipt of full payment. Warranties do not cover damage caused by extreme weather events, third-party interference, or lack of maintenance.</p>

                    <h3>4. Cancellations</h3>
                    <p>Cancellations made less than 48 hours before a scheduled appointment may incur a call-out fee. Deposits for materials already purchased are non-refundable.</p>

                    <h3>5. Liability</h3>
                    <p>TMT maintains comprehensive public liability insurance. However, we are not liable for pre-existing structural defects that may be uncovered during renovations.</p>
                </div>
            </div>
        </main>
    );
}
