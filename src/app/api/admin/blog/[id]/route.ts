import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params;
        const id = parseInt(resolvedParams.id);
        const post = await db.query.blogPosts.findFirst({
            where: eq(blogPosts.id, id),
        });

        if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });

        return NextResponse.json(post);
    } catch (_error) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params;
        const id = parseInt(resolvedParams.id);
        const body = await request.json();

        // Separate id/createdAt from body to avoid updating them, if they are passed
        const { id: _, createdAt: __, ...updateData } = body;

        await db.update(blogPosts)
            .set(updateData)
            .where(eq(blogPosts.id, id));

        return NextResponse.json({ success: true });
    } catch (_error) { // Renamed error to _error
        console.error("Update error:", _error); // Changed error to _error
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
    }
}

export async function DELETE(
    { params }: { params: Promise<{ id: string }> } // Correct type for async params
) {
    try {
        const { id } = await params;
        await db.delete(blogPosts).where(eq(blogPosts.id, parseInt(id)));
        return NextResponse.json({ success: true });
    } catch (_error) {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
