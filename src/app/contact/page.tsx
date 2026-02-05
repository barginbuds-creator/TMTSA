import { BadgeCheck, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us | The Maintenance Team",
    description: "Get a free, no-obligation quote for waterproofing, painting, and renovations in Cape Town.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-tmt-dark text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6">Get a Quote</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Industrial precision for your residential needs. Contact us today for a site assessment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 bg-neutral-900/50 p-8 rounded-2xl border border-white/10">
                        <h2 className="font-heading text-3xl font-bold text-tmt-orange mb-8">Contact Details</h2>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone / WhatsApp</h3>
                                <a href="tel:+27766300879" className="text-xl hover:text-tmt-orange transition-colors">+27 76 630 0879</a>
                                <p className="text-sm text-neutral-500 mt-1">Available 08:00 - 17:00 (Mon-Fri)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <a href="mailto:info@themaintenanceteamsa.co.za" className="text-xl hover:text-tmt-orange transition-colors">info@themaintenanceteamsa.co.za</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Service Areas</h3>
                                <p className="text-neutral-300">Durbanville, Blouberg, Table View, Camps Bay, Darling, and Greater Cape Town.</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-tmt-orange" />
                                Why Choose TMT?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>Satisfaction Guarantee on all workmanship</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>10-Year Waterproofing Warranty</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>No hidden costs - Itemized quotes</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Placeholder */}
                    <div className="bg-neutral-900 p-8 rounded-2xl border border-white/10">
                        <h2 className="font-heading text-3xl font-bold text-white mb-2">Request Assessment</h2>
                        <p className="text-neutral-400 mb-8">Fill in your details and we&apos;ll call you back.</p>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
