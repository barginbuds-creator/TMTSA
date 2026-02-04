import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') || `upload-${Date.now()}.png`;

    // Use the BLOB_READ_WRITE_TOKEN from environment automatically
    const blob = await put(filename, request.body as ReadableStream, {
        access: 'public',
    });

    return NextResponse.json(blob);
}
