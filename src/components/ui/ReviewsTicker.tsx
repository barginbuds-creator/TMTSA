"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const REVIEWS = [
    { name: "Sarah Jenkins", role: "Residential", date: "2 days ago", text: "Professional, tidy, and on time. The painting team completely transformed our living space. Highly recommended!", rating: 5 },
    { name: "Michael Thorne", role: "Body Corporate", date: "1 week ago", text: "TMT saved our roof after the big storm. Their emergency response was incredible. Best waterproofing team in Cape Town.", rating: 5 },
    { name: "Johan van der Merwe", role: "Commercial", date: "3 weeks ago", text: "We use The Maintenance Team for all our industrial coating needs. Honest quotes and a solid guarantee every time.", rating: 5 },
    { name: "Emily Ross", role: "Renovation", date: "a month ago", text: "They managed our entire kitchen renovation from start to finish. The attention to detail was outstanding.", rating: 5 },
    { name: "David Klein", role: "Estate Manager", date: "2 months ago", text: "Finally a contractor that communicates well. The weekly reports and photo updates made my job so much easier.", rating: 5 },
    { name: "Lisa Grant", role: "Homeowner", date: "2 months ago", text: "Spotless paving cleaning and sealing. It looks brand new again. Thank you!", rating: 5 },
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export const ReviewsTicker = () => {
    return (
        <div className="w-full bg-zinc-50 overflow-hidden py-20 border-y border-zinc-200 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Google Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-100 mb-4">
                        <GoogleLogo />
                        <span className="font-bold text-zinc-800 text-sm">Google Rating</span>
                    </div>
                    <div className="flex justify-center items-center gap-1 mb-2">
                        <span className="font-bold text-4xl text-zinc-900">5.0</span>
                        <div className="flex text-[#FBBC05]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                    </div>
                    <p className="text-zinc-500 text-sm">Based on 138+ Verified Reviews</p>
                </div>

                {/* Marquee */}
                <div className="flex animate-marquee hover:[animation-play-state:paused] w-max cursor-grab active:cursor-grabbing pb-8">
                    {/* We repeat the reviews list multiple times to ensure a smooth infinite loop */}
                    {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                        <div key={i} className="mx-4 w-[400px] shrink-0">
                            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden">

                                {/* Decorative Quote */}
                                <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-50/80 fill-zinc-50 rotate-180 group-hover:text-tmt-orange/5 group-hover:fill-tmt-orange/5 transition-colors" />

                                {/* Header: User */}
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tmt-orange to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-zinc-900 text-sm">{review.name}</p>
                                            <p className="text-zinc-400 text-xs flex items-center gap-1">
                                                {review.role} <span className="w-1 h-1 rounded-full bg-zinc-300"></span> {review.date}
                                            </p>
                                        </div>
                                    </div>
                                    <GoogleLogo />
                                </div>

                                {/* Stars */}
                                <div className="flex mb-4 relative z-10">
                                    {[...Array(review.rating)].map((_, starI) => (
                                        <Star key={starI} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-zinc-600 text-sm leading-relaxed mb-4 relative z-10">
                                    &quot;{review.text}&quot;
                                </p>

                                <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-green-600 uppercase tracking-wider">
                                    <CheckCircle2 className="w-3 h-3" /> Verified Review
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}

            </div>
        </div>
    );
};
