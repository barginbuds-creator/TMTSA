import { db } from '@/db';
import { blogPosts } from '@/db/schema';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const data = await req.json();

    // Validate data here if needed using Zod

    try {
        await db.insert(blogPosts).values({
            title: data.title,
            slug: data.slug,
            content: data.content,
            imageUrl: data.imageUrl,
            isPublished: data.isPublished,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to create post:', error);
        return NextResponse.json({ error: 'Database Error' }, { status: 500 });
    }
}
