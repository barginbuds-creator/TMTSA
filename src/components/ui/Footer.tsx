import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
                    {/* 1. Brand & CTA */}
                    <div className="md:col-span-1">
                        <Link href="/" className="block relative h-12 w-48 mb-6">
                            <Image
                                src="/images/tmt-logo-new.png"
                                alt="The Maintenance Team Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                            Cape Town&apos;s leading specialists in structural repairs, waterproofing, and industrial coating solutions.
                        </p>
                        <Link href="/contact" className="inline-block bg-tmt-orange text-white px-6 py-3 font-bold rounded-lg text-sm hover:bg-orange-600 transition-colors uppercase tracking-wider">
                            Get a Free Quote
                        </Link>
                    </div>

                    {/* 2. Services */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-widest text-zinc-500">Expertise</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href="/services/waterproofing" className="hover:text-tmt-orange transition-colors">Waterproofing</Link></li>
                            <li><Link href="/services/painting" className="hover:text-tmt-orange transition-colors">Roof Painting</Link></li>
                            <li><Link href="/services/structural-repairs" className="hover:text-tmt-orange transition-colors">Structural Repairs</Link></li>
                            <li><Link href="/services/cleaning" className="hover:text-tmt-orange transition-colors">High-Pressure Cleaning</Link></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-widest text-zinc-500">Company</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href="/about" className="hover:text-tmt-orange transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-tmt-orange transition-colors">Insights & Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-tmt-orange transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-tmt-orange transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-widest text-zinc-500">Contact</h4>
                        <ul className="space-y-6 text-zinc-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-tmt-orange flex-shrink-0" />
                                <span>Table View, Cape Town,<br />Western Cape, 7441</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-tmt-orange flex-shrink-0" />
                                <a href="tel:+27211234567" className="hover:text-white transition-colors">+27 21 123 4567</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-tmt-orange flex-shrink-0" />
                                <a href="mailto:info@tmtsa.co.za" className="hover:text-white transition-colors">info@tmtsa.co.za</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} The Maintenance Team (Pty) Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
