import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Book an Appointment',
    description: 'Schedule a consultation with our immigration and education experts. Book your appointment online for personalized guidance.',
    url: '/book-appointment',
    keywords: [
        'book appointment',
        'consultation',
        'immigration consultation',
        'visa consultation',
        'schedule appointment',
    ],
});

export default function BookAppointmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
