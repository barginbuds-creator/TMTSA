"use client";

import { DynamicHero } from "@/components/ui/DynamicHero";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
    category: string;
};

const FAQS: FAQItem[] = [
    {
        category: "Services",
        question: "What is your typical lead time for new projects?",
        answer: "For residential waterproofing and painting, we typically book 2-3 weeks in advance. However, for urgent structural repairs, we reserve emergency slots to prevent further property damage."
    },
    {
        category: "Services",
        question: "Do you offer 'Spot Repairs' or only full overhauls?",
        answer: "We focus on comprehensive solutions that come with a guarantee. While we can perform targeted repairs, we often recommend treating the entire affected area to ensure a uniform finish and long-term protection."
    },
    {
        category: "Services",
        question: "What specific waterproofing systems do you use?",
        answer: "We use industrial-grade torch-on systems for flat roofs and specialized acrylic/fiber reinforcement for parapets and flashings. All materials are SABS approved and selected for the Cape's specific climate conditions."
    },
    {
        category: "Billing & Warranty",
        question: "How does your 10-year guarantee work?",
        answer: "Our guarantee covers both workmanship and materials. If any failure occurs due to application error or material defect within 10 years, we repair it at zero cost to you. This is documented in your final handover certificate."
    },
    {
        category: "Billing & Warranty",
        question: "Do you require a deposit?",
        answer: "Yes, a 50% deposit is required to secure your booking and materials. The remaining balance is due strictly upon successful project completion and client sign-off."
    },
    {
        category: "Areas",
        question: "Do you service the Southern Suburbs?",
        answer: "Our primary hub is the Western Seaboard (Blouberg, Melkbos) and Northern Suburbs (Durbanville). However, we do service premium properties in Camps Bay, Clifton, and Bishopscourt for larger scale projects."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            {/* 1. Subtle Header Section (No Giant Hero) */}
            <section className="pt-32 pb-16 px-4 container mx-auto text-center">
                <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 tracking-tight uppercase">
                    Client <span className="text-tmt-orange">Support</span>
                </h1>
                <p className="font-sans text-tmt-grey text-lg max-w-2xl mx-auto leading-relaxed">
                    Common questions regarding our premium waterproofing, painting, and structural repair services.
                </p>
            </section>

            {/* 2. FAQ Accordion */}
            <section className="pb-32 px-4 container mx-auto max-w-4xl">
                <div className="space-y-0 border-t border-black/10">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-black/10 group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-8 text-left hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-sm"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                    <span className="text-xs font-bold text-tmt-orange uppercase tracking-widest min-w-[120px]">
                                        {faq.category}
                                    </span>
                                    <span className={cn(
                                        "font-heading font-bold text-xl md:text-2xl transition-colors duration-300",
                                        openIndex === index ? "text-black" : "text-neutral-600 group-hover:text-black"
                                    )}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <div className={cn(
                                        "w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 transition-all duration-300",
                                        openIndex === index ? "bg-tmt-dark border-tmt-dark text-white" : "text-neutral-400 group-hover:border-tmt-orange group-hover:text-tmt-orange"
                                    )}>
                                        {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pl-0 md:pl-[152px] pr-4 text-neutral-500 text-lg leading-relaxed font-sans">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
