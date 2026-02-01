"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
}

export const PageHero = ({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) => {
    return (
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-tmt-dark">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Executive Gold Overlay: Minimal Dark for Contrast */}
                <div className="absolute inset-0 bg-black/10 z-10" />

                {/* Seamless Blend to Page Background (White) */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-heading font-black text-white/90 text-5xl md:text-8xl leading-tight tracking-tight uppercase drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-sans text-white/80 text-lg md:text-2xl mt-6 max-w-2xl mx-auto font-medium tracking-wide"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
