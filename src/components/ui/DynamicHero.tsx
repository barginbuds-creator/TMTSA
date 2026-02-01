"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-tmt-dark">
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
                        src="/images/hero-executive-gold.png"
                        alt="Executive Gold Hotel Aesthetic | Black Marble & Gold"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Minimal Overlay to let the Gold Shine (Executive Gold Palette) */}
                <div className="absolute inset-0 bg-black/10 z-10" />

                {/* Seamless Blend to Page Background (Cream) */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center">
                <h1 className="font-heading font-black text-background text-5xl md:text-8xl leading-tight tracking-tight uppercase drop-shadow-2xl">
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

                <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-sans font-light drop-shadow-md">
                    Cape Town&apos;s No.1 Specialists in Waterproofing, Painting & Structural Repairs.
                </p>

                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 bg-tmt-orange text-white font-bold text-lg uppercase tracking-wider rounded-none overflow-hidden hover:shadow-[0_0_20px_rgba(135,124,116,0.5)] transition-shadow"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Liquid Fill Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </Link>

                    <Link
                        href="/services"
                        className="px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-tmt-dark/50 z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-tmt-dark/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-tmt-dark/50 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
};
