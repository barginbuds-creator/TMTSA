"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-md border-zinc-200 py-4 shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-32 md:h-16 md:w-48 transition-transform hover:scale-105 z-50">
                    <Image
                        src={scrolled || mobileMenuOpen ? "/images/tmt-logo-black-v2.png" : "/images/tmt-logo-white-v2.png"}
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
                    <Link href="/services" className="hover:text-tmt-orange transition-colors">Services</Link>
                    <Link href="/areas" className="hover:text-tmt-orange transition-colors">Areas</Link>
                    <Link href="/blog" className="hover:text-tmt-orange transition-colors">Blog</Link>
                    <Link href="/contact" className="bg-zinc-900 text-white px-6 py-2 font-bold hover:bg-tmt-orange transition-colors">
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={cn(
                        "md:hidden flex items-center gap-2 z-50 font-bold uppercase tracking-widest text-xs border px-3 py-2 rounded transition-colors",
                        scrolled || mobileMenuOpen
                            ? "border-zinc-200 text-zinc-900 hover:bg-zinc-100"
                            : "border-white/30 text-white hover:bg-white/10"
                    )}
                >
                    <span className="mt-0.5">Menu</span>
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-transform duration-300 ease-in-out md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex flex-col gap-6 text-2xl font-heading font-bold text-zinc-900 uppercase tracking-wide">
                        <Link href="/" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Home</Link>
                        <Link href="/services" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Services</Link>
                        <Link href="/areas" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Areas</Link>
                        <Link href="/blog" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Blog</Link>
                        <Link href="/contact" className="text-tmt-orange">Get a Quote</Link>
                    </div>

                    <div className="mt-auto pb-12">
                        <p className="text-zinc-400 text-sm mb-4">Contact Us</p>
                        <p className="text-xl font-bold text-zinc-900">076 630 0879</p>
                        <p className="text-zinc-500">info@tmtsa.co.za</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
