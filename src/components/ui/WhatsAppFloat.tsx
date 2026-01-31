"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const WhatsAppFloat = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show after 3 seconds for effect
        const timer = setTimeout(() => setVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <Link
            href="https://wa.me/27766300879?text=Hi%20TMT,%20I%20need%20a%20quote%20for..."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group animate-in slide-in-from-bottom-10 fade-in duration-500"
            aria-label="Chat on WhatsApp"
        >
            <div className="bg-white text-black text-sm font-bold py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute right-full mr-3 whitespace-nowrap hidden md:block">
                Chat with an Expert
            </div>

            <div className="bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-green-900/20 hover:scale-110 hover:rotate-3 transition-all duration-300 relative">
                <MessageCircle className="w-8 h-8 fill-current" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366]" />
            </div>
        </Link>
    );
};
