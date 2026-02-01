"use client";

import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
    { name: "Sarah J.", role: "Homeowner", text: "Professional, tidy, and on time. The painting looks amazing!", rating: 5 },
    { name: "Mike T.", role: "Property Manager", text: "Saved our roof after the big storm. Highly recommend TMT.", rating: 5 },
    { name: "Johan V.", role: "Business Owner", text: "Best waterproofing team in Durbanville.", rating: 5 },
    { name: "Emily R.", role: "Homeowner", text: "Transformed our kitchen. Excellent workmanship.", rating: 5 },
    { name: "Dave K.", role: "Resident", text: "Honest quotes and solid guarantee.", rating: 5 },
];

export const ReviewsTicker = () => {
    return (
        <div className="w-full bg-tmt-orange overflow-hidden py-16">
            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
                {/* We repeat the reviews list multiple times to ensure a smooth infinite loop */}
                {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                    <div key={i} className="mx-4 w-[350px] relative group cursor-default">
                        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-tmt-orange/20 border-t border-white/50 h-full flex flex-col relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">

                            {/* Decorative Background Icon */}
                            <Quote className="absolute -top-2 -right-2 w-24 h-24 text-zinc-50 rotate-12" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, starI) => (
                                        <Star key={starI} className="w-5 h-5 fill-tmt-orange text-tmt-orange" />
                                    ))}
                                </div>

                                <p className="text-zinc-700 font-medium text-lg leading-relaxed mb-6 italic">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-tmt-orange font-bold text-lg border border-zinc-200">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-zinc-900 font-bold font-heading text-lg">{review.name}</p>
                                        <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
