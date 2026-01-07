import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Payment Methods',
    description: 'Learn about the various payment methods accepted by Next Path Global for immigration, visa, and education consulting services.',
    url: '/payment-methods',
    keywords: [
        'payment methods',
        'visa payment',
        'immigration payment',
        'payment options',
    ],
});

export default function PaymentMethodsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
