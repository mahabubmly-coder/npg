import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Updates & Announcements',
    description: 'Latest news, policy changes, and important announcements about immigration, visa services, and study abroad programs.',
    url: '/blog/updates-announcements',
    keywords: [
        'visa updates',
        'immigration news',
        'policy changes',
        'announcements',
        'visa news Malaysia',
        'immigration updates',
    ],
});

export default function UpdatesAnnouncementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
