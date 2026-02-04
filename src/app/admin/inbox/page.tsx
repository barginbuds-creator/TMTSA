import { db } from '@/db';
import { quoteRequests } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function InboxPage() {
    const quotes = await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-heading text-neutral-900">Inbox (Quote Requests)</h1>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100/5 text-neutral-500 uppercase tracking-wider font-medium text-xs">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Service</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {quotes.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-neutral-400">No quote requests yet.</td>
                            </tr>
                        ) : (
                            quotes.map((quote) => (
                                <tr key={quote.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="px-6 py-4 text-neutral-400 font-mono text-xs">
                                        {format(new Date(quote.createdAt), 'MMM d, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-neutral-900">
                                        {quote.name}
                                        {quote.phone && <div className="text-xs font-normal text-neutral-400">{quote.phone}</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-medium">
                                            {quote.serviceType || 'General'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">{quote.email}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                quote.status === 'contacted' ? 'bg-green-100 text-green-800' :
                                                    'bg-neutral-100 text-neutral-800'
                                            }`}>
                                            {quote.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-tmt-orange hover:text-orange-700 font-bold text-xs uppercase tracking-wide">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
