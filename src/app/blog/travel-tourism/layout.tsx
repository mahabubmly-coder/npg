import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Travel & Tourism in Malaysia',
    description: 'Discover Malaysia\'s attractions, travel tips, and tourism insights. Read our latest articles about traveling and exploring Malaysia.',
    url: '/blog/travel-tourism',
    keywords: [
        'Malaysia travel',
        'tourism Malaysia',
        'visit Malaysia',
        'Malaysia attractions',
        'travel tips Malaysia',
        'Malaysia destinations',
        'explore Malaysia',
    ],
});

export default function TravelTourismLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
