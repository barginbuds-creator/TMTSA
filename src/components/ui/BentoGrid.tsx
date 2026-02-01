import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    cta = "Learn More",
}: {
    className?: string;
    title: string;
    description: string;
    header?: ReactNode;
    icon?: ReactNode;
    href?: string;
    cta?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 border border-neutral-200 group/bento hover:border-black transition duration-500 overflow-hidden relative bg-white h-full",
                className
            )}
        >
            <div className="h-full w-full absolute inset-0 z-0">
                {header}
                {/* Lighter, more architectural gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover/bento:opacity-90" />
            </div>

            <div className="absolute top-6 left-6 z-20 transition-colors duration-300">
                {icon}
            </div>

            <div className="absolute bottom-6 left-6 z-20 pr-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-2 uppercase tracking-wide">
                    {title}
                </h3>
                <p className="font-sans font-normal text-zinc-600 text-sm mb-4 max-w-[90%]">
                    {description}
                </p>
                {href && (
                    <Link href={href} className="flex items-center text-tmt-orange text-sm font-semibold tracking-wider hover:underline gap-1">
                        {cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    );
};
