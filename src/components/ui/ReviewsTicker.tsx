"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const REVIEWS = [
    { name: "Sarah J.", text: "Professional, tidy, and on time. The painting looks amazing!", rating: 5 },
    { name: "Mike T.", text: "Saved our roof after the big storm. Highly recommend TMT.", rating: 5 },
    { name: "Johan V.", text: "Best waterproofing team in Durbanville.", rating: 5 },
    { name: "Emily R.", text: "Transformed our kitchen. Excellent workmanship.", rating: 5 },
    { name: "Dave K.", text: "Honest quotes and solid guarantee.", rating: 5 },
];

export const ReviewsTicker = () => {
    return (
        <div className="w-full bg-tmt-orange overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => ( // Repeat for infinite loop effect
                    <div key={i} className="flex items-center mx-8 text-black font-bold uppercase tracking-wider text-sm">
                        <span className="mr-2">"{review.text}" - {review.name}</span>
                        <div className="flex">
                            {[...Array(review.rating)].map((_, starI) => (
                                <Star key={starI} className="w-4 h-4 fill-white text-white" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
