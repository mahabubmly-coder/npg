import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'About Next Path Global',
    description: 'Learn about Next Path Global - your trusted partner for immigration, visa, and education consulting services in Malaysia.',
    url: '/about',
    keywords: [
        'about Next Path Global',
        'immigration consultant',
        'visa services Malaysia',
        'education consulting',
    ],
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
