"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ROTATING_TEXTS = ["HOMES", "ROOFS", "WALLS", "VALUE"];

export const DynamicHero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-900">
            {/* Cinematic Background (Ken Burns Effect) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/hero-executive-white-gold.png"
                        alt="Executive White Marble & Gold | Light & Airy"
                        className="w-full h-full object-cover opacity-80"
                    />
                </motion.div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

                {/* Seamless Blend to Page Background (White) */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center pb-20">

                {/* Trusted Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 mx-auto"
                >
                    <div className="flex -space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-tmt-orange text-tmt-orange" />
                        ))}
                    </div>
                    <span className="text-white text-xs font-bold tracking-wide uppercase">Trusted by 500+ Local Homeowners</span>
                </motion.div>

                <h1 className="font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight uppercase drop-shadow-2xl mb-6">
                    <div>WE RESTORE</div>
                    <div className="h-[1.2em] relative overflow-hidden flex justify-center text-tmt-orange">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={ROTATING_TEXTS[index]}
                                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                exit={{ y: -50, opacity: 0, rotateX: 90 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                                className="block"
                            >
                                {ROTATING_TEXTS[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h1>

                <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
                    Cape Town&apos;s No.1 Specialists in Waterproofing, Painting & Structural Repairs.
                </p>

                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 bg-tmt-orange text-white font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden shadow-lg hover:shadow-tmt-orange/50 transition-all hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Link>

                    <Link
                        href="/services"
                        className="px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm rounded-lg"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/50 z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-black/40 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
};
