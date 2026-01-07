import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Colleges in Malaysia',
    description: 'Find colleges in Malaysia offering diploma, certificate, and foundation programs for local and international students.',
    url: '/study-malaysia/colleges',
    keywords: [
        'colleges Malaysia',
        'diploma programs Malaysia',
        'foundation programs',
        'study Malaysia',
        'higher education',
    ],
});

export default function CollegesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
