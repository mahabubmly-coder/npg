import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Blog - Immigration, Education & Travel Insights',
    description: 'Read our latest articles about studying in Malaysia, travel and tourism, visa updates, and immigration news.',
    url: '/blog',
    keywords: [
        'immigration blog',
        'study abroad blog',
        'Malaysia education',
        'visa updates',
        'travel Malaysia',
        'education news',
    ],
});

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
