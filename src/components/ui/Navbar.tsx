"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-white/90 backdrop-blur-md border-zinc-200 py-4 shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-32 md:h-16 md:w-48 transition-transform hover:scale-105">
                    <Image
                        src="/images/logo.png"
                        alt="The Maintenance Team"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className={cn(
                    "hidden md:flex items-center gap-8 font-heading font-medium text-sm tracking-widest uppercase transition-colors",
                    scrolled ? "text-zinc-900" : "text-white"
                )}>
                    <Link href="/" className="hover:text-tmt-orange transition-colors">Home</Link>
                    <Link href="/#services" className="hover:text-tmt-orange transition-colors">Services</Link>
                    <Link href="/blog" className="hover:text-tmt-orange transition-colors">Blog</Link>
                    <Link href="/contact" className="bg-white text-black px-6 py-2 font-bold hover:bg-tmt-orange hover:text-white transition-colors">
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder for now) */}
                <div className="md:hidden text-white">
                    <span className="text-xs font-bold border border-white/20 px-2 py-1 rounded">MENU</span>
                </div>
            </div>
        </nav>
    );
};
