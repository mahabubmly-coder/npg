import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'University Colleges in Malaysia',
    description: 'Discover university colleges in Malaysia offering diverse programs and quality education for local and international students.',
    url: '/study-malaysia/university-colleges',
    keywords: [
        'university colleges Malaysia',
        'higher education Malaysia',
        'study Malaysia',
        'university college programs',
    ],
});

export default function UniversityCollegesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
