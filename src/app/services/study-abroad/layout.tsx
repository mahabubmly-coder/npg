import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Study Abroad Consulting Services',
    description: 'Expert study abroad consulting for international students. University selection, application assistance, student visa processing, and pre-departure guidance.',
    url: '/services/study-abroad',
    keywords: [
        'study abroad',
        'international education',
        'student visa',
        'university admission',
        'education consulting',
        'study overseas',
        'student services',
        'admission assistance',
    ],
});

export default function StudyAbroadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
