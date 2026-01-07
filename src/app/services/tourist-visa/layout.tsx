import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Tourist Visa Services',
    description: 'Professional tourist visa consulting services for 26+ countries. Expert guidance for visa applications, document preparation, and visa processing assistance.',
    url: '/services/tourist-visa',
    keywords: [
        'tourist visa',
        'visa services',
        'visa application',
        'travel visa',
        'visa consulting',
        'visa assistance',
        'Malaysia visa services',
        'visa processing',
    ],
});

export default function TouristVisaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
