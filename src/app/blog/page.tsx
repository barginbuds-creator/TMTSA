import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";

export const metadata: Metadata = {
    title: "Expert Advice | The Maintenance Team Blog",
    description: "Insights on waterproofing, structural repairs, and painting in Cape Town. Expert tips to protect your property value.",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogListingPage() {
    // Data fetching with error handling for build environment
    let posts: typeof blogPosts.$inferSelect[] = [];
    try {
        if (process.env.POSTGRES_URL) {
            posts = await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true)).orderBy(desc(blogPosts.createdAt));
        }
    } catch (error) {
        console.warn("Database connection failed during build/render:", error);
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">
                        Insights & <span className="text-tmt-orange">Expertise</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Technical guides, case studies, and maintenance tips from Cape Town&apos;s leading property restoration specialists.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-tmt-orange/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                {post.imageUrl ? (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-tmt-orange border border-white/10">
                                    Tips
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {format(new Date(post.createdAt), 'MMM d, yyyy')}
                                    </span>
                                    {/* <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> 5 min read
                                    </span> */}
                                </div>

                                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-tmt-orange transition-colors">
                                    {post.title}
                                </h3>
                                {/* 
                                <p className="text-neutral-400 text-sm line-clamp-3 mb-6 flex-grow">
                                    {post.excerpt}
                                </p> 
                                */}

                                <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform mt-auto pt-6">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 text-tmt-orange" />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-neutral-500">
                            No articles published yet. Check back soon!
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
