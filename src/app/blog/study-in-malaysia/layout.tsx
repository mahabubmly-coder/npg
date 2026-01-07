import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Study in Malaysia Blog',
    description: 'Discover everything about studying in Malaysia - university guides, admission tips, student life, and education insights.',
    url: '/blog/study-in-malaysia',
    keywords: [
        'study in Malaysia',
        'Malaysia education',
        'university Malaysia',
        'student life Malaysia',
        'international students',
    ],
});

export default function StudyInMalaysiaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
