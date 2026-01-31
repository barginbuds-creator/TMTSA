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
                "row-span-1 rounded-none group/bento hover:shadow-2xl transition duration-200 shadow-none p-0 bg-neutral-100 dark:bg-tmt-dark border-l-4 border-transparent hover:border-tmt-orange flex flex-col justify-between overflow-hidden relative",
                className
            )}
        >
            <div className="h-full w-full absolute inset-0 z-0">
                {header}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            </div>

            <div className="absolute top-4 left-4 z-20 text-zinc-400 group-hover/bento:text-tmt-orange transition-colors">
                {icon}
            </div>

            <div className="group-hover/bento:translate-x-2 transition duration-200 p-6 z-20 mt-auto">
                <h3 className="font-heading font-bold text-2xl text-zinc-900 mb-2 uppercase tracking-wide">
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
