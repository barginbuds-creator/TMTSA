"use client";

import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQS: FAQItem[] = [
    {
        question: "How quickly can you start a project?",
        answer: "We typically can schedule a site assessment within 48 hours. Once the quote is approved, our teams can usually start work within 5-7 working days, depending on our current project load and weather conditions."
    },
    {
        question: "Do you offer a guarantee on workmanship?",
        answer: "Yes, we providing industry-leading guarantees. Waterproofing comes with up to a 10-year guarantee, and structural repairs are covered by a comprehensive warranty plan. Terms and conditions apply based on the specific service."
    },
    {
        question: "What areas do you service?",
        answer: "We service the entire greater Cape Town area, including the Atlantic Seaboard, City Bowl, Southern Suburbs, Northern Suburbs (Durbanville, Bellville), and the Winelands."
    },
    {
        question: "Are your quotes free?",
        answer: "Yes, we offer free, no-obligation detailed quotes. Our project manager will visit your property to assess the scope of work and provide a comprehensive breakdown of costs."
    },
    {
        question: "Do you handle insurance claims?",
        answer: "Absolutely. We regularly work with body corporates and homeowners to provide the detailed technical reports and itemized quotes required for insurance claims processing."
    },
    {
        question: "Is your team insured?",
        answer: "Yes, The Maintenance Team carries full public liability insurance and all our staff are covered by Workmen's Compensation (COIDA), ensuring you have zero risk while we are on your property."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // JSON-LD for FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden" id="faq">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-tmt-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="font-bold text-tmt-orange uppercase tracking-wider text-sm mb-2 block">Support</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        Everything you need to know about our services, process, and guarantees.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white border rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index
                                    ? "border-tmt-orange/30 shadow-lg shadow-tmt-orange/5"
                                    : "border-zinc-200 hover:border-zinc-300 shadow-sm"
                            )}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className={cn(
                                    "font-heading font-bold text-lg md:text-xl transition-colors duration-300 pr-8",
                                    openIndex === index ? "text-tmt-orange" : "text-zinc-800 group-hover:text-zinc-900"
                                )}>
                                    {faq.question}
                                </span>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
                                    openIndex === index ? "bg-tmt-orange text-white rotate-180" : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                                )}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-6 md:p-8 pt-0 text-zinc-600 leading-relaxed text-base border-t border-transparent">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
