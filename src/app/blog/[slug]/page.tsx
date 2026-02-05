import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    try {
        if (process.env.POSTGRES_URL) {
            const post = await db.query.blogPosts.findFirst({
                where: eq(blogPosts.slug, resolvedParams.slug),
            });

            if (post) {
                return {
                    title: `${post.title} | TMT Blog`,
                    openGraph: {
                        title: post.title,
                        images: post.imageUrl ? [{ url: post.imageUrl }] : [],
                        type: "article",
                        publishedTime: post.createdAt.toISOString(),
                    },
                };
            }
        }
    } catch (e) {
        // Fallback
    }

    return {
        title: "Expert Advice | TMT Blog",
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    let post = null;
    try {
        if (process.env.POSTGRES_URL) {
            post = await db.query.blogPosts.findFirst({
                where: eq(blogPosts.slug, resolvedParams.slug),
            });
        }
    } catch (e) {
        console.warn("Blog post fetch failed during build:", e);
    }

    if (!post && process.env.POSTGRES_URL) {
        notFound();
    }

    // Fallback for build time without DB
    if (!post) {
        return <div className="min-h-screen pt-32 text-center text-white">Post content unavailable during build.</div>;
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-20">
            <article className="container mx-auto px-4 max-w-4xl">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center text-neutral-400 hover:text-tmt-orange hover:translate-x-[-4px] transition-all mb-8 font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-tmt-orange mb-6 font-bold uppercase tracking-widest">
                        <span className="bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">Tips</span>
                        <span className="flex items-center gap-2 text-neutral-500 normal-case font-normal">
                            <Calendar className="w-4 h-4" /> {format(new Date(post.createdAt), 'MMM d, yyyy')}
                        </span>
                        <span className="flex items-center gap-2 text-neutral-500 normal-case font-normal">
                            <User className="w-4 h-4" /> TMT Team
                        </span>
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {post.imageUrl && (
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                {/* Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl 
                    prose-a:text-tmt-orange prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white prose-blockquote:border-l-tmt-orange prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / Tags */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <h4 className="text-sm uppercase tracking-widest font-bold text-neutral-500 mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4" /> Related Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {/* Tags could be added to DB schema later */}
                        <span className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-lg text-sm text-neutral-300">
                            Maintenance
                        </span>
                    </div>
                </div>

            </article>

            {/* CTA */}
            <section className="container mx-auto px-4 max-w-4xl mt-20">
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-12 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        {/* Abstract Shape or Logo Opacity could go here */}
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4">Need Expert Advice for Your Property?</h3>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Don&apos;t let minor maintenance issues become major structural failures. Contact TMT today for a free assessment.</p>
                    <Link href="/contact" className="inline-block bg-tmt-orange text-white px-8 py-4 font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                        Get a Free Quote
                    </Link>
                </div>
            </section>
        </main>
    );
}
