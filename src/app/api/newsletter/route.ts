import { db } from '@/db';
import { newsletterSubs, quoteRequests } from '@/db/schema';
import { NextResponse } from 'next/server';

// POST /api/newsletter
export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

        await db.insert(newsletterSubs).values({ email }).onConflictDoNothing();
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
