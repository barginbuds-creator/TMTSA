import { db } from '@/db';
import { projects } from '@/db/schema';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const data = await req.json();

    try {
        await db.insert(projects).values({
            title: data.title,
            location: data.location,
            description: data.description,
            beforeImageUrl: data.beforeImageUrl,
            afterImageUrl: data.afterImageUrl,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to create project:', error);
        return NextResponse.json({ error: 'Database Error' }, { status: 500 });
    }
}
