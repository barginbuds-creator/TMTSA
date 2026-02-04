import { db } from '@/db';
import { newsletterSubs } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { format } from 'date-fns';
import { LucideDownload } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
    const subs = await db.select().from(newsletterSubs).orderBy(desc(newsletterSubs.createdAt));

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Newsletter Subscribers</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-bold text-neutral-700 hover:bg-neutral-50">
                    <LucideDownload className="w-4 h-4" /> Export CSV
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden max-w-2xl">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100/5 text-neutral-500 uppercase tracking-wider font-medium text-xs">
                        <tr>
                            <th className="px-6 py-4">Date Joined</th>
                            <th className="px-6 py-4">Email Address</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {subs.length === 0 ? (
                            <tr>
                                <td colSpan={2} className="px-6 py-8 text-center text-neutral-400">No subscribers yet.</td>
                            </tr>
                        ) : (
                            subs.map((sub) => (
                                <tr key={sub.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="px-6 py-4 text-neutral-400 font-mono text-xs">
                                        {format(new Date(sub.createdAt), 'MMM d, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-neutral-900">{sub.email}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
