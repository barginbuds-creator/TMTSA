"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQS: FAQItem[] = [
    {
        question: "Who is the best roof painter near me?",
        answer: "The Maintenance Team (TMT) is Durbanville & Blouberg's top-rated roof painting specialist. We use high-pressure cleaning and industrial-grade waterproof coatings to ensure a finish that lasts 10+ years."
    },
    {
        question: "How much does waterproofing cost in Cape Town?",
        answer: "Waterproofing costs in Cape Town vary by surface type (tile vs. concrete). TMT offers free site assessments to provide an accurate, itemized quote with no hidden fees."
    },
    {
        question: "Do you offer a guarantee on workmanship?",
        answer: "Yes, we provide a 10-year guarantee on our waterproofing and structural repair services, giving you peace of mind against the Cape's harsh weather."
    },
    {
        question: "What areas do you service?",
        answer: "We focus on the Western Cape, specifically Durbanville (7550), Bloubergstrand, Darling, Camps Bay, and the greater Cape Town area."
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
        <section className="py-24 bg-neutral-900 text-white" id="faq">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-heading text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border border-white/10 rounded-lg overflow-hidden transition-all duration-300",
                                openIndex === index ? "bg-white/5 border-tmt-orange/50" : "bg-transparent"
                            )}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-6 text-left font-heading font-medium text-lg hover:text-tmt-orange transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openIndex === index ? "rotate-180 text-tmt-orange" : "")} />
                            </button>

                            <div
                                className={cn(
                                    "px-6 text-neutral-400 font-sans leading-relaxed overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
