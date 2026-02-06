import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight } from 'lucide-react';
import { format } from "date-fns";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Project Gallery | The Maintenance Team",
    description: "Browse our recent waterproofing, painting, and renovation projects in Cape Town.",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function GalleryPage() {
    // Safe fetch for build
    let projectList: typeof projects.$inferSelect[] = [];
    try {
        if (process.env.POSTGRES_URL) {
            projectList = await db.select().from(projects).orderBy(desc(projects.createdAt));
        }
    } catch (e) {
        console.warn("Gallery DB fetch failed during build:", e);
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">
                        Our <span className="text-tmt-orange">Work</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        See the difference professional maintenance makes. Before and after transformations from across the Cape.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projectList.map((project) => (
                        <div key={project.id} className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-tmt-orange/50 transition-all duration-300">

                            {/* Images Comparison */}
                            <div className="relative h-64 md:h-80 w-full flex">
                                {/* Before Image */}
                                <div className="w-1/2 relative border-r border-white/20">
                                    {project.beforeImageUrl ? (
                                        <Image src={project.beforeImageUrl} alt="Before" fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600 text-xs">No Before Photo</div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white border border-white/10">Before</div>
                                </div>

                                {/* After Image */}
                                <div className="w-1/2 relative">
                                    {project.afterImageUrl ? (
                                        <Image src={project.afterImageUrl} alt="After" fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600 text-xs">No After Photo</div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-tmt-orange px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white shadow-lg">After</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 text-tmt-orange text-sm font-bold uppercase tracking-widest">
                                        <MapPin className="w-4 h-4" /> {project.location || 'Cape Town'}
                                    </div>
                                    <div className="text-neutral-500 text-xs font-mono">
                                        {format(new Date(project.createdAt), 'MMM yyyy')}
                                    </div>
                                </div>

                                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-tmt-orange transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                        Full Restoration
                                    </span>
                                    <Link href="/contact" className="text-sm font-bold text-white flex items-center gap-2 group/btn hover:text-tmt-orange transition-colors">
                                        Get Similar Results <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {projectList.length === 0 && (
                        <div className="col-span-full text-center py-20 bg-neutral-900 rounded-2xl border border-white/5">
                            <p className="text-neutral-500 text-lg">New projects coming soon...</p>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <Link href="/contact" className="inline-block bg-white text-neutral-950 px-8 py-4 font-bold rounded-full hover:bg-tmt-orange hover:text-white transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1">
                        Start Your Project
                    </Link>
                </div>
            </div>
        </main>
    );
}
