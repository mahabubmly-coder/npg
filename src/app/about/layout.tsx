import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'About Us | NextPath Global - Education, Residency & Visa Consultancy',
    description: 'Learn about NextPath Global Sdn Bhd - your trusted partner for Global Higher Education, MM2H & PVIP Residency, Turkish Citizenship by Investment, De Rantau & MTEP Tech Passes, Employment Passes, and Worldwide Tourist Visas.',
    url: '/about',
    keywords: [
        'about NextPath Global',
        'NextPath Global Sdn Bhd',
        'immigration consultant Malaysia',
        'study abroad consultancy',
        'MM2H consultancy',
        'PVIP Malaysia',
        'Turkish citizenship by investment',
        'De Rantau digital nomad visa',
        'MTEP tech entrepreneur pass',
        'Employment Pass Malaysia',
        'tourist visa services Malaysia',
    ],
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
