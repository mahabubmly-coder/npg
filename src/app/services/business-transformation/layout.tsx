import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Business & Digital Transformation Services | NextPath Global',
    description: 'Connect your business goals with the right strategy, technology, and execution. Strategy consulting, digital transformation, architecture modernization, AI, and cybersecurity.',
    url: '/services/business-transformation',
    image: '/assets/business-transformation/hero.jpg',
    keywords: [
        'Business Transformation',
        'Digital Transformation',
        'Technology Advisory',
        'Artificial Intelligence consulting',
        'AI Automation',
        'Architecture Modernization',
        'Cybersecurity & Digital Trust',
        'Program Delivery',
        'NextPath Global Business Services',
    ],
});

export default function BusinessTransformationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
