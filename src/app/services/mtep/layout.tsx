import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'MTEP - Malaysia Tech Entrepreneur Programme | Next Path Global',
    description: 'Expert advisory for the Malaysia Tech Entrepreneur Programme (MTEP). Secure 1-year or 5-year passes for new and established tech founders to launch and scale startups in Malaysia.',
    url: '/services/mtep',
    keywords: [
        'MTEP',
        'Malaysia Tech Entrepreneur Programme',
        'MTEP visa',
        'MDEC tech entrepreneur',
        'Malaysia startup visa',
        'tech founder visa Malaysia',
        'residence pass talent',
        'Malaysia digital hub',
        'Malaysia residency for entrepreneurs',
    ],
});

export default function MTEPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
