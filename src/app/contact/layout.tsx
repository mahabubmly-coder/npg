import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Contact Us',
    description: 'Get in touch with Next Path Global for immigration, visa, and education consulting services. We\'re here to help you achieve your global goals.',
    url: '/contact',
    keywords: [
        'contact',
        'immigration consultant contact',
        'visa services contact',
        'get in touch',
    ],
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
