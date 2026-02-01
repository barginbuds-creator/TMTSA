"use client";

import { Star } from "lucide-react";

const REVIEWS = [
    { name: "Sarah J.", date: "2 days ago", text: "Professional, tidy, and on time. The painting looks amazing!", rating: 5 },
    { name: "Mike T.", date: "1 week ago", text: "Saved our roof after the big storm. Highly recommend TMT.", rating: 5 },
    { name: "Johan V.", date: "3 weeks ago", text: "Best waterproofing team in Durbanville.", rating: 5 },
    { name: "Emily R.", date: "a month ago", text: "Transformed our kitchen. Excellent workmanship.", rating: 5 },
    { name: "Dave K.", date: "2 months ago", text: "Honest quotes and solid guarantee.", rating: 5 },
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export const ReviewsTicker = () => {
    return (
        <div className="w-full bg-[#f8f9fa] overflow-hidden py-16 border-y border-zinc-200">
            {/* Google Header */}
            <div className="flex justify-center items-center gap-2 mb-10">
                <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                </div>
                <span className="font-bold text-zinc-700 text-lg">5.0</span>
                <span className="text-zinc-500 text-sm">(124 Google Reviews)</span>
            </div>

            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max cursor-default">
                {/* We repeat the reviews list multiple times to ensure a smooth infinite loop */}
                {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                    <div key={i} className="mx-4 w-[380px] shrink-0">
                        <div className="group bg-white p-5 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">

                            {/* Header: User & Google Logo */}
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-tmt-orange/10 flex items-center justify-center text-tmt-orange font-bold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-zinc-900 text-sm">{review.name}</p>
                                        <p className="text-zinc-400 text-xs">{review.date}</p>
                                    </div>
                                </div>
                                <GoogleLogo />
                            </div>

                            {/* Stars */}
                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, starI) => (
                                    <Star key={starI} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-zinc-600 text-sm leading-relaxed line-clamp-4">
                                {review.text}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
