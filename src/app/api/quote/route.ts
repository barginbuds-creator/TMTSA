import { db } from '@/db';
import { quoteRequests } from '@/db/schema';
import { NextResponse } from 'next/server';

// POST /api/quote
export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Basic validation
        if (!data.name || !data.email) {
            return NextResponse.json({ error: 'Name and Email required' }, { status: 400 });
        }

        await db.insert(quoteRequests).values({
            name: data.name,
            email: data.email,
            phone: data.phone,
            serviceType: data.serviceType,
            message: data.message,
            status: 'pending'
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Quote error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
