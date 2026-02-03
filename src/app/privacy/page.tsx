import { PageHero } from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | The Maintenance Team",
    description: "Our commitment to protecting your data.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Privacy Policy"
                subtitle="Your data security is our priority."
                imageSrc="/images/hero-background.png"
                imageAlt="Privacy"
                size="compact"
            />
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-zinc max-w-none">
                    <p className="lead">At The Maintenance Team (TMT), we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>

                    <h3>1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you fill out a quote form, contact us via WhatsApp, or subscribe to our newsletter. This may include your name, email address, phone number, and property address.</p>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Provide and manage our maintenance services.</li>
                        <li>communicate with you about your quotes and appointments.</li>
                        <li>Send you updates, newsletters, and promotional offers (if opted in).</li>
                    </ul>

                    <h3>3. AI Quote Engine</h3>
                    <p>When you use our Visual Quote Engine, any images you upload are processed securely via third-party AI providers (Replicate) for the sole purpose of generating the visualization. We do not use your private property images for public marketing without your explicit consent.</p>

                    <h3>4. Data Sharing</h3>
                    <p>We do not sell your personal data. We may share information with trusted subcontractors solely for the purpose of executing work on your property (e.g., a specific roofing specialist), under strict confidentiality agreements.</p>

                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about this policy, please contact us at <a href="mailto:info@tmtsa.co.za">info@tmtsa.co.za</a>.</p>
                </div>
            </div>
        </main>
    );
}
