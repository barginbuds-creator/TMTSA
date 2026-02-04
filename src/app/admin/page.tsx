import { LucideInbox, LucideUsers, LucideFileText } from 'lucide-react';
import { Card } from '@/components/ui/card'; // Using existing card or fallback divs

const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-neutral-500 font-medium text-sm">{title}</h3>
            <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
            </div>
        </div>
        <div className="text-3xl font-bold text-neutral-900">{value}</div>
    </div>
);

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading text-neutral-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="New Leads"
                    value="12"
                    icon={LucideInbox}
                    color="text-blue-500"
                />
                <StatCard
                    title="Subscribers"
                    value="348"
                    icon={LucideUsers}
                    color="text-green-500"
                />
                <StatCard
                    title="Active Posts"
                    value="5"
                    icon={LucideFileText}
                    color="text-purple-500"
                />
            </div>

            {/* Recent Activity or Welcome Message */}
            <div className="bg-white rounded-xl border border-neutral-200 p-8 text-center">
                <h2 className="text-xl font-bold text-neutral-900 mb-2">Welcome Back, Admin!</h2>
                <p className="text-neutral-500 max-w-lg mx-auto">
                    Select an option from the sidebar to manage your website content.
                </p>
            </div>
        </div>
    );
}
