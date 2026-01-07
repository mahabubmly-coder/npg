import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Universities in Malaysia',
    description: 'Explore top universities in Malaysia. Find public universities, private universities, and international branch campuses offering quality education.',
    url: '/study-malaysia/universities',
    keywords: [
        'universities in Malaysia',
        'Malaysian universities',
        'study in Malaysia',
        'university Malaysia',
        'higher education Malaysia',
        'international students Malaysia',
    ],
});

export default function UniversitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
